import { useForm, SubmitHandler } from "react-hook-form";

import * as GeneralStyles from "./styles.ts";

import TextFlag from "#root/components/TextFlag/index.tsx";
import Typography from "#root/components/Typography/index.tsx";
import Divider from "#root/components/Divider/index.tsx";
import InputText from "#root/components/InputText/index.tsx";
import InputTextArea from "#root/components/InputTextarea/index.tsx";
import InputSelect from "#root/components/InputSelect/index.tsx";
import { InstantDeliveryLogo } from "#root/assets/index.ts";
import Button from "#root/components/Button/index.tsx";

interface StepItemProps {
  number: number;
  step: string;
}

interface FormSchema {
  name: string;
  description: string;
  url: string;
  segment: string;
  state: string;
  city: string;
}

interface GeneralProps {
  nextStep: () => void;
}

function General({ nextStep }: GeneralProps) {
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

  const StepItem = ({ number, step }: StepItemProps) => {
    return (
      <GeneralStyles.StepsItem first={number === 1} last={number === 6}>
        <div>
          <div className="pipe">{number !== 1 ? "|" : null}</div>
          <GeneralStyles.StepsDotNumber>{number}</GeneralStyles.StepsDotNumber>
          <div className="pipe">{number !== 6 ? "|" : null}</div>
        </div>
        <Typography as="h3" variant="lighter" color="white">
          {step}
        </Typography>
      </GeneralStyles.StepsItem>
    );
  };

  return (
    <GeneralStyles.Container>
      <GeneralStyles.LeftContent>
        <GeneralStyles.LogoContainer>
          <InstantDeliveryLogo />
        </GeneralStyles.LogoContainer>
        <Typography as="h1" color="white" variant="bolder">
          Transforme o seu jeito de atender:
        </Typography>
        <Typography as="h3" color="white">
          cadastro rápido, processos ágeis e mais tempo para cuidar dos seus
          clientes.
        </Typography>
        <GeneralStyles.StepsContainer>
          <StepItem number={1} step="Dados Gerais" />
          <StepItem number={2} step="Aparência" />
          <StepItem number={3} step="Pagamento" />
          <StepItem number={4} step="Entrega" />
          <StepItem number={5} step="Contato" />
          <StepItem number={6} step="Detalhes de Usuário" />
        </GeneralStyles.StepsContainer>
      </GeneralStyles.LeftContent>
      <GeneralStyles.RightContent>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Typography as="h2" variant="bolder" color="gray">
            Dados Gerais - Etapa 1 de 6
          </Typography>
          <Divider />
          <Typography as="h4">
            Preencha as informações principais do seu estabelecimento para que
            ele seja identificado e exibido corretamente na plataforma.
          </Typography>
          <InputText
            label="Nome:"
            placeholder="Nome do seu Estabelecimento"
            fullWidth
            isRequired
            {...register("name", { required: true })}
            errorMessage={errors.name && "Este campo é obrigatório"}
          />
          <InputTextArea
            label="Descrição:"
            placeholder="Escreva um resumo breve e atrativo sobre o seu negócio"
            fullWidth
            isRequired
            {...register("description", { required: true })}
            errorMessage={errors.name && "Este campo é obrigatório"}
          />
          <GeneralStyles.UrlContainer>
            <Typography as="h4" variant="bolder" color="lighter">
              URL:
            </Typography>
            <TextFlag>
              <Typography as="h4" variant="lighter" color="lighter">
                Essa é a forma como seus clientes acessarão seu estabelecimento,
                não use caracteres especiais, pontos, vírgulas, acentos ou
                cedilha.
              </Typography>
            </TextFlag>
            <TextFlag>
              <Typography as="h4" variant="lighter" color="lighter">
                Exemplo:<strong> salgadodoalvin</strong>
                .instantdelivery.com.br
              </Typography>
            </TextFlag>
            <div>
              <InputText
                placeholder="Sua URL personalizada"
                isRequired
                fullWidth
                {...register("url", { required: true })}
                errorMessage={errors.name && "Este campo é obrigatório"}
              />
              <GeneralStyles.UrlSufixContainer>
                <Typography as="h4" variant="lighter" color="lighter">
                  .instantdelivery.com.br
                </Typography>
              </GeneralStyles.UrlSufixContainer>
            </div>
          </GeneralStyles.UrlContainer>
          <InputSelect
            label="Segmento:"
            placeholder="O segmento do seu Estabelecimento"
            isRequired
            fullWidth
            options={[
              { value: "1", label: "Option 1" },
              { value: "2", label: "Option 2" },
              { value: "1", label: "Option 1" },
              { value: "2", label: "Option 2" },
              { value: "1", label: "Option 1" },
              { value: "2", label: "Option 2" },
              { value: "1", label: "Option 1" },
              { value: "2", label: "Option 2" }
            ]}
            {...register("segment", { required: true })}
            errorMessage={errors.name && "Este campo é obrigatório"}
          />
          <GeneralStyles.AddressContainer>
            <InputSelect
              label="Estado:"
              placeholder="Selecione o seu Estado"
              isRequired
              fullWidth
              options={[
                { value: "1", label: "Option 1" },
                { value: "2", label: "Option 2" },
                { value: "1", label: "Option 1" },
                { value: "2", label: "Option 2" },
                { value: "1", label: "Option 1" },
                { value: "2", label: "Option 2" },
                { value: "1", label: "Option 1" },
                { value: "2", label: "Option 2" }
              ]}
              {...register("state", { required: true })}
              errorMessage={errors.name && "Este campo é obrigatório"}
            />
            <InputSelect
              label="Cidade:"
              placeholder="Selecione a sua Cidade"
              isRequired
              fullWidth
              options={[
                { value: "1", label: "Option 1" },
                { value: "2", label: "Option 2" },
                { value: "1", label: "Option 1" },
                { value: "2", label: "Option 2" },
                { value: "1", label: "Option 1" },
                { value: "2", label: "Option 2" },
                { value: "1", label: "Option 1" },
                { value: "2", label: "Option 2" }
              ]}
              {...register("city", { required: true })}
              errorMessage={errors.name && "Este campo é obrigatório"}
            />
          </GeneralStyles.AddressContainer>
          <Button type="submit">Enviar</Button>
        </form>
      </GeneralStyles.RightContent>
    </GeneralStyles.Container>
  );
}

export default General;
