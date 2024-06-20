import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) =>{
  const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: '15d'}); //jwt.sign- takes the payload that will be embedded in the jwt token, the secret key, and the options object. The options object has the expiresIn property which is set to 15 days.

  res.cookie("jwt",token,{
    maxAge: 15*24*60*60*1000, //15 days , maxAge is in milliseconds format
    httpOnly: true, //cookie is not accessible via client side javascript, prevent XSS attacks cross site scripting attacks
    sameSite:"strict", //cookie is sent only to the same site, CSRF attacks cross site request forgery attacks
    secure: process.env.NODE_ENV !== "development" //cookie is sent only over https in production environment
  })
}

export default generateTokenAndSetCookie;