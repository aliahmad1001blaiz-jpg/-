module.exports = {
  name: "promote",
  description: "Promote member to admin",

  async execute(sock, m) {
    try {
      const jid = m.key.remoteJid;

      if (!jid.endsWith("@g.us")) {
        return await sock.sendMessage(jid, {
          text: "❌ این دستور فقط در گروه قابل استفاده است."
        });
      }

      if (!m.message?.extendedTextMessage?.contextInfo?.mentionedJid) {
        return await sock.sendMessage(jid, {
          text: "⚠️ یک عضو را منشن کنید."
        });
      }

      const user = m.message.extendedTextMessage.contextInfo.mentionedJid[0];

      await sock.groupParticipantsUpdate(
        jid,
        [user],
        "promote"
      );

      await sock.sendMessage(jid, {
        text: `✅ @${user.split("@")[0]} مدیر گروه شد.`,
        mentions: [user]
      });

    } catch (err) {
      console.log(err);

      await sock.sendMessage(m.key.remoteJid, {
        text: "❌ نتوانستم عضو را مدیر کنم."
      });
    }
  }
};
