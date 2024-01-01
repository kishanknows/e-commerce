import {SafeAreaView, ScrollView, View} from 'react-native';
import {Header} from './header';
import {useState} from 'react';
import {Catalog, Search} from './components';

function HomeScreen(): JSX.Element {
  const [locationModalShown, setLocationModalShown] = useState(false);
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          locationModalShown={locationModalShown}
          setLocationModalShown={setLocationModalShown}
        />
        <Search />
        <Catalog title="Gift plants & bouquets" category="gifts" />
        <Catalog title="Gift plants & bouquets" category="gifts" />
        <Catalog title="Gift plants & bouquets" category="gifts" />
      </ScrollView>
    </SafeAreaView>
  );
}
export default HomeScreen;
