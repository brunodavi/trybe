const connection = require("./connection");

const serialize = ({ _id, title, authorId }) =>
getNewBook({
  id: _id,
  title,
  authorId,
});

// Busca todos os livros do banco.
const getAll = async () => {
  return connection()
    .then((db) => db.collection("books").find().toArray())
    .then((books) => books.map(serialize));
};

const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const bookData = await connection().then((db) =>
    db.collection("books").findOne(new ObjectId(id))
  );

  if (!bookData) return null;

  const { title, authorId } = bookData;

  return getNewBook({ id, title, authorId });
};

const getByAuthorId = async (authorId) => {
  if (ObjectId.isValid(id)) {
    return null;
  }

  const books = await connection().then((db) => 
    db.collection("books").find(new ObjectId(authorId))
  );

  if (!books.length) return null;

  return books.map()
}

const create = async (title, authorId) =>
  connection()
    .then((db) =>
      db.collection("books").insertOne({ title, authorId })
    )
    .then((result) =>
      getNewBook({ id: result.insertedId, title, authorId })
    );
