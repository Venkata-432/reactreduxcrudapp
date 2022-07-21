import './App.css';
import {Provider} from "react-redux";
import store from "../../store";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

import BookListComponent from "../book-components/book-list-component"
import BookAddComponent from "../book-components/book-add-component"
import BookUpdateComponent from "../book-components/book-update-component"
import BookViewComponent from "../book-components/book-view-component"
import Header from "../parts/header"
import Footer from "../parts/footer"

const App = () => {
  return (
    <Provider store={store}>
        <Router>
        <Header/>
            <div className="container">
                <Switch>
                    <Route path="/" exact component={BookListComponent}/>
                    <Route path="/books/add" exact component={BookAddComponent}/>
                    <Route path="/books/:id" exact component={BookUpdateComponent}/>
                    <Route path="/books/view/:id" exact component={BookViewComponent}/>
                </Switch>
            </div>
            <Footer/>
        </Router>
    </Provider>
  );
};

export default App;
