import styled from 'styled-components';
import IDivProps from './types';
import _StyledDivBoxShadow from './partialStyles/_StyledDivBoxShadow';
import _getHandledDivProperties from './utils/_getHandledDivProperties';

export const Container = styled.div.attrs((props: IDivProps) => props)`
  background: #ffffff;
  border-radius: 0.2rem;

  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  ${({ themes, ...rest }) => {
    const { shadowIntensity, themesHover: hover } = _getHandledDivProperties(
      rest
    );

    switch (themes) {
      case 'common':
        return _StyledDivBoxShadow({
          value: 3,
          color: [0, 0, 0],
          hover,
          ...shadowIntensity,
        });
      default:
        return _StyledDivBoxShadow(shadowIntensity);
    }
  }}
`;
