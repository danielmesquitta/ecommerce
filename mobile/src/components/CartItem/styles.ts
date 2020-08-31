import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 15px 0;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderImage = styled.Image`
  height: 100px;
  width: 100px;
`;

export const HeaderText = styled.View`
  flex: 1;
  padding-left: 10px;
`;

export const HeaderTitle = styled.Text``;

export const HeaderPrice = styled.Text``;

export const DeleteButton = styled.TouchableOpacity`
  padding: 20px;
`;

export const Footer = styled.View`
  width: 98%;
  border-radius: 5px;
  background: #f5f5f5;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Amount = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AmountQty = styled.TextInput`
  color: #222;
  margin-left: 10px;
`;

export const Subtotal = styled.Text`
  color: #222;
  font-weight: bold;
  font-size: 18px;
`;
