




// 1️ SELECT ELEMENTS
const send = document.getElementById("send-btn");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

// 2️ API KEY


// 3️⃣ DEFINE FUNCTION (THIS FIXES THE ERROR)
function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}


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
