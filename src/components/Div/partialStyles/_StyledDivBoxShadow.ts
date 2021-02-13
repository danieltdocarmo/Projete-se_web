import { TDivStyleShadowIntensityObject } from '../types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _StyledDivBoxShadow(shadowIntensity?: TDivStyleShadowIntensityObject) {
  const { value, color, hover, noShadowOnDefault } = shadowIntensity || {};

  const colorArray = [0, 0, 0];

  color?.forEach((v, i) => {
    const correctValue = typeof v === 'string' ? Number(v) : v;
    if (correctValue >= 0 && i < 3) {
      colorArray[i] = correctValue;
    }
  });

  const colorString = colorArray.join(', ');

  /**
   * [offser-y: number, blur-radius: number, colorString: number]
   */
  function getValue(isHover: boolean) {
    function createShadow(firstShadowProp: shadow, secondShadowProp: shadow) {
      function checkHover(px: number) {
        return isHover ? px + 11 : px;
      }

      const firstShadow = `
        0
        ${checkHover(firstShadowProp[0])}px
        ${checkHover(firstShadowProp[1])}px
        rgba(${colorString}, ${firstShadowProp[2]})`;

      const secondShadow = `
        0
        ${checkHover(secondShadowProp[0])}px
        ${checkHover(secondShadowProp[1])}px
        rgba(${colorString}, ${secondShadowProp[2]})`;

      const boxShadow = `box-shadow: ${firstShadow}, ${secondShadow} ;`;

      return isHover
        ? `:hover {
            ${boxShadow}
          }`
        : boxShadow;
    }

    const handledValue = typeof value === 'string' ? Number(value) : value;

    switch (handledValue) {
      case 1:
        return createShadow([1, 3, 0.12], [1, 2, 0.24]);
      case 2:
        return createShadow([3, 6, 0.16], [3, 6, 0.23]);
      case 3:
        return createShadow([10, 20, 0.19], [6, 6, 0.23]);
      case 4:
        return createShadow([14, 28, 0.25], [10, 10, 0.22]);
      case 5:
        return createShadow([19, 38, 0.3], [15, 12, 0.22]);
      default:
        return '';
    }
  }

  return `
    ${!noShadowOnDefault ? getValue(false) : ''}
    ${hover ? getValue(true) : ''}
  `;
}

type shadow = [
  /** offser-y */
  number,
  /** blur-radius */
  number,
  /** color */
  number
];

export default _StyledDivBoxShadow;
