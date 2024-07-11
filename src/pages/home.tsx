import { OrderListItem, SearchInput, Stack, Text } from "@/components";
import styled from "styled-components";
import { useState } from "react";
import { Cart, Coin, DSM, DSMLogo } from "@/assets/images";
import { useBoothMenu } from "@/apis/menu";
import { useMyCoin } from "@/apis";

export const Home = () => {
  const { data: boothMenu } = useBoothMenu(4);
  const { data: myCoin } = useMyCoin();
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("select") || "[]").length);

  return (
    <Container>
      <Header>
        <Logo src={DSMLogo} alt="logo" />
        <Stack gap={20} align="center">
          <CoinWrapper>
            <img src={Coin} alt="coin" width={14} />
            <Text size={12} weight={600} color="#3D8AFF" style={{ marginBottom: "-2px" }}>
              {myCoin?.data.coin}
            </Text>
          </CoinWrapper>
          <CartImage src={Cart} alt="cart" />
        </Stack>
      </Header>
      <main>
        <FixedContent>
          <BoothInfo>
            <BoothIcon src={DSM} alt="dsm" />
            <BoothName>{boothMenu?.data.booth_name}</BoothName>
          </BoothInfo>
          <SearchBar>
            <SearchInput onChange={e => setSearch(e.target.value)} type="text" placeholder="검색어를 입력해주세요." />
          </SearchBar>
        </FixedContent>
        <Divider />
        <ItemList>
          {boothMenu?.data.menu
            .filter(res => res.name.includes(search))
            .map(res => {
              const { id, name, description, price, image_url, is_open } = res;
              return (
                <OrderListItem
                  key={id}
                  id={id}
                  name={name}
                  price={price}
                  description={description}
                  img={image_url}
                  isOpen={is_open}
                  setCount={setCount}
                />
              );
            })}
        </ItemList>
      </main>
      {count > 0 && (
        <OrderFooter>
          <OrderBackground>
            <OrderButton>
              {JSON.parse(localStorage.getItem("select") || "[]").reduce((acc, a) => acc + a.price, 0)} 코인 · 주문하기
            </OrderButton>
          </OrderBackground>
        </OrderFooter>
      )}
    </Container>
  );
};

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
  border: 1px solid #3d8aff;
  color: #3d8aff;
  height: 24px;
  border-radius: 4px;
  padding: 0px 6px;
  font-weight: 700;
  gap: 12px;
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
  width: 48px;
  height: 48px;
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
  padding: 12px;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #ccc;
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
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
