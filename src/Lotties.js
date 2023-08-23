import React from "react";
import Lottie from "lottie-react";

export function LottieAnimation({ lotti , data}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="spinner">
      <Lottie options={defaultOptions} animationData={data}/>
    </div>
  );
};

export function LottieAnimation2({ lotti , data}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="spinner-2">
      <Lottie options={defaultOptions} animationData={data}/>
    </div>
  );
}