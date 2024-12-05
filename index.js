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
// axios
//   .get('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {
//     console.log('Status Code:', response.status);
//     console.log('Data:', response.data);
//   })
//   .catch(error => {
//     if (error.response) {
//       console.error('Error Data:', error.response.data);
//       console.error('Error Status', error.response.status);
//     } else if (error.request) {
//       // The request was made but no response was received
//       console.error('Error Request:', error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.error('Error Message:', error.message);
//     }
//   });

// TASK #2: Use Axios to fetch and display user information
// axios
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     console.log(
//       response.data.forEach(user => {
//         console.groupCollapsed('Name:', user.name);
//         console.log('Username:', user.username);
//         console.log('Email:', user.email);
//         console.log('Phone:', user.phone);
//         console.log('Address:', user.address);
//         console.log('Company:', user.company);
//         console.groupEnd();
//       })
//     );
//   })
//   .catch(error => {
//     if (error) {
//       console.log('Error Status:', error.response.status);
//       console.log('Error Data:', error.response.data);
//     }
//   });

// ASYNC/AWAIT Syntax
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Network response was not ok:', response.status);
    }
    const data = await response.json();
    console.log('Data received:', data);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

fetchData();
