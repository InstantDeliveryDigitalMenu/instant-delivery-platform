import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  gap: 0.5rem;

  @media screen and (max-width: 1550px) {
    gap: 0.3rem;
  }
`;

export const ListButtonsContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  gap: 0.5rem;

  @media screen and (max-width: 1550px) {
    gap: 0.35rem;
  }
`;
