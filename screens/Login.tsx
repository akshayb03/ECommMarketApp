import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {EmptyHeight} from '../components/EmptyHeight';
import OnboardingIcon from '../assets/onboarding-coin.svg';
import {useToast} from 'react-native-toast-notifications';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {saveAuthenticationToken, saveUserName} from '../store/user-details';

const Login = ({navigation}) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    if (!email || !password) {
      toast.show('Please fill all the details');
      console.log('Please fill all the details');
      return;
    }
    const loginObject = {
      email: email,
      password: password,
    };
    try {
      const config = {
        method: 'post',
        url: 'http://192.168.0.157:3000/signin',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: loginObject,
      };
      const response = await axios(config);
      console.log('response', response.data);
      const token = response.data.token;
      const name = response.data.name;
      dispatch(saveAuthenticationToken(token));
      dispatch(saveUserName({name: name}));
      if (response.status === 200) {
        navigation.replace('MainNavigator');
        console.log('logged in');
      }
    } catch (error: any) {
      toast.show(error.response.data);
    }
  };

  return (
    <SafeAreaView style={{margin: 16, flex: 1}}>
      <Text style={{fontSize: 32, fontWeight: 'bold'}}>Login</Text>
      <View style={{justifyContent: 'center', flex: 1}}>
        <View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <OnboardingIcon />
          </View>
          <EmptyHeight space={24} />
          <View style={styles.input}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={text => {
                setEmail(text);
              }}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={text => {
                setPassword(text);
              }}
            />
          </View>
          <EmptyHeight space={18} />
          <Pressable onPress={login} style={styles.btn}>
            <Text>Login</Text>
          </Pressable>
          <EmptyHeight space={8} />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 12, marginRight: 4}}>
              Don't have an account?
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate('Signup');
              }}>
              <Text style={{color: '#b06482', fontSize: 12}}>
                Create a new account
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    borderRadius: 40,
    borderWidth: 0.5,
    paddingLeft: 16,
    marginBottom: 8,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    height: 46,
    borderRadius: 30,
  },
});
