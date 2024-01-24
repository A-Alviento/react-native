import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

type RootStackParamList = {
    Search: undefined;
    ResultsShow: undefined;
};

export interface navProp {
    navigation: NavigationStackProp<RootStackParamList, 'Search'>;
}


const SearchScreen = ({ navigation }: navProp) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    const filterResultsByPrice = (price: string) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price
        })
    }

    return <>
        <SearchBar 
            term={term} 
            onTermChange={(newTerm) => setTerm(newTerm)} // if your callback function just calls a single function pasing the arguments into it, can just do this
            onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> 
        : null}
        <ScrollView>
            <ResultsList 
                results={filterResultsByPrice('$')} 
                title="Cost Effective"
                navigation={navigation}
            />
            <ResultsList 
                results={filterResultsByPrice('$$')} 
                title="Bit Pricier"
                navigation={navigation}
            />
            <ResultsList 
                results={filterResultsByPrice('$$$')} 
                title="Big Spender"
                navigation={navigation}
            />
        </ScrollView>
    </>
}

const styles = StyleSheet.create({

})

export default SearchScreen;