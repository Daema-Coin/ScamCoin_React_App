import { forwardRef, type ForwardedRef, type InputHTMLAttributes, type CSSProperties } from "react";
import { styled } from "styled-components";

type PropsType = {
  width?: CSSProperties["width"];
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(
  ({ width = "100%", onChange, ...props }: PropsType, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <StyledInputWrapper $width={width}>
        <StyledInput ref={ref} onChange={onChange} {...props} />
      </StyledInputWrapper>
    );
  }
);

const StyledInputWrapper = styled.label<{ $width?: CSSProperties["width"] }>`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: ${({ $width }) => (typeof $width === "number" ? `${$width}px` : $width)};
  cursor: text;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;

  outline: none;

  font-size: 14px;
  font-weight: 500;
  background-color: #f7f7f7;

  ::placeholder {
    color: #cacaca;
  }
`;
