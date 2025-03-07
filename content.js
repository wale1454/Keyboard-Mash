// List of keyboard sound fx files
const soundFiles = [
  "key-sound-1.mp3",
  "key-sound-2.mp3",
  "key-sound-3.mp3",
  "key-sound-4.mp3",
  "key-sound-5.mp3",
  "key-sound-6.mp3",
  "key-sound-7.mp3",
  "key-sound-8.mp3",
  "key-sound-9.mp3",
  "key-sound-10.mp3",
  "key-sound-11.mp3",
  "key-sound-12.mp3",
  "key-sound-13.mp3",
  "key-sound-14.mp3",
  "key-sound-15.mp3",
  "key-sound-16.mp3",
  "key-sound-17.mp3",
  "key-sound-18.mp3",
  "key-sound-19.mp3",
  "key-sound-20.mp3",
  "key-sound-21.mp3",
  "key-sound-22.mp3",
  "key-sound-23.mp3",
  "key-sound-24.mp3",
  "key-sound-25.mp3"
];

document.addEventListener("keydown", () => {
  // Picks a random sound file from the list
  const randomSound = soundFiles[Math.floor(Math.random() * soundFiles.length)];

  // Create audio element with the correct path
  const sound = new Audio(chrome.runtime.getURL(`sounds/${randomSound}`));
  
  console.log(`Loading sound: sounds/${randomSound}`);

  sound.currentTime = 0; // Restarts sound if already playing
  sound.play()
    .then(() => console.log(`Played: ${randomSound}`))
    .catch(error => console.error("Audio play failed:", error));
});
