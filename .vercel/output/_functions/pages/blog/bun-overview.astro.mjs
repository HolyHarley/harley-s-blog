import { e as createComponent, n as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute, o as renderSlot, _ as __astro_tag_component__, k as createVNode, l as Fragment } from '../../chunks/astro/server_DHtQyuwL.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_BjcEEDiN.mjs';
/* empty css                                           */
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { frontmatter } = Astro2.props;
  const { title, description, pubDate, updatedDate, heroImage } = frontmatter || Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "data-astro-cid-bvzihdzo": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="blog-post" data-astro-cid-bvzihdzo> ${heroImage && renderTemplate`<img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(heroImage, "src")} alt="" class="hero-image" data-astro-cid-bvzihdzo>`} <h1 class="title" data-astro-cid-bvzihdzo>${title}</h1> <div class="date" data-astro-cid-bvzihdzo> ${pubDate && renderTemplate`<time${addAttribute(pubDate, "datetime")} data-astro-cid-bvzihdzo>${pubDate}</time>`} ${updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-bvzihdzo>
Last updated on${" "} <time${addAttribute(updatedDate, "datetime")} data-astro-cid-bvzihdzo>${updatedDate}</time> </div>`} </div> <hr data-astro-cid-bvzihdzo> <div class="prose" data-astro-cid-bvzihdzo> ${renderSlot($$result2, $$slots["default"])} </div> </article> ` })} `;
}, "/Users/kohori/WORKSPACE/dev/my_blog/src/layouts/BlogPost.astro", void 0);

const $$Astro = createAstro();
const $$Callout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Callout;
  const { type = "info", title } = Astro2.props;
  const icons = {
    info: "\u2139\uFE0F",
    warning: "\u26A0\uFE0F",
    error: "\u{1F6AB}",
    tip: "\u{1F4A1}"
  };
  const colors = {
    info: "var(--color-info, #3b82f6)",
    warning: "var(--color-warning, #eab308)",
    error: "var(--color-error, #ef4444)",
    tip: "var(--color-success, #22c55e)"
  };
  const bgColors = {
    info: "var(--color-info-bg, rgba(59, 130, 246, 0.1))",
    warning: "var(--color-warning-bg, rgba(234, 179, 8, 0.1))",
    error: "var(--color-error-bg, rgba(239, 68, 68, 0.1))",
    tip: "var(--color-success-bg, rgba(34, 197, 94, 0.1))"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`callout ${type}`, "class")}${addAttribute(`--callout-color: ${colors[type]}; --callout-bg: ${bgColors[type]}`, "style")} data-astro-cid-mrmim4ef> <div class="icon" data-astro-cid-mrmim4ef>${icons[type]}</div> <div class="content" data-astro-cid-mrmim4ef> ${title && renderTemplate`<div class="title" data-astro-cid-mrmim4ef>${title}</div>`} ${renderSlot($$result, $$slots["default"])} </div> </div> `;
}, "/Users/kohori/WORKSPACE/dev/my_blog/src/components/Callout.astro", void 0);

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$BlogPost, {
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
  "layout": "../../layouts/BlogPost.astro",
  "title": "超高速JavaScriptランタイム「Bun」入門：特徴から使い方まで",
  "description": "Node.jsに代わる高速なJavaScriptランタイム「Bun」の概要、基本的な使い方、公式ドキュメントへのリンクをまとめた入門記事です。",
  "pubDate": "2026-02-15",
  "tags": ["Bun", "JavaScript", "TypeScript", "Runtime"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "主な特徴",
    "text": "主な特徴"
  }, {
    "depth": 2,
    "slug": "bunの使い方",
    "text": "Bunの使い方"
  }, {
    "depth": 3,
    "slug": "インストール",
    "text": "インストール"
  }, {
    "depth": 3,
    "slug": "プロジェクトの作成",
    "text": "プロジェクトの作成"
  }, {
    "depth": 3,
    "slug": "スクリプトの実行",
    "text": "スクリプトの実行"
  }, {
    "depth": 3,
    "slug": "パッケージのインストール",
    "text": "パッケージのインストール"
  }, {
    "depth": 2,
    "slug": "公式ドキュメント",
    "text": "公式ドキュメント"
  }, {
    "depth": 2,
    "slug": "まとめ",
    "text": "まとめ"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$Callout, {
      type: "info",
      title: "Bunとは？",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Bun"
        }), "（バン）は、JavaScriptおよびTypeScriptのための、現代的で高速なオールインワン・ランタイムです。Node.jsやDenoに代わる存在として注目を集めています。"]
      })
    }), "\n", createVNode(_components.h2, {
      id: "主な特徴",
      children: "主な特徴"
    }), "\n", createVNode(_components.p, {
      children: "Bunには開発者体験を向上させる多くの特徴があります。"
    }), "\n", createVNode($$Callout, {
      type: "tip",
      title: "圧倒的な速度",
      children: createVNode(_components.p, {
        children: "JavaScriptCoreエンジン（Safariで使用されているエンジン）を採用しており、起動時間や実行速度が非常に高速です。Node.jsと比較して数倍速いことも珍しくありません。"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "TypeScriptのネイティブサポート"
        }), ": 追加の設定なしでTypeScriptファイル（.ts, .tsx）を直接実行できます。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "オールインワン"
        }), ": バンドラー、トランスパイラ、パッケージマネージャー、テストランナーが標準で組み込まれています。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Node.js互換"
        }), ": 多くのNode.js APIと互換性があり、既存のnpmパッケージもそのまま利用可能です。"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "bunの使い方",
      children: "Bunの使い方"
    }), "\n", createVNode(_components.h3, {
      id: "インストール",
      children: "インストール"
    }), "\n", createVNode(_components.p, {
      children: "macOS、Linux、WSLでは以下のコマンドで簡単にインストールできます。"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "curl"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -fsSL"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " https://bun.sh/install"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " |"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " bash"
          })]
        })
      })
    }), "\n", createVNode($$Callout, {
      type: "warning",
      title: "Windowsユーザーの方へ",
      children: createVNode(_components.p, {
        children: "Windows環境では、WSL (Windows Subsystem for Linux) の使用が推奨されています。ネイティブWindowsビルドは現在実験的な段階です。"
      })
    }), "\n", createVNode(_components.h3, {
      id: "プロジェクトの作成",
      children: "プロジェクトの作成"
    }), "\n", createVNode(_components.p, {
      children: ["新しいプロジェクトを始めるには ", createVNode(_components.code, {
        children: "bun init"
      }), " コマンドを使用します。"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " my-bun-app"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "cd"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " my-bun-app"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "bun"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " init"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["これで ", createVNode(_components.code, {
        children: "package.json"
      }), "、", createVNode(_components.code, {
        children: "README.md"
      }), "、", createVNode(_components.code, {
        children: "index.ts"
      }), " などが自動生成されます。"]
    }), "\n", createVNode(_components.h3, {
      id: "スクリプトの実行",
      children: "スクリプトの実行"
    }), "\n", createVNode(_components.p, {
      children: "TypeScriptファイルを直接実行できます。"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "bun"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " index.ts"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "パッケージのインストール",
      children: "パッケージのインストール"
    }), "\n", createVNode(_components.p, {
      children: ["npmの代わりに ", createVNode(_components.code, {
        children: "bun add"
      }), " を使用してパッケージを高速にインストールできます。"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "bun"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " add"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " zod"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "bun"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " add"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -d"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " typescript"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "公式ドキュメント",
      children: "公式ドキュメント"
    }), "\n", createVNode(_components.p, {
      children: "より詳しい情報やAPIリファレンスについては、以下の公式サイトおよびドキュメントを参照してください。"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "公式サイト"
        }), ": ", createVNode(_components.a, {
          href: "https://bun.sh",
          children: "https://bun.sh"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "ドキュメント"
        }), ": ", createVNode(_components.a, {
          href: "https://bun.sh/docs",
          children: "https://bun.sh/docs"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "GitHubリポジトリ"
        }), ": ", createVNode(_components.a, {
          href: "https://github.com/oven-sh/bun",
          children: "https://github.com/oven-sh/bun"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "まとめ",
      children: "まとめ"
    }), "\n", createVNode(_components.p, {
      children: "Bunは、その速度と多機能性により、開発体験を大きく向上させる可能性を秘めています。特に新規プロジェクトや、パフォーマンスが求められる場面での採用を検討してみてはいかがでしょうか。"
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

const url = "/blog/bun-overview";
const file = "/Users/kohori/WORKSPACE/dev/my_blog/src/pages/blog/bun-overview.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kohori/WORKSPACE/dev/my_blog/src/pages/blog/bun-overview.mdx";
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
