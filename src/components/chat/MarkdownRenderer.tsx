"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import type { Components } from "react-markdown";

const components: Components = {
    code(props: any) {
        const { inline, className, children } = props;

        const [copied, setCopied] = useState(false);

        if (inline) {
        return (
            <code className="bg-gray-700 px-1 py-0.5 rounded text-sm">
            {children}
            </code>
        );
        }

        const text = Array.isArray(children) ? children.join("") : String(children);

        const handleCopy = async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
        };

        return (
        <div className="bg-black rounded-lg overflow-x-auto text-sm relative">
            <button
            onClick={handleCopy}
            className="absolute top-2 right-2 text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
            >
            {copied ? "Copied" : "Copy"}
            </button>

            <pre className="p-3">
            <code className={className}>{children}</code>
            </pre>
        </div>
        );
    },
};

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
      components={components}
    >
      {content}
    </ReactMarkdown>
  );
}
