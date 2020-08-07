import { Client } from "https://deno.land/x/mysql/mod.ts";

const client = await new Client().connect({
    hostname: "127.0.0.1",
    username: "root",
    db: "test",
    poolSize: 3, // connection limit
    password: "123",
});

// await client.execute(`DROP TABLE IF EXISTS users`);
// await client.execute(`
//     CREATE TABLE users (
//         id int(11) NOT NULL AUTO_INCREMENT,
//         name varchar(100) NOT NULL,
//         created_at timestamp not null default current_timestamp,
//         PRIMARY KEY (id)
//     ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
// `);
let result = await client.execute(`INSERT INTO users(NAME) VALUES(666)`);
console.log(result);
// console.log(result);
// { affectedRows: 1, lastInsertId: 1 }
