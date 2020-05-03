import React from 'react';

import styled from '@emotion/styled';

import Home from './pages/Home';

const Container = styled.div({
  fontFamily: 'Apple SD Gothic Neo, Dotum',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: 1.4,
  margin: '0 auto',
  width: '90%',
  maxWidth: '1024px',
});

export default function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}
