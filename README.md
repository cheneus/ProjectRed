# ProjectRed

# Introduction
This project is still in progress.

# Setting Up the Base (2/15/18)

1. git clone the github
2. "cd into the folder" then run "yarn install" 
3. Once the install is done, run "mongod" to start the MongoDB. 
4. Check if the mongod is running properly
5. With the MongoDB is running
    5.1 **For Development** run "npm run dev" (script can be seen what is being ran with that command) 
    5.2 **For Productions** run "npm start" (defaulted to heroku configuration for now)
    
**
If you encounter something like a spawn error
 -- You can still run the app properly with "node server.js" with one console
 -- Then to change in the client dir and run "yarn start"
**

6. If everything is working properly two server will be running, on **dev:** the localhost:5000 is the backeend server ; localhost:3000 is front-end server.

7. On localhost:3000 you will see the React Icon with the text Hello from Express that is what you are getting from the express server.

** That's All **
