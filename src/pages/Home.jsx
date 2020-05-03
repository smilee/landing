import React from 'react';

import styled from '@emotion/styled';

import { colors, fonts } from '../designSystem';

const Header = styled.header({
  ...fonts.heading,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  padding: '.5em',
  textAlign: 'center',
  background: colors.gray,
  color: colors.black,
});

const Jumbotron = styled.div({
  padding: '2em',
  paddingTop: '5em',
});

const Headline = styled.h1({
  ...fonts.bold,
  fontSize: '3em',
  marginBottom: '.5em',
});

const SupportingCopy = styled.h2({
  ...fonts.thin,
  fontSize: '1.5em',
});

const Section = styled.section({
  padding: '2em',
});

const Heading = styled.h2({
  ...fonts.heading,
});

const Footer = styled.footer({
  ...fonts.bold,
  textAlign: 'center',
});

export default function Home() {
  return (
    <>
      <Header>
        헤더
      </Header>
      <Jumbotron>
        <Headline>바쁜 일상, 평범한 하루</Headline>
        <SupportingCopy>최소한의 노력으로 소중한 관계를 지키자.</SupportingCopy>
      </Jumbotron>
      <Section>
        <Heading>
          인간관계를 소중히 여기시나요?
          저희도 그렇습니다.
        </Heading>
      </Section>
      <Section>
        <Heading>
          그렇습니다...
        </Heading>
      </Section>
      <Section>
        <Heading>
          그렇다구요...
        </Heading>
      </Section>
      <Footer>
        (푸터)
      </Footer>
    </>
  );
}
