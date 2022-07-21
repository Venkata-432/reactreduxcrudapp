import {combineReducers} from "redux";
import errorsReducer from "./error-reducer";
import BooksReducer from "./book-reducer";

export default combineReducers({
    errors: errorsReducer,
    books: BooksReducer
});