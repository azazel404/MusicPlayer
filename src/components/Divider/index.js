import React from 'react';
import {View} from 'react-native';
import {Colors} from '../Theme';

const Divider = (props) => {
  return (
    <>
      <View
        style={{
          borderBottomColor: Colors.divider,
          borderBottomWidth: 1,
        }}
      />
    </>
  );
};

export default Divider;
