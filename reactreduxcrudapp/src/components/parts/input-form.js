import React from 'react';
import {Link} from "react-router-dom";

const InputForm = ({title, book, errors, onSubmitForm, handleInputChange}) => {

    const {bookCode, bookName, authorName, price, description} = book;
    const {bookCodeError, bookNameError, authorNameError, priceError, descriptionError} = errors;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center mt-3">{title}</h3>
                    <div className="card-body">
                        <form onSubmit={onSubmitForm}>
                            <div className="form-group">
                                <label>Book Code</label>
                                <input
                                    type="text"
                                    name="bookCode"
                                    className={bookCodeError ? "form-control is-invalid" : "form-control"}
                                    value={bookCode}
                                    onChange={handleInputChange}/>
                                <div className="invalid-feedback">{bookCodeError}</div>
                            </div>
                            <div className="form-group">
                                <label>Book Name</label>
                                <input
                                    type="text"
                                    name="bookName"
                                    className={bookNameError ? "form-control is-invalid" : "form-control"}
                                    value={bookName}
                                    onChange={handleInputChange}/>
                                <div className="invalid-feedback">{bookNameError}</div>
                            </div>
                            <div className="form-group">
                                <label>Author Name</label>
                                <input
                                    type="text"
                                    name="authorName"
                                    className={authorNameError ? "form-control is-invalid" : "form-control"}
                                    value={authorName}
                                    onChange={handleInputChange}/>
                                <div className="invalid-feedback">{authorNameError}</div>
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input
                                    type="text"
                                    name="price"
                                    className={priceError ? "form-control is-invalid" : "form-control"}
                                    value={price}
                                    onChange={handleInputChange}/>
                                <div className="invalid-feedback">{priceError}</div>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <input
                                    type="text"
                                    name="description"
                                    className={descriptionError ? "form-control is-invalid" : "form-control"}
                                    value={description}
                                    onChange={handleInputChange}/>
                                <div className="invalid-feedback">{descriptionError}</div>
                            </div>
                            <input type="submit" className="btn btn-success" value="Save"/>
                            <Link to={"/"}>
                                <button className="btn btn-danger">Cancel</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputForm;