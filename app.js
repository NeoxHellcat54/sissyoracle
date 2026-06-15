const STORAGE_KEY = "sissyOraclePwa.v2";

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
  allowWigs: true,
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

const colorPalettes = {
  Goth: ["black", "deep red", "dark purple", "silver"],
  Maid: ["black", "white", "pink", "navy"],
  Bimbo: ["hot pink", "white", "baby blue", "glittery silver"],
  Princess: ["baby blue", "pink", "white", "gold"],
  Schoolgirl: ["navy", "white", "red plaid", "grey"],
  Office: ["black", "white", "grey", "burgundy"],
  Party: ["hot pink", "silver", "black", "red"],
  "Stripper-inspired": ["black", "silver", "clear", "neon pink"],
  Doll: ["pink", "white", "baby blue", "lavender"],
  Latex: ["glossy black", "red", "white", "pink"],
  Lingerie: ["black", "red", "pink", "white"],
  Casual: ["white", "black", "denim", "pink"],
  Housewife: ["pastel", "white", "floral", "pink"],
  Pornstar: ["black", "red", "gold", "clear"],
  Cute: ["pink", "white", "pastel blue", "lavender"],
  Trashy: ["leopard print", "neon pink", "black", "red"],
  Elegant: ["black", "cream", "gold", "deep red"]
};

const outfitTemplates = [
  {
    id: "latex_princess",
    match: ["Latex", "Princess"],
    title: "Latex Princess",
    outfit: {
      base: [
        "Wear a glossy black latex catsuit with a bright blue short dress over the top.",
        "Wear a white latex bodysuit under a pink princess mini dress.",
        "Wear a glossy pink latex top with a baby-blue tutu skirt."
      ],
      lingerie: ["Add white lace panties underneath.", "Add a pink bralette under the latex.", "Add a tiny white thong."],
      legs: ["Wear white thigh-high stockings.", "Wear sheer white tights.", "Wear glossy black thigh-highs."],
      shoes: ["Wear white heels.", "Wear pink platform heels.", "Wear sparkly silver heels."],
      accessories: ["Add a long flowy blonde wig with a bow.", "Add a tiara and a pink ribbon choker.", "Add satin gloves and a princess bow."],
      makeup: ["Wear pink lipstick and blue eyeshadow.", "Wear glossy lipstick, heavy lashes, and glitter eyeshadow.", "Wear doll-like blush and shiny pink lips."]
    }
  },
  {
    id: "goth_maid",
    match: ["Goth", "Maid"],
    title: "Goth Maid",
    outfit: {
      base: [
        "Wear a short black maid dress with a white apron.",
        "Wear a black pleated skirt with a white frilly blouse and a black apron.",
        "Wear a black corset-style top with a short black skirt and maid apron."
      ],
      lingerie: ["Wear black lace panties.", "Wear a black bra and matching panties.", "Wear black lingerie under the maid outfit."],
      legs: ["Wear black fishnets.", "Wear black thigh-high stockings.", "Wear striped black-and-white stockings."],
      shoes: ["Wear black heels.", "Wear black platform boots.", "Wear glossy black Mary Jane heels."],
      accessories: ["Add a black choker and white maid headband.", "Add lace wrist cuffs and a black ribbon collar.", "Add a small bell choker and dark hair bow."],
      makeup: ["Wear black eyeliner and dark red lipstick.", "Wear smoky eyeshadow and black lipstick.", "Wear heavy eyeliner, pale powder, and glossy dark lips."]
    }
  },
  {
    id: "bimbo_party",
    match: ["Bimbo", "Party"],
    title: "Bimbo Party Girl",
    outfit: {
      base: [
        "Wear a tiny hot-pink mini dress.",
        "Wear a tight white crop top with a pink micro skirt.",
        "Wear a sparkly silver party dress that barely covers your thighs."
      ],
      lingerie: ["Wear a pink thong.", "Wear white lace panties.", "Wear a matching pink bra and panties."],
      legs: ["Wear nude glossy tights.", "Wear white thigh-high stockings.", "Wear bare legs with body glitter."],
      shoes: ["Wear clear platform heels.", "Wear pink stilettos.", "Wear white heels."],
      accessories: ["Add big hoop earrings and a glittery handbag.", "Add a blonde wig and pink hair clips.", "Add a rhinestone choker and bracelets."],
      makeup: ["Wear glossy pink lips and heavy mascara.", "Wear bright pink lipstick and sparkly eyeshadow.", "Wear fake lashes, blush, and high-shine lip gloss."]
    }
  },
  {
    id: "schoolgirl_slutty",
    match: ["Schoolgirl", "Slutty"],
    title: "Slutty Schoolgirl",
    outfit: {
      base: [
        "Wear a white button-up shirt tied at the waist with a short plaid skirt.",
        "Wear a tight white blouse with a tiny pleated skirt.",
        "Wear a cropped school shirt with a navy mini skirt."
      ],
      lingerie: ["Wear white panties.", "Wear pink panties.", "Wear lace panties that match the skirt."],
      legs: ["Wear knee-high white socks.", "Wear thigh-high socks.", "Wear sheer tights."],
      shoes: ["Wear black Mary Jane shoes.", "Wear black heels.", "Wear white sneakers."],
      accessories: ["Add a loose necktie and pigtails.", "Add a hair bow and fake glasses.", "Add a backpack and ribbon choker."],
      makeup: ["Wear soft pink lipstick and bright eyeshadow.", "Wear glossy lips and long lashes.", "Wear cute blush and light eyeliner."]
    }
  },
  {
    id: "stripper_fantasy",
    match: ["Stripper-inspired"],
    title: "Stripper Fantasy",
    outfit: {
      base: [
        "Wear a tiny bikini-style top with a micro skirt.",
        "Wear a sheer robe over lingerie.",
        "Wear a cropped top with thong bottoms and a short open skirt."
      ],
      lingerie: ["Wear a thong.", "Wear black lingerie.", "Wear red lingerie."],
      legs: ["Wear fishnets.", "Wear bare legs with body glitter.", "Wear glossy thigh-high stockings."],
      shoes: ["Wear clear platform heels.", "Wear black stripper heels.", "Wear shiny red heels."],
      accessories: ["Add a rhinestone choker.", "Add glitter body spray and bracelets.", "Add a silky robe as the first layer."],
      makeup: ["Wear heavy eyeliner, fake lashes, and glossy lips.", "Wear red lipstick and smoky eyeshadow.", "Wear glitter eyeshadow and high-shine lip gloss."]
    }
  },
  {
    id: "lingerie_doll",
    match: ["Lingerie", "Doll"],
    title: "Lingerie Doll",
    outfit: {
      base: [
        "Wear a pink babydoll nightie.",
        "Wear a white lace teddy.",
        "Wear a pastel lingerie set with a short sheer robe."
      ],
      lingerie: ["Wear matching lace panties.", "Wear a tiny thong.", "Wear frilly panties."],
      legs: ["Wear white thigh-high stockings.", "Wear pink stockings.", "Wear sheer tights."],
      shoes: ["Wear pink heels.", "Wear white heels.", "Wear fluffy slippers."],
      accessories: ["Add a bow choker and hair bow.", "Add a long wig and satin gloves.", "Add a ribbon collar and doll-like hair clips."],
      makeup: ["Wear doll-like blush, pink lipstick, and long lashes.", "Wear glossy lips and soft pastel eyeshadow.", "Wear heart-shaped blush and shiny lip gloss."]
    }
  },
  {
    id: "maid",
    match: ["Maid"],
    title: "Maid",
    outfit: {
      base: ["Wear a black maid dress with a white apron.", "Wear a black skirt with a white blouse and apron.", "Wear a short dress with an apron tied tightly at the waist."],
      lingerie: ["Wear lace panties.", "Wear white panties.", "Wear black panties."],
      legs: ["Wear thigh-high stockings.", "Wear white stockings.", "Wear black tights."],
      shoes: ["Wear black heels.", "Wear simple flats.", "Wear black Mary Jane shoes."],
      accessories: ["Add a maid headband.", "Add a choker and wrist cuffs.", "Add a white bow and apron."],
      makeup: ["Wear neat eyeliner and glossy lips.", "Wear soft blush and pink lipstick.", "Wear clean, doll-like makeup."]
    }
  },
  {
    id: "goth",
    match: ["Goth"],
    title: "Goth",
    outfit: {
      base: ["Wear a black dress.", "Wear a black top with a short black skirt.", "Wear a black corset-style top with fitted black bottoms."],
      lingerie: ["Wear black lace panties.", "Wear black lingerie.", "Wear dark red panties."],
      legs: ["Wear fishnets.", "Wear black thigh-highs.", "Wear ripped black tights."],
      shoes: ["Wear black boots.", "Wear black heels.", "Wear platform shoes."],
      accessories: ["Add a black choker.", "Add silver jewelry and a dark hair bow.", "Add lace gloves and a collar."],
      makeup: ["Wear dark lipstick and heavy eyeliner.", "Wear smoky eyeshadow and black lipstick.", "Wear pale foundation with dark lips."]
    }
  },
  {
    id: "default",
    match: [],
    title: "Generated Outfit",
    outfit: {
      base: ["Wear a short fitted dress.", "Wear a tight top with a short skirt.", "Wear a crop top with fitted bottoms."],
      lingerie: ["Wear matching underwear.", "Wear lace panties.", "Wear your prettiest underwear."],
      legs: ["Wear thigh-high stockings.", "Wear tights.", "Wear knee-high socks."],
      shoes: ["Wear heels.", "Wear cute flats.", "Wear platform shoes."],
      accessories: ["Add a choker.", "Add a hair bow.", "Add jewelry and a cute accessory."],
      makeup: ["Wear lipstick and eyeshadow.", "Wear glossy lips and eyeliner.", "Wear blush, mascara, and lip gloss."]
    }
  }
];

const activityTemplates = {
  chores: [
    "Complete {chore}. While doing it, stay in character as the selected outfit theme.",
    "Complete {chore}. Take a short break halfway through to pose once in the outfit, then finish the chore.",
    "Complete {chore}. Move slowly and deliberately, treating the chore as part of the roleplay."
  ],
  safe: [
    "Stand in front of a mirror for 2 minutes and pose in three different ways: cute, ashamed, and confident.",
    "Write a 4-line caption for the outfit and read it back once.",
    "Walk across the room five times in the outfit, then hold a final pose for 30 seconds."
  ],
  roleplay: [
    "Play the scene as a character introduction: enter the room, present the outfit, say one line in character, then begin the main activity.",
    "Build the scene around being transformed into the selected persona. Start normal, dress into the outfit, then act out the final version for 5 minutes.",
    "Create a short scenario where the character is being noticed, judged, or admired because of the outfit."
  ],
  transformation: [
    "Transform in stages: underwear, main outfit, legs/shoes, accessories, makeup, final pose.",
    "Lay out every outfit piece first, then dress one piece at a time and pause after each stage.",
    "Create a before-and-after moment: one normal photo pose in your head, then the finished transformed pose."
  ],
  default: [
    "Spend the session dressed in the generated outfit and complete one focused activity that matches the selected mood.",
    "Use the outfit as the center of the session: dress, pose, do one activity, then finish with a final mirror check.",
    "Create a 20-minute scene around the selected tags, with the outfit as the main anchor."
  ]
};

const sexualTemplates = {
  Teasing: [
    "Add a teasing phase: touch over the outfit for 5 minutes, then stop and continue the session dressed.",
    "Add a teasing phase: set a 10-minute timer and keep the focus on build-up, not finishing.",
    "Add a teasing phase while looking at the finished outfit in the mirror."
  ],
  Masturbation: [
    "Add a masturbation phase at the end of the session, still dressed in the outfit.",
    "Add a solo play phase after the main activity, using the outfit and selected fantasy as the mental focus.",
    "Add a masturbation phase with one pause halfway through to adjust the outfit and pose."
  ],
  "Orgasm control": [
    "Use orgasm control: decide at the end whether the session stops at teasing or finishes.",
    "Use orgasm control: edge once, pause for 2 minutes, then decide whether to continue.",
    "Use orgasm control as the final theme: build up, stop, pose, then choose whether to finish."
  ],
  "Anal training": [
    "Add an anal-training theme as the session focus: make the outfit, posture, and fantasy revolve around training and preparation.",
    "Add an anal-training phase after the outfit is complete, with slow pacing and a training fantasy tone.",
    "Frame the session as anal-training roleplay: dress first, complete the main activity, then move into the training fantasy."
  ],
  "Toy play": [
    "Add one enabled toy to the session and make it part of the outfit or final scene.",
    "Use one toy during the final phase, after the outfit and main activity are complete.",
    "Pick one toy and build the fantasy around wearing or using it while staying in character."
  ],
  Bondage: [
    "Add a restraint element: wrists, ankles, collar, blindfold, or another enabled restriction item.",
    "Add a restriction rule for the session: limited movement, limited hand use, or a fixed pose at the end.",
    "Use one restraint item during the final pose or fantasy scene."
  ],
  "Hookup fantasy": [
    "Add a fictional hookup scene: imagine being dressed this way for a stranger who immediately understands the role you are playing.",
    "Add a dating-app fantasy: write the profile line this outfit would deserve, then imagine the first message it attracts.",
    "Add a private stranger fantasy around being seen in the outfit and treated according to the selected vibe."
  ],
  "Stranger fantasy": [
    "Add a stranger fantasy: imagine a private audience noticing every detail of the outfit.",
    "Add a fictional encounter where the outfit makes the character impossible to hide.",
    "Add an imagined audience that reacts to the outfit, the posture, and the selected kink focus."
  ],
  "Slut training fantasy": [
    "Add a slut-training phase: repeat three poses, one line of dialogue, and one fantasy action in character.",
    "Add a training sequence: dress, pose, perform the main activity, then finish with a slutty character line.",
    "Frame the session as training in presentation, obedience, and sexual confidence."
  ],
  "Service slut fantasy": [
    "Add a service fantasy: the outfit exists to make the chores, posing, or sexual focus feel more submissive.",
    "Add a service scene where the character is dressed to be useful, decorative, and obviously sexualized.",
    "Make the main activity feel like service roleplay rather than normal chores."
  ]
};

const exposureTemplates = {
  none: [
    "No exposure layer selected.",
    "Keep exposure out of this roll."
  ],
  private_fantasy: [
    "Imagine being photographed in the outfit while doing the main activity, but keep it as a mental scene.",
    "Create a fantasy in which the outfit is discovered, commented on, and remembered."
  ],
  private_photos: [
    "Take 3 private photos: one full outfit pose, one chore/action shot, and one close-up of the most humiliating outfit detail.",
    "Take 5 private photos during the session: front, side, kneeling/low angle, chore-in-progress, final pose.",
    "Take a private photo set showing the session from outfit reveal to finished activity."
  ],
  anonymous_caption: [
    "Write an anonymous caption for the session and pair it with an imagined photo set.",
    "Create a fake anonymous post title for the outfit and activity.",
    "Write three possible captions: cute, degrading, and slutty."
  ],
  trusted_sharing: [
    "Choose one photo from the session and frame it as something to send to a trusted adult partner.",
    "Make a small private set of 3 photos as if it were being shared with one trusted viewer.",
    "Write the message that would go with the best photo from the session."
  ],
  public_posting_fantasy: [
    "Imagine posting the chore photos online with a humiliating caption, then write the caption and first three imagined comments.",
    "Build the fantasy around the outfit photos being uploaded and seen by an anonymous audience.",
    "Create a fake public post title, caption, and reaction summary for the session."
  ],
  real_public_posting: [
    "Take a non-identifying photo set during the chore and post one selected image online with a short caption.",
    "Post one non-identifying outfit/chore photo online with a direct caption matching the selected vibe.",
    "Create a short public post from the session using one image and one caption."
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
    const oldSaved = JSON.parse(localStorage.getItem("sissyOraclePwa.v1"));
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || oldSaved;
    return saved ? { ...fallback, ...saved, settings: { ...defaultSettings, ...saved.settings } } : fallback;
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function slugify(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
}

function sample(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function hasTag(tags, value) {
  return tags.map(slugify).includes(slugify(value));
}

function selectedThemeTags(tags) {
  const themeSet = new Set(tagGroups[0].tags.map(slugify));
  return tags.filter(tag => themeSet.has(slugify(tag)));
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

function scoreTemplate(template, tags) {
  const normalized = tags.map(slugify);
  return template.match.reduce((score, tag) => score + (normalized.includes(slugify(tag)) ? 1 : 0), 0);
}

function selectOutfitTemplate(tags) {
  const scored = outfitTemplates
    .map(template => ({ ...template, score: scoreTemplate(template, tags) }))
    .sort((a, b) => b.score - a.score);

  return scored.find(item => item.score > 0) || outfitTemplates.find(item => item.id === "default");
}

function optionalPart(enabled, options) {
  return enabled ? sample(options) : null;
}

function buildOutfit(tags, sluttiness) {
  const template = selectOutfitTemplate(tags);
  const parts = [sample(template.outfit.base)];

  if (["slutty", "extreme"].includes(sluttiness)) parts.push(optionalPart(state.settings.allowLingerie, template.outfit.lingerie));
  parts.push(optionalPart(state.settings.allowStockings, template.outfit.legs));
  parts.push(optionalPart(state.settings.allowHeels, template.outfit.shoes));
  parts.push(optionalPart(state.settings.allowCollarsChokers || state.settings.allowWigs, template.outfit.accessories));
  parts.push(optionalPart(state.settings.allowMakeup, template.outfit.makeup));

  if (sluttiness === "cute") parts.push("Keep the fit cute and polished, with no extra revealing layer.");
  if (sluttiness === "flirty") parts.push("Make the skirt, top, or neckline noticeably flirty.");
  if (sluttiness === "slutty") parts.push("Make at least one part clearly revealing: short hem, low neckline, sheer legwear, or visible lingerie detail.");
  if (sluttiness === "extreme") parts.push("Make the look exaggerated: shorter, shinier, tighter, and more obviously sexualized.");

  return {
    title: template.title,
    text: parts.filter(Boolean).join(" ")
  };
}

function selectChore(tags) {
  if (!hasTag(tags, "Chores") && !hasTag(tags, "Maid") && !hasTag(tags, "Housewife") && !hasTag(tags, "Service slut fantasy")) return null;
  if (!state.chores.length) return "Clean one visible surface for 10 minutes.";
  const chore = sample(state.chores);
  return `${chore.name} in the ${chore.room.toLowerCase()} for ${chore.duration} minutes`;
}

function buildMainActivity(tags, chore) {
  if (chore) return sample(activityTemplates.chores).replace("{chore}", chore);
  if (hasTag(tags, "Safe tasks")) return sample(activityTemplates.safe);
  if (hasTag(tags, "Transformation") || hasTag(tags, "Bimbo corruption") || hasTag(tags, "Forced feminization fantasy")) return sample(activityTemplates.transformation);
  if (hasTag(tags, "Roleplay scenario") || hasTag(tags, "Hookup fantasy") || hasTag(tags, "Stranger fantasy")) return sample(activityTemplates.roleplay);
  return sample(activityTemplates.default);
}

function buildSexualFocus(tags) {
  const tagOrder = ["Teasing", "Masturbation", "Orgasm control", "Anal training", "Toy play", "Bondage", "Hookup fantasy", "Stranger fantasy", "Slut training fantasy", "Service slut fantasy"];
  const selected = tagOrder.filter(tag => hasTag(tags, tag));
  const lines = [];

  selected.forEach(tag => {
    if (tag === "Toy play" && !state.settings.allowToyMentions) return;
    if (tag === "Bondage" && !state.settings.allowRestraints) return;
    lines.push(sample(sexualTemplates[tag]));
  });

  if (!lines.length) return "No sexual focus rolled for this session.";
  return lines.join(" ");
}

function buildExposureLayer(tags, exposureStyle) {
  const exposureSelected = hasTag(tags, "Sissy exposure") || hasTag(tags, "Exhibition fantasy") || hasTag(tags, "Public shame fantasy") || exposureStyle !== "none";
  if (!exposureSelected) return null;

  let style = exposureStyle;
  if (style === "none") style = hasTag(tags, "Sissy exposure") || hasTag(tags, "Exhibition fantasy") || hasTag(tags, "Public shame fantasy") ? "private_photos" : "private_fantasy";
  if (style === "private_photos" && !state.settings.allowPrivatePhotoPrompts) style = "private_fantasy";
  if (style === "trusted_sharing" && !state.settings.allowTrustedSharingPrompts) style = "anonymous_caption";
  if (style === "real_public_posting" && !state.settings.allowRealPublicPostingPrompts) style = "public_posting_fantasy";

  return sample(exposureTemplates[style]);
}

function buildSessionTitle(tags) {
  const priority = ["Latex", "Princess", "Goth", "Maid", "Bimbo", "Party", "Sissy exposure", "Chores", "Anal training", "Hookup fantasy", "Doll", "Lingerie", "Stripper-inspired"];
  const picked = priority.filter(tag => tags.includes(tag)).slice(0, 4);
  return picked.length ? picked.join(" ") + " Session" : "Oracle Session";
}

function buildSceneSetup(tags, realityLevel, exposureStyle) {
  const themes = selectedThemeTags(tags);
  const moodTags = tags.filter(tag => tagGroups[1].tags.includes(tag));
  const themeText = themes.length ? themes.slice(0, 3).join(" + ") : "custom";
  const moodText = moodTags.length ? moodTags.slice(0, 3).join(", ").toLowerCase() : "playful";

  const realityLines = {
    reality: `Run it as a ${moodText} ${themeText} session with concrete outfit and activity steps.`,
    private_roleplay: `Play it as a private ${moodText} ${themeText} roleplay scene from outfit reveal to final pose.`,
    fantasy: `Imagine it as a fantasy ${themeText} session with a ${moodText} tone and exaggerated details.`,
    extreme_fantasy: `Make it an extreme fantasy ${themeText} session with a ${moodText} tone and porn-like exaggeration.`,
    story_only: `Write or imagine it as a story-only ${themeText} scene with a ${moodText} tone.`
  };

  const extra = exposureStyle !== "none" || hasTag(tags, "Sissy exposure") || hasTag(tags, "Exhibition fantasy")
    ? " Build the session around being seen, photographed, displayed, or exposed."
    : "";

  return realityLines[realityLevel] + extra;
}

function buildTiming(sessionLength) {
  const maps = {
    quick: ["5 min outfit prep", "10 min main activity", "3 min final pose/photo/caption"],
    30: ["10 min outfit prep", "15 min main activity", "5 min final pose/photo/caption"],
    45: ["15 min outfit prep", "20 min main activity", "10 min sexual/fantasy/exposure layer"],
    60: ["20 min outfit prep", "25 min main activity", "15 min sexual/fantasy/exposure layer"],
    open: ["Dress until the outfit is complete", "Run the main activity once", "End with one final pose, caption, or fantasy beat"]
  };
  return maps[sessionLength].join(" → ");
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

  const outfit = buildOutfit(tags, sluttiness);
  const chore = selectChore(tags);
  const mainActivity = buildMainActivity(tags, chore);
  const sexualFocus = buildSexualFocus(tags);
  const exposure = buildExposureLayer(tags, exposureStyle);
  const scene = buildSceneSetup(tags, realityLevel, exposureStyle);
  const timing = buildTiming(sessionLength);

  const sections = [
    { label: "Scene setup", text: scene },
    { label: "Outfit", text: `${outfit.title}: ${outfit.text}` },
    { label: "Timing", text: timing },
    { label: "Main activity", text: mainActivity },
    { label: "Sexual / fantasy focus", text: sexualFocus }
  ];

  if (exposure) sections.push({ label: "Exposure layer", text: exposure });

  if (outputStyle === "checklist") {
    sections.push({ label: "Checklist", text: "1. Dress fully. 2. Complete the main activity. 3. Add the sexual/fantasy focus. 4. Finish with the exposure/photo/caption layer if one was rolled." });
  }

  const session = {
    id: crypto.randomUUID(),
    title: buildSessionTitle(tags),
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
