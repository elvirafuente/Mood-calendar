(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(45)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(17),s=a.n(l),r=(a(32),a(33),a(24)),o=a(10),m=a(18),i=a(19),d=a(20),u=a(25),p=a(21),h=a(7),f=a(26);a(34),a(35);var v=function(){return c.a.createElement("header",{className:"page__header"},c.a.createElement("h1",{className:"header__title"},"Mood Calendar"))},E=(a(36),a(37),a(5));var b=function(e){var t=e.methodGetInput,a=e.state,l=e.methodSaveObject,s=e.methodCancel;return c.a.createElement(n.Fragment,null,c.a.createElement("form",{className:"main__form"},c.a.createElement("h2",{className:"main__title"},"Edit mood ^___^"),c.a.createElement("fieldset",{className:"form__fieldset"},c.a.createElement("label",{htmlFor:"date",className:"fieldset__title"},"Choose a date"),c.a.createElement("input",{className:"form__input--date",type:"date",id:"date",name:"date",required:!0,onChange:t,value:a.inputData.date})),c.a.createElement("fieldset",{className:"fieldset__check"},c.a.createElement("legend",{className:"fieldset__title"},"Choose your mood"),c.a.createElement("label",{htmlFor:"happy",className:"form__input--radio"},c.a.createElement("input",{id:"happy",type:"radio",value:"happy",name:"mood",checked:a.inputData.mood.includes("happy"),onChange:t}),":) Happy"),c.a.createElement("label",{htmlFor:"sad",className:"form__input--radio"},c.a.createElement("input",{id:"sad",type:"radio",value:"sad",name:"mood",checked:a.inputData.mood.includes("sad"),onChange:t}),":( Sad")),"happy"===a.inputData.mood?c.a.createElement("fieldset",{className:"form__fieldset"},c.a.createElement("label",{htmlFor:"message",className:"fieldset__title"},"Message to remember"),c.a.createElement("input",{className:"form__input--text",type:"text",id:"message",name:"message",onChange:t,value:a.inputData.message})):"",c.a.createElement("p",{className:"form__feedback"},a.feedBack),c.a.createElement("fieldset",{className:"form__fieldset"},a.inputData.date&&a.inputData.mood&&!0!==a.alreadySaved?c.a.createElement(E.b,{to:"/",className:"form__input--button save",type:"button",id:"submit",onClick:l},"Save"):c.a.createElement("button",{className:"form__input--button save",type:"button",id:"submit",onClick:l},"Save"),c.a.createElement(E.b,{to:"/"},c.a.createElement("input",{className:"form__input--button cancel",type:"button",id:"cancel",value:"Cancel",onClick:s})))))};a(42),a(43);var _=function(e){var t=e.singleMood;return c.a.createElement("div",{className:"mood__wrapper"},c.a.createElement("div",{className:"mood ".concat(t.mood)},c.a.createElement("p",{className:"face"},"happy"===t.mood?":)":":(")),c.a.createElement("div",{className:"mood__info"},c.a.createElement("p",null,t.date),c.a.createElement("p",null,t.message)))};var y=function(e){var t=e.savedMoods;return c.a.createElement(n.Fragment,null,c.a.createElement(E.b,{to:"/edit"},c.a.createElement("button",{className:"form__input--button save"},"+ mood")),t.length?c.a.createElement("ul",{className:"mood__list"},t.map(function(e,t){return c.a.createElement("li",{key:t},c.a.createElement(_,{singleMood:e}))})):c.a.createElement("p",null,"You have not moods saved yet"))},g=a(6);var k=function(e){var t=e.methodGetInput,a=e.state,n=e.methodSaveObject,l=e.methodCancel;return c.a.createElement("main",{className:"page__main"},c.a.createElement(g.c,null,c.a.createElement(g.a,{exact:!0,path:"/",render:function(){return c.a.createElement(y,{savedMoods:a.savedDates})}}),c.a.createElement(g.a,{exact:!0,path:"/edit",render:function(){return c.a.createElement(b,{methodGetInput:t,state:a,methodSaveObject:n,methodCancel:l})}})))};a(44);var D=function(){return c.a.createElement("footer",{className:"page__footer"},"mood calendar \xb7 Elvira Fuente \xb7 2019")},N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={savedDates:JSON.parse(localStorage.getItem("savedDates"))||[],inputData:{date:"",mood:"",message:""},feedBack:"",alreadySaved:!1},a.getInput=a.getInput.bind(Object(h.a)(a)),a.saveObject=a.saveObject.bind(Object(h.a)(a)),a.cancel=a.cancel.bind(Object(h.a)(a)),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"getInput",value:function(e){var t=e.target.value,a=e.target.name;this.saveState(a,t),this.checkDate(a,t)}},{key:"checkDate",value:function(e,t){"date"===e&&(void 0!==this.compareArrayDates(t)?(this.setState({alreadySaved:!0}),this.writeFeedback("Sorry, but the date that you checked has been already saved")):this.setState({alreadySaved:!1}))}},{key:"saveState",value:function(e,t){this.setState(function(a){return{inputData:Object(m.a)({},a.inputData,Object(o.a)({},e,t))}})}},{key:"saveObject",value:function(){var e=this.state.inputData.mood,t=this.state.inputData.date;e&&t?void 0!==this.compareArrayDates(t)?this.writeFeedback("Sorry, but the date that you checked has been already saved"):(this.setState(function(e){return{savedDates:[].concat(Object(r.a)(e.savedDates),[e.inputData])}}),this.resetStateData()):this.writeFeedback("Fill out all form fields, please")}},{key:"resetStateData",value:function(){this.setState({inputData:{date:"",mood:"",message:""},alreadySaved:!1,message:""})}},{key:"writeFeedback",value:function(e){this.setState({feedBack:e})}},{key:"compareArrayDates",value:function(e){return this.state.savedDates.find(function(t){return t.date===e})}},{key:"cancel",value:function(){this.resetStateData(),this.writeFeedback("")}},{key:"componentDidUpdate",value:function(){localStorage.setItem("savedDates",JSON.stringify(this.state.savedDates))}},{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement(v,null),c.a.createElement(k,{methodGetInput:this.getInput,state:this.state,methodSaveObject:this.saveObject,methodCancel:this.cancel}),c.a.createElement(D,null))}}]),t}(n.Component);var S=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(N,null))};s.a.render(c.a.createElement(E.a,null,c.a.createElement(S,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.5fd9c532.chunk.js.map