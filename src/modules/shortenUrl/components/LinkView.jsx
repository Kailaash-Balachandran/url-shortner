import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Bitly from '../models/Bitly';

const Link = styled.a`
    color: grey;
    text-decoration: none;
    margin: 10px;
    padding: 10px;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    width: 200px; 
    @media (min-width: 800px) {
        width: 350px; 
    }
`;

const LinkViewContainer = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #f7f7f7;
    flex-direction: column;
    margin: 40px;
    @media (min-width: 800px) {
        flex-direction: row;
    }
`;

export const LinkView = ({ bitlyInfo }) => (
    <LinkViewContainer data-testid="linkView">
        <Link data-testid="longURL" href={bitlyInfo.longURL} rel="noreferrer" target="_blank">{bitlyInfo.longURL}</Link>
        <Link data-testid="bitlyLink" href={bitlyInfo.link} rel="noreferrer" target="_blank">{bitlyInfo.link}</Link>
    </LinkViewContainer>
);

LinkView.propTypes = {
    bitlyInfo: PropTypes.instanceOf(Bitly).isRequired,
};
