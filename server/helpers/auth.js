const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const hashPassword = (password)=>{
    return new Promise((resolve,reject)=>{
        bcrypt.genSalt(1,(err,salt)=>{
            if(err){
                reject(err)
            }
            bcrypt.hash(password,salt,(err,hash)=>{
                if(err){
                    reject(err)
                }resolve(hash)
            })
        })
    })
}
const comparePassword = (password,hashed)=>{
    return bcrypt.compare(password,hashed)
}



const authenticate = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'Please authenticate.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (e) {
    res.status(401).json({ error: 'Please authenticate.' });
  }
};





module.exports = {
    hashPassword,comparePassword,authenticate
}