import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons/';

import { 
  Container,
  ProductList,
  Product,
  ProductThumbnail,
  ProductDescription,
  ProductName,
  ProductPrice,
  ProductAmount,
  Buttons,
  AddButton,
  SubtractButton,
  FinishButton,
  ButtonText,
  TotalTitle,
  TotalBox,
  Total,
  Bottom,
  Wrapper,
} from './styles';

export default function Cart() {
  const productPrice = 210;

  const [amount, setAmount] = useState(1);
  const [total, setTotal] = useState(productPrice);

  function handleAdd() {
    setAmount(amount + 1);
    setTotal(amount == 0 ? productPrice : total + productPrice);
  };

  function handleSubtract() {
    setAmount(amount == 0 ? 0 : amount - 1);
    setTotal(amount <= 1 ? productPrice : total - productPrice);
  };

  return (
    <Container>
      <ProductList>
        <Product>
          <ProductThumbnail source={{ uri: 'https://cdn.webshopapp.com/shops/186401/files/284556393/asics-asics-jolt-2-ladies-running-shoes-2019.jpg' }}/>
          <ProductDescription>
            <ProductName>Asics Jolt</ProductName>
            <ProductPrice>R$ {productPrice}</ProductPrice>
          </ProductDescription>
          <ProductAmount>
            {amount}
          </ProductAmount>
          <Buttons>
            <AddButton onPress={handleAdd}>
              <MaterialIcons name='add' color='#00ff00' size={36}/>
            </AddButton>
            <SubtractButton onPress={handleSubtract}>
              <MaterialIcons name='remove' color='#ff0000' size={36}/>
            </SubtractButton>
          </Buttons>
        </Product>
      </ProductList>
      <Bottom>
        <TotalBox>
          <TotalTitle>Total:</TotalTitle>
          <Total>R$ {total == 0 ? productPrice : total}</Total>
        </TotalBox>
        <Wrapper>
          <FinishButton>
            <ButtonText>FINISH</ButtonText>
          </FinishButton>
        </Wrapper>
      </Bottom>
    </Container>
  );
}
