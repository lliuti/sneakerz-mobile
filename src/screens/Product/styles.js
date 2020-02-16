import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #333;
  /* margin-top: ${StatusBar.currentHeight}px; */
  padding: 20px;
  align-items: center;
`;

export const ProductName = styled.Text`
  color: #f5f5f5;
  font-size: 32px;
`;

export const ProductImage = styled.Image`
  width: 250px;
  height: 250px;
`;

export const BuyContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ProductPrice = styled.Text`
  color: #f5f5f5;
  font-size: 22px;
  margin-right: 80px;
`;

export const AddToCartButton = styled.TouchableOpacity`
  background: #cf5;
  padding: 10px 20px;
  border-radius: 10px;
  elevation: 2;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #333;
  font-size: 22px;
`;

export const ProductDescription = styled.View`
  margin-top: 50px;
  flex-direction: column;
`;

export const DescriptionTitle = styled.Text`
  color: #fff;
  font-size: 22px;
  margin-bottom: 10px;
`;

export const DescriptionText = styled.Text`
  color: #ddd;
  font-size: 18px;
`;