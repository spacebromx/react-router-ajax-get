import axios from 'axios';
import { API_ROOT_URL, FETCH_BREEDS, FETCH_BREED_INFO } from "../constants"

export function fetchBreeds() {
    const request = axios.get(`${API_ROOT_URL}/breeds/list`);

    return {
        type: FETCH_BREEDS,
        payload: request
    };
}

export function fetchBreedInfo(breed) {
    const request = axios.get(`${API_ROOT_URL}/breed/${breed}/images/random`);

    return {
        type: FETCH_BREED_INFO,
        payload: request
    };
}