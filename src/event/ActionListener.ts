import Action from "./Action";

export default class ActionListener {
    private readonly listeners: Action[] = [];

    public addListener(listener: Action): void {
        this.listeners.push(listener);
    }

    public removeListener(listener: Action): void {
        let index: number = this.listeners.indexOf(listener);
        if (index == -1) {
            return;
        }
        this.listeners.splice(index, 1);
    }

    public invoke(): void {
        for (let i = 0; i < this.listeners.length; i++) {
            this.listeners[i]();
        }
    }
}
