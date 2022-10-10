import React, { ReactNode } from "react";
import { Button, Text, View } from "react-native";
import { authorize, AuthorizeResult } from "react-native-app-auth";
import Screen from "./Screen";

const config = {
    issuer: "https://accounts.google.com/",
    clientId: "585499288741-01sviskbobknj6jnl4ngu7ki9bjusj49.apps.googleusercontent.com",
    redirectUrl: "com.googleusercontent.apps.585499288741-01sviskbobknj6jnl4ngu7ki9bjusj49:/oauth2redirect/google",
    scopes: [ "openid", "profile" ]
}

export default class AuthenticationScreen extends Screen {
    public render(): ReactNode {
        return (
            <View>
                <Text>Google Auth</Text>
                <Button onPress={async () => await this.authGoogle()} title="Log in"></Button>
            </View>
        );
    }

    private async authGoogle(): Promise<void> {
        try {
            let c: AuthorizeResult = await authorize(config);
            console.log(c);
        } catch (e) {
            console.log("ERROR: " + e);
        }
    }
}
