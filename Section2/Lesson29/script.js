// Lesson 29 - For loops

/*
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++){
    console.log(john[i]);
}

var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}

*/

//continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

console.log("For - using Continue");
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

console.log("For - using Break");
for (var i = 0; i < john.length; i++) {
        if (typeof john[i] !== 'string') break;
        console.log(john[i]);
}

console.log("For - backwards");

for (var i = john.length - 1; i >= 0; i--) {
        console.log(john[i]);
}