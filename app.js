// ============================================================
//   HALL OF LEGENDS — app.js
//   NIELIT Imphal · 2nd Semester 2026
// ============================================================
//
//  HOW TO ADD MEMES
//  ─────────────────
//  Each student object below has two optional fields you fill in:
//
//    meme : "images/ROLL_NUMBER.jpg"
//           ↑ Put the image file path here (relative to index.html).
//             Supported formats: jpg, jpeg, png, gif, webp.
//             Leave as null if no image yet.
//
//    reason: "Why they chose this meme — write anything here."
//            ↑ A short description shown when the card is clicked.
//              Leave as null to get an auto-assigned reason.
//
//  EXAMPLE (filled in):
//    { name: "ROJIT THOUDAM", roll: "NDUI-BScCS-001", course: "B.Sc. Computer Science", section: "BSc CS",
//      meme: "images/NDUI-BScCS-001.jpg",
//      reason: "This is him during every lab session." },
//
//  FOLDER SUGGESTION:
//    Place all meme images in an  /images  folder next to index.html.
//    Name them by roll number for easy tracking.
// ============================================================

const STUDENTS = [

  // ── B.Sc. Computer Science ──────────────────────────────────────────
  // { name: "ROJIT THOUDAM",
  // roll: "NDUI-BScCS-001", course: "B.Sc. Computer Science", section: "BSc CS",
  // meme: null,   // TODO: e.g. "images/NDUI-BScCS-001.jpg"
  // reason: null  // TODO: e.g. "Describe why this meme fits them"
  // },
  { name: "ROJIT THOUDAM",
    roll: "NDUI-BScCS-001", course: "B.Sc. Computer Science", section: "BSc CS",
    meme: null,   // TODO: e.g. "images/NDUI-BScCS-001.jpg"
    reason: null  // TODO: e.g. "Describe why this meme fits them"
  },
  { name: "CHINGPONGLU PHAOMEI",
    roll: "NDUI-BScCS-003", course: "B.Sc. Computer Science", section: "BSc CS",
    meme: null, reason: null },
  { name: "BRUCE RODU",
    roll: "NDUI-BScCS-004", course: "B.Sc. Computer Science", section: "BSc CS",
    meme: null, reason: null },
  { name: "PUKHRAMBAM SACHINNGANBA SINGH",
    roll: "NDUI-BScCS-005", course: "B.Sc. Computer Science", section: "BSc CS",
    meme: null, reason: null },
  { name: "REMMEI DEJONLUNGPOU RONGMEI",
    roll: "NDUI-BScCS-007", course: "B.Sc. Computer Science", section: "BSc CS",
    meme: null, reason: null },
  { name: "RUNIO THONI",
    roll: "NDUI-BScCS-008", course: "B.Sc. Computer Science", section: "BSc CS",
    meme: null, reason: null },
  { name: "ANGOM THOUNGAMBA MEITEI",
    roll: "NDUI-BScCS-009", course: "B.Sc. Computer Science", section: "BSc CS",
    meme: null, reason: null },
  { name: "AKOIJAM YOIHENBA MEETEI",
    roll: "NDUI-BScCS-010", course: "B.Sc. Computer Science", section: "BSc CS",
    meme: null, reason: null },
  { name: "MAYANGLAMBAM PREMANANDA SINGH",
    roll: "NDUI-BScCS-011", course: "B.Sc. Computer Science", section: "BSc CS",
    meme: null, reason: null },
  { name: "RANI DANGMEI",
    roll: "NDUI-BScCS-012", course: "B.Sc. Computer Science", section: "BSc CS",
    meme: null, reason: null },
  { name: "T YUKHOVEI",
    roll: "NDUI-BScCS-014", course: "B.Sc. Computer Science", section: "BSc CS",
    meme: null, reason: null },
  { name: "LEISHANGTHEM ACHOUBA MEITEI",
    roll: "NDUI-BScCS-015", course: "B.Sc. Computer Science", section: "BSc CS",
    meme: null, reason: null },
  { name: "KSHETRIMAYUM PETERSON SINGH",
    roll: "NDUI-BScCS-016", course: "B.Sc. Computer Science", section: "BSc CS",
    meme: null, reason: null },
  { name: "MOCHANTHING MAKUNGA",
    roll: "NDUI-BScCS-018", course: "B.Sc. Computer Science", section: "BSc CS",
    meme: null, reason: null },
  { name: "BABY SEATLE KUMAM",
    roll: "NDUI-BScCS-019", course: "B.Sc. Computer Science", section: "BSc CS",
    meme: null, reason: null },

  // ── BCA Section A ────────────────────────────────────────────────────
  { name: "KONJENGBAM ALBERTO",
    roll: "NDUIBC2445", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "ASEM HITLER",
    roll: "NDUIBC2446", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "MEDARSHANG KOCHANSHO MARING",
    roll: "NDUIBC2447", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "LOUKHAM STEVEN",
    roll: "NDUIBC2448", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "ATHOKPAM ANJALI DEVI",
    roll: "NDUIBC2449", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "MOIRANGTHEM NARESH SINGH",
    roll: "NDUIBC2450", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "HEISNAM CHANU LANCHENBI",
    roll: "NDUIBC2451", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "NINGTHOUJAM BHUNISHAND DEVI",
    roll: "NDUIBC2452", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "LINGJELTHOI MAIBRAM",
    roll: "NDUIBC2453", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "NICESON RAJKUMAR",
    roll: "NDUIBC2454", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "SUZANE LANGHU",
    roll: "NDUIBC2455", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "YUMNAM TANPHANGBA",
    roll: "NDUIBC2456", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "AMOM JIMCAREY SINGH",
    roll: "NDUIBC2457", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "KUNAL YUREMBAM",
    roll: "NDUIBC2458", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "JENISH ANGOM",
    roll: "NDUIBC2459", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "SUMEROO WAIROKPAM",
    roll: "NDUIBC2461", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "GAIBUPOU RIAMEI",
    roll: "NDUIBC2462", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "RAJ DEESUN HAOBAM",
    roll: "NDUIBC2463", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "LANTHOIBA HEISNAM",
    roll: "NDUIBC2464", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "DINCHUILUNG PHAOMEI",
    roll: "NDUIBC2465", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "MAYANGLAMBAM VICKY SINGH",
    roll: "NDUIBC2466", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "HAOBAM RONIT SINGH",
    roll: "NDUIBC2467", course: "BCA (4 Years)", section: "Section A",
    meme: "./images/ronit_meme.webp", reason:  "This is the first meme I saw when I opened the website"},
  { name: "ANGOM LINDA DEVI",
    roll: "NDUIBC2468", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "THINGNAM ROBINSON",
    roll: "NDUIBC2469", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "SIAMRUAITHAILIU PANMEI",
    roll: "NDUIBC2470", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "DEVARANI KSHETRIMAYUM",
    roll: "NDUIBC2471", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "WIRAMTHIULIU CHAWANG",
    roll: "NDUIBC2472", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "NIMRANG RENGNEISONG KOM",
    roll: "NDUIBC2473", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "LONGJAM RONIBALA DEVI",
    roll: "NDUIBC2474", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "SHITAM SINGH",
    roll: "NDUIBC2475", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "KONING MOSHILNING",
    roll: "NDUIBC2476", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "CHONGTHAM IDEA SINGH",
    roll: "NDUIBC2477", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "KHANGMEIJEI KAMEI",
    roll: "NDUIBC2478", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "AMRIT SANASAM",
    roll: "NDUIBC2479", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "MAIBAM SATISH SINGH",
    roll: "NDUIBC2480", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "ANGOM KAPIL SINGH",
    roll: "NDUIBC2481", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "DANGSHAWA EZEKIEL",
    roll: "NDUIBC2482", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "IRUNGBAM SAYATA DEVI",
    roll: "NDUIBC2483", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "NONGTHOMBAM REXSON SINGH",
    roll: "NDUIBC2484", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "ALBINA HUIDROM",
    roll: "NDUIBC2485", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "KINGSON NONGTHOMBAM",
    roll: "NDUIBC2486", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "WANGKHEIMAYUM YAIKHOMBA MEITEI",
    roll: "NDUIBC2487", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "OINAM KHAGEMBA",
    roll: "NDUIBC2488", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "ATHOKPAM SHRINIVASH",
    roll: "NDUIBC2490", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "AKOIJAM RONALI DEVI",
    roll: "NDUIBC2491", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "GEORGE WANGKHEM",
    roll: "NDUIBC2492", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "ASHANGBAM MANIKANTH LUWANG",
    roll: "NDUIBC2493", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "KAMEI POUNING",
    roll: "NDUIBC2495", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "MANIMATUM MAIBAM",
    roll: "NDUIBC2497", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "PUKHRAMBAM SANAMATUM SINGH",
    roll: "NDUIBC2498", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "THANGSHABAM LANCHENBA MEITEI",
    roll: "NDUIBC2499", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "THRICE HAOBAM",
    roll: "NDUIBC2500", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "KSHETRIMAYUM BILLION SINGH",
    roll: "NDUIBC2501", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "YUKHAIBAM LANCHENBA LUWANG",
    roll: "NDUIBC2502", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "OINAM CHIDDAM SINGH",
    roll: "NDUIBC2503", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "SUIHIAM TONGSIN",
    roll: "NDUIBC2504", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },
  { name: "MOCHANSHIL LAMTHAKA",
    roll: "NDUIBC2505", course: "BCA (4 Years)", section: "Section A",
    meme: null, reason: null },

  // ── BCA Section B ────────────────────────────────────────────────────
  { name: "MATHIUJIAN GANGMEI",
    roll: "NDUIBC2506", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "QUICKSON PHILEM",
    roll: "NDUIBC2507", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "LAMNGANBA YUREMBAM",
    roll: "NDUIBC2508", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "KHANGEMBAM KOROUNGANBA SINGH",
    roll: "NDUIBC2509", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "KHAMNAM NELSONTHOI MEITEI",
    roll: "NDUIBC2510", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "SHARUBAM NETRAJEET SINGH",
    roll: "NDUIBC2511", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "NAOREM MAHESH SINGH",
    roll: "NDUIBC2512", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "NEERAJ SAGOLSEM",
    roll: "NDUIBC2513", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "THONGAM THOITHOIBI CHANU",
    roll: "NDUIBC2514", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "MAYANGLAMBAM SURJAKANTA SINGH",
    roll: "NDUIBC2515", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "YAIKOMBA THINGUJAM",
    roll: "NDUIBC2516", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "NONGMAITHEM BORISH SINGH",
    roll: "NDUIBC2517", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "DANGSHAWA KANYOULHUNG",
    roll: "NDUIBC2518", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "IYAR RSM",
    roll: "NDUIBC2519", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "BLESSON CHINGAKHAM",
    roll: "NDUIBC2520", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "DHEERAJ NINGOMBAM",
    roll: "NDUIBC2521", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "ARTI HEISNAM",
    roll: "NDUIBC2522", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "YUMNAM YAIPHABA SINGH",
    roll: "NDUIBC2523", course: "BCA (4 Years)", section: "Section B",
    meme: /yaipha memes.jpeg
  , reason: null },
  { name: "SNG KAPHOWLTHA",
    roll: "NDUIBC2524", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "ARVIND KHAIDEM",
    roll: "NDUIBC2525", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "NITISH SALAM",
    roll: "NDUIBC2526", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "GAITHAONGAM PANMEI",
    roll: "NDUIBC2527", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "ZIANGUANGPOU GANGMEI",
    roll: "NDUIBC2528", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "RAJKUMAR BRENDONSANA SINGH",
    roll: "NDUIBC2529", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "NAOREM NARISH SINGH",
    roll: "NDUIBC2530", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "LAISHRAM GOUTAM MEITEI",
    roll: "NDUIBC2531", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "ARISH SALAM",
    roll: "NDUIBC2532", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "AKOIJAM RONALDO SINGH",
    roll: "NDUIBC2533", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "PUKHRAMBAM SEITAYAM SINGH",
    roll: "NDUIBC2534", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "MONALISHA THOKCHOM",
    roll: "NDUIBC2535", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "MAYANGLAMBAM MERINA",
    roll: "NDUIBC2536", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "KONTHOUJAM THOMSON SINGH",
    roll: "NDUIBC2537", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "IBUNGOCHOUBA HAOBAM",
    roll: "NDUIBC2538", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "SATYA OINAM",
    roll: "NDUIBC2539", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "THOKCHOM CICILI",
    roll: "NDUIBC2540", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "HIJAM ROBIN SINGH",
    roll: "NDUIBC2541", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "JOHLINSON KHULEM",
    roll: "NDUIBC2542", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "DANISON TONGSIN",
    roll: "NDUIBC2543", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "DECEMSON NULA",
    roll: "NDUIBC2544", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "MOIRANGTHEM VENARJIT SINGH",
    roll: "NDUIBC2545", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "KHWAIRAKPAM LUCKY DEVI",
    roll: "NDUIBC2546", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "TRISHANKA YUMLEMBAM",
    roll: "NDUIBC2547", course: "BCA (4 Years)", section: "Section B",
    meme: "./images/NDUIBC2547 BCA-2B.gif", reason: "When you're watching peak cinema.."},
  { name: "WANGKHEM INAOTOMBA SINGH",
    roll: "NDUIBC2548", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "THANGJAM ELLEN SINGH",
    roll: "NDUIBC2549", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "RAJKUMAR ANDY",
    roll: "NDUIBC2550", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "VICTOR OINAM",
    roll: "NDUIBC2551", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "SAPAMCHA YAIPHABA",
    roll: "NDUIBC2552", course: "BCA (4 Years)", section: "Section B",
    meme: "./images/Sapamcha_Yaiphaba_meme.jpg", reason: "current situation:just vibing "},
  { name: "MOIRANGTHEM HENTHOIBA",
    roll: "NDUIBC2553", course: "BCA (4 Years)", section: "Section B",
    meme: "./images/henthoiba_meme.webp", reason: "daily mid-night crisis before sleeping" },
  { name: "DENIS YUMNAM",
    roll: "NDUIBC2554", course: "BCA (4 Years)", section: "Section B",
    meme: "images/NDUIBC2554.jpg", reason: "Peak procrastination." },
  { name: "SHADOKPAM PARITON MEITEI",
    roll: "NDUIBC2555", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "KAMEI KAGIANGDAILIU",
    roll: "NDUIBC2556", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "NONGMAITHEM BIDYARANI DEVI",
    roll: "NDUIBC2557", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "TAIBANGNGANBI YANGAMBAM",
    roll: "NDUIBC2558", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "IRUNGBAM PREMCHAND SINGH",
    roll: "NDUIBC2559", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "REXSON ANGOM",
    roll: "NDUIBC2560", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "KOMUNI KAMEI",
    roll: "NDUIBC2561", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "MONISH TENSUBAM",
    roll: "NDUIBC2562", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "LAIKHURAM DEBSON SINGH",
    roll: "NDUIBC2564", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },
  { name: "GAIDINGLUNG",
    roll: "NDUIBC2565", course: "BCA (4 Years)", section: "Section B",
    meme: null, reason: null },

  // ── BCA Section C ────────────────────────────────────────────────────
  { name: "YENGKHOM ARYA SINGH",
    roll: "NDUIBC2566", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "OINAM MAHENDRA",
    roll: "NDUIBC2567", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "SARUNGBAM SARJU DEVI",
    roll: "NDUIBC2568", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "CHWNKIMA VERONICA MEIRINGMEI",
    roll: "NDUIBC2569", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "YUNGLAMA SHIMREIDAR MARING",
    roll: "NDUIBC2570", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "BISHONATH WAIROKPAM",
    roll: "NDUIBC2571", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "RAJKUMAR SULEN",
    roll: "NDUIBC2572", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "SHEETAL THOKCHOM",
    roll: "NDUIBC2573", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "HENSING OINAM",
    roll: "NDUIBC2574", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "GAINAMLUNG GONMEI",
    roll: "NDUIBC2575", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "THOUNAOJAM DAYNIT SINGH",
    roll: "NDUIBC2576", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "MAYANGLAMBAM ANJU DEVI",
    roll: "NDUIBC2577", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "HEIKHAM BENESON SINGH",
    roll: "NDUIBC2578", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "BAREMRON ALINA KABUI",
    roll: "NDUIBC2579", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "HEISNAM YAIKHOMBA",
    roll: "NDUIBC2580", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "SATISH OINAM",
    roll: "NDUIBC2581", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "GRACY AHONGSHANGBAM",
    roll: "NDUIBC2582", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "SALAM PINKYMILAN",
    roll: "NDUIBC2583", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "YOIHENBA MAYANGLAMBAM",
    roll: "NDUIBC2584", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "REMI KHAIDEM",
    roll: "NDUIBC2585", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "ASEM ANJALI DEVI",
    roll: "NDUIBC2586", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "NANAOBI ABUJAM",
    roll: "NDUIBC2587", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "NINGTHOUJAM PUJA DEVI",
    roll: "NDUIBC2588", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "LUNGCHUM KHORONG SAMPAR",
    roll: "NDUIBC2589", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "PUKHRAMBAM BANKIMCHANDRA SINGH",
    roll: "NDUIBC2590", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "WAHENGBAM RISHI SINGH",
    roll: "NDUIBC2591", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "STALIN KSHETRIMAYUM",
    roll: "NDUIBC2592", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "DEENIT YUMNAM",
    roll: "NDUIBc2593", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "JEFF LOUREMBAM",
    roll: "NDUIBC2594", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "LONGJAM SHYAMSON",
    roll: "NDUIBC2595", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "THINGNAM BINODKUMAR SINGH",
    roll: "NDUIBC2596", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "NONGTHOMBAM NELSON SINGH",
    roll: "NDUIBC2597", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "DINESH NINGTHOUJAM",
    roll: "NDUIBC2598", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "LAISHRAM ARISH MEITEI",
    roll: "NDUIBC2599", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "HAOBIJAM NGANTHOI DEVI",
    roll: "NDUIBC2601", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "KHWAIRAKPAM YOIHENBA MEITEI",
    roll: "NDUIBC2602", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "HIJAM KISON SINGH",
    roll: "NDUIBC2603", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "LANGONBA RAJKUMAR",
    roll: "NDUIBC2604", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "YUN AWUNGSHI",
    roll: "NDUIBC2605", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "CHIITHUZHIINI",
    roll: "NDUIBC2606", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "WORCHUINGAM SHIMPHRUI",
    roll: "NDUIBC2607", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "TENNYSON POTSANGBAM",
    roll: "NDUIBC2608", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "JAOJIANLIU PAMEI",
    roll: "NDUIBC2609", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "ALBERT THONGRAM",
    roll: "NDUIBC2610", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "SD LUNGVARKIP CHIRU",
    roll: "NDUIBC2611", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "GAILANGONG GONMEI",
    roll: "NDUIBC2612", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "POTSANGBAM LIBERSON",
    roll: "NDUIBC2613", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "MAIBAM SUSHMITA",
    roll: "NDUIBC2614", course: "BCA (4 Years)", section: "SECTION C",
    meme: "./images/Sushmita2614 BCA-2C.png", reason:"Life is too much" },
  { name: "KHUMUKCHAM VICTORY CHANU",
    roll: "NDUIBC2615", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "PRIYANKA BUDACHHETRY",
    roll: "NDUIBC2616", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "TIGANGAM KAMEI",
    roll: "NDUIBC2617", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "IBUACHULE KUAME",
    roll: "NDUIBC2618", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "KHAIDEM LANCHENBA MEETEI",
    roll: "NDUIBC2620", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "GANPOU GANGMEI",
    roll: "NDUIBC2621", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "NINGONGLUNG GANGMEI",
    roll: "NDUIBC2622", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "TERESA PANMEI",
    roll: "NDUIBC2623", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "RONGSENBOU NEWMAI",
    roll: "NDUIBC2624", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
  { name: "JOSHUA GONMEI",
    roll: "NDUIBC2625", course: "BCA (4 Years)", section: "SECTION C",
    meme: null, reason: null },
];

// ── Fallback reasons (used when student's reason field is null) ──────────
const FALLBACK_REASONS = [
  "The meme chose the student. The student did not choose the meme.",
  "It accurately describes their relationship with assignment deadlines.",
  "They said 'this is literally me every exam season.'",
  "It's a vibe. You wouldn't understand.",
  "Rumour has it they haven't slept since Semester 1.",
  "The professor saw this and nodded in silence.",
  "When the WiFi drops during an online submission.",
  "404: Reason not found. Just vibes.",
  "They printed it out and stuck it on their laptop.",
  "'It me.' — that's all they said.",
  "The meme found them at 2am during finals week.",
  "No explanation was given. None was needed.",
  "This meme has been their lock screen since 2023.",
  "They related to it on a molecular level.",
  "The Council of Memes has deemed this worthy.",
];

// ── State ─────────────────────────────────────────────────────────────
let activeFilter = 'all';
let searchQuery  = '';

// ── Helpers ───────────────────────────────────────────────────────────
function getFallbackReason(roll) {
  let hash = 0;
  for (const c of roll) hash = (hash * 17 + c.charCodeAt(0)) & 0xffff;
  return FALLBACK_REASONS[hash % FALLBACK_REASONS.length];
}

function sectionLabel(s) {
  const map = {
    'BSc CS':    'B.Sc. Computer Science',
    'Section A': 'BCA (4 Years) — Section A',
    'Section B': 'BCA (4 Years) — Section B',
    'SECTION C': 'BCA (4 Years) — Section C',
  };
  return map[s] || s;
}

// ── Render grid ───────────────────────────────────────────────────────
function renderGrid() {
  const grid  = document.getElementById('studentGrid');
  const query = searchQuery.toLowerCase();

  let filtered = STUDENTS.filter(s => {
    const matchFilter = activeFilter === 'all' || s.section === activeFilter;
    const matchSearch = !query
      || s.name.toLowerCase().includes(query)
      || s.roll.toLowerCase().includes(query);
    return matchFilter && matchSearch;
  });

  document.getElementById('visibleCount').textContent = filtered.length;

  // Group by section
  const groups = {};
  filtered.forEach(s => {
    if (!groups[s.section]) groups[s.section] = [];
    groups[s.section].push(s);
  });

  const ORDER = ['BSc CS', 'Section A', 'Section B', 'SECTION C'];
  grid.innerHTML = '';

  ORDER.forEach(sec => {
    if (!groups[sec]) return;

    // Section divider
    const div = document.createElement('div');
    div.className = 'section-divider';
    div.innerHTML = `
      <div class="section-divider-line"></div>
      <div class="section-divider-text">${sectionLabel(sec)}</div>
      <div class="section-divider-line"></div>
    `;
    grid.appendChild(div);

    groups[sec].forEach((student, idx) => {
      grid.appendChild(buildCard(student, idx));
    });
  });
}

function buildCard(student, idx) {
  const card = document.createElement('div');
  card.className = 'student-card';
  card.dataset.roll = student.roll;
  card.style.animationDelay = `${Math.min(idx * 0.03, 0.6)}s`;

  const hasMeme = Boolean(student.meme);

  card.innerHTML = `
    <span class="section-badge">${student.section}</span>

    <div class="meme-zone">
      ${hasMeme
        ? `<img src="${student.meme}" class="loaded" alt="meme for ${student.name}" />`
        : `<div class="meme-placeholder">
             <div class="meme-placeholder-text">MEME SLOT EMPTY</div>
           </div>`
      }
    </div>

    <div class="card-info">
      <div class="card-name">${student.name}</div>
      <div class="card-roll">${student.roll}</div>
      <div class="card-course">${student.course}</div>
      <div class="card-meme-indicator ${hasMeme ? 'has-meme' : ''}">
        ${hasMeme ? 'View meme reason' : 'No meme yet'}
      </div>
    </div>
  `;

  card.addEventListener('click', () => openMemeModal(student.roll));
  return card;
}

// ── Modal ─────────────────────────────────────────────────────────────
function openMemeModal(roll) {
  const student = STUDENTS.find(s => s.roll === roll);
  if (!student) return;

  document.getElementById('modalName').textContent = student.name;
  document.getElementById('modalRoll').textContent = student.roll + ' · ' + student.course;

  const preview = document.getElementById('modalMemePreview');
  if (student.meme) {
    preview.innerHTML = `<img src="${student.meme}" alt="meme" />`;
  } else {
    preview.innerHTML = `<span class="modal-no-meme">No meme assigned yet</span>`;
  }

  const reason = student.reason ? student.reason : getFallbackReason(roll);
  document.getElementById('modalReason').textContent = reason;
  document.getElementById('modalOverlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}

// ── Search ────────────────────────────────────────────────────────────
document.getElementById('searchInput').addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderGrid();
});

// ── Filter buttons ────────────────────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderGrid();
  });
});

// ── ESC to close modal ────────────────────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ── Init ──────────────────────────────────────────────────────────────
renderGrid();
