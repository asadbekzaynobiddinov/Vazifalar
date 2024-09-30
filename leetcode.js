/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    const uniqueSets = words.map(word => new Set(word));
      
      let count = 0;
      
      for (let i = 0; i < words.length; i++) {
          for (let j = i + 1; j < words.length; j++) {
              if (uniqueSets[i].size === uniqueSets[j].size && 
                  [...uniqueSets[i]].every(char => uniqueSets[j].has(char))) {
                  count++;
              }
          }
      }
      
      return count;
  };