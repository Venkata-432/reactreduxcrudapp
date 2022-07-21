import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {getBookById} from "../../actions/book-actions";

class BookViewComponent extends Component{
    componentDidMount() {
        this.props.getBookById(this.props.match.params.id);
    };

    render() {
        const {BookCode, BookName, AuthorName, price, description} = this.props.book;

        return (
            <div>
                <br/>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Book Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <div className="mr-2">Book Code:</div>
                            <div>{BookCode}</div>
                        </div>
                        <div className="row">
                            <div className="mr-2">Book Name:</div>
                            <div>{BookName}</div>
                        </div>
                        <div className="row">
                            <div className="mr-2">Author Name:</div>
                            <div>{AuthorName}</div>
                        </div>
                        <div className="row">
                            <div className="mr-2">Price:</div>
                            <div>{price}</div>
                        </div>
                        <div className="row">
                            <div className="mr-2">Description:</div>
                            <div>{description}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

BookViewComponent.propTypes = {
    getBookById: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    book: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    errors: state.errors,
    book: state.books.book
});

export default connect(mapStateToProps, {getBookById})(BookViewComponent);