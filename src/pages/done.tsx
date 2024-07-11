import { Stack, Text } from "@/components";
import styled from "styled-components";
import { Arrow, Coin, Pay } from "@/assets/images";

export const Done = () => {
  return (
    <Container>
      <Header>
        <Stack align="center" gap={10}>
          <img src={Arrow} alt="logo" />
          <Text size={14} weight={700} style={{ marginBottom: "-2px" }}>
            재주문하기
          </Text>
        </Stack>
        <Stack gap={20} align="center">
          <CoinWrapper>
            <img src={Coin} alt="coin" width={14} />
            <Text size={12} weight={600} color="#3D8AFF" style={{ marginBottom: "-2px" }}>
              100
            </Text>
          </CoinWrapper>
        </Stack>
      </Header>
      <Stack width="100vw" height="90vh" direction="column" align="center" justify="center">
        <img src={Pay} alt="" width="80%" />
        <Text size={30} weight={900} style={{ marginBottom: "20px" }}>
          접수 완료
        </Text>
        <Text size={14} weight={400} color="#808080">
          해당 부스로 방문해주세요
        </Text>
      </Stack>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.header`
  width: 100vw;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fff;
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
