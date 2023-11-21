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
import {useToast} from 'react-native-toast-notifications';
import axios from 'axios';

const Signup = ({navigation}) => {
  const toast = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');

  const signup = async () => {
    if (!name || !email || !password || !dob) {
      toast.show('Please fill all the details');
      return;
    }
    const detailsObj = {name: name, email: email, password: password, dob: dob};
    try {
      const config = {
        method: 'post',
        url: 'http://192.168.0.157:3000/signup',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: detailsObj,
      };
      const response = await axios(config);
      console.log('response', response.data);
      if (response.status === 200) {
        navigation.navigate('Login');
      }
    } catch (error: any) {
      toast.show(error.response.data);
    }
  };

  return (
    <SafeAreaView style={{margin: 16, flex: 1}}>
      <Text style={{fontSize: 32, fontWeight: 'bold'}}>Signup</Text>
      <View style={{justifyContent: 'center', flex: 1}}>
        <View>
          <EmptyHeight space={24} />
          <View style={styles.input}>
            <TextInput
              placeholder="Name"
              value={name}
              onChangeText={text => {
                setName(text);
              }}
            />
          </View>
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
          <View style={styles.input}>
            <TextInput
              placeholder="Date of birth"
              value={dob}
              onChangeText={text => {
                setDob(text);
              }}
            />
          </View>
          <EmptyHeight space={18} />
          <Pressable onPress={signup} style={styles.btn}>
            <Text>Create Account</Text>
          </Pressable>
          <EmptyHeight space={8} />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 12, marginRight: 4}}>
              Already a member?
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={{color: '#b06482', fontSize: 12}}>Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

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
