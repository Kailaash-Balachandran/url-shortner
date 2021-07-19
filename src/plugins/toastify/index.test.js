import { render, screen } from '@testing-library/react';
import { toastify } from './index';

test('toastify has required values', () => {
    expect(toastify).toHaveProperty('success');
    expect(toastify).toHaveProperty('error');
    expect(typeof toastify.success === 'function').toBe(true);
    expect(typeof toastify.error === 'function').toBe(true);
});

test('displays success message', () => {
    const message = 'success message';
    render(toastify.success(message));
    const toastAlert = screen.getByText(message);
    expect(toastAlert.closest('.toastify-success')).toBeTruthy();
});

test('displays error message', () => {
    const message = 'error message';
    render(toastify.error(message));
    const toastAlert = screen.getByText(message);
    expect(toastAlert.closest('.toastify-error')).toBeTruthy();
});
