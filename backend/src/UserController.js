const PseudoModel = require("./PseudoModel");
const UserView = require("./UserView");

module.exports = {
  async insert(req, res) {
    const { user } = req.body;

    PseudoModel.save(user);

    return res.status(200);
  },

  async find(req, res) {
    const files = await PseudoModel.load();

    res.send(UserView.renderMany(files));
  },
};
