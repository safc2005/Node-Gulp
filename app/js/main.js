// self invoking funciton keeping scope contained and not global

(function() {

  var safr = {
    // caching the DOM elements that are needed thtoughout the process
    cacheDom: function () {
      this.$mEl = document.getElementById('main');
    },
    // initilised the entire project
    init: function () {
      this.cacheDom();
      this.render();
    },
    // renders the DOM with the required changes
    render: function () {
      this.$mEl.innerHTML = this.string;
    },
    string: 'This test is being inserted by the main.js file via modular JS'
  };

  // awaits for the DOM to be loaded then calls the init module
  document.addEventListener("DOMContentLoaded", function(event) {
    safr.init();
  });

})();
