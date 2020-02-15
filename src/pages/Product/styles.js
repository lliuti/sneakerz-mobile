import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #333;
  /* margin-top: ${StatusBar.currentHeight}px; */
  padding: 20px;
`;

export const ProductName = styled.Text`
  color: #f5f5f5;
`;

export const ProductImage = styled.Image``;

export const BuyContainer = styled.View``;

export const ProductPrice = styled.Text`
  color: #f5f5f5;
`;

export const AddToCartButton = styled.TouchableOpacity``;

export const ButtonText = styled.Text`
  color: #f5f5f5;
`;