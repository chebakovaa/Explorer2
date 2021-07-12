import INode from "./INode";

export default interface INodeContent {
    children: Array<INode>;
    total: number;
}