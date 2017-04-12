import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

    static propTypes = {
        btnText: PropTypes.string.isRequired,
        h1text: PropTypes.string.isRequired,
        newArray: PropTypes.array.isRequired
    };

    static defaultProps = {
        btnText: 'default props text'
    };

    btnClick() {
        console.log('Hi!');
    }

    render() {
        console.log(this.props.newArray);
        return (
            <div className="test">
                <h1> {this.props.h1text }</h1>
                <h3>It`s really working!!!</h3> 
                <button onClick={this.btnClick}>{ this.props.btnText }</button>
            </div>
        );
    }
}

ReactDOM.render(
    <App h1text="This is H1 text" newArray={[1,2,3]}/>,
    document.getElementById('app')
);


