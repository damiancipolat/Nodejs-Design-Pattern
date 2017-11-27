exports = module.exports = (function () {

  var instance;
 
  function init() {
    return {

      extend: function extend(extension, obj){
        for (var key in extension){
          obj[key] = extension[key];
        }
      }
    };
  };
 
  return {

    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();