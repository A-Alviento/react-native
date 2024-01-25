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

export type resultDetailType = {
    alias: string,
    categories: Category[],
    coordinates: Coordinates,
    display_phone: string,
    distance: number,
    id: string,
    image_url: string,
    is_claimed: boolean,
    is_closed: boolean,
    date_opened: string,
    date_closed: string,
    location: Location,
    name: string,
    phone: string,
    photos: string[]
    photo_details: Photo[],
    photo_count: number,
    price: string,
    rating: number,
    review_count: number,
    hours: BusinessHours,
    special_hours: SpecialHour[],
    transactions: string[],
    url: string,
    attributes: BusinessAttributes,
    messaging: Messaging,
    yelp_menu_url: string,
    rapc: Rapc
};

type Category = {
    alias: string,
    title: string
};

type Coordinates = {
    latitude: number,
    longitude: number
};

type Location = {
    address1: string,
    address2: string,
    address3: string,
    city: string,
    country: string,
    display_address: string[],
    state: string,
    zip_code: string
};

type Photo = {
    photo_id: string,
    url: string,
    caption: string,
    width: number,
    height: number,
    is_user_submitted: boolean,
    user_id: string | null,
    label: string
};

type BusinessHours = {
    open: OpeningHour[],
    hours_type: string,
    is_open_now: boolean
};

type OpeningHour = {
    is_overnight: boolean,
    start: number,
    end: number,
    day: number
};

type SpecialHour = {
    date: string,
    end: string,
    is_closed: boolean | null,
    is_overnight: boolean,
    start: string
};

type BusinessAttributes = {
    business_temp_closed: number,
    outdoor_seating: boolean,
    liked_by_vegans: boolean,
    liked_by_vegetarians: boolean,
    hot_and_new: string
};

type Messaging = {
    url: string,
    use_case_text: string,
    response_rate: number,
    response_time: number,
    is_enabled: boolean
};

type Rapc = {
    is_enabled: boolean,
    is_eligible: boolean
};
