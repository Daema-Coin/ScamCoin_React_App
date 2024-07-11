import styled from "styled-components";
import { Button, NumberButton, Stack } from "@/components";
import { SetStateAction, useState } from "react";

interface OrderListItemProps {
  name: string;
  coin: number;
  img: string;
  amount: number;
  id: number;
  setCount: React.Dispatch<SetStateAction<number>>;
  setTotal: React.Dispatch<SetStateAction<number>>;
}

export const SelectListItem = ({ name, coin, img, amount, id, setCount, setTotal }: OrderListItemProps) => {
  const [quantity, setQuantity] = useState(amount);

  return (
    <Item>
      <ImgWrapper>
        <img src={import.meta.env.VITE_FILE_URL + img} alt="" width={80} height={80} />
      </ImgWrapper>
      <ItemDetail>
        <ItemName>{name}</ItemName>
        <ItemPrice>{coin} 코인</ItemPrice>
        <Stack width="100%" justify="flex-end" gap={10}>
          <Button
            width={50}
            height={24}
            onClick={() => {
              localStorage.setItem(
                "select",
                JSON.stringify(
                  JSON.parse(localStorage.getItem("select") || "[]").filter((res: Storage) => res.id !== id)
                )
              );
              setCount(JSON.parse(localStorage.getItem("select") || "[]").length);
            }}
          >
            삭제
          </Button>
          <NumberButton id={id} value={quantity} setQuantity={setQuantity} setTotal={setTotal} />
        </Stack>
      </ItemDetail>
    </Item>
  );
};

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  background-color: #fff;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #cccccc;
  cursor: pointer;
  transition: border-color 0.3s;
`;

const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 120px);
`;

const ItemName = styled.div`
  font-size: 12px;
  font-weight: 800;
  color: #8c8c8c;
  margin-bottom: 6px;
`;

const ItemPrice = styled.div`
  font-size: 12px;
  font-weight: 900;
  margin-bottom: 6px;
`;

const ImgWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #cacaca;
`;
