import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Swords, Shield, Sparkles, Trophy, Mail, ExternalLink, Zap, Flame, BookOpen, ChevronRight, Star, Skull, Eye, Heart, Lock } from 'lucide-react';
import './styles.css';

const quests = [
  { title: 'AI SYSTEMS LAB', type: 'MAIN QUEST', tag: 'S-RANK', desc: 'Forge a production inference gateway. Retrieval, caching, failover — the whole arsenal.', reward: 'LEGENDARY', color: 'gold', progress: 88, icon: '/assets/icons/icon-gateway.svg', rank: 'S' },
  { title: 'LIBRIS', type: 'SIDE QUEST', tag: 'A-RANK', desc: 'Enterprise library backend. Layered architecture, SSO, zero downtime.', reward: 'RARE', color: 'red', progress: 72, icon: '/assets/icons/icon-libris.svg', rank: 'A' },
  { title: 'ATHENAEUM AI', type: 'SIDE QUEST', tag: 'B-RANK', desc: 'Turn forgotten PDFs into adaptive study runs, quizzes, and memory.', reward: 'EPIC', color: 'blue', progress: 64, icon: '/assets/icons/icon-book.svg', rank: 'B' }
];
const runes = [
  { label: 'AI', icon: '/assets/icons/icon-gateway.svg' },
  { label: 'LIB', icon: '/assets/icons/icon-libris.svg' },
  { label: 'DATA', icon: '/assets/icons/icon-leaf.svg' },
  { label: 'BOOK', icon: '/assets/icons/icon-book.svg' },
  { label: 'PY' }, { label: 'TS' }, { label: 'DB' }, { label: 'API' }
];
const skillTree = [
  { name: 'SYSTEMS FORGE', level: 88, max: 100, icon: '/assets/icons/icon-node-graph.svg', unlocked: true },
  { name: 'DATA ALCHEMY', level: 72, max: 100, icon: '/assets/icons/icon-leaf.svg', unlocked: true },
  { name: 'VISION CRAFT', level: 64, max: 100, icon: '/assets/icons/icon-orbit.svg', unlocked: true },
  { name: 'BATTLE TACTICS', level: 45, max: 100, icon: '/assets/icons/icon-pulse.svg', unlocked: false }
];
const achievements = [
  { icon: Flame, label: 'QUESTS SHIPPED', value: '8+' },
  { icon: Shield, label: 'RESEARCH TRACKS', value: '4' },
  { icon: BookOpen, label: 'PROBLEMS SOLVED', value: '400+' },
  { icon: Trophy, label: 'CODEVITA RANK', value: '3,633' }
];

function App() {
  const [active, setActive] = useState('overview');
  const [claimed, setClaimed] = useState(false);
  const [hp, setHp] = useState(92);
  const [mp, setMp] = useState(78);
  const [stamina, setStamina] = useState(65);
  const [comboCount, setComboCount] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setComboCount(c => (c + 1) % 100);
    }, 50);
    return () => clearInterval(t);
  }, []);

  return <div className="app-shell">
    <div className="scanlines"/>
    <header className="topbar">
      <div className="brand"><span className="brand-mark">赤</span><span className="brand-text">CRIMSON<span>MOON</span></span></div>
      <nav>{['overview','quest log','inventory'].map(item => <button key={item} className={active === item.replace(' ','') ? 'active' : ''} onClick={() => setActive(item.replace(' ',''))}>{item.toUpperCase()}</button>)}</nav>
      <div className="online"><i/> ONLINE <span>LVL 24</span></div>
    </header>

    <main>
      {/* HERO */}
      <section className="hero">
        <img src="/assets/banner.svg" className="hero-art" alt="Crimson moon battlefield"/>
        <div className="hero-vignette"/>
        <div className="hero-slash"/>
        <div className="hero-copy">
          <div className="hero-tag"><Skull size={13}/> BOSS CHARACTER</div>
          <h1>THE <span className="glitch">CRIMSON</span><br/>MOON <span className="hero-accent">WARRIOR</span></h1>
          <p className="hero-sub">「 赤月の戦士 」 — AI systems engineer · builder of worlds that ship</p>
          <div className="hero-actions">
            <button className="primary" onClick={() => document.getElementById('quests').scrollIntoView({behavior:'smooth'})}>
              <Swords size={16}/> ENTER QUEST LOG
            </button>
            <a href="https://github.com/prathamkashyap" target="_blank" rel="noreferrer" className="ghost">
              <span className="ico-mark">◈</span> GITHUB <ExternalLink size={13}/>
            </a>
          </div>
        </div>
        <div className="hero-stamp">赤月<br/><small>AKAI TSUKI</small></div>
        <div className="hero-combo">
          <span className="combo-label">COMBO</span>
          <span className="combo-num">{String(comboCount).padStart(2,'0')}</span>
          <span className="combo-x">×</span>
        </div>
      </section>

      <img className="divider" src="/assets/divider.svg" alt=""/>

      {/* CHARACTER SHEET */}
      <section className="profile-grid" id="overview">
        <aside className="character-card">
          <div className="card-slash"/>
          <div className="portrait-frame">
            <div className="portrait-art">
              <div className="moon-disc"/>
              <div className="portrait-silhouette">
                <span className="hair"/>
                <span className="face"/>
                <span className="shoulder"/>
                <span className="blade"/>
              </div>
              <div className="petal p1">✦</div>
              <div className="petal p2">✦</div>
              <div className="petal p3">✦</div>
              <div className="portrait-scan"/>
            </div>
            <div className="level-badge"><span>24</span></div>
            <div className="rank-stamp">S</div>
          </div>
          <div className="character-name">
            <p>PLAYER CHARACTER</p>
            <h2>Pratham Kashyap</h2>
            <span className="class-tag">「 THE SYSTEMS FORGER 」</span>
          </div>

          {/* VITAL BARS */}
          <div className="vitals">
            <div className="vital-row">
              <span className="vital-label"><Heart size={11}/> HP</span>
              <div className="vital-bar hp"><i style={{width: hp+'%'}}/></div>
              <b>{hp}/100</b>
            </div>
            <div className="vital-row">
              <span className="vital-label"><Zap size={11}/> MP</span>
              <div className="vital-bar mp"><i style={{width: mp+'%'}}/></div>
              <b>{mp}/100</b>
            </div>
            <div className="vital-row">
              <span className="vital-label"><Flame size={11}/> STA</span>
              <div className="vital-bar sta"><i style={{width: stamina+'%'}}/></div>
              <b>{stamina}/100</b>
            </div>
          </div>

          {/* XP */}
          <div className="xp">
            <div><span>EXP TO NEXT</span><b>7,840 <small>/ 10,000</small></b></div>
            <div className="xp-bar"><i/></div>
          </div>

          {/* STATS */}
          <div className="stats">
            <div><span>ATK</span><b>88</b><div className="stat-pips"><i/><i/><i/><i/><i className="off"/></div></div>
            <div><span>DEF</span><b>72</b><div className="stat-pips"><i/><i/><i/><i className="off"/><i className="off"/></div></div>
            <div><span>INT</span><b>96</b><div className="stat-pips"><i/><i/><i/><i/><i/></div></div>
            <div><span>VIT</span><b>81</b><div className="stat-pips"><i/><i/><i/><i/><i className="off"/></div></div>
          </div>

          <button className="claim" onClick={() => setClaimed(!claimed)}>
            <Sparkles size={15}/> {claimed ? 'REWARD CLAIMED ✓' : 'CLAIM DAILY REWARD'}
          </button>
        </aside>

        <div className="content-column">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span/> CHARACTER RECORD</p>
              <h2>Welcome to the <em>archive.</em></h2>
            </div>
            <span className="rank">RANK <b>S</b></span>
          </div>
          <p className="intro">I take raw problems, shape them into systems, and ship the result. My favorite quests live in the space between a clever model and a product people can actually use.</p>

          <div className="notice">
            <Zap size={18}/>
            <div>
              <b>⚡ ACTIVE BUFF — END-TO-END VISION</b>
              <p>+20% build quality when owning the full lifecycle: data → model → API → product.</p>
            </div>
          </div>

          {/* SKILL TREE */}
          <div className="skill-tree">
            <p className="eyebrow"><span/> SKILL TREE</p>
            <div className="skill-grid">
              {skillTree.map((s, i) => (
                <div className={'skill-node' + (s.unlocked ? '' : ' locked')} key={s.name} style={{'--d':i}}>
                  <div className="skill-icon-wrap">
                    <img src={s.icon} alt="" className="skill-icon"/>
                    {!s.unlocked && <Lock size={16} className="lock-icon"/>}
                  </div>
                  <div className="skill-info">
                    <b>{s.name}</b>
                    <div className="skill-bar"><i style={{width: (s.level/s.max*100)+'%'}}/></div>
                    <span>{s.level}/{s.max}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RUNES */}
          <div className="runes">
            <p className="eyebrow"><span/> EQUIPPED RUNES</p>
            <div>{runes.map((r,i)=><span key={r.label} className={r.icon ? 'has-icon' : ''} style={{'--i':i}}>{r.icon ? <img src={r.icon} alt=""/> : r.label}</span>)}</div>
          </div>

          <div className="contact-row">
            <a href="mailto:pkmail2005@gmail.com"><Mail size={15}/> SEND SIGNAL</a>
            <a href="https://linkedin.com/in/prathamkashyap5" target="_blank" rel="noreferrer"><span className="ico-mark">◇</span> LINKEDIN</a>
            <a href="https://prathamkashyap.vercel.app/" target="_blank" rel="noreferrer"><ExternalLink size={15}/> PORTFOLIO</a>
          </div>
        </div>
      </section>

      <img className="divider" src="/assets/divider.svg" alt=""/>

      {/* QUEST LOG */}
      <section id="quests" className="quest-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span/> {active === 'inventory' ? 'INVENTORY' : 'ACTIVE MISSIONS'}</p>
            <h2>{active === 'inventory' ? <>Loadout <em>equipped.</em></> : <>Quest <em>log.</em></>}</h2>
          </div>
          <div className="section-meta">{active === 'overview' ? '03 ACTIVE' : active === 'questlog' ? '3 MISSIONS' : '08 ITEMS'} <ChevronRight size={15}/></div>
        </div>
        {active === 'inventory' ? (
          <div className="inventory">
            {[[ '/assets/icons/icon-gateway.svg', 'AI SYSTEMS', 'LEGENDARY' ],
              [ '/assets/icons/icon-libris.svg', 'BACKEND FORGE', 'EPIC' ],
              [ '/assets/icons/icon-leaf.svg', 'VISION CORE', 'RARE' ],
              [ '/assets/icons/icon-book.svg', 'DATA SENSE', 'RARE' ]].map(([icon,title,rarity])=>
              <div className="item" key={title}>
                <img className="item-icon" src={icon} alt=""/>
                <div><b>{title}</b><small>{rarity}</small></div>
                <span>+</span>
              </div>
            )}
          </div>
        ) : (
          <div className="quest-grid">
            {quests.map((q,i)=>
              <article className={'quest-card '+q.color} key={q.title}>
                <div className="quest-slash"/>
                <div className="quest-top">
                  <span className="quest-type">{q.type}</span>
                  <span className="quest-rank-badge">{q.rank}</span>
                </div>
                <img className="quest-icon" src={q.icon} alt=""/>
                <h3>{q.title}</h3>
                <p>{q.desc}</p>
                <div className="quest-foot">
                  <span><Trophy size={14}/> {q.reward}</span>
                  <b>{q.progress}%</b>
                </div>
                <div className="progress"><i style={{width: q.progress+'%'}}/></div>
                <a href="https://github.com/prathamkashyap" target="_blank" rel="noreferrer">INSPECT QUEST <ExternalLink size={13}/></a>
              </article>
            )}
          </div>
        )}
      </section>

      <img className="divider" src="/assets/divider.svg" alt=""/>

      {/* TROPHY ROOM */}
      <section className="achievements">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span/> TROPHY ROOM</p>
            <h2>Milestones <em>unlocked.</em></h2>
          </div>
        </div>
        <div className="achievement-grid">
          {achievements.map((a, i) => (
            <div key={i} className="achievement-cell">
              <div className="ach-icon-wrap"><a.icon size={22}/></div>
              <b>{a.value}</b>
              <span>{a.label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>

    <footer>
      <span>© 2025 CRIMSON MOON ARCHIVE</span>
      <span>「 BUILT TO RUN · NOT JUST TO DEMO 」</span>
      <span>STATUS: <i/> AVAILABLE FOR A NEW QUEST</span>
    </footer>
  </div>;
}
createRoot(document.getElementById('root')).render(<App/>);
