declare module "react-scroll" {
  import type { ComponentType, ReactNode } from "react";

  type ScrollLinkProps = {
    children?: ReactNode;
    to: string;
    activeClass?: string;
    spy?: boolean;
    offset?: number;
    smooth?: boolean;
    duration?: number;
  };

  export const Link: ComponentType<ScrollLinkProps>;
}
