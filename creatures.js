console.log("Big Bang !!!");

let InstalCreatorsData = [];
let allCreatures = [[]]; // array for menagerie creatures
generation = 0; // for 1-st generation
var id = 0; // counter of creatur
installData();

timerOfWarld();


// InstallCreatures();

function installData() {
  // count of              1.cycleTime  2.lifeTimeMenagerie   3.lifespan
  let InstalCreatorsData1 = [100, 400, 10];
  // typeCreature:         4.Fire   5.FireFemale   6.Metall   7.MetallFemale   8.Spirit     9.SpiritFemale
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
  // returne(InstalCreatorsData);
}
function timerOfWarld() {
timer = setInterval(NascenceCreatures(), InstalCreatorsData[0]); // repeat InstallCreatures after t msec 
setTimeout(() => {
  clearInterval(timer);
  console.log("End of the Warld !");
}, InstalCreatorsData[1]); // t max - when to stop output
}

function NascenceCreatures() {
  if (generation==0) {InstallCreatures()} else {meeting()}
}

function InstallCreatures() {
  console.log("Generation " + generation);
  let type = 1;
  for (InstDat = 3; InstDat < 14; InstDat += 2) {
    countOfType = InstalCreatorsData[InstDat];
    countOfFam = InstalCreatorsData[InstDat + 1];
    for (CreatorOfType = 1; CreatorOfType <= countOfType; CreatorOfType++) {
      allCreatures.push((allCreatures[id][0] = generation)); //
      allCreatures.push((allCreatures[id][1] = id)); // № id
      allCreatures.push(
        // gender
        (allCreatures[id][2] = CreatorOfType <= countOfFam ? "female" : "male")
      );
      allCreatures.push((allCreatures[id][3] = fname(allCreatures[id][2]))); // name
      allCreatures.push((allCreatures[id][4] = 0)); // age
      allCreatures.push((allCreatures[id][5] = 10)); // lifespan
      allCreatures.push((allCreatures[id][6] = 0)); // parent 1
      allCreatures.push((allCreatures[id][7] = 0)); // parent 2
      switch (
        type // type: 1,2,3,4 ;  subtype: Fire Metall Spirit WaterIce Water WaterSream)
      ) {
        case 1:
          allCreatures.push((allCreatures[id][8] = type));
          allCreatures.push((allCreatures[id][9] = "Fire"));
          break;
        case 2:
          allCreatures.push((allCreatures[id][8] = type));
          allCreatures.push((allCreatures[id][9] = "Metall"));
          break;
        case 3:
          allCreatures.push((allCreatures[id][8] = type));
          allCreatures.push((allCreatures[id][9] = "Spirit"));
          break;
        case 4:
          allCreatures.push((allCreatures[id][8] = type));
          allCreatures.push((allCreatures[id][9] = "WaterIce"));
          break;
        case 5:
          allCreatures.push((allCreatures[id][8] = type - 1));
          allCreatures.push((allCreatures[id][9] = "Water"));
          break;
        case 6:
          allCreatures.push((allCreatures[id][8] = type - 2));
          allCreatures.push((allCreatures[id][9] = "WaterSream"));
          break;
      }
      id++;
    }
    type++;
  }
  generation++;
  id--;
}

function meeting(){
  let arr=mixCreatures();
  for (i = 0; i <arr.length ; i=i+2){
     tolk (arr[i],arr[i+1]);
     if (allCreatures[arr[i]][8]==allCreatures[arr[i]][8]){ // if types equal
      allCreatures[arr[i]][5]++;  //lifespan +1
      allCreatures[arr[i+1]][5]++;  //lifespan +1
      if(allCreatures[arr[i]][8]>2&&allCreatures[arr[i+1]][8]>2&&allCreatures[arr[i]][2]!=allCreatures[arr[i+1]][2])
        {BirthCreatures(arr[i],arr[i+1])};
     }
}
}

function tolk(Creator1,Creator2){
  dialog="-Hello "+allCreatures[Creator2][9]+"-"+ allCreatures[Creator2][2]+"-Hello "+allCreatures[Creator1][9]+"-"+ allCreatures[Creator1][2]+
console.log(dialog);
}

function mixCreatures()
{
  let arr=[]
  for(i = 0; i <arr.length ; i++){
    arr[i]=allCreatures[i][1]; // id
	var cr1, cr1;
	for(i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		cr1 = arr[j];
		arr[j] = arr[i];
		arr[i] = cr1;
	}
	return arr;
}
}

function BirthCreatures(Creator1,Creator2) {
  console.log("Ua-Ua-Ua!");
   id++;
  NumArr=allCreatures.length;
      allCreatures.push((allCreatures[NumArr][0] = generation)); //
      allCreatures.push((allCreatures[NumArr][1] = id)); // № id
      allCreatures.push((allCreatures[iNumArrd][2] = rnd(2, -1) = 1 ? "female" : "male"));// gender
      
      allCreatures.push((allCreatures[NumArr][3] = fname(allCreatures[id][2]))); // name
      allCreatures.push((allCreatures[NumArr][4] = 0)); // age
      allCreatures.push((allCreatures[NumArr][5] = 10)); // lifespan
      allCreatures.push((allCreatures[NumArr][6] = 0)); // parent 1
      allCreatures.push((allCreatures[NumArr][7] = 0)); // parent 2
      switch (
        type // type: 1,2,3,4 ;  subtype: Fire Metall Spirit WaterIce Water WaterSream)
      ) {
        case 1:
          allCreatures.push((allCreatures[NumArr][8] = type));
          allCreatures.push((allCreatures[NumArr][9] = "Fire"));
          break;
        case 2:
          allCreatures.push((allCreatures[NumArr][8] = type));
          allCreatures.push((allCreatures[NumArr][9] = "Metall"));
          break;
        case 3:
          allCreatures.push((allCreatures[iNumArrd][8] = type));
          allCreatures.push((allCreatures[NumArrd][9] = "Spirit"));
          break;
        case 4:
          allCreatures.push((allCreatures[NumArr][8] = type));
          allCreatures.push((allCreatures[NumArr][9] = "WaterIce"));
          break;
        case 5:
          allCreatures.push((allCreatures[NumArr][8] = type - 1));
          allCreatures.push((allCreatures[NumArr][9] = "Water"));
          break;
        case 6:
          allCreatures.push((allCreatures[NumArr][8] = type - 2));
          allCreatures.push((allCreatures[NumArrid][9] = "WaterSream"));
          break;
      }
    }



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
  nameCreature = ""; // empty name
  if ((gender = "female")) vowelСonsonantSwitch = -1;
  for (letterName = 0; letterName < nameLen; letterName++) {
    // choose the ending of the female/male name depends of gender
    if (vowelСonsonantSwitch == -1) {
      // first choise - random female ending of name, else - random vowel
      if (letterName == 0) {
        nameCreature = femEndingNames[rnd(femEndNamesLen, -1)];
      } else {
        nameCreature = vowels[rnd(vowelsLen, -1)] + nameCreature;
      }
    } else {
      nameCreature = consonants[rnd(consonantsLen, -1)] + nameCreature;
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


//function filling(n1) { // функция
//   var all=new Entity  }
/*  tolk{}  laugh{}   cry{}   childbirth{}    death{}    } // console.log('Creatures simulator ended') */
