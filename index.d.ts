import { Node, Visitor } from 'excel-formula-ast';

export function parse(str: string): Node;
export function visit(tree: Node, visitor: Visitor): void;
