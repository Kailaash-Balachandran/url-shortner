import React from 'react';
import { render, screen } from '@testing-library/react';
import { TopBar } from './TopBar';

test('renders App', () => {
    render(<TopBar />);
    const punchline = screen.getByText(/Change mobility for good/i);
    expect(punchline).toBeInTheDocument();
});
