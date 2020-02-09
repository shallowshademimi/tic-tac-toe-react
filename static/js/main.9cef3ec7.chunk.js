(this.webpackJsonpreact_project=this.webpackJsonpreact_project||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),c=a.n(s),l=(a(13),a(1)),i=a(2),u=a(4),o=a(3),h=a(5);function d(){return r.a.createElement("header",{id:"game-title"},r.a.createElement("h1",null,"Tic Tac Toe"))}function m(e){return r.a.createElement("div",{id:"game-message"},e.msg)}var y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).getContent=function(e){return"not_started"===e?"Play!":"Restart"},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"game-interface"},r.a.createElement("button",{onClick:this.props.resetGame},this.getContent(this.props.status)))}}]),t}(r.a.Component),p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).handleClick=function(){if(!a.state.disable&&"end"!==a.props.status){var e=a.props.currentPlayer;a.setState({disable:!0,content:e}),a.props.handleSelect(a.props.coords,e)}},a.state={disable:!1,content:"?"},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){"not_started"!==e.status&&"not_started"===this.props.status&&this.setState({disable:!1,content:"?"})}},{key:"render",value:function(){return r.a.createElement("div",{className:"game-cell",onClick:this.handleClick},this.state.content)}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).resetGame=function(){a.setState(a.getInitialState())},a.handleSelect=function(e,t){var n=e[0],r=e[1],s=a.state.board,c=a.state.availableCell-1;s[n][r]=t,a.setState({status:"in_progress",board:s,availableCell:c});var l=a.hasWinner(n,r,t)?t:null;l?a.setState({status:"end",winner:l}):0===c?a.setState({status:"end",winner:null}):a.setState({currentPlayer:a.nextPlayer()})},a.nextPlayer=function(){return"X"===a.state.currentPlayer?"O":"X"},a.message=function(){return"end"===a.state.status?a.state.winner?a.state.winner+" won!":"Tie":a.state.currentPlayer+"'s turn"},a.hasWinner=function(e,t,n){var r=a.state.board,s=function(e){return e===n};return!!r[e].every(s)||(!!r.map((function(e){return e[t]})).every(s)||(!(e!==t||![0,1,2].map((function(e){return r[e][e]})).every(s))||!(e+t!==2||![0,1,2].map((function(e){return r[e][2-e]})).every(s))))},a.getInitialState=function(){return{currentPlayer:"X",status:"not_started",board:[["","",""],["","",""],["","",""]],availableCell:9,winner:null}},a.state=a.getInitialState(),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"game"},r.a.createElement(d,null),r.a.createElement("div",{className:"game-board"},r.a.createElement("div",{className:"row"},r.a.createElement(p,{currentPlayer:this.state.currentPlayer,handleSelect:this.handleSelect,status:this.state.status,coords:[0,0]}),r.a.createElement(p,{currentPlayer:this.state.currentPlayer,handleSelect:this.handleSelect,status:this.state.status,coords:[0,1]}),r.a.createElement(p,{currentPlayer:this.state.currentPlayer,handleSelect:this.handleSelect,status:this.state.status,coords:[0,2]})),r.a.createElement("div",{className:"row"},r.a.createElement(p,{currentPlayer:this.state.currentPlayer,handleSelect:this.handleSelect,status:this.state.status,coords:[1,0]}),r.a.createElement(p,{currentPlayer:this.state.currentPlayer,handleSelect:this.handleSelect,status:this.state.status,coords:[1,1]}),r.a.createElement(p,{currentPlayer:this.state.currentPlayer,handleSelect:this.handleSelect,status:this.state.status,coords:[1,2]})),r.a.createElement("div",{className:"row"},r.a.createElement(p,{currentPlayer:this.state.currentPlayer,handleSelect:this.handleSelect,status:this.state.status,coords:[2,0]}),r.a.createElement(p,{currentPlayer:this.state.currentPlayer,handleSelect:this.handleSelect,status:this.state.status,coords:[2,1]}),r.a.createElement(p,{currentPlayer:this.state.currentPlayer,handleSelect:this.handleSelect,status:this.state.status,coords:[2,2]}))),r.a.createElement(m,{msg:this.message()}),r.a.createElement(y,{resetGame:this.resetGame,status:this.state.status}))}}]),t}(r.a.Component);a(14);var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.9cef3ec7.chunk.js.map