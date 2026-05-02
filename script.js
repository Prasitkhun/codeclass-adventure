const lessons = {
  intro: {
    kicker: "บทที่ 1",
    title: "การสั่งให้คอมพิวเตอร์ทำงาน",
    body: "โปรแกรมคือชุดคำสั่งที่เราเขียนให้คอมพิวเตอร์ทำตามทีละขั้น บทนี้จะฝึกอ่านคำสั่งพื้นฐานและทำนายผลลัพธ์ง่าย ๆ",
    code: 'message = "สวัสดี"\nprint(message)',
    activities: [
      qChoice("คำสั่งใดใช้แสดงข้อความบนหน้าจอ?", 'print("สวัสดี")', ['print("สวัสดี")', 'show("สวัสดี")', 'say "สวัสดี"', 'text = "สวัสดี"']),
      qFill('เติมคำสั่ง: ___("Hello")', "print"),
      qChoice('ผลลัพธ์ของ print("Hi") คืออะไร?', "Hi", ["Hi", "print", '"Hi"', "ไม่มีผลลัพธ์"]),
      qChoice("โปรแกรมทำงานตามลำดับแบบใด?", "จากบรรทัดบนลงล่าง", ["จากบรรทัดบนลงล่าง", "สุ่มบรรทัด", "จากล่างขึ้นบน", "เฉพาะบรรทัดสุดท้าย"]),
      qFill('เติมเครื่องหมายคำพูด: print(___สวัสดี___)', '"'),
      qChoice('คำสั่งใดถูกต้องที่สุด?', 'print("CodeClass")', ['print("CodeClass")', "print CodeClass", 'print= "CodeClass"', 'show.print("CodeClass")']),
      qFill('ถ้าต้องการแสดงคำว่า Python ให้เขียน print("___")', "Python"),
      qChoice("ข้อใดเป็นข้อความในภาษา Python?", '"บ้าน"', ['"บ้าน"', "บ้าน", "print", "10"]),
      qChoice('print("A")\nprint("B") แสดงผลอย่างไร?', "A แล้ว B", ["A แล้ว B", "B แล้ว A", "แสดงเฉพาะ A", "แสดงเฉพาะ B"]),
      qFill('เติมคำที่หายไป: ___("ฉันกำลังเรียน")', "print"),
      qChoice("วงเล็บใน print() ใช้ทำอะไร?", "ครอบสิ่งที่ต้องการส่งให้คำสั่ง", ["ครอบสิ่งที่ต้องการส่งให้คำสั่ง", "ลบข้อความ", "หยุดโปรแกรม", "ตั้งชื่อตัวแปร"]),
      qChoice('บรรทัดใดจะทำให้เห็นคำว่า "ผ่าน"?', 'print("ผ่าน")', ['print("ผ่าน")', 'pass = print', '"ผ่าน"', "show ผ่าน"]),
      qFill('เติมผลลัพธ์: print("เริ่ม") จะแสดงคำว่า ___', "เริ่ม"),
      qChoice("ถ้าเขียนคำสั่งผิด โปรแกรมมักจะเกิดอะไร?", "แจ้งข้อผิดพลาด", ["แจ้งข้อผิดพลาด", "แก้เองเสมอ", "ลบไฟล์", "ปิดเครื่อง"]),
      qFill('เติมโค้ดให้สมบูรณ์: print(___"จบ"___)', '"')
    ]
  },
  variable: {
    kicker: "บทที่ 2",
    title: "ตัวแปรคือกล่องเก็บข้อมูล",
    body: "ตัวแปรช่วยให้เราเก็บข้อมูลไว้ใช้ต่อ เช่น ชื่อ อายุ หรือคะแนน แล้วนำไปแสดงผลหรือคำนวณได้โดยไม่ต้องพิมพ์ข้อมูลเดิมซ้ำ",
    code: 'name = "เมย์"\nprint(name)',
    activities: [
      qChoice("ตัวแปรใช้ทำอะไร?", "เก็บข้อมูลไว้ใช้ต่อ", ["เก็บข้อมูลไว้ใช้ต่อ", "ลบข้อมูล", "เปิดเว็บ", "เปลี่ยนสีหน้าจอ"]),
      qFill('เติมชื่อตัวแปร: ___ = "เมย์"', "name"),
      qChoice('จาก name = "เมย์" ค่าในตัวแปร name คืออะไร?', "เมย์", ["เมย์", "name", "print", "="]),
      qFill('ถ้าจะเก็บอายุ ควรใช้ตัวแปรชื่อ ___', "age"),
      qChoice("ข้อใดเป็นการกำหนดค่าตัวแปรที่ถูกต้อง?", 'score = 10', ['score = 10', '10 = score', 'score == 10', 'score: 10']),
      qChoice('name = "บี"\nprint(name) แสดงผลอะไร?', "บี", ["บี", "name", '"บี"', "ไม่มีผลลัพธ์"]),
      qFill('เติมคำสั่งแสดงตัวแปร: print(___) เมื่อมี name = "แพร"', "name"),
      qChoice("ชื่อตัวแปรแบบใดอ่านง่ายที่สุด?", "student_name", ["student_name", "s", "123name", "student-name"]),
      qFill("เติมค่า: score = ___ ถ้าต้องการเก็บคะแนน 9", "9"),
      qChoice('ข้อใดเป็นข้อความที่เก็บในตัวแปรได้?', 'city = "Bangkok"', ['city = "Bangkok"', "city = Bangkok", '"city" = Bangkok', "Bangkok = city"]),
      qFill('เติมตัวแปรเดียวกัน: fruit = "มะม่วง"\nprint(___)', "fruit"),
      qChoice("ถ้าเปลี่ยนค่าตัวแปร name โปรแกรมจะใช้ค่าใด?", "ค่าล่าสุด", ["ค่าล่าสุด", "ค่าแรกเสมอ", "สุ่มค่า", "ไม่มีค่า"]),
      qChoice("เครื่องหมาย = ในการกำหนดค่าหมายถึงอะไร?", "นำค่าด้านขวาไปเก็บในชื่อด้านซ้าย", ["นำค่าด้านขวาไปเก็บในชื่อด้านซ้าย", "เท่ากันทางคณิตศาสตร์เสมอ", "พิมพ์ข้อความ", "เริ่มลูป"]),
      qFill('เติมให้ถูก: ___ = "CodeClass"\nprint(course)', "course"),
      qChoice("ข้อใดไม่ควรเป็นชื่อตัวแปรใน Python?", "2name", ["2name", "name2", "my_name", "score"])
    ]
  },
  condition: {
    kicker: "บทที่ 3",
    title: "เงื่อนไขช่วยให้โปรแกรมตัดสินใจ",
    body: "คำสั่ง if ใช้ตรวจว่าเงื่อนไขเป็นจริงหรือไม่ ถ้าจริง โปรแกรมจะทำคำสั่งที่อยู่ข้างใน เหมือนประตูที่เปิดเมื่อผ่านเงื่อนไข",
    code: 'age = 20\nif age >= 18:\n    print("ผ่าน")',
    activities: [
      qChoice("คำสั่งใดใช้สร้างเงื่อนไข?", "if", ["if", "print", "for", "name"]),
      qChoice("age >= 18 หมายถึงอะไร?", "อายุมากกว่าหรือเท่ากับ 18", ["อายุมากกว่าหรือเท่ากับ 18", "อายุน้อยกว่า 18", "อายุเท่ากับ 18 เท่านั้น", "ลบอายุ 18"]),
      qFill("เติมคำสั่งเงื่อนไข: ___ age >= 18:", "if"),
      qChoice('age = 20\nif age >= 18:\n    print("ผ่าน") แสดงผลอะไร?', "ผ่าน", ["ผ่าน", "ไม่ผ่าน", "age", "ไม่มีผลลัพธ์"]),
      qChoice('age = 15 แล้ว age >= 18 เป็นจริงไหม?', "ไม่จริง", ["ไม่จริง", "จริง", "สุ่ม", "ไม่มีคำตอบ"]),
      qFill('เติมเครื่องหมายให้แปลว่า "ตั้งแต่ 10 ขึ้นไป": score ___ 10', ">="),
      qChoice("บรรทัดที่อยู่ข้างใน if ต้องมีอะไรนำหน้า?", "การย่อหน้า", ["การย่อหน้า", "เครื่องหมาย =", "คำว่า end", "ตัวเลข"]),
      qFill('เติมผลลัพธ์: ถ้า password = "1234" และตรวจ password == "1234" จะเป็น ___', "จริง"),
      qChoice("เครื่องหมาย == ใช้ทำอะไร?", "เปรียบเทียบว่าเท่ากันไหม", ["เปรียบเทียบว่าเท่ากันไหม", "กำหนดค่า", "วนซ้ำ", "พิมพ์ข้อความ"]),
      qChoice("เครื่องหมาย < หมายถึงอะไร?", "น้อยกว่า", ["น้อยกว่า", "มากกว่า", "เท่ากับ", "ไม่เท่ากับ"]),
      qFill('เติมเงื่อนไข: if score ___ 50: เพื่อให้คะแนน 50 ผ่าน', ">="),
      qChoice('ถ้า is_raining เป็นจริง ควรพิมพ์อะไรในโปรแกรมเช็กร่ม?', "พกร่ม", ["พกร่ม", "ปิดโปรแกรม", "ลบตัวแปร", "วนซ้ำ 10 รอบ"]),
      qChoice("เงื่อนไขช่วยให้โปรแกรมทำอะไรได้?", "เลือกทางทำงานตามสถานการณ์", ["เลือกทางทำงานตามสถานการณ์", "จำข้อความเท่านั้น", "เปลี่ยนภาษาเอง", "เปิดอินเทอร์เน็ตเสมอ"]),
      qFill('เติมคำที่หายไป: if temperature > 37:\n    ___("มีไข้")', "print"),
      qChoice('ข้อใดเป็น if ที่ถูกต้อง?', "if score >= 80:", ["if score >= 80:", "if score >= 80", "score if >= 80:", "if = score 80"])
    ]
  },
  loop: {
    kicker: "บทที่ 4",
    title: "วนซ้ำเพื่อทำงานเดิมหลายครั้ง",
    body: "ลูป for ช่วยสั่งให้โปรแกรมทำคำสั่งเดิมซ้ำตามจำนวนที่ต้องการ เหมาะกับงานที่เป็นแพตเทิร์น เช่น พิมพ์รายการหรือทำคะแนนซ้ำหลายรอบ",
    code: 'for i in range(3):\n    print("ดาว", i)',
    activities: [
      qChoice("ลูปใช้ทำอะไร?", "ทำงานซ้ำ", ["ทำงานซ้ำ", "หยุดโปรแกรม", "เก็บข้อความ", "สร้างเงื่อนไขเท่านั้น"]),
      qChoice("range(3) วนกี่ครั้ง?", "3", ["3", "2", "4", "0"]),
      qFill("เติมจำนวนครั้ง: for i in range(___): ถ้าต้องการวน 5 ครั้ง", "5"),
      qChoice('for i in range(2):\n    print("Hi") แสดง Hi กี่ครั้ง?', "2", ["2", "1", "3", "ไม่มี"]),
      qChoice("ค่า i ใน range(3) คือชุดใด?", "0, 1, 2", ["0, 1, 2", "1, 2, 3", "3, 2, 1", "0, 1, 2, 3"]),
      qFill('เติมคำสั่งลูป: ___ i in range(3):', "for"),
      qChoice("บรรทัดในลูปต้องมีอะไรนำหน้า?", "การย่อหน้า", ["การย่อหน้า", "เครื่องหมาย +", "คำว่า stop", "วงเล็บสองชั้น"]),
      qChoice('for i in range(4) จะเริ่ม i ที่ค่าใด?', "0", ["0", "1", "4", "-1"]),
      qFill('เติมคำที่หายไป: for i ___ range(3):', "in"),
      qChoice("ถ้าต้องการพิมพ์ 10 รอบ ควรใช้ข้อใด?", "range(10)", ["range(10)", "range(9)", "range(1)", "range(0)"]),
      qFill('เติมคำสั่งแสดงผลในลูป: print("รอบ", ___)', "i"),
      qChoice("ลูปช่วยลดอะไรได้มากที่สุด?", "การเขียนคำสั่งซ้ำ ๆ", ["การเขียนคำสั่งซ้ำ ๆ", "การคิดโจทย์", "การตั้งชื่อตัวแปร", "การเปิดเบราว์เซอร์"]),
      qChoice('for i in range(1):\n    print("Go") แสดง Go กี่ครั้ง?', "1", ["1", "0", "2", "ไม่มี"]),
      qFill('เติมให้วน 7 ครั้ง: range(___)', "7"),
      qChoice("ข้อใดเป็นลูป for ที่ถูกต้อง?", "for i in range(3):", ["for i in range(3):", "for range i 3", "loop i = 3", "for = range(3)"])
    ]
  }
};

const categories = {
  basic: {
    title: "พื้นฐาน",
    lessons: ["intro", "variable"]
  },
  logic: {
    title: "ตรรกะ",
    lessons: ["condition"]
  },
  repeat: {
    title: "การทำซ้ำ",
    lessons: ["loop"]
  }
};

const practiceLevels = [
  {
    title: "พิมพ์ข้อความแรก",
    goal: "เขียนโค้ดให้แสดงคำว่า สวัสดี",
    starter: 'print("สวัสดี")',
    hint: 'ใช้คำสั่ง print("สวัสดี")',
    target: "สวัสดี"
  },
  {
    title: "เก็บชื่อในตัวแปร",
    goal: "สร้างตัวแปร name เก็บคำว่า เมย์ แล้วแสดงค่า name",
    starter: 'name = "เมย์"\nprint(name)',
    hint: 'บรรทัดแรกให้ name = "เมย์" แล้วบรรทัดถัดไป print(name)',
    target: "เมย์"
  },
  {
    title: "ใช้ตัวเลขกับเงื่อนไข",
    goal: "ทำให้โปรแกรมแสดงคำว่า ผ่าน ด้วย age และ if",
    starter: 'age = 18\nif age >= 18:\n    print("ผ่าน")',
    hint: "ตั้ง age เป็น 18 หรือมากกว่า แล้วใช้ if age >= 18:",
    target: "ผ่าน"
  },
  {
    title: "วนซ้ำ 3 รอบ",
    goal: "ใช้ลูปให้แสดง ดาว 0, ดาว 1, ดาว 2",
    starter: 'for i in range(3):\n    print("ดาว", i)',
    hint: 'ใช้ for i in range(3): แล้ว print("ดาว", i)',
    target: "ดาว 0\nดาว 1\nดาว 2"
  },
  {
    title: "ภารกิจรวมร่าง",
    goal: "เก็บคำว่า พร้อม ในตัวแปร status แล้วแสดงผลเมื่อ level ตั้งแต่ 5 ขึ้นไป",
    starter: 'status = "พร้อม"\nlevel = 5\nif level >= 5:\n    print(status)',
    hint: 'ต้องมี status = "พร้อม", level = 5 และ print(status) อยู่ใน if',
    target: "พร้อม"
  }
];

const completed = {};
const questionIndex = {};
Object.keys(lessons).forEach((key) => {
  completed[key] = new Set();
  questionIndex[key] = 0;
});

let currentLesson = "intro";
let currentPracticeLevel = 0;
const completedPracticeLevels = new Set();
let activityAttempts = 0;
let practiceAttempts = 0;
const pointsPerQuestion = 10;
const storageKey = "codeclass-pizza-score";
const profilesStorageKey = "codeclass-pizza-profiles";
let profiles = {};
let activeProfileId = "main";

const lessonKicker = document.querySelector("#lessonKicker");
const lessonTitle = document.querySelector("#lessonTitle");
const lessonBody = document.querySelector("#lessonBody");
const lessonCode = document.querySelector("#lessonCode");
const activityTitle = document.querySelector("#activityTitle");
const activityArea = document.querySelector("#activityArea");
const activityStatus = document.querySelector("#activityStatus");
const feedback = document.querySelector("#feedback");
const learnPage = document.querySelector("#learnPage");
const playerPage = document.querySelector("#playerPage");
const viewButtons = document.querySelectorAll(".view-btn");
const pages = {
  learn: learnPage,
  player: playerPage,
  course: document.querySelector("#coursePage"),
  missions: document.querySelector("#missionsPage"),
  badges: document.querySelector("#badgesPage"),
  guide: document.querySelector("#guidePage")
};
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const codeInput = document.querySelector("#codeInput");
const output = document.querySelector("#output");
const playerName = document.querySelector("#playerName");
const startScreen = document.querySelector("#startScreen");
const startNameInput = document.querySelector("#startNameInput");
const startBtn = document.querySelector("#startBtn");
const startError = document.querySelector("#startError");
const profileSelect = document.querySelector("#profileSelect");
const newProfileBtn = document.querySelector("#newProfileBtn");
const profileSummary = document.querySelector("#profileSummary");
const totalScore = document.querySelector("#totalScore");
const scorePercent = document.querySelector("#scorePercent");
const playerStats = document.querySelector("#playerStats");
const scoreReport = document.querySelector("#scoreReport");
const resetScoreBtn = document.querySelector("#resetScoreBtn");
const badgeGrid = document.querySelector("#badgeGrid");
const levelBadge = document.querySelector("#levelBadge");
const levelTitle = document.querySelector("#levelTitle");
const levelGoal = document.querySelector("#levelGoal");
const levelProgress = document.querySelector("#levelProgress");
const levelHint = document.querySelector("#levelHint");
const prevLevelBtn = document.querySelector("#prevLevelBtn");
const checkLevelBtn = document.querySelector("#checkLevelBtn");
const nextLevelBtn = document.querySelector("#nextLevelBtn");
const canvas = document.querySelector("#codeCanvas");
const ctx = canvas.getContext("2d");

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    currentLesson = button.dataset.lesson;
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderLesson();
  });
});

viewButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveView(button.dataset.view));
});
document.querySelector("#runBtn").addEventListener("click", () => runMiniCode(true));
startBtn.addEventListener("click", startWithName);
startNameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") startWithName();
});
playerName.addEventListener("input", () => {
  saveProgress();
  renderProfileControls();
});
profileSelect.addEventListener("change", () => switchProfile(profileSelect.value));
newProfileBtn.addEventListener("click", createProfile);
resetScoreBtn.addEventListener("click", resetProgress);
prevLevelBtn.addEventListener("click", () => movePracticeLevel(-1));
nextLevelBtn.addEventListener("click", () => movePracticeLevel(1));
checkLevelBtn.addEventListener("click", checkPracticeLevel);

function qChoice(prompt, answer, options) {
  return { type: "choice", prompt, answer, options };
}

function qFill(prompt, answer) {
  return { type: "fill", prompt, answer };
}

function setActiveView(view) {
  Object.entries(pages).forEach(([key, page]) => {
    page.classList.toggle("hidden", key !== view);
  });
  viewButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
  if (view === "player") renderScoreReport();
  if (view === "badges") renderBadges();
}

function renderLesson() {
  const lesson = lessons[currentLesson];
  lessonKicker.textContent = lesson.kicker;
  lessonTitle.textContent = lesson.title;
  lessonBody.textContent = lesson.body;
  lessonCode.textContent = lesson.code;
  output.textContent = "ผลลัพธ์จะแสดงตรงนี้";
  feedback.textContent = "";
  renderStatus();
  renderActivity();
  drawVisual();
}

function startWithName() {
  const name = startNameInput.value.trim();
  if (!name) {
    startError.textContent = "กรุณาพิมพ์ชื่อก่อนเริ่ม";
    startNameInput.focus();
    return;
  }

  playerName.value = name;
  profiles[activeProfileId] = buildProfilePayload();
  saveProgress();
  renderProfileControls();
  hideStartScreen();
}

function hideStartScreen() {
  startScreen.classList.add("hidden");
}

function showStartScreenIfNeeded() {
  const name = playerName.value.trim();
  if (name) {
    hideStartScreen();
    return;
  }
  startScreen.classList.remove("hidden");
  startNameInput.focus();
}

function renderPracticeLevel(shouldReplaceCode = true) {
  const level = practiceLevels[currentPracticeLevel];
  const total = practiceLevels.length;
  levelBadge.textContent = `ระดับ ${currentPracticeLevel + 1}/${total}`;
  levelTitle.textContent = level.title;
  levelGoal.textContent = level.goal;
  levelHint.textContent = `คำใบ้: ${level.hint}`;
  levelProgress.style.width = `${(completedPracticeLevels.size / total) * 100}%`;
  prevLevelBtn.disabled = currentPracticeLevel === 0;
  nextLevelBtn.disabled = currentPracticeLevel === total - 1;
  checkLevelBtn.textContent = completedPracticeLevels.has(currentPracticeLevel) ? "ตรวจอีกครั้ง" : "ตรวจระดับ";
  if (shouldReplaceCode) {
    codeInput.value = level.starter;
    output.textContent = "ลองรันหรือกดตรวจระดับได้เลย";
  }
}

function renderActivity() {
  const lesson = lessons[currentLesson];
  const index = questionIndex[currentLesson];
  const question = lesson.activities[index];
  const done = completed[currentLesson].size;
  const pageNav = renderActivityPageNav(lesson, index);

  activityTitle.textContent = `หน้ากิจกรรม ${index + 1} จาก ${lesson.activities.length}`;

  if (question.type === "choice") {
    activityArea.innerHTML = `
      ${pageNav}
      <div class="quiz-meta">
        <span>หน้า ${index + 1}/${lesson.activities.length}</span>
        <span>${done}/${lesson.activities.length} ข้อสำเร็จ</span>
      </div>
      <p class="question-text">${question.prompt}</p>
      <div class="choices">
        ${question.options.map((option) => `<button class="choice" type="button">${option}</button>`).join("")}
      </div>
      <div class="activity-actions">
        <button class="check-btn secondary-btn" type="button" data-action="prev">หน้าก่อนหน้า</button>
        <button class="check-btn secondary-btn" type="button" data-action="next">หน้าถัดไป</button>
      </div>
    `;
    activityArea.querySelectorAll(".choice").forEach((choice) => {
      choice.addEventListener("click", () => checkQuestion(choice.textContent, choice));
    });
  } else {
    activityArea.innerHTML = `
      ${pageNav}
      <div class="quiz-meta">
        <span>หน้า ${index + 1}/${lesson.activities.length}</span>
        <span>${done}/${lesson.activities.length} ข้อสำเร็จ</span>
      </div>
      <p class="question-text">${question.prompt}</p>
      <div class="fill-row">
        <input id="fillAnswer" aria-label="คำตอบกิจกรรม" placeholder="พิมพ์คำตอบ">
        <button class="check-btn" type="button" data-action="check">ตรวจคำตอบ</button>
      </div>
      <div class="activity-actions">
        <button class="check-btn secondary-btn" type="button" data-action="prev">หน้าก่อนหน้า</button>
        <button class="check-btn secondary-btn" type="button" data-action="next">หน้าถัดไป</button>
      </div>
    `;
    activityArea.querySelector('[data-action="check"]').addEventListener("click", () => {
      checkQuestion(activityArea.querySelector("#fillAnswer").value.trim());
    });
    activityArea.querySelector("#fillAnswer").addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        checkQuestion(event.currentTarget.value.trim());
      }
    });
  }

  activityArea.querySelectorAll(".page-dot").forEach((button) => {
    button.addEventListener("click", () => goQuestion(Number(button.dataset.page)));
  });
  activityArea.querySelector('[data-action="prev"]').addEventListener("click", () => moveQuestion(-1));
  activityArea.querySelector('[data-action="next"]').addEventListener("click", () => moveQuestion(1));
}

function renderActivityPageNav(lesson, activeIndex) {
  const dots = lesson.activities.map((_, pageIndex) => {
    const classes = ["page-dot"];
    if (pageIndex === activeIndex) classes.push("active");
    if (completed[currentLesson].has(pageIndex)) classes.push("done");
    return `<button class="${classes.join(" ")}" type="button" data-page="${pageIndex}" aria-label="เปิดหน้ากิจกรรมที่ ${pageIndex + 1}">${pageIndex + 1}</button>`;
  }).join("");

  return `
    <div class="activity-page-head">
      <div>
        <p class="lesson-kicker">หน้ากิจกรรม</p>
        <strong>${lessons[currentLesson].title}</strong>
      </div>
      <span>${activeIndex + 1}/${lesson.activities.length}</span>
    </div>
    <div class="page-dots" aria-label="เลือกหน้ากิจกรรม">${dots}</div>
  `;
}

function checkQuestion(value, element) {
  const lesson = lessons[currentLesson];
  const index = questionIndex[currentLesson];
  const question = lesson.activities[index];
  const isCorrect = normalize(value) === normalize(question.answer);
  activityAttempts += 1;

  if (element) {
    element.classList.add(isCorrect ? "correct" : "wrong");
  }

  if (isCorrect) {
    const isNewScore = !completed[currentLesson].has(index);
    completed[currentLesson].add(index);
    feedback.textContent = isNewScore ? `ถูกต้อง! ได้ ${pointsPerQuestion} คะแนน` : "ถูกต้อง! ข้อนี้เคยได้คะแนนแล้ว";
    updateProgress();
    renderStatus();
    renderActivity();
    renderScoreReport();
    drawVisual();
    saveProgress();
  } else {
    feedback.textContent = "ยังไม่ใช่ ลองดูตัวอย่างด้านบนแล้วตอบอีกครั้ง";
    renderScoreReport();
    saveProgress();
  }
}

function moveQuestion(direction) {
  const total = lessons[currentLesson].activities.length;
  questionIndex[currentLesson] = (questionIndex[currentLesson] + direction + total) % total;
  feedback.textContent = "";
  renderActivity();
  saveProgress();
}

function goQuestion(index) {
  const total = lessons[currentLesson].activities.length;
  questionIndex[currentLesson] = Math.min(Math.max(index, 0), total - 1);
  feedback.textContent = "";
  renderActivity();
  saveProgress();
}

function normalize(value) {
  return String(value).trim().replace(/\s+/g, " ").toLowerCase();
}

function renderStatus() {
  const done = completed[currentLesson].size;
  const total = lessons[currentLesson].activities.length;
  activityStatus.textContent = done === total ? "สำเร็จทั้งบท" : `${done}/${total} ข้อ`;
  activityStatus.style.background = done === total ? "rgba(31, 157, 104, 0.14)" : "#e8eef5";
  activityStatus.style.color = done === total ? "#14523a" : "#627080";
}

function updateProgress() {
  const total = Object.values(lessons).reduce((sum, lesson) => sum + lesson.activities.length, 0);
  const done = Object.values(completed).reduce((sum, set) => sum + set.size, 0);
  progressText.textContent = `${done}/${total} ข้อ`;
  progressBar.style.width = `${(done / total) * 100}%`;
  updateCategoryProgress();
  renderScoreReport();
}

function updateCategoryProgress() {
  Object.entries(categories).forEach(([key, category]) => {
    const total = category.lessons.reduce((sum, lessonKey) => sum + lessons[lessonKey].activities.length, 0);
    const done = category.lessons.reduce((sum, lessonKey) => sum + completed[lessonKey].size, 0);
    const label = document.querySelector(`[data-category-progress="${key}"]`);
    if (label) label.textContent = `${done}/${total}`;
  });
}

function renderScoreReport() {
  const totalQuestions = Object.values(lessons).reduce((sum, lesson) => sum + lesson.activities.length, 0);
  const doneQuestions = Object.values(completed).reduce((sum, set) => sum + set.size, 0);
  const score = doneQuestions * pointsPerQuestion;
  const maxScore = totalQuestions * pointsPerQuestion;
  const percent = Math.round((doneQuestions / totalQuestions) * 100);

  totalScore.textContent = `${score}/${maxScore}`;
  scorePercent.textContent = `${percent}% สำเร็จ`;
  playerStats.innerHTML = `
    <div><strong>${doneQuestions}</strong><span>ข้อที่ทำถูก</span></div>
    <div><strong>${activityAttempts}</strong><span>ครั้งที่ตอบ</span></div>
    <div><strong>${completedPracticeLevels.size}</strong><span>ระดับที่ผ่าน</span></div>
    <div><strong>${practiceAttempts}</strong><span>ครั้งที่ตรวจโค้ด</span></div>
  `;

  scoreReport.innerHTML = Object.entries(categories).map(([key, category]) => {
    const total = category.lessons.reduce((sum, lessonKey) => sum + lessons[lessonKey].activities.length, 0);
    const done = category.lessons.reduce((sum, lessonKey) => sum + completed[lessonKey].size, 0);
    const categoryScore = done * pointsPerQuestion;
    const width = Math.round((done / total) * 100);
    const rows = category.lessons.map((lessonKey) => {
      const lessonDone = completed[lessonKey].size;
      const lessonTotal = lessons[lessonKey].activities.length;
      return `<div class="lesson-score"><span>${lessons[lessonKey].title}</span><strong>${lessonDone * pointsPerQuestion}/${lessonTotal * pointsPerQuestion}</strong></div>`;
    }).join("");

    return `
      <section class="score-card">
        <div class="score-row">
          <strong>${category.title}</strong>
          <span>${categoryScore}/${total * pointsPerQuestion} คะแนน</span>
        </div>
        <div class="mini-track"><div style="width: ${width}%"></div></div>
        ${rows}
      </section>
    `;
  }).join("") + `
    <section class="score-card">
      <div class="score-row">
        <strong>สนามซ้อมโค้ด</strong>
        <span>${completedPracticeLevels.size}/${practiceLevels.length} ระดับ</span>
      </div>
      <div class="mini-track"><div style="width: ${Math.round((completedPracticeLevels.size / practiceLevels.length) * 100)}%"></div></div>
      <div class="lesson-score"><span>ระดับที่กำลังฝึก</span><strong>${currentPracticeLevel + 1}/${practiceLevels.length}</strong></div>
    </section>
  `;
  renderProfileControls();
  renderBadges();
}

function renderBadges() {
  const totalQuestions = Object.values(lessons).reduce((sum, lesson) => sum + lesson.activities.length, 0);
  const doneQuestions = Object.values(completed).reduce((sum, set) => sum + set.size, 0);
  const allLessonsDone = Object.keys(lessons).every((key) => completed[key].size === lessons[key].activities.length);
  const badges = [
    {
      title: "เริ่มต้นแล้ว",
      detail: "ทำกิจกรรมถูกอย่างน้อย 1 ข้อ",
      unlocked: doneQuestions >= 1
    },
    {
      title: "นักสะสม 10 ข้อ",
      detail: "ทำกิจกรรมถูกครบ 10 ข้อ",
      unlocked: doneQuestions >= 10
    },
    {
      title: "นักลุยครึ่งทาง",
      detail: "ทำกิจกรรมถูกอย่างน้อยครึ่งหนึ่ง",
      unlocked: doneQuestions >= Math.ceil(totalQuestions / 2)
    },
    {
      title: "จบบทครบ",
      detail: "ทำกิจกรรมทุกบทครบทั้งหมด",
      unlocked: allLessonsDone
    },
    {
      title: "นักซ้อมโค้ด",
      detail: "ผ่านสนามซ้อมครบ 5 ระดับ",
      unlocked: completedPracticeLevels.size === practiceLevels.length
    },
    {
      title: "ไม่ยอมแพ้",
      detail: "ตอบหรือทดลองรวมอย่างน้อย 20 ครั้ง",
      unlocked: activityAttempts + practiceAttempts >= 20
    }
  ];

  if (!badgeGrid) return;
  badgeGrid.innerHTML = badges.map((badge) => `
    <article class="badge-card ${badge.unlocked ? "unlocked" : ""}">
      <span>${badge.unlocked ? "★" : "?"}</span>
      <h3>${badge.title}</h3>
      <p>${badge.detail}</p>
      <strong>${badge.unlocked ? "ปลดล็อกแล้ว" : "ยังไม่ปลดล็อก"}</strong>
    </article>
  `).join("");
}

function saveProgress() {
  profiles[activeProfileId] = buildProfilePayload();
  localStorage.setItem(profilesStorageKey, JSON.stringify({
    activeProfileId,
    profiles
  }));
}

function buildProfilePayload() {
  const payload = {
    playerName: playerName.value,
    activityAttempts,
    practiceAttempts,
    currentPracticeLevel,
    completedPracticeLevels: [...completedPracticeLevels],
    questionIndex,
    completed: Object.fromEntries(Object.entries(completed).map(([key, set]) => [key, [...set]]))
  };
  return payload;
}

function loadProgress() {
  migrateSingleProfile();
  const raw = localStorage.getItem(profilesStorageKey);
  if (!raw) {
    profiles = {
      main: createEmptyProfile("ผู้เล่น 1")
    };
    activeProfileId = "main";
    applyProfile(profiles[activeProfileId]);
    saveProgress();
    renderProfileControls();
    return;
  }

  try {
    const payload = JSON.parse(raw);
    profiles = payload.profiles || {};
    activeProfileId = payload.activeProfileId || Object.keys(profiles)[0] || "main";
    if (!profiles[activeProfileId]) {
      activeProfileId = Object.keys(profiles)[0] || "main";
    }
    if (!profiles[activeProfileId]) {
      profiles[activeProfileId] = createEmptyProfile("ผู้เล่น 1");
    }
    applyProfile(profiles[activeProfileId]);
    renderProfileControls();
  } catch {
    localStorage.removeItem(profilesStorageKey);
    profiles = {
      main: createEmptyProfile("ผู้เล่น 1")
    };
    activeProfileId = "main";
    applyProfile(profiles[activeProfileId]);
    saveProgress();
    renderProfileControls();
  }
}

function migrateSingleProfile() {
  if (localStorage.getItem(profilesStorageKey)) return;
  const raw = localStorage.getItem(storageKey);
  if (!raw) return;
  try {
    const payload = JSON.parse(raw);
    profiles = {
      main: payload
    };
    activeProfileId = "main";
    localStorage.setItem(profilesStorageKey, JSON.stringify({ activeProfileId, profiles }));
    localStorage.removeItem(storageKey);
  } catch {
    localStorage.removeItem(storageKey);
  }
}

function createEmptyProfile(name) {
  const profile = {
    playerName: name,
    currentPracticeLevel: 0,
    completedPracticeLevels: [],
    questionIndex: {},
    completed: {}
  };
  Object.keys(lessons).forEach((key) => {
    profile.questionIndex[key] = 0;
    profile.completed[key] = [];
  });
  profile.activityAttempts = 0;
  profile.practiceAttempts = 0;
  return profile;
}

function applyProfile(profile) {
  playerName.value = profile.playerName || "";
  activityAttempts = Number(profile.activityAttempts || 0);
  practiceAttempts = Number(profile.practiceAttempts || 0);
  currentPracticeLevel = Math.min(Math.max(Number(profile.currentPracticeLevel || 0), 0), practiceLevels.length - 1);
  completedPracticeLevels.clear();
  (profile.completedPracticeLevels || []).forEach((level) => {
    if (Number.isInteger(level) && level >= 0 && level < practiceLevels.length) {
      completedPracticeLevels.add(level);
    }
  });
  Object.keys(lessons).forEach((key) => {
    completed[key] = new Set(profile.completed?.[key] || []);
    const savedIndex = Number(profile.questionIndex?.[key] || 0);
    questionIndex[key] = Math.min(Math.max(savedIndex, 0), lessons[key].activities.length - 1);
  });
}

function renderProfileControls() {
  const entries = Object.entries(profiles);
  profileSelect.innerHTML = entries.map(([id, profile], index) => {
    const name = profile.playerName || `ผู้เล่น ${index + 1}`;
    return `<option value="${id}">${name}</option>`;
  }).join("");
  profileSelect.value = activeProfileId;
  const currentName = profiles[activeProfileId]?.playerName || playerName.value || "ผู้เล่น";
  const totalQuestions = Object.values(lessons).reduce((sum, lesson) => sum + lesson.activities.length, 0);
  const doneQuestions = Object.values(completed).reduce((sum, set) => sum + set.size, 0);
  profileSummary.textContent = `${currentName}: ทำกิจกรรมแล้ว ${doneQuestions}/${totalQuestions} ข้อ และผ่านสนามซ้อม ${completedPracticeLevels.size}/${practiceLevels.length} ระดับ`;
}

function switchProfile(profileId) {
  saveProgress();
  activeProfileId = profileId;
  applyProfile(profiles[activeProfileId]);
  renderPracticeLevel(true);
  renderLesson();
  updateProgress();
  renderProfileControls();
  saveProgress();
}

function createProfile() {
  saveProgress();
  const nextNumber = Object.keys(profiles).length + 1;
  const id = `player-${Date.now()}`;
  profiles[id] = createEmptyProfile(`ผู้เล่น ${nextNumber}`);
  activeProfileId = id;
  applyProfile(profiles[id]);
  playerName.value = "";
  profiles[id].playerName = "";
  renderPracticeLevel(true);
  renderLesson();
  updateProgress();
  renderProfileControls();
  saveProgress();
  startNameInput.value = "";
  startError.textContent = "";
  startScreen.classList.remove("hidden");
  startNameInput.focus();
}

function resetProgress() {
  Object.keys(lessons).forEach((key) => {
    completed[key].clear();
    questionIndex[key] = 0;
  });
  currentPracticeLevel = 0;
  activityAttempts = 0;
  practiceAttempts = 0;
  completedPracticeLevels.clear();
  profiles[activeProfileId] = createEmptyProfile(playerName.value || profiles[activeProfileId]?.playerName || "ผู้เล่น");
  feedback.textContent = "เริ่มนับคะแนนใหม่แล้ว";
  renderPracticeLevel(true);
  renderLesson();
  updateProgress();
  saveProgress();
}

function movePracticeLevel(direction) {
  currentPracticeLevel = Math.min(Math.max(currentPracticeLevel + direction, 0), practiceLevels.length - 1);
  feedback.textContent = "";
  renderPracticeLevel(true);
  renderScoreReport();
  saveProgress();
}

function checkPracticeLevel() {
  const result = runMiniCode(true);
  const level = practiceLevels[currentPracticeLevel];
  practiceAttempts += 1;
  if (normalizeMultiline(result) === normalizeMultiline(level.target)) {
    completedPracticeLevels.add(currentPracticeLevel);
    output.textContent = `${result}\n\nผ่านระดับนี้แล้ว`;
    renderPracticeLevel(false);
    renderScoreReport();
    saveProgress();
  } else {
    output.textContent = `${result}\n\nยังไม่ผ่าน เป้าหมายคือ:\n${level.target}`;
    renderScoreReport();
    saveProgress();
  }
}

function normalizeMultiline(value) {
  return String(value).trim().split("\n").map((line) => line.trim()).filter(Boolean).join("\n");
}

function runMiniCode(shouldRender = false) {
  const code = codeInput.value;
  const lines = code.split("\n");
  const memory = {};
  const result = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].trim();
    if (!line) continue;

    const assign = line.match(/^([a-zA-Z_]\w*)\s*=\s*["'](.+)["']$/);
    const numberAssign = line.match(/^([a-zA-Z_]\w*)\s*=\s*(\d+)$/);
    const printText = line.match(/^print\(["'](.+)["']\)$/);
    const printVar = line.match(/^print\(([a-zA-Z_]\w*)\)$/);
    const printTextVar = line.match(/^print\(["'](.+)["'],\s*([a-zA-Z_]\w*)\)$/);
    const ifLine = line.match(/^if\s+([a-zA-Z_]\w*)\s*>=\s*(\d+):$/);

    if (assign) {
      memory[assign[1]] = assign[2];
    } else if (numberAssign) {
      memory[numberAssign[1]] = Number(numberAssign[2]);
    } else if (printText) {
      result.push(printText[1]);
    } else if (printVar) {
      result.push(memory[printVar[1]] ?? "(ยังไม่มีค่าตัวแปรนี้)");
    } else if (printTextVar) {
      result.push(`${printTextVar[1]} ${memory[printTextVar[2]] ?? printTextVar[2]}`);
    } else if (ifLine) {
      const nextLine = (lines[index + 1] || "").trim();
      const printInside = nextLine.match(/^print\(["'](.+)["']\)$/);
      if ((memory[ifLine[1]] ?? 0) >= Number(ifLine[2]) && printInside) {
        result.push(printInside[1]);
      }
      index += 1;
    } else if (line.startsWith("for i in range(")) {
      const count = Number(line.match(/range\((\d+)\)/)?.[1] || 0);
      const nextLine = (lines[index + 1] || "").trim();
      const loopPrint = nextLine.match(/^print\(["'](.+)["'],\s*i\)$/);
      for (let i = 0; i < count; i += 1) {
        result.push(loopPrint ? `${loopPrint[1]} ${i}` : String(i));
      }
      index += 1;
    } else {
      result.push(`ยังอ่านคำสั่งนี้ไม่ได้: ${line}`);
    }
  }

  const text = result.length ? result.join("\n") : "ยังไม่มีผลลัพธ์";
  if (shouldRender) output.textContent = text;
  return text;
}

function drawVisual() {
  const lessonNames = Object.keys(lessons);
  const currentIndex = lessonNames.indexOf(currentLesson);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const sky = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  sky.addColorStop(0, "#78c8ff");
  sky.addColorStop(0.54, "#ffb7d3");
  sky.addColorStop(1, "#fff2a8");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawCloud(565, 54, 1.05);
  drawCloud(92, 84, 0.78);
  drawStar(628, 142, "#fff2a8");
  drawStar(500, 196, "#ffffff");

  const centerX = 386;
  const centerY = 145;
  const radius = 94;
  const slice = (Math.PI * 2) / lessonNames.length;

  ctx.fillStyle = "rgba(47, 36, 64, 0.16)";
  ctx.beginPath();
  ctx.ellipse(centerX, centerY + 94, 132, 18, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius + 16, 0, Math.PI * 2);
  ctx.fillStyle = "#ffb84d";
  ctx.fill();
  ctx.lineWidth = 7;
  ctx.strokeStyle = "#2f2440";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius + 3, 0, Math.PI * 2);
  ctx.fillStyle = "#ffd85a";
  ctx.fill();

  const colors = ["#ffe17a", "#ffef9d", "#ffd85a", "#ffeaa0"];
  lessonNames.forEach((name, index) => {
    const done = completed[name].size;
    const total = lessons[name].activities.length;
    const start = -Math.PI / 2 + index * slice;
    const end = start + slice;
    const mid = start + slice / 2;
    const labelX = centerX + Math.cos(mid) * 58;
    const labelY = centerY + Math.sin(mid) * 58;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, start, end);
    ctx.closePath();
    ctx.fillStyle = index === currentIndex ? "#ffe58f" : colors[index];
    ctx.fill();

    ctx.strokeStyle = "#2f2440";
    ctx.lineWidth = 4;
    ctx.stroke();

    drawTopping(centerX + Math.cos(mid - 0.25) * 34, centerY + Math.sin(mid - 0.25) * 34, "#ff6b7a");
    drawTopping(centerX + Math.cos(mid + 0.22) * 74, centerY + Math.sin(mid + 0.22) * 74, "#36c878");

    ctx.fillStyle = "#2f2440";
    ctx.font = "800 20px Segoe UI";
    ctx.textAlign = "center";
    ctx.fillText(`${done}/${total}`, labelX, labelY + 6);

    if (done === total) {
      ctx.font = "800 14px Segoe UI";
      ctx.fillText("ผ่าน", labelX, labelY + 28);
    }
  });

  ctx.beginPath();
  ctx.arc(centerX - 24, centerY - 9, 8, 0, Math.PI * 2);
  ctx.arc(centerX + 24, centerY - 9, 8, 0, Math.PI * 2);
  ctx.fillStyle = "#2f2440";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(centerX, centerY + 10, 30, 0.15, Math.PI - 0.15);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#2f2440";
  ctx.stroke();

  drawCartoonSlice(86, 92, currentIndex);

  ctx.fillStyle = "#2f2440";
  ctx.font = "800 20px Segoe UI";
  ctx.textAlign = "left";
  ctx.fillText("เลือกบทจากแท็บด้านข้าง", 42, 38);
  ctx.font = "700 14px Segoe UI";
  ctx.fillText("พิซซ่าการ์ตูนแสดงคะแนนของแต่ละบท", 42, 62);
}

function drawTopping(x, y, color) {
  ctx.beginPath();
  ctx.arc(x, y, 9, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#2f2440";
  ctx.stroke();
  if (color === "#27854d") {
    ctx.beginPath();
    ctx.ellipse(x, y, 7, 12, Math.PI / 5, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawCartoonSlice(x, y, index) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(-0.18 + index * 0.04);
  ctx.fillStyle = "rgba(47, 36, 64, 0.15)";
  ctx.beginPath();
  ctx.ellipse(72, 118, 78, 16, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(0, -10);
  ctx.lineTo(158, 22);
  ctx.lineTo(50, 112);
  ctx.closePath();
  ctx.fillStyle = "#ffd85a";
  ctx.fill();
  ctx.strokeStyle = "#2f2440";
  ctx.lineWidth = 7;
  ctx.lineJoin = "round";
  ctx.stroke();

  drawTopping(58, 32, "#ff6b7a");
  drawTopping(96, 48, "#36c878");
  drawTopping(72, 80, "#ff6b7a");
  ctx.fillStyle = "#2f2440";
  ctx.beginPath();
  ctx.arc(62, 58, 5, 0, Math.PI * 2);
  ctx.arc(92, 63, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(76, 72, 18, 0.2, Math.PI - 0.2);
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.restore();
}

function drawCloud(x, y, scale) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "#2f2440";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(-28, 6, 20, 0, Math.PI * 2);
  ctx.arc(0, -6, 26, 0, Math.PI * 2);
  ctx.arc(30, 8, 20, 0, Math.PI * 2);
  ctx.rect(-42, 4, 84, 26);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function drawStar(x, y, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.fillStyle = color;
  ctx.strokeStyle = "#2f2440";
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let i = 0; i < 8; i += 1) {
    const radius = i % 2 === 0 ? 16 : 7;
    const angle = -Math.PI / 2 + i * Math.PI / 4;
    const px = Math.cos(angle) * radius;
    const py = Math.sin(angle) * radius;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function drawRoundRect(x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

loadProgress();
renderPracticeLevel(true);
renderLesson();
updateProgress();
showStartScreenIfNeeded();
