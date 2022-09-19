import { Form } from "../stylesheet/models.js";
import { ContentStyle } from "../stylesheet/models.js";
import Menu from "./components/shared/Menu.js";
import { useState } from "react";
import { newProductSchema } from "../Schemas/newProductSchema.js";
import { postProduct } from "../services/services.js";
import { Oval } from "react-loader-spinner";
import styled from "styled-components";

export function AddProductPage() {
  const token = localStorage.getItem("auth");
  const MIN_PRODUCT_PICTURES = 3;
  const [isLoading, setIsLoading] = useState(false);
  const [pictures, setPictures] = useState({
    picture0: "",
    picture1: "",
    picture2: "",
    picture3: "",
    picture4: "",
  });
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: 0,
  });
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  function handlePicture(e) {
    setPictures({
      ...pictures,
      [e.target.name]: e.target.value,
    });
  }

  function newProduct(event) {
    event.preventDefault();
    const picturesArray = [
      pictures.picture0,
      pictures.picture1,
      pictures.picture2,
      pictures.picture3,
      pictures.picture4,
    ];
    const picturesToSend = picturesArray.filter((picture) => {
      if (picture !== "") {
        return true;
      }
      return false
    });
    const toBeValidated = { ...form, pictures: picturesToSend };
    const { value, error } = newProductSchema.validate(toBeValidated, {
      abortEarly: false,
    });

    if (picturesToSend.length < MIN_PRODUCT_PICTURES) {
      alert(
        `Você precisa adicionar, ao menos, ${MIN_PRODUCT_PICTURES} fotos do produto`
      );
      return;
    }

    if (error !== undefined) {
      alert(error.message);
      return;
    }

    setIsLoading(true);
    postProduct(value, config).then(() => {
      alert("Produto criado com sucesso!");
      setForm({
        name: "",
        description: "",
        price: 0,
      });
      setIsLoading(false);
    });
  }

  return (
    <ContentStyle>
      <Menu />
      <Title>Criar Produto</Title>
      <Form>
        <form onSubmit={newProduct}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleForm}
            placeholder="Nome"
            disabled={isLoading}
          />
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleForm}
            placeholder="Descrição"
            disabled={isLoading}
          />
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleForm}
            placeholder="Preço"
            disabled={isLoading}
          />
          <input
            type="text"
            name="picture0"
            value={pictures.picture0}
            onChange={handlePicture}
            placeholder="Foto 1"
            disabled={isLoading}
          />
          <input
            type="text"
            name="picture1"
            value={pictures.picture1}
            onChange={handlePicture}
            placeholder="Foto 2"
            disabled={isLoading}
          />
          <input
            type="text"
            name="picture2"
            value={pictures.picture2}
            onChange={handlePicture}
            placeholder="Foto 3"
            disabled={isLoading}
          />
          <input
            type="text"
            name="picture3"
            value={pictures.picture3}
            onChange={handlePicture}
            placeholder="Foto 4"
            disabled={isLoading}
          />
          <input
            type="text"
            name="picture4"
            value={pictures.picture4}
            onChange={handlePicture}
            placeholder="Foto 5"
            disabled={isLoading}
          />

          <button type="submit">
            {!isLoading ? (
              "Criar"
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
    </ContentStyle>
  );
}

const Title = styled.span`
  font-size: 30px;
  display: flex;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  font-family: "Raleway";
  color: white;
`;
