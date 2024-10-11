import React from 'react';
import { render, screen } from '@testing-library/react';
import ToDo from './ToDo';

it('renders without crashing', () => {
  render(
    <ToDo
      id="test-id"
      name="Test Task"
      status="Not Completed"
      removal={() => {}}
      statusChange={() => {}}
    />
  );
});

// Snapshot test
it('matches snapshot', () => {
  const { asFragment } = render(
    <ToDo
      id="test-id"
      name="Test Task"
      status="Not Completed"
      removal={() => {}}
      statusChange={() => {}}
    />);
  expect(asFragment()).toMatchSnapshot();
});

it('displays the task name', () => {
  render(
    <ToDo
      id="test-id"
      name="Test Task"
      status="Not Completed"
      removal={() => {}}
      statusChange={() => {}}
    />
  );
  expect(screen.getByText('Test Task')).toBeInTheDocument();
});

it('has a removal button', () => {
  render(
    <ToDo
      id="test-id"
      name="Test Task"
      status="Not Completed"
      removal={() => {}}
      statusChange={() => {}}
    />
  );
  expect(screen.getByRole('button', { name: /x/i })).toBeInTheDocument();
});

it('has a status change button', () => {
  render(
    <ToDo
      id="test-id"
      name="Test Task"
      status="Not Completed"
      removal={() => {}}
      statusChange={() => {}}
    />
  );
  expect(screen.getByRole('button', { name: /not completed/i })).toBeInTheDocument();
});