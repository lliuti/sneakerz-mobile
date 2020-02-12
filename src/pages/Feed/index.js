import React from 'react';
import { MaterialIcons } from '@expo/vector-icons/';

import { 
  Container, 
  ProductByCategory,
  ProductGroup, 
  Product, 
  Thumbnail,  
  ProductTitle, 
  ProductPrice,
  AddToCart,
  //
  CategoryBox,
  Category,
} from './styles';

export default function Feed() {
  return (
    <Container>
      <ProductByCategory>
        <CategoryBox>
          <Category>Basketball</Category>
        </CategoryBox>
        <ProductGroup>
          <Product>
            <ProductTitle>Jordan 87F</ProductTitle>
            <ProductPrice>R$ 385,90</ProductPrice>
            <Thumbnail source={{ uri: 'https://imageswscdn.wslojas.com.br/files/20717/MED_air-jordan-1-chicago-593069.png' }}/>
            <AddToCart>
              <MaterialIcons name='shopping-cart' color='#333' size={24}/>
            </AddToCart>
          </Product>
          <Product>
            <ProductTitle>Nike Air M32</ProductTitle>
            <ProductPrice>R$ 385,90</ProductPrice>
            <Thumbnail source={{ uri: 'https://cdn.shopify.com/s/files/1/1115/8382/products/air-jordan-footwear-air-jordan-3-retro-se-boy-s-grade-school-14861450838112_2048x.png?v=1581134564' }}/>
            <AddToCart>
              <MaterialIcons name='shopping-cart' color='#333' size={24}/>
            </AddToCart>
          </Product>
        </ProductGroup>
      </ProductByCategory>
      <ProductByCategory>
        <CategoryBox>
          <Category>Basketball</Category>
        </CategoryBox>
        <ProductGroup>
          <Product>
            <ProductTitle>Jordan 87F</ProductTitle>
            <ProductPrice>R$ 385,90</ProductPrice>
            <Thumbnail source={{ uri: 'https://imageswscdn.wslojas.com.br/files/20717/MED_air-jordan-1-chicago-593069.png' }}/>
            <AddToCart>
              <MaterialIcons name='shopping-cart' color='#333' size={24}/>
            </AddToCart>
          </Product>
          <Product>
            <ProductTitle>Nike Air M32</ProductTitle>
            <ProductPrice>R$ 385,90</ProductPrice>
            <Thumbnail source={{ uri: 'https://cdn.shopify.com/s/files/1/1115/8382/products/air-jordan-footwear-air-jordan-3-retro-se-boy-s-grade-school-14861450838112_2048x.png?v=1581134564' }}/>
            <AddToCart>
              <MaterialIcons name='shopping-cart' color='#333' size={24}/>
            </AddToCart>
          </Product>
        </ProductGroup>
      </ProductByCategory>
      <ProductByCategory>
        <CategoryBox>
          <Category>Basketball</Category>
        </CategoryBox>
        <ProductGroup>
          <Product>
            <ProductTitle>Jordan 87F</ProductTitle>
            <ProductPrice>R$ 385,90</ProductPrice>
            <Thumbnail source={{ uri: 'https://imageswscdn.wslojas.com.br/files/20717/MED_air-jordan-1-chicago-593069.png' }}/>
            <AddToCart>
              <MaterialIcons name='shopping-cart' color='#333' size={24}/>
            </AddToCart>
          </Product>
          <Product>
            <ProductTitle>Nike Air M32</ProductTitle>
            <ProductPrice>R$ 385,90</ProductPrice>
            <Thumbnail source={{ uri: 'https://cdn.shopify.com/s/files/1/1115/8382/products/air-jordan-footwear-air-jordan-3-retro-se-boy-s-grade-school-14861450838112_2048x.png?v=1581134564' }}/>
            <AddToCart>
              <MaterialIcons name='shopping-cart' color='#333' size={24}/>
            </AddToCart>
          </Product>
        </ProductGroup>
      </ProductByCategory>
    </Container>
  );
}
