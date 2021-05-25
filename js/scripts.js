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


const image = document.getElementsByTagName('svg');

let pointyDegrees = [ 30, 90, 150, 210, 270, 330];
let flatDegrees = [ 0, 60, 120, 180, 240, 300];
let pointyRadians = [];
    for (let i=0; i<6; i++) {
        pointyRadians.push(pointyDegrees[i] * Math.PI/180);
    };
let flatRadians = [];
    for (let i=0; i<6; i++) {
        flatRadians.push(flatDegrees[i] * Math.PI/180);
    };

function getHexPoints (xCoordinate, yCoordinate, radius) {
    
    let hexagon = [];
        for (let i=0; i<6; i++) {
            hexagon.push(
                [x + Math.round(radius * Math.sin(flatRadians[i])),
                y + Math.round(radius * Math.cos(flatRadians[i]))
            ]);
        };
    let coordinates = hexagon.join(' ')
    let stringSyntax = `<polygon points= "${coordinates}">`;
console.log(hexagon);
console.log(coordinates);
console.log(stringSyntax);
};

function getNewCenters (center, radius) {
    let x = center[0];
    let y = center[1];
    let adjacentCenters = [];
        for (let i=0; i<6; i++) {
            adjacentCenters.push(
                [x + Math.round(2 * radius * Math.sin(pointyRadians[i])),
                y + Math.round(2 * radius * Math.cos(pointyRadians[i]))]
            );
        };
};

radiusButton.addEventListener('click', () => {
    let radius = radiusInput.innerText;
});
xCoordinateButton.addEventListener('click', () => {
    let xCoordinate = xCoordinateInput.innerText;
});
yCoordinateButton.addEventListener('click', () => {
    let yCoordinate = yCoordinateInput.innerText;
});
widthButton.addEventListener('click', () => {
    let width = widthInput.innertext;
});
heightButton.addEventListener('click', () => {
    let height = heightInput.innertext;
});
drawButton.addEventListener('click', () => {
    const center = [xCoordinate, yCoordinate];
    getHexPoints();
    image.innerhtml = stringSyntax;
});


