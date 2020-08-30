import React, { useEffect, useState } from 'react';

import { Container, List } from './styles';
import ListItem from '~/components/ListItem';
import api from '~/services/api';
import { ApiResponse } from '~/@types';

const Home: React.FC = () => {
  const [apiResponse, setApiResponse] = useState<ApiResponse[]>([]);

  useEffect(() => {
    api
      .get<ApiResponse[]>('/products')
      .then(response => setApiResponse(response.data));
  }, []);

  return (
    <Container>
      <List
        data={apiResponse}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <ListItem item={item} />}
        horizontal
      />
    </Container>
  );
};

export default Home;
