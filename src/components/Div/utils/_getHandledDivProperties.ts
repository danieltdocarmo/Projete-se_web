import IDivProps from '../types';

function _getHandledDivProperties(props: IDivProps) {
  const sI = props?.shadowIntensity;

  const shadowIntensity =
    typeof sI === 'object'
      ? sI
      : typeof sI === 'number' || typeof sI === 'string'
      ? { value: sI }
      : {};

  const themesHover =
    props?.themesHover === true || props?.themesHover === 'true';

  return { shadowIntensity, themesHover };
}

export default _getHandledDivProperties;
