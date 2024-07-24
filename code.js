

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5705596f-3f97-4c5a-8928-afc436b091d2","4fb4be41-60df-4680-8da5-0e62f1f6d6f8"],"propsByKey":{"5705596f-3f97-4c5a-8928-afc436b091d2":{"name":"pajaro","frameCount":1,"frameSize":{"x":400,"y":230},"looping":true,"frameDelay":2,"categories":["animals"],"jsonLastModified":"2021-01-11 19:19:02 UTC","pngLastModified":"2021-01-11 19:19:03 UTC","version":"hDbHMp1UmEHMCSm_l9dJNKAHs.0XokdT","sourceUrl":"assets/api/v1/animation-library/gamelab/hDbHMp1UmEHMCSm_l9dJNKAHs.0XokdT/category_animals/birdside_03.png","sourceSize":{"x":400,"y":230},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/hDbHMp1UmEHMCSm_l9dJNKAHs.0XokdT/category_animals/birdside_03.png"},"4fb4be41-60df-4680-8da5-0e62f1f6d6f8":{"name":"explosion","categories":["video_games"],"frameCount":1,"frameSize":{"x":360,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-03-29 19:32:07 UTC","pngLastModified":"2021-03-29 19:32:07 UTC","version":"ouSniUdBPmByS9qdf395XpliE0eUsMAm","sourceUrl":"assets/api/v1/animation-library/gamelab/ouSniUdBPmByS9qdf395XpliE0eUsMAm/category_video_games/gameplayobject_item_03.png","sourceSize":{"x":360,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/ouSniUdBPmByS9qdf395XpliE0eUsMAm/category_video_games/gameplayobject_item_03.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var cazador= createSprite(200,350,100,10);
var pato1= createSprite(350,50,60,20);
var pato2 = createSprite(50,75,50,20);
var pato3 = createSprite(350,110,50,20);
var pato4 = createSprite(50,130,50,20);
var pato5 = createSprite(200,110,50,20);
var bomba = createSprite(200,310,20,20);
var pasto = createSprite(200,410,400,100);
var puntaje = 0;
var gamestate ="serve";

pasto.shapeColor="green";
cazador.shapeColor="red";
pato1.setAnimation("pajaro");
pato1.scale= 0.2;
pato2.setAnimation("pajaro");
pato2.scale= 0.2;
pato3.setAnimation("pajaro");
pato3.scale= 0.2;
pato4.setAnimation("pajaro");
pato4.scale= 0.2;
pato5.setAnimation("pajaro");
pato5.scale= 0.2;
bomba.setAnimation("explosion");
bomba.scale=0.05;
 function draw ()  {
  background("blue");
if (gamestate == "serve") {
   textSize(18);
   stroke("black");
   text("PRESIONA ESPACIO PARA INICIAR",60,220);
 if(keyDown("space")){
  bomba.velocityY=-5;
  bomba.velocityX=5;
   pato1.velocityX=-10;
   pato2.velocityX=10;
   pato3.velocityX=-10;
   pato4.velocityX=10;
   pato5.velocityX=11;
gamestate = "play";
 }
}

if(gamestate == "play") {
  if(puntaje == 5) {
 gamestate = "end";
 }

  if(bomba.isTouching(bottomEdge)) {
gamestate = "end";
  }
}
if(gamestate=="end") {
  bomba.velocityY=0;
  bomba.velocityX=0;
  pato1.velocityX=0;
  pato2.velocityX=0;
  pato3.velocityX=0;
  pato4.velocityX=0;
  pato5.velocityX=0;
     textSize(20);
  stroke("black");
 text("FIN DEL JUEGO", 120,220);
}



 textSize(15);
  stroke("black");
  text("Puntuación : " + puntaje, 300, 25);
if(bomba.isTouching(pato1)) {
     puntaje = puntaje + 1;
    pato1.destroy();
  }
    if(bomba.isTouching(pato2)) {
     puntaje = puntaje + 1;
    pato2.destroy();
  }
    
 if(bomba.isTouching(pato2)) {
     puntaje = puntaje + 1;
    pato2.destroy();
  }
    
 if(bomba.isTouching(pato3)) {
     puntaje = puntaje + 1;
    pato3.destroy();
  }
    
 if(bomba.isTouching(pato4)) {
     puntaje = puntaje + 1;
    pato4.destroy();
  }
    if(bomba.isTouching(pato5)) {
     puntaje = puntaje + 1;
    pato5.destroy();
  }
    
 
 
 
  //bordes
  createEdgeSprites();
 
  pato1.bounceOff(edges);
  pato2.bounceOff(edges);
  pato3.bounceOff(edges);
   pato4.bounceOff(edges);
  pato5.bounceOff(edges) ;
  bomba.bounceOff(cazador);
  bomba.bounceOff(rightEdge);
  bomba.bounceOff(topEdge);
  bomba.bounceOff(leftEdge);
 //Movimiento )
if(keyDown("right")) {
   cazador.x = cazador.x +5;
 }
  if(keyDown("left")) {
    cazador.x = cazador.x -5;
  }
  
 
 
 
  



 
  drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
