/* eslint-disable import/no-named-as-default */
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  justify-content: center;

  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  overflow-y: auto;
  overflow-x: hidden;

  padding: 2.5rem 4rem 0rem 4rem;

  @media screen and (max-width: 1100px) {
    padding: 1.25rem 3rem 1rem 3rem;
  }

  @media screen and (max-width: 850px) {
    padding: 2rem 4rem 0rem 4rem;
  }

  @media screen and (max-width: 450px) {
    padding: 2rem 3rem 2rem 3rem;
  }
`;

export const NavButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  margin-bottom: 3rem;

  @media screen and (max-height: 768px) {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 1000px) {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 850px) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const NavButtonsContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1500px) {
    max-width: 100rem;
  }

  @media screen and (max-width: 850px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;

    gap: 1rem;
  }
`;

export const NavButton = styled.div<{ active?: "true" }>`
  display: flex;
  justify-content: center;
  grid-column: span -1;
  width: 10rem;

  padding: 0.5rem 1rem;
  border-radius: 0.25rem;

  background-color: ${({ active }) =>
    active ? "var(--primary)" : "var(--gray)"};
  color: ${({ active }) => (active ? "var(--white)" : "var(--font-gray)")};
  font-weight: 600;

  @media screen and (max-width: 1050px) {
    width: 8rem;
  }

  @media screen and (max-width: 850px) {
    width: 10rem;
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.3rem;
  padding-top: 0.5rem;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  width: fit-content;
  justify-items: center;
  gap: 6rem;

  padding: 0.5rem 0;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    width: 100%;
    gap: 2rem;
  }
`;

export const CardContent = styled.div<{ wrappered?: "true" }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  height: fit-content;

  /* gap: 0.5rem; */
  padding: 1rem 1rem 0 1rem;

  border: 2px solid var(--gray);

  > div {
    display: flex;
    flex-direction: column;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  ${({ wrappered }) =>
    wrappered &&
    css`
      display: flex;
      flex-direction: row;

      gap: 2rem;

      @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 0.5rem;
      }
    `}
`;

export const ButtonsBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  gap: 1rem;
`;

export const CardWrapper = styled.div`
  display: flex;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  gap: 4rem;

  .buttons {
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 1rem;

    gap: 1rem;
  }

  @media screen and (max-width: 750px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;
