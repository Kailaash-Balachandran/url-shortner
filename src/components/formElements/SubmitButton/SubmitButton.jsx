import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';

const SubmitButton = styled.button`
    color: #343A40;
    background-color: #69D2AA;
    width: 80px;
    height: 30px;
    border-color: #69D2AA;
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    color: #343A40;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: .25rem;
`;

const Button = ({ loading, text }) => (
    <SubmitButton type="submit" disabled={loading} data-testid="buttonSubmit">
        {loading ? <ClipLoader data-testid="buttonSpinner" loading={loading} size={10} /> : text}
    </SubmitButton>
);

export default Button;

Button.defaultProps = {
    loading: true,
};

Button.propTypes = {
    loading: PropTypes.bool,
    text: PropTypes.string.isRequired,
};
