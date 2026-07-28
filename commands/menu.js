module.exports = {
  name: "menu",
  description: "Bot Menu",

  async execute(sock, m) {
    const menu = `
╭━━〔 🤖 𝐇𝐚𝐦𝐤𝐚𝐫 𝐀𝐥𝐛𝐞𝐫𝐭 𝐄𝐢𝐧𝐬𝐭𝐞𝐢𝐧 〕━━⬣
┃ 👨‍💻 سازنده : علی احمد کندزی
┃ 🤖 ربات : Kandzai Bot
┃ ⚡ نسخه : V1.0
╰━━━━━━━━━━━━━━━━━━━━⬣

╭━━〔 📋 دستورات ربات 〕━━⬣

👋 .welcome     ⇢ خوش‌آمدگویی
🚪 .goodbye     ⇢ پیام خروج
🏷️ .tagall      ⇢ تگ همه اعضا
👑 .promote     ⇢ مدیر کردن عضو
❌ .demote      ⇢ برداشتن مدیریت
🚫 .kick        ⇢ حذف عضو
➕ .add         ⇢ افزودن عضو
💥 .kickall     ⇢ حذف همه اعضا
🔒 .close       ⇢ بستن گروه
🔓 .open        ⇢ باز کردن گروه
⏰ .settime     ⇢ زمان‌بندی گروه
📢 .broadcast   ⇢ ارسال به همه گروه‌ها

━━━━━━━━━━━━━━━━━━

🔗 .antilink      ⇢ ضد لینک
🎭 .antisticker   ⇢ ضد استیکر
🎤 .antivoice     ⇢ ضد ویس
🖼️ .antiimage     ⇢ ضد تصویر
🎥 .antivideo     ⇢ ضد ویدیو
📁 .antifile      ⇢ ضد فایل
📨 .antiforward   ⇢ ضد فوروارد
👤 .antishare     ⇢ ضد اشتراک‌گذاری
📞 .anticall      ⇢ ضد تماس
✍️ .antitext      ⇢ ضد متن طولانی

━━━━━━━━━━━━━━━━━━

⚙️ .delete      ⇢ حذف پیام
⚙️ .kickmode    ⇢ حذف پیام + حذف عضو
⚙️ .lockmode    ⇢ قفل خودکار گروه

━━━━━━━━━━━━━━━━━━

📢 Channel:
https://whatsapp.com/channel/0029Vb8rBsv5fM5YZl7RuK0I

╰━━〔 🤖 Kandzai Bot 〕━━⬣`;

    await sock.sendMessage(m.key.remoteJid, {
      text: menu
    });
  }
};
