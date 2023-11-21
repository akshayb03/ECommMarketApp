import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import CrossIcon from '../assets/cross.svg';
import {deleteFromCart} from '../store/product';
import Lottie from 'lottie-react-native';
import {EmptyHeight} from '../components/EmptyHeight';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Cart = ({navigation}) => {
  const cartProducts = useSelector((state: RootState) => state.product.cart);

  const CartItem = ({item}) => {
    const dispatch = useDispatch();

    const cartDelete = () => {
      dispatch(deleteFromCart(item.item.id));
    };
    return (
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          backgroundColor: 'gray',
          marginBottom: 8,
          borderRadius: 16,
        }}>
        <Image
          style={{borderTopLeftRadius: 16, borderBottomLeftRadius: 16}}
          source={{uri: item.item.images[0]}}
          width={98}
          height={98}
        />
        <View style={{flexShrink: 1, justifyContent: 'center', marginLeft: 6}}>
          <Text numberOfLines={1} style={{fontSize: 20}}>
            {item.item.title}
          </Text>
          <Text numberOfLines={2}>{item.item.description}</Text>
          <Text style={{fontSize: 18}}>${item.item.price}</Text>
        </View>
        <TouchableOpacity
          style={{marginTop: 6, marginRight: 8}}
          onPress={cartDelete}>
          <CrossIcon width={14} height={14} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={{margin: 16, flex: 1}}>
      <View style={{flexGrow: 1}}>
        <Text style={{fontSize: 32, fontWeight: 'bold'}}>My Cart</Text>
        <EmptyHeight space={40} />
        {cartProducts.length === 0 ? (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 160,
            }}>
            <Lottie
              source={require('../assets/empty-cart-animation.json')}
              autoPlay={true}
              loop={true}
              style={{height: 200, width: 200}}
            />
          </View>
        ) : (
          <View style={{height: height - 280}}>
            <FlatList
              data={cartProducts}
              renderItem={item => <CartItem item={item} />}
            />
          </View>
        )}
      </View>
      {cartProducts.length === 0 ? (
        <></>
      ) : (
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
            onPress={() => {
              navigation.navigate('Checkout');
            }}>
            <Text
              style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};
