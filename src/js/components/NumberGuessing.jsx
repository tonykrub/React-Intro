var React = require('react');

var NumberGuessing = React.createClass({
    getInitialState: function() {   
        return {
            gameStatus: 'playing',
            numberToGuess: Math.floor(Math.random() * 100), // something between 1 and 100 generated when we start a game
            guesses: [], 
            remainingGuesses: 5
        };
    },
    _startGame: function() {  
        this.setState({
            gameStatus: 'playing',
            numberToGuess: Math.floor(Math.random() * 100),
            guesses: [],
            remainingGuesses: 5
        });
    },  // for this exercise, we use 'state' more than 'props' here (as you will see below) because here we are setting definition or model for the game. So here we are setting a state. That is why you will see the word this.state.. instead of this.props here.
    _checkGuess: function() {
        var newArr = [].concat(this.state.guesses);  // as per the above, 'guesses' is an array. So here we concatenate an empty array with the array of guesses from the game players. Concat will create a new array. We need to concatenate because 'guesses' is an array. To push an array into an empty array, we use concat. for more info, read https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/concat   AND   http://stackoverflow.com/questions/4156101/javascript-push-array-values-into-another-array
        var guessState = {   // this will be where we keep the user's guesses 
            guesses: newArr
        };
        var userGuess = this.refs.userGuess.value;  // Here you could also use 'var userGuess = Number(this.refs.userGuess.value)' which works as well
        var numberToGuess = this.state.numberToGuess;  // for 'this.refs.userGuess.value', it is an object where there are many refs. And one of the refs in called 'userGuess'
       
        if (this.state.remainingGuesses > 1) {
            this.state.remainingGuesses = this.state.remainingGuesses - 1;
            guessState.guesses.push(userGuess);
            if (numberToGuess === userGuess) {
                this.state.gameStatus = 'win';
                // this.setState({
                //     gameStatus: 'WIN'
                // });
            }
            else if (numberToGuess < userGuess) {
                this.state.message = 'TOO HIGH';
            }
            else if (numberToGuess > userGuess) {
                this.state.message = 'TOO LOW';
            }
        } 
        else {
            this.state.gameStatus = 'lose';
            // this.setState({
            //     gameStatus: 'LOSE'
            // });
        }
        this.setState(guessState);  // as per what we defined above as variable, 'guessState' is a variable and is an array. For this.setState, we need to pass an array. 
    },   
    renderResult: function() {
        var gameStatus = this.state.gameStatus;
        var gameResult;
 //       var loserMessage;
        if (gameStatus === "win") {
            gameResult = "YOU WIN!";
        } 
        else if (gameStatus === "lose") {
            gameResult = "YOU LOSE";
 //           loserMessage = this.state.numberToGuess;
        }
        // else if (!this.state.gameStatus) {
        //     return null;
        // }
        return (
            <div>
                <h2>{gameResult}</h2>
                <button onClick={this._startGame}>NEW GAME</button>
            </div>
            );
    },
    renderPlayingStatus: function() {
        return (  // in the below html in the 'input' part. Eventhough it is 'this.refs.userGuess.value' which we got from the GuessTheNumber exercise. But we use ref="userGuess" (ref without an 's'), instead of refs, because it is a ref that is called "userGuess". So it is just one ref. Note that 'this.refs.userGuess.value' is an object with many refs, and userGuess is one of the refs.
            <div>
                <h2>Guess a number between 1 and 100</h2>
                <h2>Remaining tries: {this.state.remainingGuesses}</h2>
                <p>
                    <input type="text" ref="userGuess"/>  
                    <button onClick={this._checkGuess}>GUESS</button>
                </p>
                <p>Your Guess: {this.state.guesses.toString()}</p>
                <p>{this.state.message}</p>
            </div>
            );  
    },
    
    render: function() {
        if (this.state.gameStatus === 'playing') {
            return (
                <div>
                    {this.renderPlayingStatus()}
                </div>
                );
        }
        else {
            return (
                <div>
                    {this.renderResult()}
                </div>
                );
        }
    }
                
    
});



module.exports = NumberGuessing;


// the below code also works, which is not much changed from the above code
// var React = require('react');

// var NumberGuessing = React.createClass({
//     getInitialState: function() {   
//         return {
//             gameStatus: 'playing',
//             numberToGuess: Math.floor(Math.random() * 100), // something between 1 and 100 generated when we start a game
//             guesses: [], 
//             remainingGuesses: 5
//         };
//     },
//     _startGame: function() {  
//         this.setState({
//             gameStatus: 'playing',
//             numberToGuess: Math.floor(Math.random() * 100),
//             guesses: [],
//             remainingGuesses: 5
//         });
//     },
//     _checkGuess: function() {
//         var newArr = [].concat(this.state.guesses);
//         var state = {
//             guesses: newArr
//         };
//         var userGuess = this.refs.userGuess.value;  //  Here you could also use 'var userGuess = Number(this.refs.userGuess.value)' which works as well
//         var numberToGuess = this.state.numberToGuess;
//         if (this.state.remainingGuesses > 1) {
//             state.remainingGuesses = this.state.remainingGuesses - 1;
//             state.guesses.push(userGuess);
//             if (numberToGuess === userGuess) {
//                 state.gameStatus = 'win';
//                 // this.setState({
//                 //     gameStatus: 'WIN'
//                 // });
//             }
//             else if (numberToGuess < userGuess) {
//                 state.message = 'TOO HIGH';
//             }
//             else if (numberToGuess > userGuess) {
//                 state.message = 'TOO LOW';
//             }
//         } 
//         else {
//             state.gameStatus = 'lose';
//             // this.setState({
//             //     gameStatus: 'LOSE'
//             // });
//         }
//         this.setState(state);
//     },
//     renderResult: function() {
//         var gameStatus = this.state.gameStatus;
//         var gameStatusResult;
//  //       var loserMessage;
//         if (gameStatus === "win") {
//             gameStatusResult = "YOU WIN!";
//         } 
//         else if (gameStatus === "lose") {
//             gameStatusResult = "YOU LOSE";
//  //           loserMessage = this.state.numberToGuess;
//         }
//         // else if (!this.state.gameStatus) {
//         //     return null;
//         // }
//         return (
//             <div>
//                 <h2>{gameStatusResult}</h2>
//                 <button onClick={this._startGame}>NEW GAME</button>
//             </div>
//             );
//     },
//     renderPlayingStatus: function() {
//         return (
//             <div>
//                 <h2>Guess a number between 1 and 100</h2>
//                 <h2>Remaining tries: {this.state.remainingGuesses}</h2>
//                 <p>
//                     <input type="text" ref="userGuess"/> 
//                     <button onClick={this._checkGuess}>GUESS</button>
//                 </p>
//                 <p>Your Guess: {this.state.guesses.toString()}</p>
//                 <p>{this.state.message}</p>
//             </div>
//             );
//     },
    
//     render: function() {
//         if (this.state.gameStatus === 'playing') {
//             return (
//                 <div>
//                     {this.renderPlayingStatus()}
//                 </div>
//                 );
//         }
//         else {
//             return (
//                 <div>
//                     {this.renderResult()}
//                 </div>
//                 );
//         }
//     }
                
    
// });



// module.exports = NumberGuessing;


