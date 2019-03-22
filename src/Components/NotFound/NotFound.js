import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './notfound.scss';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default class NotFound extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="not-found-box">
                        <h2>Oops! Wrong Page</h2>
                    </div>
                    <div className="not-found-button">
                        <Link to="/">
                            <FontAwesomeIcon icon={faHome} size="2x" /> Back To Home
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
