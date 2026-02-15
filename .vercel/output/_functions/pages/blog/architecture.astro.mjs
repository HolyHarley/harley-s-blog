import { _ as __astro_tag_component__, k as createVNode, l as Fragment } from '../../chunks/astro/server_DHtQyuwL.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BjcEEDiN.mjs';
/* empty css                                           */
import 'clsx';
export { renderers } from '../../renderers.mjs';

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "layout": "../../layouts/Layout.astro",
  "title": "技術スタックの概要",
  "description": "Astro, Bun, Hono などを採用した高性能なアーキテクチャについて"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode("div", {
    class: "tech-stack-container",
    children: [createVNode("header", {
      class: "header-section",
      children: [createVNode("h1", {
        children: "アーキテクチャ詳細"
      }), createVNode("p", {
        class: "subtitle",
        children: createVNode(_components.p, {
          children: ["高速、シンプル、そしてスケーラブル。", createVNode("br", {}), "現代のウェブ開発を支える技術スタック。"]
        })
      })]
    }), createVNode("section", {
      class: "stack-section",
      children: [createVNode("h2", {
        class: "section-heading",
        children: "中核技術"
      }), createVNode("div", {
        class: "card-grid",
        children: [createVNode("div", {
          class: "tech-card astro",
          children: [createVNode("div", {
            class: "icon-wrapper",
            children: "🚀"
          }), createVNode("h3", {
            children: "Astro"
          }), createVNode("p", {
            children: [createVNode("strong", {
              children: "デフォルトで JS ゼロ。"
            }), " 必要な JavaScript だけを配信し、パフォーマンスを最適化します。"]
          }), createVNode("ul", {
            class: "feature-list",
            children: [createVNode("li", {
              children: "静的サイト生成 (SSG)"
            }), createVNode("li", {
              children: "アイランドアーキテクチャ"
            }), createVNode("li", {
              children: "サーバーコンポーネント"
            })]
          })]
        }), createVNode("div", {
          class: "tech-card bun",
          children: [createVNode("div", {
            class: "icon-wrapper",
            children: "🍞"
          }), createVNode("h3", {
            children: "Bun"
          }), createVNode("p", {
            children: [createVNode("strong", {
              children: "オールインワン ランタイム。"
            }), " 超高速な JavaScript ランタイム、バンドラー、パッケージマネージャー。"]
          }), createVNode("ul", {
            class: "feature-list",
            children: [createVNode("li", {
              children: "Node.js 完全互換"
            }), createVNode("li", {
              children: "爆速インストール"
            }), createVNode("li", {
              children: "テストランナー内蔵"
            })]
          })]
        }), createVNode("div", {
          class: "tech-card hono",
          children: [createVNode("div", {
            class: "icon-wrapper",
            children: "🔥"
          }), createVNode("h3", {
            children: "Hono"
          }), createVNode("p", {
            children: [createVNode("strong", {
              children: "エッジ対応 Web フレームワーク。"
            }), " 軽量・高速で、あらゆる JavaScript ランタイムで動作します。"]
          }), createVNode("ul", {
            class: "feature-list",
            children: [createVNode("li", {
              children: "超高速 RegEx ルーター"
            }), createVNode("li", {
              children: "ミドルウェアサポート"
            }), createVNode("li", {
              children: "型安全な RPC"
            })]
          })]
        }), createVNode("div", {
          class: "tech-card vitest",
          children: [createVNode("div", {
            class: "icon-wrapper",
            children: "🧪"
          }), createVNode("h3", {
            children: "Vitest"
          }), createVNode("p", {
            children: [createVNode("strong", {
              children: "Vite ネイティブのテスト。"
            }), " Vite をベースにした高速な単体テストフレームワーク。"]
          }), createVNode("ul", {
            class: "feature-list",
            children: [createVNode("li", {
              children: "Jest 互換API"
            }), createVNode("li", {
              children: "ウォッチモード"
            }), createVNode("li", {
              children: "ESM サポート"
            })]
          })]
        }), createVNode("div", {
          class: "tech-card vercel",
          children: [createVNode("div", {
            class: "icon-wrapper",
            children: "▲"
          }), createVNode("h3", {
            children: "Vercel"
          }), createVNode("p", {
            children: [createVNode("strong", {
              children: "フロントエンドクラウド。"
            }), " 瞬時にデプロイし、自動的にスケールします。"]
          }), createVNode("ul", {
            class: "feature-list",
            children: [createVNode("li", {
              children: "エッジネットワーク"
            }), createVNode("li", {
              children: "サーバーレス関数"
            }), createVNode("li", {
              children: "ごく簡単なデプロイ"
            })]
          })]
        })]
      })]
    }), createVNode("section", {
      class: "why-section",
      children: [createVNode("h2", {
        class: "section-heading",
        children: "選定理由"
      }), createVNode("div", {
        class: "reason-grid",
        children: [createVNode("div", {
          class: "reason-item",
          children: [createVNode("h3", {
            children: "⚡️ パフォーマンス"
          }), createVNode("p", {
            children: [createVNode("strong", {
              children: "Astro"
            }), " + ", createVNode("strong", {
              children: "Bun"
            }), " により、最高の Core Web Vitals スコアと高速なビルド時間を実現しています。"]
          })]
        }), createVNode("div", {
          class: "reason-item",
          children: [createVNode("h3", {
            children: "🛠️ 開発者体験 (DX)"
          }), createVNode("p", {
            children: [createVNode("strong", {
              children: "TypeScript"
            }), " による型安全性と高速なフィードバックループにより、開発が楽しくなります。"]
          })]
        }), createVNode("div", {
          class: "reason-item",
          children: [createVNode("h3", {
            children: "🌍 エッジ機能"
          }), createVNode("p", {
            children: [createVNode("strong", {
              children: "Hono"
            }), " + ", createVNode("strong", {
              children: "Vercel"
            }), " により、API はユーザーの近くで実行され、低遅延を実現します。"]
          })]
        })]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}
const url = "/blog/architecture";
const file = "/Users/kohori/WORKSPACE/dev/my_blog/src/pages/blog/architecture.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kohori/WORKSPACE/dev/my_blog/src/pages/blog/architecture.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
