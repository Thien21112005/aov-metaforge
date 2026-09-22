/**
 * AOV MetaForge - Procedural Sound Synthesizer & BGM Orchestrator
 * Pure Web Audio mathematical synthesis + Arena of Valor Official Theme BGM player.
 */

class SoundController {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  _init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  playClick() {
    if (this.muted) return;
    this._init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(160, this.ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  playHover() {
    if (this.muted) return;
    this._init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(1100, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.025);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.025);
  }

  playRollTick() {
    if (this.muted) return;
    this._init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(750 + Math.random() * 250, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(180, this.ctx.currentTime + 0.035);
    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.005, this.ctx.currentTime + 0.035);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.035);
  }

  playCardStop() {
    if (this.muted) return;
    this._init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(45, this.ctx.currentTime + 0.18);
    gain.gain.setValueAtTime(0.35, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.005, this.ctx.currentTime + 0.18);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.18);
  }

  playLegendaryFanfare() {
    if (this.muted) return;
    this._init();
    if (!this.ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, idx) => {
      const startTime = this.ctx.currentTime + idx * 0.07;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, startTime);
      gain.gain.setValueAtTime(0.22, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.45);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + 0.45);
    });
  }

  playBanSound() {
    if (this.muted) return;
    this._init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(240, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(60, this.ctx.currentTime + 0.28);
    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.005, this.ctx.currentTime + 0.28);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.28);
  }

  playPickSound() {
    if (this.muted) return;
    this._init();
    if (!this.ctx) return;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc1.type = "sine";
    osc2.type = "triangle";
    osc1.frequency.setValueAtTime(440, this.ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.16);
    osc2.frequency.setValueAtTime(660, this.ctx.currentTime);
    osc2.frequency.exponentialRampToValueAtTime(1320, this.ctx.currentTime + 0.16);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.22);
    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.ctx.destination);
    osc1.start();
    osc2.start();
    osc1.stop(this.ctx.currentTime + 0.22);
    osc2.stop(this.ctx.currentTime + 0.22);
  }

  playWarningSound() {
    if (this.muted) return;
    this._init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "square";
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.setValueAtTime(160, this.ctx.currentTime + 0.07);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.005, this.ctx.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }
}

/**
 * Arena of Valor Official Theme BGM Controller
 * Features seamless background playback with volume slider and equalizer animation.
 */
class BGMController {
  constructor() {
    this.isPlaying = false;
    this.volume = parseInt(localStorage.getItem("aov_bgm_vol") || "35", 10);
    this.ytPlayer = null;
    this.isYtReady = false;
    this.audioElement = null;

    this.initAudioElement();
    this.loadYouTubeIframe();
    this.initUI();
  }

  initAudioElement() {
    this.audioElement = document.getElementById("aov-bgm-audio");
    if (!this.audioElement) {
      this.audioElement = document.createElement("audio");
      this.audioElement.id = "aov-bgm-audio";
      this.audioElement.loop = true;
      this.audioElement.volume = this.volume / 100;
      document.body.appendChild(this.audioElement);
    }
  }

  loadYouTubeIframe() {
    // Hidden container for YouTube Player API
    let ytContainer = document.getElementById("yt-bgm-container");
    if (!ytContainer) {
      ytContainer = document.createElement("div");
      ytContainer.id = "yt-bgm-container";
      ytContainer.style.position = "fixed";
      ytContainer.style.width = "1px";
      ytContainer.style.height = "1px";
      ytContainer.style.left = "-9999px";
      ytContainer.style.top = "-9999px";
      ytContainer.style.opacity = "0";
      ytContainer.style.pointerEvents = "none";
      ytContainer.innerHTML = '<div id="yt-player-target"></div>';
      document.body.appendChild(ytContainer);
    }

    // Load YouTube API script
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // YouTube API callback
    window.onYouTubeIframeAPIReady = () => {
      this.ytPlayer = new window.YT.Player("yt-player-target", {
        height: "1",
        width: "1",
        videoId: "g4yM1h-b4lI", // Hans Zimmer & Lorne Balfe - Arena of Valor Main Theme
        playerVars: {
          autoplay: 0,
          controls: 0,
          loop: 1,
          playlist: "g4yM1h-b4lI",
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: (event) => {
            this.isYtReady = true;
            event.target.setVolume(this.volume);
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              this.isPlaying = true;
              this.updateUIState(true);
            } else if (
              event.data === window.YT.PlayerState.PAUSED ||
              event.data === window.YT.PlayerState.ENDED
            ) {
              this.isPlaying = false;
              this.updateUIState(false);
            }
          },
        },
      });
    };
  }

  initUI() {
    this.btnToggle = document.getElementById("btn-bgm-toggle");
    this.volSlider = document.getElementById("bgm-volume-slider");
    this.eqVisualizer = document.getElementById("bgm-eq-visualizer");
    this.labelEl = document.getElementById("bgm-status-label");

    if (this.volSlider) {
      this.volSlider.value = this.volume;
      this.volSlider.addEventListener("input", (e) => {
        this.setVolume(parseInt(e.target.value, 10));
      });
    }

    if (this.btnToggle) {
      this.btnToggle.addEventListener("click", () => {
        this.togglePlay();
      });
    }

    // Auto-resume on first user click if preferred
    document.addEventListener("click", () => {
      if (window.sounds) window.sounds._init();
    }, { once: true });
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    if (this.isYtReady && this.ytPlayer && typeof this.ytPlayer.playVideo === "function") {
      try {
        this.ytPlayer.setVolume(this.volume);
        this.ytPlayer.playVideo();
        this.isPlaying = true;
        this.updateUIState(true);
        return;
      } catch (e) {
        console.warn("YouTube play fallback:", e);
      }
    }

    // Fallback to local / HTML5 audio
    if (this.audioElement) {
      this.audioElement.play().then(() => {
        this.isPlaying = true;
        this.updateUIState(true);
      }).catch((e) => {
        console.log("Audio waiting for user gesture:", e);
      });
    }
  }

  pause() {
    if (this.isYtReady && this.ytPlayer && typeof this.ytPlayer.pauseVideo === "function") {
      try {
        this.ytPlayer.pauseVideo();
      } catch (e) {
        console.warn("YouTube pause fallback:", e);
      }
    }

    if (this.audioElement) {
      this.audioElement.pause();
    }

    this.isPlaying = false;
    this.updateUIState(false);
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(100, vol));
    localStorage.setItem("aov_bgm_vol", this.volume.toString());

    if (this.isYtReady && this.ytPlayer && typeof this.ytPlayer.setVolume === "function") {
      this.ytPlayer.setVolume(this.volume);
    }
    if (this.audioElement) {
      this.audioElement.volume = this.volume / 100;
    }
  }

  updateUIState(playing) {
    if (this.btnToggle) {
      this.btnToggle.classList.toggle("is-playing", playing);
    }
    if (this.labelEl) {
      this.labelEl.textContent = playing ? "NHẠC NỀN: ĐANG PHÁT" : "NHẠC NỀN: TẠM DỪNG";
    }
    if (this.eqVisualizer) {
      this.eqVisualizer.classList.toggle("active", playing);
    }
  }
}

const sounds = new SoundController();
let bgm = null;

document.addEventListener("DOMContentLoaded", () => {
  bgm = new BGMController();
  window.bgm = bgm;
});
