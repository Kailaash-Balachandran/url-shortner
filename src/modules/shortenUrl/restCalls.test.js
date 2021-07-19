import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchShortenedUrl } from './restCalls';
import { config } from '../../config';

test('should return data for response with status 200', async () => {
    const mock = new MockAdapter(axios);
    const mockResponse = { created_at: '2021-07-15T19:06:15+0000', id: 'bit.ly/3idd6rY', link: 'https://bit.ly/3idd6rY', custom_bitlinks: [], long_url: 'https://test.com/', archived: false, tags: [], deeplinks: [], references: { group: 'https://api-ssl.bitly.com/v4/groups/Bl7fhXza0wE' } };
    mock.onPost(config.bitlyApi).reply(200, { data: mockResponse });
    const response = await fetchShortenedUrl('http://test.com');
    expect(response.data).toEqual(mockResponse);
});

test('fetchShortenedUrl has required values', () => {
    expect(typeof fetchShortenedUrl === 'function').toBe(true);
});

test('should throw error for bad response', async () => {
    const mock = new MockAdapter(axios);
    const mockResponse = { data: { message: 'INVALID_ARG_LONG_URL', resource: 'bitlinks', description: 'The value provided is invalid.', errors: [{ field: 'long_url', error_code: 'invalid' }] } };
    mock.onPost(config.bitlyApi).reply(400, { ...mockResponse });
    try {
        await fetchShortenedUrl('http://test.com');
    } catch (error) {
        expect(error.data).toMatchObject(mockResponse);
    }
});
