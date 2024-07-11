import { Minus, Plus } from "@/assets/images";
import styled, { css } from "styled-components";
import { Text } from "@/components";

type PropsType = {
  value: number;
  onChange: (value: number) => void;
};

export const NumberButton = ({ value, onChange }: PropsType) => {
  return (
    <Container>
      <Img
        src={Minus}
        alt=""
        onClick={() => {
          onChange(value <= 0 ? 0 : value - 1);
        }}
        width={12}
        height={12}
        $disabled={value <= 0}
      />
      <Text size={10} weight={900}>
        {value}
      </Text>
      <Img
        src={Plus}
        alt=""
        onClick={() => {
          onChange(value + 1);
        }}
        width={12}
        height={12}
      />
    </Container>
  );
};

const Container = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #cccccc;
  border-radius: 4px;
  gap: 10px;
  padding: 2px 6px;
`;

const Img = styled.img<{ $disabled?: boolean }>`
  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.2;
    `}
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
`;
