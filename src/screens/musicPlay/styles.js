import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../helpers/scaling';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainbackground: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: 'absolute',
    resizeMode: 'repeat',
    opacity: 0.5,
  },
  header: {
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerInfo: {
    // padding: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerTextInfo: {
    fontSize: moderateScale(14),
    color: '#000000',
    //fontFamily: 'Poppins-Bold',
    letterSpacing: 1.2,
  },
  left: {
    marginRight: 'auto',
  },
  right: {
    marginLeft: 'auto',
  },
  headerText: {
    fontSize: moderateScale(18),
    color: '#000000',
    fontWeight: 'bold',
    //fontFamily: 'Poppins-Bold',
    letterSpacing: 1.2,
  },
  cover: {
    width: moderateScale(260),
    height: moderateScale(260),
    borderRadius: 16,
    elevation: 10,
  },
  coverCard: {
    width: moderateScale(260),
    height: moderateScale(260),
    elevation: 10,
    backgroundColor: '#fff',
    borderRadius: 16,
  },
  musicInfo: {
    paddingHorizontal: moderateScale(24),
    justifyContent: 'center',
    alignItems: 'center',
    // paddingBottom: moderateScale(60),
  },
  musicTitle: {
    fontSize: moderateScale(20),
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
    //fontFamily: 'Poppins-Bold',
    letterSpacing: 0.5,
  },
  musicBand: {
    fontSize: moderateScale(18),
    color: '#b7bdc5',
    //paddingBottom: moderateScale(8),
    //fontFamily: 'Poppins-Light',
  },
  timer: {
    color: '#b7bdc5',
    fontWeight: 'bold',
    //fontFamily: 'Poppins-Medium',
  },
  sliderControl: {
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(10),
    //paddingHorizontal: moderateScale(18),
  },
  slideContent: {
    paddingHorizontal: moderateScale(8),
  },
  paddingContent: {
    paddingBottom: moderateScale(28),
  },
  slider: {
    height: moderateScale(30),
    width: '100%',
  },
  controlButton: {
    paddingHorizontal: moderateScale(8),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnControl: {
    marginHorizontal: 12,
  },
  overlay: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: 'absolute',
    zIndex: 1,
    opacity: 0.9,
  },
});

export default styles;
