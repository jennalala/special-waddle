import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>This is my home page. </h1>
            <Link className="btn btn-success" to="/about">Read About Me!</Link>
        </div>
    );
};

export default Home;