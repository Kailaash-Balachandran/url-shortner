import React, { useState } from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import isURL from 'validator/lib/isURL';
import { SubmitButton } from '../../../components/formElements/SubmitButton';
import { TextInputField } from '../../../components/formElements/TextInputField';
import { fetchShortenedUrl } from '../restCalls';
import Bitly from '../models/Bitly';
import { LinkView } from '../components/LinkView';
import { toastify } from '../../../plugins/toastify';

const ShortenUrlFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px;
`;

const ShortenUrlForm = () => {
    const [longURL, setlongURL] = useState('');
    const [loading, setLoading] = useState(false);
    const [bitlyInfo, setBitlyInfo] = useState(null);

    const onChange = (e) => {
        setlongURL(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!isURL(longURL) || !longURL) {
            toastify.error('Invalid URL. Please check the input');
            return;
        }
        setLoading(true);
        setBitlyInfo(null);
        fetchShortenedUrl(longURL)
            .then((data) => {
                const bitlyLink = new Bitly(data);
                setBitlyInfo(bitlyLink);
                bitlyLink.copyLinkToClipboard();
                setlongURL('');
                toastify.success('Success! Link copied to clipboard');
            })
            .catch((err) => {
                toastify.error(get(err, 'data.description', 'An error has occurred'));
            })
            .finally(() => setLoading(false));
    };

    return (
        <ShortenUrlFormContainer>
            <form onSubmit={onSubmit} data-testid="shortenUrlForm">
                <TextInputField testId="longURL" label="Url" placeholder="Url to shorten" onChange={onChange} value={longURL} />
                <SubmitButton loading={loading} text="Bitlify3" />
            </form>
            { !loading && bitlyInfo && <LinkView bitlyInfo={bitlyInfo} /> }
        </ShortenUrlFormContainer>
    );
};

export default ShortenUrlForm;
