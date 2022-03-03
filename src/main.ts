/* This is our main entry into the package. Any exported objects must also be imported and exported by this file. */

/* A simple function that returns a friendly greeting. */
export function greet(name: string) : string {
    return `Hello, ${name}!`;
}
