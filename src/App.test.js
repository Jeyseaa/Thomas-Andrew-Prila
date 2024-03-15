import { render, screen } from '@testing-library/react';
import AuthForm from './AuthForm';

test('renders learn react link', () => {
  render(<AuthForm />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
