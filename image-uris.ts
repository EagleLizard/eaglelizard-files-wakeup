
const BASEPATH = 'https://eaglelizard-files.herokuapp.com/';

const LOGO = imageUri('WebsiteLogo-min.png');
const HOME = imageUri('projects-home.png');
const JANU = imageUri('janu.jpg');

const PLACEHOLDER = imageUri('bigbird.jpg');
const RENAISSANCE_FAIRE = imageUri('utahrenaissancefaire.png');
const BYU = imageUri('brighamyounguniversity.jpg');
const SUNDANCE = imageUri('sundancesummertheatre.jpg');
const RENAISSANCE_NOW = imageUri('renaissancenow.jpg');
const UVU = imageUri('utahvalleyuniversity.jpg');
const FAT_PIG = imageUri('fatpig.jpg');
const TRIBES = imageUri('tribes.jpg');
const AGAMEMNON = imageUri('agamemnon.jpg');
const NEXT_FALL = imageUri('nextfall.jpg');
const CABARET = imageUri('cabaret.jpg');
const THE_DRAG = imageUri('thedrag.jpg');

const THE_DRAG_GRALLERY = imageUris([
  'thedrag/thedrag1.jpg',
  'thedrag/thedrag2.jpg',
  'thedrag/thedrag3.jpg',
  'thedrag/thedrag4.jpg',
  'thedrag/thedrag5.jpg',
  'thedrag/thedrag6.jpg',
  'thedrag/thedrag7.jpg',
  'thedrag/thedrag8.jpg',
  'thedrag/thedrag9.jpg',
  'thedrag/thedrag10.jpg',
]);

const CABARET_GALLERY = imageUris([
  'cabaret/cabaret1.jpg',
  'cabaret/cabaret2.jpg',
  'cabaret/cabaret3.jpg',
  'cabaret/cabaret4.jpg',
  'cabaret/cabaret5.jpg',
  'cabaret/cabaret6.jpg',
  'cabaret/cabaret7.jpg',
]);

const NEXT_FALL_GALLERY = imageUris([
  'nextfall/nextfall1.jpg',
  'nextfall/nextfall2.jpg',
  'nextfall/nextfall3.jpg',
  'nextfall/nextfall4.jpg',
  'nextfall/nextfall5.jpg',
  'nextfall/nextfall6.jpg',
  'nextfall/nextfall7.jpg',
  'nextfall/nextfall8.jpg',
  'nextfall/nextfall9.jpg',
  'nextfall/nextfall10.jpg',
]);

const AGAMEMNON_GALLERY = imageUris([
  'agamemnon/agamemnon1.jpg',
  'agamemnon/agamemnon2.jpg',
  'agamemnon/agamemnon3.jpg',
  'agamemnon/agamemnon4.jpg',
  'agamemnon/agamemnon5.jpg',
  'agamemnon/agamemnon6.jpg',
  'agamemnon/agamemnon7.jpg',
  'agamemnon/agamemnon8.jpg',
  'agamemnon/agamemnon9.jpg',
  'agamemnon/agamemnon10.jpg',
  'agamemnon/agamemnon11.jpg',
  'agamemnon/agamemnon12.jpg',
  'agamemnon/agamemnon13.jpg',
  'agamemnon/agamemnon14.jpg',
]);

const TRIBES_GALLERY = imageUris([
  'tribes/tribes1.jpg',
  'tribes/tribes2.jpg',
  'tribes/tribes3.jpg',
  'tribes/tribes4.jpg',
  'tribes/tribes5.jpg',
  'tribes/tribes6.jpg',
  'tribes/tribes7.jpg',
  'tribes/tribes8.jpg',
  'tribes/tribes9.jpg',
  'tribes/tribes10.jpg',
  'tribes/tribes11.jpg',
  'tribes/tribes12.jpg',
  'tribes/tribes13.jpg',
  'tribes/tribes14.jpg',
]);

const FAT_PIG_GALLERY = imageUris([
  'fatpig/fatpig1.jpg',
  'fatpig/fatpig2.jpg',
  'fatpig/fatpig3.jpg',
  'fatpig/fatpig4.jpg',
  'fatpig/fatpig5.jpg',
  'fatpig/fatpig6.jpg',
  'fatpig/fatpig7.jpg',
  'fatpig/fatpig8.jpg',
  'fatpig/fatpig9.jpg',
  'fatpig/fatpig10.jpg',
  'fatpig/fatpig11.jpg',
  'fatpig/fatpig12.jpg',
]);

const UVU_GALLERY = imageUris([
  'uvu/uvu1.jpg',
  'uvu/uvu2.jpg',
  'uvu/uvu3.jpg',
  'uvu/uvu4.jpg',
  'uvu/uvu5.jpg',
  'uvu/uvu6.jpg',
  'uvu/uvu7.jpg',
  'uvu/uvu8.jpg',
  'uvu/uvu9.jpg',
  'uvu/uvu10.jpg',
  'uvu/uvu11.jpg',
  'uvu/uvu12.jpg',
  'uvu/uvu13.jpg',
  'uvu/uvu14.jpg',
]);

const SUNDANCE_GALLERY = imageUris([
  'sundance/sundance1.jpg',
  'sundance/sundance2.jpg',
  'sundance/sundance3.jpg',
  'sundance/sundance4.jpg',
  'sundance/sundance5.jpg',
  'sundance/sundance6.jpg',
  'sundance/sundance7.jpg',
  'sundance/sundance8.jpg',
  'sundance/sundance9.jpg',
  'sundance/sundance10.jpg',
  'sundance/sundance11.jpg',
]);

const RENAISSANCE_NOW_GALLERY = imageUris([
  'renaissancenow/renaissancenow1.jpg',
  'renaissancenow/renaissancenow2.jpg',
  'renaissancenow/renaissancenow3.jpg',
  'renaissancenow/renaissancenow4.jpg',
  'renaissancenow/renaissancenow5.jpg',
]);

const BYU_GALLERY = imageUris([
  'byu/BYU1.jpg',
  'byu/BYU2.jpg',
  'byu/BYU3.jpg',
  'byu/BYU4.jpg',
  'byu/BYU5.jpg',
  'byu/BYU6.jpg',
  'byu/BYU7.jpg',
  'byu/BYU8.jpg',
  'byu/BYU9.jpg',
]);

const RENAISSANCE_FAIRE_GALLERY = imageUris([
  'renaissancefaire/Shield1.png',
  'renaissancefaire/Shield2.png',
  'renaissancefaire/Shield3.png',
  'renaissancefaire/Shield4.png',
]);

export default <any> {
  LOGO,
  HOME,
  JANU,

  PLACEHOLDER,
  RENAISSANCE_FAIRE,
  BYU,
  SUNDANCE,
  RENAISSANCE_NOW,
  UVU,
  FAT_PIG,
  TRIBES,
  AGAMEMNON,
  NEXT_FALL,
  CABARET,
  THE_DRAG,

  TRIBES_GALLERY,
  FAT_PIG_GALLERY,
  UVU_GALLERY,
  SUNDANCE_GALLERY,
  RENAISSANCE_NOW_GALLERY,
  BYU_GALLERY,
  RENAISSANCE_FAIRE_GALLERY,
  AGAMEMNON_GALLERY,
  NEXT_FALL_GALLERY,
  CABARET_GALLERY,
  THE_DRAG_GRALLERY,
};

function imageUri(fileKey: string){
  return `${BASEPATH}${fileKey}`;
}

function imageUris(fileKeys: string[]){
  return fileKeys.map(imageUri);
}
