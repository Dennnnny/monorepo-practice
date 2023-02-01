import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';

const APP = () => (
  <Router>
    <App />
  </Router>
);

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<APP />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<APP />);
    expect(getByText(/Welcome/gi)).toBeTruthy();
  });
});
