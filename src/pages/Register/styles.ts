/* eslint-disable import/no-named-as-default */
import styled, { css } from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const leftContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;

  padding: 5rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  background-color: var(--primary);

  margin-bottom: 1rem;
`;

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-top: 2rem;
`;

export const StepsItem = styled.div<{ first: boolean; last: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;

  gap: 1rem;
  margin: -3px 0;

  ${({ first }) =>
    first
      ? css`
          align-items: flex-start;
          margin-top: 0;

          span {
            margin-top: 0;
          }
        `
      : ""}
  ${({ last }) =>
    last
      ? css`
          align-items: flex-end;
          margin-bottom: 0;

          span {
            margin-bottom: 0;
          }
        `
      : ""}

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pipe {
    color: var(--white);
  }
`;

export const StepsDotNumber = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 2.2rem;
  align-items: center;
  justify-content: center;

  background-color: var(--white);
  color: var(--primary);

  padding: 0.5rem 0.8rem;
  border-radius: 100rem;

  font-weight: 800;

  margin: -3px 0;
`;

export const RightContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;

  padding: 5rem;

  background-color: var(--primary);

  > h1 {
    line-height: 4rem;
  }
`;

export const UrlContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 0.5rem;

  > div {
    display: flex;
    justify-content: flex-start;
    width: 100%;

    gap: 1rem;
  }
`;

export const UrlSufixContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 90%;

  background-color: var(--tertiary);

  padding: 0 1rem;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  gap: 1rem;
`;
