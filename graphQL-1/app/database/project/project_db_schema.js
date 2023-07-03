const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ProjectSchema = new Schema({
  name: { type: String },
  description: { type: String },
  status: { type: String, emum: ["Not Started", "In Progress", "Completed"] },
  clientId: {
    type: Schema.Types.ObjectId,
    ref: "Client",
  },
});

const Project = model("Project", ProjectSchema);

const findAllProjects = async () => {
  try {
    return await Project.find();
  } catch (err) {
    console.log("error in finding Projects", err);
    return [];
  }
};

const findProjectById = async (id) => {
  try {
    if (id) {
      return await Project.findById(id);
    } else {
      return null;
    }
  } catch (err) {
    console.log("error in finding Project", err);
    return [];
  }
};

module.exports = { findProjectById, findAllProjects };
