function smallEnough(a, limit){
  //ordeno descendentemente y comparo el limite con el valor mas alto
   return a.sort((a,b) => b-a)[0] <= limit
  
    }
