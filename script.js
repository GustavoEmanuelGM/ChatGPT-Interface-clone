const sidebar = document.querySelector(".sidebar")
const openBtn = document.querySelector(".open-btn")
const closeBtn = document.querySelector(".close-btn")
const newChatBtn = document.querySelector(".new-chat-btn")

openBtn.addEventListener("click", open)
closeBtn.addEventListener("click", close)

function open() {
  sidebar.classList.remove("collapsed")
  openBtn.classList.add("none")
  newChatBtn.classList.add("none")
}

function close() {
  sidebar.classList.add("collapsed")
  openBtn.classList.remove("none")
  newChatBtn.classList.remove("none")
}