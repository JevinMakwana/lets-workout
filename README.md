PROJECT TITLE: "WORKOUT GUID MERN APP"
GROUP MEMBERS: UI20CS09 (Aryaman Gurjar), 
               UI20CS36 (Jevin Makwana)

Instruction to run project:

    1) First of all open mongoDB-atlas and then connetct server to currene IP adderss and copy your connection key
    2)*Then make on .env file into server and make one variable with name 'MONGO_CONNECTION_KEY' and assign connection key to it
       (MONGO_CONNECTION_KEY=your_connection_key_here)
    3) Now cd over 'server' folder
        -> Run the following command to install all required dependancies for backend
        command: npm install
        -> now start the server by following command
        command: npm start
    4) Now open new termina tab
    5) Then cd over 'client folder'
        -> Run the following command to install all required dependancies for frontend
        command: npm install
        -> Run following command for running app on web
        command: npm start
    (Step 2 is required In case .env is not available in your downloded .zip folder)
    
- In this mern-app there are more than 1000 exercises are available out there
- While exploring this mern-app you can:
    ~ Search any exercise by it's name/boy-part/used equipment
    ~ Watch the exercise related YouTube videos
    ~ Save your favourite exercise for your nex workout session
    ~ There will be exercises related to selected exercise
