// Below is quite tightly coupled system since
// the data fetching logic is exposed here itself

fetch('/path/to/file').then((data: any) => {
  const nameInput = document.querySelector('.name')!;
  nameInput.innerHTML = data.name;
});
