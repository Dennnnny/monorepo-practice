import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; //MemoryRouter
import Shop from './shop';

describe('Shop', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Router>
        <Shop />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });
});
