import fetch from "node-fetch";

const registerUrl = "http://20.244.56.144/evaluation-service/register";
const authUrl = "http://20.244.56.144/evaluation-service/auth";

const registerPayload = {
  email: "shiven.rastogi_cs.aiml22@gla.ac.in",
  name: "Shiven Rastogi",
  mobileNo: "7379889236",
  githubUsername: "Shivenrastogi59",
  rollNo: "2215500146",
  collegeName: "GLA University, Mathura",
  accessCode: "CNneGT"
};

fetch(registerUrl, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(registerPayload)
})
  .then(res => res.json())
  .then(data => {
    console.log("✅ Registered:", data);

    
    const authPayload = {
      email: registerPayload.email,
      name: registerPayload.name,
      rollNo: registerPayload.rollNo,
      accessCode: registerPayload.accessCode,
      clientID: "d9cbcb59-6a27-44a5-8d59-8b1befa816da", 
      clientSecret: "tVJaaaRBSeXcRXeM" 

    };

    return fetch(authUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(authPayload)
    });
  })
  .then(res => res.json())
  .then(authData => {
    console.log("🔐 Token received:", authData);
  })
  .catch(err => {
    console.error("Error:", err);
  });
