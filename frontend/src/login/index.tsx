import {SafeAreaView} from 'react-native';
import {PrimaryButton} from '../components';
import {ContactInput} from './components';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

function LoginScreen(): JSX.Element {
  const [contact, setContact] = useState('');
  const navigation = useNavigation();
  function onContinue() {
    //@ts-ignore
    navigation.navigate('OTP', {contact: contact});
  }
  return (
    <SafeAreaView>
      <ContactInput value={contact} setValue={setContact} />
      <PrimaryButton title="Continue" active={true} onPress={onContinue} />
    </SafeAreaView>
  );
}

export default LoginScreen;
