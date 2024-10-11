import React from 'react';
import { render, screen } from '@testing-library/react';
import NewToDoForm from './NewToDoForm';
import '@testing-library/jest-dom';

it('renders without crashing', () => {
  const mockAddToDo = jest.fn();
  render(<NewToDoForm addToDo={mockAddToDo} />);
  expect(screen.getByLabelText('New Task?')).toBeInTheDocument();
});