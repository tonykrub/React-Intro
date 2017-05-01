var $ = require("jquery");
var React = require('react');


var GithubProfile = React.createClass({
    propTypes: {
          username: React.PropTypes.string.isRequired
    },
    getInitialState: function() {  
        return (
            {}    
        );
    },
    componentDidMount: function() {  
        var that = this;    // because below in .getJSON we use this.setState inside a function. But this.setState is REACT's function which exists outside any specific function As per the exercise's instruction under "NOTE", You are going to run into trouble when trying to use this.setState inside the callback of your jQuery AJAX call. That's because the callback is a new function and creates a new this context, so you lose the this that you had access to in the componentDidMount outer function. The way to fix this problem is to set this = that 
        $.getJSON( "https://api.github.com/users/gaearon", function(data) {   
            that.setState({
                user: data  // According to the exercise's instruction, we need to "add a user object to your state, and set it to the response of the AJAX call".  In the callback function of getJSON, we got the word 'data' from the getJSON documentation on http://api.jquery.com/jquery.getjson/. And 'data' here is the response of AJAX. As we need to set the object to the response of the AJAX call, we therefore set the object (which is the user) = data.  If you change to use the word 'response' instead of 'data', that works also. But you also need to use function(response) instead of function(data)
            });
        });
    },
    render: function() {
        var user = this.state.user;
        if(!user) {
            return (<div>LOADING</div>);
        }
        else if (this.state.user) {
            return (  
                <div class="github-user">
                    <img class="github-user__avatar" src={user.avatar_url}/>
                    <div class="github-user__info">
                        <p><strong>{user.login} ({user.name})</strong></p>
                        <p><strong>{user.bio}</strong></p>
                    </div>
                </div>
                );  
        }
    }
});



module.exports = GithubProfile;
