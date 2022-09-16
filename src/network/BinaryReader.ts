export default class BinaryReader {
    private readonly dataView: DataView;
    private cursor: number = 0;

    public constructor(buffer: ArrayBuffer) {
        this.dataView = new DataView(buffer);
    }

    public readBoolean(): boolean {
        return this.readByte() != 0;
    }

    public readByte(): number {
        return this.dataView.getInt8(this.cursor++);
    }

    public readUnsignedByte(): number {
        return this.dataView.getUint8(this.cursor++);
    }

    public readShort(): number {
        let value = this.dataView.getInt16(this.cursor);
        this.cursor += 2;
        return value;
    }

    public readUnsignedShort(): number {
        let value = this.dataView.getUint16(this.cursor);
        this.cursor += 2;
        return value;
    }

    public readInt(): number {
        let value = this.dataView.getInt32(this.cursor);
        this.cursor += 4;
        return value;
    }

    public readUnsignedInt(): number {
        let value = this.dataView.getUint32(this.cursor);
        this.cursor += 4;
        return value;
    }

    public readLong(): bigint {
        let value = this.dataView.getBigInt64(this.cursor);
        this.cursor += 8;
        return value;
    }

    public readUnsignedLong(): bigint {
        let value = this.dataView.getBigUint64(this.cursor);
        this.cursor += 8;
        return value;
    }

    public readFloat(): number {
        let value = this.dataView.getFloat32(this.cursor);
        this.cursor += 4;
        return value;
    }

    public readDouble(): number {
        let value = this.dataView.getFloat64(this.cursor);
        this.cursor += 8;
        return value;
    }
}
