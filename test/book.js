process.env.NODE_ENV = "test"

const Book = require('../db/models').Book;
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const should = chai.should();

chai.use(chaiHttp)


describe('/GET book', () => {
    it('it should Get all books', (done) => {
        chai.request(app)
        .get('/api/books')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});

describe('/POST book', () => {
    it('it sould post the book info', (done) => {
        const book = {
            title: "Gedebook",
            author: "Rian",
            isbn: "007",
            publishedOn: "2019"
        };

        chai.request(app)
        .post('/api/books')
        .send(book)
        .end((err, res) => {
            res.should.have.status(201);
            res.body.should.be.a('object');
            res.body.should.have.property('data');
            res.body.should.have.property('message');
            res.body.should.have.property('statusType').eq('success');
            done();
        });
    });
});


describe('/PUT/:id book', () => {
    it("should not update the book info", (done) => {
        const book = {
            title: "Gedebook",
            author: "Rian",
            isbn: "007",
            publishedOn: "2019"
        }
        const bookId = 2;

         chai.request(app)
         .put('/api/books/'+ bookId)
         .send(book)
         .end((err, res) => {
             res.should.have.status(404);
             res.body.should.be.a('object');
             res.body.should.have.property('message');
             res.body.should.have.property('statusType').eq('error');
             done();
         });
    });
});