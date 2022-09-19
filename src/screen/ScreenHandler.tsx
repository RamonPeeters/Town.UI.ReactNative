import React, { ReactNode } from "react";
import MainScreen from "./MainScreen";

export default class ScreenHandler {
    private onScreenUpdate: EventTarget = new EventTarget();
    private screen: ReactNode;

    public constructor() {
        this.screen = <MainScreen></MainScreen>;
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
