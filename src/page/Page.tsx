import { useState } from "react";
import { NodeData } from "../utils/types";
import { useFocusedNodeIndex } from "./useFocusedNodeIndex";
import { Cover } from "./Cover";
import { Title } from "./Title";
import { BasicNode } from "../node/BasicNode";
import { Spacer } from "./Spacer";
import { nanoid } from "nanoid";


export const Page = () => {
  const [nodes, setNodes] = useState<NodeData[]>([]);
  const [title, setTitle] = useState("Default Title");
  const [focusedNodeIndex, setFocusedNodeIndex] = useFocusedNodeIndex({
    nodes
  });

  const addNode = (node: NodeData, index: number) => {
    const newNodes = {...nodes};
    newNodes.splice(index, 0, node);
    setNodes(newNodes);
  };

  const removeNodeByIndex = (index: number) => {
    const newNodes = {...nodes};
    newNodes.splice(index, 1);
    setNodes(newNodes);
  };

  const changeNodeValue = (index: number, value: string) => {
    const newNodes = {...nodes};
    newNodes[index].value = value;
    setNodes(newNodes);
  };

  return (
    <>
      <Cover />
      <div>
        <Title addNode={addNode} title={title} changePageTitle={setTitle} />
        {nodes.map((node, index) => (
          <BasicNode 
            key={node.id}
            node={node}
            isFocused={focusedNodeIndex === index}
            updateFocusedIndex={setFocusedNodeIndex}
            index={index}
            addNode={addNode}
            removeNodeByIndex={removeNodeByIndex}
            changeNodeValue={changeNodeValue}
          />
        ))}
        <Spacer 
          handleClick={() => {
            addNode({type: "text", value: "", id: nanoid()}, nodes.length);
          }}
          showHint={!nodes.length}
        />
      </div>
    </>
  );
};