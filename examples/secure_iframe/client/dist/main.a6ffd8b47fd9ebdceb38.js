!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(2);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t};function i(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{u(r.next(t))}catch(t){o(t)}}function s(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,s)}u((r=r.apply(t,e||[])).next())})}function o(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=r[2&o[0]?"return":o[0]?"throw":"next"])&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[0,i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}var a,s={lead:"leads",person:"people",company:"companies",opportunity:"opportunities",task:"tasks",project:"projects"};!function(t){t.ActivityLog="ActivityLog",t.ListView="ListView",t.Related="Related"}(a||(a={}));var u=function(){function t(){var t=this;this.resolve=function(e){t._resolve(e)},this.reject=function(e){t._reject(e)},this._promise=new Promise(function(e,n){t._resolve=e,t._reject=n})}return Object.defineProperty(t.prototype,"promise",{get:function(){return this._promise},enumerable:!0,configurable:!0}),t}();function c(t,e){void 0===e&&(e=""),e||(e=window.location.href),t=t.replace(/[[]]/g,"\\$&");var n=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);return n&&n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):""}function p(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];console.log.apply(console,t)}function d(t,e){t[e]||(t[e]=[])}function f(t,e){void 0===e&&(e=1e3),setTimeout(function(){t()},e)}var l=function(){function t(t,e,n,r){var i=this._getEntityDataDefinition(e,n);i.type={enumerable:!1,writable:!1,value:t},i._onSave={enumerable:!1,value:r},Object.defineProperties(this,i)}return t.prototype.save=function(){return i(this,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:return this._onSave?[4,this._onSave(this)]:[3,2];case 1:return[2,t.sent()];case 2:return[2,null]}})})},t.prototype.toJSON=function(){return JSON.stringify(this.toObject())},t.prototype.toObject=function(){var t=this,e={};return Object.keys(this).forEach(function(n){e[n]=t[n]}),e},t.prototype._getEntityDataDefinition=function(t,e){var n={};return Object.keys(t).forEach(function(r){-1===e.indexOf(r)?n[r]={get:function(){return t[r]},set:function(){p("property "+r+" is read only")},enumerable:!0}:n[r]={value:t[r],writable:!0,enumerable:!0}}),n},t}(),h=function(){function t(t,e,n){if(void 0===n&&(n=window),this.parentOrigin=t,this.instanceId=e,this._win=n,this.deferredQueues={},this.events={},!this.parentOrigin||!this.instanceId)throw new TypeError("parentOrigin or instanceId is empty");this._listenMessage()}return t.init=function(){var e=c("origin"),n=c("instanceId");if(!("undefined"==typeof window?(p("PWSDK can only run in browser environment"),0):(window.top===window&&p("PWSDK should be inside an iframe, otherwise it might not work as expected."),1)))throw new Error("Environment checking does not pass.");return new t(e,n)},Object.defineProperty(t,"version",{get:function(){return"0.3.0"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"win",{get:function(){return this._win},enumerable:!0,configurable:!0}),t.prototype.getContext=function(){return i(this,void 0,void 0,function(){var t,e=this;return o(this,function(n){switch(n.label){case 0:return[4,this._createDeferredMethod("getContext",function(){e._postMessage("getContext")})];case 1:return t=n.sent(),[2,this._createContextModel(t)]}})})},t.prototype.saveContext=function(t){return i(this,void 0,void 0,function(){var e,n=this;return o(this,function(r){switch(r.label){case 0:return[4,this._createDeferredMethod("saveContext",function(){n._postMessage("saveContext",{data:{entityType:t.type,entityData:t.toObject()}})})];case 1:return e=r.sent(),[2,this._createContextModel(e)]}})})},t.prototype.setAppUI=function(t){this._postMessage("setUI",{data:t})},t.prototype.showModal=function(t){void 0===t&&(t={}),this._postMessage("showModal",{params:t})},t.prototype.closeModal=function(){this._postMessage("closeModal")},t.prototype.publishMessage=function(t,e,n){void 0===n&&(n={}),this._postMessage("publishMessage",{target:e,data:{type:t,msg:n}})},t.prototype.logActivity=function(t,e,n,r){return void 0===r&&(r=0),i(this,void 0,void 0,function(){var i,s;return o(this,function(o){switch(o.label){case 0:return[4,this._getCachedContext()];case 1:return i=o.sent(),s=function(t,e){var n=e.activityType,r=e.details,i=e.activityDate,o={parent:{type:t.type,id:t.id},type:{category:"user",id:n},details:r};return i&&(o.activity_date=i),{url:"/v1/activities",method:"POST",data:o,target:{name:a.ActivityLog}}}(i,{activityType:t,details:e,activityDate:n}),[2,this._action(s,r)]}})})},t.prototype.createEntity=function(t,e,n){return void 0===n&&(n=0),i(this,void 0,void 0,function(){var r,i,u,c,p,d,l,h=this;return o(this,function(o){switch(o.label){case 0:return[4,this._getCachedContext()];case 1:return r=o.sent(),i=function(t,e){var n=e.entityType,r=e.data;return{url:"/v1/"+s[n],method:"POST",data:r,target:n===t.type?{name:a.ListView,data:{entityType:n,entityData:r}}:null}}(r,{entityType:t,data:e}),u=i.url,c=i.method,p=i.data,d=i.target,[4,this.api(u,{method:c,body:JSON.stringify(p)})];case 2:return l=o.sent(),d&&d.data&&(d.data.entityData=l,f(function(){h.refreshUI(d)},n)),[2,l]}})})},t.prototype.relateEntity=function(t,e,n,r){return void 0===r&&(r=0),i(this,void 0,void 0,function(){var i,u;return o(this,function(o){switch(o.label){case 0:return[4,this._getCachedContext()];case 1:return i=o.sent(),u=function(t,e){var n=e.entityType,r=e.entityId,i=e.data;return{url:"/v1/"+s[n]+"/"+r+"/related",method:"POST",data:{resource:i},target:n===t.type&&r===t.id?{name:a.Related,data:i}:null}}(i,{entityType:t,entityId:parseInt(e,10),data:n}),[2,this._action(u,r)]}})})},t.prototype.refreshUI=function(t){this._postMessage("refreshUI",{target:t})},t.prototype.on=function(t,e){d(this.events,t),this.events[t].push(e)},t.prototype.trigger=function(t,e){var n=this;this.events[t]&&this.events[t].forEach(function(t){t.call(n,e)})},t.prototype.api=function(e,n){var r=this;if(!e)return Promise.reject({id:"sdk-api",version:t.version,detail:"url cannot be empty"});if(n&&n.body)try{JSON.parse(n.body)}catch(e){return Promise.reject({id:"sdk-api",version:t.version,detail:"body must be a valid JSON string"})}return this._createDeferredMethod("api",function(){r._postMessage("api",{url:e,options:n})})},t.prototype._getCachedContext=function(){return i(this,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:return this._context?[2,this._context]:[4,this.getContext()];case 1:return[2,t.sent().context]}})})},t.prototype._postMessage=function(t,e){void 0===e&&(e={}),this.win.top.postMessage(r({},e,{instanceId:this.instanceId,version:"0.3.0",type:t}),this.parentOrigin)},t.prototype._listenMessage=function(){var t=this;this.win.addEventListener("message",function(e){t._isOriginValid(e)&&(t._resolveDeferred(e.data.type,e.data),e.data.type&&t.trigger(e.data.type,e.data.msg))},!1)},t.prototype._isOriginValid=function(t){return t.origin===this.parentOrigin},t.prototype._enqueueDeferred=function(t,e){d(this.deferredQueues,t),this.deferredQueues[t].push(e)},t.prototype._resolveDeferred=function(t,e){if(this.deferredQueues[t]){var n=this.deferredQueues[t].shift();if(n){if(e.error)return n.reject(e.error);n.resolve(e.data)}}},t.prototype._createContextModel=function(t){var e=t.entityType,n=t.entityData,r=t.editableFields,i=new l(e,n,r,this.saveContext.bind(this));return this._context=i,{type:e,context:i}},t.prototype._action=function(t,e){var n=t.url,r=t.method,a=t.data,s=t.target;return i(this,void 0,void 0,function(){var t,i=this;return o(this,function(o){switch(o.label){case 0:return[4,this.api(n,{method:r,body:JSON.stringify(a)})];case 1:return t=o.sent(),s&&f(function(){i.refreshUI(s)},e),[2,t]}})})},t.prototype._createDeferredMethod=function(t,e){var n=new u;return this._enqueueDeferred(t,n),e(),n.promise},t}();let y=(g=function*(){const{context:t}=yield b.getContext();document.getElementById("contextData").innerHTML=t.toJSON()},v=function(){var t=g.apply(this,arguments);return new Promise(function(e,n){return function r(i,o){try{var a=t[i](o),s=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});e(s)}("next")})},function(){return v.apply(this,arguments)});var v,g;const b=h.init();document.getElementById("btnGetContext").addEventListener("click",y),document.getElementById("btnClearContext").addEventListener("click",function(){document.getElementById("contextData").innerHTML=""})},,function(t,e,n){}]);