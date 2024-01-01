import {Image, Pressable, StyleSheet, Text} from 'react-native';
import {Icon} from '../../assets';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export function Search(): JSX.Element {
  const navigation = useNavigation();
  const suggestions = ['milk', 'onion', 'sugar', 'eggs', 'chips', 'tomato'];
  const [currentSuggestion, setCurrentSuggestion] = useState(0);
  return (
    <Pressable
      style={styles.container}
      //@ts-ignore
      onPress={() => navigation.navigate('Search')}>
      <Image source={Icon.search} style={styles.icons} />
      <Text style={styles.text}>Search "{suggestions[currentSuggestion]}"</Text>
      <Image source={Icon.voice} style={styles.icons} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cyan',
    margin: 8,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'lightblue',
  },
  icons: {
    height: 20,
    width: 20,
    margin: 8,
  },
  text: {
    flex: 1,
    color: 'black',
  },
});
