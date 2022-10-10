import React, { ReactNode } from "react";
import { Button, View } from "react-native";
import Screen from "./Screen";

export default class GameScreen extends Screen {
    public render(): ReactNode {
        return (
            <View>
                <Button onPress={() => this.clickedJoinLobby()} title="Join Lobby"></Button>
            </View>
        );
    }

    private clickedJoinLobby(): void {
        this.props.client.connect();
    }
}
