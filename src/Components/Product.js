import React from "react";
import styled from "styled-components";

function Product() {
  return (
    <Container>
      <Title>Ipad Pro</Title>
      <Price>R$10.000,00</Price>
      <Rating>*****</Rating>
      <Image
        src={
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_GEO_BR?wid=470&hei=556&fmt=png-alpha&.v=1583552356258"
        }
      />
      <ActionSection>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  background-color: white;
  z-index: 100;
  max-height: 400px;
  flex: 1;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span``;
const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
`;
const Rating = styled.div``;
const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
`;

const ActionSection = styled.div`
  display: grid;
  place-items: center;
  margin-top: 12px;
`;
const AddToCartButton = styled.button`
  width: 100px;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  border-radius: 2px;
  height: 30px;
`;
