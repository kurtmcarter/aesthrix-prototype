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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { height: 100%; background: #E8E2DA; font-family: 'Jost', sans-serif; }
        ::-webkit-scrollbar { display: none; }

        /* Desktop — phone frame centred on page */
        .page-shell {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 16px;
        }

        .phone-shell {
          width: 390px;
          height: 844px;
          border-radius: 52px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          position: relative;
          flex-shrink: 0;
        }

        /* Mobile — fill the screen */
        @media (max-width: 480px) {
          .page-shell {
            padding: 0;
            align-items: stretch;
            background: none;
          }
          .phone-shell {
            width: 100%;
            height: 100dvh;
            border-radius: 0;
            box-shadow: none;
          }
        }

        .status-bar {
          flex-shrink: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 28px 10px;
          z-index: 10;
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
          padding: 12px 0 30px;
          z-index: 10;
        }

        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          min-width: 64px;
        }

        .nav-item i { font-size: 26px; }
        .nav-item span {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.07em;
          text-transform: uppercase;
        }

        .scroll-x {
          overflow-x: auto;
          display: flex;
          gap: 12px;
          padding: 0 18px 4px;
        }
      `}</style>

      <div className="page-shell">
        <div className="phone-shell" style={{ background: c.phoneBg }}>

          {/* STATUS BAR */}
          <div className="status-bar" style={{ background: c.sbBg }}>
            <span style={{ fontSize: 16, fontWeight: 500, color: c.sbText }}>9:41</span>
            <span style={{ fontSize: 14, color: c.sbText, opacity: 0.5, letterSpacing: 2 }}>●●● ▌▌</span>
          </div>

          {/* SCROLLABLE CONTENT */}
          <div className="scroll-area" style={{ background: c.screenBg }}>

            {/* ══ HOME ══ */}
            {screen === 'home' && (
              <div>
                <div style={{ background: c.hdrBg, padding: '24px 24px 30px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', right: -30, top: -30, width: 150, height: 150, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
                  <div style={{ fontSize: 13, color: c.hdrSub, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Welcome back</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 300, color: c.hdrText, lineHeight: 1.1, marginBottom: 6 }}>
                    <em style={{ fontStyle: 'italic' }}>Layla</em> Al-Rashidi
                  </div>
                  <div style={{ fontSize: 14, color: c.hdrSub }}>Platinum Member · Anova Aesthetic Clinic</div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c.loyBg, border: `1px solid ${c.loyBorder}`, borderRadius: 28, padding: '9px 16px', marginTop: 14 }}>
                    <div style={{ width: 9, height: 9, borderRadius: '50%', background: c.loyDot, flexShrink: 0 }} />
                    <span style={{ fontSize: 14, fontWeight: 500, color: c.loyText }}>
                      <span style={{ color: c.loyPts }}>2,450</span> loyalty points
                    </span>
                  </div>
                </div>

                <div style={{ padding: '18px 18px 0' }}>
                  {/* Appointment card */}
                  <div style={{ background: c.cardBg, borderRadius: 20, overflow: 'hidden', border: c.cardBorder, marginBottom: 14 }}>
                    <div style={{ background: c.accentBg, padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.accentText, opacity: 0.85 }}>Next Appointment</span>
                      <span style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 12, padding: '4px 14px', fontSize: 12, fontWeight: 500, color: c.accentText }}>In 3 days</span>
                    </div>
                    <div style={{ padding: '18px 20px' }}>
                      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, color: c.dark, marginBottom: 5 }}>Hydrafacial MD Elite</div>
                      <div style={{ fontSize: 14, color: c.muted, marginBottom: 16 }}>Dr. Sarah Al-Khatib · Senior Aesthetician</div>
                      <div style={{ display: 'flex', gap: 18, marginBottom: 18 }}>
                        {[{ icon: 'ti-calendar', text: 'Tue, 20 May', sub: 'Date' }, { icon: 'ti-clock', text: '2:30 PM', sub: '60 min' }].map((d, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <div style={{ width: 40, height: 40, borderRadius: 12, background: c.accentLight, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <i className={`ti ${d.icon}`} style={{ fontSize: 20, color: c.accentMid }} aria-hidden="true" />
                            </div>
                            <div>
                              <div style={{ fontSize: 15, fontWeight: 500, color: c.dark }}>{d.text}</div>
                              <div style={{ fontSize: 12, color: c.muted }}>{d.sub}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: 'flex', gap: 10 }}>
                        <button style={{ flex: 1, padding: '14px', background: c.btnPrimBg, color: c.btnPrimText, border: 'none', borderRadius: 12, fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>
                          Confirm Attendance
                        </button>
                        <button onClick={() => setScreen('book')} style={{ flex: 1, padding: '14px', background: c.btnSecBg, color: c.btnSecText, border: `1.5px solid ${c.btnSecBorder}`, borderRadius: 12, fontFamily: "'Jost', sans-serif", fontSize: 14, cursor: 'pointer' }}>
                          Reschedule
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Quick actions */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, paddingBottom: 24 }}>
                    <div onClick={() => setScreen('book')} style={{ background: c.cardBg, border: `1px solid ${c.chipBorder}`, borderRadius: 18, padding: '20px 18px', cursor: 'pointer' }}>
                      <div style={{ width: 46, height: 46, borderRadius: 14, background: c.accentLight, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                        <i className="ti ti-calendar-plus" style={{ fontSize: 22, color: c.accentMid }} aria-hidden="true" />
                      </div>
                      <div style={{ fontSize: 16, fontWeight: 500, color: c.dark, marginBottom: 4 }}>Book</div>
                      <div style={{ fontSize: 13, color: c.muted }}>Browse services</div>
                    </div>
                    <div onClick={() => setScreen('journey')} style={{ background: c.cardBg, border: `1px solid ${c.chipBorder}`, borderRadius: 18, padding: '20px 18px', cursor: 'pointer' }}>
                      <div style={{ width: 46, height: 46, borderRadius: 14, background: c.goldLight, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                        <i className="ti ti-timeline" style={{ fontSize: 22, color: c.gold }} aria-hidden="true" />
                      </div>
                      <div style={{ fontSize: 16, fontWeight: 500, color: c.dark, marginBottom: 4 }}>My Journey</div>
                      <div style={{ fontSize: 13, color: c.muted }}>History & results</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ══ BOOK ══ */}
            {screen === 'book' && (
              <div style={{ padding: '18px 18px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
                  <div onClick={() => setScreen('home')} style={{ width: 44, height: 44, borderRadius: 12, background: c.cardBg, border: `1px solid ${c.chipBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
                    <i className="ti ti-arrow-left" style={{ fontSize: 22, color: c.mid }} aria-hidden="true" />
                  </div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 300, color: c.dark }}>Book a Treatment</div>
                </div>

                {/* Progress steps */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 26 }}>
                  {[1, 2, 3, 4].map((s, i) => (
                    <div key={s} style={{ display: 'flex', alignItems: 'center', flex: i < 3 ? 1 : 'none' }}>
                      <div style={{ width: 34, height: 34, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 500, background: s === 1 ? c.btnPrimBg : c.chipBg, color: s === 1 ? c.btnPrimText : c.muted, border: `1px solid ${s === 1 ? 'transparent' : c.chipBorder}`, flexShrink: 0 }}>{s}</div>
                      {i < 3 && <div style={{ flex: 1, height: 2, background: c.timelineLine }} />}
                    </div>
                  ))}
                </div>

                <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: c.muted, marginBottom: 14 }}>Choose Treatment</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 24 }}>
                  {[
                    { icon: 'ti-sparkles', name: 'Botox', dur: '30–45 min', price: 'SAR 800+', sel: true },
                    { icon: 'ti-droplet', name: 'Dermal Filler', dur: '45–60 min', price: 'SAR 1,200+', sel: false },
                    { icon: 'ti-sun', name: 'Laser', dur: '60 min', price: 'SAR 1,800+', sel: false },
                    { icon: 'ti-wave-square', name: 'Hydrafacial', dur: '60–90 min', price: 'SAR 650+', sel: false },
                  ].map((t, i) => (
                    <div key={i} style={{ background: t.sel ? c.treSelBg : c.cardBg, border: `1.5px solid ${t.sel ? c.treSelBorder : 'transparent'}`, borderRadius: 16, padding: '16px 14px', cursor: 'pointer' }}>
                      <i className={`ti ${t.icon}`} style={{ fontSize: 26, color: c.accentMid, display: 'block', marginBottom: 10 }} aria-hidden="true" />
                      <div style={{ fontSize: 15, fontWeight: 500, color: c.dark, marginBottom: 4 }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: c.muted, marginBottom: 6 }}>{t.dur}</div>
                      <div style={{ fontSize: 15, fontWeight: 500, color: c.accentMid }}>{t.price}</div>
                    </div>
                  ))}
                </div>

                <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: c.muted, marginBottom: 14 }}>Choose Provider</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                  {[
                    { initials: 'SK', name: 'Dr. Sarah Al-Khatib', title: 'Senior Aesthetician · 8 yrs', rating: '★★★★★  4.9', sel: true },
                    { initials: 'NA', name: 'Dr. Nora Al-Ayed', title: 'Cosmetic Dermatologist · 6 yrs', rating: '★★★★★  4.8', sel: false },
                  ].map((p, i) => (
                    <div key={i} style={{ background: c.cardBg, border: `1.5px solid ${p.sel ? c.provSelBorder : 'transparent'}`, borderRadius: 16, padding: '16px', display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }}>
                      <div style={{ width: 50, height: 50, borderRadius: '50%', background: c.accentLight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: c.accentMid, fontWeight: 500, flexShrink: 0 }}>{p.initials}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 15, fontWeight: 500, color: c.dark }}>{p.name}</div>
                        <div style={{ fontSize: 12, color: c.muted, marginTop: 3 }}>{p.title}</div>
                        <div style={{ fontSize: 13, color: c.gold, marginTop: 5 }}>{p.rating}</div>
                      </div>
                      {p.sel && <i className="ti ti-circle-check" style={{ fontSize: 24, color: c.provCheck }} aria-hidden="true" />}
                    </div>
                  ))}
                </div>

                <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: c.muted, marginBottom: 14 }}>Choose Time · Thu 22 May</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 24 }}>
                  {[
                    { t: '10:00 AM', sel: false, disc: null },
                    { t: '11:00 AM', sel: false, disc: '-15% off' },
                    { t: '1:00 PM', sel: false, disc: null },
                    { t: '2:30 PM', sel: true, disc: null },
                    { t: '4:00 PM', sel: false, disc: '-10% off' },
                    { t: '5:00 PM', sel: false, disc: null },
                  ].map((slot, i) => (
                    <div key={i} style={{ background: slot.sel ? c.slotSelBg : c.slotBg, border: `1.5px solid ${slot.sel ? 'transparent' : slot.disc ? c.discBorder : c.chipBorder}`, borderRadius: 12, padding: '13px 6px', textAlign: 'center', cursor: 'pointer' }}>
                      <div style={{ fontSize: 14, fontWeight: 500, color: slot.sel ? c.slotSelText : c.slotText }}>{slot.t}</div>
                      {slot.disc && <div style={{ fontSize: 11, color: slot.sel ? c.slotSelText : c.discText, marginTop: 4 }}>{slot.disc}</div>}
                    </div>
                  ))}
                </div>

                <button style={{ width: '100%', padding: '17px', background: c.btnPrimBg, color: c.btnPrimText, border: 'none', borderRadius: 14, fontFamily: "'Jost', sans-serif", fontSize: 15, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' as const, cursor: 'pointer' }}>
                  Confirm Booking
                </button>
              </div>
            )}

            {/* ══ MY JOURNEY ══ */}
            {screen === 'journey' && (
              <div>
                <div style={{ background: c.hdrBg, padding: '24px 22px 28px', borderBottom: c.cardBorder }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 34, fontWeight: 300, color: c.hdrText, marginBottom: 5 }}>My Journey</div>
                  <div style={{ fontSize: 14, color: c.hdrSub }}>Your personal aesthetic record</div>
                  <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
                    {[{ n: '14', l: 'Treatments' }, { n: '18 mo', l: 'Member' }, { n: 'Platinum', l: 'Status' }].map((s, i) => (
                      <div key={i} style={{ background: c.rstatBg, borderRadius: 14, padding: '12px 14px', flex: 1 }}>
                        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, color: c.hdrText }}>{s.n}</div>
                        <div style={{ fontSize: 12, color: c.hdrSub, marginTop: 3 }}>{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ padding: '18px 18px 28px' }}>
                  <div style={{ background: c.recBg, borderRadius: 18, padding: '20px', marginBottom: 22, border: c.cardBorder }}>
                    <div style={{ fontSize: 11, color: c.recSub, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Doctor&apos;s Recommendation</div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 300, color: c.recText, marginBottom: 8 }}>Time for your Botox refresh</div>
                    <div style={{ fontSize: 14, color: c.recSub, lineHeight: 1.6, marginBottom: 16 }}>Based on your last treatment on 12 Feb, Dr. Al-Khatib recommends scheduling within the next 2–3 weeks.</div>
                    <button onClick={() => setScreen('book')} style={{ padding: '13px 24px', background: c.recBtn, color: c.recBtnText, border: 'none', borderRadius: 10, fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>Book Now</button>
                  </div>

                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, color: c.dark, marginBottom: 18 }}>Treatment History</div>

                  {[
                    { date: '8 April 2025', tx: 'Hydrafacial MD Elite', dr: 'Dr. Sarah Al-Khatib', note: 'Excellent response. Skin hydration levels improved significantly. Monthly sessions recommended.', tags: ['Hydration', 'Glow Protocol'], gold: ['Repeat recommended'] },
                    { date: '12 February 2025', tx: 'Botox — Forehead & Glabella', dr: 'Dr. Sarah Al-Khatib', note: '20 units administered. Natural result achieved. Next session in 4–5 months.', tags: ['20 units', 'Natural finish'], gold: ['Due May 2025'] },
                    { date: '8 January 2025', tx: 'Lip Filler — 1ml Juvederm', dr: 'Dr. Nora Al-Ayed', note: '1ml Juvederm Ultra for natural volume enhancement. Excellent result, no bruising.', tags: ['1ml Juvederm'], gold: ['12 months duration'] },
                  ].map((item, i, arr) => (
                    <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 14 }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 4 }}>
                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: c.timelineDot, flexShrink: 0 }} />
                        {i < arr.length - 1 && <div style={{ width: 2, flex: 1, background: c.timelineLine, marginTop: 6, minHeight: 24 }} />}
                      </div>
                      <div style={{ flex: 1, background: c.cardBg, borderRadius: 16, padding: '16px', border: c.cardBorder, marginBottom: 4 }}>
                        <div style={{ fontSize: 12, color: c.muted, marginBottom: 5 }}>{item.date}</div>
                        <div style={{ fontSize: 16, fontWeight: 500, color: c.dark, marginBottom: 4 }}>{item.tx}</div>
                        <div style={{ fontSize: 13, color: c.muted, marginBottom: 12 }}>{item.dr}</div>
                        <div style={{ fontSize: 13, color: c.noteText, lineHeight: 1.6, padding: '10px 12px', background: c.noteBg, borderRadius: 10, marginBottom: 10 }}>&ldquo;{item.note}&rdquo;</div>
                        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                          {item.tags.map((tag, j) => <span key={j} style={{ padding: '4px 12px', background: c.tagBg, borderRadius: 20, fontSize: 12, color: c.tagText, fontWeight: 500 }}>{tag}</span>)}
                          {item.gold.map((tag, j) => <span key={j} style={{ padding: '4px 12px', background: c.tagGoldBg, borderRadius: 20, fontSize: 12, color: c.tagGoldText, fontWeight: 500 }}>{tag}</span>)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* BOTTOM NAV */}
          <div className="bottom-nav" style={{ background: c.navBg, borderTop: `1px solid ${c.navBorder}` }}>
            {navItems.map(([s, icon, label]) => (
              <div key={s} className="nav-item" onClick={() => s !== 'profile' && setScreen(s as Screen)}>
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
