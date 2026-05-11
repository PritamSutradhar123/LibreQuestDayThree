/*:
 * @target MZ
 * @plugindesc Night Environment (Map-Specific).
 * @author Gemini
 *
 * @help Gemini_NightSystem.js
 * Night tint resets to Normal when leaving the map.
 * 
 * @command setNight
 * @text Set Night Mode
 * @desc Toggle the night environment and adjust intensity.
 *
 * @arg nightActive
 * @type boolean
 * @text Night Active
 * @default true
 *
 * @arg intensity
 * @type number
 * @min 0
 * @max 255
 * @text Night Intensity (0-255)
 * @desc How dark the night is. 150 is standard, 200 is very dark.
 * @default 150
 * 
 * @arg fadeTime
 * @type number
 * @text Transition Frames
 * @desc How long to fade into night (60 = 1 second).
 * @default 60
 */

(() => {
    const pluginName = "Gemini_NightSystem";

    // RESET TINT on Map Change
    const _Game_Map_setup = Game_Map.prototype.setup;
    Game_Map.prototype.setup = function(mapId) {
        _Game_Map_setup.call(this, mapId);
        // Instant reset to normal daylight [0,0,0,0] with 0 frames
        $gameScreen.startTint([0, 0, 0, 0], 0);
    };

    PluginManager.registerCommand(pluginName, "setNight", args => {
        const isActive = String(args.nightActive) === "true";
        const intensity = Number(args.intensity);
        const duration = Number(args.fadeTime);

        if (isActive) {
            // Calculated night tone colors
            const r = -(intensity * 0.6); 
            const g = -(intensity * 0.4);
            const b = -(intensity * 0.1);
            const gray = intensity * 0.5;
            $gameScreen.startTint([r, g, b, gray], duration);
        } else {
            $gameScreen.startTint([0, 0, 0, 0], duration);
        }
    });
})();