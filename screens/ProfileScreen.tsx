import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {TextComponent} from '../components/TextComponent';
import ProfileIcon from '../assets/profile.svg';
import {EmptyHeight} from '../components/EmptyHeight';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {saveUserName} from '../store/user-details';
import BackButton from '../components/BackButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonComponent from '../components/ButtonComponent';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>();

  const setProfile = () => {
    console.log('name', name);
    if (name !== undefined) {
      dispatch(saveUserName({name: name}));
    }
  };

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView
          style={{
            margin: 16,
            flex: 1,
          }}>
          <ScrollView>
            <BackButton />
            <EmptyHeight space={32} />
            <TextComponent category="h1" title="Manage your Profile Name" />
            <EmptyHeight space={8} />
            <TextComponent
              category="p1"
              title="What would you like to be referred as? The name you set will reflect at all places"
            />
            <EmptyHeight space={32} />
            <View style={{alignItems: 'center'}}>
              <ProfileIcon width={88} height={88} />
              <View style={{width: '100%', marginTop: 34}}>
                <TextInput
                  style={styles.input}
                  placeholder={'What would you like to be called?'}
                  value={name}
                  onChangeText={text => {
                    setName(text);
                  }}
                />
              </View>
            </View>
          </ScrollView>
          <View
            style={{
              width: '100%',
              height: 50,
              marginBottom: 24,
            }}>
            <ButtonComponent
              title={'Save'}
              bgColor={'green'}
              onPress={setProfile}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 20,
    borderWidth: 1,
    width: '100%',
    paddingLeft: 16,
    height: 56,
  },
});

export default ProfileScreen;
