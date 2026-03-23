/* eslint-disable import/no-named-as-default */
import { InstantDeliveryLogoFull } from "#root/assets/index.ts";
import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const LeftContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  height: 100%;
  width: 40vw;

  background-color: var(--white, #000);

  gap: 1rem;
  border-radius: 0 1rem 1rem 0;

  > form {
    display: flex;
    flex-direction: column;
    width: 70%;
  }
`;

export const InputContainer = styled.section`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

export const LoginLogo = styled(InstantDeliveryLogoFull)`
  width: 10rem;
  height: fit-content;

  margin-bottom: 1rem;
`;

export const RememberMeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  margin-bottom: 2rem;
`;

export const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  gap: 1rem;
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

  gap: 2rem;
`;
