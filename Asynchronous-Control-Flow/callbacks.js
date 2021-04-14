const { readFile } = require('fs');
const [bigFile, mediumFile, smallFile] = Array.from(Array(3)).fill(__filename)
const data = [];
const print = (err, contents) => {
    if (err) {
        console.error(err);
        return
    }
    console.log(contents.toString());
};

// parallel execution in Node.js

readFile(bigFile, print);
readFile(mediumFile, print);
readFile(smallFile, print);

// serial execution
readFile(bigFile, (err, contents) => {
    print(err, contents);
    readFile(mediumFile, (err, contents) => {
        print(err, contents);
        readFile(smallFile, (err, contents) => {
            print(err, contents);
        })
    })
})

// What if we want all of the contents of each file to be concatenated together and logged once all files are loaded?

readFile(bigFile, (err, contents) => {
    if (err) print(err)
    else data.push(contents)
    readFile(mediumFile, (err, contents) => {
        if (err) print(err)
        else data.push(contents)
        readFile(smallFile, (err, contents) => {
            if (err) print(err)
            else data.push(contents)
            print(null, Buffer.concat(data))
        })
    })
})



// readFile(__filename, (err, contents) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(contents.toString());
// });

