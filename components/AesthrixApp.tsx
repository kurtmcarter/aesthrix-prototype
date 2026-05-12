'use client';
import { useState } from 'react';
import { ThemeTokens } from '@/lib/themes';

type Screen = 'home' | 'book' | 'journey';

export default function AesthrixApp({ c }: { c: ThemeTokens }) {
  const [screen, setScreen] = useState<Screen>('home');

  const NavBar = () => (
    <div style={{ background: c.navBg, borderTop: `1px solid ${c.navBorder}`, display: 'flex', justifyContent: 'space-around', padding: '14px 0 32px' }}>
      {([['home', 'ti-home', 'Home'], ['book', 'ti-calendar', 'Book'], ['journey', 'ti-sparkles', 'Journey'], ['profile', 'ti-user', 'Profile']] as [Screen | 'profile', string, string][]).map(([s, icon, label]) => (
        <div key={s} onClick={() => s !== 'profile' && setScreen(s as Screen)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, cursor: 'pointer', minWidth: 44 }}>
          <i className={`ti ${icon}`} style={{ fontSize: 26, color: screen === s ? c.navActive : c.navInactive }} aria-hidden="true" />
          <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: screen === s ? c.navActive : c.navInactive }}>{label}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', background: '#F2EDE6', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '0' }}>
      <div style={{ width: '100%', maxWidth: 430, background: c.phoneBg, minHeight: '100vh' }}>

        {/* Status bar */}
        <div style={{ background: c.sbBg, padding: '16px 24px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 16, fontWeight: 500, color: c.sbText }}>9:41</span>
          <span style={{ fontSize: 14, color: c.sbText, opacity: 0.5, letterSpacing: 2 }}>●●● ▌▌</span>
        </div>

        {/* ── HOME ── */}
        {screen === 'home' && (
          <div style={{ background: c.screenBg }}>
            <div style={{ background: c.hdrBg, padding: '28px 24px 36px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', right: -40, top: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
              <div style={{ fontSize: 13, color: c.hdrSub, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Welcome back</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 40, fontWeight: 300, color: c.hdrText, lineHeight: 1.05, marginBottom: 8 }}><em style={{ fontStyle: 'italic' }}>Layla</em><br />Al-Rashidi</div>
              <div style={{ fontSize: 15, color: c.hdrSub }}>Platinum Member · Anova Aesthetic Clinic</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: c.loyBg, border: `1px solid ${c.loyBorder}`, borderRadius: 28, padding: '10px 18px', marginTop: 18 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: c.loyDot, flexShrink: 0 }} />
                <span style={{ fontSize: 15, fontWeight: 500, color: c.loyText }}><span style={{ color: c.loyPts }}>2,450</span> loyalty points</span>
              </div>
            </div>

            <div style={{ padding: '24px 20px 0' }}>
              {/* Appointment card */}
              <div style={{ background: c.cardBg, borderRadius: 22, overflow: 'hidden', border: c.cardBorder, marginBottom: 16 }}>
                <div style={{ background: c.accentBg, padding: '18px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.accentText, opacity: 0.85 }}>Next Appointment</span>
                  <span style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 14, padding: '5px 14px', fontSize: 13, fontWeight: 500, color: c.accentText }}>In 3 days</span>
                </div>
                <div style={{ padding: '22px' }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 400, color: c.dark, marginBottom: 6 }}>Hydrafacial MD Elite</div>
                  <div style={{ fontSize: 15, color: c.muted, marginBottom: 22 }}>Dr. Sarah Al-Khatib · Senior Aesthetician</div>
                  <div style={{ display: 'flex', gap: 20, marginBottom: 22 }}>
                    {[{ icon: 'ti-calendar', text: 'Tue, 20 May', sub: 'Date' }, { icon: 'ti-clock', text: '2:30 PM', sub: '60 min' }].map((d, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{ width: 46, height: 46, borderRadius: 14, background: c.accentLight, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className={`ti ${d.icon}`} style={{ fontSize: 22, color: c.accentMid }} aria-hidden="true" />
                        </div>
                        <div>
                          <div style={{ fontSize: 16, fontWeight: 500, color: c.dark }}>{d.text}</div>
                          <div style={{ fontSize: 13, color: c.muted }}>{d.sub}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <button style={{ flex: 1, padding: '16px', background: c.btnPrimBg, color: c.btnPrimText, border: 'none', borderRadius: 14, fontFamily: "'Jost', sans-serif", fontSize: 15, fontWeight: 500, cursor: 'pointer' }}>Confirm Attendance</button>
                    <button onClick={() => setScreen('book')} style={{ flex: 1, padding: '16px', background: c.btnSecBg, color: c.btnSecText, border: `1.5px solid ${c.btnSecBorder}`, borderRadius: 14, fontFamily: "'Jost', sans-serif", fontSize: 15, cursor: 'pointer' }}>Reschedule</button>
                  </div>
                </div>
              </div>

              {/* Quick actions */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 8 }}>
                <div onClick={() => setScreen('book')} style={{ background: c.cardBg, border: `1px solid ${c.chipBorder}`, borderRadius: 20, padding: '22px 20px', cursor: 'pointer' }}>
                  <div style={{ width: 50, height: 50, borderRadius: 16, background: c.accentLight, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <i className="ti ti-calendar-plus" style={{ fontSize: 24, color: c.accentMid }} aria-hidden="true" />
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 500, color: c.dark, marginBottom: 4 }}>Book</div>
                  <div style={{ fontSize: 13, color: c.muted }}>Browse services</div>
                </div>
                <div onClick={() => setScreen('journey')} style={{ background: c.cardBg, border: `1px solid ${c.chipBorder}`, borderRadius: 20, padding: '22px 20px', cursor: 'pointer' }}>
                  <div style={{ width: 50, height: 50, borderRadius: 16, background: c.goldLight, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <i className="ti ti-timeline" style={{ fontSize: 24, color: c.gold }} aria-hidden="true" />
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 500, color: c.dark, marginBottom: 4 }}>My Journey</div>
                  <div style={{ fontSize: 13, color: c.muted }}>History & results</div>
                </div>
              </div>
            </div>
            <NavBar />
          </div>
        )}

        {/* ── BOOK ── */}
        {screen === 'book' && (
          <div style={{ background: c.screenBg }}>
            <div style={{ padding: '22px 20px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
                <div onClick={() => setScreen('home')} style={{ width: 48, height: 48, borderRadius: 14, background: c.cardBg, border: `1px solid ${c.chipBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
                  <i className="ti ti-arrow-left" style={{ fontSize: 24, color: c.mid }} aria-hidden="true" />
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 30, fontWeight: 300, color: c.dark }}>Book a Treatment</div>
              </div>

              {/* Progress */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 30 }}>
                {[1, 2, 3, 4].map((s, i) => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', flex: i < 3 ? 1 : 'none' }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 500, background: s === 1 ? c.btnPrimBg : c.chipBg, color: s === 1 ? c.btnPrimText : c.muted, border: `1px solid ${s === 1 ? 'transparent' : c.chipBorder}`, flexShrink: 0 }}>{s}</div>
                    {i < 3 && <div style={{ flex: 1, height: 2, background: c.timelineLine }} />}
                  </div>
                ))}
              </div>

              {/* Treatments */}
              <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: c.muted, marginBottom: 14 }}>Choose Treatment</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 28 }}>
                {[
                  { icon: 'ti-sparkles', name: 'Botox', dur: '30–45 min', price: 'SAR 800+', sel: true },
                  { icon: 'ti-droplet', name: 'Dermal Filler', dur: '45–60 min', price: 'SAR 1,200+', sel: false },
                  { icon: 'ti-sun', name: 'Laser', dur: '60 min', price: 'SAR 1,800+', sel: false },
                  { icon: 'ti-wave-square', name: 'Hydrafacial', dur: '60–90 min', price: 'SAR 650+', sel: false },
                ].map((t, i) => (
                  <div key={i} style={{ background: t.sel ? c.treSelBg : c.cardBg, border: `1.5px solid ${t.sel ? c.treSelBorder : 'transparent'}`, borderRadius: 18, padding: '18px 16px', cursor: 'pointer' }}>
                    <i className={`ti ${t.icon}`} style={{ fontSize: 28, color: c.accentMid, display: 'block', marginBottom: 12 }} aria-hidden="true" />
                    <div style={{ fontSize: 16, fontWeight: 500, color: c.dark, marginBottom: 4 }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: c.muted, marginBottom: 8 }}>{t.dur}</div>
                    <div style={{ fontSize: 16, fontWeight: 500, color: c.accentMid }}>{t.price}</div>
                  </div>
                ))}
              </div>

              {/* Providers */}
              <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: c.muted, marginBottom: 14 }}>Choose Provider</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
                {[
                  { initials: 'SK', name: 'Dr. Sarah Al-Khatib', title: 'Senior Aesthetician · 8 yrs', rating: '★★★★★  4.9', sel: true },
                  { initials: 'NA', name: 'Dr. Nora Al-Ayed', title: 'Cosmetic Dermatologist · 6 yrs', rating: '★★★★★  4.8', sel: false },
                ].map((p, i) => (
                  <div key={i} style={{ background: c.cardBg, border: `1.5px solid ${p.sel ? c.provSelBorder : 'transparent'}`, borderRadius: 18, padding: '18px', display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }}>
                    <div style={{ width: 54, height: 54, borderRadius: '50%', background: c.accentLight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cormorant Garamond', serif", fontSize: 20, color: c.accentMid, fontWeight: 500, flexShrink: 0 }}>{p.initials}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 16, fontWeight: 500, color: c.dark }}>{p.name}</div>
                      <div style={{ fontSize: 13, color: c.muted, marginTop: 3 }}>{p.title}</div>
                      <div style={{ fontSize: 14, color: c.gold, marginTop: 6 }}>{p.rating}</div>
                    </div>
                    {p.sel && <i className="ti ti-circle-check" style={{ fontSize: 26, color: c.provCheck }} aria-hidden="true" />}
                  </div>
                ))}
              </div>

              {/* Slots */}
              <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: c.muted, marginBottom: 14 }}>Choose Time · Thu 22 May</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 28 }}>
                {[
                  { t: '10:00 AM', sel: false, disc: null },
                  { t: '11:00 AM', sel: false, disc: '-15% off' },
                  { t: '1:00 PM', sel: false, disc: null },
                  { t: '2:30 PM', sel: true, disc: null },
                  { t: '4:00 PM', sel: false, disc: '-10% off' },
                  { t: '5:00 PM', sel: false, disc: null },
                ].map((slot, i) => (
                  <div key={i} style={{ background: slot.sel ? c.slotSelBg : c.slotBg, border: `1.5px solid ${slot.sel ? 'transparent' : slot.disc ? c.discBorder : c.chipBorder}`, borderRadius: 14, padding: '14px 8px', textAlign: 'center', cursor: 'pointer' }}>
                    <div style={{ fontSize: 15, fontWeight: 500, color: slot.sel ? c.slotSelText : c.slotText }}>{slot.t}</div>
                    {slot.disc && <div style={{ fontSize: 12, color: slot.sel ? c.slotSelText : c.discText, marginTop: 4 }}>{slot.disc}</div>}
                  </div>
                ))}
              </div>

              <button style={{ width: '100%', padding: '18px', background: c.btnPrimBg, color: c.btnPrimText, border: 'none', borderRadius: 16, fontFamily: "'Jost', sans-serif", fontSize: 16, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' as const, cursor: 'pointer', marginBottom: 0 }}>Confirm Booking</button>
            </div>
            <div style={{ marginTop: 8 }}><NavBar /></div>
          </div>
        )}

        {/* ── MY JOURNEY ── */}
        {screen === 'journey' && (
          <div style={{ background: c.screenBg }}>
            <div style={{ background: c.hdrBg, padding: '28px 24px 32px' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 300, color: c.hdrText, marginBottom: 6 }}>My Journey</div>
              <div style={{ fontSize: 15, color: c.hdrSub }}>Your personal aesthetic record</div>
              <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
                {[{ n: '14', l: 'Treatments' }, { n: '18 mo', l: 'Member' }, { n: 'Platinum', l: 'Status' }].map((s, i) => (
                  <div key={i} style={{ background: c.rstatBg, borderRadius: 16, padding: '14px 16px', flex: 1 }}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 400, color: c.hdrText }}>{s.n}</div>
                    <div style={{ fontSize: 13, color: c.hdrSub, marginTop: 3 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: '24px 20px 0' }}>
              {/* Recommendation */}
              <div style={{ background: c.recBg, borderRadius: 20, padding: '22px', marginBottom: 24, border: c.cardBorder }}>
                <div style={{ fontSize: 12, color: c.recSub, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>Doctor&apos;s Recommendation</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 300, color: c.recText, marginBottom: 10 }}>Time for your Botox refresh</div>
                <div style={{ fontSize: 15, color: c.recSub, lineHeight: 1.6, marginBottom: 18 }}>Based on your last treatment on 12 Feb, Dr. Al-Khatib recommends scheduling within the next 2–3 weeks for optimal results.</div>
                <button onClick={() => setScreen('book')} style={{ padding: '14px 24px', background: c.recBtn, color: c.recBtnText, border: 'none', borderRadius: 12, fontFamily: "'Jost', sans-serif", fontSize: 15, fontWeight: 500, cursor: 'pointer' }}>Book Now</button>
              </div>

              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, color: c.dark, marginBottom: 20 }}>Treatment History</div>

              {[
                { date: '8 April 2025', tx: 'Hydrafacial MD Elite', dr: 'Dr. Sarah Al-Khatib', note: 'Excellent response to treatment. Skin hydration levels improved significantly. Monthly sessions recommended for maintenance.', tags: ['Hydration', 'Glow Protocol'], gold: ['Repeat recommended'] },
                { date: '12 February 2025', tx: 'Botox — Forehead & Glabella', dr: 'Dr. Sarah Al-Khatib', note: '20 units administered. Natural result achieved. Patient highly satisfied. Next session in 4–5 months.', tags: ['20 units', 'Natural finish'], gold: ['Due May 2025'] },
                { date: '8 January 2025', tx: 'Lip Filler — 1ml Juvederm', dr: 'Dr. Nora Al-Ayed', note: '1ml Juvederm Ultra for natural volume enhancement. Excellent result, no bruising.', tags: ['1ml Juvederm'], gold: ['12 months duration'] },
              ].map((item, i, arr) => (
                <div key={i} style={{ display: 'flex', gap: 18, marginBottom: 18 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 5 }}>
                    <div style={{ width: 14, height: 14, borderRadius: '50%', background: c.timelineDot, flexShrink: 0 }} />
                    {i < arr.length - 1 && <div style={{ width: 2, flex: 1, background: c.timelineLine, marginTop: 8, minHeight: 28 }} />}
                  </div>
                  <div style={{ flex: 1, background: c.cardBg, borderRadius: 18, padding: '20px', border: c.cardBorder, marginBottom: 4 }}>
                    <div style={{ fontSize: 13, color: c.muted, marginBottom: 6 }}>{item.date}</div>
                    <div style={{ fontSize: 18, fontWeight: 500, color: c.dark, marginBottom: 4 }}>{item.tx}</div>
                    <div style={{ fontSize: 14, color: c.muted, marginBottom: 14 }}>{item.dr}</div>
                    <div style={{ fontSize: 14, color: c.noteText, lineHeight: 1.6, padding: '12px 14px', background: c.noteBg, borderRadius: 12, marginBottom: 12 }}>&ldquo;{item.note}&rdquo;</div>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {item.tags.map((tag, j) => <span key={j} style={{ padding: '5px 12px', background: c.tagBg, borderRadius: 20, fontSize: 13, color: c.tagText, fontWeight: 500 }}>{tag}</span>)}
                      {item.gold.map((tag, j) => <span key={j} style={{ padding: '5px 12px', background: c.tagGoldBg, borderRadius: 20, fontSize: 13, color: c.tagGoldText, fontWeight: 500 }}>{tag}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <NavBar />
          </div>
        )}
      </div>
    </div>
  );
}
