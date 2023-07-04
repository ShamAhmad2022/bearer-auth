'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userSchema = (sequelize, DataTypes) => {
  const model = sequelize.define('users', {
    username: { 
      type: DataTypes.STRING, 
      allowNull: false, 
      unique: true 
    },
    
    password: { 
      type: DataTypes.STRING, 
      allowNull: false, 
    },
    
    token: {
      type: DataTypes.VIRTUAL,
      get() {
        const payload = { username: this.username };
        const secretKey = process.env.SECRET;
        const iv = crypto.randomBytes(16);

        const cipher = crypto.createCipher('aes-256-cbc', secretKey);
        let encryptedPayload = cipher.update(JSON.stringify(payload), 'utf8', 'base64');
        encryptedPayload += cipher.final('base64');

        const signedToken = jwt.sign({ token: encryptedPayload, iv: iv.toString('base64') }, secretKey, { expiresIn: '900' });
        return `${signedToken}`;
      }
    }
  });

  model.beforeCreate(async (user) => {
    let hashedPass = await bcrypt.hash(user.password, 10);
    user.password = hashedPass;
  });

  // Basic AUTH: Validating strings (username, password) 
  model.authenticateBasic = async function (username, password) {
    const user = await this.findOne({ where: {username} });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) { return user; }
    throw new Error('Invalid User');
  }

  // Bearer AUTH: Validating a token
  model.authenticateToken = async function (token) {
    try {
      const secretKey = process.env.SECRET;
      const decodedToken = jwt.verify(token, secretKey);
      const encryptedPayload = decodedToken.token;
      const iv = Buffer.from(decodedToken.iv, 'base64');

      const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
      let decryptedPayload = decipher.update(encryptedPayload, 'base64', 'utf8');
      decryptedPayload += decipher.final('utf8');

      const parsedToken = JSON.parse(decryptedPayload);
      const user = await this.findOne({where: {username: parsedToken.username} })
      if (user) { return user; }
      throw new Error("User Not Found");
    } catch (e) {
      throw new Error(e.message)
    }
  }

  return model;
}

module.exports = userSchema;
