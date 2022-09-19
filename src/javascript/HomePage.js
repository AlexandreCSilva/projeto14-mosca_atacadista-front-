import styled from "styled-components";
import { ContentStyle, SellingStyle } from "../stylesheet/models.js";
import Menu from "./components/shared/Menu.js";
import { useNavigate, Link } from "react-router-dom";
import EmblaCarousel from "./EmblaCarousel.js";
import { getProducts, getProductsInPromotion } from "../services/services.js";
import { useEffect, useState } from "react";

function HomePage () {
    const navigate = useNavigate();
    const auth = JSON.parse(localStorage.getItem('auth'));
    const config = { headers:{'Authorization': 'Bearer '+ auth}};
    const [ products, setProducts ] = useState([]);
    let SLIDE_COUNT = 6;
    let slides = Array.from(Array(SLIDE_COUNT).keys());
    const [ media, setMedia ] = useState([[], [], [], [], [], []])
    let mediaByIndex = index => media[index % media.length];
    
    useEffect(() => {
        getProducts(config).then(
            function (response) {
                if (response) {
                    setProducts(response.data);
                }
            })
        getProductsInPromotion(config).then(
            function (response) {
                if (response.data) {
                    let arr = [];
                    response.data.map((promotionProduct) => {
                        arr.push([promotionProduct.url, promotionProduct.promotion, promotionProduct._id]);
                    })
                    setMedia(arr);
                    mediaByIndex = index => media[index % media.length];
                }
            })
    }, []);
    
    const selectCategory = (event) => {
        const category = event.target.value;
        navigate('/products/'+category)
    }

    return (
        <Content>
            <Menu />
               
            <EmblaCarousel slides={[slides, mediaByIndex]} />
                
            <Selling>
                    {products ? (products.map((product) => {
                            return (
                                <Link to={'/product/'+product.productId} key={product.productId}>
                                    <img src={product.url}/>
                                    <h2>{product.name}</h2>
                                    <h3>{product.value}</h3>
                                </Link>
                            );
                        })) : <></>}
            </Selling>
        
        </Content>
    );
}

export { HomePage };

const Content = styled(ContentStyle)`
    display: flex;
    align-items: center;
    flex-direction: column;

    .embla {
        margin-top: 120px;
        width: 100%
    }
`;

const Selling = styled(SellingStyle)``;