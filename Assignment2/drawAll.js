function drawAll(){
    var pink = [0.98, 0.74, 0.71, 1.0];   // main pig color
    var snout = [0.99, 0.7, 0.7, 1.0];    // snout color
    headPink = [0.90, 0.65, 0.63, 1.0];
    feetColor = [0.96, 0.65, 0.55, 1.0];

    // body =====================================
    var body = new Cube();
    body.color = pink;
    body.matrix.scale(.35, 0.25, 0.55);   // made body chunkier
    body.matrix.translate(-.5, 0, -0.25);
    body.render();

    // head =====================================
    var head = new Cube();
    head.color = headPink;
    head.matrix.rotate(-head_animation, 1, 0, 0);
    head.matrix.scale(0.25, 0.25, 0.25);
    head.matrix.translate(-.5, 0.25, -1.5);  // moved head closer to body
    head.render();

    // snout =====================================
    var snoutCube = new Cube();
    snoutCube.color = snout;
    snoutCube.matrix.rotate(-head_animation, 1, 0, 0);
    snoutCube.matrix.scale(0.15, 0.1, 0.06);
    snoutCube.matrix.translate(-0.5, 0.65, -7.0);  // positioned for pig snout
    snoutCube.render();

    // left nostril =====================================
    var leftNostril = new Cube();
    leftNostril.color = [0, 0, 0, 1];
    leftNostril.matrix.rotate(-head_animation, 1, 0, 0);
    leftNostril.matrix.scale(0.025, 0.025, 0.02);
    leftNostril.matrix.translate(-2.0, 4, -35);
    leftNostril.render();

    // right nostril =====================================
    var rightNostril = new Cube();
    rightNostril.color = [0, 0, 0, 1];
    rightNostril.matrix.rotate(-head_animation, 1, 0, 0);
    rightNostril.matrix.scale(0.025, 0.025, 0.02);
    rightNostril.matrix.translate(0.5, 4.0, -35);
    rightNostril.render();

    // eyes =====================================
    var lefteye = new Cube();
    lefteye.color = [1,1,1,1];
    lefteye.matrix.rotate(-head_animation, 1, 0, 0);
    lefteye.matrix.scale(0.08, 0.05, 0.04);
    lefteye.matrix.translate(-1.5, 3.5, -10);
    lefteye.render();

    var lefteyeblack = new Cube();
    lefteyeblack.color = [0,0,0,1];
    lefteyeblack.matrix.rotate(-head_animation, 1, 0, 0);
    lefteyeblack.matrix.scale(0.04, 0.05, 0.04);
    lefteyeblack.matrix.translate(-3.0, 3.5, -10.05);
    lefteyeblack.render();

    var righteye = new Cube();
    righteye.color = [1,1,1,1];
    righteye.matrix.rotate(-head_animation, 1, 0, 0);
    righteye.matrix.scale(0.08, 0.05, 0.04);
    righteye.matrix.translate(0.5, 3.5, -10);
    righteye.render();

    var righteyeblack = new Cube();
    righteyeblack.color = [0,0,0,1];
    righteyeblack.matrix.rotate(-head_animation, 1, 0, 0);
    righteyeblack.matrix.scale(0.04, 0.05, 0.04);
    righteyeblack.matrix.translate(2.0, 3.5, -10.05);
    righteyeblack.render();

    // upper legs ============================
    var frontleft = new Cube();
    frontleft.color = pink;
    frontleft.matrix.setTranslate(0, 0, 0);
    frontleft.matrix.rotate(-g_jointAngle, 0, 0, 1);
    var frontleftCoord = new Matrix4(frontleft.matrix);
    frontleft.matrix.scale(.12, -0.12, 0.12);
    frontleft.matrix.translate(-1.2, -.25, -0.75);
    frontleft.render();

    var frontright = new Cube();
    frontright.color = pink;
    frontright.matrix.setTranslate(0, 0, 0);
    frontright.matrix.rotate(g_jointAngle, 0, 0, 1);
    var frontrightCoord = new Matrix4(frontright.matrix);
    frontright.matrix.scale(.12, -0.12, 0.12);
    frontright.matrix.translate(0.3, -.25, -0.75);
    frontright.render();

    var backleft = new Cube();
    backleft.color = pink;
    backleft.matrix.setTranslate(0, 0, 0);
    backleft.matrix.rotate(-g_jointAngle, 0, 0, 1);
    var backleftCoord = new Matrix4(backleft.matrix);
    backleft.matrix.scale(.12, -0.12, 0.12);
    backleft.matrix.translate(-1.2, -.25, 1.5);
    backleft.render();

    var backright = new Cube();
    backright.color = pink;
    backright.matrix.setTranslate(0, 0, 0);
    backright.matrix.rotate(g_jointAngle, 0, 0, 1);
    var backrightCoord = new Matrix4(backright.matrix);
    backright.matrix.scale(.12, -0.12, 0.12);
    backright.matrix.translate(0.3, -.25, 1.5);
    backright.render();

    // lower legs =======================================
    var frontleftlow = new Cube();
    frontleftlow.color = feetColor;
    frontleftlow.matrix = frontleftCoord;
    frontleftlow.matrix.rotate(-g_jointAngle2, 0, 0, 1);
    frontleftlow.matrix.scale(.12, -0.12, 0.12);
    frontleftlow.matrix.translate(-1.2, .1, -0.75);
    frontleftlow.render();

    var frontrightlow = new Cube();
    frontrightlow.color = feetColor;
    frontrightlow.matrix = frontrightCoord;
    frontrightlow.matrix.rotate(g_jointAngle2, 0, 0, 1);
    frontrightlow.matrix.scale(.12, -0.12, 0.12);
    frontrightlow.matrix.translate(0.3, .1, -0.75);
    frontrightlow.render();

    var backleftlow = new Cube();
    backleftlow.color = feetColor;
    backleftlow.matrix = backleftCoord;
    backleftlow.matrix.rotate(-g_jointAngle2, 0, 0, 1);
    backleftlow.matrix.scale(.12, -0.12, 0.12);
    backleftlow.matrix.translate(-1.2, .1, 1.5);
    backleftlow.render();

    var backrightlow = new Cube();
    backrightlow.color = feetColor;
    backrightlow.matrix = backrightCoord;
    backrightlow.matrix.rotate(g_jointAngle2, 0, 0, 1);
    backrightlow.matrix.scale(.12, -0.12, 0.12);;
    backrightlow.matrix.translate(0.3, .1, 1.5);
    backrightlow.render();
}
