const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ClientSchema = new Schema({
  name: { type: String },
  email: { type: String },
});

const Client = model("Client", ClientSchema);

const findAllClient = async () => {
  try {
    return await Client.find();
  } catch (err) {
    console.log("error in finding clients");
    return [];
  }
};

const findClientById = async (id) => {
  try {
    if (id) {
      return await Client.findById(id);
    } else {
      return null;
    }
  } catch (err) {
    console.log("error in finding clients");
    return null;
  }
};

const saveClient = async (clientInput) => {
  try {
    const client = new Client({
      name: clientInput.name,
      email: clientInput.email,
    });
    return await client.save();
  } catch (err) {
    console.log('cleint not saved')
    return null
  }
};

module.exports = { findClientById, findAllClient, saveClient };
