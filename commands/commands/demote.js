module.exports = {
  name: "demote",
  description: "Remove admin from member",

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
          text: "⚠️ لطفاً یک مدیر را منشن کنید."
        });
      }

      const user = mentioned[0];

      await sock.groupParticipantsUpdate(
        jid,
        [user],
        "demote"
      );

      await sock.sendMessage(jid, {
        text: `✅ مدیریت @${user.split("@")[0]} برداشته شد.`,
        mentions: [user]
      });

    } catch (err) {
      console.log(err);

      await sock.sendMessage(m.key.remoteJid, {
        text: "❌ خطا در برداشتن مدیریت."
      });
    }
  }
};
