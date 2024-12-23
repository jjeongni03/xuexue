var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.onresult = function(event) {
  var last = event.results.length - 1;
  var text = event.results[last][0].transcript;
  var lang = selectLanguage(text); // 입력된 언어 감지 및 선택
  addMessage(text, 'user');
  handleConversation(text, lang); // 선택된 언어를 기반으로 대화 처리
};

var messages = document.getElementById('messages');
var userInput = document.getElementById('user-input');


document.getElementById('send-btn').onclick = function() {
  var text = userInput.value;
  addMessage(text, 'user');
  handleConversation(text);
  userInput.value = '';
};

userInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("send-btn").click();
  }
});


document.getElementById('start-recognition').onclick = function() {
  recognition.lang = selectLanguage();
  recognition.start();
};

document.getElementById('stop-recognition').onclick = function() {
  recognition.stop();
};

recognition.onresult = function(event) {
  var last = event.results.length - 1;
  var text = event.results[last][0].transcript;
  addMessage(text, 'user');
  handleConversation(text);
};

function addMessage(text, sender) {
  var messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.classList.add(sender + '-message');
  messageDiv.textContent = text;
  messages.appendChild(messageDiv);
  messages.scrollTop = messages.scrollHeight;
}

 // 페이지 로드 시 인사 메시지 추가
 window.addEventListener('DOMContentLoaded', function() {
  var greeting = "안녕하세요! 시작 버튼을 눌러 말하거나 채팅창에 입력해주세요!"; // 인사 메시지
  addMessage(greeting, 'bot');
  speak(greeting);
}, { once: true });

function handleConversation(text) {
  var response = '';
  if (text.includes('안녕') || text.includes('你好')) {
    response = '你好! 안녕이라는 뜻이에요! nĭhăo 를보면 3성 + 3성이에요. 근데 둘이 만나면 2성 + 3성으로 발음 해야해요!';
  } else if (text.includes('다시') || text.includes('너가')|| text.includes('말해줘')) {
    response = '다시 2성 + 3성을 발음해 봐요! 你好!';
  } else {
    response = '죄송합니다, 제가 이해하지 못했어요. 다른 말씀을 해주시겠어요？';
  }
  response = response.replace(/\n/g, '<br>'); 
  addMessage(response, 'bot');
  speak(response);
}

function speak(text) {
  var utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = selectLanguage();
  speechSynthesis.speak(utterance);
}

function selectLanguage() {
  // 사용자 브라우저 언어 확인
  var userLang = navigator.language || navigator.userLanguage;
  if (userLang.includes('zh')) {
    return 'zh-CN'; // 중국어
  } else {
    return 'ko-KR'; // 한국어 (기본값)
  }
}
