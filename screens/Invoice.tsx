import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {RootState} from '../store';
import {useSelector} from 'react-redux';
import {EmptyHeight} from '../components/EmptyHeight';

export const Invoice = ({route}) => {
  const details = route.params.details;
  const products = route.params.products.current;
  console.log('details', details);
  //   const cartProducts = useSelector((state: RootState) => state.product.cart);
  console.log('products', products);
  //   const cartProducts = products;
  let total = 0;

  const getCartTotal = () => {
    products.forEach(item => {
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
      <View>
        <Text style={{fontSize: 32, fontWeight: 'bold'}}>Invoice</Text>
        <EmptyHeight space={40} />
        <View style={{borderWidth: 1}}>
          <View style={{padding: 8}}>
            <Text>{details.name}</Text>
            <Text>{details.address}</Text>
            <Text>
              {details.city}, {details.state}
            </Text>
            <Text>{details.zipCode}</Text>
          </View>
          <View
            style={{
              borderColor: 'black',
              borderTopWidth: 1,
              padding: 8,
            }}>
            <FlatList
              data={products}
              renderItem={item => <CheckoutItem item={item} />}
            />
            <EmptyHeight space={8} />
            <View style={{borderTopWidth: 1}} />
            <EmptyHeight space={8} />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontWeight: 'bold'}}>Total</Text>
              <Text style={{fontWeight: 'bold'}}>${total}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontWeight: 'bold'}}>Delivery fee</Text>
              <Text style={{fontWeight: 'bold'}}>${5}</Text>
            </View>
            <EmptyHeight space={8} />
            <View style={{borderTopWidth: 1}} />
            <EmptyHeight space={8} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontWeight: 'bold'}}>Total paid</Text>
              <Text style={{fontWeight: 'bold'}}>${total + 5}</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
