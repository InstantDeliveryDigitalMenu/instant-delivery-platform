import Button from "../Button";

import * as ButtonsAccordionStyles from "./styles.ts";

interface ButtonsAccordionProps {
  listData: string[];
  actionAccordion: () => void;
  onClickSelectedItem: (item: string) => void;
  isActiveFilter: boolean;
  searchParam?: string;
}

const ButtonsAccordion = ({
  listData,
  actionAccordion,
  onClickSelectedItem,
  isActiveFilter,
  searchParam
}: ButtonsAccordionProps) => {
  const isItemSelected = (item: string) => {
    return searchParam === item;
  };

  return (
    <ButtonsAccordionStyles.Container>
      <Button
        size="full"
        variant={isActiveFilter ? "default" : "outline"}
        textColor={isActiveFilter ? "white" : "gray-lighter"}
        onClick={() => actionAccordion()}
      >
        Categorias
      </Button>
      <ButtonsAccordionStyles.ListButtonsContent>
        {listData.map((item) => (
          <Button
            size="full"
            variant={isItemSelected(item) ? "default" : "outline"}
            textColor={isItemSelected(item) ? "white" : "gray-lighter"}
            key={item}
            onClick={() => {
              onClickSelectedItem(item);
            }}
          >
            {item}
          </Button>
        ))}
      </ButtonsAccordionStyles.ListButtonsContent>
    </ButtonsAccordionStyles.Container>
  );
};

export default ButtonsAccordion;
