import { SearchInput, Stack } from "@/components";
import styled from "styled-components";
import logoImage from "@/assets/images/dsmLogo.png";
import coinImage from "@/assets/images/coin.svg";
import cartImage from "@/assets/images/cart.svg";
import dsmImage from "@/assets/images/dsm.png";
import { OrderListItem } from "@/components/listItem";
import { useState } from "react";

const Home = () => {
  const [selected, setSelected] = useState([]);

  return (
    <Container>
      <Header>
        <Logo src={logoImage} alt="logo" />
        <Stack gap={20} align="center">
          <CoinWrapper>
            <CoinImage src={coinImage} alt="coin" />
            <span>100</span>
          </CoinWrapper>
          <CartImage src={cartImage} alt="cart" />
        </Stack>
      </Header>
      <main>
        <FixedContent>
          <BoothInfo>
            <BoothIcon src={dsmImage} alt="dsm" />
            <BoothName>부스이름</BoothName>
          </BoothInfo>
          <SearchBar>
            <SearchInput type="text" placeholder="검색어를 입력해주세요." />
          </SearchBar>
        </FixedContent>
        <Divider />
        <ItemList>
          <OrderListItem name="fdafds" coin={10} description="설명" img=".png" />
          <OrderListItem name="fdafds" coin={10} description="설명" img=".png" />
          <OrderListItem name="fdafds" coin={10} description="설명" img=".png" />
          <OrderListItem name="fdafds" coin={10} description="설명" img=".png" />
        </ItemList>
      </main>
      {selected.length > 0 && (
        <OrderFooter>
          <OrderBackground>
            <OrderButton>100코인 · 주문하기</OrderButton>
          </OrderBackground>
        </OrderFooter>
      )}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fff;
`;

const Logo = styled.img`
  width: 120px;
  height: 50px;
`;

const CoinWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 3px solid #3d8aff;
  color: #3d8aff;
  border-radius: 8px;
  padding: 5px 10px;
  font-weight: 700;
`;

const CoinImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
`;

const CartImage = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const FixedContent = styled.div`
  background-color: #fff;
`;

const BoothInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

const BoothIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const BoothName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  padding: 13px;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  padding: 20px;
  overflow-y: auto;
`;

const OrderFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #cccccc;
  background-color: #fff;
  border-radius: 12px;
`;

const OrderBackground = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 12px;
  padding: 14px 13px;
`;

const OrderButton = styled.button`
  width: 100%;
  height: 45px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
  font-weight: 500;
  &:active {
    opacity: 0.7;
  }
`;

// .order-button:hover {
//   background-color: #357ae8;
// }

// .up-down-enter-active,
// .up-down-leave-active {
//   transition: transform 0.3s ease, opacity 0.3s ease;
// }

// .up-down-enter,
// .up-down-leave-to {
//   transform: translateX(100%);
//   opacity: 0;
// }
