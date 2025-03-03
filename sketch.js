let input, slider, button, dropdown;
let isWaving = false;
let waveOffsets = [];

function setup() { // p5.js function
  createCanvas(windowWidth, windowHeight);
  input = createInput();
  input.position(10, 10);
  input.value('淡江大學❤️'); // 設置文字框的預設值

  slider = createSlider(28, 50, 32); // 創建滑桿，範圍為 28 到 50，預設值為 32
  slider.position(input.x + input.width + 10, 10); // 設置滑桿的位置

  button = createButton('Toggle Wave');
  button.position(slider.x + slider.width + 10, 10);
  button.mousePressed(toggleWave);

  dropdown = createSelect();
  dropdown.position(button.x + button.width + 10, 10);
  dropdown.option('淡江大學');
  dropdown.option('教科系');
  dropdown.option('第三周');
  dropdown.changed(goToLink);
}

function draw() {
  background(0); // 背景顏色為黑色
  let txt = input.value();  
  textAlign(CENTER, CENTER);
  textSize(slider.value()); // 根據滑桿的值設置文字大小
  fill(255); // 文字顏色為白色
  let spacedTxt = txt.split('').join(' ');
  let repeatedTxt = (spacedTxt + ' ').repeat(Math.ceil(width / textWidth(spacedTxt + ' ')));
  
  for (let y = 100; y < height; y += textAscent() + textDescent()) {
    let waveY = y;
    if (isWaving) {
      waveY += sin(frameCount * 0.1 + y) * 10;
    }
    text(repeatedTxt, width / 2, waveY);
  }
}

function toggleWave() {
  isWaving = !isWaving;
}

function goToLink() {
  let selected = dropdown.value();
  if (selected === '淡江大學') {
    window.open('https://www.tku.edu.tw/', '_blank');
  } else if (selected === '教科系') {
    window.open('https://www.et.tku.edu.tw/', '_blank');
  } else if (selected === '第三周') {
    window.open('https://drive.google.com/file/d/1e2AtFEnETQ7GRO4eSTuLA3r-LmBEyd3W/view', '_blank');
  }
}
