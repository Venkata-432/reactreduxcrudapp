import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {getBooks, deleteBook} from "../../actions/book-actions";

import "./book.css";

class BookListComponent extends Component{

    componentDidMount(){
        this.props.getBooks();
    }

    deleteBook=(id) =>{
        this.props.deleteBook(id);
    }

    render(){
      const {books} = this.props.books;

        return(
            <div>
                <h2 className="text-center mt-4">Books List</h2>
                <div className="row">
                    <Link to={`/books/add`}>
                        <button style={{marginBottom: "10px"}}
                                className="btn btn-success">Add Book
                        </button>
                    </Link>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead className="bg-dark" style={{color: "white"}}>
                            <tr className="notbold">
                                    <th>Book Code</th>
                                    <th>Book Name</th>
                                    <th>Author Name</th>
                                    <th>Price</th>
                                    <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book) =>
                                <tr key={book.id}>
                                    <td> {book.bookCode} </td>
                                    <td> {book.bookName} </td>
                                    <td> {book.authorName}</td>
                                    <td> {book.price}</td>
                                    <td> {book.description}</td>
                                    <td>
                                        <Link to={`/books/${book.id}`}>
                                            <button className="btn btn-dark">Edit</button>
                                        </Link>
                                        <Link to={`/books/view/${book.id}`}>
                                            <button className="btn btn-dark">View</button>
                                        </Link>
                                        <button onClick={() => this.deleteBook(book.id)}
                                                className="btn btn-danger">Delete
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>     
        );
    }
}

BookListComponent.propTypes = {
    getBooks: PropTypes.func.isRequired,
    deleteBook: PropTypes.func.isRequired,
    books: PropTypes.object.isRequired
};

//here  have to take data i.e. value of state from store so we ll take using following method
const mapStateToProps = (state) => ({
    books: state.books
});

export default connect(mapStateToProps, {getBooks, deleteBook})(BookListComponent);