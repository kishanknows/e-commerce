import {Image, StyleSheet, TextInput, View} from 'react-native';
import {Icon} from '../../assets';

export type SearchInputProps = {
  query: string;
  setQuery: (query: string) => void;
};

export function SearchInput(props: SearchInputProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={Icon.back} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search for atta, dal, coke and more"
        value={props.query}
        onChangeText={props.setQuery}
      />
      <Image source={Icon.voice} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 8,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  input: {
    flex: 1,
  },
  icon: {
    height: 20,
    width: 20,
    margin: 8,
  },
});
