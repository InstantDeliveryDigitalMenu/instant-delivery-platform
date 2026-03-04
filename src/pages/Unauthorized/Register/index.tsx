import { useNavigate } from "react-router-dom";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";

import * as LoginStyles from "./styles.ts";
import api from "../../../services/api.ts";
import Typography from "#root/components/Typography/index.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import InputText from "#root/components/InputText/index.tsx";
import Button from "#root/components/Button/index.tsx";

interface FormSchema {
  email: string;
  password: string;
}

function Register() {
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
        .post("/accounts-google", {
          idToken: credential
        })
        .then(() => {
          toast.success(
            "Registro realizado com sucesso! Faça login para continuar."
          );
          navigate("/login");
        })
        .catch((err) => {
          if (err.message.includes("409")) {
            toast.error("Usuário já registrado com o Google!");
            console.log(err);
          } else {
            toast.error("Erro ao realizar seu registro com o Google!");
            console.log(err);
          }
        });
    }
  };

  return (
    <LoginStyles.Container>
      <LoginStyles.Content>
        <Typography as="h4" color="lighter" size="fit">
          Cadastre-se
        </Typography>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <InputText
            label="Email:"
            placeholder="Email"
            fullWidth
            isRequired
            {...register("email", { required: true })}
            errorMessage={errors.email && "Este campo é obrigatório"}
          />
          <InputText
            label="Senha:"
            placeholder="Senha"
            fullWidth
            isRequired
            {...register("password", { required: true })}
            errorMessage={errors.password && "Este campo é obrigatório"}
          />
          <LoginStyles.GoogleLoginBox>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                handleGoogleLoginSuccess(credentialResponse);
              }}
              onError={() => {
                toast.error("Erro ao realizar registro com Google!");
              }}
            />
          </LoginStyles.GoogleLoginBox>
          <Button type="submit">Cadastrar</Button>
        </form>
      </LoginStyles.Content>
    </LoginStyles.Container>
  );
}

export default Register;
