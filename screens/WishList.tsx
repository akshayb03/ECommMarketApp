import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CrossIcon from '../assets/cross.svg';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {deleteFromWishList} from '../store/product';
import {EmptyHeight} from '../components/EmptyHeight';
import Lottie from 'lottie-react-native';

export const WishList = ({navigation}) => {
  const wishListProducts = useSelector(
    (state: RootState) => state.product.wishList,
  );

  const CartItem = ({item}) => {
    const dispatch = useDispatch();

    const wishListDelete = () => {
      console.log('item.item.id', item.item.id);
      dispatch(deleteFromWishList(item.item.id));
    };
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductDetail', {product: item.item});
        }}>
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
          <View
            style={{flexShrink: 1, justifyContent: 'center', marginLeft: 6}}>
            <Text numberOfLines={1} style={{fontSize: 20}}>
              {item.item.title}
            </Text>
            <Text numberOfLines={2}>{item.item.description}</Text>
            <Text style={{fontSize: 18}}>${item.item.price}</Text>
          </View>
          <TouchableOpacity
            style={{marginTop: 6, marginRight: 8}}
            onPress={wishListDelete}>
            <CrossIcon width={14} height={14} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{margin: 16}}>
      <Text style={{fontSize: 32, fontWeight: 'bold'}}>My Wishlist</Text>
      <EmptyHeight space={40} />
      {wishListProducts.length === 0 ? (
        <View style={{alignItems: 'center', marginTop: 30}}>
          <Lottie
            source={require('../assets/empty-wishlist.json')}
            autoPlay={true}
            loop={true}
            style={{width: 400, height: 400}}
          />
        </View>
      ) : (
        <View>
          <FlatList
            data={wishListProducts}
            renderItem={item => <CartItem item={item} />}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
