import styled from "styled-components";
import { Button, Input, Text } from "@/components";
import { useForm } from "@/hooks";
import { SignInRequest, useSignIn } from "@/apis";

export const SignIn = () => {
  const { form, handleChange } = useForm<SignInRequest>({
    account_id: "",
    password: "",
  });

  const { mutate } = useSignIn(form);

  return (
    <Container
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate();
      }}
    >
      <Wrapper>
        <Header>
          <Text size={18} weight={800}>
            로그인
          </Text>
        </Header>
        <InputWrapper>
          <Text size={14} color="#333">
            아이디
          </Text>
          <Input placeholder="아이디" name="account_id" value={form.account_id} onChange={handleChange} />
        </InputWrapper>
        <InputWrapper>
          <Text size={14} color="#333">
            비밀번호
          </Text>
          <Input placeholder="비밀번호" type="password" name="password" value={form.password} onChange={handleChange} />
        </InputWrapper>
      </Wrapper>
      <Button type="submit" height={50}>
        <Text size={16} color="#fff">
          로그인
        </Text>
      </Button>
    </Container>
  );
};

const Container = styled.form`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 0 24px 24px 24px;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Header = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
