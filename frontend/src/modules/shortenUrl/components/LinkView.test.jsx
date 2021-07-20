import React from 'react';
import { render, screen } from '@testing-library/react';
import { LinkView } from './LinkView';
import Bitly from '../models/Bitly';

test('renders LinkView', () => {
    const mockData = new Bitly({
        id: 'bit.ly/23ds2',
        link: 'https://bit.ly/23ds2',
        long_url: 'http://test.com/',
    });
    render(<LinkView bitlyInfo={mockData} />);
    const bitlyLink = screen.getByTestId('bitlyLink');
    const longURL = screen.getByTestId('longURL');
    expect(bitlyLink.href).toBe(mockData.link);
    expect(longURL.href).toBe(mockData.longURL);
});
