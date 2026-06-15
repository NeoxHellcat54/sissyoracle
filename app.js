const STORAGE_KEY = "sissyOraclePwa.guided.v1";

const outfitPrompts = [
  "Goth", "Maid", "Latex", "Princess", "Bimbo", "Party", "Schoolgirl", "Stripper", "Doll", "Lingerie", "Casual", "Housewife", "Office", "Pornstar", "Cute", "Trashy", "Elegant"
];

const treatmentPrompts = [
  "Gentle", "Playful", "Slutty", "Strict", "Humiliating", "Degrading", "Chaotic", "Romantic", "Shameful", "Confident", "Nervous", "Obedient", "Mean", "Training", "Service", "Exposure"
];

const activityPrompts = [
  "Chores", "Dress-up", "Teasing", "Masturbation", "Orgasm control", "Toy play", "Anal training", "Oral training", "Bondage", "Online exposure", "Public exhibition", "Hookup fantasy", "Sissy exposure", "Public shame fantasy", "Transformation", "Roleplay scenario", "Writing/captions", "Mirror posing", "Go for a walk"
];

const defaultSettings = {
  allowToyMentions: true,
  allowPrivatePhotoPrompts: true,
  allowRealPublicPostingPrompts: false,
  allowPublicWalkPrompts: true,
  allowHookupFantasy: true,
  allowExplicitSexualTasks: true
};

const settingLabels = {
  allowToyMentions: "Toy mentions",
  allowPrivatePhotoPrompts: "Private photo prompts",
  allowRealPublicPostingPrompts: "Real online posting prompts",
  allowPublicWalkPrompts: "Public walk / outside outfit prompts",
  allowHookupFantasy: "Hookup fantasy prompts",
  allowExplicitSexualTasks: "Explicit sexual task prompts"
};

const outfitTemplates = [
  {
    match: ["Latex", "Princess"], title: "Latex Princess",
    text: "Wear a glossy black latex catsuit with a bright blue short dress over the top. Add white thigh-high stockings, white heels, a long flowy blonde wig, a large blue bow, pink lipstick, blue eyeshadow, and a silver tiara."
  },
  {
    match: ["Goth", "Maid"], title: "Goth Maid",
    text: "Wear a short black maid dress with a white apron, black fishnets, black platform heels, a black lace choker, a white maid headband, smoky eyeshadow, and dark red lipstick."
  },
  {
    match: ["Bimbo", "Party"], title: "Bimbo Party Girl",
    text: "Wear a tiny hot-pink mini dress, clear platform heels, a blonde wig, big hoop earrings, a rhinestone choker, fake lashes, bright blush, glitter eyeshadow, and thick glossy pink lips."
  },
  {
    match: ["Latex", "Maid"], title: "Latex Maid",
    text: "Wear a black latex bodysuit with a white maid apron over it. Add black latex gloves, white thigh-high stockings, black heels, a maid headband, a black collar, red lipstick, and sharp eyeliner."
  },
  {
    match: ["Goth", "Princess"], title: "Goth Princess",
    text: "Wear a black lace mini dress with a dark purple tutu skirt. Add black thigh-highs, black heels, a silver tiara, a black ribbon choker, smoky eyeshadow, and deep plum lipstick."
  },
  {
    match: ["Schoolgirl", "Slutty"], title: "Slutty Schoolgirl",
    text: "Wear a white button-up shirt tied above the waist, a short red plaid skirt, white knee-high socks, black Mary Janes, a loose necktie, pigtails, pink lipstick, and bright blush."
  },
  {
    match: ["Stripper"], title: "Stripper Fantasy",
    text: "Wear a tiny black bikini top, a micro skirt, fishnets, clear platform heels, a rhinestone choker, glitter body spray, smoky eyeshadow, fake lashes, and red lipstick."
  },
  {
    match: ["Maid"], title: "Maid",
    text: "Wear a black maid dress, a white apron, white thigh-high stockings, black heels, a maid headband, a black choker, neat eyeliner, and glossy pink lips."
  },
  {
    match: ["Goth"], title: "Goth",
    text: "Wear a black mini dress, black fishnets, black platform boots, a spiked choker, silver rings, smoky eyeshadow, black eyeliner, and dark red lipstick."
  },
  {
    match: ["Princess"], title: "Princess",
    text: "Wear a baby-blue short dress, white thigh-high stockings, white heels, a blonde wig, a large bow, a tiara, glitter eyeshadow, and pink lipstick."
  },
  {
    match: ["Bimbo"], title: "Bimbo",
    text: "Wear a tight pink crop top, a white micro skirt, pink platform heels, a blonde wig, hoop earrings, fake lashes, heavy blush, and thick glossy lips."
  },
  {
    match: [], title: "Sissy Outfit",
    text: "Wear a tight black top, a short pink skirt, white thigh-high stockings, pink heels, a choker, mascara, blush, and glossy lipstick."
  }
];

const treatmentLines = {
  Gentle: "Keep the tone soft, pretty, and encouraging.",
  Playful: "Make the session teasing, silly, and flirty.",
  Slutty: "Make every task feel sexual, shameless, and centered on the outfit.",
  Strict: "Make the session precise: no wandering, no filler, just outfit, task, and finish.",
  Humiliating: "Make the session embarrassing and focused on being seen as the finished sissy persona.",
  Degrading: "Use a harsher tone and make the session feel low, slutty, and exposing.",
  Chaotic: "Mix the selected activities together instead of keeping them neat and separate.",
  Romantic: "Make the session softer, fantasy-date styled, and focused on being desired.",
  Shameful: "Make the session feel like the outfit is too obvious and too sexual to hide.",
  Confident: "Make the session about presenting the look boldly and owning it.",
  Nervous: "Make the session about trembling, blushing, and being visibly aware of the outfit.",
  Obedient: "Make the session structured around following each selected task cleanly.",
  Mean: "Make the tone blunt, mocking, and unsentimental.",
  Training: "Make the session feel like training: outfit, repetition, sexual focus, and presentation.",
  Service: "Make the session about being dressed to serve while still being sexualized.",
  Exposure: "Make the session about being displayed, photographed, posted, or imagined as visible."
};

const defaultChores = [
  { id: uid(), name: "Clean bedroom surfaces", room: "Bedroom", duration: 15 },
  { id: uid(), name: "Tidy clothes or laundry", room: "Laundry", duration: 15 },
  { id: uid(), name: "Wipe bathroom sink", room: "Bathroom", duration: 10 }
];

let state = loadState();
let lastSession = null;
let oracle = { outfit: [], treatment: [], activities: [] };

function uid() { return crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random()); }
function sample(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function has(list, value) { return list.includes(value); }
function scoreTemplate(template, selected) { return template.match.filter(t => selected.includes(t)).length; }

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...saved, settings: { ...defaultSettings, ...saved.settings } } : { settings: { ...defaultSettings }, chores: defaultChores, savedSessions: [] };
  } catch {
    return { settings: { ...defaultSettings }, chores: defaultChores, savedSessions: [] };
  }
}
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

function showView(id) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.querySelector(`#${id}`).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderPromptGrid(rootId, prompts, selected, max) {
  const root = document.querySelector(`#${rootId}`);
  root.innerHTML = "";
  prompts.forEach(prompt => {
    const active = selected.includes(prompt);
    const disabled = !active && max && selected.length >= max;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `tag-chip ${active ? "active" : ""} ${disabled ? "disabled" : ""}`;
    btn.textContent = prompt;
    btn.addEventListener("click", () => {
      if (active) selected.splice(selected.indexOf(prompt), 1);
      else if (!max || selected.length < max) selected.push(prompt);
      renderAllPrompts();
    });
    root.appendChild(btn);
  });
}

function renderAllPrompts() {
  renderPromptGrid("outfitPromptGrid", outfitPrompts, oracle.outfit, 2);
  renderPromptGrid("treatmentPromptGrid", treatmentPrompts, oracle.treatment, 2);
  renderPromptGrid("activityPromptGrid", activityPrompts, oracle.activities, null);
}

function renderSettings() {
  const root = document.querySelector("#settingsList");
  root.innerHTML = "";
  Object.keys(defaultSettings).forEach(key => {
    const row = document.createElement("label");
    row.className = "setting-row";
    row.innerHTML = `<span>${settingLabels[key]}</span><input type="checkbox" ${state.settings[key] ? "checked" : ""} />`;
    row.querySelector("input").addEventListener("change", e => {
      state.settings[key] = e.target.checked;
      saveState();
    });
    root.appendChild(row);
  });
}

function renderChores() {
  const list = document.querySelector("#choreList");
  list.innerHTML = "";
  if (!state.chores.length) {
    list.innerHTML = `<li><span>No chores yet.</span></li>`;
    return;
  }
  state.chores.forEach(chore => {
    const item = document.createElement("li");
    item.innerHTML = `<span><strong>${chore.name}</strong><small>${chore.room} · ${chore.duration} min</small></span><button class="secondary">Delete</button>`;
    item.querySelector("button").addEventListener("click", () => {
      state.chores = state.chores.filter(c => c.id !== chore.id);
      saveState();
      renderChores();
    });
    list.appendChild(item);
  });
}

function renderSavedSessions() {
  const list = document.querySelector("#savedSessions");
  list.innerHTML = "";
  if (!state.savedSessions.length) {
    list.innerHTML = `<li><span>No saved sessions yet.</span></li>`;
    return;
  }
  state.savedSessions.slice().reverse().forEach(session => {
    const item = document.createElement("li");
    item.innerHTML = `<span><strong>${session.title}</strong><small>${session.createdAt}</small></span><button class="secondary">Load</button>`;
    item.querySelector("button").addEventListener("click", () => displaySession(session));
    list.appendChild(item);
  });
}

function selectOutfit() {
  const ranked = outfitTemplates
    .map(t => ({ ...t, score: scoreTemplate(t, oracle.outfit) }))
    .sort((a, b) => b.score - a.score || b.match.length - a.match.length);
  const chosen = ranked.find(t => t.score > 0) || outfitTemplates[outfitTemplates.length - 1];
  return chosen;
}

function treatmentText() {
  if (!oracle.treatment.length) return "Neutral treatment: keep it direct, specific, and focused on the selected activities.";
  return oracle.treatment.map(t => treatmentLines[t]).filter(Boolean).join(" ");
}

function pickChore() {
  return state.chores.length ? sample(state.chores) : { name: "Clean one visible surface", room: "Bedroom", duration: 10 };
}

function buildActivityTasks(outfit) {
  const a = oracle.activities;
  const tasks = [];
  const chore = pickChore();
  const explicit = state.settings.allowExplicitSexualTasks;
  const toys = state.settings.allowToyMentions;

  const hasChore = has(a, "Chores");
  const hasWalk = has(a, "Go for a walk") || has(a, "Public exhibition");
  const hasAnal = has(a, "Anal training");
  const hasOral = has(a, "Oral training");
  const hasExposure = has(a, "Online exposure") || has(a, "Sissy exposure");
  const hasPublic = has(a, "Public exhibition");

  if (hasWalk && hasAnal && toys && state.settings.allowPublicWalkPrompts) {
    tasks.push(`Wear a plug under the outfit and go for a 10-minute walk outside. Keep the outfit neat and return home without changing.`);
  } else if (hasWalk && state.settings.allowPublicWalkPrompts) {
    tasks.push(`Go for a 10-minute walk in the outfit. Choose one detail to make obvious: heels, stockings, makeup, wig, or skirt length.`);
  }

  if (hasChore && hasAnal && explicit && toys) {
    tasks.push(`Complete ${chore.name.toLowerCase()} in the ${chore.room.toLowerCase()} for ${chore.duration} minutes while wearing a plug. When the chore is done, spend 10 minutes on anal training in the full outfit.`);
  } else if (hasChore) {
    tasks.push(`Complete ${chore.name.toLowerCase()} in the ${chore.room.toLowerCase()} for ${chore.duration} minutes while wearing the full outfit.`);
  }

  if (has(a, "Dress-up")) {
    tasks.push(`Dress in this order: underwear, main outfit, legwear, shoes, accessories, wig or hair, makeup. Finish with one full-body pose.`);
  }

  if (has(a, "Teasing") && explicit) {
    tasks.push(`Tease for 10 minutes in the full outfit. Stop twice to fix the outfit and pose before continuing.`);
  }

  if (has(a, "Masturbation") && explicit) {
    tasks.push(`Masturbate for 10 minutes while keeping the outfit, shoes, and legwear on.`);
  }

  if (has(a, "Orgasm control") && explicit) {
    tasks.push(`Do three rounds of 3 minutes build-up and 1 minute stillness. Keep the outfit complete for all three rounds.`);
  }

  if (hasAnal && explicit && !tasks.some(t => t.includes("anal training"))) {
    tasks.push(toys
      ? `Spend 15 minutes on anal training in the full outfit. Use the outfit as the training uniform and keep the pose strict.`
      : `Make the next 15 minutes an anal-training fantasy scene centered on the outfit, posture, and inspection.`);
  }

  if (hasOral && explicit) {
    tasks.push(toys
      ? `Use a dildo for 10 minutes of oral training. Keep the outfit fully on and focus on makeup, posture, and presentation.`
      : `Make the next 10 minutes an oral-training fantasy scene focused on mouth, lipstick, posture, and obedience.`);
  }

  if (has(a, "Toy play") && explicit && toys) {
    tasks.push(`Use one toy for 10 minutes while staying fully dressed. Keep shoes and legwear on until the task is finished.`);
  }

  if (has(a, "Bondage") && toys) {
    tasks.push(`Add one restraint element for 10 minutes: wrists together, ankles limited, blindfold, collar, or another restriction.`);
  }

  if (has(a, "Hookup fantasy") && state.settings.allowHookupFantasy) {
    tasks.push(`Create a hookup fantasy: write the first message, imagine arriving in the outfit, then describe the first reaction to the full look.`);
  }

  if (has(a, "Transformation")) {
    tasks.push(`Create a transformation sequence: normal start, underwear layer, main outfit, hair and makeup, shoes, final persona.`);
  }

  if (has(a, "Roleplay scenario")) {
    tasks.push(`Act out a 5-minute character intro: name, outfit, purpose, and what the character is about to do.`);
  }

  if (has(a, "Writing/captions")) {
    tasks.push(`Write 3 captions for the outfit: cute, humiliating, and slutty.`);
  }

  if (has(a, "Mirror posing")) {
    tasks.push(`Do 6 mirror poses: cute, nervous, slutty, ashamed, doll-like, and confident.`);
  }

  if (hasExposure) {
    if (state.settings.allowRealPublicPostingPrompts && has(a, "Online exposure")) {
      tasks.push(`Take one outfit/action photo and post it online with this caption: "${captionFor(outfit.title)}"`);
    } else if (state.settings.allowPrivatePhotoPrompts) {
      tasks.push(`Take 4 photos: full outfit front, full outfit back, action shot, and final pose. Caption the best one: "${captionFor(outfit.title)}"`);
    } else {
      tasks.push(`Write a fake public caption for the finished outfit: "${captionFor(outfit.title)}"`);
    }
  }

  if (hasPublic && !tasks.some(t => t.includes("walk")) && state.settings.allowPublicWalkPrompts) {
    tasks.push(`Make the public exhibition element a dressed walk: 10 minutes outside, outfit visible, posture controlled, then return home.`);
  }

  if (!tasks.length) {
    tasks.push(`Do a 15-minute outfit session: dress fully, pose six times, write one caption, and take one final full-body photo or mental image.`);
  }

  return mergeTasks(tasks);
}

function mergeTasks(tasks) {
  const max = 5;
  return tasks.slice(0, max).map((text, index) => ({ label: `Task ${index + 1}`, text }));
}

function captionFor(outfitTitle) {
  const tone = oracle.treatment[0] || "Slutty";
  const map = {
    Gentle: `Soft little ${outfitTitle.toLowerCase()} moment.`,
    Playful: `Dressed up and causing trouble as a ${outfitTitle.toLowerCase()}.`,
    Slutty: `Dressed like a shameless ${outfitTitle.toLowerCase()} slut.`,
    Strict: `Fully dressed, fully assigned, fully on display.`,
    Humiliating: `Too dressed up to pretend this is innocent.`,
    Degrading: `Made up, dressed up, and posted like a proper sissy slut.`,
    Chaotic: `This outfit got out of control fast.`,
    Shameful: `This is exactly as embarrassing as it looks.`,
    Obedient: `Dressed, displayed, and following the session.`,
    Exposure: `The finished ${outfitTitle.toLowerCase()} look, exposed.`
  };
  return map[tone] || `The finished ${outfitTitle.toLowerCase()} look.`;
}

function buildTitle(outfit) {
  const mood = oracle.treatment[0] || "Generated";
  const activity = oracle.activities[0] || "Session";
  return `${mood} ${outfit.title} ${activity}`;
}

function generateSession() {
  const outfit = selectOutfit();
  const sections = [
    { label: "Outfit", text: `${outfit.title}: ${outfit.text}` },
    { label: "Treatment", text: treatmentText() },
    ...buildActivityTasks(outfit)
  ];

  lastSession = {
    id: uid(),
    title: buildTitle(outfit),
    sections,
    selected: JSON.parse(JSON.stringify(oracle)),
    createdAt: new Date().toLocaleString()
  };
  displaySession(lastSession);
}

function displaySession(session) {
  lastSession = session;
  document.querySelector("#resultTitle").textContent = session.title;
  const content = document.querySelector("#resultContent");
  content.innerHTML = "";
  session.sections.forEach((section, index) => {
    const el = document.createElement("section");
    el.className = "result-section";
    el.innerHTML = `<h3>${index + 1}. ${section.label}</h3><p>${section.text}</p>`;
    content.appendChild(el);
  });
  showView("resultView");
}

function saveCurrentSession() {
  if (!lastSession) return;
  state.savedSessions.push(lastSession);
  saveState();
  renderSavedSessions();
}

function bindEvents() {
  document.querySelector("#startOracleBtn").addEventListener("click", () => {
    oracle = { outfit: [], treatment: [], activities: [] };
    renderAllPrompts();
    showView("outfitView");
  });
  document.querySelector("#openSettingsBtn").addEventListener("click", () => showView("settingsView"));
  document.querySelectorAll(".goHomeBtn").forEach(btn => btn.addEventListener("click", () => showView("homeView")));
  document.querySelector("#toTreatmentBtn").addEventListener("click", () => showView("treatmentView"));
  document.querySelector("#backToOutfitBtn").addEventListener("click", () => showView("outfitView"));
  document.querySelector("#toActivityBtn").addEventListener("click", () => showView("activityView"));
  document.querySelector("#backToTreatmentBtn").addEventListener("click", () => showView("treatmentView"));
  document.querySelector("#generateSessionBtn").addEventListener("click", generateSession);
  document.querySelector("#rerollBtn").addEventListener("click", generateSession);
  document.querySelector("#changeOutfitBtn").addEventListener("click", () => showView("outfitView"));
  document.querySelector("#changeTreatmentBtn").addEventListener("click", () => showView("treatmentView"));
  document.querySelector("#changeActivityBtn").addEventListener("click", () => showView("activityView"));
  document.querySelector("#saveSessionBtn").addEventListener("click", saveCurrentSession);

  document.querySelector("#choreForm").addEventListener("submit", event => {
    event.preventDefault();
    const name = document.querySelector("#choreName").value.trim();
    if (!name) return;
    state.chores.push({ id: uid(), name, room: document.querySelector("#choreRoom").value, duration: Number(document.querySelector("#choreDuration").value) });
    document.querySelector("#choreName").value = "";
    saveState();
    renderChores();
  });
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(console.warn);
}

function init() {
  renderAllPrompts();
  renderSettings();
  renderChores();
  renderSavedSessions();
  bindEvents();
  registerServiceWorker();
}

init();
