import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 20px 10px;
  padding-top: ${10 + StatusBar.currentHeight}px;
  background: #AA5EFF;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 26px;
`;