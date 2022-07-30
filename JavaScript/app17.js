const firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", () => {
  console.log("IT WORKED");
});

firstReq.addEventListener("error", () => {
  consolr.log("ERROR");
});
firstReq.open("GET", "");
firstReq.send();
console.log("REquest Sent");
