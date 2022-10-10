import React, { ReactNode } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { authorize, AuthorizeResult } from "react-native-app-auth";
import GameScreen from "./GameScreen";
import Screen from "./Screen";

export default class MainScreen extends Screen {
    public render(): ReactNode {
        return (
            <View style={STYLES.container}>
                <Text style={STYLES.title}>Log In</Text>
                <Button onPress={async () => await this.authenticateGoogle()} title="Log in with Google"></Button>
            </View>
        );
    }

    private async authenticateGoogle(): Promise<void> {
        try {
            let c: AuthorizeResult = await authorize(config);
            this.props.client.setAuthentication(c);
            this.props.client.getScreenHandler().setScreen(<GameScreen client={this.props.client}></GameScreen>);
        } catch (e) {
            console.log("ERROR: " + e);
        }
    }
}

const config = {
    issuer: "https://accounts.google.com/",
    clientId: "585499288741-01sviskbobknj6jnl4ngu7ki9bjusj49.apps.googleusercontent.com",
    redirectUrl: "com.googleusercontent.apps.585499288741-01sviskbobknj6jnl4ngu7ki9bjusj49:/oauth2redirect/google",
    scopes: [ "openid", "profile" ]
}

const STYLES = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    title: {
        marginVertical: 10,
        fontSize: 24
    }
});
