# My Blog

Astro、Bun、Hono、Vitest を使用した個人ブログプロジェクトです。Vercel にデプロイされています。

## 技術スタック

- **Astro** (v5.17.1) - 静的サイトジェネレーター
- **Bun** - 高速な JavaScript ランタイム
- **Hono** (v4.11.9) - API ルート用の軽量フレームワーク
- **MDX** (@astrojs/mdx) - Markdown + JSX によるリッチなコンテンツ作成
- **Vitest** - テストフレームワーク
- **Vercel** - デプロイ先

## プロジェクト構成

```text
my_blog/
├── .agent/                    # エージェント用スキル定義
│   └── skills/
│       └── blog_writing/      # ブログ執筆スキル
├── public/                    # 静的ファイル (favicon など)
├── src/
│   ├── components/            # 再利用可能なコンポーネント
│   │   └── Callout.astro     # 情報ボックスコンポーネント
│   ├── layouts/               # レイアウトテンプレート
│   │   ├── Layout.astro      # 基本レイアウト
│   │   └── BlogPost.astro    # ブログ記事用レイアウト
│   ├── pages/                 # ページファイル (ルーティング)
│   │   ├── index.astro       # トップページ
│   │   ├── blog/             # ブログ記事
│   │   │   ├── index.astro   # ブログ一覧
│   │   │   ├── bun-overview.mdx
│   │   │   ├── tech-stack.mdx
│   │   │   └── architecture.mdx
│   │   └── api/              # API エンドポイント (Hono)
│   ├── styles/                # グローバルスタイル
│   │   └── global.css        # CSS 変数、ダークテーマ設定
│   └── tests/                 # テストファイル
├── astro.config.mjs           # Astro 設定
├── package.json               # 依存関係
├── tsconfig.json              # TypeScript 設定
└── vitest.config.ts           # Vitest 設定
```

## コマンド

プロジェクトルートで以下のコマンドを実行します。

| コマンド          | 説明                                      |
| :---------------- | :---------------------------------------- |
| `bun install`     | 依存関係をインストール                    |
| `bun run dev`     | 開発サーバーを起動 (`localhost:4321`)     |
| `bun run build`   | 本番用ビルドを `./dist/` に生成           |
| `bun run preview` | ビルドをローカルでプレビュー              |

## 特徴

- **MDX サポート**: Markdown 内で Astro コンポーネントを使用可能
- **ダークテーマ**: モダンなダークモードデザイン
- **Callout コンポーネント**: `info`, `warning`, `error`, `tip` タイプの情報ボックス
- **Vercel デプロイ**: サーバーサイドレンダリング (SSR) 対応

## ブログ記事の追加

新しいブログ記事を追加するには、`src/pages/blog/` に `.md` または `.mdx` ファイルを作成します。

### Frontmatter の例

```yaml
---
layout: ../../layouts/BlogPost.astro
title: "記事のタイトル"
description: "記事の概要"
pubDate: "2026-02-15"
tags: ["タグ1", "タグ2"]
---
```

### Callout コンポーネントの使用例 (MDX)

```mdx
import Callout from '../../components/Callout.astro';

<Callout type="info" title="お知らせ">
これは情報ボックスです。
</Callout>
```

## 参考リンク

- [Astro ドキュメント](https://docs.astro.build)
- [Bun ドキュメント](https://bun.sh/docs)
- [Hono ドキュメント](https://hono.dev)
