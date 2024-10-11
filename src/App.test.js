import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
    render(<App />);
});

// Snapshot test
it('matches snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders the logo', () => {
    render(<App />);
    expect(screen.getByAltText('Task List Notepad Logo')).toBeInTheDocument();
});

it('renders the ToDoList component', () => {
    render(<App />);
    expect(screen.getByLabelText('New Task?')).toBeInTheDocument();
});