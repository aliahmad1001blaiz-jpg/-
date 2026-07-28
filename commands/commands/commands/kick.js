module.exports = {
  name: "kick",
  description: "Remove member from group",

  async execute(sock, m) {
    try {
      const jid = m.key.remoteJid;

      if (!jid.endsWith("@g.us")) {
        return await sock.sendMessage(jid, {
          text: "❌ این دستور فقط در گروه قابل استفاده است."
        });
      }

      const mentioned =
        m.message?.extendedTextMessage?.contextInfo?.mentionedJid;

      if (!mentioned || mentioned.length === 0) {
        return await sock.sendMessage(jid, {
          text: "⚠️ لطفاً عضو موردنظر را منشن کنید."
        });
      }

      const user = mentioned[0];

      await sock.groupParticipantsUpdate(
        jid,
        [user],
        "remove"
      );

      await sock.sendMessage(jid, {
        text: `✅ عضو @${user.split("@")[0]} از گروه حذف شد.`,
        mentions: [user]
      });

    } catch (err) {
      console.log(err);

      await sock.sendMessage(m.key.remoteJid, {
        text: "❌ حذف عضو انجام نشد."
      });
    }
  }
};
