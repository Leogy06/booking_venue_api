import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT ?? 3000;
const env = process.env.NODE_ENV ?? "development";

const greet = (name: string): string => `Hello, ${name}!`;

console.log(greet("World"));
console.log(`Environment: ${env}`);
console.log(`Port: ${port}`);
