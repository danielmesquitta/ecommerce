import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import ApiResponse from '~/@types/ApiResponse';

export const Container = styled.View``;

export const List = styled(FlatList as new () => FlatList<ApiResponse>)``;
