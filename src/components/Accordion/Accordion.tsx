import { FC } from "react";
import "./accordion.css";

export const Accordion = () => {
  return (
    <div>
      <details className="accordion-002">
        <summary>アコーディオンパネルとは</summary>
        <p>クリックで伸び縮みするように開閉するパネル。</p>
      </details>
      <details className="accordion-002">
        <summary>アコーディオンのデザイン</summary>
        <p>
          プラスマイナスの付きのアコーディオン。開閉させるとアイコンが回転します。枠線付きなので複数並べたい際におすすめです。
        </p>
      </details>
    </div>
  );
};
