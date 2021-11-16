const connection = require("./connection");
const { ObjectId } = require('mongodb');

const serialize = ([{ _id, firstName, lastName, email }]) => [
  {
    id: _id,
    firstName,
    lastName,
    email,
  },
];

const getAll = async () =>
  connection()
    .then((db) => db.collection("users").find().toArray())
    .then(serialize)
    .catch(() => []);

const findById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  return connection().then((db) =>
    db.collection("users").findOne(new ObjectId(id))
  );
};

const create = async (firstName, lastName, email) =>
  connection()
    .then((db) =>
      db.collection("users").insertOne({
        firstName,
        lastName,
        email,
      })
    )
    .then((result) => ({
      id: result.insertedId,
      firstName,
      lastName,
      email,
    }));

const update = async (id, body) => {
  if (!ObjectId.isValid(id)) return null;
  const { firstName, lastName, email, password } = body;
  return connection().then((db) =>
    db.collection("users").updateOne(new ObjectId(id), {
      '$set': {
        firstName,
        lastName,
        email,
        password,
      },
    })
  );
};

module.exports = {
  getAll,
  findById,
  create,
  update,
};
