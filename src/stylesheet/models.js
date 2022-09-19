import styled from "styled-components";

const LogoStyle = styled.div`
  position: relative;
  font-family: "Lobster";

  img {
    position: absolute;
    height: 60px;
    transform: rotate(45deg);
    top: -8px;
    left: -68px;
  }

  h1 {
    color: white;
    font-size: 25px;
    font-weight: 400;
  }
`;

const Form = styled.div`
  margin-top: 20px;
  font-family: "Raleway";

  input {
    padding: 0 3%;
    margin: 0 0 10px 6%;
    width: 80%;
    height: 58px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  button {
    margin-left: 40%;
    height: 46px;
    border: none;
    padding: 5px;
    border-radius: 5px;
    background-color: #4e6a5e;
    color: white;
    margin-top: 10px;
    cursor: pointer;
    font-size: 20px;
  }

  input::placeholder {
    color: black;
  }
`;

const ContentBoxStyle = styled.div`
  background-color: white;
  width: 90%;
  border-radius: 25px;
  margin-bottom: 100px;
`;

const ContentStyle = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background: linear-gradient(to top, #aea972, #6a8e7f);
`;

const SellingStyle = styled.div`
  display: table;
  margin: 20px;
  margin-left: 8%;

  a {
    float: left;
    text-decoration: none;
    background-color: white;
    max-width: 45%;
    width: 45%;
    height: 210px;
    margin-top: 20px;
    border-radius: 15px;
    font-family: "Raleway";
    color: black;
    margin-right: 5%;
    position: relative;

    img {
      border-radius: 15px 15px 0 0;
      object-fit: contain;
      width: 100%;
      height: 70%;
    }

    h2 {
      margin-left: 10px;
    }

    h3 {
      position: absolute;
      right: 10px;
      bottom: 5px;
      text-align: right;
      color: #d45c3e;
    }
  }
`;

const MainInfoStyle = styled.div`
  padding: 5% 10%;
  h2 {
    font-family: "Raleway";
    font-size: 34px;
  }

  h3 {
    font-family: "Raleway";
    text-align: right;
    color: #d45c3e;
    font-size: 24px;
  }
`;

export {
  LogoStyle,
  ContentBoxStyle,
  ContentStyle,
  SellingStyle,
  MainInfoStyle,
  Form,
};
