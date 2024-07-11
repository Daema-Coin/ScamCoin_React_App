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
    <Item isSelected={isSelected} onClick={() => setIsSelected(prev => !prev)}>
      <ItemDetail>
        <ItemName>{name}</ItemName>
        <ItemPrice>{coin} 코인</ItemPrice>
        <ItemDescription>{description}</ItemDescription>
      </ItemDetail>
      <div className="item-image">
        <ItemImage src={import.meta.env.VITE_FILE_URL + img} alt="" />
      </div>
    </Item>
  );
};

const Item = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  border: ${props => (props.isSelected ? "2px solid #4285f4" : "1px solid #cccccc")};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: border-color 0.3s;
`;

const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

const ItemName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 2px;
`;

const ItemPrice = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;

const ItemDescription = styled.div`
  font-size: 10px;
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;
