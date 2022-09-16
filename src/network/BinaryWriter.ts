export default class BinaryWriter {
    private readonly dataView: DataView;
    private cursor: number = 0;

    public constructor() {
        this.dataView = new DataView(new ArrayBuffer(1024 * 4));
    }

    public getBuffer(): ArrayBuffer {
        return this.dataView.buffer;
    }

    public writeBoolean(value: boolean): void {
        this.writeByte(value ? 1 : 0);
    }

    public writeByte(value: number): void {
        this.dataView.setInt8(this.cursor++, value);
    }

    public writeUnsignedByte(value: number): void {
        this.dataView.setUint8(this.cursor++, value);
    }

    public writeShort(value: number): void {
        this.dataView.setInt16(this.cursor, value);
        this.cursor += 2;
    }

    public writeUnsignedShort(value: number): void {
        this.dataView.setUint16(this.cursor, value);
        this.cursor += 2;
    }

    public writeInt(value: number): void {
        this.dataView.setInt32(this.cursor, value);
        this.cursor += 4;
    }

    public writeUnsignedInt(value: number): void {
        this.dataView.setUint32(this.cursor, value);
        this.cursor += 4;
    }

    public writeLong(value: bigint): void {
        this.dataView.setBigInt64(this.cursor, value);
        this.cursor += 8;
    }

    public writeUnsignedLong(value: bigint): void {
        this.dataView.setBigUint64(this.cursor, value);
        this.cursor += 8;
    }

    public writeFloat(value: number): void {
        this.dataView.setFloat32(this.cursor, value);
        this.cursor += 4;
    }

    public writeDouble(value: number): void {
        this.dataView.setFloat64(this.cursor, value);
        this.cursor += 8;
    }
}
