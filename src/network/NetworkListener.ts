import JoinLobbyPacket from "./packet/JoinLobbyPacket";

export default interface NetworkListener {
    onJoinLobby(packet: JoinLobbyPacket): void;
}
