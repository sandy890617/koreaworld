// 呼叫瀏覽器內建 Web Speech API 進行韓語語音朗讀
function speak(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // 停止目前播放中的語音
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    utterance.rate = 0.88; // 語速微調，確保店員聽得清楚
    window.speechSynthesis.speak(utterance);
  } else {
    showToast("您的瀏覽器暫不支援語音播放");
  }
}

// 底部輕量 Toast 提示
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.innerText = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}