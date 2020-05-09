import React from "react";
import { StyleSheet } from "react-native";

type Props = {
  on: boolean;
  changed: (event: React.ChangeEvent) => void;
};

export default function ToggleSwitch(props: Props) {
  return (
    <label className="switch">
      <input type="checkbox" checked={props.on} onChange={props.changed} />
      <span className="slider round"></span>
    </label>
  );
}
