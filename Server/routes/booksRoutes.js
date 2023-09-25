import { Router } from "express";
import{ Book} from '../Models/bookModel.js'
export const booksRouter = Router();



//Route for getting all books
booksRouter.get("/", async (request, response) => {
  try {
    const books = await Book.find({});
    response.status(200).json({ count: books.length, data: books });
  } catch (error) {
    console.log("Error in getting all books", error);
  }
});

//Route for updating a Book
booksRouter.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    )
      return response
        .status(400)
        .send({
          message: "Send all required fields: tile, author, publishYear",
        });
    const { id } = request.params;
    const result = await Book.findByIdAndUpdate(id, request.body);

    if (!result)
      return response.status(404).json({ message: "Book not found" });

    return response.status(200).send({ message: "Book updated successfully" });
  } catch (error) {
    console.log("Error in updating book", error);
  }
});

//Route for getting one book
booksRouter.get("/:id", async (request, response) => {
  const { id } = request.params;
  const book = await Book.findById(id);
  response.status(200).json(book);
});

//Route for saving books
booksRouter.post("/", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    )
      return response
        .status(400)
        .send({
          message: "Send all required fields: tile, author, publishYear",
        });

    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log("Error in saving book", error);
    response.status(500).send({ message: error.message });
  }
});

//Route for deleting books
booksRouter.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Book.findByIdAndDelete(id);

    if (!result)
      return response.status(404).json({ message: "Book not found" });

    return response.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log("Error in deleting books", error);
    response.status(500).send({ message: error.message });
  }
});


