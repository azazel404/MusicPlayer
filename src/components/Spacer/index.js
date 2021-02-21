import React from 'react';
import {View} from 'react-native';
import {moderateScale} from '../../helpers/scaling';

const Spacer = (props) => {
  const size = props.size ? props.size : 16;
  const variant = props.variant ? props.variant : 'horizontal';

  const container = {
    [variant === 'vertical' ? 'height' : 'width']: moderateScale(size),
    //[variant === 'vertical' ? 'flexDirection' : 'width']: moderateScale(size),
    flexDirection: variant === 'vertical' ? 'column' : 'row',
  };
  return (
    <>
      <View style={[container, props.style]} />
    </>
  );
};

export default Spacer;
