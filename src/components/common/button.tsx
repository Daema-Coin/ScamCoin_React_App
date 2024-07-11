import { forwardRef, type ForwardedRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { css, styled, type CSSProperties } from "styled-components";

type PropsType = {
  size?: CSSProperties["fontSize"];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  icon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef(
  ({ size = 12, children, width, height = 26, ...props }: PropsType, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <StyleButton ref={ref} $size={size} $width={width} $height={height} $children={children} {...props}>
        {children}
      </StyleButton>
    );
  }
);

const StyleButton = styled.button<{
  $width: CSSProperties["width"];
  $height: CSSProperties["height"];
  $size: CSSProperties["fontSize"];
  $children: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  font-size: ${({ $size }) => $size}px;
  font-weight: 500;
  ${({ $width }) =>
    typeof $width === "number"
      ? css`
          width: ${$width}px;
        `
      : css`
          width: ${$width};
        `}
  height: ${({ $height }) => $height}px;

  border: ${({ $children }) => ($children === "삭제" ? "1px solid #ccc" : "none")};
  border-radius: ${({ $children }) => ($children === "삭제" ? 4 : 8)}px;
  color: ${({ $children }) => ($children === "삭제" ? "#000" : "#fff")};
  background-color: ${({ $children }) => ($children === "삭제" ? "#fff" : "#3D8AFF")};

  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
