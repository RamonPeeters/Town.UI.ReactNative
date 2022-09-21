import BinaryReader from "./BinaryReader";
import BinaryWriter from './BinaryWriter';
import NetworkListener from "./NetworkListener";

export default interface Packet {
    read(reader: BinaryReader): void;
    write(writer: BinaryWriter): void;
    apply(listener: NetworkListener): void;
}
