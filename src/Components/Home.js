import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
import { db } from "../firebase";

function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    db.collection("products").onSnapshot((snapshot) => {
      let tempProducts = [];

      console.log(snapshot);

      tempProducts = snapshot.docs.map(doc => doc.data());

      console.log(tempProducts);
    });
  };

  getProducts();

  return (
    <Container>
      <Banner></Banner>
      <Content>
        <Product></Product>
        <Product></Product>
      </Content>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;
const Banner = styled.div`
  background-image: url("https://i.imgur.com/SYHeuYM.jpg");
  min-height: 600px;
  background-position: center;
  background-size: cover;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;
const Content = styled.div`
  background-color: white;
  padding: 0px 10px;
  margin-top: -350px;
  display: flex;
`;
