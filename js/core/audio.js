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
 * High-fidelity local audio player with loop, volume slider and equalizer animation.
 */
class BGMController {
  constructor() {
    this.isPlaying = false;
    this.volume = parseInt(localStorage.getItem("aov_bgm_vol") || "40", 10);
    this.audioElement = null;
    this.userStarted = false;

    this.initAudioElement();
    this.initUI();
  }

  initAudioElement() {
    this.audioElement = document.getElementById("aov-bgm-audio");
    if (!this.audioElement) {
      this.audioElement = document.createElement("audio");
      this.audioElement.id = "aov-bgm-audio";
      this.audioElement.loop = true;
      this.audioElement.preload = "auto";
      this.audioElement.volume = this.volume / 100;
      this.audioElement.innerHTML = `
        <source src="assets/audio/aov_theme.webm" type="audio/webm">
        <source src="assets/audio/aov_theme.m4a" type="audio/mp4">
      `;
      document.body.appendChild(this.audioElement);
    } else {
      this.audioElement.volume = this.volume / 100;
    }

    this.audioElement.addEventListener("play", () => {
      this.isPlaying = true;
      this.updateUIState(true);
    });

    this.audioElement.addEventListener("pause", () => {
      this.isPlaying = false;
      this.updateUIState(false);
    });
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
      this.btnToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        this.togglePlay();
      });
    }

    // Auto-resume audio on first user click anywhere if desired
    const handleFirstGesture = () => {
      if (window.sounds) window.sounds._init();
      document.removeEventListener("click", handleFirstGesture);
      document.removeEventListener("keydown", handleFirstGesture);
    };
    document.addEventListener("click", handleFirstGesture, { once: true });
    document.addEventListener("keydown", handleFirstGesture, { once: true });
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    if (window.sounds) window.sounds._init();

    if (this.audioElement) {
      this.audioElement.volume = this.volume / 100;
      const playPromise = this.audioElement.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            this.isPlaying = true;
            this.updateUIState(true);
          })
          .catch((err) => {
            console.warn("BGM autoplay blocked by browser policy, click required:", err);
            this.isPlaying = false;
            this.updateUIState(false);
          });
      }
    }
  }

  pause() {
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.isPlaying = false;
    this.updateUIState(false);
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(100, vol));
    localStorage.setItem("aov_bgm_vol", this.volume.toString());

    if (this.audioElement) {
      this.audioElement.volume = this.volume / 100;
    }
  }

  updateUIState(playing) {
    if (this.btnToggle) {
      this.btnToggle.classList.toggle("is-playing", playing);
    }
    if (this.labelEl) {
      this.labelEl.textContent = playing ? "NHẠC NỀN: ĐANG PHÁT" : "BẬT NHẠC NỀN";
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
