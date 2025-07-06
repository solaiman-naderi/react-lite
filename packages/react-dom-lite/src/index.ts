import { VNode } from "@core/types";

export function render(vnode: VNode | string, container: HTMLElement) {
  const el = createDom(vnode);
  container.appendChild(el);
}

export function createDom(vnode: VNode | string): Node {
  console.log(vnode);

  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }

  if (typeof vnode.type === "function") {
    const componentVNode = vnode.type(vnode.props || {});
    return createDom(componentVNode);
  }
  const el = document.createElement(vnode.type as string);

  const { children = [], ...props } = vnode.props || {};

  for (const [key, value] of Object.entries(props)) {
    if (key.startsWith("on") && typeof value === "function") {
      el.addEventListener(key.slice(2).toLowerCase(), value);
    } else {
      el.setAttribute(key, value);
    }
  }

  (children as (VNode | string)[]).forEach((child) => {
    el.appendChild(createDom(child));
  });

  return el;
}
