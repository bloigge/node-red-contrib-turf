module.exports = function(RED) {
    function TurfNode(config) {
        var turf = require('turf');
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
            var turffunction = msg.topic;
            var turfcontext = msg.payload;
            
            try {
                this.status({fill:"blue",shape:"dot",text:"calculating"});
                var output = turf[turffunction].apply(null, turfcontext);
                msg.payload = output;
                this.status({});
                node.send(msg)   
            } catch (err) {
                this.status({fill:"red",shape:"dot",text:"error"});
                node.warn(err)
                this.status({});
            }
        });
    }
    RED.nodes.registerType("turf",TurfNode);
}