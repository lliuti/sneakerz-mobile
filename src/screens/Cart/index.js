import React from 'react';
import { MaterialIcons } from '@expo/vector-icons/';

import { 
  Container,
  Product,
  ProductThumbnail,
  ProductDescription,
  ProductName,
  ProductPrice,
  ProductAmount,
  Buttons,
  AddButton,
  SubtractButton
} from './styles';

export default function Cart() {
  return (
    <Container>
      <Product>
        <ProductThumbnail source={{ uri: 'https://cdn.webshopapp.com/shops/186401/files/284556393/asics-asics-jolt-2-ladies-running-shoes-2019.jpg' }}/>
        <ProductDescription>
          <ProductName>Asics Jolt</ProductName>
          <ProductPrice>R$ 215,90</ProductPrice>
        </ProductDescription>
        <ProductAmount>
          1
        </ProductAmount>
        <Buttons>
          <AddButton>
            <MaterialIcons name='add' color='#00ff00' size={36}/>
          </AddButton>
          <SubtractButton>
            <MaterialIcons name='remove' color='#ff0000' size={36}/>
          </SubtractButton>
        </Buttons>
      </Product>
    </Container>
  );
}
