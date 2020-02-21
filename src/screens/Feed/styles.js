import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  horizontal: false,
  contentContainerStyle: { paddingBottom: 30, paddingTop: 30, paddingLeft: 10, paddingRight: 10 },
  showHorizontalScrollIndicator: false,
})`
  flex: 1;
`;

export const ProductByCategory = styled.View`
  margin-bottom: 50px;
`;

export const ProductGroup = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingBottom: 10, paddingTop: 10 },
  showHorizontalScrollIndicator: false,
})``;

export const CategoryBox = styled.View`
  padding: 0 10px;
  color: #666;
`;

export const Category = styled.Text`
  font-size: 22px;
`;

export const Product = styled.TouchableOpacity`
  background-color: #333;
  padding: 0;
  border-color: #ddd;
  border-width: 1px;
  width: 260px;
  height: 260px;
  justify-content: center;
  align-items: center;
  elevation: 5;
  margin: 0 5px;
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
  background-color: #AA5EFF;
  padding: 8px;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
`;

export const ButtonText = styled.Text`
  color: #fff;
`;