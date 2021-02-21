import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {moderateScale} from '../../helpers/scaling';
import {Colors, Fonts} from '../Theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: moderateScale(4),
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCircle: {
    position: 'absolute',
    bottom: moderateScale(10),
    right: moderateScale(10),
    backgroundColor: Colors.primary,
    padding: moderateScale(5),
    borderRadius: moderateScale(30),
    shadowColor: 'rgba(69, 91, 99, 0.16)',
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 16,
    shadowOpacity: 1,
  },
  primaryButtonBackground: {
    backgroundColor: Colors.primary,
  },
  secondaryButtonBackground: {
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
    borderWidth: moderateScale(1),
  },
  accentButtonBackground: {
    backgroundColor: Colors.white,
  },
  disabledButtonBackground: {
    backgroundColor: Colors.greyButton,
  },
  txtStyle: {
    fontFamily: Fonts.type.medium,
    fontSize: moderateScale(16),
    lineHeight: moderateScale(19),
    textAlign: 'center',
  },
});

const Button = (props) => {
  const {title, onPress, disabled, style, textStyle, icon} = props;
  const buttonBg = disabled
    ? styles.disabledButtonBackground
    : styles.primaryButtonBackground;
  const textStyling = disabled ? styles.disabledButtonText : styles.txtStyle;
  return (
    <>
      <TouchableOpacity
        style={[styles.container, buttonBg, style]}
        disabled={disabled}
        onPress={() => onPress()}>
        {icon ? (
          <Image
            source={icon}
            style={{width: 16, height: 16, marginRight: 4}}
          />
        ) : null}
        <Text style={[textStyling, textStyle, {color: Colors.white}]}>
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Button;
