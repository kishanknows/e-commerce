import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export type PrimaryButtonProps = {
  title: string;
  active: boolean;
  onPress: () => void;
};

export function PrimaryButton(props: PrimaryButtonProps): JSX.Element {
  return (
    <TouchableOpacity
      style={{
        ...styles.background,
        backgroundColor: props.active ? 'green' : 'gray',
      }}
      onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  background: {
    margin: 12,
    padding: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
});
