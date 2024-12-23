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
  if (text.includes('안녕') || text.includes('同学们好')) {
    response = '同学们은 학생이라는 뜻의 同学 통쉐 + ~들 이라는 们 먼 과 만나 학생들이라는 뜻의 통쉐먼이 되었어요!  ';
  } else if (text.includes('선생님') || text.includes('안녕하세요')|| text.includes('老师')) {
    response = '你好가 안녕이라고 배웠는데 여기에 老师 라오슬 선생님을 붙히면 선생님안녕하세요가 돼요!';
  }else if (text.includes('소개') || text.includes('해주세요')|| text.includes('请介绍一下')) {
    response = '请 + 사람 + 행동은 ~해주세요. 를 의미해요! 더해서 一下 이시아 한다면 좀더 정중한 의미에요!  ';
  }else if (text.includes('이름') || text.includes('제이름은')|| text.includes('我叫')) {
    response = '我 워 는 나, 叫 찌아오는 부르다 = 제 이름은 ~에요가 돼요! 그래서 我叫 다음 각자이름을 넣어 말해봐요!';
  }else if (text.includes('어느') || text.includes('나라')|| text.includes('사람')|| text.includes('你是哪国人')) {
    response = '우리 哪가 어느라고 배웠죠? 어디라고도 해석 돼요! 国 궈 는 나라, 人 러언 은 사람, 합치면 어느나라사람이니? 你是哪国人？니슬나구어런 이라고 읽으면 돼요!';
  }else if (text.includes('나는') || text.includes('한국')|| text.includes('韩国')|| text.includes('我是')|| text.includes('韩国人')) {
    response = '나는 한국 사람이에요. 라는 말을 중국어로 한다면 我是韩国人。이라 쓰고 한구어러언 이라고 읽어요!';
  }
   else {
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
