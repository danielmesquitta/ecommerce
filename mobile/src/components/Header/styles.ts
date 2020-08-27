import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { StatusBar } from 'react-native';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${StatusBar.currentHeight
      ? StatusBar.currentHeight + 15 + 'px'
      : '15px'}
    20px 15px;
  background: #ddd;
  border: 2px solid #ccc;
`;

export const Logo = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;

export const LogoText = styled.Text`
  color: #222;
  font-size: 22px;
`;

export const Cart = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  padding-right: 3px;
`;

export const Amount = styled.View`
  position: absolute;
  right: -3px;
  bottom: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: steelblue;
  width: 20px;
  height: 20px;
  border-radius: 15px;
`;

export const AmountText = styled.Text`
  color: #fafafa;
  font-size: 12px;
  font-weight: bold;
`;
