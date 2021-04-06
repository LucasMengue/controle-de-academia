module.exports = {
  age: function (timestamp) {
    const today = new Date();
    const birthDate = new Date(timestamp);

    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    // age : 34
    // today nov : 10
    // birth nov : 10

    if (month < 0 || (month == 0 && today.getDate() <= birthDate.getDate())) {
      age = age - 1;
    }

    return age;
  },
};
