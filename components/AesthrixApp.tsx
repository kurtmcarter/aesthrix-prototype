'use client';
import { useState } from 'react';
import { ThemeTokens } from '@/lib/themes';

type Screen = 'home' | 'book' | 'journey';

export default function AesthrixApp({ c }: { c: ThemeTokens }) {
  const [screen, setScreen] = useState<Screen>('home');

  const navItems: [Screen | 'profile', string, string][] = [
    ['home', 'ti-home', 'Home'],
    ['book', 'ti-calendar', 'Book'],
    ['journey', 'ti-sparkles', 'Journey'],
    ['profile', 'ti-user', 'Profile'],
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { height: 100%; }
        ::-webkit-scrollbar { display: none; }

        .page-wrap {
          min-height: 100vh;
          background: #1A1A1A;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 16px;
          font-family: 'Inter', sans-serif;
        }

        .phone {
          width: 390px;
          height: 844px;
          border-radius: 52px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          box-shadow: 0 48px 120px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06);
        }

        @media (max-width: 480px) {
          .page-wrap { padding: 0; background: none; align-items: stretch; }
          .phone { width: 100%; height: 100dvh; border-radius: 0; box-shadow: none; }
        }

        .status-bar {
          flex-shrink: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 28px 10px;
        }

        .scroll-area {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
        }

        .bottom-nav {
          flex-shrink: 0;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 12px 12px 32px;
          gap: 8px;
        }

        .nav-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 7px;
          cursor: pointer;
          flex: 1;
          padding: 12px 10px;
          border-radius: 50px;
          transition: background 0.15s;
        }
        .nav-item i { font-size: 22px; flex-shrink: 0; }
        .nav-item span { font-size: 14px; font-weight: 700; letter-spacing: 0.01em; white-space: nowrap; }

        .hero { padding: 24px 24px 28px; position: relative; overflow: hidden; }
        .hero-greeting { font-size: 15px; font-weight: 500; margin-bottom: 4px; }
        .hero-name { font-size: 30px; font-weight: 800; letter-spacing: -0.5px; margin-bottom: 20px; line-height: 1.1; }

        .loyalty-card { border-radius: 20px; padding: 18px 20px; display: flex; align-items: center; justify-content: space-between; }
        .lc-pts { font-size: 28px; font-weight: 800; letter-spacing: -0.5px; }
        .lc-label { font-size: 13px; font-weight: 500; margin-top: 3px; }
        .lc-badge { border-radius: 30px; padding: 9px 18px; font-size: 13px; font-weight: 800; letter-spacing: 0.02em; }

        .body-pad { padding: 20px 20px 0; display: flex; flex-direction: column; gap: 16px; }

        .appt-card { border-radius: 24px; overflow: hidden; }
        .appt-top { padding: 16px 20px; display: flex; justify-content: space-between; align-items: center; }
        .appt-top-label { font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
        .appt-badge { border-radius: 20px; padding: 6px 14px; font-size: 12px; font-weight: 700; }
        .appt-body { padding: 20px; }
        .appt-tx { font-size: 24px; font-weight: 800; letter-spacing: -0.3px; margin-bottom: 5px; line-height: 1.15; }
        .appt-dr { font-size: 15px; font-weight: 500; margin-bottom: 18px; }
        .appt-pills { display: flex; gap: 10px; margin-bottom: 20px; }
        .pill { display: flex; align-items: center; gap: 9px; border-radius: 14px; padding: 12px 16px; flex: 1; }
        .pill i { font-size: 20px; flex-shrink: 0; }
        .pill-txt { font-size: 15px; font-weight: 700; }
        .pill-sub { font-size: 12px; font-weight: 500; margin-top: 1px; }
        .btns { display: flex; gap: 10px; }
        .btn-prim { flex: 1; padding: 17px; border: none; border-radius: 16px; font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 800; cursor: pointer; letter-spacing: 0.01em; }
        .btn-sec { flex: 1; padding: 17px; border: none; border-radius: 16px; font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 700; cursor: pointer; }

        .section-hdr { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
        .section-title { font-size: 20px; font-weight: 800; letter-spacing: -0.3px; }
        .section-link { font-size: 14px; font-weight: 700; cursor: pointer; }

        .qa-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; padding-bottom: 24px; }
        .qa-card { border-radius: 22px; padding: 20px; cursor: pointer; }
        .qa-icon { width: 50px; height: 50px; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
        .qa-icon i { font-size: 26px; }
        .qa-label { font-size: 17px; font-weight: 800; margin-bottom: 4px; letter-spacing: -0.2px; }
        .qa-sub { font-size: 13px; font-weight: 500; }

        .back-btn { width: 46px; height: 46px; border-radius: 14px; display: flex; align-items: center; justify-content: center; cursor: pointer; flex-shrink: 0; border: none; }
        .back-btn i { font-size: 24px; }
        .screen-title { font-size: 28px; font-weight: 800; letter-spacing: -0.5px; }

        .progress-row { display: flex; align-items: center; margin-bottom: 28px; }
        .step-dot { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800; flex-shrink: 0; }
        .step-line { flex: 1; height: 2px; }

        .section-sub { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 14px; }

        .treat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 24px; }
        .treat-card { border-radius: 18px; padding: 16px; cursor: pointer; }
        .treat-card i { font-size: 28px; display: block; margin-bottom: 12px; }
        .treat-name { font-size: 16px; font-weight: 800; margin-bottom: 4px; }
        .treat-dur { font-size: 13px; font-weight: 500; margin-bottom: 8px; }
        .treat-price { font-size: 16px; font-weight: 800; }

        .prov-list { display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; }
        .prov-card { border-radius: 18px; padding: 16px 18px; display: flex; align-items: center; gap: 14px; cursor: pointer; }
        .prov-avatar { width: 52px; height: 52px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 800; flex-shrink: 0; }
        .prov-name { font-size: 16px; font-weight: 800; }
        .prov-title { font-size: 13px; font-weight: 500; margin-top: 3px; }
        .prov-rating { font-size: 14px; font-weight: 700; margin-top: 5px; }
        .prov-check { font-size: 26px; margin-left: auto; }

        .slots-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; margin-bottom: 24px; }
        .slot { border-radius: 14px; padding: 14px 6px; text-align: center; cursor: pointer; border-width: 1.5px; border-style: solid; }
        .slot-time { font-size: 14px; font-weight: 700; }
        .slot-disc { font-size: 11px; font-weight: 700; margin-top: 4px; }
        .btn-book { width: 100%; padding: 18px; border: none; border-radius: 18px; font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 800; letter-spacing: 0.02em; text-transform: uppercase; cursor: pointer; }

        .journey-header { padding: 24px 22px 28px; }
        .journey-title { font-size: 34px; font-weight: 800; letter-spacing: -0.5px; margin-bottom: 5px; }
        .journey-sub { font-size: 15px; font-weight: 500; margin-bottom: 18px; }
        .stats-row { display: flex; gap: 10px; }
        .stat-card { border-radius: 16px; padding: 14px 16px; flex: 1; }
        .stat-num { font-size: 24px; font-weight: 800; letter-spacing: -0.3px; }
        .stat-label { font-size: 12px; font-weight: 600; margin-top: 3px; }

        .rec-card { border-radius: 22px; padding: 22px; margin-bottom: 22px; }
        .rec-label { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 10px; }
        .rec-title { font-size: 22px; font-weight: 800; letter-spacing: -0.3px; margin-bottom: 10px; line-height: 1.2; }
        .rec-text { font-size: 14px; font-weight: 500; line-height: 1.6; margin-bottom: 18px; }
        .btn-rec { padding: 14px 26px; border: none; border-radius: 14px; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 800; cursor: pointer; }

        .timeline-item { display: flex; gap: 14px; margin-bottom: 14px; }
        .tl-line-wrap { display: flex; flex-direction: column; align-items: center; padding-top: 4px; }
        .tl-dot { width: 13px; height: 13px; border-radius: 50%; flex-shrink: 0; }
        .tl-stem { width: 2px; flex: 1; margin-top: 6px; min-height: 28px; }
        .tl-card { flex: 1; border-radius: 18px; padding: 18px; margin-bottom: 4px; }
        .tl-date { font-size: 12px; font-weight: 600; margin-bottom: 6px; }
        .tl-tx { font-size: 17px; font-weight: 800; margin-bottom: 4px; letter-spacing: -0.2px; }
        .tl-dr { font-size: 13px; font-weight: 500; margin-bottom: 12px; }
        .tl-note { font-size: 13px; font-weight: 500; line-height: 1.6; padding: 12px 14px; border-radius: 12px; margin-bottom: 12px; }
        .tl-tags { display: flex; gap: 6px; flex-wrap: wrap; }
        .tl-tag { padding: 5px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; }
      `}</style>

      <div className="page-wrap">
        <div className="phone" style={{ background: c.heroBg }}>

          {/* STATUS BAR */}
          <div className="status-bar" style={{ background: c.heroBg }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>9:41</span>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', letterSpacing: 2 }}>●●● ▌▌</span>
          </div>

          {/* SCROLL AREA */}
          <div className="scroll-area" style={{ background: c.screenBg }}>

            {/* ══ HOME ══ */}
            {screen === 'home' && <>
              <div className="hero" style={{ background: c.heroBg }}>
                <div className="hero-greeting" style={{ color: c.heroGreeting }}>Good morning,</div>
                <div className="hero-name" style={{ color: c.heroName }}>Layla Al-Rashidi</div>
                <div className="loyalty-card" style={{ background: c.loyaltyBg }}>
                  <div>
                    <div className="lc-pts" style={{ color: c.loyaltyPtColor }}>2,450 pts</div>
                    <div className="lc-label" style={{ color: c.loyaltyLabelColor }}>Loyalty balance</div>
                  </div>
                  <div className="lc-badge" style={{ background: c.loyaltyBadgeBg, color: c.loyaltyBadgeText }}>{c.themeName}</div>
                </div>
              </div>

              <div className="body-pad">
                {/* Appointment card */}
                <div className="appt-card" style={{ background: c.cardBg, boxShadow: c.cardShadow }}>
                  <div className="appt-top" style={{ background: c.apptTopBg }}>
                    <span className="appt-top-label" style={{ color: c.apptTopLabel }}>Next Appointment</span>
                    <span className="appt-badge" style={{ background: c.badgeBg, color: c.badgeText }}>In 3 days</span>
                  </div>
                  <div className="appt-body">
                    <div className="appt-tx" style={{ color: c.txColor }}>Hydrafacial MD Elite</div>
                    <div className="appt-dr" style={{ color: c.drColor }}>Dr. Sarah Al-Khatib</div>
                    <div className="appt-pills">
                      {[{ icon: 'ti-calendar', text: 'Tue, 20 May', sub: 'Date' }, { icon: 'ti-clock', text: '2:30 PM', sub: '60 min' }].map((d, i) => (
                        <div key={i} className="pill" style={{ background: c.pillBg }}>
                          <i className={`ti ${d.icon}`} style={{ color: c.accent }} aria-hidden="true" />
                          <div>
                            <div className="pill-txt" style={{ color: c.txColor }}>{d.text}</div>
                            <div className="pill-sub" style={{ color: c.muted }}>{d.sub}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="btns">
                      <button className="btn-prim" style={{ background: c.btnPrimBg, color: c.btnPrimText }}>Confirm</button>
                      <button className="btn-sec" onClick={() => setScreen('book')} style={{ background: c.btnSecBg, color: c.btnSecText }}>Reschedule</button>
                    </div>
                  </div>
                </div>

                {/* Quick actions */}
                <div>
                  <div className="section-hdr">
                    <div className="section-title" style={{ color: c.dark }}>Quick actions</div>
                  </div>
                  <div className="qa-grid">
                    {[
                      { icon: 'ti-calendar-plus', bg: c.qa1Bg, ic: c.qa1Icon, label: 'Book', sub: 'Browse services', action: () => setScreen('book') },
                      { icon: 'ti-timeline', bg: c.qa2Bg, ic: c.qa2Icon, label: 'My Journey', sub: 'History & results', action: () => setScreen('journey') },
                      { icon: 'ti-gift', bg: c.qa3Bg, ic: c.qa3Icon, label: 'Rewards', sub: '2,450 points', action: undefined },
                      { icon: 'ti-message-circle', bg: c.qa4Bg, ic: c.qa4Icon, label: 'Aftercare', sub: 'Post-treatment', action: undefined },
                    ].map((qa, i) => (
                      <div key={i} className="qa-card" style={{ background: c.cardBg, boxShadow: c.cardShadow }} onClick={qa.action}>
                        <div className="qa-icon" style={{ background: qa.bg }}>
                          <i className={`ti ${qa.icon}`} style={{ color: qa.ic }} aria-hidden="true" />
                        </div>
                        <div className="qa-label" style={{ color: c.dark }}>{qa.label}</div>
                        <div className="qa-sub" style={{ color: c.muted }}>{qa.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>}

            {/* ══ BOOK ══ */}
            {screen === 'book' && (
              <div style={{ padding: '20px 20px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 26 }}>
                  <button className="back-btn" style={{ background: c.cardBg }} onClick={() => setScreen('home')}>
                    <i className="ti ti-arrow-left" style={{ color: c.dark }} aria-hidden="true" />
                  </button>
                  <div className="screen-title" style={{ color: c.dark }}>Book a Treatment</div>
                </div>

                <div className="progress-row">
                  {[1, 2, 3, 4].map((s, i) => (
                    <div key={s} style={{ display: 'flex', alignItems: 'center', flex: i < 3 ? 1 : 'none' }}>
                      <div className="step-dot" style={{ background: s === 1 ? c.stepActiveBg : c.stepTodoBg, color: s === 1 ? c.stepActiveText : c.stepTodoText }}>{s}</div>
                      {i < 3 && <div className="step-line" style={{ background: c.stepTodoBg }} />}
                    </div>
                  ))}
                </div>

                <div className="section-sub" style={{ color: c.muted }}>Choose Treatment</div>
                <div className="treat-grid">
                  {[
                    { icon: 'ti-sparkles', name: 'Botox', dur: '30–45 min', price: 'SAR 800+', sel: true },
                    { icon: 'ti-droplet', name: 'Dermal Filler', dur: '45–60 min', price: 'SAR 1,200+', sel: false },
                    { icon: 'ti-sun', name: 'Laser', dur: '60 min', price: 'SAR 1,800+', sel: false },
                    { icon: 'ti-wave-square', name: 'Hydrafacial', dur: '60–90 min', price: 'SAR 650+', sel: false },
                  ].map((t, i) => (
                    <div key={i} className="treat-card" style={{ background: t.sel ? c.treSelBg : c.cardBg, border: `2px solid ${t.sel ? c.treSelBorder : 'transparent'}` }}>
                      <i className={`ti ${t.icon}`} style={{ color: c.accent }} aria-hidden="true" />
                      <div className="treat-name" style={{ color: c.dark }}>{t.name}</div>
                      <div className="treat-dur" style={{ color: c.muted }}>{t.dur}</div>
                      <div className="treat-price" style={{ color: c.accent }}>{t.price}</div>
                    </div>
                  ))}
                </div>

                <div className="section-sub" style={{ color: c.muted }}>Choose Provider</div>
                <div className="prov-list">
                  {[
                    { initials: 'SK', name: 'Dr. Sarah Al-Khatib', title: 'Senior Aesthetician · 8 yrs', rating: '★★★★★  4.9', sel: true },
                    { initials: 'NA', name: 'Dr. Nora Al-Ayed', title: 'Cosmetic Dermatologist · 6 yrs', rating: '★★★★★  4.8', sel: false },
                  ].map((p, i) => (
                    <div key={i} className="prov-card" style={{ background: c.cardBg, border: `2px solid ${p.sel ? c.provSelBorder : 'transparent'}` }}>
                      <div className="prov-avatar" style={{ background: c.provAvatarBg, color: c.provAvatarText }}>{p.initials}</div>
                      <div style={{ flex: 1 }}>
                        <div className="prov-name" style={{ color: c.dark }}>{p.name}</div>
                        <div className="prov-title" style={{ color: c.muted }}>{p.title}</div>
                        <div className="prov-rating" style={{ color: c.accent }}>{p.rating}</div>
                      </div>
                      {p.sel && <i className="ti ti-circle-check prov-check" style={{ color: c.provCheck }} aria-hidden="true" />}
                    </div>
                  ))}
                </div>

                <div className="section-sub" style={{ color: c.muted }}>Choose Time · Thu 22 May</div>
                <div className="slots-grid">
                  {[
                    { t: '10:00 AM', sel: false, disc: null },
                    { t: '11:00 AM', sel: false, disc: '-15% off' },
                    { t: '1:00 PM', sel: false, disc: null },
                    { t: '2:30 PM', sel: true, disc: null },
                    { t: '4:00 PM', sel: false, disc: '-10% off' },
                    { t: '5:00 PM', sel: false, disc: null },
                  ].map((slot, i) => (
                    <div key={i} className="slot" style={{ background: slot.sel ? c.slotSelBg : c.slotBg, borderColor: slot.sel ? 'transparent' : slot.disc ? c.discBorder : c.slotBorder }}>
                      <div className="slot-time" style={{ color: slot.sel ? c.slotSelText : c.slotText }}>{slot.t}</div>
                      {slot.disc && <div className="slot-disc" style={{ color: slot.sel ? c.slotSelText : c.discText }}>{slot.disc}</div>}
                    </div>
                  ))}
                </div>

                <button className="btn-book" style={{ background: c.btnPrimBg, color: c.btnPrimText }}>Confirm Booking</button>
              </div>
            )}

            {/* ══ JOURNEY ══ */}
            {screen === 'journey' && <>
              <div className="journey-header" style={{ background: c.heroBg }}>
                <div className="journey-title" style={{ color: '#fff' }}>My Journey</div>
                <div className="journey-sub" style={{ color: 'rgba(255,255,255,0.45)' }}>Your personal aesthetic record</div>
                <div className="stats-row">
                  {[{ n: '14', l: 'Treatments' }, { n: '18 mo', l: 'Member' }, { n: 'Platinum', l: 'Status' }].map((s, i) => (
                    <div key={i} className="stat-card" style={{ background: c.rstatBg }}>
                      <div className="stat-num" style={{ color: c.rstatNum }}>{s.n}</div>
                      <div className="stat-label" style={{ color: c.rstatLabel }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ padding: '20px 20px 28px' }}>
                <div className="rec-card" style={{ background: c.recBg }}>
                  <div className="rec-label" style={{ color: c.recLabel }}>Doctor's Recommendation</div>
                  <div className="rec-title" style={{ color: c.recTitle }}>Time for your Botox refresh</div>
                  <div className="rec-text" style={{ color: c.recText }}>Based on your last treatment on 12 Feb, Dr. Al-Khatib recommends scheduling within the next 2–3 weeks for optimal results.</div>
                  <button className="btn-rec" style={{ background: c.recBtn, color: c.recBtnText }} onClick={() => setScreen('book')}>Book Now</button>
                </div>

                <div className="section-hdr" style={{ marginBottom: 18 }}>
                  <div className="section-title" style={{ color: c.dark }}>Treatment History</div>
                </div>

                {[
                  { date: '8 April 2025', tx: 'Hydrafacial MD Elite', dr: 'Dr. Sarah Al-Khatib', note: 'Excellent response. Skin hydration improved significantly. Monthly sessions recommended.', tags: ['Hydration', 'Glow Protocol'], gold: ['Repeat recommended'] },
                  { date: '12 February 2025', tx: 'Botox — Forehead', dr: 'Dr. Sarah Al-Khatib', note: '20 units administered. Natural result achieved. Next session in 4–5 months.', tags: ['20 units', 'Natural finish'], gold: ['Due May 2025'] },
                  { date: '8 January 2025', tx: 'Lip Filler — 1ml', dr: 'Dr. Nora Al-Ayed', note: '1ml Juvederm Ultra for natural volume enhancement. Excellent result, no bruising.', tags: ['1ml Juvederm'], gold: ['12 months duration'] },
                ].map((item, i, arr) => (
                  <div key={i} className="timeline-item">
                    <div className="tl-line-wrap">
                      <div className="tl-dot" style={{ background: c.timelineDot }} />
                      {i < arr.length - 1 && <div className="tl-stem" style={{ background: c.timelineLine }} />}
                    </div>
                    <div className="tl-card" style={{ background: c.timelineCardBg }}>
                      <div className="tl-date" style={{ color: c.muted }}>{item.date}</div>
                      <div className="tl-tx" style={{ color: c.txColor }}>{item.tx}</div>
                      <div className="tl-dr" style={{ color: c.muted }}>{item.dr}</div>
                      <div className="tl-note" style={{ background: c.noteBg, color: c.noteText }}>&ldquo;{item.note}&rdquo;</div>
                      <div className="tl-tags">
                        {item.tags.map((tag, j) => <span key={j} className="tl-tag" style={{ background: c.tagBg, color: c.tagText }}>{tag}</span>)}
                        {item.gold.map((tag, j) => <span key={j} className="tl-tag" style={{ background: c.tagGoldBg, color: c.tagGoldText }}>{tag}</span>)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>}
          </div>

          {/* BOTTOM NAV */}
          <div className="bottom-nav" style={{ background: c.navBg, borderTop: `1px solid ${c.navBorder}` }}>
            {navItems.map(([s, icon, label]) => (
              <div key={s} className="nav-item" onClick={() => s !== 'profile' && setScreen(s as Screen)} style={{ background: screen === s ? `${c.navActive}22` : 'rgba(0,0,0,0.06)' }}>
                <i className={`ti ${icon}`} style={{ color: screen === s ? c.navActive : c.navInactive }} aria-hidden="true" />
                <span style={{ color: screen === s ? c.navActive : c.navInactive }}>{label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
