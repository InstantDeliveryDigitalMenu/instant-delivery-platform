import styled from "styled-components";

export const Container = styled.span`
  position: relative;
`;

export const Content = styled.div<{ $horizontalPosition: "left" | "right" }>`
  position: absolute;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: red;
  padding: var(--spacing-stack-micro) 0;

  width: fit-content;
  z-index: 2;

  display: flex;
  width: 256px;
  height: fit-content;
  max-height: 300px;
  flex-direction: column;
  align-items: flex-start;

  padding: var(--spacing-padding-micro, 8px) 0px;

  border-radius: 0.5rem;
  background: var(--tertiary, #27232f);
  color: var(--white, #ffffff);

  cursor: pointer;

  ${(props) => (props.$horizontalPosition === "left" ? "left: 0" : "right: 0")};

  &[aria-hidden="true"] {
    display: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const Item = styled.div`
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  gap: var(--spacing-stack-micro, 8px);
  padding: var(--spacing-padding-sm, 16px);
  align-items: center;
  align-self: stretch;

  > i {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 24px;
    color: var(--fg-on-emphasis-default, #f4f3f7);

    transition: all ease-in-out 0.2s;
  }

  &:hover {
    background-color: var(--primary, #3a3845);
    > i {
      color: var(--white);
    }
  }
`;
