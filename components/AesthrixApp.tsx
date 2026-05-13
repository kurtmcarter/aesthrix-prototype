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
    <div style={{
      position: 'fixed', inset: 0,
      background: c.phoneBg,
      display: 'flex', flexDirection: 'column',
      maxWidth: 430, margin: '0 auto',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { display: none; }
        .scroll-x { overflow-x: auto; display: flex; gap: 12px; padding: 0 20px 4px; }
      `}</style>

      {/* ── STATUS BAR — fixed top ── */}
      <div style={{
        background: c.sbBg,
        padding: '14px 24px 8px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexShrink: 0,
        zIndex: 10,
      }}>
        <span style={{ fontSize: 15, fontWeight: 500, color: c.sbText }}>9:41</span>
        <span style={{ fontSize: 13, color: c.sbText, opacity: 0.5, letterSpacing: 2 }}>●●● ▌▌</span>
      </div>

      {/* ── SCROLLABLE CONTENT AREA ── */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        WebkitOverflowScrolling: 'touch',
        background: c.screenBg,
      }}>

        {/* ══ HOME ══ */}
        {screen === 'home' && (
          <div>
            {/* Header */}
            <div style={{ background: c.hdrBg, padding: '22px 24px 28px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', right: -30, top: -30, width: 140, height: 140, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
              <div style={{ fontSize: 12, color: c.hdrSub, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>Welcome back</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 34, fontWeight: 300, color: c.hdrText, lineHeight: 1.1, marginBottom: 6 }}>
                <em style={{ fontStyle: 'italic' }}>Layla</em> Al-Rashidi
              </div>
              <div style={{ fontSize: 13, color: c.hdrSub }}>Platinum Member · Anova Aesthetic Clinic</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c.loyBg, border: `1px solid ${c.loyBorder}`, borderRadius: 28, padding: '8px 16px', marginTop: 14 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: c.loyDot, flexShrink: 0 }} />
                <span style={{ fontSize: 13, fontWeight: 500, color: c.loyText }}>
                  <span style={{ color: c.loyPts }}>2,450</span> loyalty points
                </span>
              </div>
            </div>

            <div style={{ padding: '18px 18px 0' }}>
              {/* Appointment card */}
              <div style={{ background: c.cardBg, borderRadius: 20, overflow: 'hidden', border: c.cardBorder, marginBottom: 14 }}>
                <div style={{ background: c.accentBg, padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.accentText, opacity: 0.85 }}>Next Appointment</span>
                  <span style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 12, padding: '4px 12px', fontSize: 11, fontWeight: 500, color: c.accentText }}>In 3 days</span>
                </div>
                <div style={{ padding: '16px 18px' }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, color: c.dark, marginBottom: 4 }}>Hydrafacial MD Elite</div>
                  <div style={{ fontSize: 13, color: c.muted, marginBottom: 14 }}>Dr. Sarah Al-Khatib · Senior Aesthetician</div>
                  <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                    {[{ icon: 'ti-calendar', text: 'Tue, 20 May', sub: 'Date' }, { icon: 'ti-clock', text: '2:30 PM', sub: '60 min' }].map((d, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 38, height: 38, borderRadius: 12, background: c.accentLight, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className={`ti ${d.icon}`} style={{ fontSize: 18, color: c.accentMid }} aria-hidden="true" />
                        </div>
                        <div>
                          <div style={{ fontSize: 14, fontWeight: 500, color: c.dark }}>{d.text}</div>
                          <div style={{ fontSize: 11, color: c.muted }}>{d.sub}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <button style={{ flex: 1, padding: '13px', background: c.btnPrimBg, color: c.btnPrimText, border: 'none', borderRadius: 12, fontFamily: "'Jost', sans-serif", fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>
                      Confirm Attendance
                    </button>
                    <button onClick={() => setScreen('book')} style={{ flex: 1, padding: '13px', background: c.btnSecBg, color: c.btnSecText, border: `1.5px solid ${c.btnSecBorder}`, borderRadius: 12, fontFamily: "'Jost', sans-serif", fontSize: 13, cursor: 'pointer' }}>
                      Reschedule
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick actions */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, paddingBottom: 20 }}>
                <div onClick={() => setScreen('book')} style={{ background: c.cardBg, border: `1px solid ${c.chipBorder}`, borderRadius: 18, padding: '18px 16px', cursor: 'pointer' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 14, background: c.accentLight, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                    <i className="ti ti-calendar-plus" style={{ fontSize: 22, color: c.accentMid }} aria-hidden="true" />
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 500, color: c.dark, marginBottom: 3 }}>Book</div>
                  <div style={{ fontSize: 12, color: c.muted }}>Browse services</div>
                </div>
                <div onClick={() => setScreen('journey')} style={{ background: c.cardBg, border: `1px solid ${c.chipBorder}`, borderRadius: 18, padding: '18px 16px', cursor: 'pointer' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 14, background: c.goldLight, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                    <i className="ti ti-timeline" style={{ fontSize: 22, color: c.gold }} aria-hidden="true" />
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 500, color: c.dark, marginBottom: 3 }}>My Journey</div>
                  <div style={{ fontSize: 12, color: c.muted }}>History & results</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ══ BOOK ══ */}
        {screen === 'book' && (
          <div style={{ padding: '18px 18px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
              <div onClick={() => setScreen('home')} style={{ width: 44, height: 44, borderRadius: 12, background: c.cardBg, border: `1px solid ${c.chipBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
                <i className="ti ti-arrow-left" style={{ fontSize: 22, color: c.mid }} aria-hidden="true" />
              </div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 300, color: c.dark }}>Book a Treatment</div>
            </div>

            {/* Progress */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
              {[1, 2, 3, 4].map((s, i) => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', flex: i < 3 ? 1 : 'none' }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 500, background: s === 1 ? c.btnPrimBg : c.chipBg, color: s === 1 ? c.btnPrimText : c.muted, border: `1px solid ${s === 1 ? 'transparent' : c.chipBorder}`, flexShrink: 0 }}>{s}</div>
                  {i < 3 && <div style={{ flex: 1, height: 2, background: c.timelineLine }} />}
                </div>
              ))}
            </div>

            {/* Treatments */}
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: c.muted, marginBottom: 12 }}>Choose Treatment</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 22 }}>
              {[
                { icon: 'ti-sparkles', name: 'Botox', dur: '30–45 min', price: 'SAR 800+', sel: true },
                { icon: 'ti-droplet', name: 'Dermal Filler', dur: '45–60 min', price: 'SAR 1,200+', sel: false },
                { icon: 'ti-sun', name: 'Laser', dur: '60 min', price: 'SAR 1,800+', sel: false },
                { icon: 'ti-wave-square', name: 'Hydrafacial', dur: '60–90 min', price: 'SAR 650+', sel: false },
              ].map((t, i) => (
                <div key={i} style={{ background: t.sel ? c.treSelBg : c.cardBg, border: `1.5px solid ${t.sel ? c.treSelBorder : 'transparent'}`, borderRadius: 16, padding: '14px', cursor: 'pointer' }}>
                  <i className={`ti ${t.icon}`} style={{ fontSize: 24, color: c.accentMid, display: 'block', marginBottom: 10 }} aria-hidden="true" />
                  <div style={{ fontSize: 14, fontWeight: 500, color: c.dark, marginBottom: 3 }}>{t.name}</div>
                  <div style={{ fontSize: 11, color: c.muted, marginBottom: 6 }}>{t.dur}</div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: c.accentMid }}>{t.price}</div>
                </div>
              ))}
            </div>

            {/* Providers */}
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: c.muted, marginBottom: 12 }}>Choose Provider</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22 }}>
              {[
                { initials: 'SK', name: 'Dr. Sarah Al-Khatib', title: 'Senior Aesthetician · 8 yrs', rating: '★★★★★  4.9', sel: true },
                { initials: 'NA', name: 'Dr. Nora Al-Ayed', title: 'Cosmetic Dermatologist · 6 yrs', rating: '★★★★★  4.8', sel: false },
              ].map((p, i) => (
                <div key={i} style={{ background: c.cardBg, border: `1.5px solid ${p.sel ? c.provSelBorder : 'transparent'}`, borderRadius: 16, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: c.accentLight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: c.accentMid, fontWeight: 500, flexShrink: 0 }}>{p.initials}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 500, color: c.dark }}>{p.name}</div>
                    <div style={{ fontSize: 11, color: c.muted, marginTop: 2 }}>{p.title}</div>
                    <div style={{ fontSize: 12, color: c.gold, marginTop: 4 }}>{p.rating}</div>
                  </div>
                  {p.sel && <i className="ti ti-circle-check" style={{ fontSize: 22, color: c.provCheck }} aria-hidden="true" />}
                </div>
              ))}
            </div>

            {/* Slots */}
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: c.muted, marginBottom: 12 }}>Choose Time · Thu 22 May</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 22 }}>
              {[
                { t: '10:00 AM', sel: false, disc: null },
                { t: '11:00 AM', sel: false, disc: '-15% off' },
                { t: '1:00 PM', sel: false, disc: null },
                { t: '2:30 PM', sel: true, disc: null },
                { t: '4:00 PM', sel: false, disc: '-10% off' },
                { t: '5:00 PM', sel: false, disc: null },
              ].map((slot, i) => (
                <div key={i} style={{ background: slot.sel ? c.slotSelBg : c.slotBg, border: `1.5px solid ${slot.sel ? 'transparent' : slot.disc ? c.discBorder : c.chipBorder}`, borderRadius: 12, padding: '12px 6px', textAlign: 'center', cursor: 'pointer' }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: slot.sel ? c.slotSelText : c.slotText }}>{slot.t}</div>
                  {slot.disc && <div style={{ fontSize: 10, color: slot.sel ? c.slotSelText : c.discText, marginTop: 3 }}>{slot.disc}</div>}
                </div>
              ))}
            </div>

            <button style={{ width: '100%', padding: '16px', background: c.btnPrimBg, color: c.btnPrimText, border: 'none', borderRadius: 14, fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' as const, cursor: 'pointer' }}>
              Confirm Booking
            </button>
          </div>
        )}

        {/* ══ MY JOURNEY ══ */}
        {screen === 'journey' && (
          <div>
            <div style={{ background: c.hdrBg, padding: '22px 22px 26px', borderBottom: c.cardBorder }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 300, color: c.hdrText, marginBottom: 4 }}>My Journey</div>
              <div style={{ fontSize: 13, color: c.hdrSub }}>Your personal aesthetic record</div>
              <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
                {[{ n: '14', l: 'Treatments' }, { n: '18 mo', l: 'Member' }, { n: 'Platinum', l: 'Status' }].map((s, i) => (
                  <div key={i} style={{ background: c.rstatBg, borderRadius: 14, padding: '10px 14px', flex: 1 }}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: c.hdrText }}>{s.n}</div>
                    <div style={{ fontSize: 11, color: c.hdrSub, marginTop: 2 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: '18px 18px 24px' }}>
              {/* Recommendation */}
              <div style={{ background: c.recBg, borderRadius: 18, padding: '18px', marginBottom: 20, border: c.cardBorder }}>
                <div style={{ fontSize: 10, color: c.recSub, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Doctor&apos;s Recommendation</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 300, color: c.recText, marginBottom: 8 }}>Time for your Botox refresh</div>
                <div style={{ fontSize: 13, color: c.recSub, lineHeight: 1.6, marginBottom: 14 }}>Based on your last treatment on 12 Feb, Dr. Al-Khatib recommends scheduling within the next 2–3 weeks.</div>
                <button onClick={() => setScreen('book')} style={{ padding: '12px 22px', background: c.recBtn, color: c.recBtnText, border: 'none', borderRadius: 10, fontFamily: "'Jost', sans-serif", fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>Book Now</button>
              </div>

              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: c.dark, marginBottom: 16 }}>Treatment History</div>

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
                    <div style={{ fontSize: 11, color: c.muted, marginBottom: 4 }}>{item.date}</div>
                    <div style={{ fontSize: 15, fontWeight: 500, color: c.dark, marginBottom: 3 }}>{item.tx}</div>
                    <div style={{ fontSize: 12, color: c.muted, marginBottom: 10 }}>{item.dr}</div>
                    <div style={{ fontSize: 12, color: c.noteText, lineHeight: 1.6, padding: '10px 12px', background: c.noteBg, borderRadius: 10, marginBottom: 10 }}>&ldquo;{item.note}&rdquo;</div>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {item.tags.map((tag, j) => <span key={j} style={{ padding: '3px 10px', background: c.tagBg, borderRadius: 20, fontSize: 11, color: c.tagText, fontWeight: 500 }}>{tag}</span>)}
                      {item.gold.map((tag, j) => <span key={j} style={{ padding: '3px 10px', background: c.tagGoldBg, borderRadius: 20, fontSize: 11, color: c.tagGoldText, fontWeight: 500 }}>{tag}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── NAV BAR — pinned bottom ── */}
      <div style={{
        background: c.navBg,
        borderTop: `1px solid ${c.navBorder}`,
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px 0 28px',
        flexShrink: 0,
        zIndex: 10,
      }}>
        {navItems.map(([s, icon, label]) => (
          <div key={s} onClick={() => s !== 'profile' && setScreen(s as Screen)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, cursor: 'pointer', minWidth: 60, paddingTop: 2 }}>
            <i className={`ti ${icon}`} style={{ fontSize: 24, color: screen === s ? c.navActive : c.navInactive }} aria-hidden="true" />
            <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: screen === s ? c.navActive : c.navInactive }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
