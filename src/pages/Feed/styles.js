import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const ProductList = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingBottom: 10, paddingTop: 10 },
  showHorizontalScrollIndicator: false,
})``;

export const ProductBox = styled.View`
  background-color: #333;
  padding: 0;
  border-color: #ddd;
  border-width: 1px;
  width: 250px;
  height: 250px;
  justify-content: center;
  align-items: center;
  elevation: 10;
`;

export const Thumbnail = styled.Image`
  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
`;

export const ProductDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

export const ProductTitle = styled.Text`
  color: #999;
  font-size: 20px;
`;

export const ProductPrice = styled.Text`
  color: #fff;
  font-size: 24px;
`;

export const AddToCart = styled.TouchableOpacity`
  background-color: #21FF7A;
  padding: 4px;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
`;

export const ButtonText = styled.Text`
  color: #fff;
`;