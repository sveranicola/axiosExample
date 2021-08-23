import React, { useState, useEffect} from 'react';
import axios from 'axios';

var App = () => {
 var [] = useState();

 // Inline Styles
 const getButton = {
  'backgroundColor': 'green',
  'border': 'none',
  'color': 'white',
  'padding': '15px 32px',
  'textAlign': 'center',
  'textDecoration': 'none',
  'display': 'inlineBlock',
  'fontSize': '16px',
}
 const postButton = {
  'backgroundColor': 'red',
  'border': 'none',
  'color': 'white',
  'padding': '15px 32px',
  'textAlign': 'center',
  'textDecoration': 'none',
  'display': 'inlineBlock',
  'fontSize': '16px',
  'margin': '10px'
}
////////////////////////////////////

// Get Req

 var getServer = () => {
  axios.get('/getTodos')
    .then(data => console.log(data))
    .catch(err => console.log(err));
 }

 var getApi = () => {
  axios.get('https://jsonplaceholder.typicode.com/todos/?_limit=5')
    .then(result => console.log(result))
    .catch(err => console.log(err));
 }

 var getApiOther = () => {
  axios.get('https://jsonplaceholder.typicode.com/todos/', {params: {_limit: 5}})
  .then(result => console.log(result))
  .catch(err => console.log(err));
 }

 var getApiLong = () => {
  axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/todos/',
    params: {
      _limit: 5
    },
  })
  .then(result => console.log(result))
  .catch(err => console.log(err));
 }

 //////////////////////////////////////////////////////////

 //post req

 var postServer = () => {
  axios.post('/postTodos', {body: {title: 'foo',
  body: 'bar', userId: 1,}})
    .then(result => console.log(result))
    .catch(err => console.log(err));
 }

 var postApi = () => {
  axios.post('https://jsonplaceholder.typicode.com/todos/', {body: {title: 'foo',
  body: 'bar', userId: 1,}})
    .then(result => console.log(result))
    .catch(err => console.log(err));
 }

 var postApiLong = () => {
  axios({
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos/',
    body: {
      title: 'foo',
      body: 'bar',
      userId: 1,},
  })
  .then(result => console.log(result))
  .catch(err => console.log(err));
 }


 /////////////////////////////////////////////////////////
 return (
   <div>
     <h1> Axios Example </h1>
     <div>
       <span>
         <button style={getButton} onClick={getServer}>GET</button>
       </span>
       <span>
         <button style={postButton} onClick={postServer}>POST</button>
       </span>
     </div>
   </div>
 );
};

export default App;
