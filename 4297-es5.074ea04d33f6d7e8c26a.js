!function(){"use strict";function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(self.webpackChunkat10dance=self.webpackChunkat10dance||[]).push([[4297],{4297:function(e,n,i){i.r(n),i.d(n,{pwa_toast:function(){return s}});var o=i(5485),s=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(0,o.r)(this,t),this.duration=2e3,this.closing=null}var n,i,s;return n=e,s=[{key:"style",get:function(){return":host{position:fixed;bottom:20px;left:0;right:0;display:-ms-flexbox;display:flex;opacity:0}:host(.in){-webkit-transition:opacity .3s;transition:opacity .3s;opacity:1}:host(.out){-webkit-transition:opacity 1s;transition:opacity 1s;opacity:0}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.toast{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;background-color:#eee;color:#000;border-radius:5px;padding:10px 15px;font-size:14px;font-weight:500;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 2px rgba(0,0,0,.2)}"}}],(i=[{key:"hostData",value:function(){var t={out:!!this.closing};return null!==this.closing&&(t.in=!this.closing),{class:t}}},{key:"componentDidLoad",value:function(){var t=this;setTimeout(function(){t.closing=!1}),setTimeout(function(){t.close()},this.duration)}},{key:"close",value:function(){var t=this;this.closing=!0,setTimeout(function(){t.el.parentNode.removeChild(t.el)},1e3)}},{key:"__stencil_render",value:function(){return(0,o.h)("div",{class:"wrapper"},(0,o.h)("div",{class:"toast"},this.message))}},{key:"el",get:function(){return(0,o.g)(this)}},{key:"render",value:function(){return(0,o.h)(o.H,this.hostData(),this.__stencil_render())}}])&&t(n.prototype,i),s&&t(n,s),e}()}}])}();