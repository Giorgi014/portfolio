"use client";

import { useId } from "react";

type HexBgProps = {
  width?: number | string;
  height?: number | string;
  bgColor?: string;
  borderColor?: string;
  className?: string;
};

export const HexBg = ({
  width = 151,
  height = 23,
  bgColor = "#1C202B",
  borderColor = "#000000",
  className,
}: HexBgProps) => {
  const maskId = useId();

  const hexPositions = [130, 109, 88];

  return (
    <svg
      className={className}
      viewBox="0 0 151 23"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      width={width}
      height={height}
    >
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse">
          <rect width="151" height="23" fill="white" />

          {hexPositions.map((x) => (
            <g key={x} transform={`translate(${x} 1) scale(0.83)`}>
              <path
                className="about__hex-mask-border"
                fill="white"
                stroke={borderColor}
                d="M17.2 3H6.8l-5.2 9 5.2 9h10.4l5.2-9-5.2-9z"
              />
              <path
                fill="white"
                stroke="none"
                d="M16.05 19h-8.1l-4.04-7 4.04-7h8.09l4.04 7-4.03 7z"
              />
            </g>
          ))}
        </mask>
      </defs>

      <rect width="151" height="23" fill={bgColor} mask={`url(#${maskId})`} />
    </svg>
  );
};
