/*:
 * @target MZ
 * @plugindesc v1.1 ABI Weather Suite: Random weather cycle, indoor suppression (<NoWeather>), built-in weather audio (BGS+thunder), and optional heat haze shimmer (master OFF by default). Plays nice with VisuStella Weather.
 * @author ABI
 *
 * @help
 * Drop-in, all-in-one weather suite.
 * - Randomly cycles weather (Clear/Rain/Storm/Snow) with intervals, weights, and power.
 * - <NoWeather> on a map clears visuals & audio indoors, but the cycle keeps running;
 *   when you go outside, the latest weather applies immediately.
 * - Built-in weather audio (BGS per type), plus random thunder SE during Storm.
 * - Optional heat haze "desert shimmer" effect with per-map notetags; master OFF by default
 *   (prevents black screen side-effects until you explicitly enable it).
 * - Designed to coexist with VisuStella Weather (this augments engine weather).
 *
 * --------------------------------
 * MAP NOTETAGS (Map Note box)
 * --------------------------------
 * Weather list / controls:
 *   <WeatherCycle: Rain, Clear, Storm>
 *   <Weather: Rain>                      # may repeat
 *   <WeatherWeight: Rain:60>             # weight (default 1)
 *   <WeatherInterval: 20-60>             # seconds (or single)
 *   <WeatherPower: 2-6>                  # range (or single)
 *   <WeatherTransition: 60>              # frames
 *
 * Indoor suppression:
 *   <NoWeather>                          # visuals/audio off indoors, cycle continues
 *
 * Heat haze (optional):
 *   <HeatHaze>                           # enable on this map
 *   <NoHeatHaze>                         # force disable on this map
 *   <HeatHazeHeight: 160>                # px from bottom; 0 = full screen
 *   <HeatHazePower: 16>                  # displacement intensity
 *   <HeatHazeSpeed: 0.6>                 # scroll speed (0–2)
 *   <HeatHazeOnlyOnClear>                # show haze only when weather is clear
 *
 * Weather audio (optional; can override defaults):
 *   <WeatherAudioOff>                                  # mute weather BGS/SE on this map
 *   <WeatherBGS: Clear: (stop)>
 *   <WeatherBGS: Rain: RainLoop,80,100,0>
 *   <WeatherBGS: Storm: StormWind,85,100,0>
 *   <WeatherBGS: Snow: SnowMuffle,70,100,0>
 *   <ThunderSE: Thunder1,Thunder2,Thunder3>
 *   <ThunderInterval: 6-18>                            # seconds
 *   <ThunderVol: 70-95>
 *   <ThunderPitch: 95-105>
 *
 * --------------------------------
 * PLUGIN COMMANDS
 * --------------------------------
 * @command StartWeatherCycle
 * @text Start Weather Cycle
 * @desc Enable and start the weather cycle.
 *
 * @command StopWeatherCycle
 * @text Stop Weather Cycle
 * @desc Completely stop the weather cycle.
 *
 * @command PauseWeatherCycle
 * @text Pause Weather Cycle
 * @desc Pause the cycle timer without disabling it.
 *
 * @command ResumeWeatherCycle
 * @text Resume Weather Cycle
 * @desc Resume the cycle timer if paused.
 *
 * @command SetCycleList
 * @text Set Cycle List
 * @desc Set the weather list (comma separated).
 * @arg list
 * @type string
 * @default Rain, Clear, Storm, Snow
 *
 * @command SetIntervalRange
 * @text Set Interval Range (sec)
 * @desc Set min/max seconds between weather changes.
 * @arg min
 * @type number
 * @min 1
 * @default 20
 * @arg max
 * @type number
 * @min 1
 * @default 60
 *
 * @command SetPowerRange
 * @text Set Power Range
 * @desc Set weather power min/max.
 * @arg min
 * @type number
 * @min 0
 * @default 2
 * @arg max
 * @type number
 * @min 0
 * @default 6
 *
 * @command SetTransition
 * @text Set Transition Frames
 * @desc Set transition duration in frames.
 * @arg frames
 * @type number
 * @min 1
 * @default 60
 *
 * @command ForceNextWeather
 * @text Force Next Weather
 * @desc Force the next weather type once.
 * @arg type
 * @type select
 * @option Clear
 * @option Rain
 * @option Storm
 * @option Snow
 * @default Storm
 *
 * @command EnableHeatHaze
 * @text Enable Heat Haze (session)
 * @desc Enable heat haze globally (until map rules override).
 *
 * @command DisableHeatHaze
 * @text Disable Heat Haze (session)
 * @desc Disable heat haze globally (until map rules override).
 *
 * @command SetHazeHeight
 * @text Set Haze Height (px)
 * @desc Height from bottom; 0 = full screen.
 * @arg heightPx
 * @type number
 * @min 0
 * @default 160
 *
 * @command SetHazePower
 * @text Set Haze Power
 * @desc Displacement intensity.
 * @arg power
 * @type number
 * @min 0
 * @default 16
 *
 * @command SetHazeSpeed
 * @text Set Haze Speed
 * @desc Scroll speed (0–2).
 * @arg speed
 * @type number
 * @min 0
 * @decimals 2
 * @default 0.6
 *
 * @command SetHazeOnlyOnClear
 * @text Set Haze Only On Clear
 * @desc Only show haze when weather is clear.
 * @arg enabled
 * @type boolean
 * @default false
 *
 * --------------------------------
 * TERMS
 * Free to use (commercial & non-commercial). Credit "Ash Born Interactive".
 *
 * --------------------------------
 * @param defaultCycle
 * @text Default Cycle
 * @type string
 * @default Rain, Clear, Storm, Snow
 *
 * @param intervalMinSec
 * @text Interval Min (sec)
 * @type number
 * @min 1
 * @default 20
 *
 * @param intervalMaxSec
 * @text Interval Max (sec)
 * @type number
 * @min 1
 * @default 60
 *
 * @param powerMin
 * @text Power Min
 * @type number
 * @min 0
 * @default 2
 *
 * @param powerMax
 * @text Power Max
 * @type number
 * @min 0
 * @default 6
 *
 * @param transitionFrames
 * @text Transition Frames
 * @type number
 * @min 1
 * @default 60
 *
 * @param autoStart
 * @text Auto Start on Map
 * @type boolean
 * @default true
 *
 * @param persistAcrossMaps
 * @text Persist Across Maps
 * @type boolean
 * @default false
 *
 * @param debugLog
 * @text Debug Log
 * @type boolean
 * @default false
 *
 * @param enableAudio
 * @text Enable Built-in Weather Audio
 * @type boolean
 * @default true
 *
 * @param bgsClear
 * @text BGS - Clear (name or (stop))
 * @type string
 * @default (stop)
 *
 * @param bgsRain
 * @text BGS - Rain
 * @type string
 * @default (stop)
 *
 * @param bgsStorm
 * @text BGS - Storm
 * @type string
 * @default (stop)
 *
 * @param bgsSnow
 * @text BGS - Snow
 * @type string
 * @default (stop)
 *
 * @param bgsVolume
 * @text BGS Volume
 * @type number
 * @min 0
 * @max 100
 * @default 80
 *
 * @param bgsPitch
 * @text BGS Pitch
 * @type number
 * @min 50
 * @max 150
 * @default 100
 *
 * @param bgsPan
 * @text BGS Pan
 * @type number
 * @min -100
 * @max 100
 * @default 0
 *
 * @param thunderList
 * @text Thunder SE List (comma)
 * @type string
 * @default Thunder1,Thunder2
 *
 * @param thunderIntervalMin
 * @text Thunder Interval Min (sec)
 * @type number
 * @min 1
 * @default 8
 *
 * @param thunderIntervalMax
 * @text Thunder Interval Max (sec)
 * @type number
 * @min 1
 * @default 16
 *
 * @param thunderVolMin
 * @text Thunder Volume Min
 * @type number
 * @min 0
 * @max 100
 * @default 70
 *
 * @param thunderVolMax
 * @text Thunder Volume Max
 * @type number
 * @min 0
 * @max 100
 * @default 95
 *
 * @param thunderPitchMin
 * @text Thunder Pitch Min
 * @type number
 * @min 50
 * @max 150
 * @default 95
 *
 * @param thunderPitchMax
 * @text Thunder Pitch Max
 * @type number
 * @min 50
 * @max 150
 * @default 105
 *
 * @param heatMasterOff
 * @text Heat Haze Master OFF
 * @type boolean
 * @default true
 *
 * @param heatDefaultEnabled
 * @text Heat Haze Default Enabled
 * @type boolean
 * @default false
 *
 * @param heatDefaultHeight
 * @text Heat Haze Height (px; 0=full)
 * @type number
 * @min 0
 * @default 160
 *
 * @param heatDefaultPower
 * @text Heat Haze Power
 * @type number
 * @min 0
 * @default 16
 *
 * @param heatDefaultSpeed
 * @text Heat Haze Speed (0–2)
 * @type number
 * @decimals 2
 * @min 0
 * @default 0.6
 *
 * @param heatOnlyOnClearDefault
 * @text Heat Haze Only On Clear (Default)
 * @type boolean
 * @default false
 */

(() => {
  // -------- Robust plugin-name detection + safe params (prevents "params is not defined") --------
  function resolvePluginName() {
    try {
      const cs = document.currentScript;
      if (cs && cs.src) {
        const m = cs.src.match(/([^/\\]+)\.js$/);
        if (m && m[1]) return m[1];
      }
    } catch(_) {}
    try {
      if (Array.isArray($plugins)) {
        const hit = $plugins.find(p => p && p.status && /ABI_WeatherSuite/i.test(p.name));
        if (hit && hit.name) return hit.name;
      }
    } catch(_) {}
    return "ABI_WeatherSuite";
  }
  const PLUGIN_NAME = resolvePluginName();
  const params = (() => {
    try { return PluginManager.parameters(PLUGIN_NAME) || {}; } catch(_) { return {}; }
  })();

  const log = (...a)=>{ if (String(params.debugLog) === "true") console.log(`[${PLUGIN_NAME}]`, ...a); };

  // -------- Config --------
  const P = {
    defaultCycle: (params.defaultCycle || "Rain, Clear, Storm, Snow").split(",").map(s=>s.trim()).filter(Boolean),
    intervalMinSec: Number(params.intervalMinSec || 20),
    intervalMaxSec: Number(params.intervalMaxSec || 60),
    powerMin: Number(params.powerMin || 2),
    powerMax: Number(params.powerMax || 6),
    transitionFrames: Number(params.transitionFrames || 60),
    autoStart: params.autoStart === "true",
    persistAcrossMaps: params.persistAcrossMaps === "true",
  };
  const AUD = {
    enable: params.enableAudio === "true",
    bgs: {
      clear: String(params.bgsClear || "(stop)"),
      rain:  String(params.bgsRain  || "(stop)"),
      storm: String(params.bgsStorm || "(stop)"),
      snow:  String(params.bgsSnow  || "(stop)"),
    },
    vol: Number(params.bgsVolume || 80),
    pitch: Number(params.bgsPitch || 100),
    pan: Number(params.bgsPan || 0),
    thList: (params.thunderList || "Thunder1,Thunder2").split(",").map(s=>s.trim()).filter(Boolean),
    tMin: Number(params.thunderIntervalMin || 8),
    tMax: Number(params.thunderIntervalMax || 16),
    vMin: Number(params.thunderVolMin || 70),
    vMax: Number(params.thunderVolMax || 95),
    piMin: Number(params.thunderPitchMin || 95),
    piMax: Number(params.thunderPitchMax || 105),
  };
  const HZ = {
    masterOff: params.heatMasterOff === "true",   // Master kill switch (default true)
    enabled: params.heatDefaultEnabled === "true",
    height: Number(params.heatDefaultHeight || 160),
    power: Number(params.heatDefaultPower || 16),
    speed: Number(params.heatDefaultSpeed || 0.6),
    onlyOnClear: params.heatOnlyOnClearDefault === "true",
  };

  // -------- Internals --------
  const TYPES = ["clear","rain","storm","snow"];
  function normalizeType(t) {
    const s = String(t||"").toLowerCase().trim();
    if (s === "clear" || s === "none") return "clear";
    if (s === "rain") return "rain";
    if (s === "storm") return "storm";
    if (s === "snow") return "snow";
    return "clear";
  }
  function engineType(t) { return t === "clear" ? "none" : t; }

  const State = {
    // cycle
    enabled: false, paused: false, nextTick: 0,
    cycleList: null, weights: {},
    minSec: P.intervalMinSec, maxSec: P.intervalMaxSec,
    pMin: P.powerMin, pMax: P.powerMax, trans: P.transitionFrames,
    forceNext: null,
    // indoor suppression
    suppressed: false, pendingType: null,
    // audio
    thunderNext: 0,
    // heat haze
    hazeEnabled: HZ.enabled,
    hazeHeight: HZ.height,
    hazePower: HZ.power,
    hazeSpeed: HZ.speed,
    hazeOnlyClear: HZ.onlyOnClear,
    hazeInit: false, hazeFilter: null, hazeDispTS: null, hazeTarget: null,
  };

  // -------- Notetags --------
  function parseMapMeta() {
    const meta = ($dataMap && $dataMap.meta) ? $dataMap.meta : {};
    const list = [];

    if (meta.WeatherCycle) {
      String(meta.WeatherCycle).split(",").forEach(s => {
        const t = normalizeType(s);
        if (TYPES.includes(t) && !list.includes(t)) list.push(t);
      });
    }
    if (meta.Weather) {
      const raw = Array.isArray(meta.Weather) ? meta.Weather : [meta.Weather];
      raw.forEach(s => {
        const t = normalizeType(s);
        if (TYPES.includes(t) && !list.includes(t)) list.push(t);
      });
    }

    const weights = {};
    if (meta.WeatherWeight) {
      const raw = Array.isArray(meta.WeatherWeight) ? meta.WeatherWeight : [meta.WeatherWeight];
      raw.forEach(entry => {
        const parts = String(entry).split(":");
        if (parts.length >= 2) {
          const t = normalizeType(parts[0]);
          const w = Number(parts[1]);
          if (TYPES.includes(t) && !Number.isNaN(w) && w > 0) weights[t] = w;
        }
      });
    }

    // intervals
    let minSec = P.intervalMinSec, maxSec = P.intervalMaxSec;
    if (meta.WeatherInterval) {
      const parts = String(meta.WeatherInterval).split("-");
      if (parts.length === 2) {
        const a = Number(parts[0]), b = Number(parts[1]);
        if (!Number.isNaN(a) && !Number.isNaN(b) && a > 0 && b >= a) { minSec = a; maxSec = b; }
      } else {
        const x = Number(meta.WeatherInterval);
        if (!Number.isNaN(x) && x > 0) { minSec = x; maxSec = x; }
      }
    }

    // power
    let pMin = P.powerMin, pMax = P.powerMax;
    if (meta.WeatherPower) {
      const parts = String(meta.WeatherPower).split("-");
      if (parts.length === 2) {
        const a = Number(parts[0]), b = Number(parts[1]);
        if (!Number.isNaN(a) && !Number.isNaN(b) && a >= 0 && b >= a) { pMin = a; pMax = b; }
      } else {
        const x = Number(meta.WeatherPower);
        if (!Number.isNaN(x) && x >= 0) { pMin = x; pMax = x; }
      }
    }

    // transition
    let trans = P.transitionFrames;
    if (meta.WeatherTransition) {
      const x = Number(meta.WeatherTransition);
      if (!Number.isNaN(x) && x > 0) trans = x;
    }

    // indoor suppression
    const noWeather = !!meta.NoWeather;

    // audio overrides
    const audioOff = !!meta.WeatherAudioOff;
    const rawBgs = Array.isArray(meta.WeatherBGS) ? meta.WeatherBGS : (meta.WeatherBGS ? [meta.WeatherBGS] : []);
    const bgsOvr = {};
    ["clear","rain","storm","snow"].forEach(k=>{
      const row = rawBgs.find(r => String(r).toLowerCase().startsWith(k + ":"));
      if (row) {
        const rhs = String(row).split(":").slice(1).join(":").trim();
        const parts = rhs.split(",").map(s=>s.trim());
        bgsOvr[k] = {
          name: parts[0] || "",
          vol: Number(parts[1] || AUD.vol),
          pitch: Number(parts[2] || AUD.pitch),
          pan: Number(parts[3] || AUD.pan)
        };
      }
    });
    const thList = meta.ThunderSE ? (Array.isArray(meta.ThunderSE) ? meta.ThunderSE : [meta.ThunderSE]) : null;
    const interval = meta.ThunderInterval ? String(meta.ThunderInterval) : null;
    const volrng   = meta.ThunderVol ? String(meta.ThunderVol) : null;
    const ptrng    = meta.ThunderPitch ? String(meta.ThunderPitch) : null;
    let tMin = AUD.tMin, tMax = AUD.tMax, vMin = AUD.vMin, vMax = AUD.vMax, piMin = AUD.piMin, piMax = AUD.piMax;

    if (interval) { const [a,b]=interval.split("-").map(Number); if (!isNaN(a)&&!isNaN(b)&&b>=a&&a>0){tMin=a;tMax=b;} }
    if (volrng)   { const [a,b]=volrng.split("-").map(Number);   if (!isNaN(a)&&!isNaN(b)&&b>=a){vMin=a;vMax=b;} }
    if (ptrng)    { const [a,b]=ptrng.split("-").map(Number);    if (!isNaN(a)&&!isNaN(b)&&b>=a){piMin=a;piMax=b;} }

    // heat haze
    const hzEnable = !!meta.HeatHaze;
    const hzDisable= !!meta.NoHeatHaze;
    const hzHeight = meta.HeatHazeHeight ? Number(meta.HeatHazeHeight) : null;
    const hzPower  = meta.HeatHazePower  ? Number(meta.HeatHazePower)  : null;
    const hzSpeed  = meta.HeatHazeSpeed  ? Number(meta.HeatHazeSpeed)  : null;
    const hzOnly   = !!meta.HeatHazeOnlyOnClear;

    return {
      list, weights, minSec, maxSec, pMin, pMax, trans,
      noWeather,
      audioOff, bgsOvr,
      thList: thList ? thList.join(",").split(",").map(s=>s.trim()).filter(Boolean) : null,
      tMin, tMax, vMin, vMax, piMin, piMax,
      hzEnable, hzDisable, hzHeight, hzPower, hzSpeed, hzOnly
    };
  }

  // -------- Helpers --------
  function defaultCycleFromParam() {
    const list = (P.defaultCycle || []).map(normalizeType).filter(t => TYPES.includes(t));
    return list.length ? list : ["rain","clear","storm","snow"];
  }
  function weightedPick(items, weights) {
    if (!items.length) return "clear";
    const w = items.map(t => Math.max(0, Number(weights[t] || 0)) || 1);
    const total = w.reduce((a,b)=>a+b,0);
    let r = Math.random() * total;
    for (let i=0; i<items.length; i++){ r -= w[i]; if (r<=0) return items[i]; }
    return items[items.length-1];
  }
  function scheduleNextTick() {
    const min = Math.max(1, State.minSec), max = Math.max(min, State.maxSec);
    const waitSec = min + Math.random()*(max-min);
    State.nextTick = Graphics.frameCount + Math.floor(waitSec*60);
    log(`Next weather in ~${waitSec.toFixed(1)}s`);
  }

  // -------- Audio --------
  function normAudioKey(t) { return normalizeType(t); }
  function mapAudioFor(type) {
    const meta = parseMapMeta();
    if (meta.audioOff) return { name:"(stop)", vol:0, pitch:AUD.pitch, pan:AUD.pan, meta };
    const key = normAudioKey(type);
    const ovr = meta.bgsOvr[key];
    if (ovr) return { name: ovr.name, vol: ovr.vol, pitch: ovr.pitch, pan: ovr.pan, meta };
    const name = AUD.bgs[key] || "(stop)";
    return { name, vol:AUD.vol, pitch:AUD.pitch, pan:AUD.pan, meta };
  }
  function scheduleThunder(meta) {
    const min = Math.max(1, meta.tMin), max = Math.max(min, meta.tMax);
    State.thunderNext = Graphics.frameCount + Math.floor((min + Math.random()*(max-min))*60);
  }
  function maybeThunderTick() {
    if (!AUD.enable || State.suppressed) return;
    if (Graphics.frameCount < State.thunderNext) return;
    if (normAudioKey($gameScreen.weatherType()) !== "storm") return;
    const meta = parseMapMeta();
    const list = meta.thList || AUD.thList;
    if (!list.length) { scheduleThunder(meta); return; }
    const name = list[Math.floor(Math.random()*list.length)];
    const vol  = Math.floor(meta.vMin + Math.random()*(meta.vMax - meta.vMin + 1));
    const pit  = Math.floor(meta.piMin + Math.random()*(meta.piMax - meta.piMin + 1));
    AudioManager.playSe({ name, volume: vol, pitch: pit, pan: 0 });
    scheduleThunder(meta);
  }
  function applyAudioForWeather(engineTypeStr) {
    if (!AUD.enable || State.suppressed) return;
    const { name, vol, pitch, pan, meta } = mapAudioFor(engineTypeStr);
    AudioManager.fadeOutBgs(15);
    if (!name || name.toLowerCase() === "(stop)") { State.thunderNext = 0; return; }
    setTimeout(()=>AudioManager.playBgs({ name, volume:vol, pitch, pan }), 15*16);
    if (normAudioKey(engineTypeStr) === "storm") scheduleThunder(meta);
    else State.thunderNext = 0;
  }

  // -------- Heat Haze (master OFF by default) --------
  function ensureHazeObjects(spriteset) {
    if (State.hazeFilter && State.hazeDispTS) return;
    const canvas = document.createElement("canvas");
    canvas.width = 256; canvas.height = 256;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(128,128,128)";
    ctx.fillRect(0,0,256,256);
    for (let y=0;y<256;y++){
      const t=y/256;
      const a = Math.sin(t*Math.PI*6)*16 + Math.sin(t*Math.PI*11)*8;
      const r = 128 + a, g = 128 + a*0.6;
      ctx.fillStyle = `rgb(${Math.round(r)},${Math.round(g)},128)`;
      ctx.fillRect(0,y,256,1);
    }
    const tex = PIXI.Texture.from(canvas);
    tex.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    const ts = new PIXI.TilingSprite(tex, Graphics.width, Graphics.height);
    ts.visible = true;

    const filter = new PIXI.filters.DisplacementFilter(ts);
    filter.padding = 32;

    State.hazeDispTS = ts;
    State.hazeFilter = filter;
    State.hazeTarget = spriteset._tilemap || spriteset._baseSprite || spriteset;
    if (!spriteset._abiHazeCont) { spriteset._abiHazeCont = new PIXI.Container(); spriteset.addChild(spriteset._abiHazeCont); }
    spriteset._abiHazeCont.addChild(ts);

    if (!State.hazeTarget.filters) State.hazeTarget.filters = [];
    if (!State.hazeTarget.filters.includes(filter)) {
      State.hazeTarget.filters = State.hazeTarget.filters.concat(filter);
    }
  }
  function destroyHazeObjects() {
    if (State.hazeTarget && State.hazeFilter) {
      State.hazeTarget.filters = (State.hazeTarget.filters || []).filter(f=>f!==State.hazeFilter);
    }
    if (State.hazeDispTS) { State.hazeDispTS.destroy(true); State.hazeDispTS = null; }
    State.hazeFilter = null; State.hazeTarget = null; State.hazeInit = false;
  }
  function updateHazeArea() {
    if (!State.hazeFilter || !State.hazeDispTS) return;
    const w = Graphics.width, h = Graphics.height;
    const hh = Math.max(0, Number(State.hazeHeight||0));
    const area = (hh===0) ? new PIXI.Rectangle(0,0,w,h)
                          : new PIXI.Rectangle(0, Math.max(0, h-hh), w, Math.min(hh, h));
    State.hazeFilter.filterArea = area;
    State.hazeDispTS.x = 0;
    State.hazeDispTS.y = 0;
  }
  function shouldShowHaze() {
    if (!State.hazeEnabled) return false;
    if (State.hazeOnlyClear) return $gameScreen.weatherType() === "none";
    return true;
  }
  function applyHazeVisibility() {
    if (!State.hazeFilter) return;
    const on = shouldShowHaze() && !State.suppressed;
    State.hazeFilter.scale.x = on ? State.hazePower : 0;
    State.hazeFilter.scale.y = on ? State.hazePower : 0;
    updateHazeArea();
  }
  function animateHaze() {
    if (!State.hazeDispTS) return;
    State.hazeDispTS.width  = Graphics.width;
    State.hazeDispTS.height = Graphics.height;
    State.hazeDispTS.tilePosition.y += State.hazeSpeed;
  }

  // -------- Weather application --------
  const VS_HOOK_enable = false; // Set true + implement VS_HOOK_changeWeather if you prefer VS command
  function VS_HOOK_changeWeather(type, power, duration) {
    $gameScreen.changeWeather(type, power, duration);
  }

  function applyWeather(typeNorm) {
    const power = Math.floor(Math.random()*(State.pMax - State.pMin + 1)) + State.pMin;
    const duration = State.trans;
    const eng = engineType(typeNorm);

    if (State.suppressed) {
      State.pendingType = typeNorm; // remember, but don’t show indoors
      return;
    }
    if (VS_HOOK_enable) VS_HOOK_changeWeather(eng, power, duration);
    else $gameScreen.changeWeather(eng, power, duration);
    applyAudioForWeather(eng);
  }

  function stepWeatherCycle() {
    const list = State.cycleList && State.cycleList.length ? State.cycleList : defaultCycleFromParam();
    const chosen = State.forceNext ? normalizeType(State.forceNext) : weightedPick(list, State.weights);
    State.forceNext = null;
    if (State.suppressed) State.pendingType = chosen;
    else applyWeather(chosen);
    scheduleNextTick();
  }

  // -------- Scene hooks --------
  const _Scene_Map_onMapLoaded = Scene_Map.prototype.onMapLoaded;
  Scene_Map.prototype.onMapLoaded = function(){
    _Scene_Map_onMapLoaded.call(this);
    const cfg = parseMapMeta();

    // init cycle settings
    if (!P.persistAcrossMaps) {
      State.cycleList = cfg.list.length ? cfg.list : defaultCycleFromParam();
      State.weights   = cfg.weights;
      State.minSec = cfg.minSec; State.maxSec = cfg.maxSec;
      State.pMin = cfg.pMin; State.pMax = cfg.pMax; State.trans = cfg.trans;
      scheduleNextTick();
    } else if (cfg.list.length || Object.keys(cfg.weights).length || cfg.minSec !== undefined) {
      State.cycleList = cfg.list.length ? cfg.list : (State.cycleList || defaultCycleFromParam());
      Object.assign(State.weights, cfg.weights);
      if (cfg.minSec) State.minSec = cfg.minSec;
      if (cfg.maxSec) State.maxSec = cfg.maxSec;
      if (cfg.pMin !== undefined) State.pMin = cfg.pMin;
      if (cfg.pMax !== undefined) State.pMax = cfg.pMax;
      if (cfg.trans !== undefined) State.trans = cfg.trans;
    }

    // suppression
    State.suppressed = !!cfg.noWeather;
    if (State.suppressed) {
      $gameScreen.changeWeather("none", 0, 0);
      if (AUD.enable) AudioManager.fadeOutBgs(20);
    } else {
      if (State.pendingType) {
        const eng = engineType(State.pendingType);
        $gameScreen.changeWeather(eng, Math.max(1, State.pMin), 30);
        applyAudioForWeather(eng);
        State.pendingType = null;
      } else if (AUD.enable) {
        applyAudioForWeather($gameScreen.weatherType());
      }
    }

    if (P.autoStart && !State.enabled) { State.enabled = true; State.paused = false; }
  };

  const _Scene_Map_update = Scene_Map.prototype.update;
  Scene_Map.prototype.update = function(){
    _Scene_Map_update.call(this);
    if (State.enabled && !State.paused && Graphics.frameCount >= State.nextTick) stepWeatherCycle();
  };

  const _Spriteset_Map_update = Spriteset_Map.prototype.update;
  Spriteset_Map.prototype.update = function(){
    _Spriteset_Map_update.call(this);

    // thunder audio tick
    if (!State.suppressed) maybeThunderTick();

    // ---- Heat haze lifecycle with MASTER OFF + per-map gates ----
    if (HZ.masterOff) {
      if (State.hazeInit) destroyHazeObjects();
      return;
    }
    const m = parseMapMeta();
    let wantHaze = State.hazeEnabled;
    if (m.hzEnable)  wantHaze = true;
    if (m.hzDisable) wantHaze = false;

    if (!wantHaze) {
      if (State.hazeInit) destroyHazeObjects();
    } else {
      if (!State.hazeInit) { ensureHazeObjects(this); State.hazeInit = true; }
      if (m.hzHeight !== null && !Number.isNaN(m.hzHeight)) State.hazeHeight = Math.max(0, m.hzHeight);
      if (m.hzPower  !== null && !Number.isNaN(m.hzPower))  State.hazePower  = Math.max(0, m.hzPower);
      if (m.hzSpeed  !== null && !Number.isNaN(m.hzSpeed))  State.hazeSpeed  = Math.max(0, m.hzSpeed);
      if (m.hzOnly) State.hazeOnlyClear = true;

      animateHaze();
      applyHazeVisibility();
    }
  };

  const _Scene_Map_terminate = Scene_Map.prototype.terminate;
  Scene_Map.prototype.terminate = function(){
    _Scene_Map_terminate.call(this);
    destroyHazeObjects();
  };

  // -------- Plugin commands --------
  PluginManager.registerCommand(PLUGIN_NAME, "StartWeatherCycle", ()=>{ State.enabled=true; State.paused=false; if (Graphics.frameCount>=State.nextTick) scheduleNextTick(); });
  PluginManager.registerCommand(PLUGIN_NAME, "StopWeatherCycle",  ()=>{ State.enabled=false; });
  PluginManager.registerCommand(PLUGIN_NAME, "PauseWeatherCycle", ()=>{ State.paused=true; });
  PluginManager.registerCommand(PLUGIN_NAME, "ResumeWeatherCycle",()=>{ State.paused=false; if (Graphics.frameCount>=State.nextTick) scheduleNextTick(); });

  PluginManager.registerCommand(PLUGIN_NAME, "SetCycleList", args=>{
    const list = String(args.list||"").split(",").map(s=>normalizeType(s)).filter(t=>TYPES.includes(t));
    if (list.length) State.cycleList = list;
    log("SetCycleList", State.cycleList);
  });
  PluginManager.registerCommand(PLUGIN_NAME, "SetIntervalRange", args=>{
    const min = Number(args.min||20), max = Number(args.max||60);
    State.minSec = Math.max(1,min); State.maxSec = Math.max(State.minSec, max);
    log("SetIntervalRange", State.minSec, State.maxSec);
  });
  PluginManager.registerCommand(PLUGIN_NAME, "SetPowerRange", args=>{
    const min = Number(args.min||2), max = Number(args.max||6);
    State.pMin = Math.max(0,min); State.pMax = Math.max(State.pMin, max);
    log("SetPowerRange", State.pMin, State.pMax);
  });
  PluginManager.registerCommand(PLUGIN_NAME, "SetTransition", args=>{
    State.trans = Math.max(1, Number(args.frames||60));
    log("SetTransition", State.trans);
  });
  PluginManager.registerCommand(PLUGIN_NAME, "ForceNextWeather", args=>{
    State.forceNext = args.type || "Clear";
    log("ForceNextWeather queued:", State.forceNext);
  });

  PluginManager.registerCommand(PLUGIN_NAME, "EnableHeatHaze", ()=>{ State.hazeEnabled = true; });
  PluginManager.registerCommand(PLUGIN_NAME, "DisableHeatHaze", ()=>{ State.hazeEnabled = false; });
  PluginManager.registerCommand(PLUGIN_NAME, "SetHazeHeight", args=>{ State.hazeHeight = Math.max(0, Number(args.heightPx||0)); });
  PluginManager.registerCommand(PLUGIN_NAME, "SetHazePower",  args=>{ State.hazePower  = Math.max(0, Number(args.power||0)); });
  PluginManager.registerCommand(PLUGIN_NAME, "SetHazeSpeed",  args=>{ State.hazeSpeed  = Math.max(0, Number(args.speed||0)); });
  PluginManager.registerCommand(PLUGIN_NAME, "SetHazeOnlyOnClear", args=>{ State.hazeOnlyClear = String(args.enabled)==="true"; });

})();
