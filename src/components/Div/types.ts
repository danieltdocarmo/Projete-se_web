export type IDivStyleProps = {
  shadowIntensity?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2' | '3' | '4' | '5';
  defaultHover?: boolean;
};

type IDivProps = {
  style?: React.CSSProperties;
  className?: string;
} & IDivStyleProps;

export default IDivProps;
