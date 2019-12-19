# Flat Newsfeed
This feature is a part of the Advertising Board of VNSeattle. It will display posts that are fetched by APIs provided by the VnSeattle server on a newsfeed.

# Live Demo
[Live Demo Flat NewsFeed - click here](https://master.d2tb1gog3fr3bu.amplifyapp.com/)

# Features!

  1. Display posts on the newsfeed
  2. Click to view detail
  3. Infinity scroll
  4. Filter
  5. Search bar for newsfeed
  6. Business page to find businesses
  7. Quick-view hover   
 
### Tech & License 

Flat Newsfeed uses a number of Javascript library to work properly:

* ReactJS - a JavaScript library for building user interfaces
* Redux - an open-source JavaScript library for managing application state
* Axios API  - Promise based HTTP client for the browser and node.js
* react-router-dom - DOM bindings for React Router.
* Redux-Thunk - Middleware manage asynchronouse actions.

### Overview
#### Structure
Based on the Redux Structure 
<img src='https://miro.medium.com/max/3200/1*XEVxovodur9doQW-GJ6MLA.gif' />

* Actions: to store activities that are used by the dispatcher.
* Reducers: to store the reducer who works in the store.
* Components: the components are divided into modules. Each module has its own make-up files and executes files. They shared the state by using a store created in the main index.js.
* Constants: to store constants variable.
* Utils: to store standard functions which will be used repetitively during the development. 

#### Components 
<img src='http://vnseattle.com/vnsmarket-design/component-structure.png' />

### Posts Page ( Home Page )
#### Layout
<img src='http://vnseattle.com/vnsmarket-design/newsfeed-overview.png'/>
Posts – Where to displays Posts
1. Tags - fillter buttons for loading posts by a tag
2. Posts – are displayed post information
* avatar: avatar of the post
* title: title for the post at the top
* picture: an image to display   
* content: a short introduction
* detail: more information includes phone, email, detail    
3. Load – the button to load more posts (includes an infinity scroll)    
#### Structure
<img src='http://vnseattle.com/vnsmarket-design/posts-page-redux.png' />
* appendPostsRequest: fetch new posts from API 
* appendPosts: adding new posts to posts in Redux Store
* updateListPosts: update all posts in the Redux Store 
#### APIs
| GET | API | NOTE |
| ------ | ------ | ----- |
| Posts | [HOST]/GetPostsNewsFeed.php?crid={lastPostID}&tagid={tagID} | This API is used to load the overview of the posts on the newsfeed. List of ten posts from the last post. 
| Post | [HOST]/GetPost.php?id={postID} | This API is used to connect with the detail of each post when the user clicks to a post.

#### API exmaples 
| GET | API |
| ------ | ------ |
| Posts | http://vnseattle.com/vnsapp/GetPostsNewsFeed.php?crid=0&tagid=0
| Post | http://vnseattle.com/vnsapp/GetPost.php?id=935

### Businesses page 


### Installation

Flat Newsfeed requires [Node.js](https://nodejs.org/) v12+ to run.

```sh
$ git clone https://github.com/vnseattle/flatnewsfeed flatnewsfeed
$ cd flatnewsfeed
$ npm install
$ npm start
```