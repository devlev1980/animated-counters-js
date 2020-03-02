const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter=>{
   const updateCount = () =>{
     const target = +counter.getAttribute('data-target') ;
       console.log(target);
       const count = +counter.innerText;

       const increment = target / speed;

       console.log(increment);

       if(count < target){
           counter.innerText = Math.ceil(count + increment); // For no decimals;
           setTimeout(updateCount,1)
       }else{
         count.innerText = target;
       }
   };
   updateCount()
});
