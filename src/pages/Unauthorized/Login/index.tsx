import { useNavigate } from "react-router-dom";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";

import * as LoginStyles from "./styles.ts";
import api from "../../../services/api.ts";
import { SubmitHandler, useForm } from "react-hook-form";
import InputText from "#root/components/InputText/index.tsx";
import Button from "#root/components/Button/index.tsx";
import { MailIcon, PadlockIcon, RestaurantImage } from "#root/assets/index.ts";
import Typography from "#root/components/Typography/index.tsx";

interface FormSchema {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormSchema>();

  const handleFormSubmit: SubmitHandler<FormSchema> = (data) => {
    console.log(data);
    if (data) {
      // nextStep();
    }
  };

  const handleGoogleLoginSuccess = (credentialResponse: CredentialResponse) => {
    const { credential } = credentialResponse;

    if (credential) {
      api
        .post("/sessions-google", {
          idToken: credential
        })
        .then((response) => {
          console.log(response);
          navigate("/home");
        })
        .catch((err) => {
          toast.error("Erro ao realizar login com Google!");
          console.log(err);
        });
    }
  };

  return (
    <LoginStyles.Container>
      <LoginStyles.LeftContent>
        <LoginStyles.LoginLogo />
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <LoginStyles.InputContainer>
            <InputText
              placeholder="Email"
              fullWidth
              isRequired
              {...register("email", { required: true })}
              errorMessage={errors.email && "Este campo é obrigatório"}
              leftIcon={<MailIcon />}
            />
            <InputText
              placeholder="Senha"
              fullWidth
              isRequired
              {...register("password", { required: true })}
              errorMessage={errors.password && "Este campo é obrigatório"}
              leftIcon={<PadlockIcon />}
            />
          </LoginStyles.InputContainer>
          <LoginStyles.RememberMeBox>
            <input type="checkbox" id="rememberMe" />
            <Typography variant="default" as="label" htmlFor="rememberMe">
              Mantenha-me conectado
            </Typography>
          </LoginStyles.RememberMeBox>
          <LoginStyles.ButtonsBox>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                handleGoogleLoginSuccess(credentialResponse);
              }}
              onError={() => {
                toast.error("Erro ao realizar login com Google!");
              }}
            />
            <Button type="submit" size="xl">
              Entrar
            </Button>
          </LoginStyles.ButtonsBox>
        </form>
      </LoginStyles.LeftContent>
      <LoginStyles.RightContent>
        <img src={RestaurantImage} alt="Imagem Ilustrativa - Restaurante" />
      </LoginStyles.RightContent>
    </LoginStyles.Container>
  );
}

export default Login;
