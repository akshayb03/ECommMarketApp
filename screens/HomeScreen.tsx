import {
  Dimensions,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {TextComponent} from '../components/TextComponent';
import {useSelector} from 'react-redux';
import {RootState} from '../store/index';
import {SafeAreaView} from 'react-native-safe-area-context';
import {UseGetAllProducts} from '../apis';
import {FlatList} from 'react-native-gesture-handler';
import {useEffect} from 'react';
import Lottie from 'lottie-react-native';

const HomeScreen = ({navigation}) => {
  const width = Dimensions.get('window').width;
  const userName = useSelector(
    (state: RootState) => state.userDetails.userName,
  );
  const authenticationToken = useSelector(
    (state: RootState) => state.userDetails.authenticationToken,
  );

  console.log('authenticationToken', authenticationToken);

  const wishListProducts = useSelector(
    (state: RootState) => state.product.wishList,
  );
  const cartProducts = useSelector((state: RootState) => state.product.cart);

  useEffect(() => {
    console.log('whishlistProducts', wishListProducts);
    console.log('cartProducts', cartProducts);
  }, []);

  const {data, isLoading} = UseGetAllProducts();
  console.log('data', data);

  const ProductThumbnail = ({item}: {item: any}) => {
    return (
      <View>
        <TouchableOpacity
          style={{
            width: width / 2,
            marginBottom: 24,
            borderRadius: 24,
          }}
          onPress={() => {
            navigation.navigate('ProductDetail', {product: item.item});
          }}>
          <Image
            style={{borderRadius: 24}}
            source={{uri: item.item.images[0]}}
            width={width / 2 - 38}
            height={width / 2 - 38}
          />
          <Text style={{width: width / 2 - 42}}>{item.item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{margin: 16}}>
      <View>
        <Text>Welcome!</Text>
        <TextComponent category="h1md" title={userName} />
        <TextInput />
        {/* <ScrollView> */}
        <View
          style={{
            // flexDirection: 'row',
            // flexWrap: 'wrap',
            // justifyContent: 'space-between',
            paddingBottom: 100,
          }}>
          {isLoading ? (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Lottie
                source={require('../assets/loader-animation.json')}
                autoPlay={true}
                loop={true}
                style={{width: 100, height: 100}}
              />
            </View>
          ) : data ? (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
              }}>
              <FlatList
                data={data}
                renderItem={item => <ProductThumbnail item={item} />}
                scrollEnabled={true}
                contentContainerStyle={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                numColumns={2}
                keyExtractor={item => item.title}
              />
            </View>
          ) : (
            // data.map((item: any, key: any) => {
            //   return (
            //     <View key={key}>
            //       <ProductThumbnail item={item} />
            //     </View>
            //   );
            // })
            <Text>no data</Text>
          )}
        </View>
        {/* </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
