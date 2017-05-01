var React = require('react');

var YouClicked = React.createClass({
    getInitialState: function() {
        return {
            timesClicked: 0,        
            timesReset: 0
        };
    },
    _handleButtonClick: function() {         
        console.log(this.state);
        this.setState({                       
            timesClicked: this.state.timesClicked + 1
        });
    },
    _handleResetButton: function() {
        this.setState({
            timesClicked: 0,
            timeReset: this.state.timesReset +1
        });
    },
    resetMessage: function() {
        if (this.state.timesReset === 0) {
            return null;
        } 
        else if (this.state.timesReset === 1) {
            return 'you have reset once.'
        }
        else {
            return 'you have reset ' + this.state.timesReset + ' times.';
        }
    },
    render: function() {
        // function clickMessage() {
        //     console.log(this.state);
        //     if (this.state.timesClicked === 1) {  
                
        //         alert('you clicked me once.');
        //     }
        //     else if (this.state.timesClicked === 2) {
        //         alert('you clicked me twice.');
        //     }
        //     else if (this.state.timesClicked === 0) {
        //         alert('you never clicked me.');
        //     }
        //     else {
        //         alert('you clicked me ' + this.state.timesClicked + ' times.');
        //     }
        // }
        return (
            <div>
                <button onClick={this._handleButtonClick}>CLICK ME</button>
                <button onClick={this._handleResetButton}>RESET</button>
                <p>
                { this.state.timesClicked === 0 ? "you never clicked me" : this.state.timesClicked === 1 ? "you clicked me once" : this.state.timesClicked === 2 ? "you clicked me twice" : "you clicked me " + this.state.timesClicked + " times." }
                </p>
            </div>
            
            // in the <div> part above, we use ternary operator. To use javascript in html, we need to use {} to wrap javascript code. 
            // for more info on ternary operator, read http://www.w3schools.com/js/js_comparisons.asp
        );
    }
});


// <p>{clickMessage()}</p>

module.exports = YouClicked;
