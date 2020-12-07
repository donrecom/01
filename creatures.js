console.log("Big Bang !!!");

let InstalCreatorsData = [];
let allCreatures = []; // array for menagerie creatures
let stat0 = [1, 1, 1, 1, 1, 1]; // array-label for nullified array of statistic
var generation = 0; // for 1-st generation
var id = 0; // counter of creatur
var nType = 1,
  Type;
installData();
timerOfWarld();

function installData() {
  // count of              1.cycleTime  2.lifeTimeMenagerie   3.lifespan
  let InstalCreatorsData1 = [3000, 300000, 10];
  // typeCreature:         4.Wood   5.WoodFemale   6.Steel   7.SteelFemale   8.Spirit     9.SpiritFemale
  let InstalCreatorsData2 = [12, 6, 12, 6, 12, 6];
  //  typeWaterCreature:   10. WaterIce   11.WaterIceFemale   12.Water   13.WaterIceFemale  14.WaterSream   15.WaterSream
  InstalCreatorsData3 = [4, 2, 4, 2, 4, 2];
  let sum = 0;
  for (i = 0; i < 6; i = i + 2) {
    sum += InstalCreatorsData2[i];
    sum += InstalCreatorsData3[i];
  }
  InstalCreatorsData = InstalCreatorsData1.concat(
    InstalCreatorsData2,
    InstalCreatorsData3,
    [sum]
  );
}
function timerOfWarld() {
  switch (1) {
    case 1:
      for (nc = 1; nc < 10000000; nc++) {
        NascenceCreatures();
      }
      break;
    default:
      let timer = setInterval(() => NascenceCreatures(), InstalCreatorsData[0]); // repeat InstallCreatures after t msec
      setTimeout(() => {
        clearInterval(timer);
        console.log("End of the Warld !");
      }, InstalCreatorsData[1]); // t max - when to stop output
      break;
  }
}

function NascenceCreatures() {
  if (generation == 0) {
    InstallCreatures();
  } else {
    meeting();
  }
  console.log("Generation " + generation);
  statistic();
  generation++;
}

function statistic() {
  let s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < allCreatures.length; i++) {
    if (allCreatures[i][2] == "female") {
      s[0]++;
    } else {
      s[1]++;
    }
    switch (allCreatures[i][8]) {
      case 1:
        {
          s[2]++;
          if (allCreatures[i][2] == "female") {
            s[3]++;
          } else {
            s[4]++;
          }
        }
        break;
      case 2:
        {
          s[5]++;
          if (allCreatures[i][2] == "female") {
            s[6]++;
          } else {
            s[7]++;
          }
        }
        break;
      case 3:
        {
          s[8]++;
          if (allCreatures[i][2] == "female") {
            s[9]++;
          } else {
            s[10]++;
          }
        }
        break;
      case 4:
        {
          s[11]++;
          if (allCreatures[i][2] == "female") {
            s[12]++;
          } else {
            s[13]++;
          }
          switch (allCreatures[i][9]) {
            case "waterIce":
              {
                s[14]++;
                if (allCreatures[i][2] == "female") {
                  s[15]++;
                } else {
                  s[16]++;
                }
              }
              break;
            case "water":
              {
                s[17]++;
                if (allCreatures[i][2] == "female") {
                  s[18]++;
                } else {
                  s[19]++;
                }
              }
              break;
            case "waterSream":
              {
                s[20]++;
                if (allCreatures[i][2] == "female") {
                  s[21]++;
                } else {
                  s[22]++;
                }
              }
              break;
          }
        }
        break;
    }
  }
  doStat = 0; // Label for nullified array of statistic
  if (stat0[0] == 1 && s[2] == 0) {
    stat0[0] = 0;
    doStat = 1;
  }
  if (stat0[1] == 1 && s[5] == 0) {
    stat0[1] = 0;
    doStat = 1;
  }
  if (stat0[2] == 1 && s[8] == 0) {
    stat0[2] = 0;
    doStat = 1;
  }
  if (stat0[3] == 1 && s[11] == 0) {
    stat0[3] = 0;
    doStat = 1;
  }
  if (
    (generation % 5 == 0 && generation <= 20) ||
    generation % 10 == 0 ||
    doStat == 1
  ) {
    logstat(s);
  }
}

function logstat(s) {
  console.log(
    "All-" +
      allCreatures.length +
      " f-" +
      s[0] +
      "/m-" +
      s[1] +
      "\n" +
      "Wood-" +
      s[2] +
      " f-" +
      s[3] +
      "/m-" +
      s[4] +
      "\n" +
      "Steel-" +
      s[5] +
      " f-" +
      s[6] +
      "/m-" +
      s[7] +
      "\n" +
      "Spirit-" +
      s[8] +
      " f-" +
      s[9] +
      "/m-" +
      s[10] +
      "\n" +
      "Water-" +
      s[11] +
      " f-" +
      s[12] +
      "/m-" +
      s[13] +
      "\n" +
      "waterIce-" +
      s[14] +
      " f-" +
      s[15] +
      "/m-" +
      s[16] +
      "\n" +
      "water-" +
      s[17] +
      " f-" +
      s[18] +
      "/m-" +
      s[19] +
      "\n" +
      "WaterSream-" +
      s[20] +
      " f-" +
      s[21] +
      "/m-" +
      s[22] +
      "\n"
  );
}
function InstallCreatures() {
  let gend = "",
    nameCr = "",
    age = 1,
    lifespan = 10,
    parent1 = 0,
    parent2 = 0;
  for (InstDat = 3; InstDat < 14; InstDat += 2) {
    countOfType = InstalCreatorsData[InstDat];
    countOfFam = InstalCreatorsData[InstDat + 1];
    for (CreatorOfType = 1; CreatorOfType <= countOfType; CreatorOfType++) {
      gend = CreatorOfType <= countOfFam ? "female" : "male";
      nameCr = fname(gend);
      subType = install_TypeSubType(nType);
      mood = switchMood();
      numInBase = 0;
      let instCr = [
        generation, // 0
        id, // 1
        gend, // 2
        nameCr, // 3
        age, // 4
        lifespan, // 5
        parent1, // 6
        parent2, // 7
        Type, // 8
        subType, // 9
        mood, // 10
        numInBase, //11 - empty cell for now
      ];
      //   console.log(instCr);
      allCreatures.push(instCr);
      id++;
    }
    nType++;
  }
  id--;
}

function meeting() {
  let arr = mixCreatures();
  for (i = 0; i < arr.length; i = i + 2) {
    if (i == arr.length - 1) continue; // check for the existence of the interlocutor
    meetingtolk(arr[i], arr[i + 1]);
    lifespanFunc(arr[i], arr[i + 1]);
    CheckBirth(arr[i], arr[i + 1]); // Check the possibility of birth
  }
  death();
}

function CheckBirth(Creator1, Creator2) {
  let if1 =
    allCreatures[Creator1][4] > 2 && // if age >2
    allCreatures[Creator2][4] > 2 && // and gender not equal
    allCreatures[Creator1][2] != allCreatures[Creator2][2];
  if (if1) {
    let type1 = allCreatures[Creator1][8],
      type2 = allCreatures[Creator2][8];
    let if2 = type1 == type2; // types of creatures is equal
    if (if2) {
      nType = type1 == 4 ? 4 + rnd(3, -1) : type1; // 4-water? (random Ice/Water/Sream) else easy type
      BirthCreatures(Creator1, Creator2, nType);
    } // "Same rase!"
    else {
      let st1 = allCreatures[(Creator1, 9)], //subType 1 creature
        st2 = allCreatures[(Creator2, 9)]; //subType 2 creature
      if3 =
        (st1 == "spirit" && st2 == "waterSream") ||
        (st2 == "spirit" && st1 == "waterSream"); //if "Half-breed!"
      if (if3) {
        // Rase-probability 50/50 "spirit" / "water"
        nType = rnd(2, -1) == 1 ? 3 : 4 + rnd(3, -1); // 3 -spirit / 4-water (random Ice/Water/Sream)
      }
      BirthCreatures(Creator1, Creator2, nType);
    }
  }
}

function meetingtolk(Creator1, Creator2) {
  allCreatures[Creator1][10] = switchMood(); // mood changes when thay meet
  allCreatures[Creator2][10] = switchMood();
  let hi1 = allCreatures[Creator1][2] == "male" ? "Mr. " : "Miss ";
  let hi2 = allCreatures[Creator2][2] == "male" ? "Mr. " : "Miss ";
  let dialog =
    "-Hello " +
    hi2 +
    allCreatures[Creator2][3] +
    "-" +
    allCreatures[Creator2][9] +
    "      -Hello " +
    hi1 +
    allCreatures[Creator1][3] +
    "-" +
    allCreatures[Creator1][9];
  //!  console.log(dialog);
}

function lifespanFunc(Creator1, Creator2) {
  // 1-Wood 2-Steel 3-Spirit 4-Water  ;  41+ 12-  23+- 24-  31+  43- (1+ after die - 14 not++)
  coupleType =
    toString(allCreatures[Creator1][8]) + toString(allCreatures[Creator2][8]);
  let lifespan1 = 0,
    lifespan2 = 0;
  switch (
    coupleType // if types equal:
  ) {
    case "14":
      lifespan2++;
      break;
    case "41":
      lifespan1++;
      break;
    case "12":
      lifespan1--;
      break;
    case "21":
      lifespan2--;
      break;
    case "23":
      lifespan1++;
      lifespan2--;
      break;
    case "32":
      lifespan1--;
      lifespan2++;
      break;
    case "24":
      lifespan1--;
      break;
    case "42":
      lifespan2--;
      break;
    case "31":
      lifespan1++;
      break;
    case "13":
      lifespan2++;
      break;
    case "43":
      lifespan1--;
      break;
    case "34":
      lifespan2--;
      break;
  }
  allCreatures[Creator1][5] += lifespan1; //lifespan +1/0/-1
  allCreatures[Creator2][5] += lifespan2; //lifespan +1/0/-1
}

function mixCreatures() {
  let arr = [];
  let i, j;
  for (i = 0; i < allCreatures.length; i++) {
    allCreatures[i][11] = i; // primary number in turn
    arr[i] = allCreatures[i][11]; // fix this indexes to array intermediate
  }
  var cr1;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    cr1 = arr[j];
    arr[j] = arr[i];
    arr[i] = cr1;
  }
  return arr;
}

function BirthCreatures(Creator1, Creator2, nType) {
  //! console.log("!!! is Born !!!");
  id++;
  let gend = rnd(2, 0) == 1 ? "female" : "male",
    nameCr = fname(gend),
    age = 0,
    lifespan = 10,
    parent1 = Creator1,
    parent2 = Creator2,
    subType = install_TypeSubType(nType);
  mood = switchMood();
  let instCr = [
    generation, // 0
    id, // 1
    gend, // 2
    nameCr, // 3
    age, // 4
    lifespan, // 5
    parent1, // 6
    parent2, // 7
    Type, // 8
    subType, // 9
    mood, // 10
    numInBase, //11
  ];
  //!  console.log(instCr);
  allCreatures.push(instCr);
}

function install_TypeSubType(nType) {
  let subType;
  switch (
    nType // type: 1,2,3,4 ;  subtype: Wood Steel Spirit WaterIce Water WaterSream)
  ) {
    case 1:
      Type = nType;
      subType = "wood";
      break;
    case 2:
      Type = nType;
      subType = "steel";
      break;
    case 3:
      Type = nType;
      subType = "spirit";
      break;
    case 4:
      Type = nType;
      subType = "waterIce";
      break;
    case 5:
      Type = nType - 1;
      subType = "water";
      break;
    case 6:
      Type = nType - 2;
      subType = "waterSream";
      break;
  }
  return subType;
}
function switchMood() {
  let mood;
  switch (
    rnd(3, 0) // mood
  ) {
    case 1:
      mood = talk();
      break;
    case 2:
      mood = smile();
      break;
    case 3:
      mood = cry();
      break;
  }
  return mood;
}

function smile(Creator) {
  return "Ж:-D  Ha-ha!";
}
function cry(Creator) {
  return "Ж:'(  wee-wee.. ";
}
function talk(Creator) {
  return "Ж:-O  bla-bla";
}

function death() {
  for (let i = allCreatures.length - 1; i >= 0; i--) {
    allCreatures[i][4]++; //  age growth
    let a1 = allCreatures[i][5],
      a2 = allCreatures[i][4];

    if (allCreatures[i][5] - allCreatures[i][4] <= 0) {
      //! console.log("death " + allCreatures[i][1] + " / " + allCreatures.length);
      if (allCreatures[i][8] == 1) {
        // if type=wood then 50% --> BirthCreatures
        if (rnd(2, -1) == 1)
          // probability 50/50 - with death of wood - borning wood.
          BirthCreatures(
            allCreatures[i][1],
            allCreatures[i][1],
            allCreatures[i][8]
          ); // Same rase
      }
      allCreatures[i] = allCreatures[allCreatures.length - 1];
      allCreatures.pop();
    }
  }
}

function fname(gender) {
  // come up with a name
  consonants = [
    `q`,
    `w`,
    `r`,
    `t`,
    `n`,
    `m`,
    `p`,
    `s`,
    `d`,
    `f`,
    `g`,
    `h`,
    `j`,
    `k`,
    `l`,
    `z`,
    `x`,
    `c`,
    `v`,
    `b`,
  ];
  consonantsLen = consonants.length; // agree / array value
  vowels = ["e", "y", "u", "o", "a"];
  vowelsLen = vowels.length; //vowel / array value
  femEndingNames = ["y", "a", "e"];
  femEndNamesLen = femEndingNames.length; // end female names / array value
  nameLen = rnd(10, 1); //name length from 2 to 11 letters
  nameCreature = ""; // empty name
  if (gender == "female") {
    vowelСonsonantSwitch = -1;
  } else {
    vowelСonsonantSwitch = 1;
  }
  let letter = "";
  for (letterName = 0; letterName < nameLen; letterName++) {
    // choose the ending of the female/male name depends of gender
    if (vowelСonsonantSwitch == -1) {
      // first choise - random female ending of name, else - random vowel
      if (letterName == 0) {
        letter = femEndingNames[rnd(femEndNamesLen, -1)];
      } else {
        letter = vowels[rnd(vowelsLen, -1)];
      }
    } else {
      letter = consonants[rnd(consonantsLen, -1)];
    }
    // add letter first or other
    if (letterName == nameLen - 1) letter = letter.toUpperCase();
    nameCreature = letter + nameCreature;
    vowelСonsonantSwitch = -vowelСonsonantSwitch;
  }
  return nameCreature;
}

function rnd(a, b) {
  // random element of the array
  return Math.ceil(Math.random() * a + b);
}
