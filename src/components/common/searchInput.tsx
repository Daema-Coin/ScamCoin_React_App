import { Search } from "@/assets/images";
import { forwardRef, type ForwardedRef, type InputHTMLAttributes, type CSSProperties } from "react";
import { styled } from "styled-components";

type PropsType = {
  width?: CSSProperties["width"];
} & InputHTMLAttributes<HTMLInputElement>;

export const SearchInput = forwardRef(
  ({ width = "100%", onChange, ...props }: PropsType, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <StyledInputWrapper $width={width}>
        <img src={Search} width={20} />
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
  width: ${({ $width }) => (typeof $width === "number" ? `${$width}px` : $width)};
  cursor: text;

  img {
    position: absolute;
    left: 16px;
  }
`;

const StyledInput = styled.input<{ $isSearch: boolean }>`
  width: 100%;
  height: 40px;
  padding: 8px 16px 8px 48px;
  border: none;
  border-radius: 12px;
  background-color: #f7f7f7;

  outline: none;

  font-size: 12px;
  font-weight: 500;

  ::placeholder {
    color: #cacaca;
  }
`;
