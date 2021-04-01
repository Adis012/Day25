import React, { Component } from 'react';

class PostRequestSetHeaders extends Component {
    constructor(props) {
        super(props);
        this.state = { articleId: null };
    }

    componentDidMount() {
        const requestOptions = {
            methode: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer my-token',
                'My-Custom-Header': 'foobar'
            },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
        .then(response => response.json())
        .then(date => this.setState({ articleId: date.id }));
    }

    render() {
        const { articleId } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">POST Request with Set Headers</h5>
                <div className="card-body">Article Id: {articleId}</div>
            </div>
        );
    }
}

export default PostRequestSetHeaders;