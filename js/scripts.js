let radius;
let xCoordinate;
let yCoordinate;
let width;
let height;
let hexagon;
let coordinates;


const radiusInput = document.getElementById('hex-radius');
const xCoordinateInput = document.getElementById('hex-x-coordinate');
const yCoordinateInput = document.getElementById('hex-y-coordinate');
const widthInput = document.getElementById('box-width');
const heightInput = document.getElementById('box-height');

const radiusButton = document.getElementById('hex-radius-update');
const xCoordinateButton = document.getElementById('hex-x-coordinate-update');
const yCoordinateButton = document.getElementById('hex-y-coordinate-update');
const widthButton = document.getElementById('box-width-update');
const heightButton = document.getElementById('box-height-update');
const drawButton = document.getElementById('draw-button');
const image = document.getElementById('svg-model');
const imageText = document.getElementById('svg-text')

radiusButton.addEventListener('click', () => {
    radius = radiusInput.value;
    console.log(radius);
});
xCoordinateButton.addEventListener('click', () => {
    xCoordinate = xCoordinateInput.value;
    console.log(xCoordinate);
});
yCoordinateButton.addEventListener('click', () => {
    yCoordinate = yCoordinateInput.value;
    console.log(yCoordinate);
});
widthButton.addEventListener('click', () => {
    width = widthInput.value;
    console.log(width);
});
heightButton.addEventListener('click', () => {
    height = heightInput.value;
    console.log(height);
});
drawButton.addEventListener('click', () => {
    getHexPoints(xCoordinate, yCoordinate, radius);
    const hexElement = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    hexElement.setAttributeNS('null', 'points', `\"${coordinates}\"`);
    image.appendChild(hexElement);   
    imageText.textContent = image;
});

const pointyDegrees = [ 30, 90, 150, 210, 270, 330];
const flatDegrees = [ 0, 60, 120, 180, 240, 300];
const pointyRadians = [];
    for (let i=0; i<6; i++) {
        pointyRadians.push(pointyDegrees[i] * Math.PI/180);
    };
const flatRadians = [];
    for (let i=0; i<6; i++) {
        flatRadians.push(flatDegrees[i] * Math.PI/180);
    };

function getHexPoints (xCoordinate, yCoordinate, radius) {
    x = (+xCoordinate);
    y= (+yCoordinate);
    let hexagon = [];
        for (let i=0; i<6; i++) {
            hexagon.push(
                [x + Math.round(radius * Math.sin(flatRadians[i])),
                y + Math.round(radius * Math.cos(flatRadians[i]))
            ]);
        };
    let coordinates = hexagon.join(' ')
    let stringSyntax = `\"<polygon points= \"${coordinates}\">\"`;
    console.log(`coordinates equals \"${coordinates}\"`)
return coordinates;
};

function getNewCenters (xCoordinate, yCoordinate, radius) {
    x = xCoordinate;
    y= yCoordinate;
    let adjacentCenters = [];
        for (let i=0; i<6; i++) {
            adjacentCenters.push(
                [x + Math.round(2 * radius * Math.sin(pointyRadians[i])),
                y + Math.round(2 * radius * Math.cos(pointyRadians[i]))]
            );
        };
    
};






