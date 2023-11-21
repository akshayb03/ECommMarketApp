import {
  Dimensions,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {EmptyHeight} from '../components/EmptyHeight';
import {useEffect} from 'react';

const width = Dimensions.get('window').width;

export const Checkout = ({navigation}) => {
  const cartProducts = useSelector((state: RootState) => state.product.cart);
  let total = 0;

  const getCartTotal = () => {
    cartProducts.forEach(item => {
      total = total + item.price;
    });
    console.log('total', total);
  };

  getCartTotal();

  const CheckoutItem = ({item}) => {
    console.log('checkoutItem', item.item.title);
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>{item.item.title}</Text>
        <Text>${item.item.price}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{margin: 16, flex: 1}}>
      <View style={{flexGrow: 1}}>
        <Text style={{fontSize: 32, fontWeight: 'bold'}}>Checkout</Text>
        <EmptyHeight space={40} />
        <View
          style={{
            borderColor: 'black',
            borderWidth: 1,
            padding: 8,
          }}>
          <FlatList
            data={cartProducts}
            renderItem={item => <CheckoutItem item={item} />}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 20,
            paddingHorizontal: 8,
          }}>
          <Text style={{fontWeight: 'bold'}}>Total</Text>
          <Text style={{fontWeight: 'bold'}}>${total}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 8,
          }}>
          <Text style={{fontWeight: 'bold'}}>Delivery fee</Text>
          <Text style={{fontWeight: 'bold'}}>${5}</Text>
        </View>
        <EmptyHeight space={8} />
        <View style={{borderWidth: 0.5}} />
        <EmptyHeight space={8} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 8,
          }}>
          <Text style={{fontWeight: 'bold'}}>To pay</Text>
          <Text style={{fontWeight: 'bold'}}>${total + 5}</Text>
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
          onPress={() => {
            navigation.replace('DeliveryDetails');
          }}>
          <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
            Place order
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
