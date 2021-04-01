# Welcome to the Smart-Brain facial recgonition app!

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Live Version](#live-version)
* [Uses and Future Expansion](#Uses-and-Future-Expansion)

## General info
This project was my first attempt at a full-stack application. The functionality is pretty straightforward:

* User registers and their information gets stored in the postgreSQL database ![register screen](https://user-images.githubusercontent.com/69326962/113332194-794aa300-92e6-11eb-9a94-2b71b09165df.png)
* User submits an image link URL into the image link form ![image submission](https://user-images.githubusercontent.com/69326962/113332260-8d8ea000-92e6-11eb-83bf-3ee2cd7c6b86.png)
* The Clarifai face-recognition API identifies the face in the image and places a box around it ![faceID](https://user-images.githubusercontent.com/69326962/113332315-a0a17000-92e6-11eb-9098-6a2dfbe3d11c.png)
* The application logs the submission in the ticker 
![ticker_count](https://user-images.githubusercontent.com/69326962/113332390-badb4e00-92e6-11eb-90c5-ea4d49bef442.png)
	
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

## Uses and Future Expansion

This application is pretty much where I'd like it to be for now. I created this as a part of a class I attended to learn how to create a full stack application, so the real accomplishment here was the structure. Creating an application with a sign in/ register with the ability to log this information into a database is knowledge that I can
apply to future applications, and the use of this external API built using machine learning has opened the door into the world of machine learning that I can't close. 

If I were to expand this application, here are a few elements I would add:

* Method to save images that were submitted to a database
* Change the format from just picture to video submissions (maybe making the the video a live feed)

If I were to make the above changes however, I'd have to make this project private.

If you have any questions please reach out to me! henrydebuc@gmail.com


