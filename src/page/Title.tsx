import styled from "styled-components";
import { NodeData } from "../utils/types";
import { useRef, useEffect } from "react";
import { nanoid } from "nanoid";

const TitleContainer = styled.div`
  padding-left: 40px;
	padding-right: 40px;
	max-width: 900px;
`;

const TitleText = styled.h1`
  padding: 6px;
`;

type TitleProps = {
  title: string;
  changePageTitle(title: string): void;
  addNode(node: NodeData, index: number): void;
};

export const Title = ({ title, changePageTitle, addNode}: TitleProps) => {
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const isFocused = document.activeElement == headerRef.current;
    if (!isFocused && headerRef.current) {
      headerRef.current.textContent = title;
    }
  }, [title]);

  return (
    <TitleContainer>
      <TitleText
        contentEditable
        suppressContentEditableWarning
        onInput={(e) => changePageTitle(e.currentTarget.textContent || "")}
        onKeyDown={(event) => {
          if (["Enter", "NumpadEnter"].includes(event.key)) {
            event?.preventDefault();
            addNode({ type: "text", id: nanoid(), value: ""}, 0);
          }
        }}
      />
    </TitleContainer>
  );
};