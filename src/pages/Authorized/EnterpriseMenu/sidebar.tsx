import {
  ClockIcon,
  CoinIcon,
  GrayBulletIcon,
  GreenBulletIcon
} from "#root/assets/index.ts";
import Button from "#root/components/Button/index.tsx";
import ButtonsAccordion from "#root/components/Buttons-Accordion/index.tsx";
import InputText from "#root/components/InputText/index.tsx";
import Typography from "#root/components/Typography/index.tsx";
import { EnterpriseMenuDataProps } from ".";
import * as EnterpriseMenuStyles from "./styles.ts";

interface EnterpreseMenuSidebarProps {
  menuData: EnterpriseMenuDataProps;
  searchParams: { query: string; category: string };
  setSearchParams: (params: { query: string; category: string }) => void;
  handleChangeCategoryFilter: (category: string) => void;
  listCategories: string[];
  primaryColor: string;
  secundaryColor: string;
}

const EnterpriseMenuSidebar = ({
  menuData,
  searchParams,
  setSearchParams,
  handleChangeCategoryFilter,
  listCategories,
  primaryColor,
  secundaryColor
}: EnterpreseMenuSidebarProps) => {
  const enterpriseDisplayedName =
    menuData?.name.length > 50
      ? `${menuData?.name.substring(0, 50)}...`
      : menuData?.name;

  const categoryFilterActive = listCategories.includes(searchParams.category);

  const customColors = { primary: primaryColor, secundary: secundaryColor };

  const colors = !categoryFilterActive ? customColors : undefined;

  return (
    <EnterpriseMenuStyles.LeftContent>
      <EnterpriseMenuStyles.EnterpriseMenuLogo
        src={menuData?.imageUrl}
        alt={`Logo do Restaurante - ${menuData?.name || "Nome do Restaurante"}`}
      />
      <EnterpriseMenuStyles.SideBarContainer>
        <Typography variant="bolder" as="h3" size="fit">
          {enterpriseDisplayedName || "Nome do Restaurante"}
        </Typography>
        <EnterpriseMenuStyles.InformationBox>
          <Typography as="h4">
            <EnterpriseMenuStyles.InformationIconBox>
              {menuData?.status === "open" ? (
                <GreenBulletIcon />
              ) : (
                <GrayBulletIcon />
              )}
            </EnterpriseMenuStyles.InformationIconBox>
            {menuData?.status === "open" ? "Aberto" : "Fechado"}
          </Typography>
          <Typography as="h4">
            <EnterpriseMenuStyles.InformationIconBox>
              <ClockIcon />
            </EnterpriseMenuStyles.InformationIconBox>
            Funcionamento:{" "}
            {`${menuData?.openingHours?.open}h - ${menuData?.openingHours?.close}h`}
          </Typography>
          <Typography as="h4">
            <EnterpriseMenuStyles.InformationIconBox>
              <CoinIcon />
            </EnterpriseMenuStyles.InformationIconBox>
            Pedido minímo: R${" "}
            {menuData?.minOrder?.toLocaleString("pt-BR", {
              minimumFractionDigits: 2
            }) ?? "0,00"}
          </Typography>
        </EnterpriseMenuStyles.InformationBox>
        <EnterpriseMenuStyles.FilterBox>
          <InputText
            placeholder="Busque no cardápio"
            fullWidth
            value={searchParams.query}
            onChange={(e) =>
              setSearchParams({ ...searchParams, query: e.target.value })
            }
          />
          <EnterpriseMenuStyles.ButtonsBox>
            <Button
              size="full"
              onClick={() => {
                handleChangeCategoryFilter("");
              }}
              customColors={colors}
              color="secondary"
              textColor="gray-lighter"
              variant={!categoryFilterActive ? "default" : "outline"}
            >
              Menu
            </Button>
            <ButtonsAccordion
              actionAccordion={() => console.log("")}
              listData={listCategories}
              onClickSelectedItem={handleChangeCategoryFilter}
              isActiveFilter={categoryFilterActive}
              searchParam={searchParams.category}
              customColors={customColors}
            />
            <Button size="full" variant="outline" textColor="gray-lighter">
              Fale conosco
            </Button>
          </EnterpriseMenuStyles.ButtonsBox>
        </EnterpriseMenuStyles.FilterBox>
      </EnterpriseMenuStyles.SideBarContainer>
    </EnterpriseMenuStyles.LeftContent>
  );
};

export default EnterpriseMenuSidebar;
