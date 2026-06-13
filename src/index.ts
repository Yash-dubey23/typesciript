function greet(person: string): string {
    return `Hello, ${person}!, Welcome to TypeScript!`;
}

const user: string = "Alice";
console.log(greet(user));


// @Yash-dubey23 ➜ /workspaces/typesciript (main) $ node dist/index.js
// Hello, Alice!, Welcome to TypeScript!