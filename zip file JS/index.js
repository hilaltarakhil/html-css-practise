// const fetchData = async () => {
//   const response = await axios.get("http://www.omdbapi.com/", {
//     params: {
//       apikey: "324a329",
//       s: "avengers",
//     },
//   });

//   console.log(response.data);
// };
// fetchData();

const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "324a329",
      i: "tt0848228",
    },
  });

  console.log(response.data);
};

const input = document.querySelector("input");

let timeOutId;
const onInput = (event) => {
  if (timeOutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    fetchData(enevt.target.value);
  }, 1000);
};

input.addEventListener("imput", onInput);
