const express=require("express")
const users=require("./Users.json")
const app=express();

const PORT=6666;

app.get("/users",(request,response)=>{
    return response.json(users);
})
app.get("/users/:id", (request, response) => {
    const id = request.params.userId;
    const userID = users.find((user) => user.id ===id);

    if (!userID) {
        // If no user is found with the given ID, send a 404 error with a message
        return response.status(404).json({ error: "User not found" });
    }

    // If the user is found, return the user data
    return response.json(userID);
});

app.listen(PORT,()=>{
    console.log(`My Server is running on ${PORT} number`)
})
// app.get("/get",(request,response)=>{
//     response.send("Welcome to GNIT college")
// })
// app.get("/getAll",(request,response)=>{
//     response.json("It is getAll end point")
// })
// app.post("/post",(request,response)=>{
//     response.send("this is post method")
// })
// app.put("/put",(request,response)=>{
//     response.send("This is put method")
// })
// app.delete("/delete",(request,response)=>{
//     response.send("This is delete method")
// })

// app.listen(PORT,()=>{
//     console.log(`My Server is running on ${PORT} number`)
// })

