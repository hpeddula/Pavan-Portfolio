(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{69:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(2),c=n.n(a),i=n(3),u=n.n(i),s=n(8),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},h=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),c=0;c<o;c++)a[c]=arguments[c];return n=r=p(this,e.call.apply(e,[this].concat(a))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!f(e)){e.preventDefault();var t=r.context.router.history,n=r.props,o=n.replace,a=n.to;o?t.replace(a):t.push(a)}},p(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);u()(this.context.router,"You should not use <Link> outside a <Router>"),u()(void 0!==t,'You must specify the "to" property');var a=this.context.router.history,c="string"===typeof t?Object(s.b)(t,null,null,a.location):t,i=a.createHref(c);return o.a.createElement("a",l({},r,{onClick:this.handleClick,href:i,ref:n}))},t}(o.a.Component);h.propTypes={onClick:c.a.func,target:c.a.string,replace:c.a.bool,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired,innerRef:c.a.oneOfType([c.a.string,c.a.func])},h.defaultProps={replace:!1},h.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired,createHref:c.a.func.isRequired}).isRequired}).isRequired},t.a=h},70:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var r=n(27),o=n(28),a=n(31),c=n(29),i=n(32),u=n(1),s=n.n(u),l=n(69),p=(n(70),n(37)),f=n(36),h=function(e){function t(){return Object(r.a)(this,t),Object(a.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"not-found-box"},s.a.createElement("h2",null,"Oops! Wrong Page")),s.a.createElement("div",{className:"not-found-button"},s.a.createElement(l.a,{to:"/"},s.a.createElement(f.a,{icon:p.c,size:"2x"})," Back To Home"))))}}]),t}(u.Component)}}]);
//# sourceMappingURL=12.514cc5b7.chunk.js.map