const {PrismaClient} = require('@prisma/client'),
    prisma = new PrismaClient();

module.exports = {
    categorys : prisma.categorys,
    accounts : prisma.accounts
}