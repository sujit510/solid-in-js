// API file

function getDataFromServer() {
  // You can use any data fetching method here: Ajax, fetch, Axios, etc.
  return { name: 'Data from server' };
}

// Business logic file
const data = getDataFromServer();
const nameInput = document.querySelector('.name')!;
nameInput.innerHTML = data.name;
