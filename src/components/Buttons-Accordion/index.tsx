import Button from "../Button";

import * as ButtonsAccordionStyles from "./styles.ts";

interface ButtonsAccordionProps {
  listData: string[];
  actionAccordion: () => void;
  onClickSelectedItem: (item: string) => void;
  isActiveFilter: boolean;
  searchParam?: string;
  customColors: {
    primary: string;
    secundary: string;
  };
}

const ButtonsAccordion = ({
  listData,
  actionAccordion,
  onClickSelectedItem,
  isActiveFilter,
  searchParam,
  customColors
}: ButtonsAccordionProps) => {
  const isItemSelected = (item: string) => {
    return searchParam === item;
  };

  const colors = isActiveFilter
    ? {
        primary: customColors.primary,
        secundary: customColors.secundary
      }
    : undefined;

  return (
    <ButtonsAccordionStyles.Container>
      <Button
        size="full"
        variant={isActiveFilter ? "default" : "outline"}
        textColor={isActiveFilter ? "white" : "gray-lighter"}
        onClick={() => actionAccordion()}
        customColors={colors}
      >
        Categorias
      </Button>
      <ButtonsAccordionStyles.ListButtonsContent>
        {listData.map((item) => (
          <Button
            size="full"
            variant={isItemSelected(item) ? "default" : "outline"}
            color="secondary"
            textColor="gray-lighter"
            key={item}
            onClick={() => {
              onClickSelectedItem(item);
            }}
            customColors={isItemSelected(item) ? colors : undefined}
          >
            {item}
          </Button>
        ))}
      </ButtonsAccordionStyles.ListButtonsContent>
    </ButtonsAccordionStyles.Container>
  );
};

export default ButtonsAccordion;
