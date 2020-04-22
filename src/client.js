const {
    UserManager,
    ChannelManager,
    GuildManager,
    Client,
    Collection,
} = require("discord.js");
//@ts-ignore 1005
/**
 * Parity client hub
 * @class ParodyClient
 * @extends {Client} Discord.js Client
 * @since 0.0.1
 */
module.exports.ParodyClient = class extends Client {
    constructor(options = {}) {
        super(options);
        return this;
    }
    /**
     * @global
     * @typedef {UserManager} UserCacheData
     */

    /**
     * Gains User cache, moves all of it to a seperate object
     * @method UserCache
     * @public
     * @param {UserCacheData} Data
     * @returns null
     */
    UserCache(Data = {}) {
        if (Data == {}) {
            Data = this;
        }
        this._users = this._cache.users = Data;
    }
};
