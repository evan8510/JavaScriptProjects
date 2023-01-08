/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var words = new Map();
    var result = new Array();
    var count = 0;
    var mp;
    for(let i = 0; i<strs.length;i++){
        mp = getMap(strs[i]);
        if(words.has(mp)){
            result[words.get(mp)][result[words.get(mp)].length] = strs[i];
        }
        else{
            words.set(mp,count);
            result[count] = new Array();
            result[count][result[count].length] = strs[i];
            count++;
        }
    }
    return result;
};
/**
 * @param {string} s
 */
var getMap = function(s){
    var sMap = new Map();
    var temp;
    var amount = 0;
    var i = 0;
    for(i =0; i< s.length;i++){
        amount = 0;
        temp = s.charAt(i);
        if(sMap.has(temp))
            amount = sMap.get(temp);
        sMap.set(temp,amount+1);
    }
    return sMap.entries;
}