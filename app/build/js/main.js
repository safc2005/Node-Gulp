!function(){var n={cacheDom:function(){this.mainElement=document.getElementById("main"),this.subElement=document.getElementById("time")},init:function(){this.cacheDom(),this._render()},getCurrentTimeStamp:function(){return new Date},stringMain:"This test string is being inserted by the main.js file via modular JS (main string)",_render:function(){this.mainElement.innerHTML=this.stringMain,this.subElement.innerHTML="thie current date and time is:"+this.getCurrentTimeStamp()}};document.addEventListener("DOMContentLoaded",function(t){n.init()})}();