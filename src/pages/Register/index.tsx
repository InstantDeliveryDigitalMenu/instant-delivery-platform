import * as RegisterStyles from "./styles.ts";

import TextFlag from "#root/components/TextFlag/index.tsx";
import Typography from "#root/components/Typography/index.tsx";
import Divider from "#root/components/Divider/index.tsx";
import InputText from "#root/components/InputText/index.tsx";
import InputTextArea from "#root/components/InputTextarea/index.tsx";
import InputSelect from "#root/components/InputSelect/index.tsx";
import { InstantDeliveryLogo } from "#root/assets/index.ts";

interface StepItemProps {
  number: number;
  step: string;
}

function Register() {
  const StepItem = ({ number, step }: StepItemProps) => {
    return (
      <RegisterStyles.StepsItem first={number === 1} last={number === 6}>
        <div>
          <div className="pipe">{number !== 1 ? "|" : null}</div>
          <RegisterStyles.StepsDotNumber>
            {number}
          </RegisterStyles.StepsDotNumber>
          <div className="pipe">{number !== 6 ? "|" : null}</div>
        </div>
        <Typography as="h3" variant="lighter" color="white">
          {step}
        </Typography>
      </RegisterStyles.StepsItem>
    );
  };

  return (
    <RegisterStyles.Container>
      <RegisterStyles.Content>
        <RegisterStyles.RightContent>
          <RegisterStyles.LogoContainer>
            <InstantDeliveryLogo />
          </RegisterStyles.LogoContainer>
          <Typography as="h1" color="white" variant="bolder">
            Transforme o seu jeito de atender:
          </Typography>
          <Typography as="h3" color="white">
            cadastro rápido, processos ágeis e mais tempo para cuidar dos seus
            clientes.
          </Typography>
          <RegisterStyles.StepsContainer>
            <StepItem number={1} step="Dados Gerais" />
            <StepItem number={2} step="Aparência" />
            <StepItem number={3} step="Pagamento" />
            <StepItem number={4} step="Entrega" />
            <StepItem number={5} step="Contato" />
            <StepItem number={6} step="Detalhes de Usuário" />
          </RegisterStyles.StepsContainer>
        </RegisterStyles.RightContent>
        <RegisterStyles.leftContent>
          <Typography as="h2" variant="bolder" color="gray">
            Dados Gerais - Etapa 1 de 6
          </Typography>
          <Divider />
          <Typography as="h4">
            Preencha as informações principais do seu estabelecimento para que
            ele seja identificado e exibido corretamente na plataforma.
          </Typography>
          <InputText
            name="Name"
            label="Nome:"
            placeholder="Nome do seu Estabelecimento"
            fullWidth
            isRequired
          />
          <InputTextArea
            name="Description"
            label="Descrição:"
            placeholder="Escreva um resumo breve e atrativo sobre o seu negócio"
            fullWidth
            isRequired
          />
          <RegisterStyles.UrlContainer>
            <Typography as="h4">URL:</Typography>
            <TextFlag>
              <Typography as="h4" variant="lighter" color="lighter">
                Essa é a forma como seus clientes acessarão seu estabelecimento,
                não use caracteres especiais, pontos, vírgulas, acentos ou
                cedilha.
              </Typography>
            </TextFlag>
            <TextFlag>
              <Typography as="h4" variant="lighter" color="lighter">
                Exemplo:<strong> salgadodoalvin</strong>.instantdelivery.com.br
              </Typography>
            </TextFlag>
            <div>
              <InputText
                name="url"
                placeholder="Sua URL personalizada"
                isRequired
                fullWidth
              />
              <RegisterStyles.UrlSufixContainer>
                <Typography as="h4" variant="lighter" color="lighter">
                  .instantdelivery.com.br
                </Typography>
              </RegisterStyles.UrlSufixContainer>
            </div>
          </RegisterStyles.UrlContainer>
          <InputSelect
            name="segment"
            label="Segmento:"
            placeholder="Sua URL personalizada"
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
          />
          <RegisterStyles.AddressContainer>
            <InputSelect
              name="state"
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
            />
            <InputSelect
              name="state"
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
            />
          </RegisterStyles.AddressContainer>
        </RegisterStyles.leftContent>
      </RegisterStyles.Content>
    </RegisterStyles.Container>
  );
}

export default Register;
