import style from "./Node.module.css";
import { BiBoltCircle } from "react-icons/bi";
import { CgScreen } from "react-icons/cg";

type NodeType = "screen" | "action" | "condition";

export type Node = {
  id: number;
  type: NodeType;
  name: string;
};

export type NodeComponent = {
  onClick: (node: Node) => void;
} & Node;

export default function Node({ id, type, name, onClick }: NodeComponent) {
  return (
    <button className={style.node} onClick={() => onClick({ id, type, name })}>
      <h4>{name}</h4>
      {type === "screen" && <CgScreen title="Screen" />}
      {type === "action" && <BiBoltCircle title="Action" />}
    </button>
  );
}

