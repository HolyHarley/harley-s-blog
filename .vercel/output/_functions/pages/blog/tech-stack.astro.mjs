import { _ as __astro_tag_component__, k as createVNode, l as Fragment } from '../../chunks/astro/server_DHtQyuwL.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BjcEEDiN.mjs';
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
  "title": "このブログのアーキテクチャについて",
  "description": "Astro, Bun, Hono, Vitest, Vercel を採用した最新の技術スタックについて解説します。"
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
    class: "container",
    style: {
      padding: '4rem 1.5rem',
      maxWidth: '800px'
    },
    children: [createVNode("h1", {
      style: {
        fontSize: '2.5rem',
        marginBottom: '2rem'
      },
      children: "このブログの技術スタック"
    }), createVNode("p", {
      style: {
        marginBottom: '2rem',
        color: 'var(--color-text-muted)'
      },
      children: createVNode(_components.p, {
        children: "このブログは、パフォーマンスと開発者体験を重視した最新の技術スタックで構築されています。\n以下に採用している主な技術とその理由を紹介します。"
      })
    }), createVNode("div", {
      class: "stack-grid",
      children: [createVNode("div", {
        class: "stack-item",
        children: [createVNode("h2", {
          children: "Astro"
        }), createVNode("p", {
          children: createVNode(_components.p, {
            children: [createVNode("strong", {
              children: "Webフレームワーク"
            }), createVNode("br", {}), "\nコンテンツ中心のウェブサイトに最適なフレームワークです。\n“Island Architecture” により、必要な部分のみにJavaScriptをロードするため、\n非常に高速なパフォーマンスを実現します。"]
          })
        })]
      }), createVNode("div", {
        class: "stack-item",
        children: [createVNode("h2", {
          children: "Bun"
        }), createVNode("p", {
          children: createVNode(_components.p, {
            children: [createVNode("strong", {
              children: "ランタイム & パッケージマネージャー"
            }), createVNode("br", {}), "\nNode.js 互換の超高速な JavaScript ランタイムです。\nパッケージのインストールやスクリプトの実行速度が速く、開発体験を大きく向上させます。"]
          })
        })]
      }), createVNode("div", {
        class: "stack-item",
        children: [createVNode("h2", {
          children: "Hono"
        }), createVNode("p", {
          children: createVNode(_components.p, {
            children: [createVNode("strong", {
              children: "API サーバー"
            }), createVNode("br", {}), "\nWeb標準に準拠した軽量かつ高速な Web フレームワークです。\nAstro の API ルートとして統合されており、バックエンドのロジックを効率的に処理します。"]
          })
        })]
      }), createVNode("div", {
        class: "stack-item",
        children: [createVNode("h2", {
          children: "Vitest"
        }), createVNode("p", {
          children: createVNode(_components.p, {
            children: [createVNode("strong", {
              children: "テストフレームワーク"
            }), createVNode("br", {}), "\nVite ネイティブの高速な単体テストフレームワークです。\n設定が簡単で、Bun との相性も抜群です。"]
          })
        })]
      }), createVNode("div", {
        class: "stack-item",
        children: [createVNode("h2", {
          children: "TypeScript"
        }), createVNode("p", {
          children: createVNode(_components.p, {
            children: [createVNode("strong", {
              children: "プログラミング言語"
            }), createVNode("br", {}), "\n型安全性を提供し、コードの品質と保守性を高めるために採用しています。"]
          })
        })]
      }), createVNode("div", {
        class: "stack-item",
        children: [createVNode("h2", {
          children: "Vercel"
        }), createVNode("p", {
          children: createVNode(_components.p, {
            children: [createVNode("strong", {
              children: "デプロイメント"
            }), createVNode("br", {}), "\nAstro の Server Output モードと専用アダプターを使用し、\nエッジに近い環境で高性能なホスティングを実現しています。"]
          })
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
const url = "/blog/tech-stack";
const file = "/Users/kohori/WORKSPACE/dev/my_blog/src/pages/blog/tech-stack.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kohori/WORKSPACE/dev/my_blog/src/pages/blog/tech-stack.mdx";
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
