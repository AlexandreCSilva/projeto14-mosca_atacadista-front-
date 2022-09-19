import styled from "styled-components";
import { useState } from "react";
import { ContentStyle, Form } from "../stylesheet/models.js";
import { Oval } from "react-loader-spinner";
import { useNavigate, Link } from "react-router-dom";
import { postSignUp } from "../services/services.js";
import { signUpSchema } from "../Schemas/signUpSchema.js";
import Logo from "./components/shared/Logo.js";

function SignUp() {
  const navigate = useNavigate();
  const [isAble, setIsAble] = useState(true);
  const [form, setForm] = useState({
    name: "",
    profilePictureURL: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const signUp = (event) => {
    event.preventDefault();
    const validation = signUpSchema.validate(form, { abortEarly: false });

    if (validation.error !== undefined) {
      alert(validation.error.message);
      return;
    }

    setIsAble(false);

    const body = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    postSignUp(body)
      .then((response) => {
        setIsAble(true);
        localStorage.setItem("auth", JSON.stringify(response.data));
        navigate("/homepage");
      })
      .catch((response) => {
        setIsAble(true);
        console.log(response);
        alert("Ocorreu um erro ao cadastrar, tente novamente.");
      });
  };

  return (
    <Content>
      <Logo size="large" />
      <Form>
        <form onSubmit={signUp}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleForm}
            placeholder="Nome"
            disabled={!isAble}
          />
          <input
            type="text"
            name="profilePictureURL"
            value={form.profilePictureURL}
            onChange={handleForm}
            placeholder="URL da foto de perfil"
            disabled={!isAble}
          />
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleForm}
            placeholder="E-mail"
            disabled={!isAble}
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleForm}
            placeholder="Senha"
            disabled={!isAble}
          />
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleForm}
            placeholder="Confirme sua senha"
            disabled={!isAble}
          />
          <button type="submit">
            {isAble ? (
              "Cadastrar"
            ) : (
              <Oval
                height="20"
                width="80"
                color="white"
                secondaryColor="#AEA972"
                visible={true}
              />
            )}
          </button>
        </form>
      </Form>

      <Link to="/">Já possui uma conta? Faca login!</Link>
    </Content>
  );
}

export { SignUp };

const Content = styled(ContentStyle)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  a {
    text-decoration: none;
    color: white;
    text-align: center;
    margin-top: 40px;
    width: 30%;
  }
`;
