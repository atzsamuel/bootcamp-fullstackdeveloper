function well(x){
  let goodCounter=0;
  for(const idea of x){
    if(idea === "good"){
      goodCounter +=1;
    }
  }
  
  if(goodCounter ===0){
    return "Fail!"
  }else if(goodCounter>2){
    return "I smell a series!"
  }else{
    return "Publish!"
  }
  //return console.log(x);
}

well(["bad", "bad", "bad"]); // "Fail!"
well(["good", "bad", "bad", "bad", "bad"]); // "Fail!"
well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "bad"]); // "I smell a series!"
well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "bad", "good", "bad", "bad", "bad", "good", "bad", "bad", "bad"]); // "Publish!"
