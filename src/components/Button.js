import React from 'react';
import styled from 'styled-components';

import {colors} from '../constants';

const Button = styled.button`
  position: relative;
  height: 40px;
  padding: 0 15px;
  border-radius: 1px;
  border: none;
  font-size: 18px;
  font-weight: 400;
  background: ${colors.blues[2]};
  color: ${colors.white};
`;


export default Button;
