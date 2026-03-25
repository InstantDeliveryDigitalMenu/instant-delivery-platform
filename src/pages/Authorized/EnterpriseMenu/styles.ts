/* eslint-disable import/no-named-as-default */
import Typography from "#root/components/Typography/index.tsx";
import styled, { css } from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  overflow-y: auto;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 2rem;
  }
`;

export const LeftContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 500px;
  height: 100%;

  gap: 1rem;
  padding: 3rem 1rem 0rem 1rem;

  border-right: 3px solid #780b00;

  @media screen and (min-width: 600px) and (max-width: 1550px) {
    width: 400px;
    padding-top: 2rem;
  }

  @media screen and (min-width: 600px) and (max-height: 700px) {
    padding-top: 0.5rem;
    gap: 0.5rem;
  }

  @media screen and (max-width: 600px) {
    width: 350px;
    height: fit-content;
    border-right: 0px;
  }
`;

export const EnterpriseMenuLogo = styled.img`
  width: 12rem;
  max-height: 12rem;
  height: fit-content;

  margin-bottom: 0.5rem;

  @media screen and (min-height: 700px) and (max-width: 1000px) {
    width: 150px;
    max-height: 200px;

    padding-top: 2rem;
  }

  @media screen and (min-width: 600px) and (max-height: 700px) {
    width: 8rem;
    max-height: 8rem;

    padding-top: 0.5rem;
  }

  @media screen and (max-width: 600px) {
    width: 12rem;

    border-right: 0px;
  }
`;

export const SideBarContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  gap: 1rem;

  > h3 {
    max-width: 19rem;
    text-align: center;
  }

  @media screen and (min-width: 600px) and (max-width: 1550px) {
    gap: 0rem;

    > h3 {
      font-size: 1.1rem;
    }
  }
`;

export const InformationBox = styled.div`
  display: flex;
  flex-direction: column;

  > h4 {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 1550px) {
    > h4 {
      font-size: 0.8rem;
    }
  }
`;

export const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InformationIconBox = styled.div`
  display: flex;

  padding-right: 0.25rem;

  > svg {
    width: 1.15rem;
  }
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  gap: 1rem;

  @media screen and (max-height: 700px) {
    gap: 0.4rem;
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  padding-top: 4rem;
  padding-bottom: 0rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    margin-bottom: 2rem;
  }

  @media screen and (max-width: 600px) {
    overflow: visible;
    border-right: 0px;
  }
`;

export const CategoryBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70rem;

  gap: 1rem;

  @media screen and (min-width: 1330px) and (max-width: 1550px) {
    width: 60rem;

    gap: 0.3rem;
  }

  @media screen and (min-width: 960px) and (max-width: 1330px) {
    width: 40rem;
  }

  @media screen and (max-width: 960px) {
    width: 20rem;
  }
`;

export const CategoryTitle = styled.div<{ color?: string }>`
  display: flex;
  justify-content: center;
  width: 100%;

  gap: 2rem;

  border-radius: 0.5rem;

  background-color: ${({ color }) =>
    color ? `${color}` : `var(--gray-darker)`};
  color: #fff;
`;

export const CategoryItemsBox = styled.div`
  display: grid;
  grid-template-columns: 20rem 20rem 20rem;
  justify-content: space-between;
  width: 100%;

  gap: 1rem 0.5rem;

  * {
    cursor: pointer;
  }

  @media screen and (min-width: 1330px) and (max-width: 1550px) {
    grid-template-columns: 18rem 18rem 18rem;
    gap: 1rem 0.25rem;
  }

  @media screen and (min-width: 960px) and (max-width: 1330px) {
    grid-template-columns: 20rem 20rem;
    gap: 1rem 0.25rem;
  }

  @media screen and (max-width: 960px) {
    grid-template-columns: 20rem;
    gap: 1rem 0.25rem;
  }
`;

export const CategoryItemCard = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  width: 20rem;
  height: 11rem;
  position: relative;

  border-radius: 0.5rem;
  box-shadow: 2px 2px 10px var(--gray-darker);

  padding: 0.5rem;
  gap: 0.5rem;

  @media screen and (min-width: 1330px) and (max-width: 1550px) {
    width: 18rem;
    height: 13rem;
  }
`;

export const CategoryItemsPriceLabelIcon = styled.div`
  position: absolute;
  width: 3rem;
  height: 3rem;
  top: -0.5rem;
  right: -1rem;
  z-index: 40;
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

export const CategoryItemsPriceLabelText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.7rem;
  text-transform: uppercase;
`;

export const CategoryItemsImage = styled.img`
  display: flex;
  justify-content: center;
  width: 8rem;
  height: 10rem;

  gap: 2rem;
`;

export const CategoryItemCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 0.5rem;
  gap: 0.5rem;
`;

export const CategoryItemsPriceTextDivider = styled.div<{
  color?: string;
}>`
  display: flex;
  width: 100%;

  border: 1px solid
    ${({ color }) => (color ? `${color}` : `var(--gray-darker)`)};
  margin: 0.15rem 0;
`;

export const CategoryItemsPriceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const CategoryItemsPriceText = styled(Typography)<{
  color?: string;
  dashed?: string;
}>`
  color: ${({ color }) => (color ? `${color}` : `var(--gray-darker)`)};
  ${({ dashed }) =>
    dashed === "enabled"
      ? css`
          text-decoration: line-through;
        `
      : ""};
  margin: 0px;
`;
