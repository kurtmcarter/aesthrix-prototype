'use client';
import { useState } from 'react';

type Theme = 1 | 2 | 3;
type Screen = 'home' | 'book' | 'results';

const themes = {
  1: {
    phoneBg: '#FAF7F2', statusBg: '#FAF7F2', statusText: '#2C2118',
    headerBg: 'linear-gradient(160deg, #E8D5C4 0%, #D4B896 100%)',
    greetingColor: '#6B5744', nameColor: '#2C2118', taglineColor: '#6B5744',
    loyaltyBg: 'rgba(255,255,255,0.5)', loyaltyBorder: 'rgba(184,150,90,0.3)',
    loyaltyTextColor: '#6B5744', loyaltyDot: '#B8965A', loyaltyPtsColor: '#B8965A',
    apptTopBg: '#C4856A', apptLabelColor: 'rgba(255,255,255,0.8)',
    apptBadgeBg: 'rgba(255,255,255,0.25)', apptBadgeColor: '#fff',
    apptCardBg: '#fff', apptTreatmentColor: '#2C2118', apptProviderColor: '#9B8778',
    apptIconBg: '#F0DDD5', apptIconColor: '#C4856A',
    apptDetailColor: '#2C2118', apptDetailSubColor: '#9B8778',
    btnConfirmBg: '#2C2118', btnConfirmColor: '#fff',
    btnRescheduleBg: 'transparent', btnRescheduleColor: '#6B5744', btnRescheduleBorder: '#C9B99A',
    sectionTitleColor: '#2C2118', sectionLinkColor: '#C4856A',
    chipBg: '#fff', chipBorder: '#F3EDE3', chipIconBg: '#F0DDD5', chipIconColor: '#C4856A',
    chipNameColor: '#2C2118', chipDateColor: '#9B8778', chipBadgeBg: '#F5EDD8', chipBadgeColor: '#B8965A',
    qaBg: '#fff', qaBorder: '#F3EDE3', qaLabelColor: '#2C2118', qaSubColor: '#9B8778',
    navBg: 'rgba(250,247,242,0.95)', navBorder: '#F3EDE3',
    navActiveColor: '#C4856A', navInactiveColor: '#9B8778',
    accent: '#C4856A', accentLight: '#F0DDD5', gold: '#B8965A', goldLight: '#F5EDD8',
    dark: '#2C2118', muted: '#9B8778', screenBg: '#FAF7F2',
    bookTitleColor: '#2C2118', stepDoneBg: '#C4856A', stepCurrentBg: '#2C2118',
    stepTodoBg: '#F3EDE3', stepTodoColor: '#9B8778',
    treatmentOptBg: '#fff', treatmentOptSelectedBg: '#F0DDD5', treatmentOptSelectedBorder: '#C4856A',
    toNameColor: '#2C2118', toDurationColor: '#9B8778', toPriceColor: '#C4856A',
    providerOptBg: '#fff', providerAvatarBg: '#F0DDD5', providerAvatarColor: '#C4856A',
    providerNameColor: '#2C2118', providerTitleColor: '#9B8778',
    providerRatingColor: '#B8965A', providerCheckColor: '#C4856A',
    slotBg: '#fff', slotColor: '#2C2118', slotSelectedBg: '#2C2118', slotSelectedColor: '#fff',
    slotDiscountBorder: '#B8965A', slotDiscountBadgeColor: '#B8965A',
    btnBookBg: '#2C2118', btnBookColor: '#fff',
    resultsHeaderBg: 'linear-gradient(160deg, #E8D5C4 0%, #D4B896 100%)',
    resultsTitleColor: '#2C2118', resultsSubColor: '#6B5744',
    rstatBg: 'rgba(255,255,255,0.5)', rstatNumColor: '#2C2118', rstatLabelColor: '#9B8778',
    recCardBg: '#2C2118', recLabelColor: '#C9B99A', recTitleColor: '#fff', recTextColor: '#C9B99A',
    btnRecBg: '#C4856A', btnRecColor: '#fff',
    timelineDot: '#C4856A', timelineStem: '#F3EDE3',
    tcCardBg: '#fff', tcDateColor: '#9B8778', tcTreatmentColor: '#2C2118', tcProviderColor: '#9B8778',
    tcNotesBg: '#FAF7F2', tcNotesColor: '#6B5744',
    tcTagBg: '#F0DDD5', tcTagColor: '#C4856A', tcTagGoldBg: '#F5EDD8', tcTagGoldColor: '#B8965A',
    cardBorder: 'none', themeName: 'Warm Luxury',
  },
  2: {
    phoneBg: '#F0F4F8', statusBg: '#1E3A5F', statusText: '#fff',
    headerBg: '#1E3A5F',
    greetingColor: 'rgba(255,255,255,0.6)', nameColor: '#fff', taglineColor: 'rgba(255,255,255,0.5)',
    loyaltyBg: 'rgba(255,255,255,0.1)', loyaltyBorder: 'rgba(143,168,192,0.3)',
    loyaltyTextColor: 'rgba(255,255,255,0.7)', loyaltyDot: '#8FA8C0', loyaltyPtsColor: '#8FA8C0',
    apptTopBg: '#1E3A5F', apptLabelColor: 'rgba(255,255,255,0.7)',
    apptBadgeBg: 'rgba(255,255,255,0.15)', apptBadgeColor: '#fff',
    apptCardBg: '#fff', apptTreatmentColor: '#1E3A5F', apptProviderColor: '#888',
    apptIconBg: '#E8EFF7', apptIconColor: '#1E3A5F',
    apptDetailColor: '#1E3A5F', apptDetailSubColor: '#999',
    btnConfirmBg: '#1E3A5F', btnConfirmColor: '#fff',
    btnRescheduleBg: 'transparent', btnRescheduleColor: '#1E3A5F', btnRescheduleBorder: '#8FA8C0',
    sectionTitleColor: '#1E3A5F', sectionLinkColor: '#1E3A5F',
    chipBg: '#fff', chipBorder: '#E8EFF7', chipIconBg: '#E8EFF7', chipIconColor: '#1E3A5F',
    chipNameColor: '#1E3A5F', chipDateColor: '#999', chipBadgeBg: '#E8EFF7', chipBadgeColor: '#1E3A5F',
    qaBg: '#fff', qaBorder: '#E8EFF7', qaLabelColor: '#1E3A5F', qaSubColor: '#999',
    navBg: 'rgba(240,244,248,0.95)', navBorder: '#E8EFF7',
    navActiveColor: '#1E3A5F', navInactiveColor: '#aaa',
    accent: '#1E3A5F', accentLight: '#E8EFF7', gold: '#8FA8C0', goldLight: '#E8EFF7',
    dark: '#1E3A5F', muted: '#999', screenBg: '#F0F4F8',
    bookTitleColor: '#1E3A5F', stepDoneBg: '#1E3A5F', stepCurrentBg: '#1E3A5F',
    stepTodoBg: '#E8EFF7', stepTodoColor: '#aaa',
    treatmentOptBg: '#fff', treatmentOptSelectedBg: '#E8EFF7', treatmentOptSelectedBorder: '#1E3A5F',
    toNameColor: '#1E3A5F', toDurationColor: '#999', toPriceColor: '#1E3A5F',
    providerOptBg: '#fff', providerAvatarBg: '#E8EFF7', providerAvatarColor: '#1E3A5F',
    providerNameColor: '#1E3A5F', providerTitleColor: '#999',
    providerRatingColor: '#B8965A', providerCheckColor: '#1E3A5F',
    slotBg: '#fff', slotColor: '#1E3A5F', slotSelectedBg: '#1E3A5F', slotSelectedColor: '#fff',
    slotDiscountBorder: '#8FA8C0', slotDiscountBadgeColor: '#8FA8C0',
    btnBookBg: '#1E3A5F', btnBookColor: '#fff',
    resultsHeaderBg: '#1E3A5F',
    resultsTitleColor: '#fff', resultsSubColor: 'rgba(255,255,255,0.6)',
    rstatBg: 'rgba(255,255,255,0.1)', rstatNumColor: '#fff', rstatLabelColor: 'rgba(255,255,255,0.6)',
    recCardBg: '#1E3A5F', recLabelColor: '#8FA8C0', recTitleColor: '#fff', recTextColor: '#8FA8C0',
    btnRecBg: '#8FA8C0', btnRecColor: '#1E3A5F',
    timelineDot: '#1E3A5F', timelineStem: '#E8EFF7',
    tcCardBg: '#fff', tcDateColor: '#999', tcTreatmentColor: '#1E3A5F', tcProviderColor: '#999',
    tcNotesBg: '#F0F4F8', tcNotesColor: '#1E3A5F',
    tcTagBg: '#E8EFF7', tcTagColor: '#1E3A5F', tcTagGoldBg: '#E8EFF7', tcTagGoldColor: '#8FA8C0',
    cardBorder: 'none', themeName: 'Clinical Prestige',
  },
  3: {
    phoneBg: '#1A1A1F', statusBg: '#1A1A1F', statusText: '#fff',
    headerBg: 'linear-gradient(160deg, #242429 0%, #1A1A1F 100%)',
    greetingColor: 'rgba(255,255,255,0.4)', nameColor: '#fff', taglineColor: 'rgba(255,255,255,0.35)',
    loyaltyBg: 'rgba(201,168,76,0.1)', loyaltyBorder: 'rgba(201,168,76,0.25)',
    loyaltyTextColor: 'rgba(255,255,255,0.6)', loyaltyDot: '#C9A84C', loyaltyPtsColor: '#C9A84C',
    apptTopBg: 'linear-gradient(135deg, #2A2A1A 0%, #242420 100%)',
    apptLabelColor: 'rgba(201,168,76,0.7)',
    apptBadgeBg: 'rgba(201,168,76,0.15)', apptBadgeColor: '#C9A84C',
    apptCardBg: '#242429', apptTreatmentColor: '#fff', apptProviderColor: '#8B8B96',
    apptIconBg: 'rgba(201,168,76,0.1)', apptIconColor: '#C9A84C',
    apptDetailColor: 'rgba(255,255,255,0.8)', apptDetailSubColor: '#8B8B96',
    btnConfirmBg: '#C9A84C', btnConfirmColor: '#1A1A1F',
    btnRescheduleBg: 'transparent', btnRescheduleColor: 'rgba(255,255,255,0.6)', btnRescheduleBorder: 'rgba(255,255,255,0.15)',
    sectionTitleColor: '#fff', sectionLinkColor: '#C9A84C',
    chipBg: '#242429', chipBorder: 'rgba(255,255,255,0.07)', chipIconBg: 'rgba(201,168,76,0.1)', chipIconColor: '#C9A84C',
    chipNameColor: '#fff', chipDateColor: '#8B8B96', chipBadgeBg: 'rgba(201,168,76,0.1)', chipBadgeColor: '#C9A84C',
    qaBg: '#242429', qaBorder: 'rgba(255,255,255,0.07)', qaLabelColor: '#fff', qaSubColor: '#8B8B96',
    navBg: 'rgba(26,26,31,0.97)', navBorder: 'rgba(255,255,255,0.07)',
    navActiveColor: '#C9A84C', navInactiveColor: 'rgba(255,255,255,0.3)',
    accent: '#C9A84C', accentLight: 'rgba(201,168,76,0.1)', gold: '#C9A84C', goldLight: 'rgba(201,168,76,0.15)',
    dark: '#C9A84C', muted: '#8B8B96', screenBg: '#1A1A1F',
    bookTitleColor: '#fff', stepDoneBg: '#C9A84C', stepCurrentBg: '#C9A84C',
    stepTodoBg: '#242429', stepTodoColor: '#8B8B96',
    treatmentOptBg: '#242429', treatmentOptSelectedBg: 'rgba(201,168,76,0.1)', treatmentOptSelectedBorder: '#C9A84C',
    toNameColor: '#fff', toDurationColor: '#8B8B96', toPriceColor: '#C9A84C',
    providerOptBg: '#242429', providerAvatarBg: 'rgba(201,168,76,0.1)', providerAvatarColor: '#C9A84C',
    providerNameColor: '#fff', providerTitleColor: '#8B8B96',
    providerRatingColor: '#C9A84C', providerCheckColor: '#C9A84C',
    slotBg: '#242429', slotColor: 'rgba(255,255,255,0.8)', slotSelectedBg: '#C9A84C', slotSelectedColor: '#1A1A1F',
    slotDiscountBorder: '#C9A84C', slotDiscountBadgeColor: '#C9A84C',
    btnBookBg: '#C9A84C', btnBookColor: '#1A1A1F',
    resultsHeaderBg: 'linear-gradient(160deg, #242429 0%, #1A1A1F 100%)',
    resultsTitleColor: '#fff', resultsSubColor: 'rgba(255,255,255,0.4)',
    rstatBg: 'rgba(255,255,255,0.05)', rstatNumColor: '#fff', rstatLabelColor: '#8B8B96',
    recCardBg: '#242429', recLabelColor: '#C9A84C', recTitleColor: '#fff', recTextColor: '#8B8B96',
    btnRecBg: '#C9A84C', btnRecColor: '#1A1A1F',
    timelineDot: '#C9A84C', timelineStem: 'rgba(255,255,255,0.07)',
    tcCardBg: '#242429', tcDateColor: '#8B8B96', tcTreatmentColor: '#fff', tcProviderColor: '#8B8B96',
    tcNotesBg: '#1A1A1F', tcNotesColor: 'rgba(255,255,255,0.6)',
    tcTagBg: 'rgba(201,168,76,0.1)', tcTagColor: '#C9A84C',
    tcTagGoldBg: 'rgba(201,168,76,0.15)', tcTagGoldColor: '#C9A84C',
    cardBorder: '1px solid rgba(201,168,76,0.15)', themeName: 'Members Club',
  },
};

export default function AesthrixPrototype() {
  const [theme, setTheme] = useState<Theme>(1);
  const [screen, setScreen] = useState<Screen>('home');
  const c = themes[theme];

  const navItems = [
    { icon: '🏠', label: 'Home', s: 'home' as Screen },
    { icon: '📅', label: 'Book', s: 'book' as Screen },
    { icon: '✨', label: 'Journey', s: 'results' as Screen },
    { icon: '👤', label: 'Profile', s: 'home' as Screen },
  ];

  const BottomNav = () => (
    <div style={{ background: c.navBg, borderTop: `1px solid ${c.navBorder}`, display: 'flex', justifyContent: 'space-around', padding: '12px 0 28px', marginTop: 8 }}>
      {navItems.map((n, i) => (
        <div key={i} onClick={() => setScreen(n.s)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
          <span style={{ fontSize: 20 }}>{n.icon}</span>
          <span style={{ fontSize: 9, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: n.s === screen && i < 3 ? c.navActiveColor : c.navInactiveColor }}>{n.label}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', background: '#F5F5F0', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px 16px 48px', fontFamily: "'Jost', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap'); *{box-sizing:border-box;} ::-webkit-scrollbar{display:none;} .scroll-x{overflow-x:auto;display:flex;gap:12px;padding:0 20px 4px;}`}</style>

      <div style={{ marginBottom: 24, textAlign: 'center' }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 300, color: '#2C2118', letterSpacing: '0.14em' }}>AESTHRIX</div>
        <div style={{ fontSize: 10, color: '#9B8778', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 2 }}>Patient Experience · Interactive Prototype</div>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
        {([1, 2, 3] as Theme[]).map(tid => (
          <button key={tid} onClick={() => setTheme(tid)} style={{ padding: '7px 16px', borderRadius: 20, border: `1px solid ${theme === tid ? themes[tid].accent : '#ccc'}`, fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' as const, cursor: 'pointer', background: theme === tid ? themes[tid].accent : 'transparent', color: theme === tid ? (tid === 3 ? '#1A1A1F' : '#fff') : '#888', transition: 'all 0.2s' }}>{themes[tid].themeName}</button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        {([['home', 'Home'], ['book', 'Book'], ['results', 'My Journey']] as [Screen, string][]).map(([s, label]) => (
          <button key={s} onClick={() => setScreen(s)} style={{ padding: '6px 14px', borderRadius: 20, border: `1px solid ${screen === s ? c.dark : '#ccc'}`, fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.06em', cursor: 'pointer', background: screen === s ? c.dark : 'transparent', color: screen === s ? (theme === 3 ? '#1A1A1F' : '#fff') : '#888', transition: 'all 0.2s' }}>{label}</button>
        ))}
      </div>

      <div style={{ width: '100%', maxWidth: 390, borderRadius: 44, overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.18)', background: c.phoneBg }}>

        <div style={{ background: c.statusBg, padding: '14px 24px 8px', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 13, fontWeight: 500, color: c.statusText }}>9:41</span>
          <span style={{ fontSize: 12, color: c.statusText, opacity: 0.5, letterSpacing: 2 }}>●●● ▌▌</span>
        </div>

        {screen === 'home' && (
          <div style={{ background: c.screenBg }}>
            <div style={{ background: c.headerBg, padding: '20px 24px 28px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', right: -20, top: -20, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
              <div style={{ fontSize: 11, color: c.greetingColor, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 4 }}>Welcome back</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 30, fontWeight: 300, color: c.nameColor, lineHeight: 1.1, marginBottom: 4 }}><em>Layla</em> Al-Rashidi</div>
              <div style={{ fontSize: 12, color: c.taglineColor, fontWeight: 300 }}>Platinum Member · Anova Aesthetic Clinic</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: c.loyaltyBg, border: `1px solid ${c.loyaltyBorder}`, borderRadius: 20, padding: '6px 12px', marginTop: 14 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: c.loyaltyDot }} />
                <span style={{ fontSize: 11, fontWeight: 500, color: c.loyaltyTextColor }}><span style={{ color: c.loyaltyPtsColor }}>2,450</span> loyalty points</span>
              </div>
            </div>

            <div style={{ margin: '20px 20px 0', background: c.apptCardBg, borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', border: c.cardBorder }}>
              <div style={{ background: c.apptTopBg, padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.apptLabelColor }}>Next Appointment</span>
                <span style={{ background: c.apptBadgeBg, borderRadius: 10, padding: '3px 10px', fontSize: 10, fontWeight: 500, color: c.apptBadgeColor }}>In 3 days</span>
              </div>
              <div style={{ padding: '16px 18px' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: c.apptTreatmentColor, marginBottom: 4 }}>Hydrafacial MD Elite</div>
                <div style={{ fontSize: 12, color: c.apptProviderColor, marginBottom: 14 }}>Dr. Sarah Al-Khatib · Senior Aesthetician</div>
                <div style={{ display: 'flex', gap: 16 }}>
                  {[{ icon: '📅', text: 'Tue, 20 May', sub: 'Date' }, { icon: '⏱', text: '2:30 PM', sub: '60 min' }].map((d, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 30, height: 30, borderRadius: 8, background: c.apptIconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>{d.icon}</div>
                      <div>
                        <div style={{ fontSize: 12, color: c.apptDetailColor }}>{d.text}</div>
                        <div style={{ fontSize: 10, color: c.apptDetailSubColor }}>{d.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8, padding: '0 18px 16px' }}>
                <button style={{ flex: 1, padding: 10, background: c.btnConfirmBg, color: c.btnConfirmColor, border: 'none', borderRadius: 10, fontFamily: "'Jost', sans-serif", fontSize: 12, fontWeight: 500, cursor: 'pointer' }}>Confirm Attendance</button>
                <button style={{ flex: 1, padding: 10, background: c.btnRescheduleBg, color: c.btnRescheduleColor, border: `1px solid ${c.btnRescheduleBorder}`, borderRadius: 10, fontFamily: "'Jost', sans-serif", fontSize: 12, cursor: 'pointer' }}>Reschedule</button>
              </div>
            </div>

            <div style={{ padding: '20px 20px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, color: c.sectionTitleColor }}>Your Treatments</span>
              <span style={{ fontSize: 11, color: c.sectionLinkColor, fontWeight: 500, cursor: 'pointer' }}>View all</span>
            </div>
            <div className="scroll-x">
              {[{ icon: '✨', name: 'Botox', date: 'Last: 12 Feb', badge: 'Due soon' }, { icon: '💧', name: 'Filler', date: 'Last: 8 Jan', badge: 'On track' }, { icon: '☀️', name: 'Laser', date: 'Last: 3 Apr', badge: 'Due soon' }].map((chip, i) => (
                <div key={i} style={{ flexShrink: 0, background: c.chipBg, border: `1px solid ${c.chipBorder}`, borderRadius: 16, padding: '12px 16px', minWidth: 130 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 10, background: c.chipIconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, marginBottom: 8 }}>{chip.icon}</div>
                  <div style={{ fontSize: 12, fontWeight: 500, color: c.chipNameColor, marginBottom: 2 }}>{chip.name}</div>
                  <div style={{ fontSize: 10, color: c.chipDateColor }}>{chip.date}</div>
                  <div style={{ display: 'inline-block', marginTop: 6, padding: '2px 8px', background: c.chipBadgeBg, borderRadius: 8, fontSize: 10, color: c.chipBadgeColor, fontWeight: 500 }}>{chip.badge}</div>
                </div>
              ))}
            </div>

            <div style={{ padding: '20px 20px 12px' }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, color: c.sectionTitleColor }}>Quick Actions</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, padding: '0 20px' }}>
              {[
                { icon: '📅', iconBg: c.accentLight, label: 'Book Treatment', sub: 'Browse all services', action: () => setScreen('book') },
                { icon: '✨', iconBg: c.goldLight, label: 'My Journey', sub: 'History & results', action: () => setScreen('results') },
                { icon: '🎁', iconBg: '#EDF4F0', label: 'Rewards', sub: '2,450 points', action: undefined },
                { icon: '💬', iconBg: '#F0EDF5', label: 'Aftercare', sub: 'Post-treatment tips', action: undefined },
              ].map((qa, i) => (
                <div key={i} onClick={qa.action} style={{ background: c.qaBg, border: `1px solid ${c.qaBorder}`, borderRadius: 16, padding: 16, display: 'flex', flexDirection: 'column', gap: 8, cursor: 'pointer' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: qa.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{qa.icon}</div>
                  <div style={{ fontSize: 12, fontWeight: 500, color: c.qaLabelColor }}>{qa.label}</div>
                  <div style={{ fontSize: 10, color: c.qaSubColor }}>{qa.sub}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20 }}><BottomNav /></div>
          </div>
        )}

        {screen === 'book' && (
          <div style={{ background: c.screenBg }}>
            <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div onClick={() => setScreen('home')} style={{ width: 36, height: 36, borderRadius: 10, background: c.chipBg, border: `1px solid ${c.chipBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, cursor: 'pointer', color: c.muted }}>←</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, color: c.bookTitleColor }}>Book a Treatment</div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', padding: '0 20px 20px' }}>
              {[1, 2, 3, 4].map((step, i) => (
                <div key={step} style={{ display: 'flex', alignItems: 'center', flex: i < 3 ? 1 : 'none' }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, background: step === 1 ? c.stepCurrentBg : c.stepTodoBg, color: step === 1 ? '#fff' : c.stepTodoColor }}>{step}</div>
                  {i < 3 && <div style={{ flex: 1, height: 1, background: c.timelineStem }} />}
                </div>
              ))}
            </div>

            <div style={{ padding: '0 20px 20px' }}>
              <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: c.muted, marginBottom: 12 }}>Choose Treatment</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {[{ icon: '✨', name: 'Botox', dur: '30–45 min', price: 'SAR 800+', sel: true }, { icon: '💧', name: 'Dermal Filler', dur: '45–60 min', price: 'SAR 1,200+', sel: false }, { icon: '☀️', name: 'Laser Resurfacing', dur: '60 min', price: 'SAR 1,800+', sel: false }, { icon: '🌊', name: 'Hydrafacial', dur: '60–90 min', price: 'SAR 650+', sel: false }].map((t2, i) => (
                  <div key={i} style={{ background: t2.sel ? c.treatmentOptSelectedBg : c.treatmentOptBg, border: `1.5px solid ${t2.sel ? c.treatmentOptSelectedBorder : 'transparent'}`, borderRadius: 16, padding: 14, cursor: 'pointer' }}>
                    <div style={{ fontSize: 22, marginBottom: 8 }}>{t2.icon}</div>
                    <div style={{ fontSize: 12, fontWeight: 500, color: c.toNameColor, marginBottom: 2 }}>{t2.name}</div>
                    <div style={{ fontSize: 10, color: c.toDurationColor }}>{t2.dur}</div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: c.toPriceColor, marginTop: 6 }}>{t2.price}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: '0 20px 20px' }}>
              <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: c.muted, marginBottom: 12 }}>Choose Provider</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[{ initials: 'SK', name: 'Dr. Sarah Al-Khatib', title: 'Senior Aesthetician · 8 yrs', rating: '★★★★★ 4.9', sel: true }, { initials: 'NA', name: 'Dr. Nora Al-Ayed', title: 'Cosmetic Dermatologist · 6 yrs', rating: '★★★★★ 4.8', sel: false }].map((p, i) => (
                  <div key={i} style={{ background: c.providerOptBg, border: `1.5px solid ${p.sel ? c.providerCheckColor : 'transparent'}`, borderRadius: 14, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: c.providerAvatarBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cormorant Garamond', serif", fontSize: 16, color: c.providerAvatarColor, fontWeight: 500, flexShrink: 0 }}>{p.initials}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 500, color: c.providerNameColor }}>{p.name}</div>
                      <div style={{ fontSize: 11, color: c.providerTitleColor }}>{p.title}</div>
                      <div style={{ fontSize: 11, color: c.providerRatingColor, marginTop: 2 }}>{p.rating}</div>
                    </div>
                    {p.sel && <span style={{ fontSize: 20, color: c.providerCheckColor }}>✓</span>}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: '0 20px 20px' }}>
              <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: c.muted, marginBottom: 12 }}>Choose Time · Thu 22 May</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
                {[{ time: '10:00 AM', sel: false, disc: null }, { time: '11:00 AM', sel: false, disc: '-15% off' }, { time: '1:00 PM', sel: false, disc: null }, { time: '2:30 PM', sel: true, disc: null }, { time: '4:00 PM', sel: false, disc: '-10% off' }, { time: '5:00 PM', sel: false, disc: null }].map((slot, i) => (
                  <div key={i} style={{ background: slot.sel ? c.slotSelectedBg : c.slotBg, border: `1.5px solid ${slot.sel ? c.slotSelectedBg : slot.disc ? c.slotDiscountBorder : 'transparent'}`, borderRadius: 10, padding: '10px 6px', textAlign: 'center', cursor: 'pointer' }}>
                    <div style={{ fontSize: 12, fontWeight: 500, color: slot.sel ? c.slotSelectedColor : c.slotColor }}>{slot.time}</div>
                    {slot.disc && <div style={{ fontSize: 9, color: c.slotDiscountBadgeColor, marginTop: 2 }}>{slot.disc}</div>}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: '0 20px 0' }}>
              <button style={{ width: '100%', padding: 16, background: c.btnBookBg, color: c.btnBookColor, border: 'none', borderRadius: 14, fontFamily: "'Jost', sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' as const, cursor: 'pointer' }}>Confirm Booking</button>
            </div>
            <div style={{ marginTop: 8 }}><BottomNav /></div>
          </div>
        )}

        {screen === 'results' && (
          <div style={{ background: c.screenBg }}>
            <div style={{ background: c.resultsHeaderBg, padding: '20px 20px 24px', borderBottom: theme === 3 ? '1px solid rgba(201,168,76,0.15)' : 'none' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 300, color: c.resultsTitleColor, marginBottom: 4 }}>My Journey</div>
              <div style={{ fontSize: 12, color: c.resultsSubColor }}>Your personal aesthetic record</div>
              <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
                {[{ num: '14', label: 'Treatments' }, { num: '18 mo', label: 'Member' }, { num: 'Platinum', label: 'Status' }].map((s, i) => (
                  <div key={i} style={{ background: c.rstatBg, borderRadius: 12, padding: '10px 14px', flex: 1 }}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: c.rstatNumColor }}>{s.num}</div>
                    <div style={{ fontSize: 10, color: c.rstatLabelColor, marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ margin: '16px 20px 0', background: c.recCardBg, borderRadius: 16, padding: '16px 18px', border: c.cardBorder }}>
              <div style={{ fontSize: 10, color: c.recLabelColor, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>Doctor&apos;s Recommendation</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 300, color: c.recTitleColor, marginBottom: 6 }}>Time for your Botox refresh</div>
              <div style={{ fontSize: 11, color: c.recTextColor, lineHeight: 1.6, marginBottom: 12 }}>Based on your last treatment on 12 Feb, Dr. Al-Khatib recommends scheduling your next session within the next 2–3 weeks for optimal results.</div>
              <button onClick={() => setScreen('book')} style={{ padding: '10px 20px', background: c.btnRecBg, color: c.btnRecColor, border: 'none', borderRadius: 10, fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: 500, cursor: 'pointer' }}>Book Now</button>
            </div>

            <div style={{ padding: '20px 20px 0' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, color: c.sectionTitleColor, marginBottom: 16 }}>Treatment History</div>
              {[
                { date: '8 April 2025', treatment: 'Hydrafacial MD Elite', provider: 'Dr. Sarah Al-Khatib', note: 'Excellent response to treatment. Skin hydration levels improved significantly. Recommended monthly sessions for maintenance.', tags: ['Hydration', 'Glow Protocol'], goldTags: ['Repeat recommended'] },
                { date: '12 February 2025', treatment: 'Botox — Forehead & Glabella', provider: 'Dr. Sarah Al-Khatib', note: '20 units administered. Natural result achieved. Patient highly satisfied. Next session in 4–5 months.', tags: ['20 units', 'Natural finish'], goldTags: ['Due May 2025'] },
                { date: '8 January 2025', treatment: 'Lip Filler — 1ml Juvederm', provider: 'Dr. Nora Al-Ayed', note: '1ml Juvederm Ultra administered for natural volume enhancement. Excellent result, no bruising.', tags: ['1ml Juvederm'], goldTags: ['12 months duration'] },
              ].map((item, i, arr) => (
                <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 16 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: c.timelineDot, flexShrink: 0, marginTop: 4 }} />
                    {i < arr.length - 1 && <div style={{ width: 1, flex: 1, background: c.timelineStem, minHeight: 20, marginTop: 4 }} />}
                  </div>
                  <div style={{ flex: 1, background: c.tcCardBg, borderRadius: 14, padding: 14, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', border: c.cardBorder, marginBottom: 4 }}>
                    <div style={{ fontSize: 10, color: c.tcDateColor, marginBottom: 4 }}>{item.date}</div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: c.tcTreatmentColor, marginBottom: 4 }}>{item.treatment}</div>
                    <div style={{ fontSize: 11, color: c.tcProviderColor, marginBottom: 8 }}>{item.provider}</div>
                    <div style={{ fontSize: 11, color: c.tcNotesColor, lineHeight: 1.5, padding: 8, background: c.tcNotesBg, borderRadius: 8 }}>&ldquo;{item.note}&rdquo;</div>
                    <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
                      {item.tags.map((tag, j) => <span key={j} style={{ padding: '3px 10px', background: c.tcTagBg, borderRadius: 20, fontSize: 10, color: c.tcTagColor, fontWeight: 500 }}>{tag}</span>)}
                      {item.goldTags.map((tag, j) => <span key={j} style={{ padding: '3px 10px', background: c.tcTagGoldBg, borderRadius: 20, fontSize: 10, color: c.tcTagGoldColor, fontWeight: 500 }}>{tag}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <BottomNav />
          </div>
        )}
      </div>

      <div style={{ marginTop: 24, fontSize: 11, color: '#9B8778', letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'center' }}>
        Cloudsoft Labs Inc. · Prototype · Not for distribution
      </div>
    </div>
  );
}
