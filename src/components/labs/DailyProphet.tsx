"use client";

import MagicalPortrait from "./MagicalPortrait";
import AnimatedNewsText from "./AnimatedNewsText";

// ─── ARTICLE CONTENT ─────────────────────────────────────────────────────────

const MAIN_P1 = `The Ministry of Magic confirmed late Tuesday that a series of undetected magic signatures had severely disrupted the Floo Network across Britain and Ireland, leaving thousands of witches and wizards stranded at fireplaces for the better part of six hours.`;

const MAIN_P2 = `Senior Undersecretary Dolores Umbridge, speaking from the Ministry atrium, assured the public that the disruptions were "entirely under control" and bore "no connection whatsoever" to recent reports of unusual activity near the Scottish Highlands.`;

const MAIN_P3 = `Auror squads were dispatched to seventeen locations by midnight. Sources within the Department of Magical Transportation suggest the origin was traced to a modified Portkey emitting a resonance frequency not previously documented in the Registry of Prohibited Objects.`;

const MAIN_P4 = `The Hogwarts Express was briefly diverted, delaying students returning from the Easter holiday by approximately two hours. Hogwarts Headmaster Dumbledore declined to comment on the matter, offering only a knowing smile to reporters gathered at the school gates.`;

const SPORTS = `For the fourteenth consecutive match, the Chudley Cannons have secured last place in the British and Irish Quidditch League, falling to the Wimbourne Wasps by a score of 380 to 20 in a match that lasted barely forty minutes. "We're playing with a lot of heart," said Cannons Seeker Galvin Gudgeon, who failed to sight the Golden Snitch despite it hovering visibly above the goalposts for a full two minutes. The Holyhead Harpies meanwhile extended their lead at the top of the table following a dominant display at Falmouth Stadium on Saturday afternoon.`;

const WANTED_TEXT = `The individual pictured is considered highly dangerous. Any sightings should be reported immediately to the Auror Office. Do not attempt to apprehend. A reward of 10,000 Galleons is offered for information leading to capture.`;

const MINISTRY = `Despite three separate eyewitness accounts submitted to the Department for the Regulation and Control of Magical Creatures, Ministry officials continue to deny the presence of Mountain Trolls within the New Forest. A spokesperson stated "There are no trolls," moments before a lamppost on Whitehall was found bent in half. Muggle authorities attributed the incident to strong winds. The Ministry has declined further comment.`;

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function DailyProphet() {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });

  const COL_W  = 240; // px — matches CSS column width
  const FONT   = "15px 'IM Fell English', Georgia, serif";
  const INK    = "#1a0e00";
  const INK_SM = "13px 'IM Fell English', Georgia, serif";

  return (
    <div className="dp-page">
      <article className="dp-paper">

        {/* ── MASTHEAD ── */}
        <header className="dp-masthead">
          <div className="dp-masthead__top">
            <span>Est. 1743</span>
            <span className="dp-masthead__seal">⚗️ 🦉 ⚗️</span>
            <span>5 Knuts · Owl Edition</span>
          </div>
          <h1 className="dp-masthead__title">The Daily Prophet</h1>
          <div className="dp-masthead__sub">The Wizarding World&apos;s Bravest Broadsheet</div>
          <hr className="dp-masthead__rule" />
          <div className="dp-masthead__top" style={{ marginTop:"6px", marginBottom:0 }}>
            <span>{today}</span>
            <span>Vol. CCCXII · No. 47</span>
            <span>Ministry Approved ✓</span>
          </div>
        </header>

        {/* ── BANNER HEADLINE ── */}
        <div className="dp-banner">
          <h2 className="dp-banner__headline">
            FLOO NETWORK DISRUPTED NATIONWIDE<br />
            <span style={{ fontSize:"0.7em" }}>MINISTRY DENIES CONNECTION TO HIGHLAND INCIDENTS</span>
          </h2>
          <div className="dp-banner__deck">
            Thousands stranded · Aurors dispatched · Hogwarts Express delayed two hours
          </div>
        </div>

        {/* ── THREE-COLUMN BODY ── */}
        <div className="dp-body">

          {/* COL 1 */}
          <div className="dp-col">
            <div className="dp-article">
              <div className="dp-article__byline">By Rita Skeeter, Senior Correspondent</div>
              <MagicalPortrait
                kind="minister"
                caption="Minister Fudge addresses the press, Tuesday."
                width={160}
                height={200}
              />
              <AnimatedNewsText text={MAIN_P1} width={COL_W} font={FONT} color={INK} dropCap lineHeight={22} />
              <AnimatedNewsText text={MAIN_P2} width={COL_W} font={FONT} color={INK} lineHeight={22} />
            </div>
          </div>

          <div className="dp-col-divider" />

          {/* COL 2 */}
          <div className="dp-col">
            <div className="dp-article">
              <AnimatedNewsText text={MAIN_P3} width={COL_W} font={FONT} color={INK} lineHeight={22} />
              <AnimatedNewsText text={MAIN_P4} width={COL_W} font={FONT} color={INK} lineHeight={22} />
            </div>

            <div style={{ borderTop:"1px solid var(--dp-border)", margin:"14px 0", paddingTop:"14px" }}>
              <div className="dp-article__head dp-article__head--sm">STILL AT LARGE</div>
              <MagicalPortrait
                kind="wanted"
                caption="Approach with extreme caution."
                width={140}
                height={178}
              />
              <AnimatedNewsText text={WANTED_TEXT} width={COL_W} font={INK_SM} color={INK} lineHeight={19} />
            </div>
          </div>

          <div className="dp-col-divider" />

          {/* COL 3 */}
          <div className="dp-col">
            <div className="dp-article">
              <div className="dp-article__head dp-article__head--sm">QUIDDITCH LEAGUE</div>
              <div className="dp-article__byline">Matchday XIV · League Table</div>
              <MagicalPortrait
                kind="quidditch"
                caption="Cannons Seeker misses Snitch — again."
                width={160}
                height={130}
              />
              <AnimatedNewsText text={SPORTS} width={COL_W} font={FONT} color={INK} lineHeight={22} />
            </div>

            <div style={{ borderTop:"1px solid var(--dp-border)", margin:"14px 0", paddingTop:"14px" }}>
              <div className="dp-article__head dp-article__head--sm">MINISTRY BRIEFS</div>
              <AnimatedNewsText text={MINISTRY} width={COL_W} font={FONT} color={INK} lineHeight={22} />
            </div>
          </div>

        </div>

        {/* ── FOOTER ── */}
        <footer className="dp-footer">
          <span>© The Daily Prophet · Diagon Alley, London</span>
          <span>⚗️</span>
          <span>Printed on Enchanted Parchment · No Muggles were informed</span>
        </footer>

      </article>
    </div>
  );
}
