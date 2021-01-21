import React, { CSSProperties } from "react";

const BackdropContainerStyle: CSSProperties = {
  position: "fixed",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.4)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  zIndex: 1400,
};

const inEffect = `
.ws-fade {
  animation: simpleFade 0.5s;
  animation-fill-mode: both
}

@keyframes simpleFade {
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
}

.ws-fade-in-up {
  animation: fadeInUp 0.5s;
  animation-fill-mode: both
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px)
  }
  100% {
    opacity: 1;
    transform: translateY(0)
  }
}

.ws-btn {
  width: 100%;
  height: auto;
  cursor: pointer;
  border: 0;
  background: #1A78F6;
  padding: 0.65rem;
  border-radius: 0.25rem;
  font-size: 0;
  transition: all .1s ease-in-out;
}

.ws-btn:hover {
  transform: scale(1.05);
}

.ws-btn:active {
  transform: scale(0.95);
}
`;

export default function Backdrop({ children, onClose }) {
  const handleOnClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  return (
    <div onClick={handleOnClose} className="ws-fade" style={BackdropContainerStyle}>
      <style children={inEffect} />
      {children}
    </div>
  );
}
