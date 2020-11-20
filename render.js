const pug = require('pug');

// Compile the source code
const compiledFunction = pug.compileFile('base.pug');

// Render a set of data
var data = compiledFunction({
// 這邊可以傳入變數
//  name: 'henry'
});


// console.log(data);

 
const fs = require('fs');
fs.writeFile('base.html', data, function (err) {
    if (err)
        throw err;
    else
        console.log('finish');
});

