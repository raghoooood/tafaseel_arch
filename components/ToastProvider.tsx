"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 6000,
        style: {
          borderRadius: "12px",
          background: "#1f2933",
          color: "#ffffff",
          fontSize: "14px",
        },
        success: {
          style: {
            background: "#065f46",
          },
        },
        error: {
          style: {
            background: "#7f1d1d",
          },
        },
      }}
    />
  );
}
