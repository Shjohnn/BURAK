import dotenv from 'dotenv';
dotenv.config();


console.log('PORT:' ,process.env.PORT)
console.log("mongo url:", process.env.MONGO_URL)