import React from 'react';
import styled from 'styled-components';
import logo from './img/tier-logo.svg';

const Logo = styled.img`
    height: 50px;
`;

export const TopBar = () => (
    <div data-testid="topBar">
        <Logo src={logo} alt="logo" />
        <p><i>Change mobility for good</i></p>
    </div>
);

export default TopBar;
