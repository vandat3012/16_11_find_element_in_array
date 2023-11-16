let number = prompt("enter the number");
let arrays = [-3,5,8,9,7,6,5,4,3];
for (let i=0 ; i<arrays.length ; i++) {
    if (number==arrays[i]) {
        alert('element is at ' + number + 'position' + i);
    }
}
