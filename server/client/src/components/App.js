import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import {fetchUser} from "../slices/authSlice";

const Dashboard = () => <h2>dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('useEffect - didMount');
        dispatch(fetchUser());
    }, []);
    return (
        <div className={'container'}>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/surveys" component={Dashboard}/>
                    <Route exact path="/surveys/new" component={SurveyNew}/>
                </div>

            </BrowserRouter>

        </div>)
        ;
}

export default App;
