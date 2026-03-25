/* eslint-disable import/no-named-as-default */
import styled from "styled-components";

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

  padding: 3rem 4rem 1rem 4rem;

  @media screen and (max-width: 1000px) {
    padding: 1.25rem 3rem 3rem 3rem;
  }

  @media screen and (max-width: 850px) {
    padding: 2rem 4rem 1rem 4rem;
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

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  gap: 2rem;

  margin: 1.5rem 0rem;

  @media screen and (max-height: 768px) {
    margin: 0.5rem 0rem;
  }
  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LeftContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    @media screen and (max-height: 768px) and (min-width: 1000px) {
      gap: 0.25rem;
    }
  }

  @media screen and (max-height: 768px) and (min-width: 1000px) {
    gap: 0.25rem;
  }
`;

export const RightContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  .infos {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;

    padding-top: 2rem;
    gap: 1rem;
  }
`;
