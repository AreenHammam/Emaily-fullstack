import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from "../Payments/Payments";


const Header = () => {
    const auth = useSelector((state) => state.auth.authUser);
    console.log('header user', auth)
    const renderContent = () => {
        switch (auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login with Google</a></li>;
            default:
                return [
                    <li key="1"><Payments/></li>,
                    <li style={{margin: '0 10px'}} key="2">
                        Credits: {auth.credits}
                    </li>,
                    <li key="3"><a href="/api/logout">Logout</a></li>,
                ];
        }
    }
    return (
        <nav>
            <div className="nav-wrapper">
                <Link
                    to={auth ? '/surveys' : '/'}
                    className="left brand-logo">
                    Emaily
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {renderContent()}
                </ul>
            </div>
        </nav>
    )
}

export default Header;
