import React, { useEffect, useRef, useState } from 'react';
import { FilesetResolver, FaceLandmarker } from '@mediapipe/tasks-vision';
import { Camera, X, RefreshCw, Download, Share2, Sparkles, Loader } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// SVG string for the high-end Miss Bharat golden crown
const CROWN_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 384" width="512" height="384">
  <defs>
    <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF8D6" />
      <stop offset="25%" stop-color="#F1C40F" />
      <stop offset="50%" stop-color="#F39C12" />
      <stop offset="75%" stop-color="#D68910" />
      <stop offset="100%" stop-color="#9A7D0A" />
    </linearGradient>
    <linearGradient id="gem-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5EEF8" />
      <stop offset="50%" stop-color="#AF7AC5" />
      <stop offset="100%" stop-color="#76448A" />
    </linearGradient>
  </defs>
  <path d="M 90 290 Q 256 230 422 290 Q 256 320 90 290 Z" fill="#3B0B59" opacity="0.3" />
  <path d="M 70 290 L 90 190 Q 130 250 170 210 L 200 90 Q 256 200 312 90 L 342 210 Q 382 250 422 190 L 442 290 Z" fill="url(#gold-grad)" stroke="#7E5109" stroke-width="2" />
  <path d="M60 315 Q256 345 452 315 L442 285 Q256 315 70 285 Z" fill="url(#gold-grad)" stroke="#7E5109" stroke-width="1.5" />
  <path d="M 120 293 Q 256 255 392 293" fill="none" stroke="#7E5109" stroke-width="2" />
  <circle cx="100" cy="300" r="7" fill="url(#gem-grad)" stroke="#5B2C6F" stroke-width="1" />
  <circle cx="140" cy="303" r="5" fill="#FFF" stroke="#CCC" stroke-width="0.5" />
  <circle cx="180" cy="306" r="7" fill="url(#gem-grad)" stroke="#5B2C6F" stroke-width="1" />
  <circle cx="220" cy="308" r="5" fill="#FFF" stroke="#CCC" stroke-width="0.5" />
  <circle cx="256" cy="309" r="8" fill="url(#gem-grad)" stroke="#5B2C6F" stroke-width="1" />
  <circle cx="292" cy="308" r="5" fill="#FFF" stroke="#CCC" stroke-width="0.5" />
  <circle cx="332" cy="306" r="7" fill="url(#gem-grad)" stroke="#5B2C6F" stroke-width="1" />
  <circle cx="372" cy="303" r="5" fill="#FFF" stroke="#CCC" stroke-width="0.5" />
  <circle cx="412" cy="300" r="7" fill="url(#gem-grad)" stroke="#5B2C6F" stroke-width="1" />
  <circle cx="90" cy="190" r="9" fill="url(#gem-grad)" stroke="#5B2C6F" stroke-width="1.5" />
  <circle cx="170" cy="210" r="6" fill="#FFF" stroke="#CCC" stroke-width="1" />
  <circle cx="200" cy="90" r="12" fill="url(#gem-grad)" stroke="#5B2C6F" stroke-width="2" />
  <circle cx="312" cy="90" r="12" fill="url(#gem-grad)" stroke="#5B2C6F" stroke-width="2" />
  <circle cx="342" cy="210" r="6" fill="#FFF" stroke="#CCC" stroke-width="1" />
  <circle cx="422" cy="190" r="9" fill="url(#gem-grad)" stroke="#5B2C6F" stroke-width="1.5" />
  <path d="M 256 220 L 266 235 L 256 250 L 246 235 Z" fill="url(#gold-grad)" stroke="#7E5109" stroke-width="1.5" />
  <circle cx="256" cy="235" r="5" fill="#AF7AC5" />
</svg>
`;

export default function SelfieCamera({ isOpen, onClose }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const faceLandmarkerRef = useRef(null);
  const requestRef = useRef(null);
  const crownImageRef = useRef(null);
  const sparklesRef = useRef([]);

  const [stream, setStream] = useState(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [capturedImage, setCapturedImage] = useState(null);
  const [shareSuccess, setShareSuccess] = useState(false);

  // Initialize and load the crown SVG
  useEffect(() => {
    const img = new Image();
    const svgBlob = new Blob([CROWN_SVG], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    img.src = url;
    img.onload = () => {
      crownImageRef.current = img;
    };
    return () => {
      URL.revokeObjectURL(url);
    };
  }, []);

  // Request camera permission and load MediaPipe model
  useEffect(() => {
    if (!isOpen) return;

    let localStream = null;

    async function initCameraAndAI() {
      try {
        setIsInitializing(true);
        setErrorMessage('');
        setCapturedImage(null);

        // 1. Ask for Camera Access (Front camera preferred)
        localStream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'user',
            width: { ideal: 640 },
            height: { ideal: 480 }
          },
          audio: false
        });
        setStream(localStream);
        if (videoRef.current) {
          videoRef.current.srcObject = localStream;
        }

        // 2. Initialize MediaPipe Face Landmarker
        const filesetResolver = await FilesetResolver.forVisionTasks(
          'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.8/wasm'
        );
        
        const landmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
          baseOptions: {
            modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task',
            delegate: 'GPU'
          },
          runningMode: 'VIDEO',
          numFaces: 1
        });

        faceLandmarkerRef.current = landmarker;
        setIsInitializing(false);
      } catch (err) {
        console.error('Selfie Camera initialization failed:', err);
        setErrorMessage('Could not access front camera or initialize filters. Please make sure camera permissions are granted.');
        setIsInitializing(false);
      }
    }

    initCameraAndAI();

    // Cleanup camera tracks on close
    return () => {
      if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
      }
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isOpen]);

  // Main animation frame processing loop
  useEffect(() => {
    if (isInitializing || !isOpen || capturedImage) return;

    function renderLoop() {
      if (!videoRef.current || !canvasRef.current || !faceLandmarkerRef.current) {
        requestRef.current = requestAnimationFrame(renderLoop);
        return;
      }

      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const landmarker = faceLandmarkerRef.current;

      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        // Match canvas dimensions to video
        if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
        }

        const width = canvas.width;
        const height = canvas.height;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // 1. Draw base video frame
        ctx.drawImage(video, 0, 0, width, height);

        // 2. Apply Pageant Filter: Skin Smoothing & Glamour Soft Glow (Orton Effect)
        ctx.save();
        ctx.globalAlpha = 0.22; // subtle transparency
        ctx.filter = 'blur(5px) brightness(1.1) contrast(1.05) saturate(1.08)';
        ctx.drawImage(video, 0, 0, width, height);
        ctx.restore();

        // 3. Detect Face Landmarks
        const now = performance.now();
        const result = landmarker.detectForVideo(video, now);

        if (result && result.faceLandmarks && result.faceLandmarks.length > 0) {
          const landmarks = result.faceLandmarks[0];

          // Key Landmarks:
          // 10: Forehead top center
          // 152: Chin bottom
          // 234: Left temple corner
          // 454: Right temple corner
          const foreheadTop = landmarks[10];
          const leftTemple = landmarks[234];
          const rightTemple = landmarks[454];

          if (foreheadTop && leftTemple && rightTemple) {
            // Map landmarks coordinates to canvas space
            const fhX = foreheadTop.x * width;
            const fhY = foreheadTop.y * height;
            const ltX = leftTemple.x * width;
            const ltY = leftTemple.y * height;
            const rtX = rightTemple.x * width;
            const rtY = rightTemple.y * height;

            // Calculate face width (distance between temples)
            const dx = rtX - ltX;
            const dy = rtY - ltY;
            const faceWidth = Math.sqrt(dx * dx + dy * dy);

            // Calculate rotation (roll angle) in radians
            const rollAngle = Math.atan2(dy, dx);

            // Draw crown
            if (crownImageRef.current) {
              ctx.save();

              // Translate origin to forehead top
              ctx.translate(fhX, fhY);
              // Rotate matching head tilt
              ctx.rotate(rollAngle);

              // Scale crown based on face size
              const crownScale = faceWidth * 1.35; // slightly wider than temples
              const crownW = crownScale;
              const crownH = crownScale * (384 / 512); // Keep ratio

              // Shift upwards so it sits on top of head
              const shiftX = -crownW / 2;
              const shiftY = -crownH * 0.88;

              // Shadow for realistic attachment depth
              ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
              ctx.shadowBlur = 15;
              ctx.shadowOffsetY = 5;

              // Draw crown
              ctx.drawImage(crownImageRef.current, shiftX, shiftY, crownW, crownH);
              ctx.restore();

              // Generate floating sparkles around the crown area
              if (Math.random() < 0.15) {
                // Generate a sparkle just above the crown peaks
                const sparkleAngle = rollAngle + (Math.random() - 0.5) * 0.8;
                const distY = -crownH * 0.95;
                const distX = (Math.random() - 0.5) * (crownW * 0.7);

                // Project rotated offset
                const cos = Math.cos(rollAngle);
                const sin = Math.sin(rollAngle);
                const spX = fhX + (distX * cos - distY * sin);
                const spY = fhY + (distX * sin + distY * cos);

                sparklesRef.current.push({
                  x: spX,
                  y: spY,
                  vx: (Math.random() - 0.5) * 0.6,
                  vy: -Math.random() * 0.8 - 0.4,
                  size: Math.random() * 3.5 + 1.5,
                  life: 1.0,
                  decay: Math.random() * 0.03 + 0.02
                });
              }
            }
          }
        }

        // 4. Update and Draw floating sparkles
        ctx.save();
        sparklesRef.current = sparklesRef.current.filter(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.life -= p.decay;
          if (p.life <= 0) return false;

          // Render diamond sparkle
          ctx.fillStyle = `rgba(255, 215, 0, ${p.life})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();

          // Sparkle cross flare
          if (p.life > 0.5) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${(p.life - 0.5) * 1.5})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x - p.size * 2, p.y);
            ctx.lineTo(p.x + p.size * 2, p.y);
            ctx.moveTo(p.x, p.y - p.size * 2);
            ctx.lineTo(p.x, p.y + p.size * 2);
            ctx.stroke();
          }
          return true;
        });
        ctx.restore();

        // 5. Cinematic Lighting Vignette (Gold/Purple ambient blend)
        const radGrad = ctx.createRadialGradient(width / 2, height / 2, width * 0.1, width / 2, height / 2, width * 0.75);
        radGrad.addColorStop(0, 'rgba(255, 215, 0, 0.05)'); // gold wash in center
        radGrad.addColorStop(0.5, 'rgba(74, 20, 140, 0.04)'); // purple tint
        radGrad.addColorStop(1, 'rgba(15, 0, 30, 0.4)');    // edge shadows
        ctx.fillStyle = radGrad;
        ctx.fillRect(0, 0, width, height);

        // Watermark tag
        ctx.fillStyle = 'rgba(255, 215, 0, 0.6)';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText('Miss Bharat™ AI Pageant Filter', width - 15, height - 15);
      }

      requestRef.current = requestAnimationFrame(renderLoop);
    }

    requestRef.current = requestAnimationFrame(renderLoop);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isInitializing, isOpen, capturedImage]);

  // Capture Canvas as an Image
  const handleCapture = () => {
    if (!canvasRef.current) return;
    const dataUrl = canvasRef.current.toDataURL('image/jpeg', 0.95);
    setCapturedImage(dataUrl);

    // Stop camera stream once captured
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  // Resume Video Capture
  const handleRetake = async () => {
    setCapturedImage(null);
    setIsInitializing(true);
    try {
      const localStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',
          width: { ideal: 640 },
          height: { ideal: 480 }
        },
        audio: false
      });
      setStream(localStream);
      if (videoRef.current) {
        videoRef.current.srcObject = localStream;
      }
      setIsInitializing(false);
    } catch (err) {
      console.error(err);
      setErrorMessage('Could not restart camera.');
      setIsInitializing(false);
    }
  };

  // Download Snapshot
  const handleDownload = () => {
    if (!capturedImage) return;
    const a = document.createElement('a');
    a.href = capturedImage;
    a.download = 'miss_bharat_selfie.jpg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Share Snapshot (utilizes Web Share API on mobile, copy link on desktop)
  const handleShare = async () => {
    if (!capturedImage) return;

    try {
      // Convert dataUrl to blob
      const res = await fetch(capturedImage);
      const blob = await res.blob();
      const file = new File([blob], 'miss_bharat_selfie.jpg', { type: 'image/jpeg' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'Miss Bharat™ AI Selfie',
          text: 'Look at my crowned selfie with the official Miss Bharat™ AI Pageant Filter!'
        });
      } else {
        // Fallback: Copy notification
        navigator.clipboard.writeText(window.location.origin);
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 3000);
      }
    } catch (err) {
      console.warn('Sharing failed:', err);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-amber-500/30 bg-[#120022] shadow-2xl shadow-purple-950/50"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 bg-purple-950/20 px-6 py-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#ffd700]" />
              <h3 className="font-bold text-white tracking-wide">Miss Bharat™ AI Selfie</h3>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-1.5 text-white/75 hover:bg-white/10 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Camera Frame View */}
          <div className="relative aspect-[4/3] bg-black flex items-center justify-center overflow-hidden">
            {/* Hidden Video Feed */}
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="hidden"
            />

            {/* Display Canvas Feed */}
            {!capturedImage && (
              <canvas
                ref={canvasRef}
                className="w-full h-full object-cover scale-x-[-1]" // mirror front camera
              />
            )}

            {/* Snapshot Preview */}
            {capturedImage && (
              <img
                src={capturedImage}
                alt="Selfie Snapshot"
                className="w-full h-full object-cover"
              />
            )}

            {/* Initializing Spinner Overlay */}
            {isInitializing && (
              <div className="absolute inset-0 bg-[#0f001c]/90 flex flex-col items-center justify-center gap-4 text-center px-6">
                <Loader className="h-10 w-10 text-[#ffd700] animate-spin" />
                <p className="text-white/80 font-medium text-sm">Initializing AI Pageant Filter...</p>
                <p className="text-white/40 text-xs max-w-xs">Loading MediaPipe Face Mesh model and activating your camera feed.</p>
              </div>
            )}

            {/* Error Message Overlay */}
            {errorMessage && (
              <div className="absolute inset-0 bg-[#0f001c]/95 flex flex-col items-center justify-center gap-4 text-center px-8">
                <div className="rounded-full bg-red-500/10 p-3 text-red-400">
                  <X className="h-8 w-8" />
                </div>
                <p className="text-white text-sm font-semibold">{errorMessage}</p>
                <button
                  onClick={onClose}
                  className="rounded-full bg-white/10 px-5 py-2 text-xs font-bold text-white hover:bg-white/15 transition-all"
                >
                  Go Back
                </button>
              </div>
            )}

            {/* Tooltip Overlay */}
            {!isInitializing && !errorMessage && !capturedImage && (
              <div className="absolute top-4 left-4 bg-purple-950/65 backdrop-blur-md border border-amber-500/20 rounded-lg px-3 py-1.5 flex items-center gap-1.5 text-[#ffd700]">
                <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                <span className="text-[10px] font-bold tracking-wider uppercase">Auto Crown Connected</span>
              </div>
            )}
          </div>

          {/* Share Toast Fallback */}
          {shareSuccess && (
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-amber-500 text-purple-950 font-bold px-4 py-2 rounded-xl text-xs shadow-lg z-50">
              Pageant Link Copied! Share your photo!
            </div>
          )}

          {/* Action Footer controls */}
          <div className="bg-[#0f001c] p-6 border-t border-white/5 flex justify-center items-center">
            {!capturedImage ? (
              <button
                disabled={isInitializing || !!errorMessage}
                onClick={handleCapture}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ffd700] to-[#aa8c2c] hover:brightness-110 active:scale-95 disabled:opacity-50 px-8 py-3.5 font-bold text-purple-950 shadow-lg shadow-amber-500/20 text-sm tracking-wider uppercase transition-all"
              >
                <Camera className="h-5 w-5" /> Take Selfie
              </button>
            ) : (
              <div className="flex flex-wrap gap-3 w-full justify-center">
                <button
                  onClick={handleRetake}
                  className="flex items-center justify-center gap-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 active:scale-95 px-4 py-3 font-semibold text-white text-xs tracking-wider uppercase transition-all flex-1 min-w-[110px]"
                >
                  <RefreshCw className="h-4 w-4" /> Retake
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-800 to-purple-600 hover:brightness-110 active:scale-95 px-4 py-3 font-semibold text-white text-xs tracking-wider uppercase transition-all flex-1 min-w-[110px]"
                >
                  <Download className="h-4 w-4" /> Download
                </button>
                <button
                  onClick={handleShare}
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:brightness-110 active:scale-95 px-4 py-3 font-semibold text-purple-950 text-xs tracking-wider uppercase transition-all flex-1 min-w-[110px]"
                >
                  <Share2 className="h-4 w-4" /> Share
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
