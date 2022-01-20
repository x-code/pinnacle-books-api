
## Postman
```https://www.getpostman.com/collections/639d65ec191a27d15190```

## Installation
 1. Clone the repository ```git clone git@github.com:x-code/pinnacle-books-api.git```
 2. Install the ```sequelize cli``` with `npm` package: ```npm install -g sequelize-cli```

 3. Run command for npm ```npm install```
 4. Create database to mysql, if you use command line, command will be
    ```>mysql -u <username> -p <password> ```
    ```mysql> create DATABASE pinnacle_test```
    ```mysql> exit```
 5. Migrate database  ```npm run db:migrate```
 6. For development purpose user command ```npm run start:dev```

 ## Api endpoint

 1. List of book
 <br /> ```[GET]```  ``` http://localhost:3000/api/books```

 2. Create book 
<br /> ```[POST]```  ``` http://localhost:3000/api/books``` 
 <br /> Request Body:
        {
                "title": "Dilan 1990",
                "author": "Rian Firandika",
                "isbn": "0987654321",
                "publishedOn": "2019",
                "numberOfPages": "1"
        }
3. Detail of book ```[GET]```  ``` http://localhost:3000/api/books/{bookId}```

4. Update book 
<br /> ```[PUT]```  ```http://localhost:3000/api/books/{bookId}``` 
<br /> Request Body:
        {
                "title": "Dilan 1991",
                "author": "Rian",
                "isbn": "0987654320",
                "publishedOn": "2019",
                "numberOfPages": "1"
        }

5. Delete book ```[DELETE]```  ``` http://localhost:3000/api/books/{bookId}```

