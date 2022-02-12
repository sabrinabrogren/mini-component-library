import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const InputWrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};
  font-size: var(--font-size);

  :hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
  height: var(--icon-size);
`;

const StyledInput = styled.input`
  width: var(--width);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: calc(var(--icon-size) * 1.5);
  font-size: inherit;
  font-weight: 700;
  color: inherit;
  ::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  :focus {
    outline-offset: 2px;
  }
`;

const STYLES = {
  small: {
    fontSize: "14px",
    iconSize: 16,
    borderThickness: "1px", 
  },
  large: {
    fontSize: "18px",
    iconSize: 24,
    borderThickness: "2px",
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = STYLES[size];
  return (
    <InputWrapper style={{ "--font-size": styles.fontSize }} >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--icon-size" : styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <StyledInput
        size={styles.iconSize}
        style={{ "--icon-size": styles.iconSize + "px", "--width": width + "px", "--border-thickness": styles.borderThickness }}
        placeholder={placeholder}
        label={label}
      />
    </InputWrapper>
  );
};

export default IconInput;
