var React = require('react');

var GuessTheNumber = React.createClass({
    propTypes: {
          numberToGuess: React.PropTypes.number.isRequired
    },
    render: function() {
        return (
            <div>
                <p>Guess a number between 1 and 100</p>
                <p>
                    <input type="text" ref="userGuess"/>  
                    <button onClick={this._handleButtonClick}>GUESS</button>
                </p>
            </div>


        //   <main>
        //     <h2>Please guess a number between 1 and 100</h2>
        //     <input type="text" ref="userGuess"/>  
        //     <button onClick={this._handleButtonClick}>GUESS</button>
        //   </main>
          );
    },
    _handleButtonClick: function() {
        console.log(this.props.numberToGuess);
    if (this.props.numberToGuess > this.refs.userGuess.value) {
        alert('your number is too low');
    }
    else if (this.props.numberToGuess < this.refs.userGuess.value) {
        alert('your number is too high');
    }
    else {
        alert('Congratulations! You got it! That is the correct number!');
    }
    }
});


module.exports = GuessTheNumber;

