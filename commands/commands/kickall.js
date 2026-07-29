module.exports = {
  name: "kickall",
  description: "حذف همه اعضای گروه",

  async execute(sock, m) {
    try {
      if (!m.isGroup) {
        return await sock.sendMessage(m.key.remoteJid, {
          text: "❌ این دستور فقط در گروه قابل استفاده است."
        });
      }

      const metadata = await sock.groupMetadata(m.key.remoteJid);

      const owner = metadata.owner;
      const me = sock.user.id.split(":")[0] + "@s.whatsapp.net";

      const members = metadata.participants
        .filter(p =>
          p.id !== owner &&
          p.id !== me &&
          !p.admin
        )
        .map(p => p.id);

      if (members.length === 0) {
        return await sock.sendMessage(m.key.remoteJid, {
          text: "⚠️ هیچ عضو عادی برای حذف وجود ندارد."
        });
      }

      for (const user of members) {
        try {
          await sock.groupParticipantsUpdate(
            m.key.remoteJid,
            [user],
            "remove"
          );
        } catch {}
      }

      await sock.sendMessage(m.key.remoteJid, {
        text: `✅ ${members.length} عضو حذف شدند.`
      });

    } catch (err) {
      await sock.sendMessage(m.key.remoteJid, {
        text: "❌ عملیات حذف همه اعضا انجام نشد."
      });
    }
  }
};
