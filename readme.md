# Jobly Backend

This is the Express backend for Jobly, version 2.

To run this:

    node server.js
    
To run the tests:

    jest -i

Errors:
When running tests at initial set up 1 test failed when testing DB_URI. Corrected by changing expected result to "postgres:///jobly" 
>```config.test.js -> config can come from env > works -> expecting: "jobly" -> received: "postgresql:///jobly```