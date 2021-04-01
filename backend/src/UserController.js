const PseudoModel = require("./PseudoModel");
const UserView = require("./UserView");

module.exports = {
  async insert(req, res) {
    const { user } = req.body;

    const result = PseudoModel.save(user);

    if (result && result.error) return res.status(500);

    return res.status(200);
  },

  async find(req, res) {
    const files = await PseudoModel.load();

    res.send(UserView.renderMany(files));
  },
};
