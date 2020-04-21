const { UserManager, ChannelManager, GuildManager, Client } = require("discord.js");

/**
 * Parity client hub 
 * @class ParodyClient
 * @extends Discord.js.Client
 * @since 0.0.1
 */
module.exports.ParodyClient = class extends Client{
    constructor(options = {}){
        super(options)    
    }
    /**
     * Initializes Parity Updater
     * @since 0.0.1
     * @param {Object} options not yet used
     */
    Parody(options = {}){
        this.users = this.users.cache;
    }
}