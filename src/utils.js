export const speakChaiBot = text => {
  if ('speechSynthesis' in window) {
    const synthesis = window.speechSynthesis;
    const voice = synthesis.getVoices()[20];
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.voice = voice;
    utterance.pitch = 0.9;
    utterance.rate = 0.7;
    utterance.volume = 0.9;

    synthesis.speak(utterance);
  }
};

export const scrollToElementId = id => {
  const el = document.getElementById(id);
  el.scrollIntoView({
    behavior: 'smooth',
  });
};
