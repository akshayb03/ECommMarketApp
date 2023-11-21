import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextComponent} from '../components/TextComponent';
import {EmptyHeight} from '../components/EmptyHeight';
import CartIcon from '../assets/cart-black.svg';
import HeartIcon from '../assets/heart-black.svg';
import {useDispatch, useSelector} from 'react-redux';
import {addToWishList} from '../store/product';
import {addToCart} from '../store/product';
import {RootState} from '../store';
import {useEffect} from 'react';

const width = Dimensions.get('window').width;

export const ProductDetail = ({route}) => {
  const product = route.params.product;
  const dispatch = useDispatch();

  const cartAdd = (product: Object) => {
    console.log('Added to Cart');
    console.log('Added Product', product);
    dispatch(addToCart(product));
  };

  const wishlistAdd = (product: Object) => {
    console.log('Added to wishlist');
    console.log('Added Wishlist product', product);
    dispatch(addToWishList(product));
  };

  return (
    <SafeAreaView style={{margin: 16, flex: 1}}>
      <View style={{flex: 1}}>
        <Image
          source={{uri: product.images[0]}}
          width={width - 32}
          height={width - 32}
        />
        <EmptyHeight space={8} />
        <TextComponent category={'h1md'} title={product.title} />
        <EmptyHeight space={8} />
        <Text>{product.description}</Text>
        <EmptyHeight space={12} />
        <Text style={styles.price}>${product.price}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={() => cartAdd(product)}>
          <View style={[styles.addCta, {backgroundColor: '#a791bf'}]}>
            <Text style={styles.addText}>Add to Cart</Text>
            <CartIcon style={{width: 18, height: 18}} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => wishlistAdd(product)}>
          <View style={[styles.addCta, {backgroundColor: '#efcbcd'}]}>
            <Text style={styles.addText}>Add to Wishlist</Text>
            <HeartIcon style={{width: 18, height: 18}} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  price: {
    fontSize: 46,
  },
  addText: {fontWeight: 'bold', marginRight: 8},
  addCta: {
    width: width / 2 - 20,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
});
