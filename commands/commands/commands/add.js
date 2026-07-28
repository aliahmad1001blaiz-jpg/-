module.exports = {
  name: "add",
  description: "Add member to group",

  async execute(sock, m, args) {
    try {
      const jid = m.key.remoteJid;

      if (!jid.endsWith("@g.us")) {
        return await sock.sendMessage(jid, {
          text: "❌ این دستور فقط در گروه قابل استفاده است."
        });
      }

      if (!args || args.length === 0) {
        return await sock.sendMessage(jid, {
          text: "⚠️ شماره را وارد کنید.\nمثال:\n.add 93701234567"
        });
      }

      let number = args[0].replace(/[^0-9]/g, "");

      if (!number.startsWith("93")) {
        number = "93" + number;
      }

      const user = number + "@s.whatsapp.net";

      await sock.groupParticipantsUpdate(
        jid,
        [user],
        "add"
      );

      await sock.sendMessage(jid, {
        text: `✅ ${number} به گروه اضافه شد.`
      });

    } catch (err) {
      console.log(err);

      await sock.sendMessage(m.key.remoteJid, {
        text: "❌ نتوانستم عضو را اضافه کنم."
      });
    }
  }
};
