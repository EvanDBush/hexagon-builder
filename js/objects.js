let radius;
let xCoordinate;
let yCoordinate;
let width;
let height;
let stringSyntax;
let hexagon = [];

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
    set hexPoints() {
        this._hexPoints = hexPoints();      
    }
    get hexPoints(xCoordinate, yCoordinate, radius) {
        this.x = (+xCoordinate);
        this.y= (+yCoordinate);
        let hexagon = [];
            for (let i=0; i<6; i++) {
                hexagon.push(
                    [x + Math.round(this.radius * Math.sin(angles.flatRadians[i])),
                    y + Math.round(this.radius * Math.cos(angles.flatRadians[i]))
                ]);
            };
        return hexagon.join(' ')
    }

    set nextCoordinatePoints() {
        this._nextCoordinatePoints = nextCoordinatePoints() ;
    };
    get nextCoordinatePoints() {
        this.x = xCoordinate;
        this.y = yCoordinate;
        let adjacentCenters = [];
            for (let i=0; i<6; i++) {
                adjacentCenters.push(
                    [x + Math.round(2 * this.radius * Math.sin(angles.pointyRadians[i])),
                    y + Math.round(2 * this.radius * Math.cos(angles.pointyRadians[i]))]
                );
            };
        return adjacentCenters.join(' ');
    }
}

let coordinates = hexagon.join(' ')
stringSyntax = `<polygon points= \"${coordinates}\">`

const drawHex = new Hex(xCoordinate, yCoordinate, radius);

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
    drawHex.hexPoints;
    console.log(drawHex.hexPoints);
    image.innerhtml = stringSyntax;
});

