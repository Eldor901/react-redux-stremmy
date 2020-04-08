import React, {Component} from 'react';
import {Router, Route, Link, Switch} from 'react-router-dom';
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";
import "../css/index.css";

class App extends Component {
    render() {
        return (
            <>
                <Router history={history}>
                    <Header />
                    <div className="ui  container main">
                        <Switch>
                            <Route path='/' exact={true} component={StreamList}/>
                            <Route path='/streams/new' exact={true} component={StreamCreate}/>
                            <Route path='/streams/edit/:id' exact={true} component={StreamEdit}/>
                            <Route path='/streams/delete/:id' exact={true} component={StreamDelete}/>
                            <Route path='/streams/:id' exact={true} component={StreamShow}/>
                         </Switch>
                    </div>
                </Router>
            </>
        );
    }
}

export default App;
