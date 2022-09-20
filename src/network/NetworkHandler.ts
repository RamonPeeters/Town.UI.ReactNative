export default class NetworkHandler {
    private readonly connection: WebSocket;

    private constructor(connection: WebSocket) {
        this.connection = connection;
        this.connection.binaryType = "arraybuffer";
        this.connection.onopen = this.onOpen.bind(this);
        this.connection.onmessage = this.onMessage.bind(this);
        this.connection.onerror = this.onError.bind(this);
        this.connection.onclose = this.onClose.bind(this);
    }

    public disconnect(): void {
        console.log(`Disconnecting from ${this.connection.url}`);
        this.connection.close(1000, "Client disconnected");
    }

    private onOpen(e: Event): void {
        console.log("Opened connection");
    }

    private onMessage(e: MessageEvent<ArrayBuffer>): void {
        console.log("Received message");
    }

    private onError(e: Event): void {
        console.log("Error in connection");
    }

    private onClose(e: CloseEvent): void {
        console.log("Closed connection");
    }

    public static connect(address: string): NetworkHandler {
        console.log(`Connecting to ${address}`);
        return new NetworkHandler(new WebSocket(address));
    }
}
