import React, { ReactNode } from "react";
import { Button, Text, View } from "react-native";
import Screen from "./Screen";

export default class MainScreen extends Screen {
    public render(): ReactNode {
        return (
            <View>
                <Text>Main Screen</Text>
                <Button onPress={() => this.clickedJoinLobby()} title="Join Lobby"></Button>
            </View>
        );
    }

    private clickedJoinLobby(): void {
        this.props.client.connect();
    }
}
