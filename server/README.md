##Setup 

1. Follow Flask installation at http://flask.pocoo.org/docs/1.0/installation/
2. pip install uber_rides && pip install lyft_rides


##Running
1. FLASK_APP=server.py flask run

##Testing
1. Download Postman at https://www.getpostman.com/
2. Open Postman
3. In "Enter request URL" enter http://127.0.0.1:5000/api/v1/lyft or http://127.0.0.1:5000/api/v1/uber, depending on which rideshare service you're testing
4. Click send, and JSON should appear