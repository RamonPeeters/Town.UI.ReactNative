import Constructor from "../util/Constructor";
import JoinLobbyPacket from "./packet/JoinLobbyPacket";
import Packet from "./Packet";

export default class Packets {
    private static readonly packets: Map<number, Constructor<Packet>> = new Map<number, Constructor<Packet>>([
        [ 1, JoinLobbyPacket ]
    ]);

    private constructor() {}

    public static createPacket(id: number): Packet {
        let initialiser: Constructor<Packet> | undefined = Packets.packets.get(id);
        if (initialiser == undefined) {
            throw new Error(`Invalid packet id ${id}`);
        }
        return new initialiser();
    }
}
