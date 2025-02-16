"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function MemeGenerator() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    generateMeme();
  }, [topText, bottomText]);

  const generateMeme = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const img = new window.Image(); // Fix for TypeScript issue
    img.src = "/shrek.jpg";
    img.onload = () => {
      canvas.width = img.width / 2;
      canvas.height = img.height / 2;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.font = "bold 30px Arial";
      ctx.fillStyle = "white";
      ctx.strokeStyle = "black";
      ctx.lineWidth = 3;
      ctx.textAlign = "center";
      
      ctx.strokeText(topText, canvas.width / 2, 40);
      ctx.fillText(topText, canvas.width / 2, 40);
      ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 20);
      ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);
    };
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-4xl font-bold">Shrek Meme Generator</h1>
      <input
        type="text"
        placeholder="Top Text"
        className="border p-2"
        value={topText}
        onChange={(e) => setTopText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Bottom Text"
        className="border p-2"
        value={bottomText}
        onChange={(e) => setBottomText(e.target.value)}
      />
      <button
        onClick={generateMeme}
        className="bg-green-700 text-white px-4 py-2 rounded"
      >
        Generate Meme
      </button>
      <canvas ref={canvasRef} className="border mt-4"></canvas>
    </div>
  );
}
