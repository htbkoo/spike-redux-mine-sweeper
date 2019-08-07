(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{67:function(e,n,a){e.exports=a(86)},84:function(e,n,a){},85:function(e,n,a){},86:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(8),i=a.n(o),c=a(30),l=a(14),u=a(44),d=a(31),m=a(36),f=a(37),g=a(24),s=a.n(g),h=function(){function e(n){var a=n.random;Object(m.a)(this,e),this.random=void 0,this.random=a}return Object(f.a)(e,[{key:"generate",value:function(n){var a=this,t=n.start,r=n.end,o=n.length,i=n.skip,c=void 0===i?[]:i,l=s.a.range(t,r).filter(function(n){return e.shouldKeepCandidate({candidate:n,skip:c})});return e.validateCandidates({candidates:l,length:o}),s.a.range(0,o).map(function(){return a.getNextRandomNumberFrom(l)})}},{key:"getNextRandomNumberFrom",value:function(e){return e.splice(this.getRandomInt(0,e.length),1)[0]}},{key:"getRandomInt",value:function(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(this.random()*(n-e))+e}}],[{key:"validateCandidates",value:function(e){var n=e.candidates,a=e.length,t=n.length;if(a>t)throw new Error("Invalid length, expected at most <".concat(t,"> but got <").concat(a,">"))}},{key:"shouldKeepCandidate",value:function(e){var n=e.candidate;return-1===e.skip.indexOf(n)}}]),e}();h.DEFAULT=new h({random:Math.random});var b=Object.freeze({MINE:{isMine:!0},EMPTY:{isMine:!1}}),p=Object.freeze(v({w:8,h:8,numBomb:6}));function v(e){var n=e.w,a=e.h,t=e.numBomb;return{cells:s.a.range(0,a).map(function(){return s.a.range(0,n).map(function(){return b.EMPTY})}),meta:{numBomb:t}}}function E(e){var n=e.w,a=e.h,t=e.bombsIndices,r=void 0===t?[]:t;return{cells:s.a.range(0,a).map(function(e){return s.a.range(0,n).map(function(a){return function(e,a){var t=e*n+a;return-1!==r.indexOf(t)}(e,a)?b.MINE:b.EMPTY})}),meta:{numBomb:r.length}}}var w=function(){function e(n){var a=n.sequenceGenerator;Object(m.a)(this,e),this.sequenceGenerator=void 0,this.sequenceGenerator=a}return Object(f.a)(e,[{key:"createBoard",value:function(e){var n=e.w,a=e.h,t=e.numBomb;return E({w:n,h:a,bombsIndices:this.sequenceGenerator.generate({start:0,end:a*n,length:t})})}}]),e}();w.DEFAULT=new w({sequenceGenerator:h.DEFAULT});var y=Object(d.createStandardAction)("UPDATE_CONFIG").map(function(e){return{payload:{field:e.field,newValue:e.newValue}}}),O=Object(d.createStandardAction)("CREATE_EMPTY_BOARD").map(function(e){return{payload:{config:e.config}}}),j=Object(d.createStandardAction)("START_GAME").map(function(e){var n=e.config,a=e.boardFactory;return{payload:{board:(void 0===a?w.DEFAULT:a).createBoard(n),config:n}}}),k={config:{h:8,w:8,numBomb:6},board:p,meta:{isDialogOpen:!0}},B=Object(d.createReducer)(k).handleAction(y,function(e,n){var a=n.payload;return Object(u.a)(e,function(e){e.config[a.field]=a.newValue})}).handleAction(O,function(e,n){var a=n.payload;return Object(u.a)(e,function(e){e.board=E({h:a.config.h,w:a.config.w})})}).handleAction(j,function(e,n){var a=n.payload.config;return Object(u.a)(e,function(e){e.meta.isDialogOpen=!1,e.board=v(a)})}),A=Object(l.combineReducers)({game:B}),x=a(59),C=a(131),M=a(4),T=a(122),I=a(128),N=Object(M.a)(function(e){var n=e.palette,a=e.spacing;return Object(C.a)({root:{display:"flex",flexDirection:"column",padding:a(),backgroundColor:n.background.default,color:n.primary.main},gameBoardContainer:{display:"flex",justifyContent:"center",height:"100%",marginTop:a(16)},gameBoardCell:{width:"64px",height:"64px",margin:a(.5)}})})(function(e){var n=e.gameState,a=e.classes,t=n.board.cells.map(function(e,n){return r.a.createElement("tr",{key:"board-row-".concat(n)},e.map(function(e,n){return r.a.createElement("td",{key:"board-column-".concat(n)},r.a.createElement("div",null,r.a.createElement(I.a,{variant:"contained",className:a.gameBoardCell})))}))});return r.a.createElement("div",{className:a.gameBoardContainer},r.a.createElement(T.a,null,r.a.createElement("table",null,r.a.createElement("tbody",null,t))))});var S=function(e){return e.gameState,r.a.createElement("div",null,"")},D=a(130),F=a(123),G=a(124),R=a(125),P=a(126),q=a(127);var U=function(e){var n=e.config,a=e.field,t=e.id,o=e.label,i=e.range,c=i.min,l=i.max,u=e.dispatch;return r.a.createElement(q.a,{autoFocus:!0,id:t,label:o,fullWidth:!0,value:n[a],margin:"normal",variant:"outlined",type:"number",InputProps:{inputProps:{min:c,max:l}},onChange:function(e){var n=parseInt(e.target.value);if(Number.isInteger(n))return u(y({field:a,newValue:n}))}})},L={min:6,max:25};var V=function(e){var n=e.gameState,a=n.config,t=n.meta.isDialogOpen,o=Object(c.b)(),i=.3;return r.a.createElement("div",null,t?r.a.createElement(D.a,{open:t,"aria-labelledby":"game-config-dialog"},r.a.createElement(F.a,{id:"game-config-dialog"},"Game Configuration"),r.a.createElement(G.a,null,r.a.createElement(R.a,null,"Feel free to customize your game! :)"),r.a.createElement(U,{id:"width",label:"Width",config:a,field:"w",range:L,dispatch:o}),r.a.createElement(U,{id:"height",label:"height",config:a,field:"h",range:L,dispatch:o}),r.a.createElement(U,{id:"numBombs",label:"Number of Bombs",config:a,field:"numBomb",range:{min:1,max:Math.round(a.h*a.w*i)},dispatch:o})),r.a.createElement(P.a,null,r.a.createElement(I.a,{onClick:function(){return o(j({config:a}))},color:"primary"},"Start Game"))):"")},W=(a(84),function(){var e=Object(c.c)(function(e){return e.game});return r.a.createElement("div",{className:"App"},r.a.createElement(V,{gameState:e}),r.a.createElement(N,{gameState:e}),r.a.createElement(S,{gameState:e}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(85);var Y=Object(x.a)({reducer:A});i.a.render(r.a.createElement(c.a,{store:Y},r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[67,1,2]]]);
//# sourceMappingURL=main.dedee412.chunk.js.map