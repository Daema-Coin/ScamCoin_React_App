import { Button, SelectListItem, Stack, Text, Textarea } from "@/components";
import styled from "styled-components";
import { Arrow, Coin } from "@/assets/images";
import { Link, useSearchParams } from "react-router-dom";
import { useBoothMenu } from "@/apis/menu";
import { useMyCoin } from "@/apis";
import { useEffect, useState } from "react";
import { useOrder } from "@/apis/order";

export const Cart = () => {
  const [searchParams] = useSearchParams();
  const { data: boothMenu } = useBoothMenu(+searchParams.get("id")!);
  const { data: myCoin } = useMyCoin();
  const [requestMessage, setRequestMessage] = useState("");
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("select") || "[]").length);
  const { mutate } = useOrder();

  // JSON.parse(localStorage.getItem("select") || "[]").filter((res) => boothMenu.data.menu.);
  const selectedBooth = boothMenu?.data.menu
    .filter((res: Storage) =>
      JSON.parse(localStorage.getItem("select") || "[]").find((select: Storage) => res.id === select.id)
    )
    .map((res: Storage) => {
      return {
        ...res,
        amount: JSON.parse(localStorage.getItem("select") || "[]").find((select: Storage) => res.id === select.id)
          .amount,
      };
    });

  const [total, setTotal] = useState(
    boothMenu?.data.menu
      .filter((res: Storage) =>
        JSON.parse(localStorage.getItem("select") || "[]").find((select: Storage) => res.id === select.id)
      )
      .map((res: Storage) => {
        return {
          ...res,
          amount: JSON.parse(localStorage.getItem("select") || "[]").find((select: Storage) => res.id === select.id)
            .amount,
        };
      })
      .reduce((acc: number, a: Storage) => acc + a.price * a.amount, 0)
  );

  useEffect(() => {
    setTotal(
      boothMenu?.data.menu
        .filter((res: Storage) =>
          JSON.parse(localStorage.getItem("select") || "[]").find((select: Storage) => res.id === select.id)
        )
        .map((res: Storage) => {
          return {
            ...res,
            amount: JSON.parse(localStorage.getItem("select") || "[]").find((select: Storage) => res.id === select.id)
              .amount,
          };
        })
        .reduce((acc: number, a: Storage) => acc + a.price * a.amount, 0)
    );

    setCount(
      boothMenu?.data.menu.filter((res: Storage) =>
        JSON.parse(localStorage.getItem("select") || "[]").find((select: Storage) => res.id === select.id)
      ).length
    );
  }, [boothMenu]);

  return (
    <Container>
      <Header>
        <Link to={`/?id=${searchParams.get("id")}`}>
          <Stack align="center" gap={10}>
            <img src={Arrow} alt="logo" />
            <Text size={14} weight={700} style={{ marginBottom: "-2px" }}>
              주문하기
            </Text>
          </Stack>
        </Link>
        <Stack gap={20} align="center">
          <CoinWrapper>
            <img src={Coin} alt="coin" width={14} />
            <Text size={12} weight={600} color="#3D8AFF" style={{ marginBottom: "-2px" }}>
              {myCoin?.data.coin}
            </Text>
          </CoinWrapper>
        </Stack>
      </Header>
      <Stack width="100vw" direction="column" align="center" padding={14} gap={14}>
        {selectedBooth?.map((res: Storage) => {
          const { id, name, image_url, price, amount } = res;
          return (
            <SelectListItem
              key={id}
              id={id}
              name={name}
              coin={price}
              amount={amount}
              img={image_url}
              setCount={setCount}
              setTotal={setTotal}
            />
          );
        })}
        <RequestWrapper>
          <Text size={14} weight={700}>
            요청사항
          </Text>
          <Textarea maxLength={60} onChange={e => setRequestMessage(e.target.value)} value={requestMessage} />
        </RequestWrapper>
        <Stack width="100%" justify="space-between" margin="24px 0">
          <Text size={14} weight={600}>
            총 결제금액
          </Text>
          <Text size={14} weight={600}>
            {total}
            코인
          </Text>
        </Stack>
        <Button
          width="100%"
          height={44}
          style={{ marginBottom: "20px" }}
          onClick={() => {
            mutate({
              orders: JSON.parse(localStorage.getItem("select") || "[]").map((res: Storage) => {
                return { menu_id: res.id, amount: res.amount };
              }),
              booth_id: +searchParams.get("id")!,
              request: requestMessage,
              price: boothMenu?.data.menu
                .filter((res: Storage) =>
                  JSON.parse(localStorage.getItem("select") || "[]").find((select: Storage) => res.id === select.id)
                )
                .map((res: Storage) => {
                  return {
                    ...res,
                    amount: JSON.parse(localStorage.getItem("select") || "[]").find(
                      (select: Storage) => res.id === select.id
                    ).amount,
                  };
                })
                .reduce((acc: number, a: Storage) => acc + a.price * a.amount, 0),
            });
          }}
        >
          <Text size={14} weight={600} color="#fff">
            {total}
            코인 결제하기
          </Text>
          <NumCheck>{count}</NumCheck>
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
