import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextInputField from './TextInputField';

test('renders TextInputField with value', () => {
    const onChangeMock = jest.fn();
    render(<TextInputField testId="longURL" label="Url" placeholder="Url to shorten" onChange={onChangeMock} value="testURL" />);
    const input = screen.getByLabelText('Url:');
    expect(input.value).toBe('testURL');
});

test('calls onChange handler on change', () => {
    const onChangeMock = jest.fn();
    render(<TextInputField testId="longURL" label="Url" placeholder="Url to shorten" onChange={onChangeMock} value="testInput1" />);
    const input = screen.getByLabelText('Url:');
    fireEvent.change(input, { target: { value: 'testInput2' } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
});
