import React, { Component } from 'react';

class PostRequestErrorHandling extends Component {
    constructor(props) {
        super(props);
        this.state = { articleID: null, errorMessage: null };
    }

    componentDidMount() {
        const requestOptions = {
            methode: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })

        };
        fetch('https://jsonplaceholder.typicode.com/invalid-url', requestOptions)
        .then(async response => {
            const date = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = ( date &&  date.message) || response.status;
                return Promise.reject(error);
            }
            this.setState({ articleID: date.id})
        })
        .catch(error => {
            this.setState({ errorMessage });
            console.error('There was an error!', error);
        });
    }

    render() {
        const { errorMessage } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">POST Request with Error Handling</h5>
                <div className="card-body">
                    Error message: {errorMessage}
                    </div>
            </div>
        );
    }
}

export default PostRequestErrorHandling;