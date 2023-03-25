//Shout string
function shout(string){
    return string.toUpperCase();
}

//Whisper string
function whisper(string){
    return string.toLowerCase();
}

//logShout string
function logShout(string){
   const logShout = "hello";
   console.log(logShout);
   console.log(logShout.toUpperCase());
}

//logShout string 
function logWhisper(string){
    const logWhisper = "HELLO";
    console.log(logWhisper)
    console.log(logWhisper.toLowerCase());
}

//sayHiToHeadphonedRoommate(string)
function sayHiToHeadphonedRoommate(string){
    const sayHiToHeadphonedRoommate = "hello";
    if (string === string.toLowerCase()){
        return "I can't hear you!";
    }else if (string === string.toUpperCase()){
        return "YES INDEED!";
    }else if (string === "Let's have dinner together!"){
        return "I would love to!";
    }
}