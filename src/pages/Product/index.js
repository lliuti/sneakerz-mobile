import React from 'react';

import { 
  Container,
  ProductName,
  ProductImage,
  BuyContainer,
  ProductPrice,
  AddToCartButton,
  ButtonText,
} from './styles';

export default function Product() {
  return (
    <Container>
      <ProductName>Nike Air</ProductName>
      <ProductImage source={{ uri: 'https://cdn.webshopapp.com/shops/186401/files/284556393/asics-asics-jolt-2-ladies-running-shoes-2019.jpg' }}/>
      <BuyContainer>
        <ProductPrice>R$ 246,99</ProductPrice>
        <AddToCartButton>
          <ButtonText>Add to Cart</ButtonText>          
        </AddToCartButton>
      </BuyContainer>
    </Container>
  );
}
