## Usage


1. In the root folder create a  `.env` file and add your environment variables there.
2. App the following `environment variables` as specified in the .env.example file.
3. 
    To run server for development:
    ```bash
    npm run dev 
    ```

    To run server for production:
    ```bash
    npm run start
    ```

    - `dev` starts the application with nodemon which will restart the server whenever a file changes.
    - `start` starts the application without nodemon, using plain old node.

4. Congrats you have stated the  server!
5. An authentication system has already been made just visit the `models/User.js` file and update the schema t your liking.

Happy Coding