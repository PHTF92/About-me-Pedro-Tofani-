import React from 'react';
import { render, cleanup, waitForDomChange, fireEvent } from '@testing-library/react';
import App from './App';

afterEach(cleanup);
const divs = ['teste1', 'teste2', 'teste3', 'teste4', 'teste5', 'teste6', 'teste6', 'teste7', 'teste8', 'teste9']

describe('Common Path', () => {
  test("Renders the empity game", () => {
    const { getByTestId } = render(<App />);
    divs.map(teste => {
      expect(getByTestId(teste)).toHaveTextContent('')
    })
  })
  test("Mark exactly the square", () => {
    const { getByTestId } = render(<App />);
    fireEvent.click(getByTestId('teste1'));
    expect(getByTestId('teste1')).toHaveTextContent('O')
  })
  test('Alternate clicks generate different simbols', () => {
    const { getByTestId } = render(<App />);
    fireEvent.click(getByTestId('teste1'));
    expect(getByTestId('teste1')).toHaveTextContent('O')
    fireEvent.click(getByTestId('teste2'));
    expect(getByTestId('teste2')).toHaveTextContent('X')
    fireEvent.click(getByTestId('teste3'));
    expect(getByTestId('teste3')).toHaveTextContent('O')
    fireEvent.click(getByTestId('teste4'));
    expect(getByTestId('teste4')).toHaveTextContent('X')
  })
  test('Recognizing horizontal win conditions', () => {
    const { getByTestId, getByText } = render(<App />);
    fireEvent.click(getByTestId('teste1'));
    fireEvent.click(getByTestId('teste4'));
    fireEvent.click(getByTestId('teste2'));
    fireEvent.click(getByTestId('teste5'));
    fireEvent.click(getByTestId('teste3'));
    expect(getByText('Ganhou!')).not.toBeNull();
  })
  test('Recognizing vertical win conditions', () => {
    const { getByTestId, getByText } = render(<App />);
    fireEvent.click(getByTestId('teste1'));
    fireEvent.click(getByTestId('teste2'));
    fireEvent.click(getByTestId('teste4'));
    fireEvent.click(getByTestId('teste3'));
    fireEvent.click(getByTestId('teste7'));
    expect(getByText('Ganhou!')).not.toBeNull();
  })
  test('Recognizing diagonal win conditions', () => {
    const { getByTestId, getByText } = render(<App />);
    fireEvent.click(getByTestId('teste1'));
    fireEvent.click(getByTestId('teste2'));
    fireEvent.click(getByTestId('teste5'));
    fireEvent.click(getByTestId('teste3'));
    fireEvent.click(getByTestId('teste9'));
    expect(getByText('Ganhou!')).not.toBeNull();
  })
})

describe('Edge Cases', () => {
  test("Not change an alredy marked square", () => {
    const { getByTestId } = render(<App />);
    fireEvent.click(getByTestId("teste1"));
    fireEvent.click(getByTestId("teste1"));
    expect(getByTestId('teste1')).toHaveTextContent('O');
  })
  test("Finish game after a winner", () => {
    const { getByTestId } = render(<App />);
    fireEvent.click(getByTestId("teste1"));
    fireEvent.click(getByTestId("teste2"));
    fireEvent.click(getByTestId("teste5"));
    fireEvent.click(getByTestId("teste6"));
    fireEvent.click(getByTestId("teste9"));
    fireEvent.click(getByTestId("teste3"));
    fireEvent.click(getByTestId("teste4"));
    fireEvent.click(getByTestId("teste7"));
    fireEvent.click(getByTestId("teste8"));
    expect(getByTestId('teste3')).toHaveTextContent('')
    expect(getByTestId('teste4')).toHaveTextContent('')
    expect(getByTestId('teste7')).toHaveTextContent('')
    expect(getByTestId('teste8')).toHaveTextContent('')
  })
})