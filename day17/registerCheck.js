// let register = prompt("register dugaar oruulna uu");
const register = "УХ92011418";
let registerInput = register.split("");

const alphabet = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "Р",
  "С",
  "Т",
  "Ф",
  "Х",
  "У",
  "Ц",
];

function isCorrectReg(reg) {
  if (
    alphabet.includes(reg[0]) &&
    alphabet.includes(reg[1]) &&
    Number.isInteger(Number(reg.slice(2, 10))) &&
    reg.length == 10
  ) {
    getRegisterInfo(reg);
  } else {
    console.log("register buruu");
  }
}

isCorrectReg(register);
function gerRegisterInfo(reg) {
  const huis = gerGender(reg[8]);
  const birthday = getBirthday();
  const birthRegion = getBirthRegion();

  console.log("huis: ${huis}");
}

function getGender(number) {
  if (number % 2 == 0) {
    return "emegtei";
  } else {
    return "eregtei";
  }
}

function getBirthday() {
  return;
}
function getBirthRegion() {
  return;
}
