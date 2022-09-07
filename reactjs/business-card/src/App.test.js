import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the headline name', () => {
  render(<App />);
  const text = screen.getByText(/Ronye Vernaes/i);
  expect(text).toBeInTheDocument();
});
