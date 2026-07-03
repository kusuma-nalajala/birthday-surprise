// For Sandhya - Birthday Surprise Controller script
document.addEventListener("DOMContentLoaded", () => {
    // UI Elements
    const audioBtn = document.getElementById("audio-toggle");
    const testAudioInput = document.getElementById("test-audio-opt");
    const gateScreen = document.getElementById("gate-screen");
    const openGateBtn = document.getElementById("open-gate-btn");
    const videoScreen = document.getElementById("video-screen");
    const wishScreen = document.getElementById("wish-screen");
    const cakeScreen = document.getElementById("cake-screen");
    const candle = document.getElementById("candle-flame");
    const smokeContainer = document.getElementById("smoke-container");
    const letterPaper = document.getElementById("letter-paper");
    const openLetterBtn = document.getElementById("open-letter-btn");
    const returnLettersBtn = document.getElementById("close-letter-btn");
    const polaroids = document.querySelectorAll(".polaroid-card");
    const slideTrack = document.getElementById("slide-track");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prev-slide");
    const nextBtn = document.getElementById("next-slide");
    const playPauseBtn = document.getElementById("play-pause-slide");
    const slideProgress = document.getElementById("slide-progress-bar");
    let soundEnabled = false;

const bgMusic = new Audio("adhento.mp3");
    bgMusic.loop = true;
    bgMusic.volume = 0.5;
    // Audio Context Setup for Synthesizer (Zero-dependency fallback music)
    // let audioCtx = null;
    // let synthInterval = null;
    // let soundEnabled = false;

    // // Beautiful synthesized romantic melody
    // // Sweet, ambient, soft chime notes (frequency, duration, delay)
    // const melody = [
    //     { note: 261.63, dur: 0.8, delay: 0 },    // C4
    //     { note: 329.63, dur: 0.8, delay: 0.8 },  // E4
    //     { note: 392.00, dur: 0.8, delay: 1.6 },  // G4
    //     { note: 493.88, dur: 1.2, delay: 2.4 },  // B4
    //     { note: 440.00, dur: 0.8, delay: 3.6 },  // A4
    //     { note: 392.00, dur: 0.8, delay: 4.4 },  // G4
    //     { note: 349.23, dur: 0.8, delay: 5.2 },  // F4
    //     { note: 329.63, dur: 1.2, delay: 6.0 },  // E4

    //     { note: 293.66, dur: 0.8, delay: 7.2 },  // D4
    //     { note: 349.23, dur: 0.8, delay: 8.0 },  // F4
    //     { note: 440.00, dur: 0.8, delay: 8.8 },  // A4
    //     { note: 523.25, dur: 1.2, delay: 9.6 },  // C5
    //     { note: 493.88, dur: 0.8, delay: 10.8 }, // B4
    //     { note: 392.00, dur: 0.8, delay: 11.6 }, // G4
    //     { note: 329.63, dur: 0.8, delay: 12.4 }, // E4
    //     { note: 293.66, dur: 1.2, delay: 13.2 }  // D4
    // ];

    // function startSynthMelody() {
    //     if (!audioCtx) {
    //         audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    //     }
    //     if (audioCtx.state === 'suspended') {
    //         audioCtx.resume();
    //     }

    //     let melodyDuration = 14.4; // seconds total loop
    //     function playChime(freq, onset, duration) {
    //         const osc = audioCtx.createOscillator();
    //         const gainNode = audioCtx.createGain();

    //         osc.connect(gainNode);
    //         gainNode.connect(audioCtx.destination);

    //         osc.frequency.setValueAtTime(freq, onset);
    //         osc.type = 'sine'; // pure, sweet chime sound

    //         gainNode.gain.setValueAtTime(0, onset);
    //         gainNode.gain.linearRampToValueAtTime(0.12, onset + 0.05); // low volume, ambient
    //         gainNode.gain.exponentialRampToValueAtTime(0.001, onset + duration);

    //         osc.start(onset);
    //         osc.stop(onset + duration + 0.1);
    //     }

    //     function playSequence() {
    //         const now = audioCtx.currentTime;
    //         melody.forEach(item => {
    //             playChime(item.note, now + item.delay, item.dur);
    //         });
    //     }

    //     playSequence();
    //     synthInterval = setInterval(playSequence, melodyDuration * 1000);
    // }

    // function stopSynthMelody() {
    //     if (synthInterval) {
    //         clearInterval(synthInterval);
    //         synthInterval = null;
    //     }
    //     if (audioCtx) {
    //         audioCtx.suspend();
    //     }
    // }
    function toggleSound() {

        soundEnabled = !soundEnabled;

        if (soundEnabled) {

            // bgMusic.play();
            bgMusic.play()
    .then(() => console.log("Music playing"))
    .catch(err => console.log(err));

            audioBtn.classList.remove("muted");

            audioBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 text-gold">
                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.063.922-2.063 2.063v4.875c0 1.141.922 2.062 2.063 2.062h1.932l4.5 4.5c.944.945 2.56.276 2.56-1.06V4.06z"/>
            </svg>
        `;

            audioBtn.style.animation = "soft-pulse 2s infinite";

        } else {

            bgMusic.pause();

            audioBtn.classList.add("muted");

            audioBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 text-cream opacity-50">
                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.063.922-2.063 2.063v4.875c0 1.141.922 2.062 2.063 2.062h1.932l4.5 4.5c.944.945 2.56.276 2.56-1.06V4.06z"/>
            </svg>
        `;

            audioBtn.style.animation = "none";
        }
    }
    // function toggleSound() {
    //     soundEnabled = !soundEnabled;
    //     if (soundEnabled) {
    //         audioBtn.classList.remove("muted");
    //         audioBtn.innerHTML = `
    //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-gold">
    //                 <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.063.922-2.063 2.063v4.875c0 1.141.922 2.062 2.063 2.062h1.932l4.5 4.5c.944.945 2.56.276 2.56-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
    //             </svg>
    //         `; // Note: using muted icon for click-to-mute, show play state (sound is outputting, next click silences it)
    //         audioBtn.style.animation = "soft-pulse 2s infinite";
    //         startSynthMelody();
    //     } else {
    //         audioBtn.classList.add("muted");
    //         audioBtn.innerHTML = `
    //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-cream opacity-50">
    //                 <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.063.922-2.063 2.063v4.875c0 1.141.922 2.062 2.063 2.062h1.932l4.5 4.5c.944.945 2.56.276 2.56-1.06V4.06z" />
    //             </svg>
    //         `;
    //         audioBtn.style.animation = "none";
    //         stopSynthMelody();
    //     }
    // }

    audioBtn.addEventListener("click", toggleSound);

    // Floating Romantic Petals & Flowers Rain
    const particlesContainer = document.body;
    function createPetals() {
        const isPetal = Math.random() > 0.45; // 55% CSS gradient rose petals, 45% emoji blooms
        const petalEl = document.createElement("div");
        petalEl.className = "petal-particle";

        const size = Math.random() * 14 + 10; // width 10px to 24px
        petalEl.style.width = size + "px";
        petalEl.style.height = (size * 1.3) + "px";

        if (!isPetal) {
            const flowerList = ['🌸', '🌹', '🌺', '💮', '💖', '💐'];
            petalEl.innerText = flowerList[Math.floor(Math.random() * flowerList.length)];
            petalEl.style.background = 'none';
            petalEl.style.fontSize = (size + 4) + "px";
            petalEl.style.display = 'flex';
            petalEl.style.alignItems = 'center';
            petalEl.style.justifyContent = 'center';
            petalEl.style.boxShadow = 'none';
        } else {
            // Gradient overlays mimicking red roses/pink blossoms
            const gradients = [
                'linear-gradient(135deg, #d81b60, #880e4f)',
                'linear-gradient(135deg, #ff4081, #c2185b)',
                'linear-gradient(135deg, #ff80ab, #d81b60)',
                'linear-gradient(135deg, #ad1457, #6a0035)'
            ];
            petalEl.style.background = gradients[Math.floor(Math.random() * gradients.length)];
            petalEl.style.borderRadius = '160px 10px 160px 10px';
        }

        petalEl.style.left = (Math.random() * 98) + "vw";
        const duration = Math.random() * 5 + 6.5; // slow romantic descent: 6.5s to 11.5s
        const sway = (Math.random() * 160 - 80) + "px"; // sway breadth
        petalEl.style.setProperty('--sway-distance', sway);
        petalEl.style.animationDuration = duration + "s";

        particlesContainer.appendChild(petalEl);

        setTimeout(() => {
            petalEl.remove();
        }, duration * 1000);
    }
    // High density flower shower
    setInterval(createPetals, 320);

    // Intro Screen -> Cinematic Slideshow Transition
    openGateBtn.addEventListener("click", () => {
        gateScreen.classList.add("fade-out");
        setTimeout(() => {
            gateScreen.classList.add("hidden");
            videoScreen.classList.remove("hidden");
            videoScreen.classList.add("fade-in");
            // Auto start sound on click to engage user
            toggleSound();
            startSlideshow();
        }, 800);
    });

    // Cinematic Slideshow Logic
    let currentSlide = 0;
    let slideInterval = null;
    let isPlaying = false;
    const slideDuration = 4500; // time per slide

    function updateSlides() {
        slides.forEach((slide, idx) => {
            slide.classList.remove("active");
            if (idx === currentSlide) {
                slide.classList.add("active");
            }
        });
        // Update progress bar
        slideProgress.style.width = "0%";
        if (isPlaying) {
            slideProgress.style.transition = "none";
            setTimeout(() => {
                slideProgress.style.transition = `width ${slideDuration}ms linear`;
                slideProgress.style.width = "100%";
            }, 50);
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        // If slideshow finishes, automatically transition to next stage (Wish section)
        if (currentSlide === 0) {
            stopSlideshow();
            transitionToCake();
        } else {
            updateSlides();
        }
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlides();
    }

    function startSlideshow() {
        isPlaying = true;
        updateSlides();
        playPauseBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clip-rule="evenodd" />
            </svg>
        `;
        slideInterval = setInterval(nextSlide, slideDuration);
    }

    function stopSlideshow() {
        isPlaying = false;
        if (slideInterval) {
            clearInterval(slideInterval);
            slideInterval = null;
        }
        playPauseBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
            </svg>
        `;
        slideProgress.style.width = "0%";
    }

    prevBtn.addEventListener("click", () => {
        stopSlideshow();
        prevSlide();
    });

    nextBtn.addEventListener("click", () => {
        stopSlideshow();
        // If manually skipping on the last slide, move to cake
        if (currentSlide === slides.length - 1) {
            transitionToCake();
        } else {
            nextSlide();
        }
    });

    playPauseBtn.addEventListener("click", () => {
        if (isPlaying) {
            stopSlideshow();
        } else {
            startSlideshow();
        }
    });

    // Skip Slideshow direct button
    document.getElementById("skip-slideshow").addEventListener("click", transitionToCake);

    function transitionToCake() {
        stopSlideshow();
        videoScreen.classList.add("fade-out");
        setTimeout(() => {
            videoScreen.classList.add("hidden");
            wishScreen.classList.remove("hidden");
            wishScreen.classList.add("fade-in");
            // Highlight the cake stage
            cakeScreen.classList.remove("hidden");
            triggerScrollReveal();
        }, 800);
    }

    // Confetti effect on candle blow out
    let candleBlown = false;
    candle.addEventListener("click", () => {
        if (candleBlown) return;
        candleBlown = true;

        // Hide flame, trigger smoke particles
        candle.style.opacity = "0";
        setTimeout(() => {
            candle.style.display = "none";
        }, 300);

        smokeContainer.classList.add("blown");

        // Trigger sound effect (Synthesizer sweep for victory/joy)
        if (soundEnabled && audioCtx) {
            const now = audioCtx.currentTime;
            const osc = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            osc.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            osc.frequency.setValueAtTime(440, now);
            osc.frequency.exponentialRampToValueAtTime(880, now + 1.2);
            gainNode.gain.setValueAtTime(0.1, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
            osc.start(now);
            osc.stop(now + 1.3);
        }

        // Confetti Canvas Burst
        createConfettiBurst();

        // Reveal the "Hidden Secret Letter" button or automatically open it
        setTimeout(() => {
            const hText = document.getElementById("wish-headline");
            hText.innerText = "Make A Wish... It Came True!";
            hText.classList.add("glow-text");

            document.getElementById("secret-letter-button-container").classList.remove("hidden");
            document.getElementById("secret-letter-button-container").classList.add("fade-in");
        }, 1200);
    });

    function createConfettiBurst() {
        const confettiCount = 120;
        const colors = ['#f5e6d3', '#e8b87d', '#c8934a', '#d4a5a5', '#f2c9c1', '#d81b60', '#ffeb3b'];

        for (let i = 0; i < confettiCount; i++) {
            const conf = document.createElement("div");
            conf.className = "confetti";
            conf.style.left = "50vw";
            conf.style.top = "55vh";

            // Randomize trajectory directions
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 150 + 80;
            const x = Math.cos(angle) * velocity;
            const y = Math.sin(angle) * velocity - 100; // biased upward

            conf.style.setProperty('--x', `${x}px`);
            conf.style.setProperty('--y', `${y}px`);

            conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            conf.style.width = Math.random() * 8 + 6 + "px";
            conf.style.height = Math.random() * 15 + 10 + "px";
            conf.style.animationDuration = Math.random() * 1.5 + 1.5 + "s";

            document.body.appendChild(conf);

            setTimeout(() => {
                conf.remove();
            }, 3000);
        }
    }

    // Scroll reveal controller
    function triggerScrollReveal() {
        const reveals = document.querySelectorAll(".reveal");
        reveals.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                el.classList.add("in");
            }
        });
    }

    window.addEventListener("scroll", triggerScrollReveal);

    // Letter folding actions
    openLetterBtn.addEventListener("click", () => {
        letterPaper.classList.add("open");
        openLetterBtn.classList.add("hidden");
        document.getElementById("polaroid-section").classList.remove("hidden");
        document.getElementById("polaroid-section").classList.add("fade-in");
        setTimeout(triggerScrollReveal, 200);
    });

    // Custom interactive Polaroids click
    polaroids.forEach(p => {
        p.addEventListener("click", () => {
            p.classList.toggle("revealed");
            // Add sparkle burst locally
            createLocalSparkles(p);
        });
    });

    function createLocalSparkles(element) {
        const rect = element.getBoundingClientRect();
        for (let i = 0; i < 8; i++) {
            const spark = document.createElement("div");
            spark.className = "sparkle";
            spark.innerText = "✨";
            spark.style.position = "fixed";
            spark.style.left = (rect.left + rect.width / 2 + (Math.random() - 0.5) * 120) + "px";
            spark.style.top = (rect.top + rect.height / 2 + (Math.random() - 0.5) * 120) + "px";
            spark.style.fontSize = "16px";
            spark.style.animation = "float-up 1s easeout forwards";
            document.body.appendChild(spark);
            setTimeout(() => { spark.remove(); }, 1000);
        }
    }
});
