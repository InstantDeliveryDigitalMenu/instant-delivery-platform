import Button from "#root/components/Button/index.tsx";
import Divider from "#root/components/Divider/index.tsx";
import InputFile from "#root/components/InputFile/index.tsx";
import InputText from "#root/components/InputText/index.tsx";
import TextFlag from "#root/components/TextFlag/index.tsx";
import Typography from "#root/components/Typography/index.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import * as AppearanceStyles from "./styles";

interface AppearanceProps {
  nextStep: () => void;
  lastStep: () => void;
}

interface FormSchema {
  mainColor: string;
}

function Appearance({ nextStep, lastStep }: AppearanceProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormSchema>();
  const handleFormSubmit: SubmitHandler<FormSchema> = (data) => {
    console.log(data);
    if (data) {
      nextStep();
    }
  };

  console.log("Payment");

  return (
    <AppearanceStyles.Container>
      <AppearanceStyles.Content>
        <AppearanceStyles.NavButtonsContainer>
          <AppearanceStyles.NavButtonsContent>
            <AppearanceStyles.NavButton>GERAL</AppearanceStyles.NavButton>
            <AppearanceStyles.NavButton active="true">
              APARÊNCIA
            </AppearanceStyles.NavButton>
            <AppearanceStyles.NavButton>PAGAMENTO</AppearanceStyles.NavButton>
            <AppearanceStyles.NavButton>ENTREGA</AppearanceStyles.NavButton>
            <AppearanceStyles.NavButton>CONTATO</AppearanceStyles.NavButton>
            <AppearanceStyles.NavButton>DADOS</AppearanceStyles.NavButton>
          </AppearanceStyles.NavButtonsContent>
        </AppearanceStyles.NavButtonsContainer>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Typography as="h2" variant="bolder" color="gray-darker">
            Apresentação - Etapa 2 de 6
          </Typography>
          <Divider />
          <Typography as="h4" color="lighter">
            Aqui você pode deixar seu perfil com a sua cara! Siga as instruções
            abaixo para configurar tudo da maneira correta.
          </Typography>
          <AppearanceStyles.ContentWrapper>
            <AppearanceStyles.LeftContent>
              <div>
                <Typography as="h4" variant="bolder" color="lighter">
                  Foto de Perfil:
                </Typography>
                <TextFlag>
                  <Typography as="h4" variant="lighter" color="lighter">
                    Envie uma imagem quadrada e centralizada, que represente bem
                    você ou sua marca.
                  </Typography>
                </TextFlag>
                <InputFile
                  title="Arraste sua foto de perfil ou "
                  subtitle="Tamanho ideal: 600px x 600px"
                />
              </div>
              <div>
                <Typography as="h4" variant="bolder" color="lighter">
                  Capa:
                </Typography>
                <TextFlag>
                  <Typography as="h4" variant="lighter" color="lighter">
                    Envie uma imagem quadrada e centralizada, que represente bem
                    você ou sua marca.
                  </Typography>
                </TextFlag>
                <InputFile title="Arraste sua imagem de capa ou " subtitle="" />
              </div>
            </AppearanceStyles.LeftContent>
            <AppearanceStyles.RightContent>
              <div className="infos">
                <Typography as="h4" variant="bolder" color="lighter">
                  Cor personalizada:
                </Typography>
                <TextFlag>
                  <Typography as="h4" variant="lighter" color="lighter">
                    Escolha a cor que combina com sua identidade!
                  </Typography>
                </TextFlag>
                <TextFlag>
                  <Typography as="h4" variant="lighter" color="lighter">
                    Se já tiver uma cor da sua marca (em formato hexadecimal,
                    como #27293e), cole abaixo.
                  </Typography>
                </TextFlag>
                <InputText
                  isRequired
                  fullWidth
                  leftIcon="🎨#"
                  {...register("mainColor")}
                  errorMessage={errors.mainColor && "Este campo é obrigatório"}
                />
              </div>
              <div className="buttons">
                <Button size="xl" onClick={() => lastStep()}>
                  ANTERIOR
                </Button>
                <Button size="xl" type="submit">
                  PRÓXIMO
                </Button>
              </div>
            </AppearanceStyles.RightContent>
          </AppearanceStyles.ContentWrapper>
        </form>
        <Divider />
      </AppearanceStyles.Content>
    </AppearanceStyles.Container>
  );
}

export default Appearance;
