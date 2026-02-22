// ================= LANGUAGE DATA =================

let currentLang = "th";

const text = {
  th: {
    subtitle: "สุ่มพล็อตคู่ชิปไว้แต่งฟิค / วาด / เวิ่น",
    generate: "Generate AU ✨",
    defaultResult: "กดปุ่มแล้วได้เวลาฟิน",
    suggest: "💌 เสนอไอเดีย AU / Role เพิ่ม",
    labels: {
      au: "AU",
      role: "บทบาท",
      meet: "First Meeting",
      conflict: "ปมหลัก",
      tone: "โทนเรื่อง"
    }
  },
  en: {
    subtitle: "Random AU ideas for your ship",
    generate: "Generate AU ✨",
    defaultResult: "Press the button and let the angst begin ",
    suggest: "💌 Suggest new AU / Role ideas",
    labels: {
      au: "AU",
      role: "Role",
      meet: "First Meeting",
      conflict: "Main Conflict",
      tone: "Tone"
    }
  }
};

// ================= AU DATA =================

const AU = {
  th: [
    "นักเรียน หรือ มหาลัย","มาเฟีย","แวมไพร์ x มนุษย์","เทพเจ้า x มนุษย์",
    "Idol x Producer","Idol x Fanclub","Enemy to Lover",
    "อยู่คนละฝั่งสงคราม","Roommate","Canon divergent",
    "Modern AU","Streamer x Viewer","Single Parent",
    "เพื่อนบ้าน","ยุคกลาง","Fantasy","Sci-Fi",
    "Dungeon","ต่างโลก","ผี x มนุษย์","สถาปนิก x ชินแซ",
    "พ่อมด/แม่มด","อัจฉริยะ","นักวิจัย x นักวิทยาศาตร์",
    "นักกีฬา","ประธานบริษัท","นักข่าว","นักการเมือง",
    "นักแข่งรถ","คนดัง","หมอ","เจ้าหนี้ x ลูกหนี้","จอมยุทธ์",
    "แฟนเช่า","คาเฟ่","เพื่อนสนิทคิดไม่ซื่อ","Age Gap","วิศวะ"
  ],
  en: [
    "High School or University","Mafia","Vampire x Human","God x Human",
    "Idol x Producer","Idol x Fan","Enemies to Lovers",
    "Opposite Sides of War","Roommates","Canon Divergent",
    "Modern AU","Streamer x Viewer","Single Parent",
    "Neighbors","Medieval Era","Fantasy","Sci-Fi",
    "Dungeon","Isekai","Ghost x Human","Architect x Shinse",
    "Wizard/Witch","Genius","Researcher x Scientist",
    "Athlete","CEO","Journalist","Politician",
    "Racer","Celebrity","Doctor","Creditor x Debtor","Martial Artist",
    "Rental Girl/Boyfriend","Cafe AU","Having a crush on a friend","Age Gap","Engineer"
  ]
};

// (roles / meeting / conflict / tone ทำแบบเดียวกัน)

const roles = {
  th: ["ฝ่าย A รู้สึกก่อน","ฝ่าย B รู้สึกก่อน","ต่างฝ่ายต่างไม่รู้ตัว","รักกันแต่ไม่ยอมพูด","คนหนึ่งปิดบังตัวตน","แอบชอบ","คนหนึ่งแกล้งไม่สนใจ","รักที่เป็นไปไม่ได้","เป็นชู้","Toxic Relationship","Healthy Relationship"],
  en: ["A Falls First","B Falls First","Mutual Pining","In Love but Won't Admit","Hidden Identity","Secret Crush","Pretending Not to Care","Forbidden Love","Affair","Toxic Relationship","Healthy Relationship"]
};

const meeting = {
  th: ["ชนกันโดยบังเอิญ","ช่วยชีวิตกันไว้","เข้าใจผิดอย่างรุนแรง","ถูกบังคับให้ร่วมงาน","เป็นศัตรูกันตั้งแต่แรก","เจอกันในวันที่แย่ที่สุด","เจอกันโดยบังเอิญ","รู้จักกันทางออนไลน์","ประสบอุบัติเหตุ","ฝ่ายใดฝ่ายหนึ่งพึ่งอกหักมา","ทักผิดคน","คลุมถุงชน"],
  en: ["Accidental Collision","Saved Each Other","Major Misunderstanding","Forced to Work Together","Enemies from the Start","Met on the Worst Day","Met by Fate","Met Online","Accident","Fresh Breakup","Wrong Text","Arranged Marriage"]
};

const conflict = {
  th: ["ความลับที่ห้ามบอก","หน้าที่ขัดกับหัวใจ","อายุขัยไม่เท่ากัน","ถ้ารักกัน โลกจะพัง","อีกฝ่ายต้องหายไป","ความทรงจำที่ถูกลบ","Friend zone","แฟนเก่า","ครอบครัว","ลูกเลี้ยง","ลูกนอกสมรส","ล้มละลาย","Long Distance Relationship","กำแพงภาษา","ความเห็นไม่ตรงกัน","Slow Burn","ฐานะต่างกัน","มีตัวอิจฉา","รักสามเส้า","โพชนกัน","การแข่งขัน","หักหลังกัน"],
  en: ["Forbidden Secret","Duty vs Love","Different Lifespans","Love Will Destroy the World","One Must Disappear","Erased Memories","Friend Zone","Ex","Family Issues","Stepchild","Illegitimate Child","Bankruptcy","Long Distance Relationship","Language Barrier","Different Opinions","Slow Burn","Class Difference","Love Rival","Love Triangle","Position Conflict","Competition","Betrayal"]
};

const tone = {
  th: ["หวานละมุน","เจ็บช้าๆ","ดราม่าหนัก","Happy Ending แบบแลกมาด้วยน้ำตา","Bad Ending","Romantic Comedy"],
  en: ["Soft & Sweet","Slow Burn Angst","Heavy Drama","Bittersweet Happy Ending","Bad Ending","Romantic Comedy"]
};

// ================= FUNCTIONS =================

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

let lastResult = null;

function generateAU() {
  lastResult = {
    au: Math.floor(Math.random() * AU.th.length),
    role: Math.floor(Math.random() * roles.th.length),
    meet: Math.floor(Math.random() * meeting.th.length),
    conflict: Math.floor(Math.random() * conflict.th.length),
    tone: Math.floor(Math.random() * tone.th.length)
  };

  renderResult();
}

function renderResult() {
  const result = document.getElementById("result");
  const t = text[currentLang];

  if (!lastResult) {
    result.innerText = t.defaultResult;
    return;
  }

  result.innerHTML =
`🪐 <span class="label">${t.labels.au}:</span> ${AU[currentLang][lastResult.au]}
💫 <span class="label">${t.labels.role}:</span> ${roles[currentLang][lastResult.role]}
📍 <span class="label">${t.labels.meet}:</span> ${meeting[currentLang][lastResult.meet]}
🕯 <span class="label">${t.labels.conflict}:</span> ${conflict[currentLang][lastResult.conflict]}
🎭 <span class="label">${t.labels.tone}:</span> ${tone[currentLang][lastResult.tone]}`;
}

function switchLanguage() {
  currentLang = currentLang === "th" ? "en" : "th";
  const t = text[currentLang];

  document.getElementById("sub").innerText = t.subtitle;
  document.getElementById("generateBtn").innerText = t.generate;
  document.getElementById("language").innerText = currentLang.toUpperCase();

  renderResult();
}

// ================= EVENT =================

document.getElementById("generateBtn").addEventListener("click", generateAU);
document.getElementById("language").addEventListener("click", switchLanguage);
