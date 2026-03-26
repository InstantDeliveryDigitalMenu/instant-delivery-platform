import {
  FacebookIcon,
  InstagramIcon,
  InstantDeliveryLogoFull,
  WhatsappIcon
} from "#root/assets/index.ts";
import { Link } from "react-router-dom";
import Typography from "../Typography";
import * as FooterStyles from "./styles";

const Footer = () => {
  const linksInstantDelivery = {
    facebook: "https://web.facebook.com/instantdelivery.bh",
    instagram: "https://www.instagram.com/instantdeliveryoficial/",
    whatsapp:
      "https://wa.me/5531972450685?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20voc%C3%AAs%2C%20poderia%20me%20ajudar%3F"
  };

  return (
    <FooterStyles.Container>
      <FooterStyles.LogoBox>
        <InstantDeliveryLogoFull />
      </FooterStyles.LogoBox>
      <FooterStyles.TextBox>
        <Typography variant="bolder" as="h4" size="fit">
          Instant Delivery
        </Typography>
        <Typography as="h4" size="fit" color="gray-darker">
          Rua Cassiterita, Nº 1501, Bairro: Santa Inês
        </Typography>
        <Typography as="h4" size="fit" color="gray-darker">
          CEP: 31080-150, Belo Horizonte/Minas Gerais
        </Typography>
      </FooterStyles.TextBox>
      <FooterStyles.IconsBox>
        <Link to={linksInstantDelivery.whatsapp} target="_blank">
          <WhatsappIcon />
        </Link>
        <Link to={linksInstantDelivery.instagram} target="_blank">
          <InstagramIcon />
        </Link>
        <Link to={linksInstantDelivery.facebook} target="_blank">
          <FacebookIcon />
        </Link>
      </FooterStyles.IconsBox>
    </FooterStyles.Container>
  );
};

export default Footer;
