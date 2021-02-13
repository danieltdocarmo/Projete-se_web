type IDivProps = {
  style?: React.CSSProperties;
  className?: string;
  shadowIntensity?: TDivStyleShadowIntensity;
  themes?: TDivStyleThemes;
  themesHover?: boolean | 'true' | 'false';
};

export type TDivStyleThemes = 'common';

export type TDivStyleShadowIntensity =
  | TDivStyleShadowIntensityObject
  | TDivStyleShadowIntensityValue;

export type TDivStyleShadowIntensityObject = {
  value?: TDivStyleShadowIntensityValue;
  hover?: boolean;
  noShadowOnDefault?: boolean;
  color?: [string | number, string | number, string | number];
};

export type TDivStyleShadowIntensityValue =
  | number
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5';

export default IDivProps;
