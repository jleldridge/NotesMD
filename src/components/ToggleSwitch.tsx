import React from "react";
import { StyleSheet, Switch, Text } from "react-native";

type Props = {
  on: boolean;
  changed: () => void;
};

export default function ToggleSwitch(props: Props) {
  return <Switch value={props.on} onValueChange={props.changed} />;
}
