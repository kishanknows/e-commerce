import {
  View,
  Pressable,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Icon} from '../assets';
import {useNavigation} from '@react-navigation/native';

export type HeaderProps = {
  locationModalShown: boolean;
  setLocationModalShown: (value: boolean) => void;
};

export function Header(props: HeaderProps): JSX.Element {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.setLocationModalShown(!props.locationModalShown)}>
        <Text style={styles.text1}>DELIVERY IN</Text>
        <Text style={styles.text2}>10 minutes</Text>
        <View style={styles.location}>
          <Text style={styles.text3}>HOME - </Text>
          <Text>Kumaon hostel, IIT Delhi</Text>
        </View>
      </TouchableOpacity>
      {/* @ts-ignore */}
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image source={Icon.profile} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  text1: {
    fontSize: 12,
    fontWeight: '600',
  },
  text2: {
    fontSize: 28,
    fontWeight: '800',
  },
  text3: {
    fontSize: 16,
    fontWeight: '600',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
