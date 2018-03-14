Content

* theory and practice
* CRUD on MongoDB from Node.js

Database

* easily retrievable and searchable
* organized

Database Management System

* software
* server

browser <> [react app runs on a Web Server] <> [node API runs on a Web Server] <> [Database Server]

API = Application Programming Interface

What is NoSQL (Document, Key-value, Graph), what is SQL (Relational Model)?

```js
const user = { // schema
  id: 1
  name: '',
  address: {
    street: ''
    state: ''
  },
  friends: [
    { id: 27, name: '' }
  ],
  tags: [
    'lambda',
    'cs7'
  ]
}
```

What is MongoDB?

How MongoDB is structured
MongoDB Concepts

* server
  * databases
    * collections
      * documents
        * field
      * indexes
    * indexes

Advantages of Document Oriented DBs

* easy to understand
* easy to scale out (horizontally) sharding
* dynamic schemas
* JavaScript
* more natural data models

Drawbacks of Document Oriented DBs

* not transaction support across multiple documents.
* eventually consistent.
* joins are not as powerful as those from relational databases.
* some functionality offloaded to the client code.

MongoDB _shell_
MongoDB Compass

Basic Queries
CRUD Operations

Primary key.

[browser] =JSON= [api (mongo driver)] =BSON= [Mongo(BSON)]

# Data Types

Date: milliseconds from Unix Epoch (jan 1 1970)

* saving `new Date()`.

string, number (floating point 64 bit), boolean,
array,

null,

code, binary data,

embedded object == subdocuments or embedded documents
ObjectId,

regular expressions

Relationships

one to one = embedded documents > ref (true linking)
one to many = ref (city -- citizens)
one to few = subdocument (embedded array)

many to many (authors and books)

process.env.PORT <-- hosting provider will assign the port to an environment variable.

Previously on Mongo...

* connect to mongo from node
* data types
* schemas
* models
* add default, type.
* separate routers (sub applications)
* glimpse of validation

A Vendor can have many orders
An order belongs to a vendor

Add an OrderLine

* references the order id
* productName: string
* quantity: number, minimum value is 1
* price: number, minimum value of 1

<!-- Inside order we'll add a collection of order lines -->
