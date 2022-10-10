import React, { ReactNode } from "react";
import Action from "../event/Action";
import ActionListener from "../event/ActionListener";
import TownClient from "../TownClient";
import MainScreen from "./MainScreen";

export default class ScreenHandler {
    private readonly onScreenUpdate: ActionListener = new ActionListener();
    private screen: ReactNode;

    public constructor(client: TownClient) {
        this.screen = <MainScreen client={client}></MainScreen>;
    }

    public getScreen(): ReactNode {
        return this.screen;
    }

    public setScreen(screen: ReactNode) {
        this.screen = screen;
        this.onScreenUpdate.invoke();
    }

    public addUpdateListener(listener: Action): void {
        this.onScreenUpdate.addListener(listener);
    }
}
