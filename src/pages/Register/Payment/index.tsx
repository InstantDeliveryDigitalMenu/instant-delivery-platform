import Button from "#root/components/Button/index.tsx";
import Divider from "#root/components/Divider/index.tsx";
import Typography from "#root/components/Typography/index.tsx";
import { SubmitHandler, useForm } from "react-hook-form";

import * as PaymentStyles from "./styles";
import TextFlag from "#root/components/TextFlag/index.tsx";
import InputText from "#root/components/InputText/index.tsx";
import { useState } from "react";

interface PaymentProps {
  nextStep: () => void;
  lastStep: () => void;
}

interface FormSchema {
  minimumOrder: string;
  otherForms: string;
}

const Payment: React.FunctionComponent<PaymentProps> = ({
  nextStep,
  lastStep
}) => {
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

  const [paymentMethods, setPaymentMethods] = useState({
    money: true,
    pix: true,
    debitCard: true,
    creditCard: true,
    foodTicket: true
  });

  const handleMethodChange = (method: string, value: boolean) => {
    setPaymentMethods((prevState) => ({
      ...prevState,
      [method]: value
    }));
  };

  const AceptMethod = ({
    method,
    handleChange
  }: {
    method: boolean;
    handleChange: (value: boolean) => void;
  }) => {
    return (
      <PaymentStyles.ButtonsBox>
        <Button
          size="xl"
          color={method ? "primary" : "gray"}
          textColor={method ? "white" : "lighter"}
          onClick={() => handleChange(!method)}
        >
          Sim
        </Button>
        <Button
          size="xl"
          color={method ? "gray" : "primary"}
          textColor={method ? "lighter" : "white"}
          onClick={() => handleChange(!method)}
        >
          Não
        </Button>
      </PaymentStyles.ButtonsBox>
    );
  };

  return (
    <PaymentStyles.Container>
      <PaymentStyles.Content>
        <PaymentStyles.NavButtonsContainer>
          <PaymentStyles.NavButtonsContent>
            <PaymentStyles.NavButton>GERAL</PaymentStyles.NavButton>
            <PaymentStyles.NavButton active="true">
              APARÊNCIA
            </PaymentStyles.NavButton>
            <PaymentStyles.NavButton>PAGAMENTO</PaymentStyles.NavButton>
            <PaymentStyles.NavButton>ENTREGA</PaymentStyles.NavButton>
            <PaymentStyles.NavButton>CONTATO</PaymentStyles.NavButton>
            <PaymentStyles.NavButton>DADOS</PaymentStyles.NavButton>
          </PaymentStyles.NavButtonsContent>
        </PaymentStyles.NavButtonsContainer>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div>
            <Typography as="h2" variant="bolder" color="gray">
              Pagamento - Etapa 3 de 6
            </Typography>
            <Divider />
            <Typography as="h4" color="lighter">
              Informe aqui as formas de pagamento que o seu estabelecimento
              aceita.
            </Typography>
            <PaymentStyles.HeaderBox>
              <Typography as="h4" variant="bolder" color="lighter">
                Qual o valor do pedido minímo?
              </Typography>
              <TextFlag>
                <Typography as="h4" variant="lighter" color="lighter">
                  Caso não haja pedido minímo no seu estabelecimento, deixe o
                  campo em branco
                </Typography>
              </TextFlag>
              <InputText
                placeholder="Valor do pedido minímo"
                isRequired
                fullWidth
                {...register("minimumOrder")}
                errorMessage={errors.minimumOrder && "Este campo é obrigatório"}
              />
              <Typography as="h4" variant="bolder" color="lighter">
                Quais formas de pagamento seu estabelecimento aceita?
              </Typography>
              <TextFlag>
                <Typography as="h4" variant="lighter" color="lighter">
                  Marque “sim” para as formas de pagamento que seu
                  estabelecimento aceitar e informe quais bandeiras.
                </Typography>
              </TextFlag>
            </PaymentStyles.HeaderBox>
          </div>
          <PaymentStyles.ContentWrapper>
            <PaymentStyles.CardContent>
              <div className="header">
                <Button size="full" disabled>
                  Dinheiro
                </Button>
                <AceptMethod
                  method={paymentMethods.money}
                  handleChange={(value) => handleMethodChange("money", value)}
                />
              </div>
              <div className="header">
                <Button size="full">Pix</Button>

                <AceptMethod
                  method={paymentMethods.money}
                  handleChange={(value) => handleMethodChange("pix", value)}
                />
              </div>
            </PaymentStyles.CardContent>
            <PaymentStyles.CardContent>
              <div className="header">
                <Button size="xl">Ticket Alimentação</Button>
                <AceptMethod
                  method={paymentMethods.foodTicket}
                  handleChange={(value) =>
                    handleMethodChange("foodTicket", value)
                  }
                />
              </div>
              <div className="">
                <InputText
                  isRequired
                  fullWidth
                  label="Bandeira"
                  inputSize="sm"
                  {...register("otherForms")}
                  errorMessage={errors.otherForms && "Este campo é obrigatório"}
                />
                <InputText
                  isRequired
                  fullWidth
                  label="Bandeira"
                  inputSize="sm"
                  {...register("otherForms")}
                  errorMessage={errors.otherForms && "Este campo é obrigatório"}
                />
                <InputText
                  isRequired
                  fullWidth
                  label="Bandeira"
                  inputSize="sm"
                  {...register("otherForms")}
                  errorMessage={errors.otherForms && "Este campo é obrigatório"}
                />
                <InputText
                  isRequired
                  fullWidth
                  label="Bandeira"
                  inputSize="sm"
                  {...register("otherForms")}
                  errorMessage={errors.otherForms && "Este campo é obrigatório"}
                />
              </div>
            </PaymentStyles.CardContent>
            <PaymentStyles.CardContent wrappered="true">
              <PaymentStyles.CardWrapper>
                <div className="header">
                  <Button size="full">Cartão de Débito</Button>
                  <AceptMethod
                    method={paymentMethods.creditCard}
                    handleChange={(value) =>
                      handleMethodChange("creditCard", value)
                    }
                  />
                </div>
                <div className="">
                  <InputText
                    isRequired
                    fullWidth
                    label="Bandeira"
                    inputSize="sm"
                    errorMessage={
                      errors.otherForms && "Este campo é obrigatório"
                    }
                    {...register("otherForms")}
                  />
                  <InputText
                    isRequired
                    fullWidth
                    label="Bandeira"
                    inputSize="sm"
                    {...register("otherForms")}
                    errorMessage={
                      errors.otherForms && "Este campo é obrigatório"
                    }
                  />
                  <InputText
                    isRequired
                    fullWidth
                    label="Bandeira"
                    inputSize="sm"
                    {...register("otherForms")}
                    errorMessage={
                      errors.otherForms && "Este campo é obrigatório"
                    }
                  />
                  <InputText
                    isRequired
                    fullWidth
                    label="Bandeira"
                    inputSize="sm"
                    {...register("otherForms")}
                    errorMessage={
                      errors.otherForms && "Este campo é obrigatório"
                    }
                  />
                </div>
              </PaymentStyles.CardWrapper>
              <PaymentStyles.CardWrapper>
                <div className="header">
                  <Button size="full">Cartão de Crédito</Button>
                  <AceptMethod
                    method={paymentMethods.debitCard}
                    handleChange={(value) =>
                      handleMethodChange("debitCard", value)
                    }
                  />
                </div>
                <div className="">
                  <InputText
                    isRequired
                    fullWidth
                    label="Bandeira"
                    inputSize="sm"
                    {...register("otherForms")}
                    errorMessage={
                      errors.otherForms && "Este campo é obrigatório"
                    }
                  />
                  <InputText
                    isRequired
                    fullWidth
                    label="Bandeira"
                    inputSize="sm"
                    {...register("otherForms")}
                    errorMessage={
                      errors.otherForms && "Este campo é obrigatório"
                    }
                  />
                  <InputText
                    isRequired
                    fullWidth
                    label="Bandeira"
                    inputSize="sm"
                    {...register("otherForms")}
                    errorMessage={
                      errors.otherForms && "Este campo é obrigatório"
                    }
                  />
                  <InputText
                    isRequired
                    fullWidth
                    label="Bandeira"
                    inputSize="sm"
                    {...register("otherForms")}
                    errorMessage={
                      errors.otherForms && "Este campo é obrigatório"
                    }
                  />
                </div>
              </PaymentStyles.CardWrapper>
            </PaymentStyles.CardContent>
          </PaymentStyles.ContentWrapper>
          <PaymentStyles.Footer>
            <InputText
              placeholder="Outra forma de pagamento"
              isRequired
              fullWidth
              {...register("otherForms")}
              errorMessage={errors.otherForms && "Este campo é obrigatório"}
            />
            <div className="buttons">
              <Button size="xl" onClick={() => lastStep()}>
                ANTERIOR
              </Button>
              <Button size="xl" onClick={() => nextStep()}>
                PRÓXIMO
              </Button>
            </div>
          </PaymentStyles.Footer>
        </form>
        <Divider />
      </PaymentStyles.Content>
    </PaymentStyles.Container>
  );
};

export default Payment;
