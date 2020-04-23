const {
  Collection,
  Guild,
  GuildAuditLogs,
  GuildChannel,
  GuildEmoji,
  GuildMember,
  GuildChannelManager,
  GuildEmojiManager,
  GuildEmojiRoleManager,
  GuildManager,
  GuildMemberManager,
  GuildMemberRoleManager,
  RoleManager,
  Role,
} = require("discord.js");

/**
 * @module src/guild
 * @since 0.1.16-beta
 */

/**
 * guild hub
 * @since 0.2.0-beta
 * @class GHUB
 */

module.exports.GHUB = class extends GuildManager {
  /**
   * @typedef {string} Snowflake
   */
  /**
   * @typedef {Collection<Snowflake,Guild>} GuildCollection
   * @description Collection of guilds
   */
  /**
   * Get size of Client guild count OR GuildInstance count
   * @param {GuildCollection|Array} GuildInstance
   */
  static GetSize(GuildInstance = []) {
    if (GuildInstance instanceof Array) {
      GuildInstance = this.guilds.cache;
    }
    if (
      !(GuildInstance instanceof Array) &&
      !(GuildInstance instanceof Collection)
    ) {
      throw new Error("GuildInstance must be instance of Array, or Collection");
    }
  }
};
