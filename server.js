import express from "express";
const port=3000;
const app=express();
app.use(express.static("public"));
app.get("/",(req,res)=>
{
    res.render("index.html");
})
app.listen(port,()=>
{
    console.log(`The server is running on port ${port}`);
}
)