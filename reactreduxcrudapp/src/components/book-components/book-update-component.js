import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {updateBook, getBookById} from "../../actions/book-actions";
import InputForm from "../parts/input-form";

class BookUpdateComponent extends Component{
    state = {
        bookCode: "",
        bookName: "",
        authorName: "",
        price: "",
        description: "",
        errors: {}
    };

    componentDidMount() {
        this.props.getBookById(this.props.match.params.id);
    }

    // static getDerivedStateFromProps(nextProps)
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }

        this.setState({
            ...nextProps.book
        });
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };

    updateBook = (event) => {
        event.preventDefault();

        const {bookCode, bookName, authorName, price, description} = this.state;
        const book = {bookCode, bookName, authorName, price, description};

        this.props.updateBook(this.props.match.params.id, book, this.props.history);
    };

    render() {

        return (
            <div>
                <InputForm
                    title={"Update Book"}
                    book={this.state}
                    errors={this.state.errors}
                    onSubmitForm={this.updateBook}
                    handleInputChange={this.handleInputChange}/>
            </div>
        );
    }
}

BookUpdateComponent.propTypes = {
    updateBook: PropTypes.func.isRequired,
    getBookById: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    book: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    errors: state.errors,
    book: state.books.book
});

export default connect(mapStateToProps, {updateBook, getBookById})(BookUpdateComponent);