import React from 'react';
import { render } from '@testing-library/react';

import Home from './Home';

describe('Home', () => {
  it('renders Welcome message', () => {
    const { container } = render(<Home />);

    expect(container).toHaveTextContent('소중한 관계를 지키자');
  });
});
