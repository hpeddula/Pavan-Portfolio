import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './notfound.scss';
export default class NotFound extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid not-found-container">
                    <div className="not-found-box">
                        <h2>Oops! Wrong Page</h2>
                        <div>
                            <Link to="/">Back To Home</Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
