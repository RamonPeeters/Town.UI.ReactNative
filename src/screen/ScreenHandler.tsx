import React, { ReactNode } from "react";
import TownClient from "../TownClient";
import MainScreen from "./MainScreen";

export default class ScreenHandler {
    private onScreenUpdate: EventTarget = new EventTarget();
    private screen: ReactNode;

    public constructor(client: TownClient) {
        this.screen = <MainScreen client={client}></MainScreen>;
    }

    public getScreen(): ReactNode {
        return this.screen;
    }

    public setScreen(screen: ReactNode) {
        this.screen = screen;
        this.onScreenUpdate.dispatchEvent(new Event(""));
    }

    public addUpdateListener(listener: EventListenerOrEventListenerObject | null): void {
        this.onScreenUpdate.addEventListener("", listener);
    }
}
