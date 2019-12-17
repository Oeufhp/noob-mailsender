## Simple nodejs mail sender

### **Installation**
  ```js
    $ npm i
    $ npm start
  ```
  The server should running on port 4000 as default
### *Usage*
- Add `.env` file in the root of project
- Add sender mail and app password (if using gmail)
- The endpoint is `/mails` with the body
  ```js
    {
      "recEmail": `RECEIVER MAIL`,
      "subject": `YOUR SUBJECT HERE`,
      "message": `YOUR MESSAGE HERE`
    }
  ```
