import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../auth/AuthContext';
import logo from 'D:/React/todo-app/src/images/logo.png'

function Navbar(props) {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {
                            !user ?
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/create-task">Create Task</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/task-list">Task List</Link>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {user?.name}
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                            <li className='dropdown-item' onClick={logout}>Logout</li>
                                        </ul>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;