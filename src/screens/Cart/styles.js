import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
  padding: 20px;
`;

export const Product = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #333;
  padding: 10px 05px;
  margin-bottom: 10px;
`;
export const ProductThumbnail = styled.Image`
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
`;
export const ProductDescription = styled.View`
  align-items: center;
  justify-content: center;
`;
export const ProductName = styled.Text`
  color: #f5f5f5;
  font-size: 22px;
`;
export const ProductPrice = styled.Text`
  color: #ddd;
  font-size: 18px;
`;
export const ProductAmount = styled.Text`
  color: #f5f5f5;
  font-size: 22px;
`;
export const Buttons = styled.View`
  align-items: center;
  justify-content: center;
`;
export const AddButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;  
`;
export const SubtractButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;