var React = require('react');

var CharacterCounter = React.createClass({
    getInitialState: function() {
        return {
            currentInput: ""
        };
    },
    _handleInput: function(event) {        
        var value = event.target.value;  
        this.setState({                 
            currentInput: value.length
        });
        
    },
    render: function() {
        return (
            <div>
                <input type="text" onInput={this._handleInput}/>  
                <h2>Character Counter: {this.state.currentInput}</h2>
            </div>
        );
    }
});



module.exports = CharacterCounter;
