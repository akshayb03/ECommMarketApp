import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextComponent} from '../components/TextComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import EditIcon from '../assets/edit-icon.svg';
import PictureIcon from '../assets/profile.svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {MainTabParamList} from '../navigation/types';
import {deleteFromCart} from '../store/product';
import {EmptyHeight} from '../components/EmptyHeight';

const width = Dimensions.get('window').width;
const theme = 'white';

type Props = BottomTabScreenProps<MainTabParamList, 'More'>;

const More = ({navigation}: Props) => {
  const clearData = () => {
    console.log('inside');
    AsyncStorage.clear();
  };

  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteFromCart(2));
  };

  const userName = useSelector(
    (state: RootState) => state.userDetails.userName,
  );

  const profileEdit = () => {
    // navigation.navigate('Profile');
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={{margin: 16, flex: 1}}>
      <Text style={{fontSize: 32, fontWeight: 'bold'}}>More</Text>
      <EmptyHeight space={40} />
      <View style={{flexGrow: 1}}>
        <View style={styles.profile}>
          <View style={styles.picture}>
            <PictureIcon width={52} height={52} />
            <View style={{marginLeft: 12}}>
              <TextComponent fontColor={theme} category="p1" title="Profile" />
              <TextComponent fontColor={theme} category="h2" title={userName} />
            </View>
          </View>
          <TouchableOpacity onPress={profileEdit}>
            <EditIcon width={22} height={22} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: width - 32,
          backgroundColor: '#b2d3c2',
          borderRadius: 24,
          height: 56,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}
          onPress={clearData}>
          <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
            Clear data
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profile: {
    width: width - 32,
    backgroundColor: '#303F9F',
    alignSelf: 'center',
    height: 120,
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  picture: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    backgroundColor: 'gray',
  },
});

export default More;
