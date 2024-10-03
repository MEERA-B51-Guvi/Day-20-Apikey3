fetch("https://jsonplaceholder.typicode.com/users")

.then((response)=>response.json())
.then((data)=>{
   data.forEach(element => {
    const userObject={
        ...element,
        id:element.id,
        name:element.name,
        email:element.email,
        contactnumber:element.phone,
    };
    creatUserdetails(userObject);
    //console.log(userObject);
    console.log(data.length);
    
   });
});

function creatUserdetails(element){
  
    document.body.innerHTML+=`
     <div class="card" style="width: 18rem;">
    <div class="card-body">
      <p>Id:${element.id}</p>
      <p>Name:${element.name}</p>
      <p>Email:${element.email}</p>
      <p>Phnoe Number:${element.phone}</p>
     
    </div>
  </div>`;
 

}




