const express=require("express");
const app=express();
const mongoose = require('mongoose');
const Chats = require('./Models/chat');
let port=3001;
const path=require("path");
app.use(express.urlencoded({ extended: true }));
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"))
app.use(express.static(path.join(__dirname, "public")));
main().then(console.log("connection established")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Messanger');
}

app.listen(port,()=>{
    console.log("working on 3001");
    
})

app.get("/chats",async(req,res)=>{
    const msgs= await Chats.find();
    res.render("showchats",{msgs});
})

app.get("/chats/new",(req,res)=>{
    res.render("createchat");
})

app.post("/chats",(req,res)=>{
    let{from,to,message,CreatedAt}=req.body;
    let newChat=Chats({
        from:from,
        to:to,
        message:message,
        deliveredAt:CreatedAt,
    });
    newChat.save();
    res.redirect("/chats");
})

app.get("/chats/:id/edit", async (req, res) => {
    let {id}=req.params;
      let chat=await Chats.findById(id);
      res.render("editchat",{chat}); 
})

app.post("/chats/:id", async (req, res) => {
    const { id } = req.params;
    const { from, to, message, createdAt } = req.body;
  
    try {
      await Chats.findByIdAndUpdate(id, {
        from: from,
        to: to,
        message: message,
        createdAt: createdAt,
      });
      res.redirect("/chats");
    } catch (err) {
      console.error("Error updating chat:", err);
      res.status(500).send("Server Error");
    }
  });

  app.post("/chats/:id/delete", async (req, res) => {
    const { id } = req.params;
  
    try {
      await Chats.findByIdAndDelete(id); // Delete the chat by ID
      res.redirect("/chats");            // Redirect to chats list
    } catch (err) {
      console.error("Error deleting chat:", err);
      res.status(500).send("Server Error");
    }
  });