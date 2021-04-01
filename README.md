# Welcome to the Smart-Brain facial recgonition app!

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Live Verson](#live-version)

## General info
This project was my first attempt at a full-stack application. The functionality is pretty straightforward:
* User registers and their information gets stored in the postgreSQL database
* User submits an image link URL into the image link form
* The Clarifai face-recognition API identifies the face in the image and places a box around it
* The application logs the submission in the ticker
	
## Technologies
Project is created with:
* REACT version 17.0.1
* Tachyons version 4.12.0
* Express version 4.17.1
* Clarifai version 2.9.1

## Live Version

The client side and the sever of this application are hosted on Heroku. When an application is not used for a while, a Heroku application "goes to sleep.
Give it time and it'll wake up! Follow the link and give it a try for me.

https://smart-brain-client-side.herokuapp.com/



