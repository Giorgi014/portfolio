"use client";

import React, { ChangeEvent, useState } from "react";
import { RangeProps } from "../type";
import "./style/range.scss";

export const Range = ({ children, id, ref }: RangeProps) => {
  const storageKey = `range:${id}`;

  const savedRangeInfo = () => {
    if (typeof window === "undefined") return 50;
    const stored = localStorage.getItem(storageKey);
    if (stored === null) return 50;
    const n = parseInt(stored, 10);
    return Number.isNaN(n) ? 50 : Math.min(100, Math.max(0, n));
  };

  const [rangePercentage, setRangePercentage] = useState<number>(() =>
    savedRangeInfo()
  );

  const changeRange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    const newValue = Number.isNaN(value)
      ? 0
      : Math.min(100, Math.max(0, value));
    setRangePercentage(newValue);
    localStorage.setItem(storageKey, String(newValue));
  };

  return (
    <article className="range" ref={ref}>
      <section className="range_head">
        <label htmlFor={id} className="range_text">
          {children}
        </label>
        <p className="range_percentage">{rangePercentage}%</p>
      </section>
      <input
        type="range"
        name={id}
        id={id}
        min={0}
        max={100}
        onChange={changeRange}
        value={rangePercentage}
        className="range_input"
        style={
          { "--range-progress": `${rangePercentage}%` } as React.CSSProperties
        }
      />
    </article>
  );
};
