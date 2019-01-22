import styled from 'styled-components';
import {
  blue, grayDark, white,
} from '../../style/colors';
import { fontWeightMedium, fontSize } from '../../style/fonts';

export const SelectItemStyled = styled.li`
    align-items: center;
    color: ${props => (props.hovered ? white : grayDark)};
    cursor: pointer;
    display: flex;
    font-size: ${fontSize};
    overflow: hidden;
    padding: 6px 0px;
    text-overflow: ellipsis;
    user-select: none;
    white-space: nowrap;
    width: 100%;
    background-color:${props => (props.hovered ? blue : 'transparent')};
    &:hover {
      background-color:${blue};
      color: #fff;
    }
`;


export const SelectItemLabel = styled.div`
    font-size: ${fontSize};
    font-weight: ${fontWeightMedium};
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: capitalize;
    padding: 0px 15px;
    display: flex;
    align-items: end;
`;

export const SelectItemIcon = styled.div`
  ${SelectItemStyled}:hover & * {
    color: ${white};
  }
`;

export const SelectItemTitle = styled.div`
  margin-left: ${props => (props.moveRight ? '22px' : '5px')};
`;
