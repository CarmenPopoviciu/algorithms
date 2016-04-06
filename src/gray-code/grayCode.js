(function() {
  'use strict';
  
  /**
   * @param {Number} n
   * @return {Number[]}
   */
  function grayCode(n) {
      if(!n || (n <= 0) || (typeof n !== 'number')) {
          return;
      }
      if(n === 1) {
          return ['0', '1'];
      } else {
          var nMinusOneList = grayCode(n-1);
          var list = prefix(0, nMinusOneList);
          var reflectedList = prefix(1, reflect(nMinusOneList));
          return list.concat(reflectedList);
      }
  }

  /**
   * Return the reverse of a given list. This function does not mutate the original list
   * 
   * @param {Array} list List to be reflected
   * @return {Array} A copy of the list in reverse order
   */
  function reflect(list) {
      var reflectedList = list.slice(); // create copy of the array since reverse will mutate the array
      return reflectedList.reverse(); 
  }

  /**
   * Prefix all values of a given list with a specified character
   * 
   * @param {String} char Character to prefix the given value with
   * @param {Array} list List of values to be prefixed 
   * @return {Array} The prefixed list of values
   */
  function prefix(char, list) {
      char = (typeof char === 'string') ? char : char.toString();
      var prefixedList = list.map(function(currentValue) {
          return char.concat(currentValue);
      });
      return prefixedList;
  }
})();