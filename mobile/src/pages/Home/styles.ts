import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { ApiResponse } from '~/@types';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #eee;
`;

export const List = styled(FlatList as new () => FlatList<ApiResponse>)`
  flex: 1;
`;
