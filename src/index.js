import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NewComponent from './new';

class App extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            array: [ 
                {
                    id:1,
                    text:'item 1'
                },
                {
                    id:2,
                    text:'item 2'
                },
                {
                    id:3,
                    text:'item 3'
                }
                
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>Add component!</h1>
                <NewComponent array={this.state.array}/> 
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);


