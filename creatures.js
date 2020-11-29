console.log("Begin !!");
console.log("Begin !!");
console.log("Begin !!");

var typeCreature = new Array(5); // arrays for the typology of creatures
var subTypeCr = new Array(3); //  & of subtypes of "water"
//count of 1.cycleTime 2.lifeTimeMenagerie, typeCreature: 3.fire 4.water 5.metal 6.sperit, subTypeCr : 7.ice 8.water 9.sream
InstalCreators(100, 400, 10);

function InstalCreators(cycleTime, lifeTimeMenagerie, typeCreature, subTypeCr) {
  // INSTALLATION DATA
  defaultSameKind = 11;
  this.cycleTime = cycleTime;
  this.lifeTimeMenagerie = lifeTimeMenagerie; // cycle time & life time of the menagerie

  if (this.typeCreature[0] != 0) {
    this.typeCreature[0] = defaultSameKind; //  objects of each type
    // distribution by machine - how many of which types are in the menagerie
    this.typeCreature[1] = this.typeCreature[2] = this.typeCreature[3] = this.typeCreature[4] = this.typeCreature[0];
    // distribution subtypes of type "water" by default
    this.subTypeCr[0] = this.subTypeCr[1] = this.subTypeCr[2] = Math.floor(
      this.typeCreature[0] / 3
    );
    if (this.typeCreature[0] % 3 > 0) {
      ++this.subTypeCr[0];
      if (this.typeCreature[0] % 3 > 1) {
        ++subTypeCr[1];
      }
    }
  } else {
    // if typeCreature[0] = 0 -> MANUALLY SET)
    this.typeCreature[1] = typeCreature[1];
    this.typeCreature[3] = typeCreature[3];
    this.typeCreature[4] = typeCreature[4];
    this.subTypeCr[0] = subTypeCr[0];
    this.subTypeCr[1] = subTypeCr[1];
    this.subTypeCr[2] = subTypeCr[2]; // manually how many creatures are in the "water" subtype
    this.typeCreature[2] =
      this.subTypeCr[0] + this.subTypeCr[1] + this.subTypeCr[2];
    // Total count creatures at the begining
    this.typeCreature[0] =
      this.typeCreature[1] +
      this.typeCreature[2] +
      this.typeCreature[3] +
      this.typeCreature[4];
  }
}

var allCreatures = []; // array for menagerie creatures
year = 0;
gender = 1;
type = 0;
generation = 0; // for 1-st generation
for (i = 0; i < typeCreature[0]; i++) {
  allCreatures[0] = i; // № id
  allCreatures[1] = gender; // gender
  allCreatures[2] = fname(gender); // name
  gender *= -1; // (change gender for future)
  allCreatures[3] = 1; // age
  allCreatures[4] = 10; // lifespan
  if (year == 0) {
    // parents
    allCreatures[5] = 0; // prnt1
    allCreatures[6] = 0;
  } // prnt2
  allCreatures[7] = 0; // type
  allCreatures[8] = 0; // subtype
}

allCreatures[i] = {
  N: i,
  name_: fname(gender),
  age: 1,
  lifespan: 10,
  gender: gender,
  prnt1: prnt1,
  prnt2: prnt2,
  type: type,
};

function fname(gender) {
  // come up with a name
  consonants = [
    `ц`,
    `к`,
    `н`,
    `г`,
    `ш`,
    `щ`,
    `з`,
    `х`,
    `ф`,
    `в`,
    `п`,
    `р`,
    `л`,
    `д`,
    `ж`,
    `ч`,
    `м`,
    `т`,
    `б`,
  ];
  consonantsLen = consonants.length; // agree / array value
  vowels = ["у", "е", "а", "о", "я", "и", "э", "ю"];
  vowelsLen = vowels.length; //vowel / array value
  femEndingNames = ["ая", "ия", "уя", "а", "я"];
  femEndNamesLen = femEndingNames.length; // end female names / array value
  nameLen = rnd(10, 1); //name length from 2 to 11 letters
  vowelСonsonantSwitch = gender;
  nameCreature = ""; // empty name
  for (letterName = 0; letterName < nameLen; letterName++) {
    // choose the ending of the female/male name depends of gender
    if (vowelСonsonantSwitch == -1) {
      // first choise - random female ending of name, else - random vowel
      if (letterName == 0) {
        nameCreature = femEndingNames[rnd(femEndNamesLen, -1)];
      } else {
        vowels[rnd(vowels, -1)] + nameCreature;
      }
    } else {
      nameCreature = consonants[rnd(consonants, -1)] + nameCreature;
    }
    vowelСonsonantSwitch = -vowelСonsonantSwitch;
  }
  return nameCreature;
}

function rnd(a, b) {
  // random element of the array
  return Math.ceil(Math.random() * a + b);
}

//-----------------------------------------------------
timerId = setInterval(zzz, t); // repeat after t msec functions
setTimeout(() => {
  clearInterval(timerId);
  console.log("Финал!");
}, tmax); // when to stop output
//-----------------------------------------------------
/*    class meeting {}    class tolk{}     class birth{}     class death{}   */

function Entity(N, name_, age, lifespan, gender, prnt1, prnt2, type) {
  // creature constructor
  this.N = Entity.N;
  this.name_ = Entity.name_;
  this.age = Entity.age;
  this.lifespan = lifespan;
  this.gender = gender;
  this.prnt1 = prnt1;
  this.prnt2 = prnt2;
  this.type = type;
}

function zzz() {
  console.log("Хоп !");
} // function for generating generations

//function filling(n1) { // функция
//   var all=new Entity  }
/*  tolk{}  laugh{}   cry{}   childbirth{}    death{}    } // console.log('Creatures simulator ended') */