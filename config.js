const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? '𝐒𝐔𝐋𝐀-𝐌𝐃=wr8zmIiL#VdHh2psiYCN3-T13mbTNDzE285_LAU_kmOwrb7HryPk' : process.env.SESSION_ID,
PREFIX: process.env.PREFIX || '.' ,
SUDO: process.env.SUDO === undefined ? '94762731899' : process.env.SUDO,
MODE: process.env.MODE === undefined ?"privet" : process.env.MODE,
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ?"true" : process.env.AUTO_READ_STATUS
};
