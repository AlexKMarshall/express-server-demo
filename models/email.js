const dataStore = {
  alex: "alex@mail.com",
  joe: "joe@mail.com"
}

const findEmail = (name) => {
  const email = dataStore[name];
  if (!email) throw new Error("email not found")
  return email
}

module.exports = {findEmail}