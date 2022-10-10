import React, { ReactNode } from "react";
import { Button, Text, View } from "react-native";
import AuthenticationScreen from "./AuthenticationScreen";
import Screen from "./Screen";

export default class MainScreen extends Screen {
    public render(): ReactNode {
        return (
            <View>
                <Text>Main Screen</Text>
                <Button onPress={() => this.clickedJoinLobby()} title="Join Lobby"></Button>
                <Button onPress={() => this.clickedAuthScreen()} title="LOGIN"></Button>
            </View>
        );
    }

    private clickedJoinLobby(): void {
        this.props.client.connect();
    }

    private clickedAuthScreen(): void {
        this.props.client.getScreenHandler().setScreen(<AuthenticationScreen client={this.props.client}></AuthenticationScreen>)
    }
}
