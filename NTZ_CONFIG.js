/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║                    NTZ STUDIO — CONFIG FILE                     ║
 * ║                                                                  ║
 * ║  Chỉnh sửa file này để thay đổi nội dung web mà KHÔNG cần      ║
 * ║  đụng vào index.html!                                            ║
 * ║                                                                  ║
 * ║  Cách dùng: đặt file này cùng thư mục với index.html,           ║
 * ║  sau đó thêm vào <head> của index.html (TRƯỚC thẻ </head>):     ║
 * ║    <script src="NTZ_CONFIG.js"></script>                         ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

window.NTZ_CONFIG = {

  /* ════════════════════════════════════════════════════════════════
   *  1. THÔNG TIN STUDIO
   * ════════════════════════════════════════════════════════════════ */
  studio: {
    name:        'NTZ Studio',
    name_full:   'NTZ Noob Team',
    logo:        'assets/icons/logo.png',
    copyright:   '© 2026 NTZ Studio',
    footer_desc: 'NOW ON ROBLOX',
  },


  /* ════════════════════════════════════════════════════════════════
   *  2. BACKGROUND (hero bg)
   *     Ảnh đầu tiên (index 0) dùng mặc định.
   *     randomBackground: true → random mỗi lần load.
   *     position: CSS background-position ("center", "top", v.v.)
   * ════════════════════════════════════════════════════════════════ */
  backgrounds: [
    { file: 'NTZ.png',            label: 'NTZ Default',   position: 'center' },
  ],
  randomBackground: false,


  /* ════════════════════════════════════════════════════════════════
   *  3. MẠNG XÃ HỘI
   *     - nameplate_tag: chữ hiện trên nameplate hero ('' để ẩn)
   *     - show_footer:   true → hiện nút ở footer
   * ════════════════════════════════════════════════════════════════ */
  socials: [
    {
      id:            'discord',
      label:         'Discord NTZ',
      sub:           'discord.gg/y6UWn5aycm',
      url:           'https://discord.gg/y6UWn5aycm',
      icon:          'assets/icons/discord.png',
      nameplate_tag: 'DISCORD',
      show_footer:   true,
    },
    {
      id:            'roblox',
      label:         'Roblox NTZ',
      sub:           'Noob303developer',
      url:           'https://www.roblox.com/users/7887054577/profile',
      icon:          'assets/icons/roblox.png',
      nameplate_tag: 'ROBLOX',
      show_footer:   true,
    },
    {
      id:            'youtube',
      label:         'YouTube NTZ',
      sub:           '@ntznoobteam',
      url:           'https://www.youtube.com/@ntznoobteam',
      icon:          'assets/icons/youtube.png',
      nameplate_tag: 'YOUTUBE',
      show_footer:   true,
    },
    {
      id:            '2026',
      label:         '@2026',
      sub:           '@Noob303',
      url:           'https://www.youtube.com/@noob303',
      icon:          'assets/icons/youtube.png',
      nameplate_tag: '2026',
      show_footer:   true,
    },
    // Thêm mạng xã hội mới bên dưới ↓
    // {
    //   id:            'tiktok',
    //   label:         'TikTok NTZ',
    //   sub:           '@ntzstudio',
    //   url:           'https://www.tiktok.com/@ntzstudio',
    //   icon:          'assets/icons/tiktok.png',
    //   nameplate_tag: 'TIKTOK',
    //   show_footer:   true,
    // },
  ],


  /* ════════════════════════════════════════════════════════════════
   *  4. THÔNG BÁO (notification card trong hero)
   *     date: tự do điền dạng chuỗi, bắt đầu bằng emoji nếu muốn
   * ════════════════════════════════════════════════════════════════ */
  notification: {
    owner_name:   'Noob303developer',
    owner_avatar: 'assets/avatars/owner.png',
    en: {
      role: 'Owner · NTZ Noob Team',
      body: 'The new season has officially started! Join now to receive limited rewards and experience the brand new map. 🎮',
      date: '📅 May 19, 2026 · 08:00 AM',
    },
    vi: {
      role: 'Chủ sở hữu · NTZ Noob Team',
      body: 'Mùa giải mới đã chính thức bắt đầu! Tham gia ngay để nhận phần thưởng giới hạn và trải nghiệm bản đồ hoàn toàn mới. 🎮',
      date: '📅 19 tháng 5, 2026 · 08:00 SA',
    },
  },


  /* ════════════════════════════════════════════════════════════════
   *  5. DÒNG MÔ TẢ STUDIO (studio-desc — hiện trong hero khi hover)
   *     Dòng chữ nghiêng xuất hiện phía trên notification card.
   * ════════════════════════════════════════════════════════════════ */
  studio_desc: {
    en: '"NTZ always brings the best experience to players!"',
    vi: '"NTZ luôn mang đến trải nghiệm tuyệt vời nhất cho người chơi!"',
  },


  /* ════════════════════════════════════════════════════════════════
   *  6. CÁC NÚT CHIP (hero — bên phải notification card)
   *     icon: đường dẫn PNG
   *     href: '#' nếu chưa có link
   * ════════════════════════════════════════════════════════════════ */
  chips: [
    { icon: 'assets/icons/event.png', en: 'Events',       vi: 'Sự Kiện',       href: '#' },
    { icon: 'assets/icons/hot.png',   en: 'Hot Games',    vi: 'Game Hot',      href: '#' },
    { icon: 'assets/icons/new.png',   en: 'New Releases', vi: 'Mới Ra Mắt',   href: '#' },
    { icon: 'assets/icons/more.png',  en: 'Learn More',   vi: 'Tìm Hiểu Thêm', href: '#' },
  ],


  /* ════════════════════════════════════════════════════════════════
   *  7. STATS (hero — hàng dưới notification)
   * ════════════════════════════════════════════════════════════════ */
  stats: [
    { icon: 'assets/icons/project.png', value: '4',     en: 'PROJECTS',  vi: 'DỰ ÁN' },
    { icon: 'assets/icons/members.png', value: '12',    en: 'MEMBERS',   vi: 'THÀNH VIÊN' },
    { icon: 'assets/icons/rating.png',  value: 'Alpha', en: 'RATING',    vi: 'RATING' },
  ],


  /* ════════════════════════════════════════════════════════════════
   *  8. NAVBAR LINKS
   *     isLogin: true → kiểu nút Login (nền trắng)
   * ════════════════════════════════════════════════════════════════ */
  nav_links: [
    { icon: 'assets/icons/home.png',      href: '#', en: 'Home',      vi: 'Trang chủ',    active: true },
    { icon: 'assets/icons/games.png',     href: '#', en: 'Games',     vi: 'Games' },
    { icon: 'assets/icons/about.png',     href: '#', en: 'About',     vi: 'Về chúng tôi' },
    { icon: 'assets/icons/community.png', href: '#', en: 'Community', vi: 'Cộng đồng' },
    { icon: 'assets/icons/login.png',     href: '#', en: 'Login',     vi: 'Đăng nhập',    isLogin: true },
  ],


  /* ════════════════════════════════════════════════════════════════
   *  9. GAME CARDS
   *     color_class: 'g1'|'g2'|'g3'|'g4' (gradient CSS có sẵn)
   *     custom_bg:   CSS gradient tùy chỉnh, override color_class nếu có
   *     badge:       'NEW' | 'HOT' | 'BETA' | 'ALPHA' | 'COMING SOON' | ''
   *     thumb_emoji: fallback nếu thumb_img không load
   *     thumb_img:   '' = dùng emoji
   * ════════════════════════════════════════════════════════════════ */
  games: [
    {
      badge: 'BETA', thumb_emoji: '🌌', thumb_img: '',
      color_class: 'g1', custom_bg: '',
      en: { genre: 'Survival · Exploration', title: 'NTZ: Void Sector',  desc: 'Survive in the dark void, build your station and face dangers from the universe.', players: '1.2k playing' },
      vi: { genre: 'Sinh tồn · Khám phá',   title: 'NTZ: Void Sector',  desc: 'Sinh tồn trong không gian tối tăm, xây dựng trạm của bạn và đối mặt với những mối nguy hiểm từ vũ trụ.', players: '1.2k đang chơi' },
      url: '#',
    },
    {
      badge: 'HOT', thumb_emoji: '⚔️', thumb_img: '',
      color_class: 'g2', custom_bg: '',
      en: { genre: 'Action · PvP',    title: 'NTZ: BloodArena', desc: 'A bloody arena where only the strongest survive — choose weapons, upgrade skills and fight.', players: '3.8k playing' },
      vi: { genre: 'Hành động · PvP', title: 'NTZ: BloodArena', desc: 'Đấu trường đẫm máu nơi chỉ kẻ mạnh nhất tồn tại — chọn vũ khí, nâng cấp kỹ năng và chiến đấu.', players: '3.8k đang chơi' },
      url: '#',
    },
    {
      badge: 'ALPHA', thumb_emoji: '🌿', thumb_img: '',
      color_class: 'g3', custom_bg: '',
      en: { genre: 'RPG · Adventure',      title: 'NTZ: WildLands', desc: 'Vast open world with vibrant ecosystems, rich quests and realistic survival mechanics.', players: '890 playing' },
      vi: { genre: 'Nhập vai · Phiêu lưu', title: 'NTZ: WildLands', desc: 'Thế giới mở rộng lớn với hệ sinh thái sống động, nhiệm vụ phong phú và cơ chế sinh tồn chân thực.', players: '890 đang chơi' },
      url: '#',
    },
    {
      badge: 'COMING SOON', thumb_emoji: '🔮', thumb_img: '',
      color_class: 'g4', custom_bg: '',
      en: { genre: 'Magic · Tower Defense',    title: 'NTZ: Arcane Keep', desc: 'Summon magic, build defense towers and protect your kingdom from waves of mysterious monsters.', players: '520 playing' },
      vi: { genre: 'Ma thuật · Tower Defense', title: 'NTZ: Arcane Keep', desc: 'Triệu hồi phép thuật, xây dựng tháp phòng thủ và bảo vệ vương quốc khỏi những làn sóng quái vật bí ẩn.', players: '520 đang chơi' },
      url: '#',
    },
    // Thêm game mới bên dưới ↓
    // {
    //   badge: 'NEW', thumb_emoji: '🏗️', thumb_img: 'assets/games/buird.jpg',
    //   color_class: '', custom_bg: 'linear-gradient(135deg, #0d47a1 0%, #69ff47 100%)',
    //   en: { genre: 'Creativity · Survival', title: 'BUIRD', desc: 'Build, survive and create.', players: '0 playing' },
    //   vi: { genre: 'Sáng tạo · Sinh tồn',   title: 'BUIRD', desc: 'Xây dựng, sinh tồn và sáng tạo.', players: '0 đang chơi' },
    //   url: '#',
    // },
  ],


  /* ════════════════════════════════════════════════════════════════
   * 10. VIDEO YOUTUBE (phần Intro — nhúng iframe bên phải)
   *     Chỉ cần ID video, ví dụ: 'b-X3OeRo1-w'
   *     (lấy từ URL youtube.com/watch?v=XXXXXXXXX)
   * ════════════════════════════════════════════════════════════════ */
  youtube_video_id: 'b-X3OeRo1-w',


  /* ════════════════════════════════════════════════════════════════
   * 11. MEMBER RANKS (bảng phân cấp Shiny dưới phần lịch sử)
   *     css_class: class gname dùng trong CSS (platinum, green, goldred…)
   *     Thứ tự trong mảng = thứ tự hiển thị trên trang.
   * ════════════════════════════════════════════════════════════════ */
  member_ranks: [
    {
      css_class:  'platinum',
      rank_title: 'Owner',
      en_desc:    'Platinum — white & blue',
      vi_desc:    'Bạch Kim — trắng xanh dương',
      members:    ['Dũng'],
    },
    {
      css_class:  'platinum-red',
      rank_title: 'Co-owner',
      en_desc:    'Platinum Red — white & red',
      vi_desc:    'Bạch Kim Đỏ — trắng đỏ',
      members:    ['Tèo'],
    },
    {
      css_class:  'green',
      rank_title: 'Co-developer',
      en_desc:    'Green — dark & bright green',
      vi_desc:    'Xanh Lá — xanh đậm sáng',
      members:    ['Phú'],
    },
    {
      css_class:  'goldred',
      rank_title: 'Admin',
      en_desc:    'Gold — gold & red',
      vi_desc:    'Vàng Kim — vàng đỏ',
      members:    ['Điệp', 'An (Joxes)', 'Un', 'Long (Dezil)'],
    },
    // Thêm rank mới bên dưới ↓
    // {
    //   css_class:  'ntz',        // dùng style xanh bạc của NTZ
    //   rank_title: 'Member',
    //   en_desc:    'NTZ Blue — platinum blue',
    //   vi_desc:    'NTZ Xanh — bạch kim xanh',
    //   members:    ['Khang', 'Hưng', 'Kuso', 'Nam', 'Hiển (Bo)'],
    // },
  ],


  /* ════════════════════════════════════════════════════════════════
   * 12. SHINY TAGS — ai / cái gì dùng màu nào
   *     Đây là bảng tra cứu để bạn biết dùng class nào khi viết HTML.
   *     Mục này KHÔNG tự render — nó là tài liệu tham chiếu.
   *
   *     Cú pháp HTML: <span class="gname TÊN_CLASS">Văn Bản</span>
   *
   *     VÍ DỤ: <span class="gname platinum">Dũng</span>
   * ════════════════════════════════════════════════════════════════ */
  shiny_tags: [
    // ── NGƯỜI / VỊ TRÍ ──────────────────────────────────────────────
    {
      css_class:   'platinum',
      label:       'Owner — Dũng',
      description: 'Bạch Kim trắng ↔ xanh dương',
      gradient:    'linear-gradient(90deg, #8ca8c8, #8ca8c8, #2f80ed, #8ca8c8)',
      glow:        'rgba(140,168,200,0.70)',
      used_for:    ['Dũng'],
    },
    {
      css_class:   'platinum-red',
      label:       'Co-owner — Tèo',
      description: 'Bạch Kim Đỏ trắng ↔ đỏ',
      gradient:    'linear-gradient(90deg, #c8a8a8, #c8a8a8, #e53935, #c8a8a8)',
      glow:        'rgba(200,140,140,0.70)',
      used_for:    ['Tèo'],
    },
    {
      css_class:   'green',
      label:       'Co-developer — Phú',
      description: 'Xanh Lá đậm ↔ neon',
      gradient:    'linear-gradient(90deg, #43a047, #43a047, #b9f6ca, #43a047)',
      glow:        'rgba(67,160,71,0.65)',
      used_for:    ['Phú'],
    },
    {
      css_class:   'goldred',
      label:       'Admin — Điệp, An, Un, Long',
      description: 'Vàng Kim ↔ đỏ',
      gradient:    'linear-gradient(90deg, #f0c040, #f0c040, #e53935, #f0c040)',
      glow:        'rgba(240,192,64,0.60)',
      used_for:    ['Điệp', 'An (Joxes)', 'Un', 'Long (Dezil)'],
    },
    // ── THƯƠNG HIỆU / STUDIO ────────────────────────────────────────
    {
      css_class:   'ntz',
      label:       'NTZ / NTZ Studio / NTZ HUB',
      description: 'Trắng bạch kim ↔ xanh bạc',
      gradient:    'linear-gradient(90deg, #a8c4e0, #a8c4e0, #90caf9, #a8c4e0)',
      glow:        'rgba(168,196,224,0.80)',
      used_for:    ['NTZ', 'NTZ_', 'NTZ Studio', 'NTZ HUB'],
    },
    // ── GAME TITLES ─────────────────────────────────────────────────
    {
      css_class:   'couser',
      label:       'Couser Game',
      description: 'Đỏ máu ↔ tím hồng',
      gradient:    'linear-gradient(90deg, #8b0000, #8b0000, #e040fb, #8b0000)',
      glow:        'rgba(192,57,43,0.60)',
      used_for:    ['Couser Game'],
    },
    {
      css_class:   'legend',
      label:       'Legend Warriors',
      description: 'Vàng ↔ cam rực',
      gradient:    'linear-gradient(90deg, #f0c040, #f0c040, #ff6d00, #f0c040)',
      glow:        'rgba(240,192,64,0.60)',
      used_for:    ['Legend Warriors'],
    },
    {
      css_class:   'death',
      label:       'Death Spirit',
      description: 'Xanh lá ↔ xanh cyan',
      gradient:    'linear-gradient(90deg, #2e7d52, #2e7d52, #00e5ff, #2e7d52)',
      glow:        'rgba(46,125,82,0.60)',
      used_for:    ['Death Spirit'],
    },
    {
      css_class:   'ntzitems',
      label:       'NTZ Items',
      description: 'Vàng nhạt ↔ hồng pastel',
      gradient:    'linear-gradient(90deg, #d4b44a, #d4b44a, #ff80ab, #d4b44a)',
      glow:        'rgba(212,180,74,0.55)',
      used_for:    ['NTZ Items'],
    },
    {
      css_class:   'buird',
      label:       'BUIRD',
      description: 'Xanh dương ↔ xanh lá neon',
      gradient:    'linear-gradient(90deg, #2f80ed, #2f80ed, #69ff47, #2f80ed)',
      glow:        'rgba(47,128,237,0.65)',
      used_for:    ['BUIRD'],
    },
    // ── TEAM NGOÀI ──────────────────────────────────────────────────
    {
      css_class:   'extteam',
      label:       'NOOB TEAM & team ngoài',
      description: 'Xanh lá ↔ vàng chanh',
      gradient:    'linear-gradient(90deg, #43a047, #43a047, #d4e157, #43a047)',
      glow:        'rgba(67,160,71,0.60)',
      used_for:    ['NOOB TEAM'],
    },
    {
      css_class:   'subteam',
      label:       'PHD / HTD',
      description: 'Đỏ ↔ cam',
      gradient:    'linear-gradient(90deg, #e53935, #e53935, #ff9800, #e53935)',
      glow:        'rgba(229,57,53,0.65)',
      used_for:    ['PHD', 'HTD'],
    },
    // Thêm tag shiny mới bên dưới ↓ (nhớ thêm CSS tương ứng vào index.html)
    // {
    //   css_class:   'myclass',
    //   label:       'Tên tag',
    //   description: 'Màu A ↔ màu B',
    //   gradient:    'linear-gradient(90deg, #111, #111, #fff, #111)',
    //   glow:        'rgba(255,255,255,0.5)',
    //   used_for:    ['Tên nhân vật hoặc thương hiệu'],
    // },
  ],


  /* ════════════════════════════════════════════════════════════════
   * 13. ICON CÁC NÚT (đường dẫn PNG)
   * ════════════════════════════════════════════════════════════════ */
  icons: {
    logo:           'assets/icons/logo.png',
    home:           'assets/icons/home.png',
    games:          'assets/icons/games.png',
    about:          'assets/icons/about.png',
    community:      'assets/icons/community.png',
    login:          'assets/icons/login.png',
    search:         'assets/icons/search.png',
    lang:           'assets/icons/lang.png',
    theme_light:    'assets/icons/theme_light.png',
    theme_dark:     'assets/icons/theme_dark.png',
    theme_system:   'assets/icons/theme_system.png',
    shiny:          'assets/icons/shiny.png',
    event:          'assets/icons/event.png',
    hot:            'assets/icons/hot.png',
    new_release:    'assets/icons/new.png',
    more:           'assets/icons/more.png',
    project:        'assets/icons/project.png',
    members:        'assets/icons/members.png',
    rating:         'assets/icons/rating.png',
    ost_music:      'assets/icons/ost_music.png',
    ost_play:       'assets/icons/ost_play.png',
    ost_pause:      'assets/icons/ost_pause.png',
    ost_prev:       'assets/icons/ost_prev.png',
    ost_next:       'assets/icons/ost_next.png',
    ost_volume:     'assets/icons/ost_volume.png',
    ost_mute:       'assets/icons/ost_mute.png',
    onlyon_roblox:  'assets/icons/ONLYINROBLOX.png',
  },


  /* ════════════════════════════════════════════════════════════════
   * 14. SOUND EFFECTS
   *     volume: 0.0 – 1.0
   * ════════════════════════════════════════════════════════════════ */
  sfx: {
    folder: 'assets/sfx/',
    sounds: {
      hover:        { file: 'sfx_hover.mp3',        volume: 0.35 }, // hover card
      click:        { file: 'sfx_click.mp3',        volume: 0.50 }, // click nút
      swoosh:       { file: 'sfx_swoosh.mp3',       volume: 0.45 }, // mở search hero
      ding:         { file: 'sfx_ding.mp3',         volume: 0.45 }, // chip / nameplate tag
      tick:         { file: 'sfx_tick.mp3',         volume: 0.40 }, // scroll indicator
      nav_search:   { file: 'sfx_nav_search.mp3',   volume: 0.40 }, // search navbar
      stat:         { file: 'sfx_stat.mp3',         volume: 0.30 }, // hover stat card
      ost_toggle:   { file: 'sfx_ost_toggle.mp3',   volume: 0.45 }, // bật/tắt OST
      ost_prev:     { file: 'sfx_ost_prev.mp3',     volume: 0.45 }, // bài trước
      ost_next:     { file: 'sfx_ost_next.mp3',     volume: 0.45 }, // bài tiếp
      ntz_reset:    { file: 'sfx_ntz_reset.mp3',    volume: 0.45 }, // click NTZ reset
      search_close: { file: 'sfx_search_close.mp3', volume: 0.35 }, // đóng search
    },
  },


  /* ════════════════════════════════════════════════════════════════
   * 15. OST TRACKS (nhạc nền)
   *     file: tên file .mp3 trong assets/music/
   *     name: tên hiển thị trên player ('' = lấy từ tên file)
   * ════════════════════════════════════════════════════════════════ */
  ost: {
    music_folder: 'assets/music/',
    autoplay:     false,
    tracks: [
      { file: 'COUSER - START CRY.mp3',       name: 'COUSER — START CRY' },
      { file: 'CHILD OF DEMON.mp3',       name: 'CHILD OF DEMON' },
      // Thêm track mới bên dưới ↓
      // { file: 'NTZ - THEME.mp3',              name: 'NTZ — THEME' },
      // { file: 'LEGEND WARRIORS - BATTLE.mp3', name: 'LEGEND WARRIORS — BATTLE' },
      // { file: 'DEATH SPIRIT - AMBIENT.mp3',   name: 'DEATH SPIRIT — AMBIENT' },
      // { file: 'BUIRD - BUILD.mp3',             name: 'BUIRD — BUILD' },
    ],
  },


  /* ════════════════════════════════════════════════════════════════
   * 16. CÀI ĐẶT MẶC ĐỊNH
   * ════════════════════════════════════════════════════════════════ */
  defaults: {
    lang:   'en',     // 'en' | 'vi'
    theme:  'system', // 'light' | 'dark' | 'system'
    shiny:  'off',    // 'on' | 'off'
  },

}; // END NTZ_CONFIG


/* ════════════════════════════════════════════════════════════════════
 *  APPLY CONFIG — tự động áp dụng khi DOM ready
 * ════════════════════════════════════════════════════════════════════ */
(function applyNTZConfig() {
  const C = window.NTZ_CONFIG;

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {

    /* ── 2. Background ── */
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg && C.backgrounds.length) {
      const idx = C.randomBackground
        ? Math.floor(Math.random() * C.backgrounds.length) : 0;
      const bg = C.backgrounds[idx];
      heroBg.style.backgroundImage  = `url('${bg.file}')`;
      heroBg.style.backgroundPosition = bg.position || 'center';
    }

    /* ── 1. Studio info ── */
    const logoImg       = document.querySelector('.nav-logo-icon img');
    const logoImgFooter = document.querySelector('.footer-brand-icon img');
    const footerName    = document.querySelector('.footer-brand-name');
    const footerDesc    = document.querySelector('.footer-brand-desc');
    const footerCopy    = document.querySelector('.footer-copy-new');
    if (logoImg)       logoImg.src           = C.studio.logo;
    if (logoImgFooter) logoImgFooter.src     = C.studio.logo;
    if (footerName)    footerName.textContent = C.studio.name;
    if (footerDesc)    footerDesc.textContent = C.studio.footer_desc;
    if (footerCopy)    footerCopy.textContent = C.studio.copyright;

    /* ── 5. Studio desc ── */
    // Áp dụng khi setLang chạy; expose để setLang đọc
    window.NTZ_STUDIO_DESC = C.studio_desc;

    /* ── 9. YouTube ── */
    const ytIframe = document.getElementById('yt-iframe');
    if (ytIframe && C.youtube_video_id) {
      ytIframe.src = `https://www.youtube.com/embed/${C.youtube_video_id}?enablejsapi=1&rel=0&mute=1`;
    }

    /* ── 4. Notification ── */
    const notifAvatar = document.querySelector('.notif-avatar img');
    const notifOwner  = document.querySelector('.notif-owner');
    if (notifAvatar) notifAvatar.src           = C.notification.owner_avatar;
    if (notifOwner)  notifOwner.textContent     = C.notification.owner_name;
    // Nội dung ngôn ngữ được áp dụng qua setLang patch bên dưới

    /* ── 7. Stats ── */
    const statCards = document.querySelectorAll('.stat-card');
    C.stats.forEach((s, i) => {
      if (!statCards[i]) return;
      const img = statCards[i].querySelector('.stat-icon-circle img');
      const val = statCards[i].querySelector('.stat-num');
      if (img && s.icon) img.src        = s.icon;
      if (val)           val.textContent = s.value;
    });

    /* ── 6. Chip icons ── */
    const chipItems = document.querySelectorAll('.chip-item');
    C.chips.forEach((ch, i) => {
      if (!chipItems[i]) return;
      const img = chipItems[i].querySelector('.chip-icon-circle img');
      if (img && ch.icon) img.src = ch.icon;
    });

    /* ── 13. Icons (UI buttons) ── */
    const iconMap = {
      '.nav-search-pill .pill-icon img': C.icons.search,
      '#nav-search-active .search-icon img': C.icons.search,
      '#search-bar .search-icon img': C.icons.search,
      '#lang-btn .nd-btn-img': C.icons.lang,
      '#theme-btn-img': C.icons.theme_system,
      '#shiny-toggle-icon': C.icons.shiny,
      '#ost-toggle-btn img': C.icons.ost_music,
      '#ost-disc-img': C.icons.ost_music,
      '#ost-play-img': C.icons.ost_play,
      '#ost-prev img': C.icons.ost_prev,
      '#ost-next img': C.icons.ost_next,
      '#ost-vol-img': C.icons.ost_volume,
      '#footer-onlyon': C.icons.onlyon_roblox,
    };
    Object.entries(iconMap).forEach(([sel, src]) => {
      const el = document.querySelector(sel);
      if (el && src) el.src = src;
    });
    ['theme-light', 'theme-dark', 'theme-system'].forEach(id => {
      const el = document.querySelector(`#${id} .nd-icon-img img`);
      const src = C.icons[id.replace('-', '_')];
      if (el && src) el.src = src;
    });

    /* ── 3. Socials — footer buttons ── */
    const footerSocials = document.querySelector('.footer-socials');
    if (footerSocials) {
      footerSocials.querySelectorAll('.footer-social-btn').forEach((btn, i) => {
        const s = C.socials.filter(x => x.show_footer)[i];
        if (!s) { btn.style.display = 'none'; return; }
        btn.href  = s.url;
        btn.title = s.label;
        const img = btn.querySelector('img');
        if (img) { img.src = s.icon; img.alt = s.label; }
      });
    }

    /* ── 3. Socials — nameplate tags ── */
    const nameplateTags = document.querySelectorAll('.nameplate .nameplate-tag');
    const activeSocials = C.socials.filter(s => s.nameplate_tag);
    nameplateTags.forEach((tag, i) => {
      const s = activeSocials[i];
      if (!s) { tag.style.display = 'none'; return; }
      tag.textContent = s.nameplate_tag;
      tag.onclick     = () => window.open(s.url, '_blank');
    });

    /* ── 3. Socials — hero search suggestions ── */
    const sugContainer = document.getElementById('search-suggestions');
    if (sugContainer) {
      sugContainer.innerHTML = '';
      C.socials.forEach(s => {
        const item    = document.createElement('div');
        item.className = 'suggestion-item';
        item.onclick   = () => window.open(s.url, '_blank');
        item.innerHTML = `
          <div class="sug-icon ${s.id}">
            <img src="${s.icon}" alt="${s.label}"
                 style="width:18px;height:18px;object-fit:contain;"
                 onerror="this.parentElement.innerHTML='🔗'">
          </div>
          <span class="sug-label">${s.label}</span>
          <span class="sug-sub">${s.sub}</span>`;
        sugContainer.appendChild(item);
      });
    }

    /* ── 3. Socials — navbar search suggestions ── */
    const navSugContainer = document.getElementById('nav-suggestions');
    if (navSugContainer) {
      navSugContainer.innerHTML = '';
      C.socials.forEach(s => {
        const item    = document.createElement('div');
        item.className = 'nav-sug-item';
        item.onclick   = () => window.open(s.url, '_blank');
        item.innerHTML = `
          <div class="nav-sug-icon ${s.id}">
            <img src="${s.icon}" alt="${s.label}"
                 onerror="this.parentElement.innerHTML='🔗'">
          </div>
          <span class="nav-sug-label">${s.label}</span>
          <span class="nav-sug-sub">${s.sub}</span>`;
        navSugContainer.appendChild(item);
      });
    }

    /* ── 11. Member Ranks — render rank-legend từ config ── */
    const rankLegend = document.querySelector('.rank-legend');
    if (rankLegend && C.member_ranks.length) {
      // Giữ lại title
      const title = rankLegend.querySelector('.rank-legend-title');
      rankLegend.innerHTML = '';
      if (title) rankLegend.appendChild(title);

      C.member_ranks.forEach((rank, i) => {
        const pill = document.createElement('div');
        pill.className = 'rank-pill';
        // Gán id động để setLang patch được
        const descId = `rank-desc-${i}`;
        pill.innerHTML = `
          <div class="rank-pill-badge">
            <span class="gname ${rank.css_class}" style="padding:0;font-size:13px;">Aa</span>
          </div>
          <div class="rank-pill-label">
            <strong>${rank.rank_title}</strong>
            <span id="${descId}">${rank.vi_desc}</span>
          </div>`;
        rankLegend.appendChild(pill);
      });
    }

    /* ── 15. OST: expose tracks cho script trong index.html ── */
    window.NTZ_OST_TRACKS  = C.ost.tracks.map(t => t.file);
    window.NTZ_OST_NAMES   = Object.fromEntries(
      C.ost.tracks.map(t => [t.file, t.name || t.file.replace(/\.mp3$/i, '')])
    );
    window.NTZ_OST_FOLDER  = C.ost.music_folder;
    window.NTZ_OST_AUTOPLAY = C.ost.autoplay;

    /* ── 16. Defaults (chỉ set nếu chưa có trong localStorage) ── */
    if (!localStorage.getItem('ntz-lang'))  localStorage.setItem('ntz-lang',  C.defaults.lang);
    if (!localStorage.getItem('ntz-theme')) localStorage.setItem('ntz-theme', C.defaults.theme);
    if (!localStorage.getItem('ntz-shiny')) localStorage.setItem('ntz-shiny', C.defaults.shiny);

    /* ── Patch setLang để đọc thêm dữ liệu từ config ── */
    // Chờ index.html khai báo xong window.setLang gốc, rồi wrap lại
    const _patchLang = () => {
      if (typeof window.setLang !== 'function') {
        setTimeout(_patchLang, 80);
        return;
      }
      const _origSetLang = window.setLang;
      window.setLang = function(lang) {
        _origSetLang(lang); // gọi hàm gốc trước

        // Studio desc
        const sdEl = document.querySelector('.studio-desc');
        if (sdEl && C.studio_desc) sdEl.textContent = C.studio_desc[lang] || C.studio_desc.en;

        // Notification (body & date & role từ config)
        const notifData = C.notification[lang] || C.notification.en;
        const nr = document.querySelector('.notif-role'); if (nr) nr.textContent = notifData.role;
        const nd = document.querySelector('.notif-date'); if (nd) nd.textContent = notifData.date;
        const nb = document.querySelector('.notif-body'); if (nb) nb.textContent = notifData.body;

        // Chips
        const chips = document.querySelectorAll('.chip');
        C.chips.forEach((ch, i) => { if (chips[i]) chips[i].textContent = ch[lang] || ch.en; });

        // Stats labels
        const statLabels = document.querySelectorAll('.stat-label');
        C.stats.forEach((s, i) => { if (statLabels[i]) statLabels[i].textContent = s[lang] || s.en; });

        // Member rank descs
        C.member_ranks.forEach((rank, i) => {
          const el = document.getElementById(`rank-desc-${i}`);
          if (el) el.textContent = (lang === 'vi') ? rank.vi_desc : rank.en_desc;
        });

        // Rank legend title
        const rlt = document.getElementById('rank-legend-title');
        if (rlt) rlt.textContent = (lang === 'vi') ? 'Phân cấp thành viên' : 'Member Ranks';
      };
    };
    _patchLang();

  }); // end ready()

})();
