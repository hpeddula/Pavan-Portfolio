(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{33:function(e,a,t){e.exports=t.p+"static/media/MazeGen.7e618b1c.png"},38:function(e,a,t){e.exports=t.p+"static/media/DarkValley-1.7427ec0c.png"},39:function(e,a,t){e.exports=t.p+"static/media/Gothicvania-1.4d800a47.jpg"},40:function(e,a,t){e.exports=t.p+"static/media/BladesOfTime-1.3cb046db.png"},41:function(e,a,t){e.exports=t.p+"static/media/ProjectGaia-1.812d091a.png"},42:function(e,a,t){e.exports=t.p+"static/media/pubg.6b9d513b.jpeg"},63:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return v});var n=t(27),l=t(28),r=t(31),c=t(29),i=t(32),m=t(35),o=t(1),s=t.n(o),d=(t(63),t(43),t(36)),g=t(37),v=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(r.a)(this,Object(c.a)(a).call(this,e))).navigateToGame=t.navigateToGame.bind(Object(m.a)(Object(m.a)(t))),t.scrollIntoViewGames=t.scrollIntoViewGames.bind(Object(m.a)(Object(m.a)(t))),t.scrollIntoViewOther=t.scrollIntoViewOther.bind(Object(m.a)(Object(m.a)(t))),t}return Object(i.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){document.title="Pavan Portfolio"}},{key:"navigateToGame",value:function(e){this.props.history;switch(e){case"game1":window.location.replace("/the-dark-valley");break;case"game2":window.location.replace("/gothicvania");break;case"game3":window.location.replace("/blades-of-time");break;case"game4":window.location.replace("/gaia");break;case"other1":window.location.replace("/maze-generation");break;case"other2":window.location.replace("/rope-physics")}}},{key:"scrollIntoViewOther",value:function(){document.getElementsByClassName("other")[0].scrollIntoView({behavior:"smooth",block:"end"})}},{key:"scrollIntoViewGames",value:function(){document.getElementsByClassName("box")[0].scrollIntoView({behavior:"smooth",block:"end"})}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"heading-nav"},s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},s.a.createElement("a",{className:"navbar-brand",href:"/"},"Pavan PortFolio"),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},s.a.createElement("div",{className:"navbar-nav"},s.a.createElement("a",{className:"nav-item nav-link",href:"/the-dark-valley"},"The Dark Valley"),s.a.createElement("a",{className:"nav-item nav-link",href:"/gothicvania"},"Gothicvania"),s.a.createElement("a",{className:"nav-item nav-link",href:"/blades-of-time"},"Blades Of Time"),s.a.createElement("a",{className:"nav-item nav-link",href:"/gaia"},"Gaia"),s.a.createElement("a",{className:"nav-item nav-link",href:"/maze-generation"},"Maze Generation"),s.a.createElement("a",{className:"nav-item nav-link",href:"/other2"},"Other2"))))),s.a.createElement("div",{className:"text-center",ref:function(a){return e.parentNode=a}},s.a.createElement("h1",{className:"name"},"Pavan Tummala"),s.a.createElement(d.a,{icon:g.b,color:"white",size:"2x",className:"gamePad",onClick:this.scrollIntoViewGames}),s.a.createElement(d.a,{icon:g.e,color:"white",size:"2x",className:"gamePad",onClick:this.scrollIntoViewOther}),s.a.createElement("p",null,s.a.createElement("code",null,"Game Programming Portfolio"))),s.a.createElement("div",{className:"video-container"},s.a.createElement("div",{className:"video"},s.a.createElement("iframe",{width:"560",height:"349",title:"Introductory Video",src:"https://www.youtube.com/embed/erbQxha3SB8?rel=0&modestbranding=1"}))),s.a.createElement("div",{className:"games-title"},s.a.createElement(d.a,{icon:g.b,color:"white",size:"2x",className:"games-title-gamepad"})," ",s.a.createElement("h2",null,"Games")),s.a.createElement("div",{className:"game-wrapper"},s.a.createElement("div",{className:"box"},s.a.createElement("a",{href:"/the-dark-valley"},s.a.createElement("img",{className:"game-image",alt:"Game1",src:t(38)}),s.a.createElement("div",{className:"game-description"},s.a.createElement("h3",null,"The Dark Valley"),s.a.createElement("br",null),s.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.navigateToGame("game1")}},"View Project")))),s.a.createElement("div",{className:"box"},s.a.createElement("a",{href:"/gothicvania"},s.a.createElement("img",{className:"game-image",alt:"Game2",src:t(39)}),s.a.createElement("div",{className:"game-description"},s.a.createElement("h3",null,"Gothicvania"),s.a.createElement("br",null),s.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.navigateToGame("game2")}},"View Project"))))),s.a.createElement("div",{className:"game-wrapper"},s.a.createElement("div",{className:"box"},s.a.createElement("a",{href:"/blades-of-time"},s.a.createElement("img",{className:"game-image",alt:"Game3",src:t(40)}),s.a.createElement("div",{className:"game-description"},s.a.createElement("h3",null,"Blades Of Time"),s.a.createElement("br",null),s.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.navigateToGame("game3")}},"View Project")))),s.a.createElement("div",{className:"box"},s.a.createElement("a",{href:"/gaia"},s.a.createElement("img",{className:"game-image",alt:"Game4",src:t(41)}),s.a.createElement("div",{className:"game-description"},s.a.createElement("h3",null,"Gaia"),s.a.createElement("br",null),s.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.navigateToGame("game4")}},"View Project"))))),s.a.createElement("div",{className:"games-title"},s.a.createElement(d.a,{icon:g.e,color:"white",size:"2x",className:"games-title-wrench"})," ",s.a.createElement("h2",null,"Others")),s.a.createElement("div",{className:"game-wrapper"},s.a.createElement("a",{href:"/maze-generation"},s.a.createElement("div",{className:"other"},s.a.createElement("img",{className:"game-image",alt:"other1",src:t(33)}),s.a.createElement("div",{className:"game-description"},s.a.createElement("h2",null,"Maze Generation"),s.a.createElement("br",null),s.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.navigateToGame("other1")}},"View Project")))),s.a.createElement("a",{href:"/rope-physics"},s.a.createElement("div",{className:"other"},s.a.createElement("img",{className:"game-image",alt:"other2",src:t(42)}),s.a.createElement("div",{className:"game-description"},s.a.createElement("h2",null,"Rope Physics"),s.a.createElement("br",null),s.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.navigateToGame("other2")}},"View Project"))))))}}]),a}(o.Component)}}]);
//# sourceMappingURL=5.aeafd19e.chunk.js.map