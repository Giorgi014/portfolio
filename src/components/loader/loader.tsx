"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "./style/style.scss";

const EN_LETTERS = ["L", "O", "A", "D", "I", "N", "G"];
const KA_LETTERS = ["ი", "ტ", "ვ", "ი", "რ", "თ", "ე", "ბ", "ა"];

export function Loader() {
  const { locale } = useParams<{ locale: string }>();
  const letters = locale === "ka" ? KA_LETTERS : EN_LETTERS;

  const [hiding, setHiding] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const hide = () => {
      setHiding(true);
      setTimeout(() => setHidden(true), 800);
    };

    if (document.readyState === "complete") {
      setTimeout(hide, 600);
    } else {
      const onLoad = () => setTimeout(hide, 600);
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  if (hidden) return null;

  return (
    <div className={`loader_overlay${hiding ? " loader_hiding" : ""}`}>
      <div className={`loader${locale === "ka" ? " loader--ka" : ""}`}>
        {letters.map((char, i) => (
          <span
            key={i}
            style={{ animationDelay: `${i * (3 / letters.length)}s` }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
