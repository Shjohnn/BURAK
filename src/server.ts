import dotenv from 'dotenv';
dotenv.config();

import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

import mongosse from 'mongoose';
mongosse.connect(process.env.MONGO_URL as string, {})
.then((data) =>{
    console.log("MongoDB connected succesfully!");
    const PORT = process.env.PORT ?? 3003
})
.catch((err) => console.log("Error on connecting MongoDB",err))