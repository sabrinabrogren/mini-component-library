/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZE_STYLES = {
  small: {
    "--height": "8px",
    "--border-radius": "4px",
  },
  medium: {
    "--height": "12px",
    "--border-radius": "4px",
  },
  large: {
    "--height": "24px",
    "--border-radius": "8px",
    "--padding": "4px",
  }
};

const BarWrapper = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);
  width: fill;
  height: var(--height);
  overflow: hidden;
  padding: var(--padding);
`;

const BarFillSeparator = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const BarFill = styled.div`
  height: 100%;
  width: ${props => `${props.value}%`};
  background: ${COLORS.primary};
`;

const ProgressBar = ({ value, size }) => {
  return (
    <BarWrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={SIZE_STYLES[size]}
    >
      {size === "large" ? (
        <BarFillSeparator>
          <BarFill value={value} />
        </BarFillSeparator>
      ) : (
        <BarFill value={value} />
      )}
    </BarWrapper>
  );
};

export default ProgressBar;
