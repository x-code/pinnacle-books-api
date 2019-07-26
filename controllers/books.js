const book = require('../db/models').Book;
const ResponseFormat = require('../core').ResponseFormat;
module.exports = {
    create(req, res) {
        return book
        .create({
            title: req.body.title,
            author: req.body.author,
            isbn: req.body.isbn,
            publishedOn: req.body.publishedOn,
            numberOfPages: req.body.numberOfPages
        })
        .then(book => res.status(201).json(ResponseFormat.build(
            book,
            "Book Create Successfully",
            201,
            "success"
        )))
        .catch(error => res.status(400).json(ResponseFormat.error(
            error,
            "Something went wrong when create books",
            "error"
        )))
    },
    list(req, res) {
        return book
        .all()
        .then(books => res.status(200).json(ResponseFormat.build(
            books,
            "book Information Reterive successfully",
            200,
            "success"
        )))
        .catch(error => res.status(400).send(ResponseFormat.build(
            error,
            "Somthing went wrong when Reterieve Information",
            400,
            "error"
        )));
    },
    
    getBookDetails (req, res) {
        return book
        .findById(req.params.bookId)
        .then(books => {

            if(!books) {
                return res.status(404).json(
                    ResponseFormat.build(
                        {},
                        "No book found",
                        404,
                        "error"
                    )
                )
            }

            return res.status(200).json(
                ResponseFormat.build(
                    books,
                    "book information reterieve successfully",
                    200,
                    "success"
                )
            )
        })
        .catch(error => res.status(500).json(
            ResponseFormat.error(
                error,
                "Something went wrong when reterive the book details",
                500,
                "error"
            )
        ));
    },

    update(req, res) {
        return book
        .findById(req.params.bookId)
        .then(bk => {
            if(!bk) {
                return res.status(404).json(
                    ResponseFormat.error(
                        {},
                        "book not found",
                        404,
                        "error"
                    )
                );
            }

            return bk
            .update({
                title: req.body.title || bk.title,
                author: req.body.author || bk.author,
                isbn:  req.body.isbn || bk.isbn,
                publishedOn:  req.body.publishedOn || bk.publishedOn,
                numberOfPages: req.body.numberOfPages|| bk.numberOfPages
            })
            .then(() => res.status(200).json(
                ResponseFormat.build(
                    bk,
                    "book Update successfully",
                    200,
                    "success"
                )
            ))
            .catch((error) => res.status(500).json(
                ResponseFormat.build(
                    {},
                    "someting went wrong when update the book",
                    500,
                    "error"
                )
            ));
        });
    },
    destroy (req, res) {
        return book
        .findById(req.params.bookId)
        .then(bk => {
            if(!bk) {
                return res.status(404).json(
                    ResponseFormat.error(
                        {},
                        "book not found",
                        404,
                        "error"
                    )
                );
            }

            return bk
            .destroy()
            .then(() => res.status(200).json(
               ResponseFormat.build(
                 {},
                 "book deleted successfully",
                 200,
                 "success"
               )
            ))
            .catch(error => res.status(500).json(
                ResponseFormat.error(
                    error,
                    "someting went wrong when delete the book",
                    500,
                    "error"
                )
            ));
        });
    }
}