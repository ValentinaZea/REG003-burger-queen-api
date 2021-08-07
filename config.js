const env = process.env;
const config = {
    db:{
        port: process.argv[2] || env.PORT || 3000,
        dbUrl: env.DB_URL || 'postgresql://localhost:8088/bq',
        secret: env.JWT_SECRET || 'esta-es-la-api-burger-queen',
        adminEmail: env.ADMIN_EMAIL || 'user@domain.com',
        adminPassword: env.ADMIN_PASSWORD || 'secret'
    }

}



module.exports = config;