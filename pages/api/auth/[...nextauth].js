import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// -- untuk Telegram, bisa diaktifkan di bawah ini jika sudah punya bot dan id-nya
// import TelegramProvider from "next-auth/providers/telegram";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Aktifkan jika sudah siap:
    // TelegramProvider({
    //   clientId: process.env.TELEGRAM_CLIENT_ID,
    //   clientSecret: process.env.TELEGRAM_CLIENT_SECRET,
    // }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET, // TAMBAHKAN BARIS INI!
  // opsional, untuk custom callback session
  callbacks: {
    async session({ session, token, user }) {
      // bisa tambahkan data ke session jika perlu
      return session;
    },
  },
});
