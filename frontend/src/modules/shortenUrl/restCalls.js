import axios from 'axios';
import { config } from '../../config';

export const fetchShortenedUrl = async (longURL) => {
    try {
        const response = await axios({
            method: 'post',
            url: config.bitlyApi,
            data: {
                long_url: longURL,
                domain: 'bit.ly',
            },
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${config.bitlyAuthToken}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response;
    }
};
