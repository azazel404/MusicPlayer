import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  LogBox,
} from 'react-native';
import {moderateScale} from '../../helpers/scaling';
import Carousel from 'react-native-snap-carousel';
import Slider from '@react-native-community/slider';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {getColorFromURL} from 'rn-dominant-color';
import styles from './styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

LogBox.ignoreAllLogs();

const MusicPlay = (props) => {
  const [fromBgColor, setFromBgColor] = React.useState('#000000');
  const [toBgColor, setToBgColor] = React.useState('#000000');
  const [currentPlayed, setCurrentPlayed] = React.useState(0);
  const [colorAnimation, setColorAnimation] = React.useState(
    new Animated.Value(0),
  );
  const [musicTitle, setMusicTitle] = React.useState();
  const [musicBand, setMusicBand] = React.useState();
  const [musicTime, setMusicTime] = React.useState(160);
  const [currentMusicTime, setCurrentMusicTime] = React.useState(0);
  const [musicList, setMusicList] = React.useState([
    {
      id: 1,
      title: 'Yoru ni kakeru',
      band: 'Yoasabi',
      cover:
        'https://asset.kompas.com/crops/ObTkbDcOu_s8W00Iob4mwgFemBc=/0x211:1500x1211/750x500/data/photo/2020/10/23/5f923f627d0dc.jpg',
    },
    {
      id: 2,
      title: 'Hakujitsu',
      band: 'King Gnu',
      cover:
        'https://aramajapan.com/wp-content/uploads/2018/11/aramajapan.com-king-gnu-to-release-their-major-debut-album-in-january-king-gnu-to-release-their-major-debut-album-in-january-1.jpg',
    },
    {
      id: 3,
      title: 'S.O.S De`un terrein en detterese',
      band: 'Dimash Kudaibergen',
      cover:
        'https://qph.fs.quoracdn.net/main-qimg-a11c9b8d8adff35e67d0b47ed52f4287',
    },
    {
      id: 4,
      title: 'Ano Yume wo Nazotte',
      band: 'Yoasabi',
      cover:
        'https://asset.kompas.com/crops/ObTkbDcOu_s8W00Iob4mwgFemBc=/0x211:1500x1211/750x500/data/photo/2020/10/23/5f923f627d0dc.jpg',
    },
  ]);
  //const refCarousel = React.useRef(null);

  //   const getCurrentColor = () => {
  //     const music = getMusicByIndex(currentPlayed);

  //     getColorFromURL(music.cover).then((colors) => {
  //       setFromBgColor(toBgColor);
  //       setToBgColor(colors.primary);
  //     });
  //     Animated.timing(colorAnimation, {
  //       toValue: 0,
  //       duration: 0,
  //     }).start(() => {
  //       Animated.timing(colorAnimation, {
  //         toValue: 1,
  //         duration: 500,
  //       }).start();
  //     });
  //   };

  const onSlide = (index) => {
    setCurrentPlayed(index);
    setCurrentMusic();
    // getCurrentColor();
  };

  const getMusicByIndex = (index) => {
    const music = musicList.find((item, indexMusic) => indexMusic === index);
    return music;
  };

  const setCurrentMusic = (index) => {
    const music = getMusicByIndex(currentPlayed);
    setMusicTitle(music.title);
    setMusicBand(music.band);
  };

  const timeConvertion = (duration) => {
    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    //get minutes
    return `${minutes}:${seconds}`;
  };

  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.coverCard}>
        <Image source={{uri: item.cover}} style={styles.cover} />
      </View>
    );
  };

  React.useEffect(() => {
    // refCarousel = null;
    setCurrentPlayed(musicList.length - 1);
    setCurrentMusic();
    // getCurrentColor();
  }, []);

  //   const boxInterpolation = colorAnimation.interpolate({
  //     inputRange: [0, 1],
  //     outputRange: [fromBgColor, toBgColor],
  //   });

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#E9EDF8',
          paddingHorizontal: moderateScale(16),
        }}>
        {/* <Animated.View
          style={[styles.overlay, {backgroundColor: boxInterpolation}]}
        /> */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.left}>
            <Feather name="chevron-down" size={26} color="#000000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>NOW PLAYING</Text>

          <TouchableOpacity style={styles.right}>
            <Feather name="more-vertical" size={26} color="#000000" />
          </TouchableOpacity>
        </View>
        <View style={styles.headerInfo}>
          <Text style={styles.headerTextInfo}>My Playlist</Text>
        </View>

        <Carousel
          slideStyle={{height: moderateScale(20), marginTop: 30}}
          //   ref={(c) => {
          //     console.log('c', c);
          //     refCarousel = c;
          //   }}
          data={musicList}
          firstItem={musicList.length - 1}
          renderItem={_renderItem}
          //layout={'stack'}
          //layoutCardOffset={'18'}
          sliderWidth={SCREEN_WIDTH}
          itemWidth={moderateScale(280)}
          onSnapToItem={(slideIndex) => onSlide(slideIndex)}
        />
        <View style={styles.musicInfo}>
          <Text style={styles.musicBand}>{musicBand}</Text>
          <Text style={styles.musicTitle}>{musicTitle}</Text>
        </View>
        <View style={styles.paddingContent}>
          <View style={styles.sliderControl}>
            <Slider
              style={styles.slider}
              onValueChange={(value) => setCurrentMusicTime(value)}
              minimumValue={0}
              maximumValue={musicTime}
              minimumTrackTintColor="#b7bdc5"
              maximumTrackTintColor="#b7bdc5"
              thumbTintColor="#E46316"
            />
          </View>
          <View style={styles.slideContent}>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.left, styles.timer]}>
                {timeConvertion(Math.floor(currentMusicTime))}
              </Text>
              <Text style={[styles.right, styles.timer]}>
                {timeConvertion(musicTime)}
              </Text>
            </View>
          </View>

          <View style={styles.controlButton}>
            <TouchableOpacity style={styles.left}>
              <Feather name="shuffle" size={24} color="#000000" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnControl}
              //   onPress={() => refCarousel.snapToPrev()}
            >
              <Feather name="skip-back" size={24} color="#000000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnControl}>
              <MaterialIcons
                name="play-circle-outline"
                size={64}
                color="#000000"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnControl}
              //   onPress={() => refCarousel.snapToNext()}
            >
              <Feather name="skip-forward" size={24} color="#000000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.right}>
              <Feather name="repeat" size={24} color="#000000" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default MusicPlay;
