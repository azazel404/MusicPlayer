import React from 'react';
import {View} from 'react-native';
import {moderateScale} from '../../helpers/scaling';

export const VStack = (props) => {
  const spacing = props.spacing ? props.spacing : moderateScale(0);

  const container = {
    flexDirection: 'column',
  };
  return (
    <>
      <View style={[container, props.style]}>
        {spacing && <View style={{height: spacing}} />}
        {props.children}
        {spacing && <View style={{height: spacing}} />}
      </View>
    </>
  );
};

export const HStack = (props) => {
  const spacing = props.spacing ? props.spacing : moderateScale(0);
  const container = {
    flexDirection: 'row',
  };
  return (
    <>
      <View style={[container, props.style]}>
        {/* {spacing && <View style={{width: spacing}} />} */}
        {props.children}
        {/* {spacing && <View style={{width: spacing}} />} */}
      </View>
    </>
  );
};
