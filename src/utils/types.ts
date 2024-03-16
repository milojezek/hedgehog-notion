// Union type for all possible node types
export type NodeType = "text" | "image" | "list" | "page" | "heading1" | "heading2" | "heading3";

// Object representing a node of any type
export type NodeData = {
  id: string;
  type: NodeType;
  value: string;  // Content, url, slug 
};

// Each page consists of nodes of various types
export type Page = {
  id: string;
  slug: string;   // Generates url of the page
  title: string;
  nodes: NodeData[];
  cover: string;  // Url of the image at the top
};