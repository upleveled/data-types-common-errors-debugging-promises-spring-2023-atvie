import fakeFetch from './utils/fakeFetch.js';

const youtube = {};
const instagram = {};

function print() {
  console.log(youtube.response.html);
  console.log(instagram.response.html);
  console.log('done');
}

fakeFetch('youtube')
  .then((response) => {
    youtube.response = response; // define youtube response

    // I instagram response is already defined
    if (youtube.response && instagram.response) {
      print();
    }
  })
  .catch((error) => console.log(error));

fakeFetch('instagram')
  .then((response) => {
    instagram.response = response; // define instagram response

    // I youtube response is already defined
    if (youtube.response && instagram.response) {
      print();
    }
  })
  .catch((error) => console.log(error));
