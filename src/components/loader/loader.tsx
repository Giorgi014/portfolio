"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const EN_LETTERS = ["L", "O", "A", "D", "I", "N", "G"];
const KA_LETTERS = ["ი", "ტ", "ვ", "ი", "რ", "თ", "ე", "ბ", "ა"];

export function Loader() {
  const { locale } = useParams<{ locale: string }>();
  const letters = locale === "ka" ? KA_LETTERS : EN_LETTERS;

  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setTimeout(() => setHidden(true), 1400);
    } else {
      const onLoad = () => setTimeout(() => setHidden(true), 1400);
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  if (hidden) return null;

  return (
    <div>
      <div>
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
