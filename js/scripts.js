let orientationButton = document.getElementById('orientation-button');

let boxDimensions = ``

let radius = document.getElementById('hex-radius');
let xCoordinate = document.getElementById('hex-x-coordinate');
let yCoordinate = document.getElementById('hex-y-coordinate');
let center = `[${xCoordinate}, ${yCoordinate}]`;

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

function getHexPoints (center, radius) {
    let x = center[0];
    let y = center[1];
    let hexagon = [];
        for (let i=0; i<6; i++) {
            hexagon.push(
                [x + Math.round(radius * Math.sin(flatRadians[i])),
                y + Math.round(radius * Math.cos(flatRadians[i]))
            ]);
        };
    let coordinates = hexagon.join(' ')
    let stringSyntax = `<polygon points= "${coordinates}" />`;
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



