/*:
 * @target MZ
 * @plugindesc Internal Rain + Lightning Flashes + Thunder SE.
 * @author Gemini
 *
 * @help Gemini_RainSystem.js
 * No images needed. Uses MZ internal rain particles.
 * Plays 'Thunder7.ogg' from the audio/se folder during flashes.
 *
 * @command startStorm
 * @text Start Storm
 * @desc Activates internal rain, lightning flashes, and sound effects.
 *
 * @arg power
 * @type number
 * @min 0
 * @max 9
 * @text Rain Power (1-9)
 * @default 5
 *
 * @arg lightningEnabled
 * @type boolean
 * @text Enable Lightning & Sound
 * @default true
 *
 * @arg flashFrequency
 * @type number
 * @min 50
 * @max 1000
 * @text Flash Frequency
 * @desc Chance per frame. 300 is a good default.
 * @default 300
 */

(() => {
    const pluginName = "Gemini_RainSystem";
    let lightningActive = false;
    let flashFreq = 300;

    // Auto-Reset when leaving map
    const _Game_Map_setup = Game_Map.prototype.setup;
    Game_Map.prototype.setup = function(mapId) {
        _Game_Map_setup.call(this, mapId);
        $gameScreen.changeWeather('none', 0, 0);
        lightningActive = false;
    };

    PluginManager.registerCommand(pluginName, "startStorm", args => {
        const power = Number(args.power);
        lightningActive = String(args.lightningEnabled) === 'true';
        flashFreq = Number(args.flashFrequency) || 300;
        
        // Start MZ internal rain
        $gameScreen.changeWeather('rain', power, 60);
    });

    const _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        _Scene_Map_update.call(this);

        if (lightningActive && !this.isBusy()) {
            if (Math.random() * flashFreq < 1) {
                // 1. Trigger the Screen Flash
                $gameScreen.startFlash([255, 255, 255, 160], 20);

                // 2. Play Thunder7 from audio/se
                AudioManager.playSe({
                    name: "Thunder7",
                    pan: 0,
                    pitch: 100,
                    volume: 90
                });
            }
        }
    };

    // Helper to check if game is paused/busy
    Scene_Map.prototype.isBusy = function() {
        return $gameMessage.isBusy() || _Scene_Map_update.isBusy;
    };
})();