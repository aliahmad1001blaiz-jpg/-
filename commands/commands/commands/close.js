module.exports = {
  name: "close",
  description: "بستن گروه",

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
        "announcement"
      );

      await sock.sendMessage(jid, {
        text: "🔒 گروه بسته شد.\nاز این پس فقط مدیران می‌توانند پیام ارسال کنند."
      });

    } catch (err) {
      console.log(err);

      await sock.sendMessage(m.key.remoteJid, {
        text: "❌ نتوانستم گروه را ببندم."
      });
    }
  }
};
