/* eslint-disable import/no-named-as-default */
import Typography from "#root/components/Typography/index.tsx";
import styled, { css } from "styled-components";

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
  justify-content: flex-start;
  height: 100%;
  width: 500px;

  background-color: var(--white, #000);

  gap: 1rem;
  padding-top: 3rem;

  border-right: 3px solid #780b00;
`;

export const EnterpriseMenuLogo = styled.img`
  width: 12rem;
  height: fit-content;

  margin-bottom: 0.5rem;
`;

export const SideBarContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;

  > h3 {
    max-width: 19rem;
    text-align: center;
  }
`;

export const InformationBox = styled.div`
  display: flex;
  flex-direction: column;

  > h4 {
    display: flex;
    align-items: center;
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
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

  gap: 2rem;
  padding: 0 4rem;
`;

export const CategoryBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70rem;

  gap: 1rem;
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
  grid-template-columns: 25rem 25rem 25rem;
  justify-content: space-between;
  width: 100%;

  * {
    cursor: pointer;
  }
`;

export const CategoryItemCard = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  width: 20rem;
  height: 11rem;

  border-radius: 0.5rem;
  box-shadow: 2px 2px 10px var(--gray-darker);

  padding: 0.5rem;
  gap: 0.5rem;
`;

export const CategoryItemCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 0.5rem;
  gap: 0.5rem;
`;

export const CategoryItemsImage = styled.img`
  display: flex;
  justify-content: center;
  width: 8rem;
  height: 10rem;

  gap: 2rem;
`;

export const CategoryItemsPriceTextDivider = styled.div<{
  color?: string;
}>`
  display: flex;
  width: 100%;

  /* background-color: var(--tertiary); */

  border: 1px solid
    ${({ color }) => (color ? `${color}` : `var(--gray-darker)`)};
  margin: 0.15rem 0;

  /* color:; */
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
