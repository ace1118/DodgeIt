gdjs.AuthenticationCode = {};
gdjs.AuthenticationCode.GDBackgroundObjects1= [];
gdjs.AuthenticationCode.GDBackgroundObjects2= [];
gdjs.AuthenticationCode.GDtileObjects1= [];
gdjs.AuthenticationCode.GDtileObjects2= [];
gdjs.AuthenticationCode.GDgroundObjects1= [];
gdjs.AuthenticationCode.GDgroundObjects2= [];
gdjs.AuthenticationCode.GDSkeletObjects1= [];
gdjs.AuthenticationCode.GDSkeletObjects2= [];
gdjs.AuthenticationCode.GDUnderConstructionObjects1= [];
gdjs.AuthenticationCode.GDUnderConstructionObjects2= [];
gdjs.AuthenticationCode.GDNewTextInputObjects1= [];
gdjs.AuthenticationCode.GDNewTextInputObjects2= [];
gdjs.AuthenticationCode.GDNewTextObjects1= [];
gdjs.AuthenticationCode.GDNewTextObjects2= [];
gdjs.AuthenticationCode.GDPlayObjects1= [];
gdjs.AuthenticationCode.GDPlayObjects2= [];
gdjs.AuthenticationCode.GDTCCObjects1= [];
gdjs.AuthenticationCode.GDTCCObjects2= [];
gdjs.AuthenticationCode.GDSubjectObjects1= [];
gdjs.AuthenticationCode.GDSubjectObjects2= [];
gdjs.AuthenticationCode.GDCREDITSObjects1= [];
gdjs.AuthenticationCode.GDCREDITSObjects2= [];


gdjs.AuthenticationCode.asyncCallback13380308 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Play"), gdjs.AuthenticationCode.GDPlayObjects2);

{for(var i = 0, len = gdjs.AuthenticationCode.GDPlayObjects2.length ;i < len;++i) {
    gdjs.AuthenticationCode.GDPlayObjects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "GamePlay");
}{gdjs.evtTools.sound.playSound(runtimeScene, "bg_music.mp3", false, 50, 1);
}}
gdjs.AuthenticationCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.AuthenticationCode.GDPlayObjects1) asyncObjectsList.addObject("Play", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.AuthenticationCode.asyncCallback13380308(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AuthenticationCode.mapOfGDgdjs_9546AuthenticationCode_9546GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.AuthenticationCode.GDPlayObjects1});
gdjs.AuthenticationCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13382100);
}
if (isConditionTrue_0) {
{gdjs.deviceVibration.startVibration(50);
}}

}


};gdjs.AuthenticationCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.AuthenticationCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.AuthenticationCode.mapOfGDgdjs_9546AuthenticationCode_9546GDPlayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GamePlay", false);
}
{ //Subevents
gdjs.AuthenticationCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.AuthenticationCode.mapOfGDgdjs_9546AuthenticationCode_9546GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.AuthenticationCode.GDPlayObjects1});
gdjs.AuthenticationCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13384124);
}
if (isConditionTrue_0) {
{gdjs.deviceVibration.startVibration(50);
}}

}


};gdjs.AuthenticationCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.AuthenticationCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.AuthenticationCode.mapOfGDgdjs_9546AuthenticationCode_9546GDPlayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "leaderboard", false);
}
{ //Subevents
gdjs.AuthenticationCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.AuthenticationCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.AuthenticationCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.AuthenticationCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.AuthenticationCode.GDPlayObjects1);
{for(var i = 0, len = gdjs.AuthenticationCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.AuthenticationCode.GDPlayObjects1[i].hide();
}
}
{ //Subevents
gdjs.AuthenticationCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.AuthenticationCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.AuthenticationCode.GDNewTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AuthenticationCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.AuthenticationCode.GDNewTextInputObjects1[i].getBehavior("Text").getText() == "admin" ) {
        isConditionTrue_0 = true;
        gdjs.AuthenticationCode.GDNewTextInputObjects1[k] = gdjs.AuthenticationCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.AuthenticationCode.GDNewTextInputObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.AuthenticationCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.AuthenticationCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.AuthenticationCode.GDNewTextInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.AuthenticationCode.GDPlayObjects1);
{for(var i = 0, len = gdjs.AuthenticationCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.AuthenticationCode.GDNewTextObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.AuthenticationCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.AuthenticationCode.GDPlayObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.AuthenticationCode.GDNewTextInputObjects1.length === 0 ) ? "" :gdjs.AuthenticationCode.GDNewTextInputObjects1[0].getBehavior("Text").getText()));
}}

}


};

gdjs.AuthenticationCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AuthenticationCode.GDBackgroundObjects1.length = 0;
gdjs.AuthenticationCode.GDBackgroundObjects2.length = 0;
gdjs.AuthenticationCode.GDtileObjects1.length = 0;
gdjs.AuthenticationCode.GDtileObjects2.length = 0;
gdjs.AuthenticationCode.GDgroundObjects1.length = 0;
gdjs.AuthenticationCode.GDgroundObjects2.length = 0;
gdjs.AuthenticationCode.GDSkeletObjects1.length = 0;
gdjs.AuthenticationCode.GDSkeletObjects2.length = 0;
gdjs.AuthenticationCode.GDUnderConstructionObjects1.length = 0;
gdjs.AuthenticationCode.GDUnderConstructionObjects2.length = 0;
gdjs.AuthenticationCode.GDNewTextInputObjects1.length = 0;
gdjs.AuthenticationCode.GDNewTextInputObjects2.length = 0;
gdjs.AuthenticationCode.GDNewTextObjects1.length = 0;
gdjs.AuthenticationCode.GDNewTextObjects2.length = 0;
gdjs.AuthenticationCode.GDPlayObjects1.length = 0;
gdjs.AuthenticationCode.GDPlayObjects2.length = 0;
gdjs.AuthenticationCode.GDTCCObjects1.length = 0;
gdjs.AuthenticationCode.GDTCCObjects2.length = 0;
gdjs.AuthenticationCode.GDSubjectObjects1.length = 0;
gdjs.AuthenticationCode.GDSubjectObjects2.length = 0;
gdjs.AuthenticationCode.GDCREDITSObjects1.length = 0;
gdjs.AuthenticationCode.GDCREDITSObjects2.length = 0;

gdjs.AuthenticationCode.eventsList6(runtimeScene);

return;

}

gdjs['AuthenticationCode'] = gdjs.AuthenticationCode;
