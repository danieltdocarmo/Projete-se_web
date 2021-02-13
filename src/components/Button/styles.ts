import styled from 'styled-components';
import MaterialButton from '@material-ui/core/Button';
import IButtonProps from './types';

export const Container = styled(MaterialButton).attrs(
  (props: IButtonProps) => props
)`
  border-radius: 0.6em !important;
  text-transform: none !important;
  line-height: 1.4 !important;

  ${({ istype }) => {
    if (istype === 'filled') {
      return `
        background: #6C63FF !important;
        color: #FFF !important;
      `;
    } else if (istype === 'red') {
      return `
        color: #FF5050 !important;
        border: solid 0.15em #FF5050 !important;
      `;
    } else if (istype === 'mainColor') {
      return `
        color: #6C63FF !important;
        border: solid 0.15em #6C63FF !important;
      `;
    }
  }}
`;
