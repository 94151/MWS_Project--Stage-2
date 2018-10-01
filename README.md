# MWS_Project--Stage-2
This is part of Google Udacity India Scholership challange. In this project we are supposed to do following things:
- Add indexed DB to cache the data to make the app work offline.
- Improve Lighthouse score of the app. Make it performance>70, PWA>90 & accessibility> 90

In order to run the project. you need to download the starting server by following this [link](https://github.com/udacity/mws-restaurant-stage-2). 

You need to install local server.
- Node.js
- Sails.js

### Install project dependancies
``` # npm i```

### Install Sails.js globally

```# npm i sails -g```

### Start the server
```# node server```

development debug: Port : 1337

### Changes Made 

1. Index.html
       -  Added manifest.json, theme-color
       -  Added preconnect to the external styles like leaflet.css and mapbox API CSS. This will load the CSS file asynchronously.
       -  Added the async keyword to all the js files links in the script tag.

2. Restaurant.html
       - Added manifest.json and theme color.

3. dbhelper.js
       - added indexed db to store data. 

### Snippet of Lighthouse Audit Report
![performance](https://user-images.githubusercontent.com/17044000/46258943-ae949100-c4ef-11e8-8f92-9b5c58a1bc50.PNG)
       
