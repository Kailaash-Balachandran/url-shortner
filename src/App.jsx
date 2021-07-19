import React from 'react';
import styled from 'styled-components';
import { TopBar } from './modules/topBar';
import { ShortenUrlForm } from './modules/shortenUrl';

const Container = styled.div`
    text-align: center;
    padding: 15px;
`;

function App() {
    return (
        <Container>
            <TopBar />
            <ShortenUrlForm />
        </Container>
    );
}

export default App;
