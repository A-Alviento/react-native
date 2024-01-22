import { useEffect, useState } from 'react';
import yelp from '../api/yelp';
import { result } from '../api/yelp';

export default () => {
    const [results, setResults] = useState<result[]>([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm: string) => {
        try {
            setErrorMessage('');
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm, 
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Oh oh');
        }
    };

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage] as const;
};
