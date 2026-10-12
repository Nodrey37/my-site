function min(chiffre1, chiffre2){
       if (typeof chiffre1!== "number" | chiffre2 !== "number" | chiffre1,chiffre2 === undefined){
        return NaN
    }
    
    if (chiffre1 < chiffre2){
        return chiffre1;}
     return chiffre2;
    }

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof min, "function");
assert.strictEqual(min.length, 2);
assert.strictEqual(min(0, 0), 0);
assert.strictEqual(min(0, 1), 0);
assert.strictEqual(min(-1, 0), -1);
assert.strictEqual(min("tacos", 0), NaN);
assert.strictEqual(min(), NaN);
// End of tests

console.log("🎉");
