import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 300px;
  margin: auto 20px;
  padding: 0px 20px 30px;
  background: #fff;
  border-radius: 5px;
  height: 500px;
  justify-content: space-between;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 250px;
  border-radius: 5px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 250px;
  height: 250px;
`;

export const TextContainer = styled.View``;

export const Title = styled.Text`
  font-size: 20px;
  color: #222;
  margin-bottom: 10px;
`;

export const Price = styled.Text`
  font-size: 24px;
  color: #222;
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  width: 100%;
  background: steelblue;
  border-radius: 5px;
  align-items: center;
`;

export const IconContainer = styled.View`
  background: #0002;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
`;

export const ButtonText = styled.Text`
  margin-left: 10px;
  font-size: 16px;
  color: #fafafa;
`;
