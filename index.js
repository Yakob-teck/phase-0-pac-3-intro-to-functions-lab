const { spyOn } = require("expect/lib");

function shout(string) {
  return string.toUpperCase();// todo
}
function whisper(string) {
  return string.toLowerCase();// todo
}
function  logShout(string) {
  console.log(string.toUpperCase());

}
function  logWhisper(string) {
  console.log(string.toLowerCase());
  return "YES INDEED!";
}
function  sayHiToHeadphonedRoommate(string) {
  if (string==string.toLowerCase()) {
    
      return "I can\'t hear you!";
    }
      else if(string==string.toUpperCase()) {
        return "YES INDEED!";
      }
      else if(string==="Let's have dinner together!") {
        
        return "I would love to!";
  
    }
  }

 
