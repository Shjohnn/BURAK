import express from 'express';
import path from 'path';

// 1-ENTERANCE
const app=express();
console.log(__dirname)
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// 2-SESSIONS

//3-VEIWS
app.set('views',path.join(__dirname, "views"));
app.set("view engine", 'ejs');

//4-ROUTES

export default app;  //module.exports 