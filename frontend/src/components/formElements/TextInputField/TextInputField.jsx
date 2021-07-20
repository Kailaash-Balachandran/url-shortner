import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextInput = styled.input`
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    margin: 8px;
    box-sizing: border-box;
    border: none;
    background: #f8f9fa;
    border-bottom: 2px solid #69D2AA;
`;

const TextInputField = ({ testId, label, placeholder, onChange, value }) => (
    <label htmlFor={testId}>
        {label}
        :
        <TextInput data-testid={testId} id={testId} placeholder={placeholder} type="text" onChange={onChange} value={value} />
    </label>
);

export default TextInputField;

TextInputField.defaultProps = {
    placeholder: '',
};

TextInputField.propTypes = {
    placeholder: PropTypes.string,
    testId: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};
