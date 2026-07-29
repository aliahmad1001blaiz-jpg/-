heremodule.exports = {
  name: "add",
  description: "افزودن عضو به گروه",

  async execute(sock, m, args) {
    try {
      if (!m.isGroup) {
        return await sock.sendMessage(m.key.remoteJid, {
          text: "❌ این دستور فقط در گروه قابل استفاده است."
        });
      }

      if (!args[0]) {
        return await sock.sendMessage(m.key.remoteJid, {
          text: "📌 مثال:\n.add 937XXXXXXXX"
        });
      }

      let number = args[0].replace(/[^0-9]/g, "");

      if (!number.endsWith("@s.whatsapp.net")) {
        number = number + "@s.whatsapp.net";
      }

      await sock.groupParticipantsUpdate(
        m.key.remoteJid,
        [number],
        "add"
      );

      await sock.sendMessage(m.key.remoteJid, {
        text: "✅ عضو با موفقیت اضافه شد."
      });

    } catch (e) {
      await sock.sendMessage(m.key.remoteJid, {
        text: "❌ افزودن عضو انجام نشد."
      });
    }
  }
};
