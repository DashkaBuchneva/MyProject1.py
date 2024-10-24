// Скрипт для окна сверху с ошибками
let messagesContainer = document.querySelector('.messages-container');
let messagesList = document.querySelector('.messages');

if (messagesList) {
  if (messagesList.children.length > 0) {
    messagesContainer.classList.add('show');
    setTimeout(function() {
      messagesContainer.classList.add('hide');
      messagesContainer.classList.remove('show');
    }, 2000);
  }
}

