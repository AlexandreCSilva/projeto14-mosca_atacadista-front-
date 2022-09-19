import mosca from "../../../images/mosca.png";
import styled from "styled-components";

export default function Logo({ size = "small" }) {
  return (
    <Wrapper size={size}>
      <img src={mosca} alt="" />
      <Title>
        <h1>Mosca Atacadista</h1>
      </Title>
    </Wrapper>
  );
}

const LogoStyle = styled.div`
  font-family: "Lobster";
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${(props) => {
    if (props.size === "large") {
      return "width: 285px;";
    }

    if (props.size === "small") {
      return "width: 195px;";
    }
  }}

  img {
    ${(props) => {
      let config = "";

      if (props.size === "large") {
        config += "height: 100px; top: -20px; left: -110px;";
      }

      if (props.size === "small") {
        config += "height: 60px; top: -8px; left: -68px;";
      }

      return config;
    }}
    transform: rotate(45deg);
  }

  h1 {
    ${(props) => {
      let config = "";

      if (props.size === "large") {
        config += "font-size: 40px;";
      }

      if (props.size === "small") {
        config += "font-size: 25px;";
      }

      return config;
    }}

    color: white;
    font-weight: 400;
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: min-content;
`;

const Wrapper = styled(LogoStyle)`
  ${(props) => {
    if (props.size === "small") {
      return "padding: 0px 0px 0px 20px;";
    }
  }}
`;
