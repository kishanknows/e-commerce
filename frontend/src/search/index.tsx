import {SafeAreaView, Text} from 'react-native';
import {SearchInput} from './components';
import {useState} from 'react';
import {Recents} from './components/recents';

function SearchScreen(): JSX.Element {
  const [query, setQuery] = useState('');
  return (
    <SafeAreaView>
      <SearchInput query={query} setQuery={setQuery} />
      <Recents setQuery={setQuery} />
    </SafeAreaView>
  );
}

export default SearchScreen;
