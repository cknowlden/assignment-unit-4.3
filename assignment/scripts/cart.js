console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem(item) {
    basket.push(item);
    return true;
}
addItem('marbles');
addItem(`potato`);
addItem('peanut');
addItem('pear');
addItem('cherry');

//console.log(addItem('apple'));
console.log(`The basket contains: ${basket}`);

function listItems(){
    for (let item of basket){
    console.log(item)
    };
};

listItems();

function empty(){
    basket.length = 0
}

empty();
console.log(`The basket now has ${basket.length} items`);

let maxItems = 5;

function isFull(){
    if (basket.length < maxItems){
    return false;
    } else{
    return true;
    }
};

console.log(`The basket is full? ${isFull()}`);



// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
