const mongoose = require('mongoose')
const Chats = require('./Models/chat')

main().then(console.log("connection established")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Messanger');
}

const chatMessages = [
    
    {
      id: "1",
      from: "alice_johnson",
      to: "michael_smith",
      message: "Hey Michael! I hope you're doing well. I wanted to check in and see if you were able to review the project proposal I sent last week. Let me know if you need any additional information.",
      createdAt: new Date("2024-12-01T09:45:00Z"),
    },
    {
      id: "2",
      from: "michael_smith",
      to: "alice_johnson",
      message: "Hi Alice! Thanks for reaching out. I did get a chance to look over the proposal. I think the overall structure looks promising, but there are a few sections where we might want to add more details, especially around timelines and resource allocation.",
      createdAt: new Date("2024-12-01T09:50:00Z"),
    },
    
    
    {
      id: "5",
      from: "james_brown",
      to: "emily_davis",
      message: "Hi Emily, I wanted to follow up on our last team meeting. Have we finalized the design specs for the upcoming app update? We’re aiming to start development next week, so having those documents ready would be great.",
      createdAt: new Date("2024-12-02T11:15:00Z"),
    },
    {
      id: "6",
      from: "emily_davis",
      to: "james_brown",
      message: "Hey James! Thanks for reminding me. We’re almost done with the final specs. I just need to get approval from the product manager. You should have the completed documents by Thursday at the latest.",
      createdAt: new Date("2024-12-02T11:25:00Z"),
    },
    {
      id: "7",
      from: "david_clark",
      to: "sophia_wilson",
      message: "Hi Sophia, just checking in. Have you had a chance to prepare the marketing campaign overview for the product launch? We’re hoping to present it to the executive team early next week.",
      createdAt: new Date("2024-12-03T14:00:00Z"),
    },
    {
      id: "8",
      from: "sophia_wilson",
      to: "david_clark",
      message: "Hi David! I’ve drafted the initial overview, but I’m still gathering some market research data to strengthen our strategy. I’ll have the finalized version ready by Friday. Thanks for your patience!",
      createdAt: new Date("2024-12-03T14:10:00Z"),
    },
    {
      id: "9",
      from: "oliver_martin",
      to: "lisa_taylor",
      message: "Hey Lisa, I’m working on the client onboarding process guide. Could you send me the most recent customer feedback reports? I want to include some real-world examples in the documentation.",
      createdAt: new Date("2024-12-04T16:20:00Z"),
    },
    {
      id: "10",
      from: "lisa_taylor",
      to: "oliver_martin",
      message: "Hi Oliver! Sure, I’ll compile the latest reports and email them to you by the end of the day. Let me know if you need additional data points!",
      createdAt: new Date("2024-12-04T16:35:00Z"),
    },
  ];
  
  Chats.insertMany(chatMessages)
  .then(() => console.log("Chat messages inserted successfully"))
  .catch((err) => console.error("Error inserting chat messages:", err));