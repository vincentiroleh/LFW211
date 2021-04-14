const { readFile } = require('fs').promises

async function run() {
    const contents = await readFile(__filename)
    console.log(contents.toString())
}
run().catch(console.error);


const print = (contents) => {
    console.log(contents.toString())
}
const [bigFile, mediumFile, smallFile] = Array.from(Array(3)).fill(__filename)

async function run() {
    print(await readFile(bigFile))
    print(await readFile(mediumFile))
    print(await readFile(smallFile))
}
run().catch(console.error);

// Concatenating files after they've been loaded is also trivial with async/await:

async function run() {
    const data = [
        await readFile(bigFile),
        await readFile(mediumFile),
        await readFile(smallFile)
    ]
    print(Buffer.concat(data))
}
run().catch(console.error);

// What about the scenario with a files array of unknown length? The following is an async/await approach to this:

async function run() {
    const data = [];
    for (const file of files) {
        data.push(await readFile(file))
    }
    print(Buffer.concat(data))
}
run().catch(console.error);

// scenarios where the output only has to be ordered, but the order in which asynchronous operations resolves is immaterial we can again use Promise.all but this time await the promise that Promise.all returns:

const files = ['./about.txt', './place.txt', './other.txt'];

async function run() {
    const readers = files.map((file) => readFile(file))
    const data = await Promise.all(readers)
    print(Buffer.concat(data))
}
run().catch(console.error);

// use Promise.allSettled to tolerate errors in favor of getting necessary data:

async function run() {
    const readers = files.map((file) => readFile(file))
    const results = await Promise.allSettled(readers)

    results
        .filter(({ status }) => status === 'rejected')
        .forEach(({ reason }) => console.error())

    const data = results
        .filter(({ status }) => status === 'fulfilled')
        .map(({ value }) => value)

    print(Buffer.concat(data))
}
run().catch(console.error);
