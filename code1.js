gdjs.GamePlayCode = {};
gdjs.GamePlayCode.GDBackgroundObjects1= [];
gdjs.GamePlayCode.GDBackgroundObjects2= [];
gdjs.GamePlayCode.GDBackgroundObjects3= [];
gdjs.GamePlayCode.GDBackgroundObjects4= [];
gdjs.GamePlayCode.GDtileObjects1= [];
gdjs.GamePlayCode.GDtileObjects2= [];
gdjs.GamePlayCode.GDtileObjects3= [];
gdjs.GamePlayCode.GDtileObjects4= [];
gdjs.GamePlayCode.GDgroundObjects1= [];
gdjs.GamePlayCode.GDgroundObjects2= [];
gdjs.GamePlayCode.GDgroundObjects3= [];
gdjs.GamePlayCode.GDgroundObjects4= [];
gdjs.GamePlayCode.GDSkeletObjects1= [];
gdjs.GamePlayCode.GDSkeletObjects2= [];
gdjs.GamePlayCode.GDSkeletObjects3= [];
gdjs.GamePlayCode.GDSkeletObjects4= [];
gdjs.GamePlayCode.GDBrickObjects1= [];
gdjs.GamePlayCode.GDBrickObjects2= [];
gdjs.GamePlayCode.GDBrickObjects3= [];
gdjs.GamePlayCode.GDBrickObjects4= [];
gdjs.GamePlayCode.GDRightArrowObjects1= [];
gdjs.GamePlayCode.GDRightArrowObjects2= [];
gdjs.GamePlayCode.GDRightArrowObjects3= [];
gdjs.GamePlayCode.GDRightArrowObjects4= [];
gdjs.GamePlayCode.GDLeftArrowObjects1= [];
gdjs.GamePlayCode.GDLeftArrowObjects2= [];
gdjs.GamePlayCode.GDLeftArrowObjects3= [];
gdjs.GamePlayCode.GDLeftArrowObjects4= [];
gdjs.GamePlayCode.GDCartoonSmokeObjects1= [];
gdjs.GamePlayCode.GDCartoonSmokeObjects2= [];
gdjs.GamePlayCode.GDCartoonSmokeObjects3= [];
gdjs.GamePlayCode.GDCartoonSmokeObjects4= [];
gdjs.GamePlayCode.GDUnderConstructionObjects1= [];
gdjs.GamePlayCode.GDUnderConstructionObjects2= [];
gdjs.GamePlayCode.GDUnderConstructionObjects3= [];
gdjs.GamePlayCode.GDUnderConstructionObjects4= [];
gdjs.GamePlayCode.GDMetalRedBarObjects1= [];
gdjs.GamePlayCode.GDMetalRedBarObjects2= [];
gdjs.GamePlayCode.GDMetalRedBarObjects3= [];
gdjs.GamePlayCode.GDMetalRedBarObjects4= [];
gdjs.GamePlayCode.GDCopperRedBarObjects1= [];
gdjs.GamePlayCode.GDCopperRedBarObjects2= [];
gdjs.GamePlayCode.GDCopperRedBarObjects3= [];
gdjs.GamePlayCode.GDCopperRedBarObjects4= [];
gdjs.GamePlayCode.GDWoodYellowBarObjects1= [];
gdjs.GamePlayCode.GDWoodYellowBarObjects2= [];
gdjs.GamePlayCode.GDWoodYellowBarObjects3= [];
gdjs.GamePlayCode.GDWoodYellowBarObjects4= [];
gdjs.GamePlayCode.GDHearthObjects1= [];
gdjs.GamePlayCode.GDHearthObjects2= [];
gdjs.GamePlayCode.GDHearthObjects3= [];
gdjs.GamePlayCode.GDHearthObjects4= [];
gdjs.GamePlayCode.GDCoinObjects1= [];
gdjs.GamePlayCode.GDCoinObjects2= [];
gdjs.GamePlayCode.GDCoinObjects3= [];
gdjs.GamePlayCode.GDCoinObjects4= [];
gdjs.GamePlayCode.GDCoin2Objects1= [];
gdjs.GamePlayCode.GDCoin2Objects2= [];
gdjs.GamePlayCode.GDCoin2Objects3= [];
gdjs.GamePlayCode.GDCoin2Objects4= [];
gdjs.GamePlayCode.GDSkeletonObjects1= [];
gdjs.GamePlayCode.GDSkeletonObjects2= [];
gdjs.GamePlayCode.GDSkeletonObjects3= [];
gdjs.GamePlayCode.GDSkeletonObjects4= [];
gdjs.GamePlayCode.GDCoins_9595CollectedObjects1= [];
gdjs.GamePlayCode.GDCoins_9595CollectedObjects2= [];
gdjs.GamePlayCode.GDCoins_9595CollectedObjects3= [];
gdjs.GamePlayCode.GDCoins_9595CollectedObjects4= [];
gdjs.GamePlayCode.GDRightObjects1= [];
gdjs.GamePlayCode.GDRightObjects2= [];
gdjs.GamePlayCode.GDRightObjects3= [];
gdjs.GamePlayCode.GDRightObjects4= [];
gdjs.GamePlayCode.GDLeftObjects1= [];
gdjs.GamePlayCode.GDLeftObjects2= [];
gdjs.GamePlayCode.GDLeftObjects3= [];
gdjs.GamePlayCode.GDLeftObjects4= [];
gdjs.GamePlayCode.GDViewScoreObjects1= [];
gdjs.GamePlayCode.GDViewScoreObjects2= [];
gdjs.GamePlayCode.GDViewScoreObjects3= [];
gdjs.GamePlayCode.GDViewScoreObjects4= [];


gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDRightObjects3Objects = Hashtable.newFrom({"Right": gdjs.GamePlayCode.GDRightObjects3});
gdjs.GamePlayCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10961924);
}
if (isConditionTrue_0) {
{gdjs.deviceVibration.startVibration(50);
}}

}


};gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDLeftObjects2Objects = Hashtable.newFrom({"Left": gdjs.GamePlayCode.GDLeftObjects2});
gdjs.GamePlayCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10843004);
}
if (isConditionTrue_0) {
{gdjs.deviceVibration.startVibration(50);
}}

}


};gdjs.GamePlayCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.GamePlayCode.GDRightObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDRightObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Skelet"), gdjs.GamePlayCode.GDSkeletObjects3);
{for(var i = 0, len = gdjs.GamePlayCode.GDSkeletObjects3.length ;i < len;++i) {
    gdjs.GamePlayCode.GDSkeletObjects3[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}{for(var i = 0, len = gdjs.GamePlayCode.GDSkeletObjects3.length ;i < len;++i) {
    gdjs.GamePlayCode.GDSkeletObjects3[i].getBehavior("Animation").setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.GamePlayCode.GDSkeletObjects3.length ;i < len;++i) {
    gdjs.GamePlayCode.GDSkeletObjects3[i].getBehavior("Flippable").flipX(false);
}
}
{ //Subevents
gdjs.GamePlayCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.GamePlayCode.GDLeftObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDLeftObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Skelet"), gdjs.GamePlayCode.GDSkeletObjects2);
{for(var i = 0, len = gdjs.GamePlayCode.GDSkeletObjects2.length ;i < len;++i) {
    gdjs.GamePlayCode.GDSkeletObjects2[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}{for(var i = 0, len = gdjs.GamePlayCode.GDSkeletObjects2.length ;i < len;++i) {
    gdjs.GamePlayCode.GDSkeletObjects2[i].getBehavior("Animation").setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.GamePlayCode.GDSkeletObjects2.length ;i < len;++i) {
    gdjs.GamePlayCode.GDSkeletObjects2[i].getBehavior("Flippable").flipX(true);
}
}
{ //Subevents
gdjs.GamePlayCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.GamePlayCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.GamePlayCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Skelet"), gdjs.GamePlayCode.GDSkeletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GamePlayCode.GDSkeletObjects1.length;i<l;++i) {
    if ( !(gdjs.GamePlayCode.GDSkeletObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.GamePlayCode.GDSkeletObjects1[k] = gdjs.GamePlayCode.GDSkeletObjects1[i];
        ++k;
    }
}
gdjs.GamePlayCode.GDSkeletObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GamePlayCode.GDSkeletObjects1 */
{for(var i = 0, len = gdjs.GamePlayCode.GDSkeletObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDSkeletObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


};gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDBrickObjects1Objects = Hashtable.newFrom({"Brick": gdjs.GamePlayCode.GDBrickObjects1});
gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDCoin2Objects1Objects = Hashtable.newFrom({"Coin2": gdjs.GamePlayCode.GDCoin2Objects1});
gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDSkeletObjects1Objects = Hashtable.newFrom({"Skelet": gdjs.GamePlayCode.GDSkeletObjects1});
gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDBrickObjects1Objects = Hashtable.newFrom({"Brick": gdjs.GamePlayCode.GDBrickObjects1});
gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDCartoonSmokeObjects1Objects = Hashtable.newFrom({"CartoonSmoke": gdjs.GamePlayCode.GDCartoonSmokeObjects1});
gdjs.GamePlayCode.asyncCallback11068188 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("CartoonSmoke"), gdjs.GamePlayCode.GDCartoonSmokeObjects2);

{for(var i = 0, len = gdjs.GamePlayCode.GDCartoonSmokeObjects2.length ;i < len;++i) {
    gdjs.GamePlayCode.GDCartoonSmokeObjects2[i].deleteFromScene(runtimeScene);
}
}}
gdjs.GamePlayCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.GamePlayCode.GDCartoonSmokeObjects1) asyncObjectsList.addObject("CartoonSmoke", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.GamePlayCode.asyncCallback11068188(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GamePlayCode.eventsList5 = function(runtimeScene) {

{

/* Reuse gdjs.GamePlayCode.GDBrickObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Skelet"), gdjs.GamePlayCode.GDSkeletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDSkeletObjects1Objects, gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDBrickObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10739580);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GamePlayCode.GDBrickObjects1 */
/* Reuse gdjs.GamePlayCode.GDSkeletObjects1 */
gdjs.GamePlayCode.GDCartoonSmokeObjects1.length = 0;

{for(var i = 0, len = gdjs.GamePlayCode.GDSkeletObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDSkeletObjects1[i].getBehavior("Flash").Flash(0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDCartoonSmokeObjects1Objects, (( gdjs.GamePlayCode.GDBrickObjects1.length === 0 ) ? 0 :gdjs.GamePlayCode.GDBrickObjects1[0].getCenterXInScene()), (( gdjs.GamePlayCode.GDBrickObjects1.length === 0 ) ? 0 :gdjs.GamePlayCode.GDBrickObjects1[0].getCenterXInScene()), "");
}{for(var i = 0, len = gdjs.GamePlayCode.GDCartoonSmokeObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDCartoonSmokeObjects1[i].setCenterPositionInScene((( gdjs.GamePlayCode.GDBrickObjects1.length === 0 ) ? 0 :gdjs.GamePlayCode.GDBrickObjects1[0].getCenterXInScene()),(( gdjs.GamePlayCode.GDBrickObjects1.length === 0 ) ? 0 :gdjs.GamePlayCode.GDBrickObjects1[0].getCenterYInScene()));
}
}
{ //Subevents
gdjs.GamePlayCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDSkeletObjects1Objects = Hashtable.newFrom({"Skelet": gdjs.GamePlayCode.GDSkeletObjects1});
gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDCoin2Objects1Objects = Hashtable.newFrom({"Coin2": gdjs.GamePlayCode.GDCoin2Objects1});
gdjs.GamePlayCode.eventsList6 = function(runtimeScene) {

{

/* Reuse gdjs.GamePlayCode.GDCoin2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Skelet"), gdjs.GamePlayCode.GDSkeletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDSkeletObjects1Objects, gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDCoin2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10994900);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.GamePlayCode.GDCoinObjects1);
/* Reuse gdjs.GamePlayCode.GDCoin2Objects1 */
{for(var i = 0, len = gdjs.GamePlayCode.GDCoin2Objects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDCoin2Objects1[i].getBehavior("Tween").addObjectPositionTween2("CoinCatched", (( gdjs.GamePlayCode.GDCoinObjects1.length === 0 ) ? 0 :gdjs.GamePlayCode.GDCoinObjects1[0].getPointX("")), (( gdjs.GamePlayCode.GDCoinObjects1.length === 0 ) ? 0 :gdjs.GamePlayCode.GDCoinObjects1[0].getPointY("")), "linear", 0.3, false);
}
}{for(var i = 0, len = gdjs.GamePlayCode.GDCoin2Objects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDCoin2Objects1[i].getBehavior("Tween").addObjectOpacityTween2("CoinOpacity", 0, "linear", 0.3, true);
}
}}

}


};gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDCartoonSmokeObjects1Objects = Hashtable.newFrom({"CartoonSmoke": gdjs.GamePlayCode.GDCartoonSmokeObjects1});
gdjs.GamePlayCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{



}


};gdjs.GamePlayCode.asyncCallback11052124 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("CartoonSmoke"), gdjs.GamePlayCode.GDCartoonSmokeObjects2);

{for(var i = 0, len = gdjs.GamePlayCode.GDCartoonSmokeObjects2.length ;i < len;++i) {
    gdjs.GamePlayCode.GDCartoonSmokeObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.GamePlayCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.GamePlayCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.GamePlayCode.GDCartoonSmokeObjects1) asyncObjectsList.addObject("CartoonSmoke", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.GamePlayCode.asyncCallback11052124(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDViewScoreObjects1Objects = Hashtable.newFrom({"ViewScore": gdjs.GamePlayCode.GDViewScoreObjects1});
gdjs.GamePlayCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11055772);
}
if (isConditionTrue_0) {
{gdjs.deviceVibration.startVibration(50);
}}

}


};gdjs.GamePlayCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ViewScore"), gdjs.GamePlayCode.GDViewScoreObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDViewScoreObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "leaderboard", false);
}
{ //Subevents
gdjs.GamePlayCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDSkeletObjects2Objects = Hashtable.newFrom({"Skelet": gdjs.GamePlayCode.GDSkeletObjects2});
gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDCoin2Objects2Objects = Hashtable.newFrom({"Coin2": gdjs.GamePlayCode.GDCoin2Objects2});
gdjs.GamePlayCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13492388);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-bubbly-achievement-tone-3193.wav", false, 100, 1);
}}

}


};gdjs.GamePlayCode.eventsList12 = function(runtimeScene) {

{

/* Reuse gdjs.GamePlayCode.GDCoin2Objects2 */
gdjs.copyArray(runtimeScene.getObjects("Skelet"), gdjs.GamePlayCode.GDSkeletObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDSkeletObjects2Objects, gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDCoin2Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13497212);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WoodYellowBar"), gdjs.GamePlayCode.GDWoodYellowBarObjects2);
{for(var i = 0, len = gdjs.GamePlayCode.GDWoodYellowBarObjects2.length ;i < len;++i) {
    gdjs.GamePlayCode.GDWoodYellowBarObjects2[i].SetValue(gdjs.GamePlayCode.GDWoodYellowBarObjects2[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (5), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.GamePlayCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.GamePlayCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Coin2"), gdjs.GamePlayCode.GDCoin2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GamePlayCode.GDCoin2Objects2.length;i<l;++i) {
    if ( gdjs.GamePlayCode.GDCoin2Objects2[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.GamePlayCode.GDCoin2Objects2[k] = gdjs.GamePlayCode.GDCoin2Objects2[i];
        ++k;
    }
}
gdjs.GamePlayCode.GDCoin2Objects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GamePlayCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDSkeletObjects2Objects = Hashtable.newFrom({"Skelet": gdjs.GamePlayCode.GDSkeletObjects2});
gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDBrickObjects2Objects = Hashtable.newFrom({"Brick": gdjs.GamePlayCode.GDBrickObjects2});
gdjs.GamePlayCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13033148);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-wood-hard-hit-2182.wav", false, 100, 1);
}}

}


};gdjs.GamePlayCode.eventsList15 = function(runtimeScene) {

{

/* Reuse gdjs.GamePlayCode.GDBrickObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Skelet"), gdjs.GamePlayCode.GDSkeletObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDSkeletObjects2Objects, gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDBrickObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10971964);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.GamePlayCode.GDMetalRedBarObjects2);
{for(var i = 0, len = gdjs.GamePlayCode.GDMetalRedBarObjects2.length ;i < len;++i) {
    gdjs.GamePlayCode.GDMetalRedBarObjects2[i].SetValue(gdjs.GamePlayCode.GDMetalRedBarObjects2[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (10), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.GamePlayCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.GamePlayCode.asyncCallback13492044 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Skelet"), gdjs.GamePlayCode.GDSkeletObjects3);

gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.GamePlayCode.GDSkeletonObjects3);
gdjs.copyArray(runtimeScene.getObjects("ViewScore"), gdjs.GamePlayCode.GDViewScoreObjects3);
{for(var i = 0, len = gdjs.GamePlayCode.GDSkeletObjects3.length ;i < len;++i) {
    gdjs.GamePlayCode.GDSkeletObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GamePlayCode.GDSkeletonObjects3.length ;i < len;++i) {
    gdjs.GamePlayCode.GDSkeletonObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.GamePlayCode.GDSkeletonObjects3.length ;i < len;++i) {
    gdjs.GamePlayCode.GDSkeletonObjects3[i].getBehavior("Animation").setAnimationName("Crumbling Into Bone Pile");
}
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "a3dac1a0-dcf1-4550-8055-c36bfd8d7b26", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{for(var i = 0, len = gdjs.GamePlayCode.GDViewScoreObjects3.length ;i < len;++i) {
    gdjs.GamePlayCode.GDViewScoreObjects3[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,864);
}
}}
gdjs.GamePlayCode.eventsList16 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.GamePlayCode.GDSkeletObjects2) asyncObjectsList.addObject("Skelet", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GamePlayCode.asyncCallback13492044(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GamePlayCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13493980);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "lose.wav", false, 100, 1);
}}

}


};gdjs.GamePlayCode.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Brick"), gdjs.GamePlayCode.GDBrickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GamePlayCode.GDBrickObjects2.length;i<l;++i) {
    if ( gdjs.GamePlayCode.GDBrickObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.GamePlayCode.GDBrickObjects2[k] = gdjs.GamePlayCode.GDBrickObjects2[i];
        ++k;
    }
}
gdjs.GamePlayCode.GDBrickObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GamePlayCode.eventsList15(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.GamePlayCode.GDMetalRedBarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GamePlayCode.GDMetalRedBarObjects2.length;i<l;++i) {
    if ( gdjs.GamePlayCode.GDMetalRedBarObjects2[i].IsEmpty((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GamePlayCode.GDMetalRedBarObjects2[k] = gdjs.GamePlayCode.GDMetalRedBarObjects2[i];
        ++k;
    }
}
gdjs.GamePlayCode.GDMetalRedBarObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Brick"), gdjs.GamePlayCode.GDBrickObjects2);
gdjs.copyArray(runtimeScene.getObjects("Coin2"), gdjs.GamePlayCode.GDCoin2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Skelet"), gdjs.GamePlayCode.GDSkeletObjects2);
{for(var i = 0, len = gdjs.GamePlayCode.GDBrickObjects2.length ;i < len;++i) {
    gdjs.GamePlayCode.GDBrickObjects2[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.GamePlayCode.GDCoin2Objects2.length ;i < len;++i) {
    gdjs.GamePlayCode.GDCoin2Objects2[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.GamePlayCode.GDSkeletObjects2.length ;i < len;++i) {
    gdjs.GamePlayCode.GDSkeletObjects2[i].getBehavior("Flash").Flash(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.GamePlayCode.eventsList16(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.GamePlayCode.GDMetalRedBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GamePlayCode.GDMetalRedBarObjects1.length;i<l;++i) {
    if ( gdjs.GamePlayCode.GDMetalRedBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GamePlayCode.GDMetalRedBarObjects1[k] = gdjs.GamePlayCode.GDMetalRedBarObjects1[i];
        ++k;
    }
}
gdjs.GamePlayCode.GDMetalRedBarObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GamePlayCode.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.GamePlayCode.eventsList19 = function(runtimeScene) {

{


gdjs.GamePlayCode.eventsList3(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.GamePlayCode.GDSkeletonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ViewScore"), gdjs.GamePlayCode.GDViewScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("WoodYellowBar"), gdjs.GamePlayCode.GDWoodYellowBarObjects1);
gdjs.GamePlayCode.GDBrickObjects1.length = 0;

gdjs.GamePlayCode.GDCoin2Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDBrickObjects1Objects, gdjs.random(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)) + gdjs.randomFloatInRange(-(9080), 9080), -(400), "");
}{for(var i = 0, len = gdjs.GamePlayCode.GDBrickObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDBrickObjects1[i].getBehavior("Resizable").setSize(96, 96);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDCoin2Objects1Objects, gdjs.random(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)) + gdjs.randomFloatInRange(-(15080), 15080), -(400), "");
}{for(var i = 0, len = gdjs.GamePlayCode.GDCoin2Objects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDCoin2Objects1[i].getBehavior("Resizable").setSize(54, 54);
}
}{for(var i = 0, len = gdjs.GamePlayCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDSkeletonObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.common.toString((( gdjs.GamePlayCode.GDWoodYellowBarObjects1.length === 0 ) ? 0 :gdjs.GamePlayCode.GDWoodYellowBarObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}{for(var i = 0, len = gdjs.GamePlayCode.GDViewScoreObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDViewScoreObjects1[i].getBehavior("Resizable").setSize(352, 128);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.GamePlayCode.GDSkeletonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ViewScore"), gdjs.GamePlayCode.GDViewScoreObjects1);
{for(var i = 0, len = gdjs.GamePlayCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDSkeletonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GamePlayCode.GDViewScoreObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDViewScoreObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,1312);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "bg_music.mp3", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Brick"), gdjs.GamePlayCode.GDBrickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GamePlayCode.GDBrickObjects1.length;i<l;++i) {
    if ( gdjs.GamePlayCode.GDBrickObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.GamePlayCode.GDBrickObjects1[k] = gdjs.GamePlayCode.GDBrickObjects1[i];
        ++k;
    }
}
gdjs.GamePlayCode.GDBrickObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GamePlayCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin2"), gdjs.GamePlayCode.GDCoin2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GamePlayCode.GDCoin2Objects1.length;i<l;++i) {
    if ( gdjs.GamePlayCode.GDCoin2Objects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.GamePlayCode.GDCoin2Objects1[k] = gdjs.GamePlayCode.GDCoin2Objects1[i];
        ++k;
    }
}
gdjs.GamePlayCode.GDCoin2Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GamePlayCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Brick"), gdjs.GamePlayCode.GDBrickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GamePlayCode.GDBrickObjects1.length;i<l;++i) {
    if ( gdjs.GamePlayCode.GDBrickObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.GamePlayCode.GDBrickObjects1[k] = gdjs.GamePlayCode.GDBrickObjects1[i];
        ++k;
    }
}
gdjs.GamePlayCode.GDBrickObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GamePlayCode.GDBrickObjects1 */
gdjs.GamePlayCode.GDCartoonSmokeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GamePlayCode.mapOfGDgdjs_9546GamePlayCode_9546GDCartoonSmokeObjects1Objects, (( gdjs.GamePlayCode.GDBrickObjects1.length === 0 ) ? 0 :gdjs.GamePlayCode.GDBrickObjects1[0].getCenterXInScene()), (( gdjs.GamePlayCode.GDBrickObjects1.length === 0 ) ? 0 :gdjs.GamePlayCode.GDBrickObjects1[0].getCenterXInScene()), "");
}{for(var i = 0, len = gdjs.GamePlayCode.GDCartoonSmokeObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDCartoonSmokeObjects1[i].setZoneRadius(30);
}
}{for(var i = 0, len = gdjs.GamePlayCode.GDCartoonSmokeObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDCartoonSmokeObjects1[i].setCenterPositionInScene((( gdjs.GamePlayCode.GDBrickObjects1.length === 0 ) ? 0 :gdjs.GamePlayCode.GDBrickObjects1[0].getCenterXInScene()),(( gdjs.GamePlayCode.GDBrickObjects1.length === 0 ) ? 0 :gdjs.GamePlayCode.GDBrickObjects1[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.GamePlayCode.GDBrickObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDBrickObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.GamePlayCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin2"), gdjs.GamePlayCode.GDCoin2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GamePlayCode.GDCoin2Objects1.length;i<l;++i) {
    if ( gdjs.GamePlayCode.GDCoin2Objects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.GamePlayCode.GDCoin2Objects1[k] = gdjs.GamePlayCode.GDCoin2Objects1[i];
        ++k;
    }
}
gdjs.GamePlayCode.GDCoin2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GamePlayCode.GDCoin2Objects1 */
{for(var i = 0, len = gdjs.GamePlayCode.GDCoin2Objects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDCoin2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.GamePlayCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


gdjs.GamePlayCode.eventsList13(runtimeScene);
}


{


gdjs.GamePlayCode.eventsList18(runtimeScene);
}


};

gdjs.GamePlayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GamePlayCode.GDBackgroundObjects1.length = 0;
gdjs.GamePlayCode.GDBackgroundObjects2.length = 0;
gdjs.GamePlayCode.GDBackgroundObjects3.length = 0;
gdjs.GamePlayCode.GDBackgroundObjects4.length = 0;
gdjs.GamePlayCode.GDtileObjects1.length = 0;
gdjs.GamePlayCode.GDtileObjects2.length = 0;
gdjs.GamePlayCode.GDtileObjects3.length = 0;
gdjs.GamePlayCode.GDtileObjects4.length = 0;
gdjs.GamePlayCode.GDgroundObjects1.length = 0;
gdjs.GamePlayCode.GDgroundObjects2.length = 0;
gdjs.GamePlayCode.GDgroundObjects3.length = 0;
gdjs.GamePlayCode.GDgroundObjects4.length = 0;
gdjs.GamePlayCode.GDSkeletObjects1.length = 0;
gdjs.GamePlayCode.GDSkeletObjects2.length = 0;
gdjs.GamePlayCode.GDSkeletObjects3.length = 0;
gdjs.GamePlayCode.GDSkeletObjects4.length = 0;
gdjs.GamePlayCode.GDBrickObjects1.length = 0;
gdjs.GamePlayCode.GDBrickObjects2.length = 0;
gdjs.GamePlayCode.GDBrickObjects3.length = 0;
gdjs.GamePlayCode.GDBrickObjects4.length = 0;
gdjs.GamePlayCode.GDRightArrowObjects1.length = 0;
gdjs.GamePlayCode.GDRightArrowObjects2.length = 0;
gdjs.GamePlayCode.GDRightArrowObjects3.length = 0;
gdjs.GamePlayCode.GDRightArrowObjects4.length = 0;
gdjs.GamePlayCode.GDLeftArrowObjects1.length = 0;
gdjs.GamePlayCode.GDLeftArrowObjects2.length = 0;
gdjs.GamePlayCode.GDLeftArrowObjects3.length = 0;
gdjs.GamePlayCode.GDLeftArrowObjects4.length = 0;
gdjs.GamePlayCode.GDCartoonSmokeObjects1.length = 0;
gdjs.GamePlayCode.GDCartoonSmokeObjects2.length = 0;
gdjs.GamePlayCode.GDCartoonSmokeObjects3.length = 0;
gdjs.GamePlayCode.GDCartoonSmokeObjects4.length = 0;
gdjs.GamePlayCode.GDUnderConstructionObjects1.length = 0;
gdjs.GamePlayCode.GDUnderConstructionObjects2.length = 0;
gdjs.GamePlayCode.GDUnderConstructionObjects3.length = 0;
gdjs.GamePlayCode.GDUnderConstructionObjects4.length = 0;
gdjs.GamePlayCode.GDMetalRedBarObjects1.length = 0;
gdjs.GamePlayCode.GDMetalRedBarObjects2.length = 0;
gdjs.GamePlayCode.GDMetalRedBarObjects3.length = 0;
gdjs.GamePlayCode.GDMetalRedBarObjects4.length = 0;
gdjs.GamePlayCode.GDCopperRedBarObjects1.length = 0;
gdjs.GamePlayCode.GDCopperRedBarObjects2.length = 0;
gdjs.GamePlayCode.GDCopperRedBarObjects3.length = 0;
gdjs.GamePlayCode.GDCopperRedBarObjects4.length = 0;
gdjs.GamePlayCode.GDWoodYellowBarObjects1.length = 0;
gdjs.GamePlayCode.GDWoodYellowBarObjects2.length = 0;
gdjs.GamePlayCode.GDWoodYellowBarObjects3.length = 0;
gdjs.GamePlayCode.GDWoodYellowBarObjects4.length = 0;
gdjs.GamePlayCode.GDHearthObjects1.length = 0;
gdjs.GamePlayCode.GDHearthObjects2.length = 0;
gdjs.GamePlayCode.GDHearthObjects3.length = 0;
gdjs.GamePlayCode.GDHearthObjects4.length = 0;
gdjs.GamePlayCode.GDCoinObjects1.length = 0;
gdjs.GamePlayCode.GDCoinObjects2.length = 0;
gdjs.GamePlayCode.GDCoinObjects3.length = 0;
gdjs.GamePlayCode.GDCoinObjects4.length = 0;
gdjs.GamePlayCode.GDCoin2Objects1.length = 0;
gdjs.GamePlayCode.GDCoin2Objects2.length = 0;
gdjs.GamePlayCode.GDCoin2Objects3.length = 0;
gdjs.GamePlayCode.GDCoin2Objects4.length = 0;
gdjs.GamePlayCode.GDSkeletonObjects1.length = 0;
gdjs.GamePlayCode.GDSkeletonObjects2.length = 0;
gdjs.GamePlayCode.GDSkeletonObjects3.length = 0;
gdjs.GamePlayCode.GDSkeletonObjects4.length = 0;
gdjs.GamePlayCode.GDCoins_9595CollectedObjects1.length = 0;
gdjs.GamePlayCode.GDCoins_9595CollectedObjects2.length = 0;
gdjs.GamePlayCode.GDCoins_9595CollectedObjects3.length = 0;
gdjs.GamePlayCode.GDCoins_9595CollectedObjects4.length = 0;
gdjs.GamePlayCode.GDRightObjects1.length = 0;
gdjs.GamePlayCode.GDRightObjects2.length = 0;
gdjs.GamePlayCode.GDRightObjects3.length = 0;
gdjs.GamePlayCode.GDRightObjects4.length = 0;
gdjs.GamePlayCode.GDLeftObjects1.length = 0;
gdjs.GamePlayCode.GDLeftObjects2.length = 0;
gdjs.GamePlayCode.GDLeftObjects3.length = 0;
gdjs.GamePlayCode.GDLeftObjects4.length = 0;
gdjs.GamePlayCode.GDViewScoreObjects1.length = 0;
gdjs.GamePlayCode.GDViewScoreObjects2.length = 0;
gdjs.GamePlayCode.GDViewScoreObjects3.length = 0;
gdjs.GamePlayCode.GDViewScoreObjects4.length = 0;

gdjs.GamePlayCode.eventsList19(runtimeScene);

return;

}

gdjs['GamePlayCode'] = gdjs.GamePlayCode;
