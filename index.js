let string = "hello world";

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase();
}


function logShout(string) {
  console.log(shout(string));
}
/*
console.log(shout());
console.log(whisper());
*/