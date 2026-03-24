import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import * as EnterpriseMenuStyles from "./styles.ts";
import api from "../../../services/api.ts";

import { PlaceholderItemMenu } from "#root/assets/index.ts";
import Typography from "#root/components/Typography/index.tsx";
import { useState } from "react";
import mockedData from "./mock.ts";
import EnterpriseMenuSidebar from "./sidebar.tsx";

interface MenuItemProps {
  title: string;
  description: string;
  originalPrice: number;
  promotionPrice?: number;
  promotionPercentage?: number;
  imageUrl: string;
}

interface MenuCategoryProps {
  name: string;
  items: MenuItemProps[];
  color?: string;
}

export interface EnterpriseMenuDataProps {
  name: string;
  status: "open" | "closed";
  openingHours: { open: string; close: string };
  minOrder: number;
  imageUrl: string;
  categories: MenuCategoryProps[];
}

function EnterpriseMenu() {
  const navigate = useNavigate();

  const [menuData, setMenuData] = useState<EnterpriseMenuDataProps>(mockedData);
  const [searchParams, setSearchParams] = useState({
    query: "",
    category: ""
  });

  const handleChangeCategoryFilter = (category: string) => {
    setSearchParams((params) => {
      return { query: params.query, category };
    });
  };

  const filteredData = menuData?.categories
    .map((category) => {
      const filtered = category.items.filter((item) =>
        item.title.toLowerCase().includes(searchParams.query.toLowerCase())
      );
      return filtered.length > 0 ? { ...category, items: filtered } : null;
    })
    .filter(Boolean) as MenuCategoryProps[];

  const filteredItems = filteredData.filter((category) => {
    if (searchParams.category) {
      return category.name === searchParams.category;
    }
    return true;
  });

  const listCategories =
    menuData?.categories.map((category) => category.name) || [];

  return (
    <EnterpriseMenuStyles.Container>
      <EnterpriseMenuSidebar
        menuData={menuData}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        handleChangeCategoryFilter={handleChangeCategoryFilter}
        listCategories={listCategories}
      />
      <EnterpriseMenuStyles.RightContent>
        {filteredItems.length > 0 ? (
          filteredItems.map((category) => (
            <EnterpriseMenuStyles.CategoryBox key={category.name}>
              <EnterpriseMenuStyles.CategoryTitle color={category.color}>
                <Typography variant="bolder" as="h4" size="fit">
                  {category.name}
                </Typography>
              </EnterpriseMenuStyles.CategoryTitle>
              <EnterpriseMenuStyles.CategoryItemsBox>
                {category.items.map((item) => (
                  <EnterpriseMenuStyles.CategoryItemCard key={item.title}>
                    <EnterpriseMenuStyles.CategoryItemsImage
                      src={PlaceholderItemMenu}
                    />

                    <EnterpriseMenuStyles.CategoryItemCardContent>
                      <div className="">
                        <Typography variant="bolder" as="h4" size="fit">
                          {item.title}
                        </Typography>
                        <EnterpriseMenuStyles.CategoryItemsPriceTextDivider
                          color={category.color}
                        />
                        <Typography as="span" size="fit">
                          {item.description}
                        </Typography>
                      </div>
                      <EnterpriseMenuStyles.CategoryItemsPriceBox>
                        <EnterpriseMenuStyles.CategoryItemsPriceText
                          as="h4"
                          size="fit"
                          variant="bolder"
                          color={category.color}
                          dashed={item.promotionPrice ? "enabled" : undefined}
                        >
                          R$ {item.originalPrice.toFixed(2)}
                        </EnterpriseMenuStyles.CategoryItemsPriceText>
                        {item.promotionPrice && (
                          <EnterpriseMenuStyles.CategoryItemsPriceText
                            as="h3"
                            size="fit"
                            variant="bolder"
                            color={category.color}
                          >
                            R$ {item.promotionPrice.toFixed(2)}
                          </EnterpriseMenuStyles.CategoryItemsPriceText>
                        )}
                      </EnterpriseMenuStyles.CategoryItemsPriceBox>
                    </EnterpriseMenuStyles.CategoryItemCardContent>
                  </EnterpriseMenuStyles.CategoryItemCard>
                ))}
              </EnterpriseMenuStyles.CategoryItemsBox>
            </EnterpriseMenuStyles.CategoryBox>
          ))
        ) : (
          <Typography variant="bolder" as="h3" size="fit">
            Nenhum item encontrado para "{searchParams.query}"
          </Typography>
        )}
      </EnterpriseMenuStyles.RightContent>
    </EnterpriseMenuStyles.Container>
  );
}

export default EnterpriseMenu;
