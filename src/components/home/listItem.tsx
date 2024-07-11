import { useState } from "react";
import styled from "styled-components";

interface OrderListItemProps {
  name: string;
  coin: number;
  description: string;
  img: string;
}

export const OrderListItem = ({ name, coin, description, img }: OrderListItemProps) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Item $isSelected={isSelected} onClick={() => setIsSelected(prev => !prev)}>
      <ItemDetail>
        <ItemName>{name}</ItemName>
        <ItemPrice>{coin} 코인</ItemPrice>
        <ItemDescription>{description}</ItemDescription>
      </ItemDetail>
      <ImgWrapper>
        <img src={import.meta.env.VITE_FILE_URL + img} alt="" width={80} height={80} />
      </ImgWrapper>
    </Item>
  );
};

const Item = styled.div<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  border: ${({ $isSelected }) => ($isSelected ? "2px solid #4285f4" : "1px solid #cccccc")};
  cursor: pointer;
  transition: border-color 0.3s;
`;

const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

const ItemName = styled.div`
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 6px;
`;

const ItemPrice = styled.div`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const ItemDescription = styled.div`
  font-size: 10px;
  font-weight: 600;
  color: #787878;
`;

const ImgWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #cacaca;
`;
