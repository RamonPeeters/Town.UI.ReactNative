import ScreenHandler from "./screen/ScreenHandler";

export default class TownClient {
    private static instance: TownClient;

    private readonly screenHandler: ScreenHandler = new ScreenHandler();

    public constructor() {
        TownClient.instance = this;
    }

    public static getInstance(): TownClient {
        return TownClient.instance;
    }

    public getScreenHandler(): ScreenHandler {
        return this.screenHandler;
    }
}
