import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';


class List extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                <p>Please choose a repository from the list below.</p>
                <ul>
                    <li><Link to="/details">Details</Link></li>
                </ul>
            </div>
            </BrowserRouter>
        );
    }
}

export default List;