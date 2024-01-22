import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer SfYzkqTvht8ivWEJ7KudB-lANYp2oCuYyE2scag-JLqu9zBQU-Czm12gQVmR5fPyf0ZjD7hf9lv_4RW_R6sopEuxSg9BDUe3e5Be4R-aAx7q1c7_6BDgRjqreSuqZXYx'
    }
});

export interface result {
    alias: string;
    categories: Array<{
        alias: string;
        title: string;
    }>;
    coordinates: {
        latitude: number;
        longitude: number;
    };
    display_phone: string;
    distance: number;
    id: string;
    image_url: string;
    is_closed: boolean;
    location: {
        address1: string;
        address2: string;
        address3: string;
        city: string;
        country: string;
        display_address: string[];
        state: string;
        zip_code: string;
    };
    name: string;
    phone: string;
    price: string;
    rating: number;
    review_count: number;
    transactions: string[];
    url: string;
}