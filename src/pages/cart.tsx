import { Button, SelectListItem, Stack, Text, Textarea } from "@/components";
import styled from "styled-components";
import { Arrow, Coin } from "@/assets/images";

export const Cart = () => {
  return (
    <Container>
      <Header>
        <Stack align="center" gap={10}>
          <img src={Arrow} alt="logo" />
          <Text size={14} weight={700} style={{ marginBottom: "-2px" }}>
            주문하기
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
      <Stack width="100vw" direction="column" align="center" padding={14} gap={14}>
        <SelectListItem name="코인 1개" coin={12} img="12" />
        <SelectListItem name="코인 1개" coin={12} img="12" />
        <SelectListItem name="코인 1개" coin={12} img="12" />
        <RequestWrapper>
          <Text size={14} weight={700}>
            요청사항
          </Text>
          <Textarea maxLength={60} />
        </RequestWrapper>
        <Stack width="100%" justify="space-between" margin="24px 0">
          <Text size={14} weight={600}>
            총 결제금액
          </Text>
          <Text size={14} weight={600}>
            100코인
          </Text>
        </Stack>
        <Button width="100%" height={44} style={{ marginBottom: "20px" }}>
          <Text size={14} weight={600} color="#fff">
            100코인 결제하기
          </Text>
          <NumCheck>1</NumCheck>
        </Button>
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

const RequestWrapper = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NumCheck = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #fff;
  color: #3d8aff;
  font-size: 10px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 6px;
`;
