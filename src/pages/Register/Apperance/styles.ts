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

  padding-top: 4rem;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;

  overflow: auto;
`;

export const NavButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  margin-bottom: 3rem;
`;

export const NavButtonsContent = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-between;
`;

export const NavButton = styled.div<{ active?: "true" }>`
  display: flex;
  justify-content: center;
  min-width: 10rem;

  padding: 0.5rem 1rem;
  border-radius: 0.25rem;

  background-color: ${({ active }) =>
    active ? "var(--primary)" : "var(--gray)"};
  color: ${({ active }) => (active ? "var(--white)" : "var(--font-gray)")};
  font-weight: 600;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  gap: 2rem;

  margin: 1.5rem 0rem;
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
    gap: 1rem;
  }
`;
