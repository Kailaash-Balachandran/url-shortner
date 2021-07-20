import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import ShortenUrlForm from './ShortenUrlForm';
import { toastify } from '../../../plugins/toastify';
import { config } from '../../../config';

function renderForm() {
    render(<ShortenUrlForm />);
    const form = screen.getByTestId('shortenUrlForm');
    const textInput = screen.getByTestId('longURL');
    const submitButton = screen.getByTestId('buttonSubmit');
    return { form, textInput, submitButton };
}

function mockAxios(response, status = 200) {
    const mock = new MockAdapter(axios);
    mock.onPost(config.bitlyApi).reply(status, { ...response });
}

test('should render ShortenUrlForm with default values', () => {
    const { form, textInput, submitButton } = renderForm();
    expect(form).toBeInTheDocument();
    expect(textInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});

test('should display error notification for empty or invalid url value', () => {
    const { form, textInput } = renderForm();
    const spy = jest.spyOn(toastify, 'error');
    ['test', ''].forEach((value) => {
        fireEvent.change(textInput, { target: { value } });
        fireEvent.submit(form);
        expect(spy).toHaveBeenCalledWith('Invalid URL. Please check the input');
    });
});

test('should display error notification for API error response', async () => {
    const mockResponse = { message: 'INVALID_ARG_LONG_URL', resource: 'bitlinks', description: 'The value provided is invalid.', errors: [{ field: 'long_url', error_code: 'invalid' }] };
    mockAxios(mockResponse, 400);
    const toastNotification = jest.spyOn(toastify, 'error');
    const { form, textInput } = renderForm();
    fireEvent.change(textInput, { target: { value: 'google.com' } });
    fireEvent.submit(form);
    await waitFor(() => {
        expect(toastNotification).toHaveBeenCalledWith('The value provided is invalid.');
    });
});

test('should display correct success message', async () => {
    const toastNotification = jest.spyOn(toastify, 'success');
    const mockResponse = { created_at: '2021-07-15T19:06:15+0000', id: 'bit.ly/3idd6rY', link: 'https://bit.ly/3idd6rY', custom_bitlinks: [], long_url: 'https://test.com/', archived: false, tags: [], deeplinks: [], references: { group: 'https://api-ssl.bitly.com/v4/groups/Bl7fhXza0wE' } };
    mockAxios(mockResponse);
    const { form, textInput } = renderForm();
    fireEvent.change(textInput, { target: { value: 'https://google.com' } });
    fireEvent.submit(form);
    await waitFor(() => {
        expect(toastNotification).toHaveBeenCalledWith('Success! Link copied to clipboard');
    });
});
