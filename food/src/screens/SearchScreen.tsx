import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    return <View>
        <SearchBar 
            term={term} 
            onTermChange={(newTerm) => setTerm(newTerm)} // if your callback function just calls a single function pasing the arguments into it, can just do this
            onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> 
        : <Text>We have found {results.length} results</Text>}
    </View>
}

const styles = StyleSheet.create({

})

export default SearchScreen;