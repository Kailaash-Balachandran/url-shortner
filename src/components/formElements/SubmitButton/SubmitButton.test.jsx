import React from 'react';
import { render, screen } from '@testing-library/react';
import SubmitButton from './SubmitButton';

test('renders Button', () => {
    render(<SubmitButton loading={false} text="Click" />);
    const button = screen.getByTestId('buttonSubmit');
    expect(button.disabled).toBe(false);
});

test('renders disabled Button with spinner', () => {
    render(<SubmitButton loading text="Click" />);
    const button = screen.getByTestId('buttonSubmit');
    expect(button.disabled).toBe(true);
});
