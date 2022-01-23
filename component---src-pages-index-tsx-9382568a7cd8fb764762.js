"use strict";(self.webpackChunkmastermind=self.webpackChunkmastermind||[]).push([[691],{811:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(7),a=r(785),l=function(e){switch(e){case 0:default:return"";case 1:return"bg-yellow-400";case 2:return"bg-green-600"}},c=function(e){return Math.floor(Math.random()*e)};function u(e){var t=e.activePiece,r=e.activeRow,c=e.checkSolution,u=e.currentRow,o=e.previousHints,i=e.previousRows,s=e.row,m=e.setCurrentRow,f=[],d=[],p=r===s;return i.current[s]&&(f=i.current[s]),o.current[s]&&(d=o.current[s]),n.createElement("div",{className:"flex flex-col gap-4"},p&&n.createElement(n.Fragment,null,n.createElement("h1",null,"Attempt ",r+1),n.createElement("button",{type:"button",className:"game-mode w-48 mx-auto",onClick:c,disabled:""===u[0]||""===u[1]||""===u[2]||""===u[3]},"Check")),0!==d.length&&n.createElement("div",{className:"flex justify-center items-center w-full mx-auto"},n.createElement("p",null,"Hints")," ",d.map((function(e,t){return n.createElement("span",{className:"w-1 h-1 p-1 mx-1 border-2 border-black rounded-full dark:border-white "+l(e),key:"hint-"+s+"-"+t})}))),n.createElement("div",{className:"flex justify-center items-center w-full my-2 "+(p?"border-solid border-black rounded-lg border-2 dark:border-white":"")+" "+(0!==f.length?"p-2 my-0":"p-8 my-2")},0!==f.length?n.createElement(n.Fragment,null,f.map((function(e,t){return n.createElement("div",{className:"game-piece "+e,key:"game-piece-"+e+"-"+s+"-"+t})}))):n.createElement(n.Fragment,null,[0,1,2,3].map((function(e,r){return n.createElement(n.Fragment,{key:"button-"+r},n.createElement("button",{type:"button","aria-label":"peg "+(p?u[e]:""),className:"game-piece "+(p?u[e]:""),disabled:!p||t===u[e],onClick:function(){return function(e){var r=(0,a.Z)(u);r[e]=t,m(r)}(e)}}))})))))}function o(e){var t=e.setDifficulty,r=e.solution,a=n.useCallback((function(){return t("")}),[t]);return n.createElement(n.Fragment,null,n.createElement("div",{className:"flex justify-center items-center"},r.current.map((function(e,t){return n.createElement("div",{className:"game-piece "+String(e),key:"solution-"+String(e)+"-"+String(t)})}))),n.createElement("button",{type:"button",className:"game-mode mx-auto w-48",onClick:a},"Play again?"))}function i(e){var t=e.pieces,r=e.setDifficulty,l=e.solution,c=n.useState(""),i=c[0],s=c[1],m=n.useState(0),f=m[0],d=m[1],p=n.useState(["","","",""]),g=p[0],E=p[1],b=n.useState(!1),y=b[0],v=b[1],k=n.useRef([0,0,0,0]),h=n.useRef([]),w=n.useRef([]),N=n.useCallback((function(){for(var e=(0,a.Z)(g),t=(0,a.Z)(l.current),r=0;r<4;r++)e[r]===t[r]&&(k.current[r]=2,delete e[r],delete t[r]);for(var n in e.forEach((function(r,n){t.forEach((function(r,a){e[n]===t[a]&&(k.current[n]=1,delete e[n],delete t[a])}))})),k.current.sort((function(e,t){return t-e})),v(!0),k.current)if(k.current[n]<2){v(!1);break}h.current.push(k.current),w.current.push(g),k.current=[0,0,0,0],E(["","","",""]),d(f+1)}),[f,g,l]);return n.createElement(n.Fragment,null,n.createElement("div",{className:"flex justify-center items-center"},t.current.map((function(e){return n.createElement("button",{type:"button",className:"game-piece "+String(e)+" "+(e===i?"border-green-600 rounded-xl border-4":""),"aria-label":e,key:e,onClick:function(){return s(e)}})}))),y?n.createElement(n.Fragment,null,n.createElement("p",null,"You won! The solution was:"),n.createElement(o,{setDifficulty:r,solution:l})):n.createElement(n.Fragment,null,10!==f?n.createElement("div",{className:"grid grid-cols-1 justify-items-center lg:grid-cols-3"},[0,1,2,3,4,5,6,7,8,9].map((function(e,t){return n.createElement(n.Fragment,{key:"row-"+t},n.createElement(u,{activePiece:i,activeRow:f,checkSolution:N,currentRow:g,previousHints:h,previousRows:w,row:e,setCurrentRow:E}))}))):n.createElement(n.Fragment,null,n.createElement("p",null,"You lost! The solution was:"),n.createElement(o,{setDifficulty:r,solution:l}))))}var s=r(717);function m(){var e=n.useState(""),t=e[0],r=e[1],a=n.useRef([]),l=n.useRef([]),u=n.useCallback((function(){a.current=["grape","mango","strawberry","pineapple"];for(var e=[],t=0;t<4;t++)e.push(a.current[c(4)]);l.current=e,r("easy")}),[]),o=n.useCallback((function(){a.current=["grape","mango","strawberry","pineapple","lion"];for(var e=[],t=0;t<4;t++)e.push(a.current[c(5)]);l.current=e,r("hard")}),[]);return n.createElement(n.Fragment,null,n.createElement(s.Z,{title:"Home"}),n.createElement("main",{className:"grid grid-cols-1"},t?n.createElement(i,{pieces:a,setDifficulty:r,solution:l}):n.createElement(n.Fragment,null,n.createElement("p",{className:"text-xl text-center"},"Choose a difficulty level..."),n.createElement("div",{className:"grid grid-cols-2"},n.createElement("button",{type:"button",className:"game-mode",onClick:u},"Easy"),n.createElement("button",{type:"button",className:"game-mode",onClick:o},"Hard")))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-9382568a7cd8fb764762.js.map