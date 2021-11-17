const connection = require("./connection");

// Converte de snake_case para camelCase

const serialize = (bookData) => ({
  id: bookData._id,
  title: bookData.title,
  authorId: bookData.author_id,
});

const promiseSerialize = (books) => {
  return books.map(serialize);
}

// Busca todos os autores do banco.

const getAll = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray())
    .then(promiseSerialize);
}

const getByAuthorId = async (id) => {
  return connection()
    .then((db) => db.collection('books').find({ 'author_id': id }).toArray())
    .then(promiseSerialize);
}

/*
Busca um autor específico, a partir do seu ID
@param {String} id ID do autor a ser recuperado
*/

const findById = async (id) => {
    if (!ObjectId.isValid(id)) {
        return null;
    }

    const bookData = await connection()
        .then((db) => db.collection('books').findOne(new ObjectId(id)));

    if (!bookData) return null;

    const { title, author_id  } = bookData;
    
    return { id, title, authorId: author_id };
};

const isValid = (title, authorId) => {
  if (!title || typeof title !== "string") return false;
  if (!authorId || typeof authorId !== "number") return false;

  return true;
};


const create = async (title, author_id) =>
  connection()
    .then((db) => db.collection('books').insertOne({ title, author_id }))
    .then(result => ({ id: result.insertedId, title, author_id }));

module.exports = {
  getAll,
  findById,
  getByAuthorId,
  isValid,
  create,
};
