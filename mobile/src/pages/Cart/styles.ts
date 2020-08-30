import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Table = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  showsVerticalScrollIndicator: false,
})`
  flex-grow: 0;
  background: #fff;
  width: 100%;
  border-radius: 5px;
  background: #fafafa;
`;

export const Footer = styled.View``;

export const Total = styled.Text`
  color: #999;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  margin: 20px 0;
`;

export const TotalPrice = styled.Text`
  color: #222;
  font-size: 28px;
`;

export const Button = styled(RectButton)`
  width: 100%;
  background: steelblue;
  border-radius: 5px;
  align-items: center;
  padding: 15px 20px;
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fafafa;
  text-transform: uppercase;
  font-weight: bold;
`;
