# Flat Newsfeed
This feature is a part of the Advertising Board of VNSeattle. It will display posts that are fetched by APIs provided by the VnSeattle server on a newsfeed.

# Features!

  1. Display posts on the newsfeed
  2. Click to view detail
  3. Infinity scroll
  4. Filter
 
### Tech

Flat Newsfeed uses a number of Javascript library to work properly:

* ReactJS - a JavaScript library for building user interfaces
* Redux - an open-source JavaScript library for managing application state
* Axios API  - Promise based HTTP client for the browser and node.js
* react-router-dom - DOM bindings for React Router.

### Overview
#### Layout
<img src='http://vnseattle.com/vnsmarket-design/home-overview-layout.png'/>

Posts – Where to displays Posts
1. Tags - where 
2. Posts – are displayed post information
* avatar: avatar of the post
* title: title for the post at the top
* picture: an image to display   
* content: a short introduction
* detail: more information includes phone, email, detail    
3. Load – the button to load more posts (includes an infinity scroll)    

#### Structure
Based on the Redux Structure 
<img src='https://www.esri.com/arcgis-blog/wp-content/uploads/2017/09/react-redux-overview.png' />

Actions: to store activities that are used by the dispatcher.
Reducers: to store the reducer who works in the store.
Components: the components are divided into modules. Each module has its own make-up files and executes files. They shared the state by using a store created in the main index.js.
Constants: to store CONSTANT VARIABLES.
Utils: to store standard functions which will be used repetitively during the development. 
