import React from "react";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

type Props = {
  markdown: string;
};

export default function MarkdownRender(props: Props) {
  let result = md.render(props.markdown);
  return (
    <div
      style={{ padding: 10, fontSize: 24 }}
      dangerouslySetInnerHTML={{ __html: result }}
    />
  );
}
