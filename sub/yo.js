const words = {
  1: "Yo!",
  0: "Ayi!"
}

const shout = function () {
  let d = Date.now();
  console.log(d);
  console.log(words[d%2]);
}

module.exports = {
  shout: shout
}