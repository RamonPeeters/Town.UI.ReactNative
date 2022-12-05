import NetworkHandler from "./network/NetworkHandler";
import ScreenHandler from "./screen/ScreenHandler";
import AppData from '../app.json';
import { AuthorizeResult } from "react-native-app-auth";

export default class TownClient {
    private static instance: TownClient;

    private readonly screenHandler: ScreenHandler = new ScreenHandler(this);
    private networkHandler: NetworkHandler;
    private authorisation: AuthorizeResult;

    public constructor() {
        TownClient.instance = this;
    }

    public static getInstance(): TownClient {
        return TownClient.instance;
    }

    public setAuthentication(authorisation: AuthorizeResult): void {
        this.authorisation = authorisation;
    }

    public getScreenHandler(): ScreenHandler {
        return this.screenHandler;
    }

    public getNetworkHandler(): NetworkHandler {
        return this.networkHandler;
    }

    public connect(): void {
        this.disconnect();
        this.networkHandler = NetworkHandler.connect(this.createAuthorisationUrl());
    }

    private createAuthorisationUrl(): string {
        if (this.authorisation == null) {
            throw new Error("Unable to create authentication URL");
        }
        
        let params: URLSearchParams = new URLSearchParams();
        params.append("token", this.authorisation.accessToken);
        return AppData.serverAddress + "?" + params.toString();
    }

    private disconnect(): void {
        if (this.networkHandler == null) {
            return;
        }
        this.networkHandler.disconnect();
    }
}
