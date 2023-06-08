/*head*/
let head = ["Head_1", "Head_2", "Head_3", "Head_4"];

let head_btn = document.getElementById("buttom_1");

head_btn.addEventListener("click", nextHead);

current_head = 0;

function nextHead() {
  let head_img = document.getElementById("head");
  head_img.src =
    "./images/Parts/head/" + head[current_head % head.length] + ".png";
  current_head++;
}

/*blush*/
let blush = ["Blush_1", "Blush_2", "Blush_3", "Blush_4"];

let blush_btn = document.getElementById("buttom_2");

blush_btn.addEventListener("click", nextBlush);

current_blush = 0;

function nextBlush() {
  let blush_img = document.getElementById("blush");
  blush_img.src =
    "./images/Parts/blush/" + blush[current_blush % blush.length] + ".png";
  current_blush++;
}
/*glasses*/
let glasses = ["Glasses_1", "Glasses_2", "Glasses_3", "Glasses_4"];

let glasses_btn = document.getElementById("buttom_3");

glasses_btn.addEventListener("click", nextGlasses);

current_glasses = 0;

function nextGlasses() {
  let glasses_img = document.getElementById("glasses");
  glasses_img.src =
    "./images/Parts/glasses/" +
    glasses[current_glasses % glasses.length] +
    ".png";
  current_glasses++;
}

/*neck*/
let neck = ["Neck_1", "Neck_2", "Neck_3", "Neck_4"];

let neck_btn = document.getElementById("buttom_4");

neck_btn.addEventListener("click", nextNeck);

current_neck = 0;

function nextNeck() {
  let neck_img = document.getElementById("neck");
  neck_img.src =
    "./images/Parts/neck/" + neck[current_neck % neck.length] + ".png";
  current_neck++;
}

/*body*/
let body = ["Body_1", "Body_2", "Body_3", "Body_4"];

let body_btn = document.getElementById("buttom_5");

body_btn.addEventListener("click", nextBody);

current_body = 0;

function nextBody() {
  let body_img = document.getElementById("body");
  body_img.src =
    "./images/Parts/body/" + body[current_body % body.length] + ".png";
  current_body++;
}

/*bg*/
