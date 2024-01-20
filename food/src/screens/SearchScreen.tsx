import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const searchApi = async () => {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term, 
                location: 'san jose'
            }
        });
        setResults(response.data.businesses)
    };

    return <View>
        <SearchBar 
            term={term} 
            onTermChange={setTerm} // if your callback function just calls a single function pasing the arguments into it, can just do this
            onTermSubmit={searchApi}
        />
        <Text>We have found {results.length}</Text>
    </View>
}

const styles = StyleSheet.create({

})

export default SearchScreen;