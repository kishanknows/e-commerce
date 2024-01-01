import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export type ProductProps = {
  title: string;
  imgUri: string;
  price: number;
  quantity: number;
  units: string;
};

export function Product(props: ProductProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Image src={props.imgUri} style={styles.image} />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.qtyText}>
        {props.quantity} {props.units}
      </Text>
      <View style={styles.price}>
        <Text style={styles.priceText}>
          {'\u20B9'}
          {props.price}
        </Text>
        <TouchableOpacity style={styles.addContainer}>
          <Text style={styles.addText}>ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    width: 120,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addContainer: {
    backgroundColor: 'cyan',
    borderWidth: 0.5,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    paddingVertical: 2,
    borderRadius: 6,
  },
  addText: {
    fontSize: 14,
    color: 'green',
    fontWeight: '500',
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 4,
  },
  priceText: {
    fontSize: 14,
    fontWeight: '500',
  },
  qtyText: {
    marginBottom: 8,
    fontSize: 12,
  },
});
