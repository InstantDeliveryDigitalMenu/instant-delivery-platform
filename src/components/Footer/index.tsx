import {
  FacebookIcon,
  InstagramIcon,
  InstantDeliveryLogoFull,
  WhatsappIcon
} from "#root/assets/index.ts";
import Typography from "../Typography";
import * as FooterStyles from "./styles";

const Footer = () => {
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
        <WhatsappIcon />
        <InstagramIcon />
        <FacebookIcon />
      </FooterStyles.IconsBox>
    </FooterStyles.Container>
  );
};

export default Footer;
