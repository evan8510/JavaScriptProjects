/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!=t.length) return false; 

    var sMap = new Map(); 
    var temp;
    var amount = 0;
    var i = 0;
    // store first string in a Map, keys: characters, values: integers(representing frequency of the character)
    for(i =0; i< s.length;i++){
        amount = 0;
        temp = s.charAt(i);
        if(sMap.has(temp))
            amount = sMap.get(temp);
        sMap.set(temp,amount+1);
    }

    // iterate throught second string & check in constant time whether or not the
    // character appears in the Map and if it appears too often
    for(i =0; i< t.length;i++){
        temp = t.charAt(i);
        amount = 0;
        if(sMap.has(temp)){
            amount = sMap.get(temp)-1;
        }
        else
            return false;
        if(amount<0) return false;
        sMap.set(temp,amount);
        
    }

    // finally check each value to confirm all values are 0
    for(let value of sMap.values()){
        if(value!=0) return false;
    }
    return true;
};