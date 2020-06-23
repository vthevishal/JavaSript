todo=["get up at 5 am","gym","bike Ride","learn","talk"]
todo.push(`money`)
todo.forEach(function(to,pos)  {
   console.log(`${pos+1} ${to}`) 
});

for(i=0;i<todo.length;i++){
    console.log(`${i+1} ${todo[i]}`)
}