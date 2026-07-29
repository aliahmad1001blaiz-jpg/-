module.exports = {
  name: "open",
  description: "باز کردن گروه",

  async execute(sock, m) {
    try {
      const jid = m.key.remoteJid;

      if (!jid.endsWith("@g.us")) {
        return await sock.sendMessage(jid, {
          text: "❌ این دستور فقط در گروه قابل استفاده است."
        });
      }

      await sock.groupSettingUpdate(
        jid,
        "not_announcement"
      );

      await sock.sendMessage(jid, {
        text: "🔓 گروه باز شد.\nاکنون همه اعضا می‌توانند پیام ارسال کنند."
      });

    } catch (err) {
      console.log(err);

      await sock.sendMessage(m.key.remoteJid, {
        text: "❌ نتوانستم گروه را باز کنم."
      });
    }
  }
};
