/* eslint-disable import/no-named-as-default */
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  overflow: hidden;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
    overflow-y: auto;
  }
`;

export const LeftContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;

  padding: 5rem;

  background-color: var(--primary);

  overflow-y: auto;

  > h1 {
    line-height: 4rem;
  }

  @media screen and (min-width: 1000px) and (max-width: 1600px) {
    padding: 1.5rem 3rem 0rem 3rem;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    padding: 1.5rem 2rem;
  }
`;

export const RightContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  min-height: 100vh;

  padding: 5rem;
  overflow: auto;

  @media screen and (max-width: 1600px) {
    padding: 2rem 2rem 0.5rem 2rem;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  background-color: var(--primary);

  margin-bottom: 1rem;

  @media screen and (max-width: 1600px) {
    margin-bottom: 0rem;
  }
`;

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-top: 2rem;

  @media screen and (max-width: 1600px) {
    margin-top: 1rem;
  }
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

  @media screen and (max-width: 1600px) {
    gap: 0.5rem;
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
