import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import OnboardingIcon from '../assets/onboarding-coin.svg';
import {Dimensions} from 'react-native';
import {EmptyHeight} from '../components/EmptyHeight';
import {useDispatch} from 'react-redux';
import {saveUserName} from '../store/user-details';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/types';
import OnboardingCarousel from 'react-native-onboarding-swiper';
import {TextComponent} from '../components/TextComponent';
import ButtonComponent from '../components/ButtonComponent';

const width = Dimensions.get('window').width;

type Props = StackScreenProps<RootStackParamList, 'Onboarding'>;
export const Onboarding = ({navigation}) => {
  const [userName, setUserName] = useState<string>('');
  const dispatch = useDispatch();
  // const Done = ({...props}) => <></>;
  const Skip = ({...props}) => <></>;

  return (
    <OnboardingCarousel
      // DoneButtonComponent={Done}
      SkipButtonComponent={Skip}
      onSkip={() => navigation.replace('Signup')}
      onDone={() => navigation.replace('Signup')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <OnboardingIcon />,
          title: 'Welcome',
          subtitle:
            'Your go-to destination for stylish clothing and hassle-free invoicing',
        },
        {
          backgroundColor: '#a6e4d0',
          image: <OnboardingIcon />,
          title: 'Effortless Fashion at Your Fingertips.',
          subtitle:
            'Swipe through our curated collection of products and manage invoices effortlessly',
        },
        {
          backgroundColor: '#a6e4d0',
          image: <OnboardingIcon />,
          title: 'Effortless Fashion at Your Fingertips.',
          subtitle:
            'Swipe through our curated collection of products and manage invoices effortlessly',
        },
        // {
        //   backgroundColor: '#a6e4d0',
        //   image: (
        //     <View>
        //       <View>
        //         <View style={{alignItems: 'center'}}>
        //           <OnboardingIcon />
        //           <View style={{marginTop: 56, marginBottom: 16}}>
        //             <TextInput
        //               style={styles.inputField}
        //               placeholder={'Enter your name'}
        //               value={userName}
        //               onChangeText={text => setUserName(text)}
        //             />
        //           </View>
        //         </View>
        //         <View style={{width: width - 60}}>
        //           <ButtonComponent
        //             title={'Get Started'}
        //             onPress={() => {
        //               if (userName !== '') {
        //                 dispatch(saveUserName({name: userName}));
        //                 setUserName('');
        //                 navigation.navigate('MainNavigator');
        //               }
        //             }}
        //           />
        //         </View>
        //       </View>
        //     </View>
        //   ),
        //   title: '',
        //   subtitle: '',
        // },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  inputText: {
    textAlign: 'center',
    marginTop: 80,
    fontSize: 28,
    marginBottom: 40,
  },
  inputField: {
    borderColor: 'black',
    borderWidth: 1,
    width: width - 60,
    height: 56,
    alignSelf: 'center',
    borderRadius: 100,
    paddingLeft: 20,
  },
  cta: {
    height: 50,
    backgroundColor: '#5EDB83',
    borderRadius: 25,
    marginLeft: 16,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWithCta: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
