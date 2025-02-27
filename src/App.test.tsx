import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders initial count', () => {
  render(<App />);
  const countElement = screen.getByText('0');
  expect(countElement).toBeInTheDocument();
});

test('increases count when Increase button is clicked', () => {
  render(<App />);
  const increaseButton = screen.getByText(/increase/i);
  fireEvent.click(increaseButton);
  const countElement = screen.getByText('1');
  expect(countElement).toBeInTheDocument();
});

test('decreases count when Decrease button is clicked', () => {
  render(<App />);
  const decreaseButton = screen.getByText(/decrease/i);
  fireEvent.click(decreaseButton);
  const countElement = screen.getByText('-1');
  expect(countElement).toBeInTheDocument();
});

test('resets count when Reset button is clicked', () => {
  render(<App />);
  const increaseButton = screen.getByText(/increase/i);
  fireEvent.click(increaseButton);
  const resetButton = screen.getByText(/reset/i);
  fireEvent.click(resetButton);
  const countElement = screen.getByText('0');
  expect(countElement).toBeInTheDocument();
});

test('swings sign when Swing sign button is clicked', () => {
  render(<App />);
  const increaseButton = screen.getByText(/increase/i);
  fireEvent.click(increaseButton);
  const swingSignButton = screen.getByText(/swing sign/i);
  fireEvent.click(swingSignButton);
  const countElement = screen.getByText('-1');
  expect(countElement).toBeInTheDocument();
});
