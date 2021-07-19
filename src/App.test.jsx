import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
    render(<App />);
    const topBar = screen.getByTestId('topBar');
    const shortenUrlForm = screen.getByTestId('shortenUrlForm');
    expect(topBar).toBeInTheDocument();
    expect(shortenUrlForm).toBeInTheDocument();
});
