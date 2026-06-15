const STORAGE_KEY = "sissyOraclePwa.v1";

const tagGroups = [
  {
    title: "Themes",
    tags: [
      "Maid", "Goth", "Bimbo", "Princess", "Schoolgirl", "Office", "Party", "Stripper-inspired",
      "Doll", "Latex", "Lingerie", "Casual", "Housewife", "Pornstar", "Cute", "Trashy", "Elegant"
    ]
  },
  {
    title: "Mood / Tone",
    tags: [
      "Gentle", "Playful", "Slutty", "Strict", "Humiliating", "Degrading", "Chaotic",
      "Romantic", "Shameful", "Confident", "Nervous", "Obedient", "Mean"
    ]
  },
  {
    title: "Activity Focus",
    tags: [
      "Dress-up", "Chores", "Safe tasks", "Teasing", "Masturbation", "Toy play", "Bondage",
      "Orgasm control", "Anal training", "Transformation", "Roleplay scenario"
    ]
  },
  {
    title: "Fantasy Kinks",
    tags: [
      "Sissy exposure", "Exhibition fantasy", "Hookup fantasy", "Public shame fantasy", "Stranger fantasy",
      "Party slut fantasy", "Bimbo corruption", "Forced feminization fantasy", "Service slut fantasy", "Slut training fantasy"
    ]
  }
];

const defaultSettings = {
  allowSkirtsDresses: true,
  allowLingerie: true,
  allowHeels: true,
  allowStockings: true,
  allowMakeup: true,
  allowWigs: false,
  allowCollarsChokers: true,
  allowRestraints: false,
  allowToyMentions: false,
  allowPrivatePhotoPrompts: true,
  allowTrustedSharingPrompts: false,
  allowRealPublicPostingPrompts: false,
  hideIdentityByDefault: true
};

const settingLabels = {
  allowSkirtsDresses: "Allow skirts/dresses",
  allowLingerie: "Allow lingerie outfit ideas",
  allowHeels: "Allow heels",
  allowStockings: "Allow stockings/fishnets",
  allowMakeup: "Allow makeup suggestions",
  allowWigs: "Allow wigs/hair transformation",
  allowCollarsChokers: "Allow collars/chokers",
  allowRestraints: "Allow bondage/restraint ideas",
  allowToyMentions: "Allow toy mentions",
  allowPrivatePhotoPrompts: "Allow private photo prompts",
  allowTrustedSharingPrompts: "Allow trusted-sharing prompts",
  allowRealPublicPostingPrompts: "Allow real public-posting prompts",
  hideIdentityByDefault: "Hide identity by default"
};

const outfitTemplates = [
  {
    id: "goth_maid",
    match: ["goth", "maid"],
    title: "Goth maid outfit",
    text: "A black maid-inspired outfit: black skirt or dress, light/frilly top if available, stockings or fishnets, choker, dark makeup, and heels or boots if available."
  },
  {
    id: "bimbo_party",
    match: ["bimbo", "party"],
    title: "Bimbo party outfit",
    text: "A loud, flirty party look: short skirt or tight bottoms, glossy lips, playful accessories, bright or pink details, and heels if available."
  },
  {
    id: "casual_slutty",
    match: ["casual", "slutty"],
    title: "Casual slutty outfit",
    text: "A wearable-but-flirty outfit: tight top, short skirt/shorts or fitted bottoms, cute underwear, socks or stockings, and light makeup if allowed."
  },
  {
    id: "stripper_fantasy",
    match: ["stripper-inspired"],
    title: "Stripper-inspired outfit",
    text: "A private fantasy performance look: revealing layers, dramatic heels if available, shiny details, and one attention-grabbing accessory."
  },
  {
    id: "latex_doll",
    match: ["latex", "doll"],
    title: "Latex doll fantasy outfit",
    text: "A glossy doll-like fantasy outfit: shiny black pieces or the closest equivalent, stockings, dramatic makeup, and a controlled, artificial presentation."
  },
  {
    id: "maid",
    match: ["maid"],
    title: "Maid-inspired outfit",
    text: "A maid-coded outfit: skirt or dress, apron-like layer if available, stockings, simple shoes or heels, and a neat accessory such as a bow or choker."
  },
  {
    id: "goth",
    match: ["goth"],
    title: "Goth outfit",
    text: "A dark gothic look: black clothing, stockings or fishnets, choker, boots or heels, and dark eyeliner/lip color if makeup is allowed."
  },
  {
    id: "default",
    match: [],
    title: "Generated outfit",
    text: "A themed outfit matching your selected tags. Use the closest items you own, and skip anything that does not fit your limits or mood."
  }
];

const activityIdeas = {
  chores: [
    "Pair the outfit with one chore from your vault, framed as a roleplay scene rather than an obligation.",
    "Choose a small cleaning task and make the session about being watched, judged, or transformed while doing something ordinary."
  ],
  safe: [
    "Add a soft task such as mirror posing, a short written fantasy caption, outfit inspection, or a confidence/shame reflection.",
    "Use a low-pressure activity: one minute of posing, a short note about the outfit, or a private character introduction."
  ],
  sexual: [
    "Add a sexual focus only if it fits your mood: teasing, solo play, orgasm-control fantasy, toy play, or training-themed imagination.",
    "Keep the sexual layer adjustable: fantasy-only, private roleplay, or skipped entirely."
  ],
  roleplay: [
    "Frame the session as a short scenario with a beginning, a private activity, and an ending image or caption.",
    "Treat the selected themes as a character prompt and generate the scene around that persona."
  ]
};

let state = loadState();
let lastSession = null;

function loadState() {
  const fallback = {
    selectedTags: [],
    settings: { ...defaultSettings },
    chores: [
      { id: crypto.randomUUID(), name: "Clean bedroom surfaces", room: "Bedroom", duration: 15 },
      { id: crypto.randomUUID(), name: "Tidy clothes or laundry", room: "Laundry", duration: 15 },
      { id: crypto.randomUUID(), name: "Wipe bathroom sink", room: "Bathroom", duration: 10 }
    ],
    savedSessions: []
  };

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...fallback, ...saved, settings: { ...defaultSettings, ...saved.settings } } : fallback;
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
}

function sample(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function hasTag(tags, value) {
  return tags.map(slugify).includes(slugify(value));
}

function renderTags() {
  const root = document.querySelector("#tagGroups");
  root.innerHTML = "";

  tagGroups.forEach(group => {
    const groupEl = document.createElement("section");
    groupEl.className = "tag-group";
    groupEl.innerHTML = `<h3>${group.title}</h3>`;

    const grid = document.createElement("div");
    grid.className = "tag-grid";

    group.tags.forEach(tag => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `tag-chip ${state.selectedTags.includes(tag) ? "active" : ""}`;
      btn.textContent = tag;
      btn.addEventListener("click", () => toggleTag(tag));
      grid.appendChild(btn);
    });

    groupEl.appendChild(grid);
    root.appendChild(groupEl);
  });
}

function toggleTag(tag) {
  state.selectedTags = state.selectedTags.includes(tag)
    ? state.selectedTags.filter(item => item !== tag)
    : [...state.selectedTags, tag];
  saveState();
  renderTags();
}

function renderSettings() {
  const root = document.querySelector("#settingsList");
  root.innerHTML = "";

  Object.keys(defaultSettings).forEach(key => {
    const row = document.createElement("label");
    row.className = "setting-row";
    row.innerHTML = `
      <span>${settingLabels[key]}</span>
      <input type="checkbox" ${state.settings[key] ? "checked" : ""} />
    `;
    row.querySelector("input").addEventListener("change", event => {
      state.settings[key] = event.target.checked;
      saveState();
    });
    root.appendChild(row);
  });
}

function renderChores() {
  const list = document.querySelector("#choreList");
  list.innerHTML = "";

  if (state.chores.length === 0) {
    list.innerHTML = `<li><span>No chores yet. Add one above.</span></li>`;
    return;
  }

  state.chores.forEach(chore => {
    const item = document.createElement("li");
    item.innerHTML = `
      <span><strong>${chore.name}</strong><small>${chore.room} · ${chore.duration} min</small></span>
      <button class="secondary icon-btn" aria-label="Delete chore">Delete</button>
    `;
    item.querySelector("button").addEventListener("click", () => {
      state.chores = state.chores.filter(existing => existing.id !== chore.id);
      saveState();
      renderChores();
    });
    list.appendChild(item);
  });
}

function renderSavedSessions() {
  const list = document.querySelector("#savedSessions");
  list.innerHTML = "";

  if (state.savedSessions.length === 0) {
    list.innerHTML = `<li><span>No saved sessions yet.</span></li>`;
    return;
  }

  state.savedSessions.slice().reverse().forEach(session => {
    const item = document.createElement("li");
    item.innerHTML = `
      <span><strong>${session.title}</strong><small>${session.realityLabel} · ${session.createdAt}</small></span>
      <button class="secondary icon-btn">Load</button>
    `;
    item.querySelector("button").addEventListener("click", () => displaySession(session));
    list.appendChild(item);
  });
}

function selectOutfit(tags, sluttiness) {
  const normalized = tags.map(slugify);
  const scored = outfitTemplates.map(template => {
    const score = template.match.filter(tag => normalized.includes(slugify(tag))).length;
    return { ...template, score };
  }).sort((a, b) => b.score - a.score);

  const chosen = scored.find(item => item.score > 0) || outfitTemplates.find(item => item.id === "default");
  const modifiers = [];

  if (sluttiness === "cute") modifiers.push("Keep the outfit cute and less revealing.");
  if (sluttiness === "flirty") modifiers.push("Make it flirty without pushing it too extreme.");
  if (sluttiness === "slutty") modifiers.push("Push it toward revealing, attention-seeking, and overtly slutty.");
  if (sluttiness === "extreme") modifiers.push("Treat it as private/fantasy-only and make it as exaggerated as your settings allow.");

  const settingNotes = [];
  if (!state.settings.allowHeels) settingNotes.push("avoid heels");
  if (!state.settings.allowMakeup) settingNotes.push("skip makeup");
  if (!state.settings.allowLingerie) settingNotes.push("avoid lingerie");
  if (!state.settings.allowStockings) settingNotes.push("skip stockings/fishnets");
  if (!state.settings.allowCollarsChokers) settingNotes.push("avoid collars/chokers");
  if (!state.settings.allowSkirtsDresses) settingNotes.push("avoid skirts/dresses");

  return {
    title: chosen.title,
    text: [chosen.text, ...modifiers, settingNotes.length ? `Settings note: ${settingNotes.join(", ")}.` : ""].filter(Boolean).join(" ")
  };
}

function selectChore(tags) {
  if (!hasTag(tags, "Chores") && !hasTag(tags, "Maid")) return null;
  if (!state.chores.length) return "No chore is saved yet, so use a simple optional tidy-up or skip this section.";
  const chore = sample(state.chores);
  return `${chore.name} (${chore.room}, about ${chore.duration} minutes).`;
}

function buildExposureLayer(tags, exposureStyle, realityLevel) {
  const exposureSelected = hasTag(tags, "Sissy exposure") || hasTag(tags, "Exhibition fantasy") || hasTag(tags, "Public shame fantasy") || exposureStyle !== "none";
  if (!exposureSelected) return null;

  const identityNote = state.settings.hideIdentityByDefault
    ? "Keep identity protected by default: no face, location clues, usernames, documents, mirrors, metadata, or recognizable backgrounds."
    : "Identity protection is not forced by settings, but still consider what you may regret later.";

  if (exposureStyle === "real_public_posting" && !state.settings.allowRealPublicPostingPrompts) {
    return "Real public posting is disabled in settings, so this becomes a public-posting fantasy instead: imagine the photos/captions existing online without actually uploading them.";
  }

  if (exposureStyle === "trusted_sharing" && !state.settings.allowTrustedSharingPrompts) {
    return "Trusted sharing is disabled in settings, so this becomes a private sharing fantasy or caption-writing prompt.";
  }

  const map = {
    none: "Add an exposure flavor as fantasy only: imagine being seen, judged, or displayed without involving real people.",
    private_fantasy: "Exposure stays imaginary: write or imagine the caption/audience without taking or sharing real photos.",
    private_photos: state.settings.allowPrivatePhotoPrompts
      ? `Take private, non-identifying photos if desired, then keep them offline or delete them. ${identityNote}`
      : "Private photo prompts are disabled, so use caption fantasy or imagination only.",
    anonymous_caption: `Create an anonymous fantasy caption or album title without posting anything. ${identityNote}`,
    trusted_sharing: `Optional trusted-sharing idea: only share non-identifying content with a consenting adult partner. ${identityNote}`,
    public_posting_fantasy: "Public posting stays fantasy-only: imagine the upload, comments, or exposure without actually posting.",
    real_public_posting: `Optional real posting idea: only legal, platform-allowed, non-identifying adult content, and only if you genuinely want that risk. ${identityNote}`
  };

  if (["fantasy", "extreme_fantasy", "story_only"].includes(realityLevel) && exposureStyle === "none") {
    return "Fantasy exposure layer: imagine being displayed or discovered as part of the scenario; no real-world follow-through is implied.";
  }

  return map[exposureStyle] || map.private_fantasy;
}

function buildSexualFocus(tags, realityLevel) {
  const focuses = [];
  if (hasTag(tags, "Teasing")) focuses.push("teasing");
  if (hasTag(tags, "Masturbation")) focuses.push("solo masturbation");
  if (hasTag(tags, "Toy play") && state.settings.allowToyMentions) focuses.push("toy play");
  if (hasTag(tags, "Bondage") && state.settings.allowRestraints) focuses.push("bondage/restriction");
  if (hasTag(tags, "Orgasm control")) focuses.push("orgasm-control fantasy");
  if (hasTag(tags, "Anal training")) focuses.push("anal-training theme");
  if (hasTag(tags, "Hookup fantasy") || hasTag(tags, "Stranger fantasy")) focuses.push("fictional hookup/stranger fantasy");
  if (hasTag(tags, "Slut training fantasy") || hasTag(tags, "Service slut fantasy")) focuses.push("slut-training/service fantasy");

  if (!focuses.length) return "No explicit sexual focus selected; keep this mostly outfit, mood, and scenario-based.";

  const modeNote = ["reality", "private_roleplay"].includes(realityLevel)
    ? "Keep it private and self-regulated; any real activity is optional and can be skipped."
    : "Treat this as fantasy, story, or roleplay unless you deliberately choose otherwise.";

  return `${focuses.join(", ")}. ${modeNote}`;
}

function buildTitle(tags) {
  const priority = ["Goth", "Maid", "Bimbo", "Party", "Sissy exposure", "Chores", "Anal training", "Hookup fantasy", "Doll", "Latex", "Lingerie"];
  const picked = priority.filter(tag => state.selectedTags.includes(tag)).slice(0, 4);
  return picked.length ? `${picked.join(" ")} Session` : "Oracle Session";
}

function generateSession(overrides = {}) {
  const tags = state.selectedTags;
  const realityLevel = overrides.realityLevel || document.querySelector("#realityLevel").value;
  const sessionLength = document.querySelector("#sessionLength").value;
  const exposureStyle = overrides.exposureStyle || document.querySelector("#exposureStyle").value;
  const sluttiness = overrides.sluttiness || document.querySelector("#sluttiness").value;
  const outputStyle = document.querySelector("#outputStyle").value;

  const realityLabels = {
    reality: "Reality-based",
    private_roleplay: "Private roleplay",
    fantasy: "Fantasy roleplay",
    extreme_fantasy: "Extreme fantasy",
    story_only: "Story-only"
  };

  const outfit = selectOutfit(tags, sluttiness);
  const chore = selectChore(tags);
  const exposure = buildExposureLayer(tags, exposureStyle, realityLevel);
  const sexualFocus = buildSexualFocus(tags, realityLevel);

  const activity = hasTag(tags, "Safe tasks")
    ? sample(activityIdeas.safe)
    : hasTag(tags, "Roleplay scenario") || ["fantasy", "extreme_fantasy", "story_only"].includes(realityLevel)
      ? sample(activityIdeas.roleplay)
      : hasTag(tags, "Chores") || hasTag(tags, "Maid")
        ? sample(activityIdeas.chores)
        : "Use the selected tags as a mood board and keep the session as light, private, or fantasy-only as you want.";

  const lengthText = {
    quick: "Quick / short scene",
    30: "About 30 minutes",
    45: "About 45 minutes",
    60: "About 60 minutes",
    open: "Open-ended"
  }[sessionLength];

  const sections = [
    { label: "Reality", text: `${realityLabels[realityLevel]} · ${lengthText} · ${outputStyle.replace("_", " ")}` },
    { label: "Selected vibe", text: tags.length ? tags.join(", ") : "No offerings selected yet. The Oracle generated a broad starter session." },
    { label: "Outfit idea", text: `${outfit.title}: ${outfit.text}` },
    { label: "Main activity", text: chore ? `${activity} Suggested chore: ${chore}` : activity },
    { label: "Sexual / fantasy focus", text: sexualFocus }
  ];

  if (exposure) sections.push({ label: "Exposure layer", text: exposure });

  sections.push({
    label: "Self-regulation note",
    text: "This is a generated idea, not a command. Change, skip, soften, or ignore anything that feels wrong, too risky, or not fun."
  });

  const session = {
    id: crypto.randomUUID(),
    title: buildTitle(tags),
    sections,
    realityLabel: realityLabels[realityLevel],
    createdAt: new Date().toLocaleString(),
    controls: { realityLevel, sessionLength, exposureStyle, sluttiness, outputStyle },
    tags: [...tags]
  };

  lastSession = session;
  displaySession(session);
}

function displaySession(session) {
  lastSession = session;
  document.querySelector("#resultCard").classList.remove("hidden");
  document.querySelector("#resultTitle").textContent = session.title;

  const content = document.querySelector("#resultContent");
  content.innerHTML = "";

  const badges = document.createElement("div");
  badges.className = "badge-row";
  session.tags.slice(0, 12).forEach(tag => {
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = tag;
    badges.appendChild(badge);
  });
  content.appendChild(badges);

  session.sections.forEach(section => {
    const el = document.createElement("section");
    el.className = "result-section";
    el.innerHTML = `<h3>${section.label}</h3><p>${section.text}</p>`;
    content.appendChild(el);
  });

  document.querySelector("#resultCard").scrollIntoView({ behavior: "smooth", block: "start" });
}

function saveCurrentSession() {
  if (!lastSession) return;
  state.savedSessions.push(lastSession);
  saveState();
  renderSavedSessions();
}

function handleAdjustment(kind) {
  if (kind === "regenerate") return generateSession();
  if (kind === "softer") {
    document.querySelector("#sluttiness").value = "flirty";
    document.querySelector("#realityLevel").value = "private_roleplay";
    return generateSession({ sluttiness: "flirty", realityLevel: "private_roleplay" });
  }
  if (kind === "sluttier") {
    document.querySelector("#sluttiness").value = "extreme";
    return generateSession({ sluttiness: "extreme" });
  }
  if (kind === "fantasy") {
    document.querySelector("#realityLevel").value = "fantasy";
    return generateSession({ realityLevel: "fantasy" });
  }
  if (kind === "realistic") {
    document.querySelector("#realityLevel").value = "reality";
    document.querySelector("#exposureStyle").value = "none";
    return generateSession({ realityLevel: "reality", exposureStyle: "none" });
  }
}

function bindEvents() {
  document.querySelector("#generateBtn").addEventListener("click", () => generateSession());
  document.querySelector("#clearTagsBtn").addEventListener("click", () => {
    state.selectedTags = [];
    saveState();
    renderTags();
  });
  document.querySelector("#saveSessionBtn").addEventListener("click", saveCurrentSession);

  document.querySelectorAll(".adjustBtn").forEach(btn => {
    btn.addEventListener("click", () => handleAdjustment(btn.dataset.adjust));
  });

  document.querySelector("#choreForm").addEventListener("submit", event => {
    event.preventDefault();
    const name = document.querySelector("#choreName").value.trim();
    if (!name) return;

    state.chores.push({
      id: crypto.randomUUID(),
      name,
      room: document.querySelector("#choreRoom").value,
      duration: Number(document.querySelector("#choreDuration").value)
    });
    document.querySelector("#choreName").value = "";
    saveState();
    renderChores();
  });
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(error => console.warn("Service worker registration failed", error));
  }
}

function init() {
  renderTags();
  renderSettings();
  renderChores();
  renderSavedSessions();
  bindEvents();
  registerServiceWorker();
}

init();
