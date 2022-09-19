import styled from 'styled-components';
import { ContentStyle, ContentBoxStyle, MainInfoStyle} from '../stylesheet/models.js';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import EmblaCarousel from "./EmblaCarouselProduct.js";
import { getProductsById } from '../services/services.js';
import Menu from './components/shared/Menu.js';

function Confirm (){
    const { productid } = useParams();
    const auth = JSON.parse(localStorage.getItem('auth'));
    const config = { headers: {'Authorization': 'Bearer '+ auth}, params: { 'productId': productid}};
    let SLIDE_COUNT = 6;
    let slides = Array.from(Array(SLIDE_COUNT).keys());
    const [ media, setMedia ] = useState([[], [], [], [], [], []])
    const [ product, setProduct ] = useState([]);
    let mediaByIndex = index => media[index % media.length];

    useEffect(() => {
        getProductsById(config).then(
            (response) => {
                if (response.data) {
                    setProduct(response.data);
                    console.log(response.data)
                    setMedia([response.data.url, response.data.promotion]);
                    mediaByIndex = index => media[index % media.length];
                    SLIDE_COUNT = response.data.length;
                    slides = Array.from(Array(SLIDE_COUNT).keys());
                }
            })
    }, []);

    return (
        <Content>
            <Menu />
               
               
            <ContentBox>
                <EmblaCarousel slides={[slides, mediaByIndex]} />

                <MainInfo>
                    <h2>{product.name}</h2>
                    <h3>{product.value -((product.value * product.promotion)/100)} </h3>
                </MainInfo>

                <div>
                    <p>Descrição:</p>
                    <p>{product.description}</p>
                </div>

                <div>
                    <button onClick={() => {alert('Compra finalizada com sucesso!')}}>
                        Finalizar compra
                    </button>
                </div>
            </ContentBox>
        </Content>
    );
}

export { Confirm };

const Content = styled(ContentStyle)`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;

    p {
        width: 100%;
        top: 45%;
        font-family: 'Raleway';
        text-align: left;
    } 
`;


const ContentBox = styled(ContentBoxStyle)`
    .embla {
        max-width: 100%;
        padding: 0;
    }

    .embla__slide {
        min-width: 100%;
    }    

    .embla__slide__inner {
        height: 80vw;
        border-radius: 15px 15px 0 0;
    }

    .embla__slide__img {
        position: absolute;
    }

    &  > div {
        padding: 3%;

        p {
            margin-top: 10px;
            font-family: 'Raleway'
        }

        
    }
    & :nth-child(4)  button {
            height: 90px;
            width: 100%;
            border: none;
            border-radius: 15px;
            background-color:  #6a8e7f;
            color: white;
            font-family: 'Raleway';
            font-size: 32px;
        }
`;

const MainInfo = styled(MainInfoStyle)``;