import fs from 'fs';

export type ExerciseType = 'gap' | 'order' | 'type' | 'info';

export interface Exercise {
  id: string;
  type: ExerciseType;
  sentence: string;
  answer: string | string[];
  hint?: string;
  englishTranslation?: string;
  orderTokens?: string[];
  infoText?: string;
}

export interface TaskSet {
  id: string;
  title: string;
  exercises: Exercise[];
}

export interface Subunit {
  id: string;
  title: string;
  explanation?: string;
  taskSets: TaskSet[];
}

export interface Unit {
  id: string;
  title: string;
  explanation: string;
  subunits: Subunit[];
}

function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

function makeGapSets(prefix: string, titlePrefix: string, items: any[], setsCount: number = 3, customInfoText?: string) {
    let sets: TaskSet[] = [];
    
    // Create 'setsCount' distinct sets
    for(let i=0; i<setsCount; i++) {
        let pool = shuffle([...items]); 
        
        // Pad the pool if there are fewer than 8 items by reusing items (but modifying ID so React doesn't complain of duplicate keys)
        // To avoid repeating exactly the same sentence in the SAME set, we only pad if items.length < 8.
        let padIndex = 0;
        while (pool.length < 8) {
            pool.push({...pool[padIndex]}); // clone
            padIndex++;
        }
        
        let exercises: Exercise[] = [];
        exercises.push({
            id: `${prefix}-s${i+1}-info`,
            type: 'info',
            sentence: 'Task Instructions',
            infoText: customInfoText || "Read the sentence and figure out the missing word. Think about the rules you've learned in this unit to solve the tasks.",
            answer: ''
        });
        
        for(let j=0; j<8; j++) {
            let item = pool[j];
            exercises.push({
                id: `${prefix}-s${i+1}-${j+1}`,
                type: 'gap',
                sentence: item.s,
                answer: item.a,
                hint: item.h || ""
            });
        }
        sets.push({
            id: `${prefix}-s${i+1}`,
            title: titlePrefix === "Set" ? `Set ${i+1}` : `${titlePrefix} ${i+1}`,
            exercises
        });
    }
    return sets;
}

function makeOrderSets(prefix: string, titlePrefix: string, items: any[], setsCount: number = 3, customInfoText?: string) {
    let sets: TaskSet[] = [];
    
    for(let i=0; i<setsCount; i++) {
        let pool = shuffle([...items]); 
        
        let padIndex = 0;
        while (pool.length < 8) {
            pool.push({...pool[padIndex]});
            padIndex++;
        }
        
        let exercises: Exercise[] = [];
        exercises.push({
            id: `${prefix}-s${i+1}-info`,
            type: 'info',
            sentence: 'Task Instructions',
            infoText: customInfoText || "Arrange the words in the correct order to form a valid German sentence. Pay attention to word order rules (like verb position) and verb forms you've learned.",
            answer: ''
        });
        
        for(let j=0; j<8; j++) {
            let item = pool[j];
            
            let originalTokens = [...(item.displayTokens || item.tokens)];
            let orderTokens: string[] = [];
            for (let t of originalTokens) {
                if (t.length > 1 && /[.!?]$/.test(t)) {
                    orderTokens.push(t.slice(0, -1));
                    orderTokens.push(t.slice(-1));
                } else {
                    orderTokens.push(t);
                }
            }
            
            exercises.push({
                id: `${prefix}-s${i+1}-${j+1}`,
                type: 'order',
                sentence: item.eng,
                answer: item.answer || item.tokens.join(" "),
                orderTokens: shuffle(orderTokens),
                hint: item.h || ""
            });
        }
        sets.push({
            id: `${prefix}-s${i+1}`,
            title: titlePrefix === "Set" ? `Set ${i+1}` : `${titlePrefix} ${i+1}`,
            exercises
        });
    }
    return sets;
}

function makeTypeSets(prefix: string, titlePrefix: string, items: any[], setsCount: number = 3, customInfoText?: string) {
    let sets: TaskSet[] = [];
    
    for(let i=0; i<setsCount; i++) {
        let pool = shuffle([...items]); 
        
        let padIndex = 0;
        while (pool.length < 8) {
            pool.push({...pool[padIndex]});
            padIndex++;
        }
        
        let exercises: Exercise[] = [];
        exercises.push({
            id: `${prefix}-s${i+1}-info`,
            type: 'info',
            sentence: 'Task Instructions',
            infoText: customInfoText || 'Type the correct German word or phrase for the given English translation or context to solve the tasks.',
            answer: ''
        });
        
        for(let j=0; j<8; j++) {
            let item = pool[j];
            exercises.push({
                id: `${prefix}-s${i+1}-${j+1}`,
                type: 'type',
                sentence: item.s,
                answer: item.a,
                hint: item.h || ""
            });
        }
        sets.push({
            id: `${prefix}-s${i+1}`,
            title: titlePrefix === "Set" ? `Set ${i+1}` : `${titlePrefix} ${i+1}`,
            exercises
        });
    }
    return sets;
}

let units: Unit[] = [];

// UNIT 1: Personal Pronouns
units.push({
    id: "unit-1",
    title: "Unit 1: Personal Pronouns",
    explanation: "Personal pronouns replace nouns. Singular: ich (I), du (you), er (he), sie (she), es (it). Plural: wir (we), ihr (you all), sie (they), Sie (you formal).",
    subunits: [
        {
            id: "u1-su1",
            title: "Personal Pronouns",
            taskSets: makeGapSets("u1-pron", "Set", [
                {s: "___ (I) bin zwölf.", a: "Ich"},
                {s: "___ (he) heißt Tom.", a: "Er"},
                {s: "___ (she) ist neu hier.", a: "Sie"},
                {s: "___ (you, sing.) bist groß.", a: "Du"},
                {s: "___ (it) ist ein Baby.", a: "Es"},
                {s: "___ (we) spielen.", a: "Wir"},
                {s: "___ (you all) seid cool.", a: "Ihr"},
                {s: "___ (they) singen gut.", a: "Sie"},
                {s: "___ (I) mag Pizza.", a: "Ich"},
                {s: "___ (you formal) haben Zeit.", a: "Sie"}
            ], 3)
        }
    ]
});

// UNIT 2: Basic verbs (sein, haben, mögen, müssen)
units.push({
    id: "unit-2",
    title: "Unit 2: Basic verbs",
    explanation: "These verbs are highly irregular: 'sein' (to be), 'haben' (to have), 'mögen' (to like), 'müssen' (have to/must).",
    subunits: [
        {
            id: "u2-su1",
            title: "sein (to be)",
            taskSets: makeGapSets("u2-sein", "Set", [
                {s: "Ich ___ (am) glücklich.", a: "bin", h: "I am"},
                {s: "Du ___ (are) mein Freund.", a: "bist", h: "you are"},
                {s: "Er ___ (is) groß.", a: "ist", h: "he is"},
                {s: "Sie ___ (she is) klug.", a: "ist", h: "she is"},
                {s: "Es ___ (is) neu.", a: "ist", h: "it is"},
                {s: "Wir ___ (are) hier.", a: "sind", h: "we are"},
                {s: "Ihr ___ (are) lustig.", a: "seid", h: "you all are"},
                {s: "Sie ___ (they are) müde.", a: "sind", h: "they are"}
            ], 3, "Revise 'sein': ich bin, du bist, er ist, sie ist, es ist, wir sind, ihr seid, sie/Sie sind")
        },
        {
            id: "u2-su2",
            title: "haben (to have)",
            taskSets: makeGapSets("u2-haben", "Set", [
                {s: "Ich ___ (have) Zeit.", a: "habe"},
                {s: "Du ___ (have) ein Buch.", a: "hast"},
                {s: "Er ___ (has) Hunger.", a: "hat"},
                {s: "Sie ___ (she has) Durst.", a: "hat"},
                {s: "Es ___ (has) Beine.", a: "hat"},
                {s: "Wir ___ (have) Glück.", a: "haben"},
                {s: "Ihr ___ (have) Spaß.", a: "habt"},
                {s: "Sie ___ (they have) Geld.", a: "haben"}
            ], 3, "Revise 'haben': ich habe, du hast, er hat, sie hat, es hat, wir haben, ihr habt, sie/Sie haben")
        },
        {
            id: "u2-su3",
            title: "mögen (to like)",
            taskSets: makeGapSets("u2-mogen", "Set", [
                {s: "Ich ___ (like) Katzen.", a: "mag"},
                {s: "Du ___ (like) Hunde.", a: "magst"},
                {s: "Er ___ (likes) Sport.", a: "mag"},
                {s: "Sie ___ (she likes) Musik.", a: "mag"},
                {s: "Wir ___ (like) Pizza.", a: "mögen"},
                {s: "Ihr ___ (like) Eis.", a: "mögt"},
                {s: "Sie ___ (they like) Autos.", a: "mögen"}
            ], 3, "Revise 'mögen': ich mag, du magst, er mag, sie mag, es mag, wir mögen, ihr mögt, sie/Sie mögen")
        },
        {
            id: "u2-su4",
            title: "müssen (must/have to)",
            taskSets: makeGapSets("u2-mussen", "Set", [
                {s: "Ich ___ (must) gehen.", a: "muss"},
                {s: "Du ___ (must) lernen.", a: "musst"},
                {s: "Er ___ (must) schlafen.", a: "muss"},
                {s: "Sie ___ (she must) arbeiten.", a: "muss"},
                {s: "Es ___ (must) sein.", a: "muss"},
                {s: "Wir ___ (must) essen.", a: "müssen"},
                {s: "Ihr ___ (must) helfen.", a: "müsst"},
                {s: "Sie ___ (they must) kommen.", a: "müssen"}
            ], 3, "Revise 'müssen': ich muss, du musst, er muss, sie muss, es muss, wir müssen, ihr müsst, sie/Sie müssen")
        }
    ]
});

// UNIT 3: Present tense - Regular
units.push({
    id: "unit-3",
    title: "Unit 3: Present tense - Regular",
    explanation: "Regular verbs follow standard endings. Subunits include standard, ending in t/d, eln, ern, s/z/ß.",
    subunits: [
        {
            id: "u3-su1",
            title: "Regular verbs",
            taskSets: makeGapSets("u3-reg", "Set", [
                {s: "Ich ___ (spielen) Fußball.", a: "spiele"},
                {s: "Du ___ (machen) Sport.", a: "machst"},
                {s: "Er ___ (suchen) das Buch.", a: "sucht"},
                {s: "Wir ___ (kaufen) Äpfel.", a: "kaufen"},
                {s: "Ihr ___ (lernen) Deutsch.", a: "lernt"},
                {s: "Sie ___ (singen - they) Lieder.", a: "singen"}
            ], 3, "Revise regular endings: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en")
        },
        {
            id: "u3-su2",
            title: "Verbs ending on t/d",
            taskSets: makeGapSets("u3-td", "Set", [
                {s: "Ich ___ (reiten).", a: "reite"},
                {s: "Du ___ (reiten).", a: "reitest"},
                {s: "Er ___ (finden) den Weg.", a: "findet"},
                {s: "Wir ___ (finden) es gut.", a: "finden"},
                {s: "Ihr ___ (arbeiten) viel.", a: "arbeitet"},
                {s: "Sie ___ (arbeiten - they) hier.", a: "arbeiten"}
            ], 3, "Revise t/d verbs: they insert an extra 'e' before -st and -t endings for easier pronunciation (e.g. du findest, er arbeitet).")
        },
        {
            id: "u3-su3",
            title: "Verbs ending in eln",
            taskSets: makeGapSets("u3-eln", "Set", [
                {s: "Ich ___ (sammeln) Karten.", a: "sammle"},
                {s: "Du ___ (sammeln) Steine.", a: "sammelst"},
                {s: "Er ___ (basteln) gern.", a: "bastelt"},
                {s: "Wir ___ (basteln).", a: "basteln"},
                {s: "Ihr ___ (segeln).", a: "segelt"},
                {s: "Sie ___ (segeln - they) im See.", a: "segeln"},
                {s: "Ich ___ (segeln) am Sonntag.", a: "segle"}
            ], 3, "Revise eln verbs: the 'ich' form drops the 'e' in the stem (ich sammle).")
        },
        {
            id: "u3-su4",
            title: "Verbs ending in ern",
            taskSets: makeGapSets("u3-ern", "Set", [
                {s: "Ich ___ (wandern) gern.", a: "wandere"},
                {s: "Du ___ (wandern) im Wald.", a: "wanderst"},
                {s: "Er ___ (rudern) schnell.", a: "rudert"},
                {s: "Wir ___ (klettern).", a: "klettern"},
                {s: "Ihr ___ (klettern).", a: "klettert"},
                {s: "Sie ___ (rudern - they) auf dem See.", a: "rudern"}
            ], 3, "Revise ern verbs: endings are regular, but the 'wir' and 'sie/Sie' endings drop the 'e' (we wandern, not wanderen).")
        },
        {
            id: "u3-su5",
            title: "Verbs ending in s, z, ß",
            taskSets: makeGapSets("u3-szss", "Set", [
                {s: "Ich ___ (heißen) Tom.", a: "heiße"},
                {s: "Wie ___ (heißen) du?", a: "heißt"},
                {s: "Er ___ (heißen) Max.", a: "heißt"},
                {s: "Ich ___ (tanzen) gern.", a: "tanze"},
                {s: "Du ___ (tanzen) gut.", a: "tanzt"},
                {s: "Er ___ (tanzen).", a: "tanzt"},
                {s: "Wir ___ (tanzen).", a: "tanzen"}
            ], 3, "Revise s/z/ß verbs: the 'du' form only adds -t instead of -st (du tanzt, du heißt).")
        }
    ]
});

// UNIT 4: Irregular verbs
units.push({
    id: "unit-4",
    title: "Unit 4: Irregular verbs (present tense)",
    explanation: "Irregular verbs in present tense change a->ä or e->i/ie.",
    subunits: [
        {
            id: "u4-su1",
            title: "Change a to ä",
            taskSets: makeGapSets("u4-a", "Set", [
                {s: "Ich ___ (fahren) Rad, aber du ___ (fahren) Bus.", a: ["fahre", "fährst"]},
                {s: "Wir ___ (fahren) Zug, aber er ___ (fahren) Auto.", a: ["fahren", "fährt"]},
                {s: "Ich ___ (fahren) Roller, aber sie ___ (fahren - she) Motorrad.", a: ["fahre", "fährt"]},
                {s: "Ich ___ (schlafen) lange, aber du ___ (schlafen) kurz.", a: ["schlafe", "schläfst"]},
                {s: "Wir ___ (schlafen) im Bett, aber sie ___ (schlafen - she) auf dem Sofa.", a: ["schlafen", "schläft"]},
                {s: "Ich ___ (tragen) ein T-Shirt, aber er ___ (tragen) eine Jacke.", a: ["trage", "trägt"]},
                {s: "Ihr ___ (tragen) Schuhe, aber du ___ (tragen) Stiefel.", a: ["tragt", "trägst"]},
                {s: "Ich ___ (laufen) schnell, aber er ___ (laufen) langsam.", a: ["laufe", "läuft"]},
                {s: "Wir ___ (fallen) oft, aber das Kind ___ (fallen) nicht.", a: ["fallen", "fällt"]},
                {s: "Ich ___ (halten) das Buch, aber sie ___ (halten - she) die Tasche.", a: ["halte", "hält"]}
            ], 3, "Revise a to ä verbs: 'du' and 'er/sie/es' forms add an umlaut (e.g. du fährst, er fährt).")
        },
        {
            id: "u4-su2",
            title: "Change e to i/ie",
            taskSets: makeGapSets("u4-e", "Set", [
                {s: "Ich ___ (sprechen) Englisch, aber du ___ (sprechen) Deutsch.", a: ["spreche", "sprichst"]},
                {s: "Wir ___ (sehen) das, aber er ___ (sehen) nichts.", a: ["sehen", "sieht"]},
                {s: "Ich ___ (treffen) Freunde, aber sie ___ (treffen - she) den Lehrer.", a: ["treffe", "trifft"]},
                {s: "Ihr ___ (geben) Geld, aber er ___ (geben) ein Buch.", a: ["gebt", "gibt"]},
                {s: "Ich ___ (lesen) ein Buch, aber du ___ (lesen) eine Zeitung.", a: ["lese", "liest"]},
                {s: "Wir ___ (nehmen) Wasser, aber du ___ (nehmen) Cola.", a: ["nehmen", "nimmst"]},
                {s: "Ich ___ (essen) Pizza, aber er ___ (essen) Salat.", a: ["esse", "isst"]}
            ], 3, "Revise e to i/ie verbs: 'du' and 'er/sie/es' forms change the vowel (e.g. du sprichst, er sieht).")
        },
        {
            id: "u4-su3",
            title: "Mixed irregular verbs",
            taskSets: makeGapSets("u4-mix", "Set", [
                {s: "Wir ___ (sehen) einen Vogel, aber er ___ (sehen) nichts.", a: ["sehen", "sieht"]},
                {s: "Ihr ___ (schlafen) kurz, aber du ___ (schlafen) lange.", a: ["schlaft", "schläfst"]},
                {s: "Wir ___ (geben) Geld, aber sie ___ (geben - she) das Buch.", a: ["geben", "gibt"]},
                {s: "Wir ___ (fahren) Bus, aber er ___ (fahren) das Auto.", a: ["fahren", "fährt"]},
                {s: "Ihr ___ (lesen) nicht, aber du ___ (lesen) gern.", a: ["lest", "liest"]},
                {s: "Wir ___ (laufen) langsam, aber er ___ (laufen) schnell.", a: ["laufen", "läuft"]}
            ], 3, "Remember: irregular verbs only alter their stem vowel in the 'du' and 'er/sie/es' forms. Treat others regularly.")
        }
    ]
});

// UNIT 5: Separable verbs
units.push({
    id: "unit-5",
    title: "Unit 5: Separable verbs",
    explanation: "Prefix separates and goes to the end of the sentence.",
    subunits: [
        {
            id: "u5-su1",
            title: "Separable verbs (Word Order)",
            taskSets: [
                ...makeOrderSets("u5-order", "Set", [
                    {eng: "I wake up early.", tokens: ["Ich", "stehe", "früh", "auf."]},
                    {eng: "He watches TV today.", tokens: ["Er", "sieht", "heute", "fern."]},
                    {eng: "We shop in the supermarket.", tokens: ["Wir", "kaufen", "im", "Supermarkt", "ein."]},
                    {eng: "She puts on the jacket.", tokens: ["Sie", "zieht", "die", "Jacke", "an."]},
                    {eng: "They take off the shoes.", tokens: ["Sie", "ziehen", "die", "Schuhe", "aus."]},
                    {eng: "I pack my bag.", tokens: ["Ich", "packe", "meine", "Tasche", "ein."]},
                    {eng: "I have my book with me.", tokens: ["Ich", "habe", "mein", "Buch", "dabei."]},
                    {eng: "She wears a jacket.", tokens: ["Sie", "hat", "eine", "Jacke", "an."]},
                    {eng: "You all borrow a book.", tokens: ["Ihr", "leiht", "ein", "Buch", "aus."]}
                ], 3)
            ]
        }
    ]
});

// UNIT 6: Perfect tense
units.push({
    id: "unit-6",
    title: "Unit 6: Perfect tense",
    explanation: "Perfect tense with regular, irregular, and separable verbs. We use 'haben' exclusively for now to practice the Partizip II forms.",
    subunits: [
        {
            id: "u6-su1",
            title: "Regular perfect tense - ge..t",
            taskSets: [
                ...makeTypeSets("u6-reg-t1", "Task 1: Type Participle", [
                    {s: "spielen -> ?", a: "gespielt"},
                    {s: "machen -> ?", a: "gemacht"},
                    {s: "kaufen -> ?", a: "gekauft"},
                    {s: "hören -> ?", a: "gehört"},
                    {s: "suchen -> ?", a: "gesucht"},
                    {s: "packen -> ?", a: "gepackt"},
                    {s: "wohnen -> ?", a: "gewohnt"},
                    {s: "schmecken -> ?", a: "geschmeckt"}
                ], 1),
                ...makeGapSets("u6-reg-t2", "Task 2: Gap Fill", [
                    {s: "Ich habe Tennis ___ (spielen).", a: "gespielt"},
                    {s: "Er hat ein Foto ___ (machen).", a: "gemacht"},
                    {s: "Wir haben ein Buch ___ (kaufen).", a: "gekauft"},
                    {s: "Du hast Musik ___ (hören).", a: "gehört"},
                    {s: "Sie hat die Brille ___ (suchen).", a: "gesucht"}
                ], 1),
                ...makeOrderSets("u6-reg-t3", "Task 3: Word Order", [
                    {eng: "I have played tennis.", tokens: ["Ich", "habe", "Tennis", "gespielt."]},
                    {eng: "He has searched for a dog.", tokens: ["Er", "hat", "einen", "Hund", "gesucht."]},
                    {eng: "We have bought a book.", tokens: ["Wir", "haben", "ein", "Buch", "gekauft."]},
                    {eng: "She has heard music.", tokens: ["Sie", "hat", "Musik", "gehört."]}
                ], 1),
                ...makeOrderSets("u6-reg-t4", "Task 4: Word Order - form change", [
                    {eng: "You must change the verb form! (I have played...)", displayTokens: ["Ich", "habe", "Tennis", "(spielen)"], tokens: ["Ich", "habe", "Tennis", "gespielt."], answer: "Ich habe Tennis gespielt."},
                    {eng: "You must change the verb form! (He has searched...)", displayTokens: ["Er", "hat", "einen", "Hund", "(suchen)"], tokens: ["Er", "hat", "einen", "Hund", "gesucht."], answer: "Er hat einen Hund gesucht."},
                    {eng: "You must change the verb form! (We have bought...)", displayTokens: ["Wir", "haben", "ein", "Buch", "(kaufen)"], tokens: ["Wir", "haben", "ein", "Buch", "gekauft."], answer: "Wir haben ein Buch gekauft."}
                ], 1)
            ]
        },
        {
            id: "u6-su2",
            title: "Irregular perfect tense",
            taskSets: [
                ...makeTypeSets("u6-irr-t1", "Task 1: Type Participle", [
                    {s: "sehen -> ?", a: "gesehen"},
                    {s: "lesen -> ?", a: "gelesen"},
                    {s: "essen -> ?", a: "gegessen"},
                    {s: "trinken -> ?", a: "getrunken"},
                    {s: "finden -> ?", a: "gefunden"},
                    {s: "singen -> ?", a: "gesungen"},
                    {s: "treffen -> ?", a: "getroffen"},
                    {s: "nehmen -> ?", a: "genommen"}
                ], 1),
                ...makeGapSets("u6-irr-t2", "Task 2: Gap Fill", [
                    {s: "Ich habe ein Buch ___ (lesen).", a: "gelesen"},
                    {s: "Wir haben Wasser ___ (trinken).", a: "getrunken"},
                    {s: "Er hat Pizza ___ (essen).", a: "gegessen"},
                    {s: "Sie hat den Schlüssel ___ (finden).", a: "gefunden"}
                ], 1),
                ...makeOrderSets("u6-irr-t3", "Task 3: Word Order", [
                    {eng: "I have read a book.", tokens: ["Ich", "habe", "ein", "Buch", "gelesen."]},
                    {eng: "We have seen a film.", tokens: ["Wir", "haben", "einen", "Film", "gesehen."]},
                    {eng: "He has eaten pizza.", tokens: ["Er", "hat", "Pizza", "gegessen."]},
                    {eng: "She has drunk water.", tokens: ["Sie", "hat", "Wasser", "getrunken."]}
                ], 1),
                ...makeOrderSets("u6-irr-t4", "Task 4: Word Order - form change", [
                    {eng: "Make the perfect tense sentence! (I have read a book.)", displayTokens: ["Ich", "habe", "ein", "Buch", "(lesen)"], tokens: ["Ich", "habe", "ein", "Buch", "gelesen."], answer: "Ich habe ein Buch gelesen."},
                    {eng: "Make the perfect tense sentence! (He has eaten pizza.)", displayTokens: ["Er", "hat", "Pizza", "(essen)"], tokens: ["Er", "hat", "Pizza", "gegessen."], answer: "Er hat Pizza gegessen."},
                    {eng: "Make the perfect tense sentence! (She has drunk water.)", displayTokens: ["Sie", "hat", "Wasser", "(trinken)"], tokens: ["Sie", "hat", "Wasser", "getrunken."], answer: "Sie hat Wasser getrunken."}
                ], 1)
            ]
        },
        {
            id: "u6-su3",
            title: "Separable verbs",
            taskSets: [
                ...makeTypeSets("u6-sep-t1", "Task 1: Type Participle", [
                    {s: "einkaufen -> ?", a: "eingekauft"},
                    {s: "anziehen -> ?", a: "angezogen"},
                    {s: "ausziehen -> ?", a: "ausgezogen"},
                    {s: "fernsehen -> ?", a: "ferngesehen"},
                    {s: "ausleihen -> ?", a: "ausgeliehen"}
                ], 1),
                ...makeGapSets("u6-sep-t2", "Task 2: Gap Fill", [
                    {s: "Ich habe im Supermarkt ___ (einkaufen).", a: "eingekauft"},
                    {s: "Sie hat den Kuli ___ (dabeihaben).", a: "dabeigehabt"},
                    {s: "Wir haben gestern ___ (fernsehen).", a: "ferngesehen"},
                    {s: "Du hast die Schuhe ___ (anziehen).", a: "angezogen"}
                ], 1),
                ...makeOrderSets("u6-sep-t3", "Task 3: Word Order", [
                    {eng: "I have shopped in the supermarket.", tokens: ["Ich", "habe", "im", "Supermarkt", "eingekauft."]},
                    {eng: "He has watched TV.", tokens: ["Er", "hat", "ferngesehen."]},
                    {eng: "We have put on the shoes.", tokens: ["Wir", "haben", "die", "Schuhe", "angezogen."]},
                    {eng: "She has taken off the jacket.", tokens: ["Sie", "hat", "die", "Jacke", "ausgezogen."]}
                ], 1),
                ...makeOrderSets("u6-sep-t4", "Task 4: Word Order - form change", [
                    {eng: "Make the perfect tense! (I shopped...)", displayTokens: ["Ich", "habe", "im", "Supermarkt", "(einkaufen)"], tokens: ["Ich", "habe", "im", "Supermarkt", "eingekauft."], answer: "Ich habe im Supermarkt eingekauft."},
                    {eng: "Make the perfect tense! (He watched tv.)", displayTokens: ["Er", "hat", "(fernsehen)"], tokens: ["Er", "hat", "ferngesehen."], answer: "Er hat ferngesehen."}
                ], 1)
            ]
        }
    ]
});

// UNIT 7: Nominative and accusative
units.push({
    id: "unit-7",
    title: "Unit 7: Nominative and accusative",
    explanation: "Nominative (Subject/der-words)\nThe: der, die, das\na: ein, eine, ein\n\nAccusative (Direct Object/den-words)\nThe: den, die, das\na: einen, eine, ein",
    subunits: [
        {
            id: "u7-su1",
            title: "Nominative definite and indefinite",
            taskSets: makeGapSets("u7-nom", "Set", [
                {s: "___ (The - m) Vater ist groß.", a: "Der"},
                {s: "___ (The - f) Schwester ist nett.", a: "Die"},
                {s: "___ (The - n) Buch ist gut.", a: "Das"},
                {s: "___ (A - m) Hund bellt.", a: "Ein"},
                {s: "___ (A - f) Katze schläft.", a: "Eine"},
                {s: "___ (A - n) Kind lacht.", a: "Ein"},
                {s: "___ (The - pl) Lehrer sind hier.", a: "Die"}
            ], 3, "Decide if it is 'der', 'die', 'das' or 'ein', 'eine', 'ein' in the Nominative case.")
        },
        {
            id: "u7-su2",
            title: "Accusative definite and indefinite",
            taskSets: makeGapSets("u7-acc", "Set", [
                {s: "Ich habe ___ (the - m) Hund.", a: "den"},
                {s: "Ich kaufe ___ (the - f) Pizza.", a: "die"},
                {s: "Wir lesen ___ (the - n) Buch.", a: "das"},
                {s: "Er isst ___ (a - m) Apfel.", a: "einen"},
                {s: "Sie sucht ___ (a - f) Tasche.", a: "eine"},
                {s: "Du kaufst ___ (a - n) Eis.", a: "ein"},
                {s: "Ich trinke ___ (a - m) Saft.", a: "einen"}
            ], 3, "Decide if it is 'den', 'die', 'das' or 'einen', 'eine', 'ein' in the Accusative case.")
        },
        {
            id: "u7-su3",
            title: "Mixture definite",
            taskSets: makeGapSets("u7-mixdef", "Set", [
                {s: "___ (The - f) Tante sieht den Vater.", a: "Die"},
                {s: "Die Tante sieht ___ (the - m) Vater.", a: "den"},
                {s: "Der Lehrer liest ___ (the - n) Buch.", a: "das"},
                {s: "___ (The) Kind sucht den Ball.", a: "Das"},
                {s: "Wir essen ___ (the) Banane.", a: "die"},
                {s: "Der Onkel kauft ___ (the) Jacke.", a: "die"},
                {s: "Ich mag ___ (the) Hund.", a: "den"}
            ], 3, "Decide if it is 'der', 'die', 'das' (Nominative) or 'den', 'die', 'das' (Accusative).")
        },
        {
            id: "u7-su4",
            title: "Mixture indefinite",
            taskSets: makeGapSets("u7-mixindef", "Set", [
                {s: "Ich habe ___ (a - m) Bruder.", a: "einen"},
                {s: "___ (A - f) Schwester ist hier.", a: "Eine"},
                {s: "Er isst ___ (a - n) Eis.", a: "ein"},
                {s: "Da ist ___ (a - m) Hund.", a: "ein"},
                {s: "Wir nehmen ___ (a - f) Cola.", a: "eine"},
                {s: "___ (A - m) Lehrer kommt.", a: "Ein"},
                {s: "Ich sehe ___ (a - m) Vogel.", a: "einen"}
            ], 3, "Decide if it is 'ein', 'eine', 'ein' (Nominative) or 'einen', 'eine', 'ein' (Accusative).")
        },
        {
            id: "u7-su5",
            title: "Possessive pronouns",
            explanation: "All forms: mein, dein, sein, ihr, unser, euer. Remember Accusative adds -en to masculines!",
            taskSets: makeGapSets("u7-poss", "Set", [
                {s: "Das ist ___ (my - m, nom) Vater.", a: "mein"},
                {s: "Das ist ___ (my - f, nom) Mutter.", a: "meine"},
                {s: "Ich liebe ___ (my - m, acc) Bruder.", a: "meinen"},
                {s: "Hast du ___ (your - m, acc) Hund?", a: "deinen"},
                {s: "Wo ist ___ (your - f, nom) Schwester?", a: "deine"},
                {s: "Er sucht ___ (his - m, acc) Onkel.", a: "seinen"},
                {s: "Sie mag ___ (her - m, acc) Füller.", a: "ihren"},
                {s: "Wir finden ___ (our - f, acc) Katze nicht.", a: "unsere"}
            ], 3)
        },
        {
            id: "u7-su6",
            title: "Mixture of all",
            taskSets: makeGapSets("u7-mixall", "Set", [
                {s: "Der Hund beißt ___ (the - m) Lehrer.", a: "den"},
                {s: "___ (My - f) Tante wohnt hier.", a: "Meine"},
                {s: "Ich nehme ___ (a - n) Wasser.", a: "ein"},
                {s: "Siehst du ___ (my - m) Ball?", a: "meinen"},
                {s: "___ (A - m) Junge spielt.", a: "Ein"},
                {s: "Hast du ___ (your - f) Jacke?", a: "deine"},
                {s: "___ (The - n) Mädchen lacht.", a: "Das"}
            ], 3)
        }
    ]
});

// UNIT 8: Adverbs
units.push({
    id: "unit-8",
    title: "Unit 8: Adverbs",
    explanation: "Adverbs tell us more about the verb.\nAdverbs of preference: gern (gladly), lieber (prefer, like more), am liebsten (most of all).\n\nAdverbs of frequency: immer (always), oft (often), regelmäßig (regularly), manchmal (sometimes), selten (rarely), kaum (hardly), nie (never).\n\nTime-Manner-Place (TeKaMoLo): Temporal (When?), Kausal (Why?), Modal (How?), Lokal (Where?). Always in this order!",
    subunits: [
        {
            id: "u8-su1",
            title: "Adverbs of preference",
            taskSets: makeGapSets("u8-pref", "Set", [
                {s: "Ich spiele ___ (gladly) Fußball.", a: "gern"},
                {s: "Ich koche ___ (gladly), aber er kocht nicht ___ (gladly).", a: ["gern", "gern"]},
                {s: "Wir schwimmen ___ (rather/prefer to) als laufen.", a: "lieber"},
                {s: "Er lacht ___ (rather/prefer to) als weinen.", a: "lieber"},
                {s: "Am ___ (most of all) spiele ich Tennis.", a: "liebsten"},
                {s: "Am ___ (most of all) esse ich Pizza.", a: "liebsten"},
                {s: "Sie liest ___ (gladly).", a: "gern"},
                {s: "Ich arbeite ___ (rather) zu Hause.", a: "lieber"}
            ], 3)
        },
        {
            id: "u8-su1-rewrite",
            title: "Rewrite with gern",
            taskSets: makeTypeSets("u8-rewrite", "Set", [
                {s: "Rewrite using 'gern': Ich mag Fußball spielen.", a: "Ich spiele gern Fußball"},
                {s: "Rewrite using 'gern': Du magst schwimmen.", a: "Du schwimmst gern"},
                {s: "Rewrite using 'gern': Er mag lesen.", a: "Er liest gern"},
                {s: "Rewrite using 'gern': Wir mögen kochen.", a: "Wir kochen gern"},
                {s: "Rewrite using 'gern': Ihr mögt tanzen.", a: "Ihr tanzt gern"},
                {s: "Rewrite using 'gern': Sie mögen essen.", a: "Sie essen gern"},
                {s: "Rewrite using 'gern': Ich mag singen.", a: "Ich singe gern"},
                {s: "Rewrite using 'gern': Er mag arbeiten.", a: "Er arbeitet gern"}
            ], 3, "Rewrite sentences starting with 'Ich mag' to using the verb + 'gern'. Remove 'mag/mögen' and put the main verb in second position.")
        },
        {
            id: "u8-su2",
            title: "Adverbs of frequency",
            taskSets: [
                ...makeGapSets("u8-freq-t1", "Task 1: Gap Fill", [
                    {s: "Ich spiele ___ (always) Fußball.", a: "immer"},
                    {s: "Wir gehen ___ (often) ins Kino.", a: "oft"},
                    {s: "Er kocht ___ (sometimes) Nudeln.", a: "manchmal"},
                    {s: "Sie liest ___ (regularly) Bücher.", a: "regelmäßig"},
                    {s: "Du bist ___ (rarely) müde.", a: "selten"},
                    {s: "Ich esse ___ (hardly) Chips.", a: "kaum"},
                    {s: "Er schwimmt ___ (never).", a: "nie"}
                ], 1),
                ...makeOrderSets("u8-freq-t2", "Task 2: Word Order", [
                    {eng: "I always play football.", tokens: ["Ich", "spiele", "immer", "Fußball."]},
                    {eng: "We often go to the cinema.", tokens: ["Wir", "gehen", "oft", "ins", "Kino."]},
                    {eng: "He sometimes cooks pasta.", tokens: ["Er", "kocht", "manchmal", "Nudeln."]},
                    {eng: "She regularly reads books.", tokens: ["Sie", "liest", "regelmäßig", "Bücher."]},
                    {eng: "You are rarely tired.", tokens: ["Du", "bist", "selten", "müde."]},
                    {eng: "He never swims.", tokens: ["Er", "schwimmt", "nie."]}
                ], 1),
                ...makeOrderSets("u8-freq-t3", "Task 3: Word Order with translations", [
                    {eng: "I ALWAYS play football.", tokens: ["Ich", "spiele", "immer", "Fußball."]},
                    {eng: "We OFTEN go to the cinema.", tokens: ["Wir", "gehen", "oft", "ins", "Kino."]},
                    {eng: "He SOMETIMES cooks pasta.", tokens: ["Er", "kocht", "manchmal", "Nudeln."]}
                ], 1)
            ]
        },
        {
            id: "u8-su3",
            title: "Adverbs Time-Manner-Place",
            taskSets: makeOrderSets("u8-tmp", "Set", [
                {eng: "We play football tomorrow in the park. (Time first!)", tokens: ["Wir", "spielen", "morgen", "im", "Park", "Fußball."]},
                {eng: "I am travelling to Berlin by train today. (T-M-P)", tokens: ["Ich", "fahre", "heute", "mit", "dem", "Zug", "nach", "Berlin."]},
                {eng: "He is learning well in school now. (T-M-P)", tokens: ["Er", "lernt", "jetzt", "gut", "in", "der", "Schule."]},
                {eng: "She often reads at home.", tokens: ["Sie", "liest", "oft", "zu", "Hause."]},
                {eng: "We are going quickly to the city tomorrow.", tokens: ["Wir", "gehen", "morgen", "schnell", "in", "die", "Stadt."]}
            ], 3)
        }
    ]
});

// UNIT 9: Word order
units.push({
    id: "unit-9",
    title: "Unit 9: Word order",
    explanation: "The verb is ALWAYS the 2nd idea! If you start with a time phrase, the subject comes after the verb (Inversion).\n\n0-position words: aber (but), und (and), denn (because), oder (or). These words DO NOT count as position 1. The verb is still 2nd after them.\n\nOther conjunctions like außerdem (besides), auch (also), leider (unfortunately) DO count as position 1, so the verb comes right after them!",
    subunits: [
        {
            id: "u9-su1",
            title: "Inversion",
            taskSets: [
                ...makeOrderSets("u9-inv-s1", "Set 1: Basic Inversion", [
                    {eng: "Tomorrow I play football.", tokens: ["Morgen", "spiele", "ich", "Fußball."]},
                    {eng: "Often we go into the cinema.", tokens: ["Oft", "gehen", "wir", "ins", "Kino."]},
                    {eng: "At the weekend he sleeps long.", tokens: ["Am", "Wochenende", "schläft", "er", "lange."]},
                    {eng: "Here I don't park.", tokens: ["Hier", "parke", "ich", "nicht."]},
                    {eng: "Sometimes she eats pizza.", tokens: ["Manchmal", "isst", "sie", "Pizza."]},
                    {eng: "Today I have no time.", tokens: ["Heute", "habe", "ich", "keine", "Zeit."]}
                ], 1),
                ...makeOrderSets("u9-inv-s2", "Set 2: Time-Manner-Place", [
                    {eng: "Tomorrow we travel quickly to Berlin.", tokens: ["Morgen", "fahren", "wir", "schnell", "nach", "Berlin."]},
                    {eng: "Today he plays football well in the park.", tokens: ["Heute", "spielt", "er", "gut", "im", "Park", "Fußball."]},
                    {eng: "At the weekend she reads quietly at home.", tokens: ["Am", "Wochenende", "liest", "sie", "ruhig", "zu", "Hause."]},
                    {eng: "In the morning I eat gladly in the kitchen.", tokens: ["Am", "Morgen", "esse", "ich", "gern", "in", "der", "Küche."]}
                ], 1),
                ...makeOrderSets("u9-inv-s3", "Set 3: Past Tense", [
                    {eng: "Yesterday I played football.", tokens: ["Gestern", "habe", "ich", "Fußball", "gespielt."]},
                    {eng: "On the weekend we went to the cinema.", tokens: ["Am", "Wochenende", "sind", "wir", "ins", "Kino", "gegangen."]},
                    {eng: "Often she ate pizza here.", tokens: ["Oft", "hat", "sie", "hier", "Pizza", "gegessen."]},
                    {eng: "Letzte Woche war er in Berlin.", tokens: ["Letzte", "Woche", "war", "er", "in", "Berlin."]}
                ], 1),
                ...makeOrderSets("u9-inv-s4", "Set 4: Form change", [
                    {eng: "Tomorrow I (play) football.", displayTokens: ["Morgen", "ich", "Fußball.", "(spielen)"], tokens: ["Morgen", "spiele", "ich", "Fußball."], answer: "Morgen spiele ich Fußball."},
                    {eng: "Yesterday she (ate) pizza.", displayTokens: ["Gestern", "sie", "Pizza", "gegessen.", "(haben)"], tokens: ["Gestern", "hat", "sie", "Pizza", "gegessen."], answer: "Gestern hat sie Pizza gegessen."},
                    {eng: "Today we travel quickly to Berlin.", displayTokens: ["Heute", "wir", "schnell", "nach", "Berlin.", "(fahren)"], tokens: ["Heute", "fahren", "wir", "schnell", "nach", "Berlin."], answer: "Heute fahren wir schnell nach Berlin."}
                ], 1)
            ]
        },
        {
            id: "u9-su2",
            title: "Ja-nein Fragen",
            taskSets: makeOrderSets("u9-jaNein", "Set", [
                {eng: "Do you come from England?", tokens: ["Kommst", "du", "aus", "England?"]},
                {eng: "Is he twelve years old?", tokens: ["Ist", "er", "zwölf", "Jahre", "alt?"]},
                {eng: "Do you all like football?", tokens: ["Mögt", "ihr", "Fußball?"]},
                {eng: "Do we have time?", tokens: ["Haben", "wir", "Zeit?"]},
                {eng: "Does she play an instrument?", tokens: ["Spielt", "sie", "ein", "Instrument?"]},
                {eng: "Do you have a brother?", tokens: ["Hast", "du", "einen", "Bruder?"]}
            ], 3)
        },
        {
            id: "u9-su3",
            title: "0-words vs Inversion",
            taskSets: makeOrderSets("u9-0words", "Set", [
                {eng: "But I play football today.", tokens: ["Aber", "ich", "spiele", "heute", "Fußball."]},
                {eng: "Besides that he also plays tennis. (außerdem puts verb 2nd!)", tokens: ["Außerdem", "spielt", "er", "auch", "Tennis."]},
                {eng: "Or we go to the cinema.", tokens: ["Oder", "wir", "gehen", "ins", "Kino."]},
                {eng: "Unfortunately I don't have time. (leider puts verb 2nd!)", tokens: ["Leider", "habe", "ich", "keine", "Zeit."]},
                {eng: "Because she is tired.", tokens: ["Denn", "sie", "ist", "müde."]},
                {eng: "Also we are tired. (auch puts verb 2nd!)", tokens: ["Auch", "sind", "wir", "müde."]},
                {eng: "And he reads a book.", tokens: ["Und", "er", "liest", "ein", "Buch."]},
                {eng: "Unfortunately he is ill. (leider puts verb 2nd!)", tokens: ["Leider", "ist", "er", "krank."]}
            ], 3, "Arrange the words. Remember: aber, und, denn, oder are 0-words. The subject comes next. Words like außerdem, auch, leider take position 1, so the verb comes next!")
        }
    ]
});

// UNIT 10: Imperfect (war, hatte, mochte)
units.push({
    id: "unit-10",
    title: "Unit 10: Imperfect (past tense)",
    explanation: "The imperfect (simple past) of sein (war), haben (hatte), and mögen (mochte).",
    subunits: [
        {
            id: "u10-su1",
            title: "war (was/were)",
            taskSets: makeGapSets("u10-war", "Set", [
                {s: "Ich ___ (was) müde.", a: "war"},
                {s: "Du ___ (were) krank.", a: "warst"},
                {s: "Er ___ (was) hier.", a: "war"},
                {s: "Sie ___ (she was) dort.", a: "war"},
                {s: "Es ___ (was) schön.", a: "war"},
                {s: "Wir ___ (were) zu Hause.", a: "waren"},
                {s: "Ihr ___ (were) lustig.", a: "wart"},
                {s: "Sie ___ (they were) in Berlin.", a: "waren"}
            ], 3, "Revise 'war' (sein in past): ich war, du warst, er/sie/es war, wir waren, ihr wart, sie/Sie waren")
        },
        {
            id: "u10-su2",
            title: "hatte (had)",
            taskSets: makeGapSets("u10-hatte", "Set", [
                {s: "Ich ___ (had) keine Zeit.", a: "hatte"},
                {s: "Du ___ (had) einen Hund.", a: "hattest"},
                {s: "Er ___ (had) Glück.", a: "hatte"},
                {s: "Sie ___ (she had) Hunger.", a: "hatte"},
                {s: "Wir ___ (had) ein Auto.", a: "hatten"},
                {s: "Ihr ___ (had) Spaß.", a: "hattet"},
                {s: "Sie ___ (they had) viel Geld.", a: "hatten"}
            ], 3, "Revise 'hatte' (haben in past): ich hatte, du hattest, er/sie/es hatte, wir hatten, ihr hattet, sie/Sie hatten")
        },
        {
            id: "u10-su3",
            title: "mochte (liked)",
            taskSets: makeGapSets("u10-mochte", "Set", [
                {s: "Ich ___ (liked) das Buch.", a: "mochte"},
                {s: "Du ___ (liked) die Musik.", a: "mochtest"},
                {s: "Er ___ (liked) den Film.", a: "mochte"},
                {s: "Sie ___ (she liked) Pizza.", a: "mochte"},
                {s: "Wir ___ (liked) den Park.", a: "mochten"},
                {s: "Ihr ___ (liked) das Spiel.", a: "mochtet"},
                {s: "Sie ___ (they liked) Tiere.", a: "mochten"}
            ], 3, "Revise 'mochte' (mögen in past): ich mochte, du mochtest, er/sie/es mochte, wir mochten, ihr mochtet, sie/Sie mochten")
        }
    ]
});

const output = `/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ExerciseType = 'gap' | 'order' | 'type' | 'info';

export interface Exercise {
  id: string;
  type: ExerciseType;
  sentence: string;
  answer: string | string[];
  hint?: string;
  englishTranslation?: string;
  orderTokens?: string[];
  infoText?: string;
}

export interface TaskSet {
  id: string;
  title: string;
  exercises: Exercise[];
}

export interface Subunit {
  id: string;
  title: string;
  explanation?: string;
  taskSets: TaskSet[];
}

export interface Unit {
  id: string;
  title: string;
  explanation: string;
  subunits: Subunit[];
}

export const units: Unit[] = ${JSON.stringify(units, null, 2)};
`;

fs.writeFileSync('src/data/units.ts', output);
console.log("Written to src/data/units.ts");
