// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play Page - Canvas Start Game
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type PlayPageCanvasStartGameActionId = "start-game-1";

export interface PlayPageCanvasStartGameProps {
  actions?: {
    "start-game-1"?: () => void;
  };

}

export type PlayPageCanvasStartGameActionCallbacks = NonNullable<PlayPageCanvasStartGameProps["actions"]>;

export function PlayPageCanvasStartGame({ actions }: PlayPageCanvasStartGameProps) {
  return (
    <>
      {/* Root Surface: SURF_PLAY_PAGE */}
        <div data-surface-id="SURF_PLAY_PAGE" className="flex-1 flex flex-col w-full min-h-screen" data-setfarm-element-ref="E000001" data-observable-refs="OBS_START_GAME_PLAY_ROUTE_REMAINS">
          
          {/* Top Navigation Chrome (Non-actionable decorative header) */}
          <header className="w-full border-b border-slate-800 bg-slate-900/80 backdrop-blur px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <span className="text-white font-black text-lg tracking-wider">C</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-white tracking-tight">Canvas Arcade</h1>
                <p className="text-xs text-slate-400">Retro WebGL Action</p>
              </div>
            </div>
      
            {/* Live Dashboard Status Indicators */}
            <div className="flex items-center gap-6">
              {/* High Score Status Observable */}
              <div className="flex flex-col items-end">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">High Score</span>
                <div className="text-xl font-mono font-bold text-amber-400" data-setfarm-element-ref="E000002" role="status" aria-label="High score" data-observable-refs="OBS_START_GAME_HIGH_SCORE_VALUE">
                  {/* Initial state before action is empty/null, styled placeholder */}
                </div>
              </div>
      
              {/* Game Status Observable */}
              <div className="flex flex-col items-end pl-6 border-l border-slate-800">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">System</span>
                <div className="text-sm font-medium text-emerald-400 flex items-center gap-1.5" data-setfarm-element-ref="E000003" role="status" aria-label="Game status" data-observable-refs="OBS_START_GAME_GAME_STARTED_MESSAGE">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Ready to Play
                </div>
              </div>
            </div>
          </header>
      
          {/* Main Workspace / Arena */}
          <main className="flex-1 flex flex-col items-center justify-center p-8 relative overflow-hidden">
            {/* Glow ambient effects */}
            <div className="absolute bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -top-20 -left-20 w-[calc(100vw-48px)] max-w-[360px] aspect-square md:w-[600px] md:h-[600px] md:max-w-none"></div>
            <div className="absolute bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -bottom-20 -right-20 w-[calc(100vw-48px)] max-w-[360px] aspect-square md:w-[500px] md:h-[500px] md:max-w-none"></div>
      
            <div className="w-full max-w-4xl flex flex-col items-center gap-6 relative z-10">
              {/* Contained Surface: SURF_GAME_CANVAS */}
              <div data-surface-id="SURF_GAME_CANVAS" className="w-full aspect-[16/9] bg-slate-900 rounded-2xl border-2 border-slate-800 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center group" data-setfarm-element-ref="E000004">
                {/* Game Canvas Decorative Grid & Backing Elements */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none"></div>
      
                {/* Radar / Arena Target Motif */}
                <div className="w-64 h-64 rounded-full border border-indigo-500/20 flex items-center justify-center relative pointer-events-none">
                  <div className="w-48 h-48 rounded-full border border-indigo-500/30 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border border-indigo-500/40 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400"></div>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 h-px bg-indigo-500/20"></div>
                  <div className="absolute inset-y-0 w-px bg-indigo-500/20"></div>
                </div>
      
                {/* Canvas Overlay Message */}
                <div className="absolute bottom-6 text-center pointer-events-none">
                  <p className="text-xs font-mono uppercase tracking-widest text-slate-500">HTML5 Canvas Ready / 1920x1080 Native Buffer</p>
                </div>
              </div>
      
              {/* Controls Toolbar on Play Page */}
              <div className="w-full flex items-center justify-between px-4 py-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    ROUTE: /play
                  </span>
                  <span>Desktop Canvas Engine v2.4</span>
                </div>
      
                {/* Physical Control Slot: CSLOT_START_GAME_START_BUTTON */}
                <div>
                  <button type="button" data-action="ACT_START_GAME" data-control-slot="CSLOT_START_GAME_START_BUTTON" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold text-sm rounded-lg shadow-lg shadow-indigo-600/30 transition-colors duration-150 flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-950" data-setfarm-element-ref="E000005" data-observable-refs="OBS_START_GAME_START_BUTTON_REMAINS_AVAILABLE" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                    <span>Start Game</span>
                  </button>
                </div>
              </div>
            </div>
          </main>
      
          {/* Footer Chrome (Non-actionable) */}
          <footer className="w-full border-t border-slate-800/80 py-4 px-8 text-center text-xs text-slate-500">
            <p>Setfarm Canvas Game System © 2025. All rights reserved.</p>
          </footer>
        </div>
    </>
  );
}
