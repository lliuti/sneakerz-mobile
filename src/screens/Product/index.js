import React from 'react';
import { MaterialIcons } from '@expo/vector-icons/';

import { 
  Container,
  ProductName,
  ProductImage,
  BuyContainer,
  ProductPrice,
  AddToCartButton,
  ButtonText,
  ProductDescription,
  DescriptionTitle,
  DescriptionText,
} from './styles';

export default function Product({ navigation }) {
  return (
    <Container>
      <ProductName>Asics Jolt</ProductName>
      <ProductImage source={{ uri: 'https://cdn.webshopapp.com/shops/186401/files/284556393/asics-asics-jolt-2-ladies-running-shoes-2019.jpg' }}/>
      <BuyContainer>
        <ProductPrice>R$ 210,00</ProductPrice>
        <AddToCartButton onPress={() =>
          navigation.navigate('Feed')
        }>
          <ButtonText>Add to cart</ButtonText>
        </AddToCartButton>
      </BuyContainer>
      <ProductDescription>
        <DescriptionTitle>
          Details:
        </DescriptionTitle>
        <DescriptionText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolorem enim reprehenderit ea odit veritatis? Quisquam, ut. Cum maiores voluptatibus sapiente rerum, mollitia sunt, nostrum facilis, dignissimos sint aspernatur tenetur!
        </DescriptionText>
      </ProductDescription>
    </Container>
  );
}
