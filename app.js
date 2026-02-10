// const chatBox = document.querySelector("chat-box")
// console.log("hello");
// const send = document.getElementById("send-btn");
// const input = document.getElementById("user-input")
// const head=document.querySelector("head")

// sendBtn.addEventListener("click", () => {

//   // hide welcome message
//   welcome.style.display = "none";

//   // now show user message
//   addMessage(input.value, "user");

// });

// const ApiKey = "sk-or-v1-XXXXXXXXXXX";
// const MODEL = "";

// async function askAI(prompt) {
//     try {
//         const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
//             method: "POST",
//             headers: {
//                 "Authorization": `Bearer ${ApiKey}`,
//                 "Content-Type": "application/json",
//                 "HTTP-Referer": "http://localhost",  
//                 "X-Title": "My Test App"
//             },
//             body: JSON.stringify({
//                 model: MODEL,
//                 messages: [{ role: "user", content: prompt }],
//                 temperature: 0.7,
//                 max_tokens: 200
//             })
//         });

//         if (!res.ok) {
//             const err = await res.json();
//             console.log("Error:", err.error?.message || res.status);
//             return;
//         }

//         const data = await res.json();
//         let reply = data.choices?.[0]?.message?.content;
//         console.log("AI reply:", reply);
//     } catch (e) {
//         console.log("Fetch fail:", e.message);
//     }
// }

// For Test 
// askAI("Elon Musk ke baare mein 50 words mein bata");



// jsonplaceholder users fetch (testing ke liye tha)
// async function getUsers() {
//     try {
//         loading.textContent = 'loading...'
//         let response = await fetch("https://jsonplaceholder.typicode.com/users")
//         let data = await response.json();
//         loading.textContent = " "

//         container.innerHTML = data.map(item => `
//             <h2>${item.name}</h2>
//             <div class="user-info"><span class="label">Username:</span> ${item.username}</div>
//             <div class="user-info"><span class="label">Email:</span> ${item.email}</div>
//             <div class="user-info"><span class="label">Phone:</span> ${item.phone}</div>
//         `).join('');
//     } catch (error) {
//         loading.textContent = ""
//         err.textContent = `${error}`
//     }
// }











// send.addEventListener("click", () => {
//   const userMessage = input.value;   // 👈 THIS IS THE USER QUESTION
  
//   if (userMessage === "") return;
//     console.log(userMessage);
// });


// const apiKEy="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"
// fetch('https://openrouter.ai/api/v1/chat/completions', {
//   method: 'POST',
//   headers: {
//     Authorization: `Bearer ${apiKEy}`,
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     model: 'tngtech/deepseek-r1t2-chimera:free',
//     messages: [
//       {
//         role: 'user',
//         content : userMessage
//       }
//     ]
//   })
// })
// .then(res => res.json())
// .then(data => console.log(res.choices[0].message))
// .catch(err => console.log(err));



// asli wala

// const send = document.getElementById("send-btn");
// const input = document.getElementById("user-input");

// const apiKey = "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";

// send.addEventListener("click", () => {
//   const userMessage = input.value.trim();

//   if (userMessage === "") return;

//   console.log(userMessage);

//   fetch('https://openrouter.ai/api/v1/chat/completions', {
//     method: 'POST',
//     headers: {
//       Authorization: `Bearer ${apiKey}`,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       model: 'deepseek/deepseek-r1-0528:free',
//       messages: [
//         {
//           role: 'user',
//           content: userMessage
//         }
//       ]
//     })
//   })
//   .then(res => res.json())
//   .then(data => {
//     console.log(data.choices[0].message.content);
//   })
//   .catch(err => console.log(err));

//   input.value = "";
// });


const apiKey = "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"; // ⚠️ regenerate your key later

// send.addEventListener("click", () => {
//   const userMessage = input.value.trim();
//   if (userMessage === "") return;

//   // ✅ SHOW USER MESSAGE ON SCREEN
//   addMessage(userMessage, "user");

//   input.value = "";

//   // ✅ SHOW TYPING MESSAGE
//   addMessage("AI is typing...", "bot");

//   fetch("https://openrouter.ai/api/v1/chat/completions", {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${apiKey}`,
//       "Content-Type": "application/json",
//       "HTTP-Referer": "http://localhost",
//       "X-Title": "Hackathon Chatbot"
//     },
//     body: JSON.stringify({
//       model: "deepseek/deepseek-r1-0528:free",
//       messages: [
//         {
//           role: "user",
//           content: userMessage
//         }
//       ]
//     })
//   })
//   .then(res => res.json())
//   .then(data => {
//     // ❌ REMOVE "AI is typing..."
//     chatBox.lastChild.remove();

//     // ✅ SHOW AI ANSWER ON SCREEN
//     const aiReply = data.choices[0].message.content;
//     addMessage(aiReply, "bot");
//   })
//   .catch(err => {
//     chatBox.lastChild.remove();
//     addMessage("Something went wrong ❌", "bot");
//   });
// });




// send.addEventListener("click", () => {
//   const userMessage = input.value.trim();
//   if (userMessage === "") return;

//   // ✅ show user message
//   addMessage(userMessage, "user");
//   input.value = "";

//   // ✅ show typing message
//   addMessage("AI is typing...", "bot");

//   fetch("https://openrouter.ai/api/v1/chat/completions", {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${apiKey}`,
//       "Content-Type": "application/json",
//       "HTTP-Referer": "http://localhost",
//       "X-Title": "Hackathon Chatbot"
//     },
//     body: JSON.stringify({
//       model: "deepseek/deepseek-r1-0528:free",
//       messages: [
//         { role: "user", content: userMessage }
//       ]
//     })
//   })
//   .then(res => res.json())
//   .then(data => {

//     // ✅ remove "AI is typing..."
//     if (chatBox.lastChild) {
//       chatBox.lastChild.remove();
//     }

//     // ✅ show AI reply
//     const aiReply = data.choices[0].message.content;
//     addMessage(aiReply, "bot");
//   })
//   .catch(err => {

//     if (chatBox.lastChild) {
//       chatBox.lastChild.remove();
//     }

//     addMessage("Something went wrong ❌", "bot");
//     console.error(err);
//   });
// });



m
// 1️⃣ SELECT ELEMENTS
const send = document.getElementById("send-btn");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

// 2️⃣ API KEY
// const apiKey = "sk-or-v1-XXXX"; // use your key

// 3️⃣ DEFINE FUNCTION (THIS FIXES THE ERROR)
function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// 4️⃣ EVENT LISTENER (USES addMessage)
send.addEventListener("click", () => {
  const userMessage = input.value.trim();
  if (userMessage === "") return;

  addMessage(userMessage, "user");
  input.value = "";

  addMessage("AI is typing...", "bot");

  fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "http://localhost",
      "X-Title": "Hackathon Chatbot"
    },
    body: JSON.stringify({
      model: "deepseek/deepseek-r1-0528:free",
      messages: [
        { role: "user", content: userMessage }
      ]
    })
  })
  .then(res => res.json())
  .then(data => {
    if (chatBox.lastChild) chatBox.lastChild.remove();
    addMessage(data.choices[0].message.content, "bot");
  })
  .catch(err => {
    if (chatBox.lastChild) chatBox.lastChild.remove();
    addMessage("Something went wrong ❌", "bot");
    console.error(err);
  });
});
