// LITERAL
console.log("----LITERAL----");
const newFungsi = (literal = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName: function () {
      console.log(firstName + " " + lastName);
    },
  };
});

// kode di bawah ini jangan diubah atau dihapus sama sekali
console.log(newFungsi("John", "Doe").firstName);
console.log(newFungsi("Richard", "Roe").lastName);
newFungsi("William", "Imoh").fullName();
