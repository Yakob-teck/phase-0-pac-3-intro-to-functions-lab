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
function  sayHiToHeadphonedRoommate(string){
  shout(string);
  return "I can't hear you!";
  whisper(string);
 


}
