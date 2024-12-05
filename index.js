// BASIC SYNTAX
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => console.log(data.slice(0, 6)))
//   .catch(error => console.log(error));

// GET REQUEST with fetch
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok:' + response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('Data received: ', data);
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });

// TASK: fetch a list of posts from JSONplaceholder API
// fetch(`https://jsonplaceholder.typicode.com/posts`)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok', response.status);
//     }
//     return response.json();
//   })
//   .then(posts => {
//     posts.forEach(post => console.log('Post title:', post.title));
//   })
//   .catch(error => {
//     console.error('There was an error retrieving the posts:', error);
//   });

// GET Request with Axios
