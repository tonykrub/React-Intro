var React = require('react');


var ImageCaption = require('./ImageCaption.jsx');
var Layout = require('./Layout.jsx');
var GuessTheNumber = require('./GuessTheNumber.jsx');
var YouClicked = require('./YouClicked.jsx');
var CharacterCounter = require('./CharacterCounter.jsx');
var  CharacterLimit = require('./CharacterLimit.jsx');
var NumberGuessing = require('./NumberGuessing.jsx');
var GithubProfile = require('./GithubProfile.jsx');


var imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

var App = React.createClass({
  render: function() {
    return (
      <main>
        <h1>My first React App</h1>
        <hr/>
        <h2>1-TestingImageCaption</h2>
        <ImageCaption source="http://i.imgur.com/D8JWn.jpg" text="Hello Kitty Cat!"/>
        <hr/>
        <h2>2-ImageList</h2>
        <div>
        {imageList.map(this.renderImage)}   
        </div>
        <hr/> 
        <h2>3-Testing Layout</h2>
        <Layout>
        <h2>3-About us</h2>
        <p>We are <a href="https://facebook.github.io/react/">React</a> developers!</p>
        </Layout>
        <hr/>
        <h2>GuessTheNumber</h2>
        <GuessTheNumber numberToGuess = {Math.floor(Math.random() * 100)}></GuessTheNumber>
        <hr/>
        <h2>YouClicked</h2>
        <YouClicked></YouClicked>
        <hr/>
        <h2>Character Counter</h2>
        <CharacterCounter></CharacterCounter>
        <hr/>
        <h2>Character Limit</h2>
        <CharacterLimit limit={140}/>
        <hr/>
        <h2>Number Guessing Game</h2>
        <NumberGuessing/>
        <hr/>
        <h2>Github Profile</h2>
        <GithubProfile/>
        <hr/>
      </main>  
    );
  },
  renderImage: function(image) {
    return (
      <ImageCaption source={image.source} text={image.text} key={image.id}/>
      );
  }
});

module.exports = App;
