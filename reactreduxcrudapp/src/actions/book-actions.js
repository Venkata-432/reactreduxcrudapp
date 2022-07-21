import {GET_ERRORS,GET_BOOKS,GET_BOOK_BY_ID,DELETE_BOOK} from "./types";
import axios from "axios";

const bookStoreAPIURL="http://localhost:10432/bookdepot";
export const createBook=(book,history)=> async dispatch =>{
    try{
        await axios.post(bookStoreAPIURL+"/createBook",book);
        history.push("/");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
};

export const getBooks=()=>async dispatch =>{
    const response = await axios.get(bookStoreAPIURL+"/books");
    dispatch({
        type: GET_BOOKS,
        payload: response.data
    })
};

export const deleteBook = (bookId) => async dispatch => {
    await axios.delete(bookStoreAPIURL + "/deleteBook/" + bookId);
    dispatch({
        type: DELETE_BOOK,
        payload: bookId
    })
};

export const getBookById = (bookId) => async dispatch => {
    const response = await axios.get(bookStoreAPIURL + "/viewBookById/" + bookId);
    dispatch({
        type: GET_BOOK_BY_ID,
        payload: response.data
    })
};

export const updateBook = (bookId, book, history) => async dispatch => {
    try {
        await axios.put(bookStoreAPIURL + "/updateBook/" + bookId, book);
        history.push("/");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
};