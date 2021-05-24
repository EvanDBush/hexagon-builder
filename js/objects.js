const radius = document.getElementById('hex-radius');
const xCoordinate = document.getElementById('hex-x-coordinate');
const yCoordinate = document.getElementById('hex-y-coordinate');
const center = `[${xCoordinate}, ${yCoordinate}]`;
const width = document.getElementById('box-width');
const height = document.getElementById('box-height');
const boxSize = (width, height);

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
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }
    get hexPoints () {
        return this.hexPoints();      
    }
    hexPoints(center, radius) {
        let x = center[0];
        let y = center[1];
        let hexagon = [];
            for (let i=0; i<6; i++) {
                hexagon.push(
                    [x + Math.round(radius * Math.sin(angles.flatRadians[i])),
                    y + Math.round(radius * Math.cos(angles.flatRadians[i]))
                ]);
            };
        let coordinates = hexagon.join(' ')
        let stringSyntax = `<polygon points= "${coordinates}" />`;
    }
    get nextCenters() {
        return this.nextCenters;
    };
    nextCenters() {
        let x = center[0];
        let y = center[1];
        let adjacentCenters = [];
            for (let i=0; i<6; i++) {
                adjacentCenters.push(
                    [x + Math.round(2 * radius * Math.sin(angles.pointyRadians[i])),
                    y + Math.round(2 * radius * Math.cos(angles.pointyRadians[i]))]
                );
            };
    }
}


