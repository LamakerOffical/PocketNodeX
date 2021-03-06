const DataPacket = require("./DataPacket");
const ProtocolInfo = require("../Info");

class RequestChunkRadiusPacket extends DataPacket {
    static getId() {
        return ProtocolInfo.REQUEST_CHUNK_RADIUS_PACKET;
    }

    /** @type {number} */
    radius = 0;

    _decodePayload() {
        this.radius = this.readVarInt();
    }

    _encodePayload() {
        this.writeVarInt(this.radius);
    }

    handle(session) {
        return session.handleRequestChunkRadius(this);
    }
}

module.exports = RequestChunkRadiusPacket;