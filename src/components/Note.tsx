import React, { useState } from "react";
import { TextInput } from "react-native";
import MarkdownRenderer from "./MarkdownRenderer";
import ToggleSwitch from "./ToggleSwitch";

export default function Note() {
  const [text, setText] = useState("");
  const [renderMarkdown, setRenderMarkdown] = useState(false);

  return (
    <div>
      <div>
        {renderMarkdown ? (
          <MarkdownRenderer markdown={text} />
        ) : (
          <TextInput
            style={{ height: 100 }}
            placeholder="Type your markdown here!!"
            onChangeText={(text) => setText(text)}
            defaultValue={text}
            multiline={true}
          />
        )}
      </div>
      <ToggleSwitch
        on={renderMarkdown}
        changed={(event: React.ChangeEvent) => {
          setRenderMarkdown(!renderMarkdown);
        }}
      />
    </div>
  );
}
