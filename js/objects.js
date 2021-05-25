let radius;
let xCoordinate;
let yCoordinate;
let width;
let height;
let stringSyntax;

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

const angles = new Object();
    angles.pointyOrientation = [ 30, 90, 150, 210, 270, 330];
    angles.flatOrientation = [ 0, 60, 120, 180, 240, 300];
    angles.pointyRadians = [];
    for (let i=0; i<6; i++) {
        angles.pointyRadians.push(angles.pointyOrientation[i] * Math.PI/180);
    };
    angles.flatRadians = [];
    for (let i=0; i<6; i++) {
        angles.flatRadians.push(angles.flatOrientation[i] * Math.PI/180);
    };

class Hex {
    constructor(xCoordinate, yCoordinate, radius) {
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.radius = radius;
    }
    get hexPoints () {
        return this.hexPoints();      
    }
    hexPoints(xCoordinate, yCoordinate, radius) {
        let x = xCoordinate;
        let y = yCoordinate;
        let hexagon = [];
            for (let i=0; i<6; i++) {
                hexagon.push(
                    [x + Math.round(radius * Math.sin(angles.flatRadians[i])),
                    y + Math.round(radius * Math.cos(angles.flatRadians[i]))
                ]);
            };
        let coordinates = hexagon.join(' ')
        return stringSyntax = `<polygon points= \"${coordinates}\">`;
    }
    get nextxCoordinates() {
        return this.nextxCoordinates;
    };
    nextxCoordinates() {
        let x = xCoordinate;
        let y = yCoordinate;
        let adjacentCenters = [];
            for (let i=0; i<6; i++) {
                adjacentCenters.push(
                    [x + Math.round(2 * radius * Math.sin(angles.pointyRadians[i])),
                    y + Math.round(2 * radius * Math.cos(angles.pointyRadians[i]))]
                );
            };
    }
}

const drawHex = new Hex(xCoordinate, radius);

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
    drawHex.hexPoints();
    console.log(drawHex.hexPoints());
    image.innerhtml = stringSyntax;
});

