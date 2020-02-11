let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 945, window.innerWidth / window.innerHeight, 0.1, 1000 );


//ground
const widthGround = 130;
const heightGround = 2;
const depthGround = 10;
const groundGeometry = new THREE.BoxBufferGeometry(widthGround, heightGround, depthGround);

let groundTexture = new THREE.TextureLoader().load( 'assets/textures/grasss.jpg' );
let groundMaterial = new THREE.MeshBasicMaterial( {map: groundTexture} );
let ground = new THREE.Mesh( groundGeometry, groundMaterial );
ground.position.set(0,15,-1);
scene.add( ground );



//Sea
const widthSea = 75;
const heightGroundSea = 2;
const depthGroundSea = 2;
const seaGeometry = new THREE.BoxBufferGeometry(widthSea, heightGroundSea, depthGroundSea);

// let texture = new THREE.TextureLoader().load( 'textures/grasss.jpg' );
let seaMaterial = new THREE.MeshBasicMaterial( {color: 0xadd8e6} );
let sea = new THREE.Mesh( seaGeometry, seaMaterial );
sea.position.set(0,9.5,-5);
scene.add( sea );



//right Tower
const radiusTopRightTower = 3;
const radiusBottomRightTower = 3;
const heightRightTower = 30;
const radialSegmentsRightTower = 15;
const rightTowerGeometry = new THREE.CylinderBufferGeometry(radiusTopRightTower, radiusBottomRightTower, 
                                                        heightRightTower, radialSegmentsRightTower);
let rightTowerTexture = new THREE.TextureLoader().load( 'assets/textures/stonewall.jpg' );
let rightTowerMaterial = new THREE.MeshBasicMaterial( { map: rightTowerTexture} );
let rightTower = new THREE.Mesh( rightTowerGeometry, rightTowerMaterial );
rightTower.position.x = -30;
rightTower.position.z = -11;
rightTower.position.y = -1;
scene.add( rightTower );

//right MidBody Tower
const radiusTopMidRTower = 4;
const radiusBottomMidRTower = 4;
const heightMidRTower = 5;
const radialSegmentsMidRTower = 15;
const midRTowerGeometry = new THREE.CylinderBufferGeometry(radiusTopMidRTower, radiusBottomMidRTower, 
                                                        heightMidRTower, radialSegmentsMidRTower);
// let texture = new THREE.TextureLoader().load( 'textures/s.jpg' );
let midRTowerMaterial = new THREE.MeshBasicMaterial( { color: 0xB5651D} );
let MidRTower = new THREE.Mesh( midRTowerGeometry, midRTowerMaterial );
MidRTower.position.x = -30;
MidRTower.position.z = -11;
MidRTower.position.y = -16;
scene.add( MidRTower );

//right tower Roof
const radiusRightTowerRoof = 6;
const heightRightTowerRoof = -9;
const segmentsRightTowerRoof = 16;
const RightTowerRoofgeometry = new THREE.ConeBufferGeometry(radiusRightTowerRoof, heightRightTowerRoof, segmentsRightTowerRoof);

let rightTowerRoofMaterial = new THREE.MeshBasicMaterial( { color: 0x000080} );
let rigthTowerRoof = new THREE.Mesh( RightTowerRoofgeometry, rightTowerRoofMaterial );
rigthTowerRoof.position.x = -28;
rigthTowerRoof.position.z = -11;
rigthTowerRoof.position.y = -23;
scene.add( rigthTowerRoof );



//left Tower
const radiusTopLeftTower = 2.5;
const radiusBottomLeftTower = 2.5;
const heightLeftTower = 24;
const radialSegmentsLeftTower = 15;
const leftTowerGeometry = new THREE.CylinderBufferGeometry(radiusTopLeftTower, radiusBottomLeftTower, heightLeftTower, radialSegmentsLeftTower);

let leftTowerTexture = new THREE.TextureLoader().load( 'assets/textures/stonewall.jpg' );
let leftTowerMaterial = new THREE.MeshBasicMaterial( { map: leftTowerTexture} );
let leftTower = new THREE.Mesh( leftTowerGeometry, leftTowerMaterial );
leftTower.position.x = 32;
leftTower.position.z = -11;
leftTower.position.y = 2;
scene.add( leftTower );

//left MidBody Tower
const radiusTopMidLTower = 4;
const radiusBottomMidLTower = 4;
const heightMidLTower = 5;
const radialSegmentsMidRLTower = 15;
const midLTowerGeometry = new THREE.CylinderBufferGeometry(radiusTopMidLTower, radiusBottomMidLTower, 
                                                        heightMidLTower, radialSegmentsMidRLTower);
// let texture = new THREE.TextureLoader().load( 'textures/f.jpg' );
let midLTowerMaterial = new THREE.MeshBasicMaterial( { color: 0xB5651D} );
let MidLTower = new THREE.Mesh( midRTowerGeometry, midRTowerMaterial );
MidLTower.position.x = 32;
MidLTower.position.z = -11;
MidLTower.position.y = -10;
scene.add( MidLTower );

//left tower Roof
const radiusLeftTowerRoof = 6;
const heightLeftTowerRoof = -9;
const segmentsLefttTowerRoof = 16;
const LeftTowerRoofgeometry = new THREE.ConeBufferGeometry(radiusLeftTowerRoof, heightLeftTowerRoof, segmentsLefttTowerRoof);

let LeftTowerRoofMaterial = new THREE.MeshBasicMaterial( { color: 0x000080} );
let LeftTowerRoof = new THREE.Mesh( LeftTowerRoofgeometry, LeftTowerRoofMaterial );
LeftTowerRoof.position.x = 30;
LeftTowerRoof.position.z = -11;
LeftTowerRoof.position.y = -17;
scene.add( LeftTowerRoof );



//castle
const widthCastle = 90;
const heightCastle = 40;
const depthCastle = 2;
const castleGeometry = new THREE.BoxBufferGeometry(widthCastle, heightCastle, depthCastle);

let castleTexture = new THREE.TextureLoader().load( 'assets/textures/castlewall.jpg' );
let castleMaterial = new THREE.MeshBasicMaterial( {map: castleTexture} );
let castle = new THREE.Mesh( castleGeometry, castleMaterial );
castle.position.set(0,-2,-20);
scene.add( castle );



//bridge
const widthBridge = 15;
const heightBridge = 2;
const depthBridge = 5;
const bridgeeGeometry = new THREE.BoxBufferGeometry(widthBridge, heightBridge, depthBridge);

let bridgeTexture = new THREE.TextureLoader().load( 'assets/textures/bridge.jpg' );
let bridgeMaterial = new THREE.MeshBasicMaterial( {map: bridgeTexture} );
let bridge = new THREE.Mesh( bridgeeGeometry, bridgeMaterial );
bridge.position.set(0,9,-5);
scene.add( bridge );



camera.position.z = 8;
 


let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
function animate() {
   requestAnimationFrame( animate );
   renderer.render( scene, camera );
}
animate();