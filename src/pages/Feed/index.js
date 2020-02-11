import React from 'react';
import { MaterialIcons } from '@expo/vector-icons/';

import { 
  Container, 
  ProductList, 
  ProductBox, 
  Thumbnail, 
  ProductDetails, 
  ProductTitle, 
  ProductPrice,
  AddToCart,
  ButtonText,
} from './styles';

export default function Feed() {
  return (
    <Container>
      <ProductList>
        <ProductBox>
          <ProductTitle>Jordan 87F</ProductTitle>
          <ProductPrice>R$ 385,90</ProductPrice>
          <Thumbnail source={{ uri: 'https://imageswscdn.wslojas.com.br/files/20717/MED_air-jordan-1-chicago-593069.png' }}/>
          <AddToCart>
            <MaterialIcons name='shopping-cart' color='#333' size={24}/>
          </AddToCart>
        </ProductBox>
        <ProductBox>
          <ProductTitle>Nike Air M32</ProductTitle>
          <ProductPrice>R$ 385,90</ProductPrice>
          <Thumbnail source={{ uri: 'https://cdn.shopify.com/s/files/1/1115/8382/products/air-jordan-footwear-air-jordan-3-retro-se-boy-s-grade-school-14861450838112_2048x.png?v=1581134564' }}/>
          <AddToCart>
            <MaterialIcons name='shopping-cart' color='#333' size={24}/>
          </AddToCart>
        </ProductBox>
      </ProductList>
    </Container>
  );
}
