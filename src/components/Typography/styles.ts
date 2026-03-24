import styled, { css } from "styled-components";
import { TextColor, TextSizes, TextTypes, TextVariants } from ".";

export const Container = styled.div<{
  variant: TextVariants;
  as: TextTypes;
  color: TextColor;
  size: TextSizes;
  customColor?: string;
}>`
  display: flex;

  ${({ size }) => {
    switch (size) {
      case "fit":
        return css`
          width: fit-content;
        `;
      case "full":
        return css`
          width: 100%;
        `;
      default:
        return css`
          width: fit-content;
        `;
    }
  }}

  padding: 0.25rem 0;
  margin: 0;

  color: ${({ color, customColor }) =>
    customColor ? `${customColor}` : `var(--${color})`};

  ${({ variant }) => {
    switch (variant) {
      case "default":
        return css`
          font-weight: 500;
        `;
      case "bolder":
        return css`
          font-weight: 700;
        `;
      case "lighter":
        return css`
          font-weight: 400;
        `;
    }
  }}

  ${({ as }) => {
    switch (as) {
      case "h1":
        return css`
          font-size: 4rem;

          @media screen and (min-width: 1000px) and (max-width: 1600px) {
            font-size: 3.5rem;
          }
        `;
      case "h2":
        return css`
          font-size: 2rem;

          @media screen and (min-width: 1000px) and (max-width: 1600px) {
            font-size: 1.5rem;
          }
        `;
      case "h3":
        return css`
          font-size: 1.5rem;

          @media screen and (min-width: 1000px) and (max-width: 1600px) {
            font-size: 1.3rem;
          }
        `;
      case "h4":
        return css`
          font-size: 1rem;
        `;
      case "label":
        return css`
          font-size: 1rem;
        `;
      case "span":
        return css`
          font-size: 0.8rem;
        `;
    }
  }}
`;
