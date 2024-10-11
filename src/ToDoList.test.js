import React from 'react';
import { render, screen } from '@testing-library/react';
import ToDoList from './ToDoList';

it('renders without crashing', () => {
  render(<ToDoList />);
});

// Snapshot test
it('matches snapshot', () => {
  const { asFragment } = render(
    <ToDoList />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders NewToDoForm component', () => {
  render(<ToDoList />);
  expect(screen.getByLabelText('New Task?')).toBeInTheDocument();
});