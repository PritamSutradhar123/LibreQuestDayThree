/*:
 * @target MZ
 * @plugindesc Multi-Cloud Overlay (Map-Specific).
 * @author Gemini
 *
 * @help Gemini_Atmosphere.js
 * Clouds will reset automatically when changing maps.
 * 
 * @command setAtmosphere
 * ... (Args remain the same as previous version) ...
 */

(() => {
    const pluginName = "Gemini_Atmosphere";
    let cloudSprite = null;
    let autoHorizontalScroll = 0;
    let atmosphereData = { cId: "1", cEnabled: false, cOpacity: 120, cSpeed: 1.0, vRatio: 0.5 };

    // RESET on Map Change
    const _Game_Map_setup = Game_Map.prototype.setup;
    Game_Map.prototype.setup = function(mapId) {
        _Game_Map_setup.call(this, mapId);
        atmosphereData.cEnabled = false; // Turn off by default on new map
        autoHorizontalScroll = 0;
    };

    PluginManager.registerCommand(pluginName, "setAtmosphere", args => {
        atmosphereData.cId = String(args.cloudId);
        atmosphereData.cEnabled = String(args.cloudEnabled) === 'true';
        atmosphereData.cOpacity = Number(args.cloudOpacity);
        atmosphereData.cSpeed = Number(args.cloudSpeed);
        atmosphereData.vRatio = Number(args.verticalParallax);
        if (cloudSprite) cloudSprite.bitmap = ImageManager.loadParallax("Cloud" + atmosphereData.cId);
    });

    const _Spriteset_Map_createUpperLayer = Spriteset_Map.prototype.createUpperLayer;
    Spriteset_Map.prototype.createUpperLayer = function() {
        _Spriteset_Map_createUpperLayer.call(this);
        cloudSprite = new TilingSprite(ImageManager.loadParallax("Cloud" + atmosphereData.cId));
        cloudSprite.move(0, 0, Graphics.width, Graphics.height);
        cloudSprite.z = 25; 
        this.addChild(cloudSprite);
    };

    const _Spriteset_Map_update = Spriteset_Map.prototype.update;
    Spriteset_Map.prototype.update = function() {
        _Spriteset_Map_update.call(this);
        if (cloudSprite) {
            cloudSprite.visible = atmosphereData.cEnabled;
            cloudSprite.opacity = atmosphereData.cOpacity;
            if (cloudSprite.visible && cloudSprite.bitmap.isReady()) {
                autoHorizontalScroll += atmosphereData.cSpeed;
                cloudSprite.origin.x = autoHorizontalScroll + ($gameMap.displayX() * $gameMap.tileWidth());
                cloudSprite.origin.y = $gameMap.displayY() * $gameMap.tileHeight() * atmosphereData.vRatio;
            }
        }
    };
})();