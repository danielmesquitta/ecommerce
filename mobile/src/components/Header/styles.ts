import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: #ddd;
  border-bottom-color: #ccc;
  border-bottom-width: 2px;
`;

export const Logo = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const LogoText = styled.Text`
  color: #222;
  font-size: 22px;
`;

export const Cart = styled.TouchableOpacity`
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
