# LPのBuddyセクション＋シェア画像

## ① LPセクション（site.html）

```
section.html   .door と .how の間に挿入
section.css    app.css に追記（既存トークンのみ使用・独自色なし）
section.js     末尾スクリプトに追記
```

### 素材の配置先

```
lp/eggs-sprite.png  → assets/buddy/lp/eggs-sprite.png
lp/form1.jpg        → assets/buddy/lp/form1.jpg   （産まれる）
lp/form2.jpg        → assets/buddy/lp/form2.jpg   （進化します）
lp/form3.jpg        → assets/buddy/lp/form3.jpg   （進化は無限大・シルエット）
lp/buddy.mp4        → assets/buddy/lp/buddy.mp4
```

卵のスライダーは**スプライト1枚**で100種類を表示します。
個別配信（1.97MB・100リクエスト）→ **1.26MB・1リクエスト**。

## ② シェア画像

`share-sample/C_night.png` が採用案です（1080×1080）。

```
構成（上から）
  吹き出し「うまれました！」＋「世界に一体だけの相棒」
  キャラクター（背景を透過して配置）
  名前バッジ「ひかり」＋ No.バッジ
  ACDOOR（グラデーション：#E8C77A → #F0A6B8 → #B98CFF）
  「話すだけで、あなたに合う仕事の扉がひらく。」
```

### キャラの透過について

`share-sample/_char_transparent_sample.png` が透過済みのサンプルです。
**生成画像は背景がクリーム色の不透明**なので、透過処理が必要です。

```
四隅の色を背景とみなし、外周から flood fill で抜く
→ 白い部分が内部にあっても穴が開かない
```

詳細は実装依頼の本文を参照してください。
