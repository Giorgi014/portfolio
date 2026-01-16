"use client";

import React, { ChangeEvent, useEffect } from "react";
import { RangeProps } from "../type";
import "./style/range.scss";

export const Range = ({
  children,
  id,
  ref,
  value,
  onChangeValue,
}: RangeProps) => {
  const storageKey = `range:${id}`;

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(storageKey, String(value));
  }, [value, storageKey]);

  const changeRange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = Number(e.target.value);
    const newValue = Number.isNaN(rawValue)
      ? 0
      : Math.min(100, Math.max(0, rawValue));

    onChangeValue?.(newValue);
  };

  return (
    <article className="range" ref={ref}>
      <section className="range_head">
        <label htmlFor={id} className="range_text">
          {children}
        </label>
        <p className="range_percentage">{value}%</p>
      </section>
      <input
        type="range"
        name={id}
        id={id}
        min={0}
        max={100}
        onChange={changeRange}
        value={value}
        className="range_input"
        style={{ "--range-progress": `${value}%` } as React.CSSProperties}
      />
    </article>
  );
};
