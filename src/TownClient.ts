import NetworkHandler from "./network/NetworkHandler";
import ScreenHandler from "./screen/ScreenHandler";
import AppData from '../app.json';

export default class TownClient {
    private static instance: TownClient;

    private readonly screenHandler: ScreenHandler = new ScreenHandler(this);
    private networkHandler: NetworkHandler;

    public constructor() {
        TownClient.instance = this;
    }

    public static getInstance(): TownClient {
        return TownClient.instance;
    }

    public getScreenHandler(): ScreenHandler {
        return this.screenHandler;
    }

    public getNetworkHandler(): NetworkHandler {
        return this.networkHandler;
    }

    public connect(): void {
        this.disconnect();
        this.networkHandler = NetworkHandler.connect(AppData.serverAddress);
    }

    private disconnect(): void {
        if (this.networkHandler == null) {
            return;
        }
        this.networkHandler.disconnect();
    }
}
