import {useRoute} from '@react-navigation/native';
import {useEffect, useRef, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {PrimaryButton} from '../components';

type BoxInputProps = {
  id: number;
  activeId: number;
  setActiveId: (value: number) => void;
  value: string;
  setValue: (id: number, value: string) => void;
};

function BoxInput(props: BoxInputProps): JSX.Element {
  const inputRef = useRef<TextInput>();
  const focused = props.activeId === props.id;
  useEffect(() => {
    focused && inputRef.current?.focus();
  }, [focused]);
  return (
    <Pressable
      style={{
        ...styles.box,
        borderColor: focused ? 'green' : 'gray',
      }}
      onPress={() => {
        props.setActiveId(props.id);
      }}>
      {/* @ts-ignore */}
      <TextInput
        value={props.value}
        onChangeText={props.setValue}
        maxLength={1}
        keyboardType="number-pad"
        onKeyPress={e => {
          if (e.nativeEvent.key !== 'Backspace') {
            props.setValue(props.id, e.nativeEvent.key);
            props.setActiveId(props.activeId === 3 ? 0 : props.activeId + 1);
          }
        }}
        caretHidden={true}
        style={styles.boxInput}
        ref={inputRef}
      />
    </Pressable>
  );
}

type OTPInputProps = {
  otp: string[];
  updateOtp: (id: number, value: string) => void;
};

function OTPInput(props: OTPInputProps): JSX.Element {
  const [activeId, setActiveId] = useState(0);

  return (
    <View style={styles.otpInput}>
      <BoxInput
        id={0}
        activeId={activeId}
        setActiveId={setActiveId}
        value={props.otp[0]}
        setValue={props.updateOtp}
      />
      <BoxInput
        id={1}
        activeId={activeId}
        setActiveId={setActiveId}
        value={props.otp[1]}
        setValue={props.updateOtp}
      />
      <BoxInput
        id={2}
        activeId={activeId}
        setActiveId={setActiveId}
        value={props.otp[2]}
        setValue={props.updateOtp}
      />
      <BoxInput
        id={3}
        activeId={activeId}
        setActiveId={setActiveId}
        value={props.otp[3]}
        setValue={props.updateOtp}
      />
    </View>
  );
}

function OTPScreen(): JSX.Element {
  const [otp, setOtp] = useState(['', '', '', '']);

  function updateOtp(id: number, value: string) {
    const newOtp = otp;
    newOtp[id] = value;
    setOtp(newOtp);
  }

  function verifyOtp() {}

  const route = useRoute();
  //@ts-ignore
  const contact = route.params.contact;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text>We've sent a verification code to</Text>
        <Text style={styles.text}>+91 {contact}</Text>
      </View>
      <OTPInput otp={otp} updateOtp={updateOtp} />
      <PrimaryButton title="Continue" onPress={verifyOtp} active={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 24,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
  box: {
    padding: 8,
    margin: 8,
    borderRadius: 4,
    borderWidth: 1,
  },
  boxInput: {
    margin: 8,
  },
  otpInput: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 32,
  },
  textContainer: {
    alignItems: 'center',
  },
});

export default OTPScreen;
