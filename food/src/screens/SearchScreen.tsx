import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    const filterResultsByPrice = (price: string) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price
        })
    }

    return <View>
        <SearchBar 
            term={term} 
            onTermChange={(newTerm) => setTerm(newTerm)} // if your callback function just calls a single function pasing the arguments into it, can just do this
            onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> 
        : <Text>We have found {results.length} results</Text>}
        <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"/>
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
        <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"/>
    </View>
}

const styles = StyleSheet.create({

})

export default SearchScreen;