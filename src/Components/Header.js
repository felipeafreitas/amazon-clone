import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container>
      <HeaderLogo>
        <Link to="/">
          <img
            src={
              "https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
            }
            alt="amazon-logo"
          />
        </Link>
      </HeaderLogo>

      <HeaderOptionAddress>
        <LocationOnIcon />

        <HeaderOption>
          <OptionLineOne>Hello,</OptionLineOne>
          <OptionLineTwo>Select your adress</OptionLineTwo>
        </HeaderOption>
      </HeaderOptionAddress>

      <HeaderSearch>
        <HeaderSearchInput type="text" />

        <HeaderSearchIconContainer>
          <SearchIcon />
        </HeaderSearchIconContainer>
      </HeaderSearch>

      <HeaderNavitems>
        <HeaderOption>
          <OptionLineOne>Hello, Sincopeiro</OptionLineOne>
          <OptionLineTwo>Account & Lists</OptionLineTwo>
        </HeaderOption>

        <HeaderOption>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>
        </HeaderOption>

        <HeaderOptionCart>
          <Link to="/cart">
            <ShoppingBasketIcon />
            <CartCount>5</CartCount>
          </Link>
        </HeaderOptionCart>
      </HeaderNavitems>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: space-between;
`;
const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin-left: 11px;
  }
`;

const HeaderOptionAddress = styled.div`
  padding-left: 9px;
  display: flex;
  align-items: center;
`;

const OptionLineOne = styled.div``;

const OptionLineTwo = styled.div`
  font-weight: 700;
`;

const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
  background-color: white;

  :focus-within {
    box-shadow: 0 0 0 3px #f90;
  }
`;
const HeaderSearchInput = styled.input`
  flex-grow: 1;
  border: 0;
  :focus {
    outline: none;
  }
`;
const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  width: 45px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderNavitems = styled.div`
  display: flex;
`;
const HeaderOption = styled.div`
  padding: 10px 9px;
`;
const CartCount = styled.div`
  padding-left: 4px;
  color: #f08804;
  font-weight: 700;
`;
const HeaderOptionCart = styled.div`
  display: flex;
  align-items: center;
  padding-right: 9px;
  a {
    display: flex;
    align-items: center;
    padding-right: 9px;
    color: white;
    text-decoration: none;
  }
`;
