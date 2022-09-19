import React, { ReactNode } from "react";
import { Text, View } from "react-native";
import Screen from "./Screen";

export default class MainScreen extends Screen {
    public render(): ReactNode {
        return (
            <View>
                <Text>Main Screen</Text>
            </View>
        );
    }
}
