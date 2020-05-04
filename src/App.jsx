import React from 'react';

import styled from '@emotion/styled';

import '../assets/stylesheets/fonts.css';

import Home from './pages/Home';

const Container = styled.div({
  fontFamily: 'NanumBarunpen, Apple SD Gothic Neo, Dotum',
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
