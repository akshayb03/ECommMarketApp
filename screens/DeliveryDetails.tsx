import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {EmptyHeight} from '../components/EmptyHeight';
import {useEffect, useRef, useState} from 'react';
import Lottie from 'lottie-react-native';
import {useDispatch, useSelector} from 'react-redux';
import {emptyCart} from '../store/product';
import {RootState} from '../store';
import axios from 'axios';

export const DeliveryDetails = ({navigation}) => {
  const width = Dimensions.get('window').width;
  const dispatch = useDispatch();
  const cartProducts = useSelector((state: RootState) => state.product.cart);

  const cartProductsRef = useRef([...cartProducts]);

  interface Details {
    name: string;
    address: string;
    state: string;
    city: string;
    zipCode: string;
  }

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [details, setDetails] = useState<Details>();
  const [paid, setPaid] = useState(false);

  const payNow = async () => {
    console.log('pay now');
    const url = 'http://localhost:8000/payment/orders';
    const response = await axios.get(url);
    console.log('response.data', response.data);
  };

  useEffect(() => {
    setDetails({
      name: name,
      address: address,
      state: state,
      city: city,
      zipCode: zipCode,
    });
  }, [name, address, state, city, zipCode]);

  return (
    <SafeAreaView style={{margin: 16, flex: 1}}>
      {paid ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
          }}>
          <Lottie
            source={require('../assets/success-animation.json')}
            autoPlay={true}
            loop={true}
            style={{height: 200, width: 200}}
          />
          <Text style={{fontSize: 28}}>Payment successful</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Invoice', {
                details: details,
                products: cartProductsRef,
              });
            }}>
            <Text style={{textDecorationLine: 'underline'}}>Check Invoice</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <View style={{flexGrow: 1}}>
            <Text style={{fontSize: 32, fontWeight: 'bold'}}>
              Delivery details
            </Text>
            <EmptyHeight space={20} />
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={text => setName(text)}
              placeholder="Billing Name"
            />
            <TextInput
              style={styles.input}
              value={address}
              onChangeText={text => setAddress(text)}
              placeholder="Delivery Address"
            />
            <TextInput
              style={styles.input}
              value={state}
              onChangeText={text => setState(text)}
              placeholder="State"
            />
            <TextInput
              style={styles.input}
              value={city}
              onChangeText={text => setCity(text)}
              placeholder="City"
            />
            <TextInput
              style={styles.input}
              value={zipCode}
              onChangeText={text => setZipCode(text)}
              placeholder="Zip Code"
            />
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
                if (
                  name === '' ||
                  address === '' ||
                  city === '' ||
                  state === '' ||
                  zipCode === ''
                ) {
                } else {
                  dispatch(emptyCart());
                  // payNow();
                  setPaid(true);
                }
              }}>
              <Text
                style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
                Pay Now
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 24,
    paddingLeft: 24,
  },
});
