import { ButtonProps } from '@material-ui/core';

export default interface IButtonProps extends ButtonProps {
  style?: React.CSSProperties;
  istype?: 'filled' | 'red' | 'mainColor' | 'none';
  className?: string;
}
