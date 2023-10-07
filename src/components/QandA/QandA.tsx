import { FC } from "react";
import "./qanda.css";

export const QandA = () => {
  return (
    <dl className="qa-008">
      <dt>これはどのようなテンプレートですか？</dt>
      <dd>回答に背景を付けたシンプルなQ&Aリストです。</dd>
      <dt>どのような特徴がありますか？</dt>
      <dd>
        背景色があることで質問と回答の区別がつきやすく、回答が長文になっても違和感を与えないデザインになります。
      </dd>
    </dl>
  );
};
