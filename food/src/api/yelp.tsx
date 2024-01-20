import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer SfYzkqTvht8ivWEJ7KudB-lANYp2oCuYyE2scag-JLqu9zBQU-Czm12gQVmR5fPyf0ZjD7hf9lv_4RW_R6sopEuxSg9BDUe3e5Be4R-aAx7q1c7_6BDgRjqreSuqZXYx'
    }
});