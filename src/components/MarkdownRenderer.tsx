import React from "react";
import { ScrollView } from "react-native";
import Markdown from "react-native-markdown-renderer";

type Props = {
  markdown: string;
  style?: any;
};

export default function MarkdownRender(props: Props) {
  return (
    <ScrollView style={props.style}>
      <Markdown>{props.markdown}</Markdown>
    </ScrollView>
  );
}
