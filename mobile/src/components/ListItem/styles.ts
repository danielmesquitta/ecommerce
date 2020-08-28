import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin: 10px 20px;
  background: #fafafa;
  border-radius: 5px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #222;
`;

export const Price = styled.Text`
  font-size: 22px;
  color: #222;
`;

export const Button = styled(RectButton)`
  width: 100%;
  margin-top: auto;
  background: steelblue;
  border-radius: 5px;
`;

export const IconContainer = styled.View`
  background: #0002;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fafafa;
`;
