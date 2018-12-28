import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        Dashboard
    </div>
)

const AddExpensePage = () => (
    <div>
        Add Expense
    </div>
)

const EditExpensePage = () => (
    <div>
        Edit Expense
    </div>
)

const HelpPage = () => (
    <div>
        Help Page
    </div>
)

const routes = (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={ExpenseDashboardPage} />
            <Route exact path="/create" component={AddExpensePage} />
            <Route exact path="/edit" component={EditExpensePage} />
            <Route exact path="/help" component={HelpPage} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));