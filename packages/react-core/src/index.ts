import { VNode } from "./types";

export function createElement(
  type: string | Function,
  props: Record<string, any> | null | undefined,
  ...children: any[]
): VNode {
  return {
    type,
    props: {
      ...props,
      children: children.flat(),
    },
  };
}
