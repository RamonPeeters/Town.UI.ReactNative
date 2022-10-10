import NetworkHandler from "./network/NetworkHandler";
import ScreenHandler from "./screen/ScreenHandler";
import AppData from '../app.json';
import { AuthorizeResult } from "react-native-app-auth";

export default class TownClient {
    private static instance: TownClient;

    private readonly screenHandler: ScreenHandler = new ScreenHandler(this);
    private networkHandler: NetworkHandler;
    private authentication: AuthorizeResult;

    public constructor() {
        TownClient.instance = this;
    }

    public static getInstance(): TownClient {
        return TownClient.instance;
    }

    public setAuthentication(authentication: AuthorizeResult): void {
        this.authentication = authentication;
    }

    public getScreenHandler(): ScreenHandler {
        return this.screenHandler;
    }

    public getNetworkHandler(): NetworkHandler {
        return this.networkHandler;
    }

    public connect(): void {
        this.disconnect();
        this.networkHandler = NetworkHandler.connect(this.createAuthenticationUrl());
    }

    private createAuthenticationUrl(): string {
        if (this.authentication == null) {
            throw new Error("Unable to create authentication URL");
        }
        
        let params: URLSearchParams = new URLSearchParams();
        params.append("access_token", this.authentication.accessToken);
        return AppData.serverAddress + "?" + params.toString();
    }

    private disconnect(): void {
        if (this.networkHandler == null) {
            return;
        }
        this.networkHandler.disconnect();
    }
}
