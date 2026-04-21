const API = 'http://localhost:3000/api/afterlife';

const messageForm = document.getElementById('messageForm');
const messageList = document.getElementById('messageList');
const refreshButton = document.getElementById('refreshButton');

async function loadMessages() {
  const response = await fetch(API);
  const data = await response.json();

  messageList.innerHTML = '';

  data.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'message-item';
    li.innerHTML = `
      <strong>${item.owner}</strong> → ${item.beneficiary}<br>
      <span>${item.message}</span><br>
      <small>Unlocks: ${item.unlockDate} | Status: ${item.status}</small>
    `;
    messageList.appendChild(li);
  });
}

messageForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const payload = {
    owner: document.getElementById('owner').value,
    beneficiary: document.getElementById('beneficiary').value,
    message: document.getElementById('message').value,
    unlockDate: document.getElementById('unlockDate').value,
  };

  const response = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.json();
    alert(JSON.stringify(error, null, 2));
    return;
  }

  messageForm.reset();
  loadMessages();
});

refreshButton.addEventListener('click', loadMessages);

loadMessages();
