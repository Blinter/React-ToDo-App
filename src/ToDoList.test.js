import React from 'react';
import { render, screen } from '@testing-library/react';
import ToDoList from './ToDoList';

it('renders without crashing', () => {
  render(<ToDoList />);
});

it('renders NewToDoForm component', () => {
  render(<ToDoList />);
  expect(screen.getByLabelText('New Task?')).toBeInTheDocument();
});