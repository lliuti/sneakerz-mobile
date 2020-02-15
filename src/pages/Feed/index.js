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

export default function Feed({ navigation }) {
  return (
    <Container>
      <ProductByCategory>
        <CategoryBox>
          <Category>Basketball</Category>
        </CategoryBox>
        <ProductGroup>
          <Product onPress={() =>
            navigation.navigate('Product')
          }>
            <ProductTitle>Jordan 87F</ProductTitle>
            <ProductPrice>R$ 385,90</ProductPrice>
            <Thumbnail source={{ uri: 'https://imageswscdn.wslojas.com.br/files/20717/MED_air-jordan-1-chicago-593069.png' }}/>
            {/* <AddToCart>
              <MaterialIcons name='shopping-cart' color='#333' size={24}/>
            </AddToCart> */}
          </Product>
          <Product onClick={() => {
            navigation.navigate('Product');
          }}>
            <ProductTitle>Nike Air M32</ProductTitle>
            <ProductPrice>R$ 385,90</ProductPrice>
            <Thumbnail source={{ uri: 'https://cdn.shopify.com/s/files/1/1115/8382/products/air-jordan-footwear-air-jordan-3-retro-se-boy-s-grade-school-14861450838112_2048x.png?v=1581134564' }}/>
            {/* <AddToCart>
              <MaterialIcons name='shopping-cart' color='#333' size={24}/>
            </AddToCart> */}
          </Product>
          <Product>
            <ProductTitle>Generic Jordan</ProductTitle>
            <ProductPrice>R$ 655,90</ProductPrice>
            <Thumbnail source={{ uri: 'https://i.ebayimg.com/images/g/ra0AAOSw~HRdzwqy/s-l300.png' }}/>
            {/* <AddToCart>
              <MaterialIcons name='shopping-cart' color='#333' size={24}/>
            </AddToCart> */}
          </Product>
        </ProductGroup>
      </ProductByCategory>
      <ProductByCategory>
        <CategoryBox>
          <Category>Running</Category>
        </CategoryBox>
        <ProductGroup>
          <Product>
            <ProductTitle>Asics Jolt</ProductTitle>
            <ProductPrice>R$ 215,90</ProductPrice>
            <Thumbnail source={{ uri: 'https://cdn.webshopapp.com/shops/186401/files/284556393/asics-asics-jolt-2-ladies-running-shoes-2019.jpg' }}/>
            {/* <AddToCart>
              <MaterialIcons name='shopping-cart' color='#333' size={24}/>
            </AddToCart> */}
          </Product>
          <Product>
            <ProductTitle>Nike Free RN</ProductTitle>
            <ProductPrice>R$ 385,90</ProductPrice>
            <Thumbnail source={{ uri: 'https://media1.popsugar-assets.com/files/thumbor/pDkt7AcMtKwn8X6179F6Zt60khI/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/04/16/709/n/1922729/tmp_GPDTlx_9f1a53cddc457fd4_AQ1316_100_E_PREM_86375.PNG' }}/>
            {/* <AddToCart>
              <MaterialIcons name='shopping-cart' color='#333' size={24}/>
            </AddToCart> */}
          </Product>
        </ProductGroup>
      </ProductByCategory>
      <ProductByCategory>
        <CategoryBox>
          <Category>Skate</Category>
        </CategoryBox>
        <ProductGroup>
          <Product>
            <ProductTitle>Converse 76 Mid</ProductTitle>
            <ProductPrice>R$ 185,90</ProductPrice>
            <Thumbnail source={{ uri: 'https://i.ebayimg.com/images/g/AJ4AAOSw~ftdbYgz/s-l640.png' }}/>
            {/* <AddToCart>
              <MaterialIcons name='shopping-cart' color='#333' size={24}/>
            </AddToCart> */}
          </Product>
          <Product>
            <ProductTitle>Trikeis</ProductTitle>
            <ProductPrice>R$ 205,90</ProductPrice>
            <Thumbnail source={{ uri: 'https://i.pinimg.com/originals/ed/f2/d3/edf2d36c79acc7aa007cc4a7d03657ac.png' }}/>
            {/* <AddToCart>
              <MaterialIcons name='shopping-cart' color='#333' size={24}/>
            </AddToCart> */}
          </Product>
          <Product>
            <ProductTitle>DC</ProductTitle>
            <ProductPrice>R$ 185,90</ProductPrice>
            <Thumbnail source={{ uri: 'https://assets.xtechcommerce.com/uploads/images/medium/9255b194c627235f0e54b452e72e0ae9.png' }}/>
            {/* <AddToCart>
              <MaterialIcons name='shopping-cart' color='#333' size={24}/>
            </AddToCart> */}
          </Product>
        </ProductGroup>
      </ProductByCategory>
    </Container>
  );
}
