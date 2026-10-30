# ACDOOR 相棒（神獣）機能 — 受け渡し素材

ACDOOR V4 開発セッション向け。第1段階の実装に必要な素材です。

## 中身

```
eggs/           卵100種類（512px・透過PNG・背景と影は除去済み）
                egg-001.png 〜 egg-100.png
buddy-page/     専用ページの試作（HTML・動画・アイコン・背景）
home-demo/      ホーム導線の見本
README.md       この説明（実装時の注意は buddy-page の README を参照）
CONCEPT.md         機能の全体像
TECH-NOTES.md      技術検証（API仕様・単価・ループ生成）
EVOLUTION-FLOW.md  進化フローと卵の設計
PROMPT-FINDINGS.md 画像生成プロンプトの知見
```

## 卵について

- **1024px の原版もあります。** 必要なら言ってください（56MB のため512pxを置いています）
- 全100枚を目視確認済み。造形の破綻はありません
- 色10種 × 紋様10種の組み合わせ
- **レア度は設けません。** 全部等価で、見た目が違うだけです
