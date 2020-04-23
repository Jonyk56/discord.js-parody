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
   * * A Twitter snowflake, except the epoch is 2015-01-01T00:00:00.000Z
   * ```
   * If we have a snowflake '266241948824764416' we can represent it as binary:
   *
   * 64                                          22     17     12          0
   *  000000111011000111100001101001000101000000  00001  00000  000000000000
   *       number of ms since Discord epoch       worker  pid    increment
   * ```
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
