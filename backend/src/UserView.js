module.exports = {
  render(user) {
    let { cpf } = user;

    let formattedCpf = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(
      6,
      9
    )}-${cpf.slice(9, 11)}`;

    user.cpf = formattedCpf;

    return user;
  },
  renderMany(users) {
    return users.map((u) => this.render(u));
  },
};
