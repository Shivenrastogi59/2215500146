import fetch from "node-fetch";

const url = "http://20.244.56.144/evaluation-service/register";

const payload = {
  email: "shiven.rastogi_cs.aiml22@gla.ac.in",
  name: "Shiven Rastogi",
  mobileNo: "7379889236",
  githubUsername: "Shivenrastogi59",
  rollNo: "2215500146",
  collegeName: "GLA University, Mathura",
  accessCode: "CNneGT"
};

fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload)
})
  .then(res => res.json())
  .then(data => {
    console.log("✅ Registered:", data);
    // Store your clientID and clientSecret securely
  })
  .catch(err => {
    console.error("❌ Error:", err);
  });
