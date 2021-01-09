import * as type from '../types'
import axios from 'axios'

export const GET_DATA = "GET_DATA"
export const GET_DATA_FETCH = "GET_DATA_FETCH"


export const getUser = async () => {
  try {
    const todos = await axios.get('https://jsonplaceholder.typicode.com/comments');
    return {
        data: todos.data,
        loading: true,
    };
  } catch (err) {
    return console.error(err);
  }
};