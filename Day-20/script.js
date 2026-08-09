// MongoDB is an open-source, non-relational NoSQL database that stores data in flexible, JSON-like documents instead of traditional tables with rows and columns.

// Document Model: Data is saved in BSON format, which is a binary representation of JSON (JavaScript Object Notation).


// Schemaless Flexibility: Every document in a collection can have completely different fields. You can add new fields without running migrations.Horizontal Scalability: It uses sharding to split data and distribute it across many physical servers, keeping costs down as your data grows.Built-In Replication: It automatically copies data across multiple servers (replica sets) to prevent data loss if a machine crashes.

//example of the mangodb operation

{
  "_id": "60c72b2f9b1d8b2bad000001",
  "name": "Alex Kumar",
  "age": 28,
  "skills": ["JavaScript", "MongoDB", "Python"],
  "address": {
    "city": "Kathmandu",
    "country": "Nepal"
  }
}
