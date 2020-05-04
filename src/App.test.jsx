import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

jest.mock('../assets/stylesheets/fonts.css');

describe('App', () => {
  it('renders Welcome message', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('바쁜 일상');
  });
});
