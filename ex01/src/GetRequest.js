import React, { Component } from 'react';

class GetRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = { totalReactPackages: null };
}
componentDidMount() {
    fetch('https://api.npms.io/v2/search?q=react')
    .then(response => response.json())
    .then(date => this.setState({ totalReactPackages: date.total }));
}
// render() goes here 
}
render() 
    const { totalReactPackages } = this.state;
    retern (
        <div className="card text-center m-3">
            <h5 className="card-header">Simple GET Request</h5>
            <div className="card-body">Total packages: {totalReactPackages}</div>
        </div>
    );

export default GetRequest;