var React = require('react');

var CharacterLimit = React.createClass({
    propTypes: {
          limit: React.PropTypes.number.isRequired
    },
    getInitialState: function() {
        return {
            currentInput: ""
        };
    },
    _handleInput: function(event) {         
        var value = event.target.value;   
        if (value.length < this.props.limit) {  // here we call props 'limit'. So in App.jsx, we also need to give the value of 'props' (which is named 'limit'). And in App.jsx, we give limit equals 140 as per the exercise's instruction. 
            this.setState({                 
                currentInput: value 
            });
        }
    },
    render: function() {
        return (
            <div>
                <input type="text" onInput={this._handleInput}/>  
                <h2>There are {this.props.limit - this.state.currentInput.length} characters remaining</h2>
            </div>
        );
    }
});



module.exports = CharacterLimit;
