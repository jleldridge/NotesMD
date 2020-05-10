import React from "react";
import { ScrollView } from "react-native";
import Markdown from "react-native-markdown-renderer";

type Props = {
  markdown: string;
  height: number;
  width: number;
};

export default function MarkdownRender(props: Props) {
  console.log(props.width, props.height);
  return (
    <ScrollView
      style={{
        padding: 10,
        width: props.width,
        height: props.height,
      }}
    >
      <Markdown>{props.markdown}</Markdown>
    </ScrollView>
  );
}
