import styled, { css } from "styled-components";
import { TextColor, TextTypes, TextVariants } from ".";

export const Container = styled.div<{
  variant: TextVariants;
  as: TextTypes;
  color: TextColor;
}>`
  display: flex;
  width: 100%;

  padding: 0.25rem 0;
  margin: 0;

  color: ${({ color }) => `var(--font-${color})`};

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
        `;
      case "h2":
        return css`
          font-size: 2rem;
        `;
      case "h3":
        return css`
          font-size: 1.5rem;
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
