import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Product} from '../../components/product';

export type CatalogProps = {
  title: string;
  category: string;
};

export function Catalog(props: CatalogProps): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text1}>{props.title}</Text>
        <Text onPress={() => {}} style={styles.text2}>
          see all
        </Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Product
          title="potato"
          price={200}
          quantity={1}
          units="kg"
          imgUri="https://photo-cdn2.icons8.com/K8gkkdbRaFe0_0hMQWBe2AFE3b6uYE0o-D48OvtJnNs/rs:fit:576:384/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvOTM5Lzg4YTk0/MTg2LWQ0NzYtNGZl/NS1hMzU2LWFlYmI3/ODc1NjU4Ni5qcGc.webp"
        />
        <Product
          title="potato"
          price={200}
          quantity={1}
          units="kg"
          imgUri="https://photo-cdn2.icons8.com/K8gkkdbRaFe0_0hMQWBe2AFE3b6uYE0o-D48OvtJnNs/rs:fit:576:384/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvOTM5Lzg4YTk0/MTg2LWQ0NzYtNGZl/NS1hMzU2LWFlYmI3/ODc1NjU4Ni5qcGc.webp"
        />
        <Product
          title="potato"
          price={200}
          quantity={1}
          units="kg"
          imgUri="https://photo-cdn2.icons8.com/K8gkkdbRaFe0_0hMQWBe2AFE3b6uYE0o-D48OvtJnNs/rs:fit:576:384/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvOTM5Lzg4YTk0/MTg2LWQ0NzYtNGZl/NS1hMzU2LWFlYmI3/ODc1NjU4Ni5qcGc.webp"
        />
      </ScrollView>
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
});
