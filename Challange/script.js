// Exercise 1:
const arr = [['Vienna', '', '', '', ''],['', 'is', '', '', ''],['', '', 'a', '', ''],['', '', '', 'nice', ''],['', '', '', '', 'city']];

const value = (input) => {
    let output = '';
    for(let i = 0; i < input.length; i++){
        output += input[i][i] + ' ';
    };
    return output;
};

console.log(value(arr));


// Exercise 2:
const rawString = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its$HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties$flow$down;$actions$flow$up";

console.log(rawString.replaceAll('$', ' '));
console.log(rawString.replace(/\$/g, ' '));
console.log(rawString.split("$").join(" "));