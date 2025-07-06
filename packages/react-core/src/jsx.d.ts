export {};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      span: any;
      h1: any;
      button: any;
      [key: string]: any;
    }
  }
}
