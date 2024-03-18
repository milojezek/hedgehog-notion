import styled from "styled-components";
import { NodeData } from "../utils/types";
import { useRef, useEffect, FormEventHandler, KeyboardEventHandler } from "react";
import { nanoid } from "nanoid";

const BasicNodeContainer = styled.div`
  border-radius: 4px;
	padding: 6px 6px 6px 46px;
	cursor: text;
	width: 100%;
`;

type BasicNodeProps = {
  node: NodeData;
  updateFocusedIndex(index: number): void;
  isFocused: boolean;
  index: number;
  addNode(node: NodeData, index: number): void;
  removeNodeByIndex(index: number): void;
  changeNodeValue(index: number, value: string): void;
};

export const BasicNode = ({
  node,
  updateFocusedIndex,
  isFocused,
  index,
  addNode,
  removeNodeByIndex,
  changeNodeValue,
}: BasicNodeProps) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isFocused) {
      nodeRef.current?.focus();
    } else {
      nodeRef.current?.blur();
    }
  }, [isFocused]);

  useEffect(() => {
    if (nodeRef.current && !isFocused) {
      nodeRef.current.textContent = node.value;
    }
  }, [node, isFocused]);

  const handleInput: FormEventHandler<HTMLDivElement> = ({ currentTarget }) => {
    const { textContent } = currentTarget;
    changeNodeValue(index, textContent || "");
  };

  const handleClick = () => {
    updateFocusedIndex(index);
  };

  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    const target = event.target as HTMLDivElement;
    if (event.key === "Enter") {
      event.preventDefault();
      if (target.textContent?.[0] === "/") {
        return;
      }

      addNode({type: node.type, value: "", id: nanoid()}, index + 1);
      updateFocusedIndex(index + 1);
    }

    if (event.key === "Backspace") {
      if (target.textContent?.length === 0) {
        event.preventDefault();
        removeNodeByIndex(index);
        updateFocusedIndex(index - 1);
      } else if (window?.getSelection()?.anchorOffset === 0) {
        event.preventDefault();
        removeNodeByIndex(index - 1);
        updateFocusedIndex(index - 1);
      }
    }
  };

  return (
    <BasicNodeContainer
      onInput={handleInput}
      onClick={handleClick}
      onKeyDown={onKeyDown}
      ref={nodeRef}
      contentEditable
      suppressContentEditableWarning
    />
  );
};