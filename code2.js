gdjs.leaderboardCode = {};


gdjs.leaderboardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "a3dac1a0-dcf1-4550-8055-c36bfd8d7b26", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "bg_music.mp3", false, 50, 1);
}}

}


};

gdjs.leaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.leaderboardCode.eventsList0(runtimeScene);

return;

}

gdjs['leaderboardCode'] = gdjs.leaderboardCode;
