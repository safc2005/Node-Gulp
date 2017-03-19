// self invoking funciton keeping scope contained and not global

(function() {

  var safr = {
    // caching the DOM elements that are needed thtoughout the process
    cacheDom: function () {
      this.mainElement = document.getElementById('main');
      this.subElement = document.getElementById('time');
    },
    // initilised the entire project
    init: function () {
      this.cacheDom();
      this._render();
    },
    getCurrentTimeStamp: function () {
      return new Date();
    },
    stringMain: 'This test string is being inserted by the main.js file via modular JS (main string)',
    // renders the DOM with the required changes
    _render: function () {
      this.mainElement.innerHTML = this.stringMain;
      this.subElement.innerHTML = 'thie current date and time is:' + this.getCurrentTimeStamp();
    }
  };

  // awaits for the DOM to be loaded then calls the init module
  document.addEventListener("DOMContentLoaded", function(event) {
    safr.init();
  });

})();
