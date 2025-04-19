const express = require('express');
const app = express();

const  bcryptjs= require('bcryptjs');

const { urlencoded } = require('body-parser');
app.use(urlencoded({extended:false}));  
app.use(express.json());

app.post('/login', async (req,res) => {
    const user = req.body.user;
    const password = req.body.password;
    if (user == 'admin' && password == '12345'){
       let passwordHash= await bcryptjs.hash(password, 8);
        res.json({
            message:'anduvo',
            passwordHash: passwordHash
        });
    }else{
        res.json({
            message:'ingrese correctamente sus credenciales'
        });
    }
})

app.get('/compare', (req,res)=>{
    let hashSaved = '$2b$08$P26ptAh9B4DDnMJx1IU5WO.ns7hgpEpw.S3Pd1mHzcZ0Lz6Th4LQS';
    let compare = bcryptjs.compareSync('12345', hashSaved);
    if (compare){
        res.json('ok');
    }
    else {
        res.json('No son iguales');
    }

});
app.listen(3000, ()=>{
    console.log ('servidor prendido')
})