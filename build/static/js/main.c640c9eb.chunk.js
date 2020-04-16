(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(34)},25:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(17),s=a.n(r),c=a(1),l=a(2),i=a(4),u=a(3),h=a(5),k=(a(25),a(14)),b="https://reactnd-books-api.udacity.com",d=localStorage.token;d||(d=localStorage.token=Math.random().toString(36).substr(-8));var m={Accept:"application/json",Authorization:d},f=function(e,t){return fetch("".concat(b,"/books/").concat(e.id),{method:"PUT",headers:Object(k.a)({},m,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},p=function(e){return fetch("".concat(b,"/search"),{method:"POST",headers:Object(k.a)({},m,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={value:a.props.shelf},a.handleChange=function(e){var t=e.target.value;a.setState({value:t}),a.props.sortBooks(a.props.book,t)},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"book-shelf-changer"},n.a.createElement("select",{defaultValue:"",onChange:this.handleChange},n.a.createElement("option",{value:"",disabled:!0},"Move..."),n.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),n.a.createElement("option",{value:"wantToRead"},"Want to Read"),n.a.createElement("option",{value:"read"},"Read"),n.a.createElement("option",{value:"none"},"None")))}}]),t}(o.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.book,a=e.sortBooks,o=e.shelf;return n.a.createElement("li",null,n.a.createElement("div",{className:"book"},n.a.createElement("div",{className:"book-top"},n.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(t.imageLinks&&t.imageLinks.thumbnail,")")}}),n.a.createElement(v,{sortBooks:a,book:t,shelf:o})),n.a.createElement("div",{className:"book-title"},t.title),n.a.createElement("div",{className:"book-authors"},t.authors?t.authors.join(", "):"Unknown")))}}]),t}(o.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.books,a=e.sortBooks,o=e.bookshelfName;return n.a.createElement("div",{className:"bookshelf"},n.a.createElement("h2",{className:"bookshelf-title"},o),n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},t.length>0&&void 0!==t?t.map(function(e){return n.a.createElement(E,{key:e.id,book:e,shelf:e.shelf?e.shelf:"none",sortBooks:a})}):n.a.createElement("div",null))))}}]),t}(o.Component),j=a(8),O=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"list-books"},n.a.createElement("div",{className:"list-books-title"},n.a.createElement("h1",null,"MyReads")),n.a.createElement("div",null,n.a.createElement("div",{className:"list-books-content"},n.a.createElement("div",null,n.a.createElement(y,{bookshelfName:"Currently Reading",books:this.props.currentlyReading,sortBooks:this.props.sortBooks,shelf:"currentlyReading"}),n.a.createElement(y,{bookshelfName:"Want to Read",books:this.props.wantToRead,sortBooks:this.props.sortBooks,shelf:"wantToRead"}),n.a.createElement(y,{bookshelfName:"Have Read",books:this.props.read,sortBooks:this.props.sortBooks,shelf:"haveRead"})),n.a.createElement(j.b,{to:"/search",className:"open-search"},n.a.createElement("button",null,"Add a Book"))))))}}]),t}(o.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.searchBooks,a=e.sortBooks;return n.a.createElement("div",{className:"search-books-results"},n.a.createElement("ol",{className:"books-grid"},t.length>0&&void 0!==t?t.map(function(e){return n.a.createElement(E,{key:e.id,book:e,shelf:e.shelf?e.shelf:"none",sortBooks:a})}):n.a.createElement("div",null)))}}]),t}(o.Component),B=function(e){function t(){var e,a;Object(c.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={query:""},a.handleChange=function(e){var t=e.target.value;t.length>0?a.setState({query:t},function(){a.props.searchNewBooks(t)}):a.setState({query:""},function(){a.props.searchNewBooks(a.state.query)})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.query,t=this.props,a=t.searchBooks,o=t.sortBooks,r=t.books,s=t.resetSearch;return console.log(a),n.a.createElement("div",{className:"search-books"},n.a.createElement("div",{className:"search-books-bar"},n.a.createElement(j.b,{to:"/"},n.a.createElement("button",{className:"close-search",onClick:s},"Close")),n.a.createElement("div",{className:"search-books-input-wrapper"},n.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:e,onChange:this.handleChange}))),n.a.createElement(g,{searchBooks:a,sortBooks:o,books:r}))}}]),t}(o.Component),N=a(11),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={books:[],searchBooks:[],isLoaded:!1},a.searchNewBooks=function(e){e.length>0?p(e).then(function(e){a.setState({searchBooks:e})}):a.setState({searchBooks:{}})},a.sortBooks=function(e,t){f(e,t),"none"===t?a.setState(function(t){return{books:t.books.filter(function(t){return t.id!==e.id})}}):(e.shelf=t,a.setState(function(t){return{books:t.books.filter(function(t){return t.id!==e.id}).concat(e)}}))},a.resetSearch=function(){a.setState({searchBooks:[]})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(b,"/books"),{headers:m}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){e.setState(function(){return{books:t,isLoaded:!0}})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.books,o=t.searchBooks,r=a.filter(function(e){return"currentlyReading"===e.shelf}),s=a.filter(function(e){return"wantToRead"===e.shelf}),c=a.filter(function(e){return"read"===e.shelf});return n.a.createElement("div",{className:"app"},n.a.createElement(N.a,{exact:!0,path:"/",render:function(){return n.a.createElement(O,{currentlyReading:r,wantToRead:s,read:c,sortBooks:e.sortBooks})}}),n.a.createElement(N.a,{path:"/search",render:function(){return n.a.createElement(B,{books:a,searchNewBooks:e.searchNewBooks,sortBooks:e.sortBooks,resetSearch:e.resetSearch,searchBooks:o})}}))}}]),t}(n.a.Component);a(32);s.a.render(n.a.createElement(j.a,null,n.a.createElement(w,null)),document.getElementById("root"))}},[[20,2,1]]]);
//# sourceMappingURL=main.c640c9eb.chunk.js.map