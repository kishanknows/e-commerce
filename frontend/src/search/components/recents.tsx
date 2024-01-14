import {Pressable, StyleSheet, Text, View} from 'react-native';

export type RecentsProps = {
  setQuery: (query: string) => void;
};

export function Recents(props: RecentsProps): JSX.Element {
  const recents = [
    'potato',
    'tomato',
    'chips',
    'oreo',
    'coffee',
    'tea',
    'sugar',
    'coke',
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text1}>Recent searches</Text>
        <Text onPress={() => {}} style={styles.text2}>
          clear
        </Text>
      </View>
      <View style={styles.itemContainer}>
        {recents.map((value, index) => (
          <Pressable
            style={styles.item}
            key={index}
            onPress={() => props.setQuery(value)}>
            <Text style={styles.itemText}>{value}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  text1: {
    fontSize: 16,
    fontWeight: '800',
  },
  text2: {
    fontSize: 12,
    fontWeight: '700',
    color: 'green',
  },
  item: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 8,
    paddingVertical: 6,
    margin: 8,
  },
  itemText: {
    fontSize: 12,
  },
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
