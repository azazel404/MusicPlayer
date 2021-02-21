import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../helpers/scaling';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  header: {
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    width: moderateScale(140),
    height: moderateScale(140),
    borderRadius: 8,
    elevation: 10,
  },
  coverCard: {
    // elevation: 10,
    // backgroundColor: '#fff',
    // borderRadius: 16,
    paddingTop: moderateScale(24),
    paddingBottom: moderateScale(24),
    flexDirection: 'row',
  },
  coverAlbum: {
    flexDirection: 'column',
    paddingLeft: moderateScale(14),
  },
  coverAlbumTitle: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    paddingBottom: moderateScale(8),
  },
  coverAlbumDescription: {
    fontSize: moderateScale(12),
    color: '#b7bdc5',
    fontWeight: 'bold',
  },
});

export default styles;
