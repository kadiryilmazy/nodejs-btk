//! ==================== MODÜL YÜKLEMELERİ ====================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

//* Express uygulaması oluşturuluyor
const app = express();

//! ==================== VIEW ENGINE AYARLARI ====================
app.set("view engine", "pug"); // Pug şablon motoru olarak ayarlanıyor
app.set("views", "./views"); // Pug dosyalarının bulunduğu klasör

//! ==================== ROUTE & CONTROLLER ====================
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/shop");
const errorController = require("./controllers/errors");
const User = require("./models/user");

//! ==================== VERİTABANI BAĞLANTISI ====================
const { mongoConnect } = require("./utility/database");

//! ==================== MIDDLEWARE TANIMLARI ====================

app.use(bodyParser.urlencoded({ extended: false })); // Form verisi çözümleme
app.use(express.static(path.join(__dirname, "public"))); // Statik dosyalar (CSS, JS, img)

app.use((req, res, next) => {
    User.findOne({ name: "admin" })
        .then((user) => {
            req.user = user; // Kullanıcıyı request objesine ekle
            next();
        })
        .catch((err) => {
            console.error("Error fetching user:", err);
            next(err);
        });
});

//! ==================== ROUTE YÖNLENDİRMELERİ ====================
app.use("/admin", adminRoutes); // Admin paneli yolları
app.use(userRoutes); // Kullanıcı tarafı yollar

//! ==================== 404 HATA YAKALAYICI ====================
app.use(errorController.get404Page); // Bulunamayan sayfa yönlendirmesi

//! ==================== VERİTABANI BAĞLANTISI & SUNUCUYU BAŞLAT ====================
require("dotenv").config();
mongoose
    .connect(process.env.MONGO_URI)
    .then(async () => {
        console.log("✅ MongoDB bağlantısı başarılı");

        User.findOne({ name: "admin" })
            .then((user) => {
                if (!user) {
                    const newUser = new User({
                        name: "admin",
                        email: "email@admin.com",
                        cart: { items: [] },
                    });

                    newUser
                        .save()
                        .then(() => {
                            console.log("Admin user created.");
                        })
                        .catch((err) => {
                            console.error("Error saving admin user:", err);
                        });
                }
            })
            .catch((err) => {
                console.error("Error fetching user:", err);
            });

        app.listen(3000, () => {
            console.log("🚀 Sunucu 3000 portunda çalışıyor");
        });
    })
    .catch((err) => {
        console.error("❌ Bağlantı hatası:", err);
    });
