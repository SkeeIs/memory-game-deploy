(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e){e.exports=[{id:1,gif:"imgs/gif01.gif",clicked:!1},{id:2,gif:"./imgs/gif02.gif",clicked:!1},{id:3,gif:"./imgs/gif03.gif",clicked:!1},{id:4,gif:"./imgs/gif04.gif",clicked:!1},{id:5,gif:"./imgs/gif05.gif",clicked:!1},{id:6,gif:"./imgs/gif06.gif",clicked:!1},{id:7,gif:"./imgs/gif07.gif",clicked:!1},{id:8,gif:"./imgs/gif08.gif",clicked:!1},{id:9,gif:"./imgs/gif09.gif",clicked:!1},{id:10,gif:"./imgs/gif10.gif",clicked:!1},{id:11,gif:"./imgs/gif11.gif",clicked:!1},{id:12,gif:"./imgs/gif12.gif",clicked:!1}]},,,,,,,,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),n=a(4),l=a.n(n),r=(a(15),a(5)),s=a(6),o=a(8),g=a(7),f=a(9),m=a(2),d=(a(17),function(e){return c.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.handleClick(e.id)}},c.a.createElement("img",{src:e.gif,alt:"head turn gif"}))}),h=(a(19),function(e){return c.a.createElement("nav",{className:"navbar navbar-expand-lg"},c.a.createElement("h2",{className:"title"},"Dramatic Head Turn Memory Game"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("div",{className:"comms"},e.message)),c.a.createElement("li",null,c.a.createElement("div",{className:"render-score"},"Current Score: ",e.score)),c.a.createElement("li",null,c.a.createElement("div",{className:"render-high-score"},"High Score: ",e.highScore)),c.a.createElement("li",null,c.a.createElement("button",{className:"btn new-game",onClick:e.newGame},"New Game"))))}),u=(a(21),function(e){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"row"},e.children))))}),k=(a(23),function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),i=[e[a],e[t]];e[t]=i[0],e[a]=i[1]}return e}),v=function(e){function t(){var e,a;Object(r.a)(this,t);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(a=Object(o.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(c)))).state={gifs:m,score:0,highScore:0,message:"Click each gif once to win!",clicked:[]},a.handleShuffle=function(){var e=k(m);a.setState({friends:e})},a.resetGame=function(e){console.log("clear high score. new game."),a.setState({score:0,highScore:0,message:"Click each gif once to win!",clicked:[]}),a.handleShuffle()},a.newGame=function(e){console.log("new game."),a.setState({score:0,message:"Game Over! You already turned that head!",clicked:[]}),a.handleShuffle()},a.handleClick=function(e){0===a.state.clicked.length&&a.newGame(),-1===a.state.clicked.indexOf(e)?(a.handleIncrement(),a.setState({clicked:a.state.clicked.concat(e)})):a.newGame()},a.handleIncrement=function(){var e=a.state.score+1;a.setState({score:e,message:"You guessed correctly!"}),e>=a.state.highScore?a.setState({highScore:e}):12===e&&a.setState({correctIncorrect:"You got them all! Good Game!"}),a.handleShuffle()},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(h,{score:this.state.score,highScore:this.state.highScore,message:this.state.message,newGame:this.resetGame}),c.a.createElement(u,null,this.state.gifs.map(function(t){return c.a.createElement(d,{key:t.id,handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleShuffle:e.handleShuffle,id:t.id,gif:t.gif})})))}}]),t}(i.Component);l.a.render(c.a.createElement(v,null),document.getElementById("root"))}],[[10,2,1]]]);
//# sourceMappingURL=main.73e1cf5e.chunk.js.map