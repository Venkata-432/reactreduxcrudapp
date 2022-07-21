import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {createBook} from "../../actions/book-actions";
import InputForm from "../parts/input-form";

class BookAddComponent extends Component{
    state = {
        bookCode: "",
        bookName: "",
        authorName: "",
        price: "",
        description: "",
        errors: {}
    };

    // static getDerivedStateFromProps(nextProps)
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };

    createBook = (event) => {
        event.preventDefault();

        const {bookCode, bookName, authorName, price, description} = this.state;
        const book = {bookCode, bookName, authorName, price, description};

        this.props.createBook(book, this.props.history);
    };

    render() {
        return (
            <div>
                <InputForm
                    title={"Add Book"}
                    book={this.state}
                    errors={this.state.errors}
                    onSubmitForm={this.createBook}
                    handleInputChange={this.handleInputChange}/>
            </div>
        );
    }
}

BookAddComponent.propTypes = {
    createBook: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    errors: state.errors,
});

export default connect(mapStateToProps, {createBook})(BookAddComponent);