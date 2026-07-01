import { render, screen } from '@testing-library/react';
import Hero from './components/Hero';

test('renders the home hero heading', () => {
  render(<Hero />);
  const headingElement = screen.getByText(/design\. build\./i);
  expect(headingElement).toBeInTheDocument();
});
