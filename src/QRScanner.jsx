import React, { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QRScanner() {
  const qrRef = useRef();

  const url = "https://topmoon-restaurant-menu-k5re.vercel.app/";

  const downloadQR = () => {
    const canvas = qrRef.current.querySelector("canvas");
    if (!canvas) return;

    const pngUrl = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = pngUrl;
    link.download = "top-moon-menu-qr.png";
    link.click();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      
      <h1 className="text-2xl mb-6 font-bold">Top Moon QR</h1>

      {/* QR Code */}
      <div ref={qrRef} className="bg-white p-4 rounded-xl">
        <QRCodeCanvas value={url} size={220} />
      </div>

      {/* Download Button */}
      <button
        onClick={downloadQR}
        className="mt-6 bg-amber-500 px-6 py-3 rounded-xl font-semibold text-black hover:bg-amber-400"
      >
        Download QR
      </button>

      <p className="mt-4 text-zinc-400 text-sm text-center">
        Scan to view menu
      </p>
    </div>
  );
}