// @flow

import React from 'react';
import { Text } from 'react-native';

import styled from 'styled-components';

const IngredientsText = styled(Text).attrs({
  numberOfLines: 3,
  ellipsizeMode: 'tail',
})`
  padding-top:  ${({ theme, isFirst }) => (isFirst ? theme.metrics.largeSize : 0)}px;
  padding-bottom: ${({ theme }) => theme.metrics.mediumSize}px;
  color: ${({ theme }) => theme.colors.subText};
  font-size: ${({ theme }) => theme.metrics.getHeightFromDP('2.5%')};
  font-family: CircularStd-Medium;
`;

type Props = {
  ingredient: string,
  isFirst: boolean,
};

const IngredientsItemList = ({ ingredient, isFirst }: Props) => (
  <IngredientsText
    isFirst={isFirst}
  >
    {ingredient}
  </IngredientsText>
);

export default IngredientsItemList;
