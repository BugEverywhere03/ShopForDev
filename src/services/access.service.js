"use strict";

import shopModel from "../models/shop.model.js";
import bcrypt from "bcrypt";
import crypto from "crypto";

const RoleShop = {
  SHOP: "WRITE",
  WRITE: "WRITE",
  EDITOR: "EDITOR",
  ADMIN: "ADMIN",
};

class AccessService {
  static signup = async (name, email, password) => {
    try {
      // Check email exists
      const hodelShop = await shopModel.findOne({ email }).lean();
      if (hodelShop) {
        return {
          code: "xxxx",
          message: "Registered is already in Shop!",
        };
      }
      const passwordHash = await bcrypt.hash(password, 10);
      const newShop = await shopModel.create({
        name,
        email,
        password: passwordHash,
        roles: [RoleShop.SHOP],
      });
      if (newShop) {
        // Create privateKey, publicKey
        const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
          modulusLength: 4096,
        });
        console.log(privateKey, publicKey);
      }
    } catch (error) {
      return {
        code: "xxx",
        message: error.message,
        status: "error",
      };
    }
  };
}

export default AccessService;
