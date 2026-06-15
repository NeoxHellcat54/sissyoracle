const STORAGE_KEY = "sissyOraclePwa.v4";

const tagGroups = [
  {
    title: "Themes",
    tags: ["Maid", "Goth", "Bimbo", "Princess", "Schoolgirl", "Office", "Party", "Stripper", "Doll", "Latex", "Lingerie", "Casual", "Housewife", "Pornstar", "Cute", "Trashy", "Elegant"]
  },
  {
    title: "Mood / Tone",
    tags: ["Gentle", "Playful", "Slutty", "Strict", "Humiliating", "Degrading", "Chaotic", "Romantic", "Shameful", "Confident", "Nervous", "Obedient", "Mean"]
  },
  {
    title: "Activity Focus",
    tags: ["Dress-up", "Chores", "Safe tasks", "Teasing", "Masturbation", "Toy play", "Bondage", "Orgasm control", "Anal training", "Transformation", "Roleplay scenario"]
  },
  {
    title: "Fantasy Kinks",
    tags: ["Sissy exposure", "Exhibition fantasy", "Hookup fantasy", "Public shame fantasy", "Stranger fantasy", "Party slut fantasy", "Bimbo corruption", "Forced feminization fantasy", "Service slut fantasy", "Slut training fantasy"]
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
  allowRealPublicPostingPrompts: false
};

const settingLabels = {
  allowSkirtsDresses: "Skirts and dresses",
  allowLingerie: "Lingerie",
  allowHeels: "Heels",
  allowStockings: "Stockings / fishnets",
  allowMakeup: "Makeup",
  allowWigs: "Wigs / hair changes",
  allowCollarsChokers: "Collars / chokers",
  allowRestraints: "Bondage / restraints",
  allowToyMentions: "Toy mentions",
  allowPrivatePhotoPrompts: "Private photo prompts",
  allowTrustedSharingPrompts: "Trusted sharing prompts",
  allowRealPublicPostingPrompts: "Real public posting prompts"
};

const comboOutfits = [
  {
    match: ["Latex", "Princess"],
    title: "Latex Princess",
    outfits: [
      "Wear a glossy black latex catsuit with a bright blue short dress over the top. Add white thigh-high stockings, white heels, a long flowy blonde wig, a large blue bow, pink lipstick, blue eyeshadow, and a silver tiara.",
      "Wear a white latex bodysuit under a pink satin princess mini dress. Add pink platform heels, sheer white tights, a blonde curled wig, a pearl choker, glitter eyeshadow, and glossy pink lipstick.",
      "Wear a pink latex leotard with a baby-blue tutu skirt. Add white lace gloves, white heels, a blonde wig in pigtails, a ribbon choker, heavy blush, and shiny doll lips."
    ]
  },
  {
    match: ["Goth", "Maid"],
    title: "Goth Maid",
    outfits: [
      "Wear a short black maid dress with a white apron, black fishnets, black heels, a black lace choker, a white maid headband, smoky eyeshadow, and dark red lipstick.",
      "Wear a black pleated skirt, a white frilly blouse, a black apron, black thigh-high stockings, platform boots, lace wrist cuffs, heavy eyeliner, and black lipstick.",
      "Wear a black corset top with a tiny black skirt and a white maid apron. Add striped stockings, glossy black Mary Janes, a bell choker, a black hair bow, pale powder, and dark lipstick."
    ]
  },
  {
    match: ["Bimbo", "Party"],
    title: "Bimbo Party Girl",
    outfits: [
      "Wear a tiny hot-pink mini dress, clear platform heels, a blonde wig, big hoop earrings, a rhinestone choker, fake lashes, bright blush, and thick glossy pink lips.",
      "Wear a tight white crop top with a pink micro skirt, white thigh-high stockings, pink stilettos, glitter bracelets, sparkly eyeshadow, and shiny lip gloss.",
      "Wear a silver sparkly party dress, bare glossy legs, clear heels, a glitter handbag, fake lashes, heavy mascara, and bright pink lipstick."
    ]
  },
  {
    match: ["Schoolgirl", "Slutty"],
    title: "Slutty Schoolgirl",
    outfits: [
      "Wear a white button-up shirt tied above the waist, a short red plaid skirt, white knee-high socks, black Mary Jane shoes, a loose necktie, pigtails, pink lipstick, and bright blush.",
      "Wear a tight white blouse with the top buttons open, a navy pleated mini skirt, sheer tights, black heels, fake glasses, a ribbon choker, glossy lips, and long lashes."
    ]
  },
  {
    match: ["Latex", "Maid"],
    title: "Latex Maid",
    outfits: [
      "Wear a black latex bodysuit with a white maid apron over it. Add black latex gloves, white thigh-high stockings, black heels, a maid headband, a black collar, red lipstick, and sharp eyeliner.",
      "Wear a glossy black latex mini dress with a tiny white apron. Add fishnets, black platform heels, latex wrist cuffs, a white hair bow, dark eyeshadow, and glossy black lipstick."
    ]
  },
  {
    match: ["Goth", "Princess"],
    title: "Goth Princess",
    outfits: [
      "Wear a black lace mini dress with a dark purple tutu skirt. Add black thigh-highs, black heels, a silver tiara, a black ribbon choker, smoky eyeshadow, and deep plum lipstick.",
      "Wear a dark red corset dress with black lace gloves, fishnets, black platform shoes, a black crown, pale powder, heavy eyeliner, and dark glossy lips."
    ]
  },
  {
    match: ["Lingerie", "Doll"],
    title: "Lingerie Doll",
    outfits: [
      "Wear a pink babydoll nightie, frilly white panties, white thigh-high stockings, pink heels, a bow choker, a long curled wig, doll blush, and shiny pink lips.",
      "Wear a white lace teddy, sheer pink robe, pink stockings, fluffy heels, satin gloves, a hair bow, pastel eyeshadow, and glossy lips."
    ]
  },
  {
    match: ["Stripper"],
    title: "Stripper Fantasy",
    outfits: [
      "Wear a tiny black bikini top, a micro skirt, fishnets, clear platform heels, a rhinestone choker, glitter body spray, smoky eyeshadow, fake lashes, and red lipstick.",
      "Wear red lingerie with a sheer robe left open, bare glossy legs, black stripper heels, hoop earrings, glitter eyeshadow, and high-shine lip gloss."
    ]
  },
  {
    match: ["Maid"],
    title: "Maid",
    outfits: [
      "Wear a black maid dress, a white apron, white thigh-high stockings, black heels, a maid headband, a black choker, neat eyeliner, and glossy pink lips.",
      "Wear a black skirt, a white blouse, a white apron, black tights, black Mary Janes, lace wrist cuffs, soft blush, and pink lipstick."
    ]
  },
  {
    match: ["Goth"],
    title: "Goth",
    outfits: [
      "Wear a black mini dress, black fishnets, black platform boots, a spiked choker, silver rings, smoky eyeshadow, black eyeliner, and dark red lipstick.",
      "Wear a black corset top with a short black skirt, ripped tights, black heels, lace gloves, a collar, pale powder, and black lipstick."
    ]
  },
  {
    match: ["Princess"],
    title: "Princess",
    outfits: [
      "Wear a baby-blue short dress, white thigh-high stockings, white heels, a blonde wig, a large bow, a tiara, glitter eyeshadow, and pink lipstick.",
      "Wear a pink satin mini dress, sheer tights, sparkly heels, pearl jewelry, curled hair or a blonde wig, rosy blush, and glossy lips."
    ]
  },
  {
    match: [],
    title: "Generated Outfit",
    outfits: [
      "Wear a tight black top, a short pink skirt, thigh-high stockings, heels, a choker, eyeshadow, blush, and glossy lipstick.",
      "Wear a fitted mini dress, lace panties, sheer tights, platform heels, a hair bow, eyeliner, and shiny lips.",
      "Wear a crop top, a short skirt, stockings, cute heels, a collar or choker, mascara, blush, and lipstick."
    ]
  }
];

const sceneSetups = {
  reality: [
    "Set a timer, dress fully, then run the session as a concrete at-home routine.",
    "Lay out the outfit first, get dressed completely, then move straight into the rolled activity.",
    "Start with the outfit, continue into the activity, and end with the photo, pose, or sexual focus rolled below."
  ],
  private_roleplay: [
    "Build the session as a private roleplay scene: outfit first, character second, activity third.",
    "Act as the rolled character for the full session. Dress, perform the activity, then finish with the kink focus.",
    "Use the room as the scene. Enter already dressed, stay in character, and follow the steps in order."
  ],
  fantasy: [
    "Imagine the session as a full fantasy scenario with the outfit and activity happening exactly as described.",
    "Play or write the session as a fantasy scene with exaggerated outfit details and a clear sexual focus.",
    "Treat the rolled outfit, activity, and exposure layer as one complete fantasy scene."
  ],
  extreme_fantasy: [
    "Run the scenario as an exaggerated porn-style fantasy with no subtlety: outfit, activity, exposure, and kink all turned up.",
    "Make the fantasy loud, humiliating, visual, and excessive from the first clothing piece to the final image.",
    "Frame the whole session like an over-the-top adult scene built around the selected tags."
  ],
  story_only: [
    "Write the session as a story scene with a beginning, outfit reveal, activity, kink focus, and final image.",
    "Use the generated result as a fiction prompt and describe the character going through each step.",
    "Imagine it as a written scene: outfit, task, exposure beat, and sexual/fantasy ending."
  ]
};

const activityByTag = {
  "Chores": [
    "Complete {chore}. Every 5 minutes, pause for one full-body pose before continuing.",
    "Complete {chore}. Keep the outfit fully assembled for the entire chore.",
    "Complete {chore}. Take one photo or mental snapshot at the start, middle, and end."
  ],
  "Safe tasks": [
    "Stand in front of a mirror and do 6 poses: cute, slutty, ashamed, obedient, confident, and doll-like.",
    "Write a 6-line caption for the outfit, then read it once in the character voice.",
    "Walk across the room 10 times in the outfit, then hold a final kneeling or standing pose for 60 seconds."
  ],
  "Dress-up": [
    "Dress in stages: underwear, main outfit, legs, shoes, accessories, makeup, final pose.",
    "Lay every clothing piece on the bed, then put them on one by one and check the mirror after each layer.",
    "Create a before-and-after transformation: normal start, full outfit finish, final character pose."
  ],
  "Transformation": [
    "Turn the session into a transformation sequence: plain self, underwear layer, outfit layer, hair/makeup layer, final persona.",
    "Write or act out the moment the character realizes the transformation is complete.",
    "Make the final 5 minutes all about presenting the transformed version: posture, face, voice, and pose."
  ],
  "Roleplay scenario": [
    "Create a scene where the character enters the room already dressed and has to explain why they look that way.",
    "Act out a 5-minute roleplay introduction: name, outfit, purpose, and what the character is about to do.",
    "Use the selected tags to create a character, then perform the chore or kink focus as that character."
  ]
};

const sexualByTag = {
  "Teasing": [
    "Spend 10 minutes teasing yourself through or around the outfit, stopping twice to fix your pose in the mirror.",
    "Do a 7-minute teasing phase after the main activity. Keep the outfit on and focus on slow build-up.",
    "Tease for one song while standing or kneeling in the finished outfit."
  ],
  "Masturbation": [
    "After the activity, masturbate while still wearing the full outfit and keep the selected fantasy in mind.",
    "Add a solo play phase at the end: outfit stays on, legs/shoes stay on, and the fantasy theme drives the scene.",
    "Masturbate for 10 minutes after the outfit and activity are complete, then finish with one final pose."
  ],
  "Orgasm control": [
    "Use a start-stop rhythm: build up for 3 minutes, stop for 1 minute, repeat three times, then decide how the scene ends.",
    "Edge once after the main activity, hold still for 2 minutes, then either stop or continue the fantasy.",
    "Make the ending uncertain: tease, pause, pose, then choose whether the character gets to finish."
  ],
  "Anal training": [
    "Make anal training the theme of the final phase: dress fully, kneel or stand in character, then use the fantasy of being trained as the main focus.",
    "Add a 15-minute anal-training fantasy after the chore or pose task, centered on patience, display, and obedience.",
    "Use the outfit as the training uniform and make the final scene about being prepared, inspected, and trained."
  ],
  "Toy play": [
    "Add a toy phase after the main activity. Keep the full outfit on and make the toy part of the character presentation.",
    "Use one toy during the final 10 minutes, then finish with a still pose in the complete outfit.",
    "Build the final scene around toy use, posture, and the selected fantasy tags."
  ],
  "Bondage": [
    "Add a restraint element for the final pose: wrists together, ankles limited, blindfold, collar, or another enabled restriction.",
    "Spend the last 5 minutes with limited movement, holding one strict pose in the outfit.",
    "Make the final scene about restriction: limited hands, fixed posture, and no casual movement."
  ],
  "Hookup fantasy": [
    "Imagine the outfit was chosen for a hookup and write the first message, arrival moment, and first reaction.",
    "Create a fictional hookup scene where the character arrives dressed exactly like this and is immediately understood.",
    "Use the final phase as a hookup fantasy: outfit reveal, nervous introduction, then the scene turning sexual."
  ],
  "Stranger fantasy": [
    "Imagine a stranger seeing the full outfit and reacting to every deliberate detail.",
    "Build the fantasy around being looked over slowly by an anonymous viewer.",
    "Write or imagine a private encounter where the outfit gives away exactly what the character wants."
  ],
  "Slut training fantasy": [
    "Do a training sequence: 3 poses, 3 repeated lines, 3 minutes of teasing, then one final character pose.",
    "Use the final 10 minutes for slut training: posture, mouthy caption, teasing, and presentation.",
    "Make the session about training the character to look, pose, and behave more openly sexual."
  ],
  "Service slut fantasy": [
    "Turn the activity into service roleplay: dress as decorative help, complete the task, then present the finished result.",
    "Frame the chore or activity as service while dressed to look useful, sexualized, and displayed.",
    "Finish by posing beside the completed task like the outfit was part of the service."
  ],
  "Sissy exposure": [
    "Make the core fantasy being visibly transformed and unable to hide the sissy look.",
    "Add a reveal moment where the full outfit, makeup, and posture are exposed all at once.",
    "Center the final scene on being seen as the finished sissy persona."
  ],
  "Exhibition fantasy": [
    "Add an exhibition fantasy where the outfit is displayed to an imagined audience.",
    "Make the final pose feel like a stage reveal: full body, visible outfit details, no hiding.",
    "Imagine the session being watched from outfit prep through the final pose."
  ],
  "Public shame fantasy": [
    "Add a public shame fantasy where the outfit is noticed, judged, and remembered.",
    "Write a humiliating imagined caption and three imagined reactions to the outfit.",
    "Make the fantasy about being overdressed, exposed, and obviously sexualized in front of an imagined crowd."
  ],
  "Party slut fantasy": [
    "Turn the scene into a party slut fantasy: loud outfit, flirty posing, imagined attention, and a final photo moment.",
    "Imagine the outfit being worn at an adult party where every detail is meant to attract attention.",
    "End the session with a party-style pose and a caption that sounds like it belongs under a slutty photo."
  ],
  "Bimbo corruption": [
    "Add a bimbo corruption beat: make the makeup glossier, the pose dumber, and the caption more shameless.",
    "Turn the final phase into a bimbo transformation: voice, posture, lips, eyes, and outfit all exaggerated.",
    "Write a before-and-after caption showing the character becoming more bimbo and less subtle."
  ],
  "Forced feminization fantasy": [
    "Frame the session as a feminization fantasy: outfit imposed by the scenario, transformation completed, final persona presented.",
    "Write the fantasy as being dressed and styled into the selected look until the character is unrecognizable.",
    "Make the outfit feel like the proof of the transformation: hair, makeup, shoes, posture, and final pose."
  ]
};

const exposureTemplates = {
  none: [],
  private_fantasy: [
    "Imagine a 6-photo set of the session: outfit reveal, close-up detail, chore/action shot, kneeling pose, slutty pose, final portrait.",
    "Write a fake photo album title and 3 captions for the imagined session photos.",
    "Picture the outfit being photographed during the activity and describe the most exposing image in one paragraph."
  ],
  private_photos: [
    "Take 6 private photos: full outfit front, full outfit back, makeup close-up, chore-in-progress, low-angle pose, final mirror pose.",
    "Take a private photo set while doing the activity: one before, three during, one close-up detail, and one finished pose.",
    "Take 4 private photos: outfit reveal, hands doing the chore, legs/shoes shot, final slutty pose."
  ],
  anonymous_caption: [
    "Write an anonymous post title, a 2-sentence caption, and 5 tags for the session photos.",
    "Create three captions for the same imagined image: cute, humiliating, and slutty.",
    "Write a fake anonymous caption under the final pose and include the selected theme words."
  ],
  trusted_sharing: [
    "Choose one best image from the session and write the message that would go with it to a trusted viewer.",
    "Create a 3-photo trusted-sharing set: outfit reveal, activity shot, final pose, each with a short caption.",
    "Write a direct private-message caption for the finished outfit photo."
  ],
  public_posting_fantasy: [
    "Imagine posting the chore photos online. Write the post title, caption, and the first 3 imagined comments.",
    "Create a fake public post for the final outfit photo: title, caption, tags, and reaction summary.",
    "Write the imagined public caption for the most exposing photo from the session."
  ],
  real_public_posting: [
    "Take one photo during the activity and post it online with a direct caption based on the selected tags.",
    "Post one outfit/action photo with a short caption, then use that caption as the final line of the session.",
    "Create a small public post from the session: one image, one caption, and three tags."
  ]
};

let state = loadState();
let lastSession = null;

function loadState() {
  const fallback = {
    selectedTags: [],
    settings: { ...defaultSettings },
    chores: [
      { id: id(), name: "Clean bedroom surfaces", room: "Bedroom", duration: 15 },
      { id: id(), name: "Tidy clothes or laundry", room: "Laundry", duration: 15 },
      { id: id(), name: "Wipe bathroom sink", room: "Bathroom", duration: 10 }
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

function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function id() { return crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random()); }
function sample(items) { return items[Math.floor(Math.random() * items.length)]; }
function slug(value) { return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, ""); }
function hasTag(tags, tag) { return tags.map(slug).includes(slug(tag)); }
function score(match, tags) { return match.filter(tag => hasTag(tags, tag)).length; }

function renderTags() {
  const root = document.querySelector("#tagGroups");
  root.innerHTML = "";
  tagGroups.forEach(group => {
    const el = document.createElement("section");
    el.className = "tag-group";
    el.innerHTML = `<h3>${group.title}</h3>`;
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
    el.appendChild(grid);
    root.appendChild(el);
  });
}

function toggleTag(tag) {
  state.selectedTags = state.selectedTags.includes(tag) ? state.selectedTags.filter(t => t !== tag) : [...state.selectedTags, tag];
  saveState();
  renderTags();
}

function renderSettings() {
  const root = document.querySelector("#settingsList");
  root.innerHTML = "";
  Object.keys(defaultSettings).forEach(key => {
    const row = document.createElement("label");
    row.className = "setting-row";
    row.innerHTML = `<span>${settingLabels[key]}</span><input type="checkbox" ${state.settings[key] ? "checked" : ""} />`;
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

function selectOutfit(tags) {
  const ranked = comboOutfits
    .map(template => ({ ...template, s: score(template.match, tags) }))
    .sort((a, b) => b.s - a.s || b.match.length - a.match.length);
  const template = ranked.find(t => t.s > 0) || comboOutfits[comboOutfits.length - 1];
  return { title: template.title, text: sample(template.outfits) };
}

function applyOutfitLevel(text, level) {
  const addOns = {
    cute: ["Keep the silhouette cute: neat hair, soft face, polished pose."],
    flirty: ["Add one flirty detail: shorter hem, glossy lips, visible stockings, or a tighter waist."],
    slutty: ["Add two slutty details: visible lingerie line, shorter skirt, higher heels, sheer legwear, or heavier lipstick."],
    extreme: ["Push the look harder: shorter, tighter, shinier, higher heels, heavier makeup, and a more exposed final pose."]
  };
  return `${text} ${sample(addOns[level])}`;
}

function selectChore(tags) {
  const shouldUse = hasTag(tags, "Chores") || hasTag(tags, "Maid") || hasTag(tags, "Housewife") || hasTag(tags, "Service slut fantasy");
  if (!shouldUse) return null;
  if (!state.chores.length) return { name: "Clean one visible surface", room: "Bedroom", duration: 10 };
  return sample(state.chores);
}

function selectedActivityTags(tags) {
  return ["Chores", "Safe tasks", "Teasing", "Masturbation", "Orgasm control", "Anal training", "Toy play", "Bondage", "Transformation", "Roleplay scenario", "Hookup fantasy", "Stranger fantasy", "Slut training fantasy", "Service slut fantasy"]
    .filter(tag => hasTag(tags, tag));
}

function buildMainActivity(tags, chore) {
  if (chore) {
    return sample([
      `Complete ${chore.name} in the ${chore.room.toLowerCase()} for ${chore.duration} minutes while staying in the full outfit.`,
      `Clean the ${chore.room.toLowerCase()} for ${chore.duration} minutes, focusing on ${chore.name.toLowerCase()}. Pause halfway for one photo or pose.`,
      `Do ${chore.name.toLowerCase()} for ${chore.duration} minutes. Keep the outfit, shoes, makeup, and accessories on until the chore is finished.`
    ]);
  }

  const selected = selectedActivityTags(tags).filter(tag => tag !== "Chores");
  const primary = selected[0];
  const direct = {
    "Safe tasks": [
      "Do 6 poses in the finished outfit: cute, nervous, slutty, ashamed, doll-like, and confident.",
      "Walk across the room 10 times in the full outfit, then hold a standing pose for 60 seconds.",
      "Write a 6-line caption for the outfit, then read it once while looking at the full outfit."
    ],
    "Teasing": [
      "Spend 10 minutes teasing in the full outfit. Stop twice to fix the pose, makeup, and outfit details.",
      "Play one song and tease through the whole song while keeping the outfit fully assembled.",
      "Do a slow 7-minute tease session in the outfit, ending with one deliberate full-body pose."
    ],
    "Masturbation": [
      "Masturbate for 10 minutes while wearing the full outfit, then stop for one final pose.",
      "Use the outfit as the focus for a solo play phase: shoes and legwear stay on until the end.",
      "Do a 12-minute solo session in the outfit and keep the selected fantasy theme in mind the whole time."
    ],
    "Orgasm control": [
      "Do three rounds of 3 minutes build-up and 1 minute stillness, then decide whether the scene ends or continues.",
      "Edge once, hold still for 2 minutes in the outfit, then either stop or continue the session.",
      "Use a start-stop rhythm for 10 minutes: build, pause, pose, repeat."
    ],
    "Anal training": [
      "Make the session anal-training themed: dress fully, get into position, and spend 15 minutes focused on training, patience, and presentation.",
      "Use the outfit as the training uniform and spend the final phase on anal-training fantasy or toy play, depending on the user's settings.",
      "Do a 15-minute training scene built around the outfit, strict posture, and the feeling of being prepared and inspected."
    ],
    "Toy play": [
      "Use one enabled toy for 10 minutes while keeping the full outfit on.",
      "Build the activity around one toy, one pose, and one outfit detail that stays visible the whole time.",
      "Use a toy during the final phase, then finish with the toy put away and the outfit still complete."
    ],
    "Bondage": [
      "Add one restriction for 10 minutes: wrists together, ankles limited, blindfold, collar, or another enabled restraint.",
      "Hold one restricted pose for 5 minutes, then change into a second pose for another 5 minutes.",
      "Make movement limited for the activity: no casual walking, no slouching, and no removing outfit pieces."
    ],
    "Transformation": [
      "Do a transformation sequence: normal start, underwear layer, main outfit, hair/makeup, shoes, final persona.",
      "Lay out the full transformation, dress piece by piece, and take one before-and-after comparison.",
      "Spend 15 minutes turning into the selected character, ending with the completed look and one caption."
    ],
    "Roleplay scenario": [
      "Act out a 5-minute introduction for the character: name, outfit, purpose, and what they are about to do.",
      "Enter the room already dressed and explain out loud why the character looks this way.",
      "Perform the activity as the selected character for 10 minutes, using the outfit and mood tags as the role."
    ],
    "Hookup fantasy": [
      "Create a hookup fantasy scene: outfit reveal, first message, arrival moment, and first reaction.",
      "Write or imagine a private hookup setup where the character arrives dressed exactly like this.",
      "Make the main scene a fictional hookup built around the outfit and selected kink tags."
    ],
    "Stranger fantasy": [
      "Imagine an anonymous viewer seeing the outfit and reacting to 5 specific details.",
      "Build the scene around being looked over slowly by a stranger who understands the outfit immediately.",
      "Write a private stranger-fantasy setup: where it happens, what they notice first, and what the outfit gives away."
    ],
    "Slut training fantasy": [
      "Do a training sequence: 3 poses, 3 repeated lines, 3 minutes of teasing, and one final character pose.",
      "Spend 10 minutes on slut training: posture, caption, teasing, and presentation.",
      "Train the character to look and act more openly sexual using the outfit as the uniform."
    ],
    "Service slut fantasy": [
      "Do the selected chore or a 10-minute service task while dressed as decorative help.",
      "Present the finished task while posing beside it in the outfit.",
      "Turn the activity into service roleplay: dressed to serve, displayed while working, posed at the end."
    ]
  };

  if (primary && direct[primary]) return sample(direct[primary]);
  if (hasTag(tags, "Dress-up")) return sample(direct["Transformation"]);
  return "Do a 15-minute outfit presentation: 3 poses, one short walk, one close-up detail, and one final full-body pose.";
}

function buildKinkFantasy(tags) {
  const order = ["Sissy exposure", "Exhibition fantasy", "Public shame fantasy", "Hookup fantasy", "Stranger fantasy", "Slut training fantasy", "Service slut fantasy", "Bimbo corruption", "Forced feminization fantasy"];
  const picked = order.filter(tag => hasTag(tags, tag));
  if (!picked.length) return null;

  const concrete = {
    "Sissy exposure": [
      "Make the fantasy about the finished sissy look being obvious: outfit, makeup, posture, and photo angle all show the transformation clearly.",
      "Add a reveal moment where the full outfit is shown all at once: front view, back view, makeup close-up, and final pose.",
      "Center the scene on being visibly transformed and unable to make the look seem casual."
    ],
    "Exhibition fantasy": [
      "Frame the scene like an exhibition: the outfit is displayed from head to toe, with no hiding the shoes, makeup, or silhouette.",
      "Make the final image look staged for an audience: full body, direct posture, obvious outfit details.",
      "Build the scene around being watched from dressing through the finished pose."
    ],
    "Public shame fantasy": [
      "Add a public-shame angle: the outfit is too obvious, too sexual, and too memorable to pass as normal.",
      "Write 3 imagined reactions to the finished look: one teasing, one shocked, and one approving.",
      "Make the fantasy about being overdressed, exposed, and instantly judged by an imagined crowd."
    ],
    "Hookup fantasy": [
      "Add a hookup angle: the outfit is chosen to make the character look available, nervous, and easy to read.",
      "Write the first message, the arrival outfit check, and the first reaction to the finished look.",
      "Make the fantasy feel like the outfit was selected specifically for a private adult encounter."
    ],
    "Stranger fantasy": [
      "Add an anonymous-viewer angle: imagine them noticing the heels first, then the makeup, then the outfit shape.",
      "Make the fantasy about being silently inspected by someone who immediately understands the role.",
      "Describe 5 things a stranger would notice about the finished look."
    ],
    "Slut training fantasy": [
      "Make it a training scene: 3 poses, 3 repeated lines, 3 minutes of teasing, then one final character pose.",
      "Use the outfit as the training uniform and make the goal look more shameless by the end.",
      "Add a training progression: pose correctly, speak the line, tease briefly, repeat three times."
    ],
    "Service slut fantasy": [
      "Make the activity feel like sexualized service: dressed up, useful, decorative, and clearly on display.",
      "Finish by presenting the completed task beside the outfit like both are part of the service.",
      "Frame the character as dressed to serve while still being looked at."
    ],
    "Bimbo corruption": [
      "Push the bimbo angle: glossier lips, dumber pose, softer expression, brighter colors, and a shameless caption.",
      "Make the final look more bimbo than subtle: lips, lashes, chest, hips, and empty-headed pose emphasized.",
      "Add a before-and-after caption showing the character becoming more bimbo and less careful."
    ],
    "Forced feminization fantasy": [
      "Frame it as a feminization fantasy: the finished outfit proves the transformation is complete.",
      "Make the scene about being styled into the selected look until the original self is hard to recognize.",
      "Emphasize hair, makeup, shoes, posture, and the final feminine presentation."
    ]
  };

  return picked.slice(0, 2).map(tag => sample(concrete[tag])).join("\n");
}

function buildExposure(tags, style) {
  const exposureTag = hasTag(tags, "Sissy exposure") || hasTag(tags, "Exhibition fantasy") || hasTag(tags, "Public shame fantasy");
  let chosen = style;
  if (chosen === "none" && exposureTag) chosen = "private_photos";
  if (chosen === "none") return null;
  if (chosen === "private_photos" && !state.settings.allowPrivatePhotoPrompts) chosen = "private_fantasy";
  if (chosen === "trusted_sharing" && !state.settings.allowTrustedSharingPrompts) chosen = "anonymous_caption";
  if (chosen === "real_public_posting" && !state.settings.allowRealPublicPostingPrompts) chosen = "public_posting_fantasy";
  return sample(exposureTemplates[chosen]);
}

function buildTitle(tags, outfitTitle) {
  const anchors = ["Sissy exposure", "Latex", "Princess", "Goth", "Maid", "Bimbo", "Party", "Anal training", "Hookup fantasy", "Chores"].filter(tag => hasTag(tags, tag));
  return anchors.length ? `${anchors.slice(0, 4).join(" ")} Session` : `${outfitTitle} Session`;
}

function generateSession(overrides = {}) {
  const tags = state.selectedTags;
  const realityLevel = overrides.realityLevel || document.querySelector("#realityLevel").value;
  const length = document.querySelector("#sessionLength").value;
  const level = overrides.sluttiness || document.querySelector("#sluttiness").value;
  const exposureStyle = overrides.exposureStyle || document.querySelector("#exposureStyle").value;

  const outfit = selectOutfit(tags);
  const chore = selectChore(tags);
  const exposure = buildExposure(tags, exposureStyle);
  const kinkFantasy = buildKinkFantasy(tags);
  const sections = [
    { label: "Outfit", text: `${outfit.title}: ${applyOutfitLevel(outfit.text, level)}` },
    { label: "Main activity", text: buildMainActivity(tags, chore) }
  ];

  if (kinkFantasy) sections.push({ label: "Kink / fantasy", text: kinkFantasy });
  if (exposure) sections.push({ label: "Exposure / photo", text: exposure });

  const session = {
    id: id(),
    title: buildTitle(tags, outfit.title),
    sections,
    tags: [...tags],
    createdAt: new Date().toLocaleString(),
    controls: { realityLevel, length, level, exposureStyle }
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
  session.sections.forEach((section, index) => {
    const el = document.createElement("section");
    el.className = "result-section";
    el.innerHTML = `<h3>${index + 1}. ${section.label}</h3><p>${section.text}</p>`;
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
  if (kind === "softer") { document.querySelector("#sluttiness").value = "flirty"; document.querySelector("#realityLevel").value = "private_roleplay"; return generateSession({ sluttiness: "flirty", realityLevel: "private_roleplay" }); }
  if (kind === "sluttier") { document.querySelector("#sluttiness").value = "extreme"; return generateSession({ sluttiness: "extreme" }); }
  if (kind === "fantasy") { document.querySelector("#realityLevel").value = "fantasy"; return generateSession({ realityLevel: "fantasy" }); }
  if (kind === "realistic") { document.querySelector("#realityLevel").value = "reality"; document.querySelector("#exposureStyle").value = "none"; return generateSession({ realityLevel: "reality", exposureStyle: "none" }); }
}

function bindEvents() {
  document.querySelector("#generateBtn").addEventListener("click", () => generateSession());
  document.querySelector("#clearTagsBtn").addEventListener("click", () => { state.selectedTags = []; saveState(); renderTags(); });
  document.querySelector("#saveSessionBtn").addEventListener("click", saveCurrentSession);
  document.querySelectorAll(".adjustBtn").forEach(btn => btn.addEventListener("click", () => handleAdjustment(btn.dataset.adjust)));
  document.querySelector("#choreForm").addEventListener("submit", event => {
    event.preventDefault();
    const name = document.querySelector("#choreName").value.trim();
    if (!name) return;
    state.chores.push({ id: id(), name, room: document.querySelector("#choreRoom").value, duration: Number(document.querySelector("#choreDuration").value) });
    document.querySelector("#choreName").value = "";
    saveState();
    renderChores();
  });
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(console.warn);
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
