import {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

export type ContactInputProps = {
  value: string;
  setValue: (value: string) => void;
};

export function ContactInput(props: ContactInputProps): JSX.Element {
  const [active, setActive] = useState(true);
  return (
    <Pressable
      style={{
        ...styles.container,
        borderColor: active ? 'black' : 'gray',
      }}>
      <Text style={styles.areaCode}>+91</Text>
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.setValue}
        keyboardType="number-pad"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
    padding: 14,
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
  },
  areaCode: {
    fontSize: 14,
  },
  input: {
    flex: 1,
    marginHorizontal: 12,
    fontSize: 14,
  },
});
