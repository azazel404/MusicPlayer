import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  LogBox,
  FlatList,
  Image,
} from 'react-native';
import {moderateScale} from '../../helpers/scaling';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import Button from '../../components/Button';
import Divider from '../../components/Divider';
import Spacer from '../../components/Spacer';
import {VStack, HStack} from '../../components/Stack';

const SCREEN_WIDTH = Dimensions.get('window').width;

LogBox.ignoreAllLogs();

const PlayList = (props) => {
  const [music, setMusic] = React.useState({
    id: 1,
    title: 'Yoru ni kakeru',
    band: 'Yoasabi',
    cover:
      'https://asset.kompas.com/crops/ObTkbDcOu_s8W00Iob4mwgFemBc=/0x211:1500x1211/750x500/data/photo/2020/10/23/5f923f627d0dc.jpg',
  });
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
    {
      id: 5,
      title: 'Ano Yume wo Nazotte',
      band: 'Yoasabi',
      cover:
        'https://asset.kompas.com/crops/ObTkbDcOu_s8W00Iob4mwgFemBc=/0x211:1500x1211/750x500/data/photo/2020/10/23/5f923f627d0dc.jpg',
    },
  ]);

  const renderItem = (data) => {
    return (
      <>
        <HStack
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <HStack>
            <HStack
              style={{
                alignItems: 'center',
              }}>
              <Text style={styles.coverAlbumDescription}>{data.item.id}</Text>
            </HStack>
            <Spacer variant="horizontal" size={16} />
            <View>
              <Image
                source={{uri: data.item.cover}}
                style={{
                  width: moderateScale(40),
                  height: moderateScale(40),
                  borderRadius: 8,
                }}
              />
            </View>
            <Spacer variant="horizontal" size={16} />
            <VStack>
              <Text
                style={{
                  fontSize: moderateScale(14),
                  fontWeight: 'bold',
                }}>
                {data.item.title}
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(12),
                  color: '#b7bdc5',
                  fontWeight: 'bold',
                }}>
                2:45
              </Text>
            </VStack>
          </HStack>
          <View>
            <TouchableOpacity style={styles.right}>
              <Feather name="more-vertical" size={26} color="#000000" />
            </TouchableOpacity>
          </View>
        </HStack>
        <Spacer variant="vertical" size={26} />
      </>
    );
  };

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#E9EDF8',
          paddingHorizontal: moderateScale(16),
        }}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.left}>
            <Feather name="arrow-left" size={26} color="#000000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>ALBUM</Text>
          <TouchableOpacity style={styles.right}>
            <Feather name="more-vertical" size={26} color="#000000" />
          </TouchableOpacity>
        </View>
        <View style={styles.coverCard}>
          <Image source={{uri: music.cover}} style={styles.cover} />
          <View style={styles.coverAlbum}>
            <Text style={styles.coverAlbumTitle}>{music.title}</Text>
            <Text style={styles.coverAlbumDescription}>{music.band}</Text>
            <Text style={styles.coverAlbumDescription}>2018 Hip-hop Pop</Text>
          </View>
        </View>

        <Divider />
        <HStack
          style={{
            alignItems: 'center',
            paddingTop: moderateScale(12),
            paddingBottom: moderateScale(12),
            justifyContent: 'space-between',
          }}>
          <Text style={styles.coverAlbumDescription}>7 Tracks Songs </Text>
          <Button
            title={'Play All'}
            style={{width: 100, height: 40, borderRadius: 20, fontSize: 11}}
          />
        </HStack>
        <Divider />
        {/* <View style={{paddingTop: moderateScale(12)}}>
          <FlatList
            data={musicList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View> */}
        <VStack spacing={60}>
          <Text style={styles.coverAlbumDescription}>7 Tracks Songs </Text>
          <Text style={styles.coverAlbumDescription}>7 Tracks Songs </Text>
        </VStack>
      </SafeAreaView>
    </>
  );
};

export default PlayList;
