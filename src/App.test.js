import { render, screen } from '@testing-library/react';
import App from './App';

test('renders simonbox link', () => {
  render(<App />);
  const linkElement = screen.getByText(/simonbox/i);
  expect(linkElement).toBeInTheDocument();
});
