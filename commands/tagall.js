module.exports = {
  name: "tagall",
  description: "Tag all members",

  async execute(sock, m) {
    try {
      const jid = m.key.remoteJid;

      if (!jid.endsWith("@g.us")) {
        return await sock.sendMessage(jid, {
          text: "❌ این دستور فقط در گروه قابل استفاده است."
        });
      }

      const metadata = await sock.groupMetadata(jid);
      const participants = metadata.participants;

      let text = `📢 *تگ همه اعضای گروه*\n\n`;

      let mentions = [];

      for (let member of participants) {
        mentions.push(member.id);
        text += `➤ @${member.id.split("@")[0]}\n`;
      }

      await sock.sendMessage(jid, {
        text,
        mentions
      });

    } catch (err) {
      console.log(err);

      await sock.sendMessage(m.key.remoteJid, {
        text: "❌ خطا در اجرای دستور Tag All."
      });
    }
  }
};
