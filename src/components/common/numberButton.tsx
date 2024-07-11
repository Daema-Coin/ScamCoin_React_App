import { Minus, Plus } from "@/assets/images";
import styled, { css } from "styled-components";
import { Text } from "@/components";
import { SetStateAction } from "react";

type PropsType = {
  id: number;
  value: number;
  setQuantity: React.Dispatch<SetStateAction<number>>;
  setTotal: React.Dispatch<SetStateAction<number>>;
};

export const NumberButton = ({ value, setQuantity, id, setTotal }: PropsType) => {
  return (
    <Container>
      <Img
        src={Minus}
        alt=""
        onClick={() => {
          localStorage.setItem(
            "select",
            JSON.stringify(
              JSON.parse(localStorage.getItem("select") || "[]").map((res: Storage) =>
                res.id === id ? { ...res, amount: value <= 1 ? 1 : value - 1 } : res
              )
            )
          );
          setQuantity(value <= 1 ? 1 : value - 1);
          setTotal(
            JSON.parse(localStorage.getItem("select") || "[]").reduce(
              (acc: number, a: Storage) => acc + a.price * a.amount,
              0
            )
          );
        }}
        width={12}
        height={12}
        $disabled={value <= 1}
      />
      <Text size={10} weight={900}>
        {value}
      </Text>
      <Img
        src={Plus}
        alt=""
        onClick={() => {
          localStorage.setItem(
            "select",
            JSON.stringify(
              JSON.parse(localStorage.getItem("select") || "[]").map((res: Storage) =>
                res.id === id ? { ...res, amount: value + 1 } : res
              )
            )
          );
          setQuantity(value + 1);
          setTotal(
            JSON.parse(localStorage.getItem("select") || "[]").reduce(
              (acc: number, a: Storage) => acc + a.price * a.amount,
              0
            )
          );
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
