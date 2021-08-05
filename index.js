const submitData = function(userName, userEmail) {
    return fetch("http://localhost:3000/users",{
        method:"POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({name: "Steve", email: "steve@steve.com"})
    })
    .then((res) => res.json())
    .then(function(obj){
        const newId = document.createElement('div');
        newId.innerHTML = obj.id;
        document.body.append(newId);
    })
    .catch((error) => {
        alert("Error");
        //console.log(error.message);
        const newEr = document.createElement('span')
        newEr.innerHTML = error;
        document.body.append(newEr)
})
}


