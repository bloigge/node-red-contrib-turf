module.exports = function(RED) {
    function TurfNode(config) {
        var turf = require('@turf/turf');
        RED.nodes.createNode(this,config);
        this.fn = config.fn || "";
        var node = this;
        this.on('input', function(msg) {
            var turffunction = node.fn || msg.topic;
            var turfcontext = msg.payload;
            if (turffunction && typeof turffunction === "string" && turffunction.length > 0) {
                if (!Array.isArray(turfcontext)) { turfcontext = [ turfcontext ]; }
                try {
                    this.status({fill:"blue",shape:"ring",text:turffunction});
                    if (turffunction === "featureEach" || turffunction === "geomEach" || turffunction === "propEach") {
                        turf[turffunction].apply(null, turfcontext);
                        msg.payload = turfcontext[0];
                    }
                    else if (turffunction === "clusterEach") {
                        var values = [];
                        turf.clusterEach(turfcontext[0], 'cluster', function (cluster, clusterValue) {
                            values.push(cluster);
                        });
                        msg.payload = values;
                    }
                    else {
                        msg.payload = turf[turffunction].apply(null, turfcontext);
                    }
                    node.send(msg);
                } catch (err) {
                    this.status({fill:"red",shape:"dot",text:"error"});
                    node.error(err,msg);
                }
            }
            else {
                this.status({fill:"red",shape:"dot",text:"error"});
                node.error("topic not a turf command",msg);
            }
        });
    }
    RED.nodes.registerType("turf",TurfNode);
}