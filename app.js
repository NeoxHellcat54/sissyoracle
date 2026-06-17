const STORAGE_KEY = "sissyOraclePwa.guided.v3";

const outfitPrompts = [
  "Maid", "Goth", "Latex", "Princess", "Bimbo", "Party Slut", "Stripper", "Schoolgirl", "Lingerie", "Doll",
  "Casual Slut", "Office Slut", "Housewife", "Pet", "Cheerleader", "Bride", "Nurse", "Pornstar", "E-Girl", "Emo"
];

const treatmentPrompts = [
  "Gentle", "Playful", "Strict", "Mean", "Humiliating", "Degrading", "Worshipful", "Objectifying", "Training", "Service",
  "Spoiling", "Embarrassing", "Bimbo", "Obedient", "Nervous", "Romantic", "Chaotic", "Pornstar", "Doll-like", "Bratty"
];

const activityPrompts = [
  "Chores", "Cleaning", "Dress-up", "Photo Set", "Captions", "Private Photos", "Online Exposure", "Public Walk", "Public Exhibition", "Sissy Exposure",
  "Confession", "Pain", "Hypno", "Edging", "Denial", "Orgasm Control", "Toy Use", "Plug Wearing", "Anal Training", "Dildo Use",
  "Vibrator Use", "Oral Training", "Chastity", "Bondage", "Maid Service", "Bimbo Training", "Sissy Training", "Doll Training", "Pet Play", "Hookup"
];

const activityGroups = [
  {
    label: "Useful / display",
    items: ["Chores", "Cleaning", "Dress-up", "Maid Service"]
  },
  {
    label: "Photos / exposure",
    items: ["Photo Set", "Captions", "Private Photos", "Online Exposure", "Public Walk", "Public Exhibition", "Sissy Exposure", "Confession"]
  },
  {
    label: "Sex / control",
    items: ["Pain", "Hypno", "Edging", "Denial", "Orgasm Control", "Toy Use", "Plug Wearing", "Anal Training", "Dildo Use", "Vibrator Use", "Oral Training", "Chastity", "Bondage"]
  },
  {
    label: "Training / roleplay",
    items: ["Bimbo Training", "Sissy Training", "Doll Training", "Pet Play", "Hookup"]
  }
];

const defaultSpecialWardrobe = {
  Princess: ["Princess Belle dress", "Princess Elsa dress"],
  Latex: ["Black latex catsuit", "Red latex catsuit", "Pink latex catsuit", "Latex maid dress"],
  Maid: ["Latex maid dress"]
};

const defaultToys = [
  "Plug", "Dildo", "Vibrator", "Chastity cage", "Collar", "Restraints", "Blindfold", "Gag", "Nipple clamps", "Leash"
];

const defaultChores = [
  { id: uid(), name: "Clean bedroom surfaces", room: "Bedroom", duration: 15 },
  { id: uid(), name: "Tidy laundry", room: "Laundry", duration: 15 },
  { id: uid(), name: "Wipe bathroom sink", room: "Bathroom", duration: 10 }
];

const promptPools = {
  Maid: {
    underwear: ["white lace bra and panties", "black lace bra and panties", "frilly white panties with a matching bralette", "black satin bra with white panties", "white garter belt with lace panties"],
    main: ["short black maid dress", "pink maid dress", "black skirt with a white blouse", "frilly black-and-white maid uniform", "tiny maid costume with a fitted waist"],
    overlay: ["white apron", "lace cuffs", "maid headband", "black choker", "cleaning gloves"],
    legwear: ["white thigh-high stockings", "black thigh-high stockings", "fishnets", "sheer white tights", "lace-topped stockings"],
    shoes: ["black heels", "black Mary Janes", "white heels", "platform heels", "black flats"],
    hair: ["neat pigtails", "a black bob wig", "a white bow in the hair", "a blonde wig with curled ends", "a maid headband over styled hair"],
    makeup: ["neat eyeliner and glossy pink lips", "red lipstick and doll-like blush", "soft pink lipstick and mascara", "smoky eyeliner and red lips", "bright blush with shiny lips"]
  },
  Goth: {
    underwear: ["black lace bra and thong", "dark red lace bra and panties", "black mesh bralette and panties", "black strappy lingerie set", "black garter belt with matching panties"],
    main: ["black mini dress", "black lace dress", "corset top with a black skirt", "black velvet dress", "black crop top with a short skirt"],
    overlay: ["black lace gloves", "spiked choker", "silver chain belt", "black ribbon choker", "dark lace sleeves"],
    legwear: ["black fishnets", "ripped black tights", "black thigh-high stockings", "dark red stockings", "sheer black tights"],
    shoes: ["black platform boots", "black heels", "chunky goth boots", "black stilettos", "platform Mary Janes"],
    hair: ["black wig", "dark pigtails", "messy black hair", "black hair with red clips", "straight black wig"],
    makeup: ["heavy eyeliner and dark red lipstick", "black lipstick with smoky eyes", "pale foundation and plum lipstick", "sharp black eyeliner and silver eyeshadow", "dark eyeshadow with glossy black lips"]
  },
  Latex: {
    underwear: ["black latex thong", "glossy black panties", "latex bra set", "minimal shiny underlayer", "red latex thong and bra"],
    main: ["black latex catsuit", "red latex catsuit", "pink latex catsuit", "latex mini dress", "latex bodysuit"],
    overlay: ["latex gloves", "black collar", "latex cuffs", "shiny waist belt", "latex maid apron"],
    legwear: ["latex stockings", "shiny thigh-highs", "black stockings", "glossy tights", "fishnets over latex"],
    shoes: ["latex boots", "black platform heels", "red stilettos", "clear platform heels", "black high heels"],
    hair: ["slick black wig", "high ponytail", "blonde wig for contrast", "pink wig", "tight styled hair"],
    makeup: ["glossy red lipstick and sharp eyeliner", "black eyeliner and high-shine lips", "pink glossy lips and heavy lashes", "dark smoky eyes and wet-look lips", "blue eyeshadow and glossy pink lipstick"]
  },
  Princess: {
    underwear: ["pink satin bra and panties", "white lace lingerie set", "baby-blue lace bra and panties", "frilly pink panties", "pastel thong with a ribbon bra"],
    main: ["short baby-blue princess dress", "pink corset mini dress", "white satin babydoll dress", "pastel poofy skirt with a tight top", "tiny lace-trimmed royal dress"],
    overlay: ["silver tiara", "large hair bow", "pearl choker", "satin sash", "white lace gloves"],
    legwear: ["white thigh-high stockings", "pink lace stockings", "sheer white tights", "frilly ankle socks", "garter stockings"],
    shoes: ["white heels", "pink platform heels", "clear heels", "ballet-style heels", "silver heels"],
    hair: ["long blonde wig", "curled blonde wig", "high ponytail with ribbons", "pink wig with soft curls", "long flowy hair with a bow"],
    makeup: ["pink lipstick and blue eyeshadow", "glossy lips with heavy blush", "sparkly pastel eyeshadow", "doll-like lashes and pink blush", "glittery pageant makeup"]
  },
  Bimbo: {
    underwear: ["hot pink thong and push-up bra", "tiny lace bra and panties", "pink satin lingerie", "micro thong", "white lace bra with pink panties"],
    main: ["tight pink mini dress", "low-cut crop top with a micro skirt", "white bodycon dress", "pink bodysuit", "tiny pink skirt with a shiny top"],
    overlay: ["big hoop earrings", "rhinestone choker", "fake nails", "pink purse", "glitter belt"],
    legwear: ["bare legs", "white stockings", "pink fishnets", "sheer stockings", "lace thigh-highs"],
    shoes: ["pink platform heels", "clear heels", "white stilettos", "strappy heels", "hot-pink heels"],
    hair: ["big blonde wig", "blonde high ponytail", "curled blonde hair", "pink wig", "blonde pigtails"],
    makeup: ["glossy pink lips, heavy blush, and long lashes", "bright eyeshadow and thick lip gloss", "pink lipstick with fake lashes", "glitter eyeshadow and shiny lips", "heavy blush with doll-like lashes"]
  },
  "Party Slut": {
    underwear: ["black thong and push-up bra", "red lace bra and panties", "sparkly lingerie set", "tiny black g-string", "hot-pink lace set"],
    main: ["glittery bodycon mini dress", "black crop top with a sequin mini skirt", "red cut-out dress", "metallic mini dress", "tight club dress"],
    overlay: ["glitter jewelry", "hoop earrings", "rhinestone choker", "small clutch", "sparkly belt"],
    legwear: ["fishnets", "bare legs", "sheer stockings", "black thigh-highs", "glitter tights"],
    shoes: ["strappy heels", "clear platform heels", "black stilettos", "red heels", "silver heels"],
    hair: ["big curled hair", "high ponytail", "blonde wig", "wet-look hair", "messy party hair"],
    makeup: ["smoky eyes and glossy lips", "glitter eyeshadow and red lipstick", "heavy lashes and pink gloss", "silver eyeshadow and nude glossy lips", "bright blush and shiny lips"]
  },
  Stripper: {
    underwear: ["tiny black thong and bra", "red bikini set", "metallic lingerie", "cut-out bodysuit underwear", "micro g-string and matching bra"],
    main: ["tiny bikini set", "cut-out bodysuit", "micro skirt with a bra top", "tiny dress", "stage lingerie set"],
    overlay: ["garter", "body glitter", "rhinestone choker", "dollar-bill prop", "lace gloves"],
    legwear: ["fishnets", "bare legs", "sheer stockings", "black thigh-highs", "garter stockings"],
    shoes: ["clear platform heels", "stilettos", "silver platform heels", "black platform heels", "red heels"],
    hair: ["big curled hair", "blonde wig", "high ponytail", "long straight wig", "messy stage hair"],
    makeup: ["heavy stage makeup and glossy red lips", "smoky eyes and fake lashes", "glitter eyeshadow and shiny lips", "dark eyeliner and pink gloss", "dramatic lashes and red lipstick"]
  },
  Schoolgirl: {
    underwear: ["white cotton panties", "pink panties and bra set", "plaid panties", "cute lace underwear", "white bralette and panties"],
    main: ["pleated plaid skirt with a white blouse", "cropped white shirt with a tiny skirt", "cardigan over a fitted blouse", "short navy skirt with a tied shirt", "school uniform mini skirt set"],
    overlay: ["loose necktie", "hair clips", "glasses", "backpack", "cardigan"],
    legwear: ["white knee socks", "thigh-high socks", "black stockings", "striped socks", "white ankle socks"],
    shoes: ["black Mary Janes", "loafers", "platform Mary Janes", "black heels", "white sneakers"],
    hair: ["pigtails", "high ponytail", "straight wig with clips", "braided pigtails", "messy schoolgirl hair"],
    makeup: ["soft pink lips and blush", "simple eyeliner and glossy lips", "bright blush and mascara", "pink lipstick and fake lashes", "light eyeshadow with shiny lips"]
  },
  Lingerie: {
    underwear: ["black lace bra and panties", "red corset with garters", "pink satin bra and thong", "white lace bodysuit", "black garter belt and stockings"],
    main: ["lace bodysuit", "corset lingerie set", "bra and panty set", "satin teddy", "garter lingerie set"],
    overlay: ["sheer robe", "lace gloves", "garter belt", "choker", "satin ribbon"],
    legwear: ["garter stockings", "black thigh-highs", "white stockings", "fishnets", "sheer tights"],
    shoes: ["lace-up heels", "black heels", "red heels", "clear heels", "white stilettos"],
    hair: ["soft curls", "messy bedroom hair", "blonde wig", "straight black wig", "high ponytail"],
    makeup: ["red lipstick and smoky eyes", "glossy pink lips and heavy blush", "dark eyeliner and nude gloss", "sparkly eyeshadow and red lips", "soft lashes and pink lipstick"]
  },
  Doll: {
    underwear: ["frilly white panties", "pink lace bra and panties", "pastel bralette and panties", "doll-like bodysuit", "white lace lingerie set"],
    main: ["babydoll dress", "poofy doll dress", "tight bodysuit with a poofy skirt", "pink doll dress", "white lace-trimmed dress"],
    overlay: ["giant bow", "doll collar", "lace cuffs", "painted freckles", "ribbon belt"],
    legwear: ["white stockings", "lace socks", "pink thigh-highs", "sheer tights", "frilly ankle socks"],
    shoes: ["Mary Janes", "ballet-style heels", "platform shoes", "white heels", "pink heels"],
    hair: ["pigtails", "curled wig", "blunt-bang wig", "pink wig", "long blonde curls"],
    makeup: ["round blush and painted lips", "big lashes and pink blush", "doll-like eyeshadow and glossy lips", "painted pink lips and fake lashes", "porcelain blush with red lips"]
  },
  "Casual Slut": {
    underwear: ["cute thong and bra", "white panties and bralette", "pink lace set", "black bra and thong", "simple panties under the outfit"],
    main: ["tight crop top with short shorts", "oversized shirt with a mini skirt", "tiny denim skirt with a fitted top", "low-cut tank top with short shorts", "tight casual dress"],
    overlay: ["choker", "hair clip", "hoop earrings", "cropped jacket", "casual purse"],
    legwear: ["bare legs", "ankle socks", "thigh-highs", "fishnets", "white socks"],
    shoes: ["sneakers", "casual heels", "flats", "platform sneakers", "white heels"],
    hair: ["messy ponytail", "loose hair", "blonde wig", "pigtails", "hair clipped back"],
    makeup: ["lip gloss and mascara", "pink lipstick and blush", "light eyeshadow and gloss", "soft eyeliner and shiny lips", "cute blush with glossy lips"]
  },
  "Office Slut": {
    underwear: ["black lace bra and panties", "white bra and thong", "red lingerie under the blouse", "sheer bra set", "garter belt with black panties"],
    main: ["tight blouse with a pencil skirt", "fitted blazer over a low-cut top", "short office dress", "white blouse with a tiny black skirt", "tight secretary outfit"],
    overlay: ["glasses", "clipboard", "thin belt", "necklace", "blazer"],
    legwear: ["sheer stockings", "black tights", "garter stockings", "nude stockings", "fishnets"],
    shoes: ["black office heels", "stilettos", "red heels", "pointed heels", "platform pumps"],
    hair: ["tight bun", "straight wig", "blonde office-style wig", "ponytail", "neat curled hair"],
    makeup: ["red lipstick and winged eyeliner", "clean eyeliner and glossy lips", "smoky eyes and nude gloss", "pink lipstick and sharp brows", "office-perfect makeup with red lips"]
  },
  Housewife: {
    underwear: ["white panties and bra", "pink lace lingerie", "soft satin bra and panties", "floral panties", "white garter set"],
    main: ["retro house dress", "blouse with a skirt", "pink domestic dress", "floral dress", "robe over lingerie"],
    overlay: ["apron", "pearls", "headscarf", "cleaning gloves", "frilly apron"],
    legwear: ["stockings", "white socks", "sheer tights", "lace stockings", "bare legs"],
    shoes: ["house heels", "low heels", "slippers", "white heels", "pink heels"],
    hair: ["curled hair", "headscarf over styled hair", "blonde wig", "soft updo", "retro curls"],
    makeup: ["red lipstick and soft eyeshadow", "pink lipstick and blush", "neat eyeliner and glossy lips", "retro red lips", "soft feminine makeup"]
  },
  Pet: {
    underwear: ["black thong and bralette", "pink panties and bra", "minimal bodysuit", "white lace set", "tiny bikini underlayer"],
    main: ["short bodysuit", "tiny dress", "bikini set", "minimal pet-play outfit", "crop top with tiny shorts"],
    overlay: ["collar", "leash", "cat ears", "tail", "paw gloves"],
    legwear: ["stockings", "knee socks", "thigh-highs", "bare legs", "fishnets"],
    shoes: ["barefoot", "heels", "boots", "platform heels", "Mary Janes"],
    hair: ["pigtails", "messy pet hair", "black wig", "blonde wig", "hair with ears clipped in"],
    makeup: ["nose and whisker makeup with glossy lips", "pink blush and shiny lips", "dark eyeliner and pet-like nose", "soft lashes and pink lipstick", "playful blush with heavy gloss"]
  },
  Cheerleader: {
    underwear: ["white panties and bra", "pink sporty set", "tiny thong under the skirt", "white bralette and panties", "red panties with matching bra"],
    main: ["cheer crop top with a pleated skirt", "pink cheer uniform", "white-and-red cheer outfit", "tiny pleated skirt with a fitted top", "sporty crop top with short skirt"],
    overlay: ["pom-poms", "hair bow", "wristbands", "team-style sash", "ribbon ponytail"],
    legwear: ["white knee socks", "ankle socks", "thigh-highs", "bare legs", "striped socks"],
    shoes: ["white sneakers", "platform sneakers", "white heels", "pink heels", "sporty flats"],
    hair: ["high ponytail", "pigtails", "blonde ponytail", "hair with a bow", "curled cheer hair"],
    makeup: ["bright lipstick and glitter", "pink blush and glossy lips", "sparkly eyeshadow and lashes", "red lipstick and clean eyeliner", "cheerleader blush and shiny lips"]
  },
  Bride: {
    underwear: ["white lace bra and panties", "bridal garter set", "white corset lingerie", "ivory lace thong and bra", "pale pink lingerie set"],
    main: ["short white bridal dress", "white lace dress", "corset bridal mini dress", "white satin dress", "lace bodysuit with bridal skirt"],
    overlay: ["veil", "garter", "pearl choker", "bouquet", "lace gloves"],
    legwear: ["white stockings", "garter stockings", "sheer white tights", "lace thigh-highs", "bare legs"],
    shoes: ["white heels", "lace heels", "silver heels", "white stilettos", "pale pink heels"],
    hair: ["soft curled hair", "blonde bridal wig", "updo with veil", "long curled wig", "hair with white bow"],
    makeup: ["soft pink lips and dramatic lashes", "bridal blush and glossy lips", "red lips and soft eyeshadow", "sparkly eyeshadow and pink lipstick", "clean eyeliner and pale lipstick"]
  },
  Nurse: {
    underwear: ["white bra and panties", "red lace set", "pink lingerie set", "white thong and bra", "sheer white underwear"],
    main: ["white nurse mini dress", "pink nurse dress", "white uniform top with tiny skirt", "latex nurse dress", "short red-and-white nurse costume"],
    overlay: ["nurse cap", "white gloves", "clipboard", "red cross detail", "medical-style belt"],
    legwear: ["white stockings", "sheer tights", "white thigh-highs", "fishnets", "bare legs"],
    shoes: ["white heels", "red heels", "white platform heels", "stilettos", "black heels"],
    hair: ["neat ponytail", "blonde nurse wig", "hair under a nurse cap", "curled hair", "straight wig"],
    makeup: ["red lipstick and clean eyeliner", "pink lips and mascara", "glossy red lips and lashes", "white eyeshadow and red lips", "sharp eyeliner and gloss"]
  },
  Pornstar: {
    underwear: ["tiny red thong and bra", "black cut-out lingerie", "pink micro lingerie", "sheer bra and panties", "g-string with push-up bra"],
    main: ["tiny cut-out dress", "bikini set", "revealing bodysuit", "micro dress", "camera-ready lingerie set"],
    overlay: ["body glitter", "hoop earrings", "rhinestone choker", "garter", "stage gloves"],
    legwear: ["fishnets", "bare legs", "stockings", "garter stockings", "sheer tights"],
    shoes: ["clear heels", "platform heels", "stilettos", "red heels", "black heels"],
    hair: ["big curls", "blonde wig", "styled porn-star hair", "wet-look hair", "high ponytail"],
    makeup: ["glossy lips, heavy lashes, and smoky eyes", "red lips and stage makeup", "pink gloss and fake lashes", "glitter eyeshadow and blush", "dark liner and shiny lips"]
  },
  "E-Girl": {
    underwear: ["black panties and bralette", "pink-and-black lingerie set", "striped panties", "black mesh bra and thong", "cute gamer-girl bra set"],
    main: ["black crop top with a plaid skirt", "oversized graphic tee with a mini skirt", "mesh top over a bralette", "striped long sleeve under a crop top", "short black dress with chains"],
    overlay: ["hair clips", "chain belt", "striped sleeves", "black choker", "cute headset"],
    legwear: ["striped thigh-highs", "fishnets", "black knee socks", "one striped sock and one black sock", "sheer tights"],
    shoes: ["platform sneakers", "black boots", "Mary Janes", "chunky heels", "platform shoes"],
    hair: ["two-tone wig", "pink streak wig", "pigtails with clips", "black wig with clips", "messy dyed hair"],
    makeup: ["heavy blush with winged eyeliner", "pink eyeshadow and glossy lips", "heart-shaped blush marks and lashes", "dark eyeliner with cute pink lips", "e-girl blush and shiny gloss"]
  },
  Emo: {
    underwear: ["black lace bra and panties", "striped panties and black bralette", "dark red lingerie", "black thong and mesh bra", "pink-and-black underwear set"],
    main: ["black skinny top with a plaid mini skirt", "band tee with a short skirt", "striped top with black shorts", "black dress with fishnets", "dark hoodie over a tiny skirt"],
    overlay: ["studded belt", "black wristbands", "striped arm warmers", "choker", "dark hair clips"],
    legwear: ["striped thigh-highs", "fishnets", "ripped tights", "black knee socks", "sheer black tights"],
    shoes: ["black boots", "platform Converse-style shoes", "black Mary Janes", "chunky boots", "black platform heels"],
    hair: ["side-swept black wig", "black-and-red wig", "messy emo hair", "straight black wig", "dark pigtails"],
    makeup: ["heavy eyeliner and pale lips", "black eyeliner with dark red lipstick", "smudged eyeliner and glossy lips", "dark eyeshadow and pink gloss", "dramatic eyeliner with black lipstick"]
  }
};

const comboTemplates = {
  "Goth|Maid": [
    "Wear {underwear}. Wear {specialOrMain} with {overlay}. Add {legwear}, {shoes}, {hair}, and {makeup}.",
    "Wear {underwear}. Put on {specialOrMain}, then darken it with {overlay}. Add {legwear}, {shoes}, {hair}, and {makeup}."
  ],
  "Latex|Princess": [
    "Wear {underwear}. Layer {specialA} with {specialB}. Add {legwear}, {shoes}, {hair}, {makeup}, and {overlay}.",
    "Wear {underwear}. Make the look a shiny princess outfit: {specialOrMain}. Add {legwear}, {shoes}, {hair}, {makeup}, and {overlay}."
  ],
  "Bimbo|Maid": ["Wear {underwear}. Wear {specialOrMain} and make it pinker, tighter, and more glossy with {overlay}. Add {legwear}, {shoes}, {hair}, and {makeup}."],
  "Bimbo|Party Slut": ["Wear {underwear}. Wear {specialOrMain}. Add {legwear}, {shoes}, {hair}, {makeup}, and {overlay} so the whole look is glossy, loud, and attention-hungry."],
  "Maid|Stripper": ["Wear {underwear}. Turn the maid look into a stage outfit with {specialOrMain}, {overlay}, {legwear}, {shoes}, {hair}, and {makeup}."],
  "Bimbo|Schoolgirl": ["Wear {underwear}. Wear {specialOrMain}, then make it bimbo with {overlay}, {legwear}, {shoes}, {hair}, and {makeup}."],
  "Lingerie|Princess": ["Wear {underwear} as the main underlayer. Add {specialOrMain}, {legwear}, {shoes}, {hair}, {makeup}, and {overlay}."],
  "Doll|Latex": ["Wear {underwear}. Wear {specialOrMain} and make it glossy and artificial with {overlay}. Add {legwear}, {shoes}, {hair}, and {makeup}."],
  "Bimbo|Office Slut": ["Wear {underwear}. Wear {specialOrMain}. Add {legwear}, {shoes}, {hair}, {makeup}, and {overlay}, making the office look too tight and too pink to be professional."],
  "Maid|Pet": ["Wear {underwear}. Wear {specialOrMain} with {overlay}. Add {legwear}, {shoes}, {hair}, and {makeup} so the outfit reads like a pet maid."],
  "Bride|Goth": ["Wear {underwear}. Wear {specialOrMain} with {overlay}. Add {legwear}, {shoes}, {hair}, and {makeup}, turning bridal white into a dark corrupted bride look."],
  "Latex|Nurse": ["Wear {underwear}. Wear {specialOrMain}. Add {legwear}, {shoes}, {hair}, {makeup}, and {overlay} so the nurse look is glossy and clinical."],
  "Maid|Pornstar": ["Wear {underwear}. Wear {specialOrMain}. Add {legwear}, {shoes}, {hair}, {makeup}, and {overlay}, making the maid look camera-ready and filthy."],
  "Doll|E-Girl": ["Wear {underwear}. Wear {specialOrMain}. Add {legwear}, {shoes}, {hair}, {makeup}, and {overlay}, making the look cute, artificial, and extremely online."],
  "Bimbo|E-Girl": ["Wear {underwear}. Wear {specialOrMain}. Add {legwear}, {shoes}, {hair}, {makeup}, and {overlay}, turning the e-girl look pink, glossy, and dumb-slut cute."],
  "E-Girl|Goth": ["Wear {underwear}. Wear {specialOrMain}. Add {legwear}, {shoes}, {hair}, {makeup}, and {overlay}, mixing cute internet slut with dark goth styling."],
  "Emo|Goth": ["Wear {underwear}. Wear {specialOrMain}. Add {legwear}, {shoes}, {hair}, {makeup}, and {overlay}, making it dark, dramatic, and miserable in the prettiest way."],
  "Emo|Schoolgirl": ["Wear {underwear}. Wear {specialOrMain}. Add {legwear}, {shoes}, {hair}, {makeup}, and {overlay}, making the uniform look awkward, dark, and slutty."],
  "Emo|Maid": ["Wear {underwear}. Wear {specialOrMain}. Add {legwear}, {shoes}, {hair}, {makeup}, and {overlay}, making the maid look moody and pathetic."],
};

let state = loadState();
let lastSession = null;
let oracle = { outfit: [], treatment: [], activities: [] };

function uid() { return crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random()); }
function sample(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function has(list, value) { return list.includes(value); }
function uniq(arr) { return [...new Set(arr)]; }
function keyFor(prompts) { return prompts.slice().sort().join("|"); }
function titleCaseText(text) { return text.charAt(0).toUpperCase() + text.slice(1); }

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) return normalizeState(saved);
  } catch {}
  return normalizeState({ chores: defaultChores, savedSessions: [], specialWardrobe: defaultSpecialWardrobe, toys: defaultToys });
}
function normalizeState(raw) {
  return {
    chores: raw.chores?.length ? raw.chores : defaultChores,
    savedSessions: raw.savedSessions || [],
    specialWardrobe: { ...defaultSpecialWardrobe, ...(raw.specialWardrobe || {}) },
    toys: raw.toys?.length ? raw.toys : defaultToys
  };
}
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

function showView(id) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.querySelector(`#${id}`).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function makePromptButton(prompt, selected, max) {
  const active = selected.includes(prompt);
  const disabled = !active && max && selected.length >= max;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = `tag-chip ${active ? "active" : ""} ${disabled ? "disabled" : ""}`;
  btn.textContent = prompt;
  btn.setAttribute("aria-pressed", active ? "true" : "false");
  btn.addEventListener("click", () => {
    if (active) selected.splice(selected.indexOf(prompt), 1);
    else if (!max || selected.length < max) selected.push(prompt);
    renderAllPrompts();
  });
  return btn;
}

function renderPromptGrid(rootId, prompts, selected, max) {
  const root = document.querySelector(`#${rootId}`);
  root.innerHTML = "";
  prompts.forEach(prompt => root.appendChild(makePromptButton(prompt, selected, max)));
}

function renderActivityGrid() {
  const root = document.querySelector("#activityPromptGrid");
  root.innerHTML = "";
  activityGroups.forEach(group => {
    const wrap = document.createElement("section");
    wrap.className = "activity-group";
    wrap.innerHTML = `<div class="activity-group-title">${group.label}</div><div class="tag-grid"></div>`;
    const grid = wrap.querySelector(".tag-grid");
    group.items.forEach(prompt => grid.appendChild(makePromptButton(prompt, oracle.activities, null)));
    root.appendChild(wrap);
  });
}

function updateSelectionCounts() {
  const outfitCount = document.querySelector("#outfitCount");
  const treatmentCount = document.querySelector("#treatmentCount");
  const activityCount = document.querySelector("#activityCount");
  if (outfitCount) outfitCount.textContent = `${oracle.outfit.length} / 2`;
  if (treatmentCount) treatmentCount.textContent = `${oracle.treatment.length} / 2`;
  if (activityCount) activityCount.textContent = `${oracle.activities.length} selected`;
}

function renderAllPrompts() {
  renderPromptGrid("outfitPromptGrid", outfitPrompts, oracle.outfit, 2);
  renderPromptGrid("treatmentPromptGrid", treatmentPrompts, oracle.treatment, 2);
  renderActivityGrid();
  updateSelectionCounts();
}

function renderSpecialWardrobe() {
  const root = document.querySelector("#settingsList");
  if (!root) return;
  root.innerHTML = "";
  outfitPrompts.forEach(prompt => {
    const items = state.specialWardrobe[prompt] || [];
    const wrap = document.createElement("div");
    wrap.className = "setting-row vertical";
    wrap.innerHTML = `
      <div class="setting-title"><strong>${prompt}</strong><small>${items.length ? items.join(" · ") : "No special items"}</small></div>
      <form class="mini-form" data-prompt="${prompt}">
        <input type="text" placeholder="Add exact ${prompt} item" />
        <button class="secondary" type="submit">Add</button>
      </form>
      <div class="mini-tags"></div>
    `;
    const tagRoot = wrap.querySelector(".mini-tags");
    items.forEach(item => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "tag-chip small";
      chip.textContent = `× ${item}`;
      chip.addEventListener("click", () => {
        state.specialWardrobe[prompt] = (state.specialWardrobe[prompt] || []).filter(i => i !== item);
        saveState(); renderSpecialWardrobe();
      });
      tagRoot.appendChild(chip);
    });
    wrap.querySelector("form").addEventListener("submit", e => {
      e.preventDefault();
      const input = e.currentTarget.querySelector("input");
      const value = input.value.trim();
      if (!value) return;
      state.specialWardrobe[prompt] = uniq([...(state.specialWardrobe[prompt] || []), value]);
      input.value = "";
      saveState(); renderSpecialWardrobe();
    });
    root.appendChild(wrap);
  });
}

function renderToys() {
  const list = document.querySelector("#toyList");
  if (!list) return;
  list.innerHTML = "";
  state.toys.forEach(toy => {
    const item = document.createElement("li");
    item.innerHTML = `<span><strong>${toy}</strong></span><button class="secondary">Delete</button>`;
    item.querySelector("button").addEventListener("click", () => {
      state.toys = state.toys.filter(t => t !== toy);
      saveState(); renderToys();
    });
    list.appendChild(item);
  });
  if (!state.toys.length) list.innerHTML = `<li><span>No toys listed.</span></li>`;
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
      saveState(); renderChores();
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

function pool(prompt) { return promptPools[prompt] || promptPools["Casual Slut"]; }
function wardrobeItem(prompt) {
  const items = state.specialWardrobe[prompt] || [];
  return items.length && Math.random() < 0.72 ? sample(items) : "";
}
function pickFromSlot(prompts, slot) {
  const available = prompts.flatMap(p => pool(p)[slot] || []);
  return sample(available.length ? available : pool("Casual Slut")[slot]);
}
function specialOrMain(prompts) {
  const special = prompts.map(wardrobeItem).filter(Boolean);
  if (special.length >= 2) return `${special[0]} layered with ${special[1]}`;
  if (special.length === 1) return special[0];
  return pickFromSlot(prompts, "main");
}
function buildOutfit() {
  const prompts = oracle.outfit.length ? oracle.outfit : ["Casual Slut"];
  const title = prompts.join(" ");
  const special = prompts.map(wardrobeItem).filter(Boolean);
  const data = {
    underwear: pickFromSlot(prompts, "underwear"),
    specialA: special[0] || pickFromSlot([prompts[0]], "main"),
    specialB: special[1] || (prompts[1] ? pickFromSlot([prompts[1]], "main") : pickFromSlot(prompts, "overlay")),
    specialOrMain: specialOrMain(prompts),
    main: pickFromSlot(prompts, "main"),
    overlay: pickFromSlot(prompts, "overlay"),
    legwear: pickFromSlot(prompts, "legwear"),
    shoes: pickFromSlot(prompts, "shoes"),
    hair: pickFromSlot(prompts, "hair"),
    makeup: pickFromSlot(prompts, "makeup")
  };
  let template = "Wear {underwear}. Wear {specialOrMain}. Add {legwear}, {shoes}, {hair}, {makeup}, and {overlay}.";
  if (prompts.length === 2 && comboTemplates[keyFor(prompts)]) template = sample(comboTemplates[keyFor(prompts)]);
  const text = fill(template, data).replace(/\s+/g, " ");
  return { title, text };
}
function fill(template, data) {
  return template.replace(/\{(\w+)\}/g, (_, key) => data[key] || "");
}

function toneProfile() {
  const tones = oracle.treatment.length ? oracle.treatment : ["Strict"];
  const openers = [];
  if (tones.includes("Humiliating") && tones.includes("Degrading")) {
    openers.push("Pathetic little sissy slut, ", "Filthy little showpiece, ", "Embarrassing little slut, ");
  } else {
    if (tones.includes("Degrading")) openers.push("Filthy little sissy, ", "Dirty little slut, ");
    if (tones.includes("Humiliating")) openers.push("Embarrass yourself properly: ", "Make it humiliating: ");
  }
  if (tones.includes("Mean")) openers.push("No soft version: ");
  if (tones.includes("Gentle")) openers.push("Softly but clearly: ");
  if (tones.includes("Worshipful")) openers.push("Present yourself beautifully: ");
  if (tones.includes("Bimbo")) openers.push("Empty-headed and glossy, ");
  if (tones.includes("Pornstar")) openers.push("Camera-ready, ");
  if (tones.includes("Doll-like")) openers.push("Still and doll-like, ");
  if (tones.includes("Bratty")) openers.push("With too much smug confidence, ");

  const closers = [];
  if (tones.includes("Strict")) closers.push("Do it cleanly and in order.");
  if (tones.includes("Obedient")) closers.push("Do exactly what the task says.");
  if (tones.includes("Training")) closers.push("Count it like a training drill.");
  if (tones.includes("Service")) closers.push("Make yourself useful.");
  if (tones.includes("Objectifying")) closers.push("Act like decoration, not a person.");
  if (tones.includes("Pornstar")) closers.push("Make the result camera-ready.");
  if (tones.includes("Doll-like")) closers.push("Hold the presentation stiff and artificial.");
  if (tones.includes("Bimbo")) closers.push("Keep it glossy, dumb, and attention-hungry.");
  if (tones.includes("Playful")) closers.push("Make it feel like a dirty little game.");
  if (tones.includes("Spoiling")) closers.push("Make it look spoiled and overdone.");
  if (tones.includes("Romantic")) closers.push("Finish it softly and seductively.");
  if (tones.includes("Chaotic")) closers.push("Push it one step more ridiculous.");
  if (tones.includes("Embarrassing")) closers.push("Make the embarrassment obvious.");
  if (tones.includes("Nervous")) closers.push("Make it look nervous enough to be caught.");
  return { tones, opener: openers.length ? sample(openers) : "", closer: closers.length ? sample(closers) : "" };
}
function phrase(text) {
  const tone = toneProfile();
  let out = `${tone.opener}${text}`;
  if (tone.closer && Math.random() < 0.72) out = `${out} ${tone.closer}`;
  if (tone.tones.includes("Humiliating") && Math.random() < 0.45) out = out.replace(/\.$/, ", and make the shame visible.");
  if (tone.tones.includes("Degrading") && Math.random() < 0.45) out = out.replace(/\.$/, ", because that is what a proper little slut is for.");
  if (tone.tones.includes("Mean") && Math.random() < 0.35) out = out.replace(/\.$/, ", and do not pretend this is dignified.");
  return out;
}
function captionFor(kind, outfitTitle = "outfit") {
  const tones = oracle.treatment;
  const outfit = outfitTitle.toLowerCase();
  const bank = [];
  if (tones.includes("Gentle")) bank.push(`Pretty little ${outfit} moment, exactly how I wanted to look.`);
  if (tones.includes("Playful")) bank.push(`Dressed up and causing trouble as a ${outfit}.`);
  if (tones.includes("Strict")) bank.push(`Fully dressed, fully assigned, fully exposed.`);
  if (tones.includes("Mean")) bank.push(`I really dressed like this and still thought I could pretend it was normal.`);
  if (tones.includes("Humiliating")) bank.push(`Too dressed up to hide what kind of sissy slut I am.`);
  if (tones.includes("Degrading")) bank.push(`Reduced to a dressed-up little slut and posted like proof.`);
  if (tones.includes("Worshipful")) bank.push(`Admire the finished ${outfit} look.`);
  if (tones.includes("Objectifying")) bank.push(`Just an outfit, a body, and a reason to stare.`);
  if (tones.includes("Training")) bank.push(`Training looks better when it is this obvious.`);
  if (tones.includes("Service")) bank.push(`Dressed for service and finally looking useful.`);
  if (tones.includes("Spoiling")) bank.push(`Spoiled, glossy, overdressed, and loving the attention.`);
  if (tones.includes("Embarrassing")) bank.push(`This is exactly as embarrassing as it looks.`);
  if (tones.includes("Bimbo")) bank.push(`Glossy lips, empty head, and dressed for attention.`);
  if (tones.includes("Nervous")) bank.push(`Nervous, dressed up, and still wanting to be seen.`);
  if (tones.includes("Romantic")) bank.push(`Dressed up pretty and waiting to be wanted.`);
  if (tones.includes("Chaotic")) bank.push(`This outfit got out of control fast.`);
  if (tones.includes("Pornstar")) bank.push(`Camera-ready and dressed like I know what happens next.`);
  if (tones.includes("Doll-like")) bank.push(`Glossy little doll, posed and ready to be stared at.`);
  if (tones.includes("Bratty")) bank.push(`Dressed like this and still acting like I did nothing wrong.`);
  if (!bank.length) bank.push(`The finished ${outfit} look.`);
  if (kind === "confession") return sample([
    `I dressed myself like this because part of me wanted the Oracle to make it worse.`,
    `I put on the outfit, posed in it, and liked how exposed it made me feel.`,
    `I wanted to look like a sissy slut today, and this outfit proves it.`,
    sample(bank)
  ]);
  return sample(bank);
}

function pickChore() {
  return state.chores.length ? sample(state.chores) : { name: "Clean one visible surface", room: "Bedroom", duration: 10 };
}
function toyOf(names = []) {
  const preferred = state.toys.filter(t => names.some(n => t.toLowerCase().includes(n.toLowerCase())));
  if (preferred.length) return sample(preferred);
  return state.toys.length ? sample(state.toys) : sample(names.length ? names : ["toy"]);
}

function buildActivityTasks(outfit) {
  const a = oracle.activities;
  const tasks = [];
  const chore = pickChore();
  const caption = captionFor("post", outfit.title);
  const add = text => tasks.push(phrase(text));

  const hasChore = has(a, "Chores") || has(a, "Maid Service");
  const hasCleaning = has(a, "Cleaning");
  const hasPost = has(a, "Online Exposure");
  const hasWalk = has(a, "Public Walk");
  const hasPublic = has(a, "Public Exhibition");
  const hasPlug = has(a, "Plug Wearing");
  const hasAnal = has(a, "Anal Training");
  const hasOral = has(a, "Oral Training");
  const hasDildo = has(a, "Dildo Use");
  const hasVibe = has(a, "Vibrator Use");
  const hasToy = has(a, "Toy Use");

  if (has(a, "Dress-up")) add(`Show off the completed outfit with 5 poses: front view, side view, back view, kneeling pose, and one makeup-focused close-up.`);

  if (hasChore) add(`Complete ${chore.name.toLowerCase()} in the ${chore.room.toLowerCase()} for ${chore.duration} minutes.`);
  else if (hasCleaning) add(`Clean ${sample(["the bedroom floor", "the bathroom mirror", "one visible table", "the sink area", "one messy corner"])} for 15 minutes.`);

  if (hasWalk && hasPlug) add(`Go for a 10-minute walk while wearing a ${toyOf(["plug"])}.`);
  else if (hasWalk) add(`Go for a 10-minute walk with ${sample(["the heels", "the stockings", "the makeup", "the wig", "the skirt", "the dress"])} clearly visible.`);

  if (hasPublic) add(`${sample([
    "Stand near a window for 2 minutes and hold one clear pose.",
    "Step outside for 60 seconds and hold one pose.",
    "Stand in a doorway for 90 seconds and face outward.",
    "Take one public-facing photo and title it \"Too dressed up to hide.\""
  ])}`);

  if (has(a, "Pain")) add(`${sample([
    "Give yourself 20 spanks.",
    "Complete a CBT-focused pain task for 3 minutes before continuing.",
    "Wear nipple clamps for 5 minutes while holding one pose.",
    "Kneel for 5 minutes without adjusting anything.",
    "Do 10 spanks, take one photo, then do 10 more."
  ])}`);

  if (has(a, "Hypno")) add(`${sample([
    `Watch one sissy hypno video for 10 minutes. Then repeat this Oracle caption 10 times: "${captionFor("confession", outfit.title)}"`,
    `Browse sissy captions for 10 minutes. Save the 3 that hit hardest and add this note to the saved set: "${captionFor("confession", outfit.title)}"`,
    `Collect 5 sissy captions that match the session. Read each one out loud once, then repeat this final line 10 times: "${captionFor("confession", outfit.title)}"`,
    `Watch one sissy hypno video until it ends. Write this sentence afterward: "${captionFor("confession", outfit.title)}"`
  ])}`);

  if (hasAnal && hasPlug && hasDildo) add(`Do anal training in two parts: wear a ${toyOf(["plug"])} for 10 minutes, then use a ${toyOf(["dildo"])} for 5 minutes.`);
  else if (hasAnal && hasPlug) add(`Start anal training by wearing a ${toyOf(["plug"])} for 15 minutes.`);
  else if (hasAnal) add(`Complete 15 minutes of anal training.`);

  if (hasOral && hasDildo) add(`Complete oral training with a ${toyOf(["dildo"])}: 3 rounds, 1 minute each.`);
  else if (hasOral) add(`Complete oral training: 5 repeated practice rounds with controlled posture and makeup kept neat.`);

  if (hasDildo && !hasAnal && !hasOral) add(`Use a ${toyOf(["dildo"])} for 10 minutes.`);
  if (hasVibe) add(`Use a ${toyOf(["vibrator"])} for 8 minutes.`);
  if (hasToy && !hasDildo && !hasVibe && !hasPlug) add(`Use the ${toyOf()} for 10 minutes.`);

  if (has(a, "Edging")) add(`Edge 3 times, stopping before orgasm each time.`);
  if (has(a, "Denial")) add(`Complete the sexual part without orgasm, then wait 10 minutes before changing anything.`);
  if (has(a, "Orgasm Control")) add(`At the end, roll once: 1–2 denied, 3–4 ruined orgasm, 5–6 orgasm allowed.`);
  if (has(a, "Chastity")) add(`Lock chastity before starting the task chain and keep it on through every selected task.`);
  if (has(a, "Bondage")) add(`${sample([
    "Spend 10 minutes with wrists restrained.",
    "Spend 10 minutes with ankles limited.",
    "Wear a blindfold for 10 minutes during the next selected task.",
    "Wear a collar for the rest of the session.",
    "Use a gag during the next photo task."
  ])}`);

  if (has(a, "Bimbo Training")) add(`Do a bimbo training set: 3 poses, 3 dumb captions, and one repeated line: "Glossy lips, empty head, dressed for attention."`);
  if (has(a, "Sissy Training")) add(`Complete a sissy training sequence: 3 poses, 3 repeated lines, and the most sexual selected task.`);
  if (has(a, "Doll Training")) add(`Hold 3 doll poses for 60 seconds each.`);
  if (has(a, "Pet Play")) add(`${sample([
    "Spend 10 minutes in pet mode: kneel, crawl, pose, and hold still.",
    "Wear a collar and hold a pet pose for 3 minutes.",
    "Crawl across the room once, then hold one pet pose for 60 seconds.",
    `Take one pet-style photo with this caption: "${captionFor("post", outfit.title)}"`
  ])}`);

  if (has(a, "Confession")) add(`Write this confession exactly: "${captionFor("confession", outfit.title)}"`);
  if (has(a, "Captions")) add(`Use these 3 exact captions: 1. "${captionFor("post", outfit.title)}" 2. "${captionFor("post", outfit.title)}" 3. "${captionFor("post", outfit.title)}"`);

  if (has(a, "Private Photos")) add(`${sample([
    `Take one full-body photo and set it as your phone wallpaper for the rest of the session. Use this caption privately: "${caption}"`,
    `Take one full-body photo and set it as your lock screen for the rest of the session. Use this caption privately: "${caption}"`,
    `Create a private album titled "${caption}" and save 3 photos in it.`,
    `Take 4 private photos: underwear detail, full-body pose, shoes, and final pose. Save them under this title: "${caption}"`
  ])}`);
  else if (has(a, "Photo Set")) add(`Take 6 photos: front pose, back pose, underwear detail, shoes/legwear close-up, action shot, and final pose.`);

  if (has(a, "Sissy Exposure") && !hasPost) add(`Take one photo and title it "Proof I dressed like this willingly."`);
  if (hasPost) add(`Post one photo online with this exact caption: "${caption}"`);

  if (has(a, "Hookup")) {
    const msg = sample([
      `Dressed up and looking for trouble tonight.`,
      `Sissy dressed up and looking for attention.`,
      `Guess what I’m dressed for.`,
      `I’m dressed like this right now and looking for a guy who knows what to do with it.`
    ]);
    add(`Look for a hookup with the first guy you find on Grindr. Send this exact message: "${msg}"`);
  }

  if (!tasks.length) add(`Do a 20-minute session: show off the full look, take one photo, write this caption exactly: "${captionFor("post", outfit.title)}", and hold a final pose.`);
  return combineTasks(tasks, a);
}

function combineTasks(tasks, activities) {
  const max = activities.length >= 6 ? 6 : 5;
  return tasks.slice(0, max).map((text, index) => ({ label: `Task ${index + 1}`, text }));
}
function buildTitle(outfit) {
  const tone = oracle.treatment[0] || "Oracle";
  const activity = oracle.activities[0] || "Session";
  return `${tone} ${outfit.title} ${activity}`;
}
function generateSession() {
  const outfit = buildOutfit();
  const sections = [{ label: "Outfit", text: outfit.text }, ...buildActivityTasks(outfit)];
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
  saveState(); renderSavedSessions();
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
    saveState(); renderChores();
  });
  const toyForm = document.querySelector("#toyForm");
  if (toyForm) toyForm.addEventListener("submit", event => {
    event.preventDefault();
    const input = document.querySelector("#toyName");
    const value = input.value.trim();
    if (!value) return;
    state.toys = uniq([...state.toys, value]);
    input.value = "";
    saveState(); renderToys();
  });
}
function registerServiceWorker() {
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(console.warn);
}
function init() {
  renderAllPrompts(); renderSpecialWardrobe(); renderToys(); renderChores(); renderSavedSessions(); bindEvents(); registerServiceWorker();
}
init();
