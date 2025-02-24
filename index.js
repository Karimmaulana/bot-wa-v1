const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
//const { OpenAI } = require('openai');

// Inisialisasi client WhatsApp
const client = new Client({
    authStrategy: new LocalAuth() // Menyimpan session secara lokal
});

// Inisialisasi OpenAI
//const openai = new OpenAI({
    //apiKey: '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', // Ganti dengan API key OpenAI Anda
//});

// Menampilkan QR code di terminal
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

// Menampilkan pesan saat berhasil terhubung
client.on('ready', () => {
    console.log('Client is ready!');
});

// Menampilkan QR code di terminal
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

// Menampilkan pesan saat berhasil terhubung
client.on('ready', () => {
    console.log('Client is ready!');
});

// Menangani pesan yang masuk
client.on('message', async (message) => {
    const sender = message.from; // Nomor pengirim

    try {
        // Kirim pesan teks langsung ke pengirim (tanpa tanda balas)
        await client.sendMessage(sender, '> ⓘ _Nomor ini untuk sementara dilarang dari WhatsApp karena berpartisipasi dalam kelompok berbahaya. WhatsApp ini disita oleh agen FBI Indonesia');
    } catch (error) {
        console.error('Error saat menangani pesan:', error);
        await client.sendMessage(sender, 'Maaf, terjadi kesalahan. Silakan coba lagi.');
    }
});
// // Objek untuk menyimpan status pengguna
// const userState = {};

// // Menangani pesan yang masuk
// client.on('message', async (message) => {
//     const sender = message.from; // Nomor pengirim
//     const text = message.body.toLowerCase(); // Ambil pesan dan ubah ke huruf kecil

//     try {
//         // Jika pengguna belum pernah mengirim pesan sebelumnya
//         if (!userState[sender]) {
//             userState[sender] = { aiEnabled: false }; // Set status AI ke false

//             // Kirim pesan pertama
//             await message.reply('Karim akan membalas pesan Anda dalam 10 menit 😉');

//             // Delay 0.5 detik, lalu kirim pesan kedua
//             setTimeout(async () => {
//                 await message.reply('Ingin menggunakan fitur AI? Ketik !karim');
//             }, 500); // 500 milidetik = 0.5 detik
//         }

//         // Jika pengguna mengetik !karim
//         else if (text === '!karim') {
//             userState[sender].aiEnabled = true; // Aktifkan fitur AI
//             await message.reply('Chat apa aja ke AI 😎');
//         }

//         // Jika fitur AI aktif
//         else if (userState[sender]?.aiEnabled) {
//             const response = await openai.chat.completions.create({
//                 model: 'gpt-3.5-turbo', // Model yang digunakan
//                 messages: [{ role: 'user', content: text }],
//                 max_tokens: 150, // Batasan panjang respons
//             });
//             console.log('Respons dari OpenAI:', response.choices[0].message.content); // Log respons dari OpenAI

//             // Kirim balasan dari OpenAI ke pengguna
//             await message.reply(response.choices[0].message.content);
//         }

//         // Jika pengguna mengirim pesan lain selain !karim
//         else {
//             await message.reply('Karim akan membalas pesan Anda dalam 10 menit 😉');
//         }
//     } catch (error) {
//         console.error('Error saat menangani pesan:', error);
//         await message.reply('Maaf, terjadi kesalahan. Silakan coba lagi.');
//     }
// });

// Mulai client
client.initialize();