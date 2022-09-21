import BinaryReader from "../BinaryReader";
import BinaryWriter from "../BinaryWriter";
import NetworkListener from "../NetworkListener";
import Packet from "../Packet";

export default class JoinLobbyPacket implements Packet {
    private id: number = 0;

    public read(reader: BinaryReader): void {
        this.id = reader.readInt();
    }
    
    public write(writer: BinaryWriter): void {
        writer.writeInt(this.id);
    }

    public apply(listener: NetworkListener): void {
        listener.onJoinLobby(this);
    }

    public getId(): number {
        return this.id;
    }
}
