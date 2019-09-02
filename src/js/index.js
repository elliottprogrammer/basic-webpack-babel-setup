import testNum from './test';

// test webpack (modules)
console.log(`I imported ${testNum} from another module.`);

// Test @babel/Polyfill (async/await)
async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    const data = await response.json();

    return data;
}

getPosts().then(posts => console.log(posts));
