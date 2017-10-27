import axios from 'axios';

let initialState = {
    products: []
}

//ACTION TYPES
const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

//REDUCER 
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_PRODUCTS + "_FULFILLED":
            console.log(action.payload)
            return Object.assign({}, state, { products: action.payload })

        default:
            return state
    }
}

//ACTION CREATORS
export function getAllProducts() {
    return {
        type: GET_ALL_PRODUCTS,
        payload: axios.get(`http://localhost:5050/products/getALL`).then(res => {
            return res.data
        })
    }
}