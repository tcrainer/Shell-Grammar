/**
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

export const units: Unit[] = [
  {
    "id": "unit-1",
    "title": "Unit 1: Personal Pronouns",
    "explanation": "Personal pronouns replace nouns. Singular: ich (I), du (you), er (he), sie (she), es (it). Plural: wir (we), ihr (you all), sie (they), Sie (you formal).",
    "subunits": [
      {
        "id": "u1-su1",
        "title": "Personal Pronouns",
        "taskSets": [
          {
            "id": "u1-pron-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u1-pron-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Read the sentence and figure out the missing word. Think about the rules you've learned in this unit to solve the tasks.",
                "answer": ""
              },
              {
                "id": "u1-pron-s1-1",
                "type": "gap",
                "sentence": "___ (they) singen gut.",
                "answer": "Sie",
                "hint": ""
              },
              {
                "id": "u1-pron-s1-2",
                "type": "gap",
                "sentence": "___ (we) spielen.",
                "answer": "Wir",
                "hint": ""
              },
              {
                "id": "u1-pron-s1-3",
                "type": "gap",
                "sentence": "___ (she) ist neu hier.",
                "answer": "Sie",
                "hint": ""
              },
              {
                "id": "u1-pron-s1-4",
                "type": "gap",
                "sentence": "___ (I) bin zwölf.",
                "answer": "Ich",
                "hint": ""
              },
              {
                "id": "u1-pron-s1-5",
                "type": "gap",
                "sentence": "___ (he) heißt Tom.",
                "answer": "Er",
                "hint": ""
              },
              {
                "id": "u1-pron-s1-6",
                "type": "gap",
                "sentence": "___ (I) mag Pizza.",
                "answer": "Ich",
                "hint": ""
              },
              {
                "id": "u1-pron-s1-7",
                "type": "gap",
                "sentence": "___ (it) ist ein Baby.",
                "answer": "Es",
                "hint": ""
              },
              {
                "id": "u1-pron-s1-8",
                "type": "gap",
                "sentence": "___ (you formal) haben Zeit.",
                "answer": "Sie",
                "hint": ""
              }
            ]
          },
          {
            "id": "u1-pron-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u1-pron-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Read the sentence and figure out the missing word. Think about the rules you've learned in this unit to solve the tasks.",
                "answer": ""
              },
              {
                "id": "u1-pron-s2-1",
                "type": "gap",
                "sentence": "___ (it) ist ein Baby.",
                "answer": "Es",
                "hint": ""
              },
              {
                "id": "u1-pron-s2-2",
                "type": "gap",
                "sentence": "___ (I) bin zwölf.",
                "answer": "Ich",
                "hint": ""
              },
              {
                "id": "u1-pron-s2-3",
                "type": "gap",
                "sentence": "___ (you, sing.) bist groß.",
                "answer": "Du",
                "hint": ""
              },
              {
                "id": "u1-pron-s2-4",
                "type": "gap",
                "sentence": "___ (you all) seid cool.",
                "answer": "Ihr",
                "hint": ""
              },
              {
                "id": "u1-pron-s2-5",
                "type": "gap",
                "sentence": "___ (he) heißt Tom.",
                "answer": "Er",
                "hint": ""
              },
              {
                "id": "u1-pron-s2-6",
                "type": "gap",
                "sentence": "___ (we) spielen.",
                "answer": "Wir",
                "hint": ""
              },
              {
                "id": "u1-pron-s2-7",
                "type": "gap",
                "sentence": "___ (you formal) haben Zeit.",
                "answer": "Sie",
                "hint": ""
              },
              {
                "id": "u1-pron-s2-8",
                "type": "gap",
                "sentence": "___ (they) singen gut.",
                "answer": "Sie",
                "hint": ""
              }
            ]
          },
          {
            "id": "u1-pron-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u1-pron-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Read the sentence and figure out the missing word. Think about the rules you've learned in this unit to solve the tasks.",
                "answer": ""
              },
              {
                "id": "u1-pron-s3-1",
                "type": "gap",
                "sentence": "___ (you, sing.) bist groß.",
                "answer": "Du",
                "hint": ""
              },
              {
                "id": "u1-pron-s3-2",
                "type": "gap",
                "sentence": "___ (I) mag Pizza.",
                "answer": "Ich",
                "hint": ""
              },
              {
                "id": "u1-pron-s3-3",
                "type": "gap",
                "sentence": "___ (she) ist neu hier.",
                "answer": "Sie",
                "hint": ""
              },
              {
                "id": "u1-pron-s3-4",
                "type": "gap",
                "sentence": "___ (you formal) haben Zeit.",
                "answer": "Sie",
                "hint": ""
              },
              {
                "id": "u1-pron-s3-5",
                "type": "gap",
                "sentence": "___ (we) spielen.",
                "answer": "Wir",
                "hint": ""
              },
              {
                "id": "u1-pron-s3-6",
                "type": "gap",
                "sentence": "___ (he) heißt Tom.",
                "answer": "Er",
                "hint": ""
              },
              {
                "id": "u1-pron-s3-7",
                "type": "gap",
                "sentence": "___ (you all) seid cool.",
                "answer": "Ihr",
                "hint": ""
              },
              {
                "id": "u1-pron-s3-8",
                "type": "gap",
                "sentence": "___ (it) ist ein Baby.",
                "answer": "Es",
                "hint": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "unit-2",
    "title": "Unit 2: Basic verbs",
    "explanation": "These verbs are highly irregular: 'sein' (to be), 'haben' (to have), 'mögen' (to like), 'müssen' (have to/must).",
    "subunits": [
      {
        "id": "u2-su1",
        "title": "sein (to be)",
        "taskSets": [
          {
            "id": "u2-sein-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u2-sein-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise 'sein': ich bin, du bist, er ist, sie ist, es ist, wir sind, ihr seid, sie/Sie sind",
                "answer": ""
              },
              {
                "id": "u2-sein-s1-1",
                "type": "gap",
                "sentence": "Sie ___ (they are) müde.",
                "answer": "sind",
                "hint": "they are"
              },
              {
                "id": "u2-sein-s1-2",
                "type": "gap",
                "sentence": "Er ___ (is) groß.",
                "answer": "ist",
                "hint": "he is"
              },
              {
                "id": "u2-sein-s1-3",
                "type": "gap",
                "sentence": "Ihr ___ (are) lustig.",
                "answer": "seid",
                "hint": "you all are"
              },
              {
                "id": "u2-sein-s1-4",
                "type": "gap",
                "sentence": "Es ___ (is) neu.",
                "answer": "ist",
                "hint": "it is"
              },
              {
                "id": "u2-sein-s1-5",
                "type": "gap",
                "sentence": "Wir ___ (are) hier.",
                "answer": "sind",
                "hint": "we are"
              },
              {
                "id": "u2-sein-s1-6",
                "type": "gap",
                "sentence": "Sie ___ (she is) klug.",
                "answer": "ist",
                "hint": "she is"
              },
              {
                "id": "u2-sein-s1-7",
                "type": "gap",
                "sentence": "Ich ___ (am) glücklich.",
                "answer": "bin",
                "hint": "I am"
              },
              {
                "id": "u2-sein-s1-8",
                "type": "gap",
                "sentence": "Du ___ (are) mein Freund.",
                "answer": "bist",
                "hint": "you are"
              }
            ]
          },
          {
            "id": "u2-sein-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u2-sein-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise 'sein': ich bin, du bist, er ist, sie ist, es ist, wir sind, ihr seid, sie/Sie sind",
                "answer": ""
              },
              {
                "id": "u2-sein-s2-1",
                "type": "gap",
                "sentence": "Wir ___ (are) hier.",
                "answer": "sind",
                "hint": "we are"
              },
              {
                "id": "u2-sein-s2-2",
                "type": "gap",
                "sentence": "Ich ___ (am) glücklich.",
                "answer": "bin",
                "hint": "I am"
              },
              {
                "id": "u2-sein-s2-3",
                "type": "gap",
                "sentence": "Sie ___ (she is) klug.",
                "answer": "ist",
                "hint": "she is"
              },
              {
                "id": "u2-sein-s2-4",
                "type": "gap",
                "sentence": "Ihr ___ (are) lustig.",
                "answer": "seid",
                "hint": "you all are"
              },
              {
                "id": "u2-sein-s2-5",
                "type": "gap",
                "sentence": "Du ___ (are) mein Freund.",
                "answer": "bist",
                "hint": "you are"
              },
              {
                "id": "u2-sein-s2-6",
                "type": "gap",
                "sentence": "Sie ___ (they are) müde.",
                "answer": "sind",
                "hint": "they are"
              },
              {
                "id": "u2-sein-s2-7",
                "type": "gap",
                "sentence": "Er ___ (is) groß.",
                "answer": "ist",
                "hint": "he is"
              },
              {
                "id": "u2-sein-s2-8",
                "type": "gap",
                "sentence": "Es ___ (is) neu.",
                "answer": "ist",
                "hint": "it is"
              }
            ]
          },
          {
            "id": "u2-sein-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u2-sein-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise 'sein': ich bin, du bist, er ist, sie ist, es ist, wir sind, ihr seid, sie/Sie sind",
                "answer": ""
              },
              {
                "id": "u2-sein-s3-1",
                "type": "gap",
                "sentence": "Wir ___ (are) hier.",
                "answer": "sind",
                "hint": "we are"
              },
              {
                "id": "u2-sein-s3-2",
                "type": "gap",
                "sentence": "Sie ___ (they are) müde.",
                "answer": "sind",
                "hint": "they are"
              },
              {
                "id": "u2-sein-s3-3",
                "type": "gap",
                "sentence": "Er ___ (is) groß.",
                "answer": "ist",
                "hint": "he is"
              },
              {
                "id": "u2-sein-s3-4",
                "type": "gap",
                "sentence": "Es ___ (is) neu.",
                "answer": "ist",
                "hint": "it is"
              },
              {
                "id": "u2-sein-s3-5",
                "type": "gap",
                "sentence": "Du ___ (are) mein Freund.",
                "answer": "bist",
                "hint": "you are"
              },
              {
                "id": "u2-sein-s3-6",
                "type": "gap",
                "sentence": "Sie ___ (she is) klug.",
                "answer": "ist",
                "hint": "she is"
              },
              {
                "id": "u2-sein-s3-7",
                "type": "gap",
                "sentence": "Ich ___ (am) glücklich.",
                "answer": "bin",
                "hint": "I am"
              },
              {
                "id": "u2-sein-s3-8",
                "type": "gap",
                "sentence": "Ihr ___ (are) lustig.",
                "answer": "seid",
                "hint": "you all are"
              }
            ]
          }
        ]
      },
      {
        "id": "u2-su2",
        "title": "haben (to have)",
        "taskSets": [
          {
            "id": "u2-haben-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u2-haben-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise 'haben': ich habe, du hast, er hat, sie hat, es hat, wir haben, ihr habt, sie/Sie haben",
                "answer": ""
              },
              {
                "id": "u2-haben-s1-1",
                "type": "gap",
                "sentence": "Du ___ (have) ein Buch.",
                "answer": "hast",
                "hint": ""
              },
              {
                "id": "u2-haben-s1-2",
                "type": "gap",
                "sentence": "Er ___ (has) Hunger.",
                "answer": "hat",
                "hint": ""
              },
              {
                "id": "u2-haben-s1-3",
                "type": "gap",
                "sentence": "Ihr ___ (have) Spaß.",
                "answer": "habt",
                "hint": ""
              },
              {
                "id": "u2-haben-s1-4",
                "type": "gap",
                "sentence": "Ich ___ (have) Zeit.",
                "answer": "habe",
                "hint": ""
              },
              {
                "id": "u2-haben-s1-5",
                "type": "gap",
                "sentence": "Es ___ (has) Beine.",
                "answer": "hat",
                "hint": ""
              },
              {
                "id": "u2-haben-s1-6",
                "type": "gap",
                "sentence": "Wir ___ (have) Glück.",
                "answer": "haben",
                "hint": ""
              },
              {
                "id": "u2-haben-s1-7",
                "type": "gap",
                "sentence": "Sie ___ (she has) Durst.",
                "answer": "hat",
                "hint": ""
              },
              {
                "id": "u2-haben-s1-8",
                "type": "gap",
                "sentence": "Sie ___ (they have) Geld.",
                "answer": "haben",
                "hint": ""
              }
            ]
          },
          {
            "id": "u2-haben-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u2-haben-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise 'haben': ich habe, du hast, er hat, sie hat, es hat, wir haben, ihr habt, sie/Sie haben",
                "answer": ""
              },
              {
                "id": "u2-haben-s2-1",
                "type": "gap",
                "sentence": "Wir ___ (have) Glück.",
                "answer": "haben",
                "hint": ""
              },
              {
                "id": "u2-haben-s2-2",
                "type": "gap",
                "sentence": "Ich ___ (have) Zeit.",
                "answer": "habe",
                "hint": ""
              },
              {
                "id": "u2-haben-s2-3",
                "type": "gap",
                "sentence": "Sie ___ (they have) Geld.",
                "answer": "haben",
                "hint": ""
              },
              {
                "id": "u2-haben-s2-4",
                "type": "gap",
                "sentence": "Sie ___ (she has) Durst.",
                "answer": "hat",
                "hint": ""
              },
              {
                "id": "u2-haben-s2-5",
                "type": "gap",
                "sentence": "Ihr ___ (have) Spaß.",
                "answer": "habt",
                "hint": ""
              },
              {
                "id": "u2-haben-s2-6",
                "type": "gap",
                "sentence": "Es ___ (has) Beine.",
                "answer": "hat",
                "hint": ""
              },
              {
                "id": "u2-haben-s2-7",
                "type": "gap",
                "sentence": "Er ___ (has) Hunger.",
                "answer": "hat",
                "hint": ""
              },
              {
                "id": "u2-haben-s2-8",
                "type": "gap",
                "sentence": "Du ___ (have) ein Buch.",
                "answer": "hast",
                "hint": ""
              }
            ]
          },
          {
            "id": "u2-haben-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u2-haben-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise 'haben': ich habe, du hast, er hat, sie hat, es hat, wir haben, ihr habt, sie/Sie haben",
                "answer": ""
              },
              {
                "id": "u2-haben-s3-1",
                "type": "gap",
                "sentence": "Ihr ___ (have) Spaß.",
                "answer": "habt",
                "hint": ""
              },
              {
                "id": "u2-haben-s3-2",
                "type": "gap",
                "sentence": "Es ___ (has) Beine.",
                "answer": "hat",
                "hint": ""
              },
              {
                "id": "u2-haben-s3-3",
                "type": "gap",
                "sentence": "Sie ___ (they have) Geld.",
                "answer": "haben",
                "hint": ""
              },
              {
                "id": "u2-haben-s3-4",
                "type": "gap",
                "sentence": "Wir ___ (have) Glück.",
                "answer": "haben",
                "hint": ""
              },
              {
                "id": "u2-haben-s3-5",
                "type": "gap",
                "sentence": "Du ___ (have) ein Buch.",
                "answer": "hast",
                "hint": ""
              },
              {
                "id": "u2-haben-s3-6",
                "type": "gap",
                "sentence": "Er ___ (has) Hunger.",
                "answer": "hat",
                "hint": ""
              },
              {
                "id": "u2-haben-s3-7",
                "type": "gap",
                "sentence": "Sie ___ (she has) Durst.",
                "answer": "hat",
                "hint": ""
              },
              {
                "id": "u2-haben-s3-8",
                "type": "gap",
                "sentence": "Ich ___ (have) Zeit.",
                "answer": "habe",
                "hint": ""
              }
            ]
          }
        ]
      },
      {
        "id": "u2-su3",
        "title": "mögen (to like)",
        "taskSets": [
          {
            "id": "u2-mogen-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u2-mogen-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise 'mögen': ich mag, du magst, er mag, sie mag, es mag, wir mögen, ihr mögt, sie/Sie mögen",
                "answer": ""
              },
              {
                "id": "u2-mogen-s1-1",
                "type": "gap",
                "sentence": "Wir ___ (like) Pizza.",
                "answer": "mögen",
                "hint": ""
              },
              {
                "id": "u2-mogen-s1-2",
                "type": "gap",
                "sentence": "Sie ___ (she likes) Musik.",
                "answer": "mag",
                "hint": ""
              },
              {
                "id": "u2-mogen-s1-3",
                "type": "gap",
                "sentence": "Ich ___ (like) Katzen.",
                "answer": "mag",
                "hint": ""
              },
              {
                "id": "u2-mogen-s1-4",
                "type": "gap",
                "sentence": "Er ___ (likes) Sport.",
                "answer": "mag",
                "hint": ""
              },
              {
                "id": "u2-mogen-s1-5",
                "type": "gap",
                "sentence": "Du ___ (like) Hunde.",
                "answer": "magst",
                "hint": ""
              },
              {
                "id": "u2-mogen-s1-6",
                "type": "gap",
                "sentence": "Sie ___ (they like) Autos.",
                "answer": "mögen",
                "hint": ""
              },
              {
                "id": "u2-mogen-s1-7",
                "type": "gap",
                "sentence": "Ihr ___ (like) Eis.",
                "answer": "mögt",
                "hint": ""
              },
              {
                "id": "u2-mogen-s1-8",
                "type": "gap",
                "sentence": "Wir ___ (like) Pizza.",
                "answer": "mögen",
                "hint": ""
              }
            ]
          },
          {
            "id": "u2-mogen-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u2-mogen-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise 'mögen': ich mag, du magst, er mag, sie mag, es mag, wir mögen, ihr mögt, sie/Sie mögen",
                "answer": ""
              },
              {
                "id": "u2-mogen-s2-1",
                "type": "gap",
                "sentence": "Sie ___ (they like) Autos.",
                "answer": "mögen",
                "hint": ""
              },
              {
                "id": "u2-mogen-s2-2",
                "type": "gap",
                "sentence": "Du ___ (like) Hunde.",
                "answer": "magst",
                "hint": ""
              },
              {
                "id": "u2-mogen-s2-3",
                "type": "gap",
                "sentence": "Er ___ (likes) Sport.",
                "answer": "mag",
                "hint": ""
              },
              {
                "id": "u2-mogen-s2-4",
                "type": "gap",
                "sentence": "Sie ___ (she likes) Musik.",
                "answer": "mag",
                "hint": ""
              },
              {
                "id": "u2-mogen-s2-5",
                "type": "gap",
                "sentence": "Ihr ___ (like) Eis.",
                "answer": "mögt",
                "hint": ""
              },
              {
                "id": "u2-mogen-s2-6",
                "type": "gap",
                "sentence": "Ich ___ (like) Katzen.",
                "answer": "mag",
                "hint": ""
              },
              {
                "id": "u2-mogen-s2-7",
                "type": "gap",
                "sentence": "Wir ___ (like) Pizza.",
                "answer": "mögen",
                "hint": ""
              },
              {
                "id": "u2-mogen-s2-8",
                "type": "gap",
                "sentence": "Sie ___ (they like) Autos.",
                "answer": "mögen",
                "hint": ""
              }
            ]
          },
          {
            "id": "u2-mogen-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u2-mogen-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise 'mögen': ich mag, du magst, er mag, sie mag, es mag, wir mögen, ihr mögt, sie/Sie mögen",
                "answer": ""
              },
              {
                "id": "u2-mogen-s3-1",
                "type": "gap",
                "sentence": "Sie ___ (she likes) Musik.",
                "answer": "mag",
                "hint": ""
              },
              {
                "id": "u2-mogen-s3-2",
                "type": "gap",
                "sentence": "Er ___ (likes) Sport.",
                "answer": "mag",
                "hint": ""
              },
              {
                "id": "u2-mogen-s3-3",
                "type": "gap",
                "sentence": "Wir ___ (like) Pizza.",
                "answer": "mögen",
                "hint": ""
              },
              {
                "id": "u2-mogen-s3-4",
                "type": "gap",
                "sentence": "Ich ___ (like) Katzen.",
                "answer": "mag",
                "hint": ""
              },
              {
                "id": "u2-mogen-s3-5",
                "type": "gap",
                "sentence": "Du ___ (like) Hunde.",
                "answer": "magst",
                "hint": ""
              },
              {
                "id": "u2-mogen-s3-6",
                "type": "gap",
                "sentence": "Ihr ___ (like) Eis.",
                "answer": "mögt",
                "hint": ""
              },
              {
                "id": "u2-mogen-s3-7",
                "type": "gap",
                "sentence": "Sie ___ (they like) Autos.",
                "answer": "mögen",
                "hint": ""
              },
              {
                "id": "u2-mogen-s3-8",
                "type": "gap",
                "sentence": "Sie ___ (she likes) Musik.",
                "answer": "mag",
                "hint": ""
              }
            ]
          }
        ]
      },
      {
        "id": "u2-su4",
        "title": "müssen (must/have to)",
        "taskSets": [
          {
            "id": "u2-mussen-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u2-mussen-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise 'müssen': ich muss, du musst, er muss, sie muss, es muss, wir müssen, ihr müsst, sie/Sie müssen",
                "answer": ""
              },
              {
                "id": "u2-mussen-s1-1",
                "type": "gap",
                "sentence": "Es ___ (must) sein.",
                "answer": "muss",
                "hint": ""
              },
              {
                "id": "u2-mussen-s1-2",
                "type": "gap",
                "sentence": "Er ___ (must) schlafen.",
                "answer": "muss",
                "hint": ""
              },
              {
                "id": "u2-mussen-s1-3",
                "type": "gap",
                "sentence": "Du ___ (must) lernen.",
                "answer": "musst",
                "hint": ""
              },
              {
                "id": "u2-mussen-s1-4",
                "type": "gap",
                "sentence": "Ihr ___ (must) helfen.",
                "answer": "müsst",
                "hint": ""
              },
              {
                "id": "u2-mussen-s1-5",
                "type": "gap",
                "sentence": "Wir ___ (must) essen.",
                "answer": "müssen",
                "hint": ""
              },
              {
                "id": "u2-mussen-s1-6",
                "type": "gap",
                "sentence": "Ich ___ (must) gehen.",
                "answer": "muss",
                "hint": ""
              },
              {
                "id": "u2-mussen-s1-7",
                "type": "gap",
                "sentence": "Sie ___ (they must) kommen.",
                "answer": "müssen",
                "hint": ""
              },
              {
                "id": "u2-mussen-s1-8",
                "type": "gap",
                "sentence": "Sie ___ (she must) arbeiten.",
                "answer": "muss",
                "hint": ""
              }
            ]
          },
          {
            "id": "u2-mussen-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u2-mussen-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise 'müssen': ich muss, du musst, er muss, sie muss, es muss, wir müssen, ihr müsst, sie/Sie müssen",
                "answer": ""
              },
              {
                "id": "u2-mussen-s2-1",
                "type": "gap",
                "sentence": "Sie ___ (she must) arbeiten.",
                "answer": "muss",
                "hint": ""
              },
              {
                "id": "u2-mussen-s2-2",
                "type": "gap",
                "sentence": "Du ___ (must) lernen.",
                "answer": "musst",
                "hint": ""
              },
              {
                "id": "u2-mussen-s2-3",
                "type": "gap",
                "sentence": "Wir ___ (must) essen.",
                "answer": "müssen",
                "hint": ""
              },
              {
                "id": "u2-mussen-s2-4",
                "type": "gap",
                "sentence": "Es ___ (must) sein.",
                "answer": "muss",
                "hint": ""
              },
              {
                "id": "u2-mussen-s2-5",
                "type": "gap",
                "sentence": "Ich ___ (must) gehen.",
                "answer": "muss",
                "hint": ""
              },
              {
                "id": "u2-mussen-s2-6",
                "type": "gap",
                "sentence": "Er ___ (must) schlafen.",
                "answer": "muss",
                "hint": ""
              },
              {
                "id": "u2-mussen-s2-7",
                "type": "gap",
                "sentence": "Sie ___ (they must) kommen.",
                "answer": "müssen",
                "hint": ""
              },
              {
                "id": "u2-mussen-s2-8",
                "type": "gap",
                "sentence": "Ihr ___ (must) helfen.",
                "answer": "müsst",
                "hint": ""
              }
            ]
          },
          {
            "id": "u2-mussen-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u2-mussen-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise 'müssen': ich muss, du musst, er muss, sie muss, es muss, wir müssen, ihr müsst, sie/Sie müssen",
                "answer": ""
              },
              {
                "id": "u2-mussen-s3-1",
                "type": "gap",
                "sentence": "Es ___ (must) sein.",
                "answer": "muss",
                "hint": ""
              },
              {
                "id": "u2-mussen-s3-2",
                "type": "gap",
                "sentence": "Du ___ (must) lernen.",
                "answer": "musst",
                "hint": ""
              },
              {
                "id": "u2-mussen-s3-3",
                "type": "gap",
                "sentence": "Wir ___ (must) essen.",
                "answer": "müssen",
                "hint": ""
              },
              {
                "id": "u2-mussen-s3-4",
                "type": "gap",
                "sentence": "Sie ___ (she must) arbeiten.",
                "answer": "muss",
                "hint": ""
              },
              {
                "id": "u2-mussen-s3-5",
                "type": "gap",
                "sentence": "Er ___ (must) schlafen.",
                "answer": "muss",
                "hint": ""
              },
              {
                "id": "u2-mussen-s3-6",
                "type": "gap",
                "sentence": "Sie ___ (they must) kommen.",
                "answer": "müssen",
                "hint": ""
              },
              {
                "id": "u2-mussen-s3-7",
                "type": "gap",
                "sentence": "Ich ___ (must) gehen.",
                "answer": "muss",
                "hint": ""
              },
              {
                "id": "u2-mussen-s3-8",
                "type": "gap",
                "sentence": "Ihr ___ (must) helfen.",
                "answer": "müsst",
                "hint": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "unit-3",
    "title": "Unit 3: Present tense - Regular",
    "explanation": "Regular verbs follow standard endings. Subunits include standard, ending in t/d, eln, ern, s/z/ß.",
    "subunits": [
      {
        "id": "u3-su1",
        "title": "Regular verbs",
        "taskSets": [
          {
            "id": "u3-reg-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u3-reg-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise regular endings: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en",
                "answer": ""
              },
              {
                "id": "u3-reg-s1-1",
                "type": "gap",
                "sentence": "Ihr ___ (lernen) Deutsch.",
                "answer": "lernt",
                "hint": ""
              },
              {
                "id": "u3-reg-s1-2",
                "type": "gap",
                "sentence": "Er ___ (suchen) das Buch.",
                "answer": "sucht",
                "hint": ""
              },
              {
                "id": "u3-reg-s1-3",
                "type": "gap",
                "sentence": "Du ___ (machen) Sport.",
                "answer": "machst",
                "hint": ""
              },
              {
                "id": "u3-reg-s1-4",
                "type": "gap",
                "sentence": "Wir ___ (kaufen) Äpfel.",
                "answer": "kaufen",
                "hint": ""
              },
              {
                "id": "u3-reg-s1-5",
                "type": "gap",
                "sentence": "Ich ___ (spielen) Fußball.",
                "answer": "spiele",
                "hint": ""
              },
              {
                "id": "u3-reg-s1-6",
                "type": "gap",
                "sentence": "Sie ___ (singen - they) Lieder.",
                "answer": "singen",
                "hint": ""
              },
              {
                "id": "u3-reg-s1-7",
                "type": "gap",
                "sentence": "Ihr ___ (lernen) Deutsch.",
                "answer": "lernt",
                "hint": ""
              },
              {
                "id": "u3-reg-s1-8",
                "type": "gap",
                "sentence": "Er ___ (suchen) das Buch.",
                "answer": "sucht",
                "hint": ""
              }
            ]
          },
          {
            "id": "u3-reg-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u3-reg-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise regular endings: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en",
                "answer": ""
              },
              {
                "id": "u3-reg-s2-1",
                "type": "gap",
                "sentence": "Wir ___ (kaufen) Äpfel.",
                "answer": "kaufen",
                "hint": ""
              },
              {
                "id": "u3-reg-s2-2",
                "type": "gap",
                "sentence": "Er ___ (suchen) das Buch.",
                "answer": "sucht",
                "hint": ""
              },
              {
                "id": "u3-reg-s2-3",
                "type": "gap",
                "sentence": "Ich ___ (spielen) Fußball.",
                "answer": "spiele",
                "hint": ""
              },
              {
                "id": "u3-reg-s2-4",
                "type": "gap",
                "sentence": "Ihr ___ (lernen) Deutsch.",
                "answer": "lernt",
                "hint": ""
              },
              {
                "id": "u3-reg-s2-5",
                "type": "gap",
                "sentence": "Du ___ (machen) Sport.",
                "answer": "machst",
                "hint": ""
              },
              {
                "id": "u3-reg-s2-6",
                "type": "gap",
                "sentence": "Sie ___ (singen - they) Lieder.",
                "answer": "singen",
                "hint": ""
              },
              {
                "id": "u3-reg-s2-7",
                "type": "gap",
                "sentence": "Wir ___ (kaufen) Äpfel.",
                "answer": "kaufen",
                "hint": ""
              },
              {
                "id": "u3-reg-s2-8",
                "type": "gap",
                "sentence": "Er ___ (suchen) das Buch.",
                "answer": "sucht",
                "hint": ""
              }
            ]
          },
          {
            "id": "u3-reg-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u3-reg-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise regular endings: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en",
                "answer": ""
              },
              {
                "id": "u3-reg-s3-1",
                "type": "gap",
                "sentence": "Du ___ (machen) Sport.",
                "answer": "machst",
                "hint": ""
              },
              {
                "id": "u3-reg-s3-2",
                "type": "gap",
                "sentence": "Ihr ___ (lernen) Deutsch.",
                "answer": "lernt",
                "hint": ""
              },
              {
                "id": "u3-reg-s3-3",
                "type": "gap",
                "sentence": "Wir ___ (kaufen) Äpfel.",
                "answer": "kaufen",
                "hint": ""
              },
              {
                "id": "u3-reg-s3-4",
                "type": "gap",
                "sentence": "Er ___ (suchen) das Buch.",
                "answer": "sucht",
                "hint": ""
              },
              {
                "id": "u3-reg-s3-5",
                "type": "gap",
                "sentence": "Ich ___ (spielen) Fußball.",
                "answer": "spiele",
                "hint": ""
              },
              {
                "id": "u3-reg-s3-6",
                "type": "gap",
                "sentence": "Sie ___ (singen - they) Lieder.",
                "answer": "singen",
                "hint": ""
              },
              {
                "id": "u3-reg-s3-7",
                "type": "gap",
                "sentence": "Du ___ (machen) Sport.",
                "answer": "machst",
                "hint": ""
              },
              {
                "id": "u3-reg-s3-8",
                "type": "gap",
                "sentence": "Ihr ___ (lernen) Deutsch.",
                "answer": "lernt",
                "hint": ""
              }
            ]
          }
        ]
      },
      {
        "id": "u3-su2",
        "title": "Verbs ending on t/d",
        "taskSets": [
          {
            "id": "u3-td-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u3-td-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise t/d verbs: they insert an extra 'e' before -st and -t endings for easier pronunciation (e.g. du findest, er arbeitet).",
                "answer": ""
              },
              {
                "id": "u3-td-s1-1",
                "type": "gap",
                "sentence": "Er ___ (finden) den Weg.",
                "answer": "findet",
                "hint": ""
              },
              {
                "id": "u3-td-s1-2",
                "type": "gap",
                "sentence": "Du ___ (reiten).",
                "answer": "reitest",
                "hint": ""
              },
              {
                "id": "u3-td-s1-3",
                "type": "gap",
                "sentence": "Ihr ___ (arbeiten) viel.",
                "answer": "arbeitet",
                "hint": ""
              },
              {
                "id": "u3-td-s1-4",
                "type": "gap",
                "sentence": "Ich ___ (reiten).",
                "answer": "reite",
                "hint": ""
              },
              {
                "id": "u3-td-s1-5",
                "type": "gap",
                "sentence": "Wir ___ (finden) es gut.",
                "answer": "finden",
                "hint": ""
              },
              {
                "id": "u3-td-s1-6",
                "type": "gap",
                "sentence": "Sie ___ (arbeiten - they) hier.",
                "answer": "arbeiten",
                "hint": ""
              },
              {
                "id": "u3-td-s1-7",
                "type": "gap",
                "sentence": "Er ___ (finden) den Weg.",
                "answer": "findet",
                "hint": ""
              },
              {
                "id": "u3-td-s1-8",
                "type": "gap",
                "sentence": "Du ___ (reiten).",
                "answer": "reitest",
                "hint": ""
              }
            ]
          },
          {
            "id": "u3-td-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u3-td-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise t/d verbs: they insert an extra 'e' before -st and -t endings for easier pronunciation (e.g. du findest, er arbeitet).",
                "answer": ""
              },
              {
                "id": "u3-td-s2-1",
                "type": "gap",
                "sentence": "Wir ___ (finden) es gut.",
                "answer": "finden",
                "hint": ""
              },
              {
                "id": "u3-td-s2-2",
                "type": "gap",
                "sentence": "Du ___ (reiten).",
                "answer": "reitest",
                "hint": ""
              },
              {
                "id": "u3-td-s2-3",
                "type": "gap",
                "sentence": "Ihr ___ (arbeiten) viel.",
                "answer": "arbeitet",
                "hint": ""
              },
              {
                "id": "u3-td-s2-4",
                "type": "gap",
                "sentence": "Sie ___ (arbeiten - they) hier.",
                "answer": "arbeiten",
                "hint": ""
              },
              {
                "id": "u3-td-s2-5",
                "type": "gap",
                "sentence": "Ich ___ (reiten).",
                "answer": "reite",
                "hint": ""
              },
              {
                "id": "u3-td-s2-6",
                "type": "gap",
                "sentence": "Er ___ (finden) den Weg.",
                "answer": "findet",
                "hint": ""
              },
              {
                "id": "u3-td-s2-7",
                "type": "gap",
                "sentence": "Wir ___ (finden) es gut.",
                "answer": "finden",
                "hint": ""
              },
              {
                "id": "u3-td-s2-8",
                "type": "gap",
                "sentence": "Du ___ (reiten).",
                "answer": "reitest",
                "hint": ""
              }
            ]
          },
          {
            "id": "u3-td-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u3-td-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise t/d verbs: they insert an extra 'e' before -st and -t endings for easier pronunciation (e.g. du findest, er arbeitet).",
                "answer": ""
              },
              {
                "id": "u3-td-s3-1",
                "type": "gap",
                "sentence": "Du ___ (reiten).",
                "answer": "reitest",
                "hint": ""
              },
              {
                "id": "u3-td-s3-2",
                "type": "gap",
                "sentence": "Sie ___ (arbeiten - they) hier.",
                "answer": "arbeiten",
                "hint": ""
              },
              {
                "id": "u3-td-s3-3",
                "type": "gap",
                "sentence": "Wir ___ (finden) es gut.",
                "answer": "finden",
                "hint": ""
              },
              {
                "id": "u3-td-s3-4",
                "type": "gap",
                "sentence": "Ich ___ (reiten).",
                "answer": "reite",
                "hint": ""
              },
              {
                "id": "u3-td-s3-5",
                "type": "gap",
                "sentence": "Ihr ___ (arbeiten) viel.",
                "answer": "arbeitet",
                "hint": ""
              },
              {
                "id": "u3-td-s3-6",
                "type": "gap",
                "sentence": "Er ___ (finden) den Weg.",
                "answer": "findet",
                "hint": ""
              },
              {
                "id": "u3-td-s3-7",
                "type": "gap",
                "sentence": "Du ___ (reiten).",
                "answer": "reitest",
                "hint": ""
              },
              {
                "id": "u3-td-s3-8",
                "type": "gap",
                "sentence": "Sie ___ (arbeiten - they) hier.",
                "answer": "arbeiten",
                "hint": ""
              }
            ]
          }
        ]
      },
      {
        "id": "u3-su3",
        "title": "Verbs ending in eln",
        "taskSets": [
          {
            "id": "u3-eln-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u3-eln-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise eln verbs: the 'ich' form drops the 'e' in the stem (ich sammle).",
                "answer": ""
              },
              {
                "id": "u3-eln-s1-1",
                "type": "gap",
                "sentence": "Ihr ___ (segeln).",
                "answer": "segelt",
                "hint": ""
              },
              {
                "id": "u3-eln-s1-2",
                "type": "gap",
                "sentence": "Wir ___ (basteln).",
                "answer": "basteln",
                "hint": ""
              },
              {
                "id": "u3-eln-s1-3",
                "type": "gap",
                "sentence": "Du ___ (sammeln) Steine.",
                "answer": "sammelst",
                "hint": ""
              },
              {
                "id": "u3-eln-s1-4",
                "type": "gap",
                "sentence": "Er ___ (basteln) gern.",
                "answer": "bastelt",
                "hint": ""
              },
              {
                "id": "u3-eln-s1-5",
                "type": "gap",
                "sentence": "Sie ___ (segeln - they) im See.",
                "answer": "segeln",
                "hint": ""
              },
              {
                "id": "u3-eln-s1-6",
                "type": "gap",
                "sentence": "Ich ___ (segeln) am Sonntag.",
                "answer": "segle",
                "hint": ""
              },
              {
                "id": "u3-eln-s1-7",
                "type": "gap",
                "sentence": "Ich ___ (sammeln) Karten.",
                "answer": "sammle",
                "hint": ""
              },
              {
                "id": "u3-eln-s1-8",
                "type": "gap",
                "sentence": "Ihr ___ (segeln).",
                "answer": "segelt",
                "hint": ""
              }
            ]
          },
          {
            "id": "u3-eln-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u3-eln-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise eln verbs: the 'ich' form drops the 'e' in the stem (ich sammle).",
                "answer": ""
              },
              {
                "id": "u3-eln-s2-1",
                "type": "gap",
                "sentence": "Ich ___ (sammeln) Karten.",
                "answer": "sammle",
                "hint": ""
              },
              {
                "id": "u3-eln-s2-2",
                "type": "gap",
                "sentence": "Ich ___ (segeln) am Sonntag.",
                "answer": "segle",
                "hint": ""
              },
              {
                "id": "u3-eln-s2-3",
                "type": "gap",
                "sentence": "Sie ___ (segeln - they) im See.",
                "answer": "segeln",
                "hint": ""
              },
              {
                "id": "u3-eln-s2-4",
                "type": "gap",
                "sentence": "Ihr ___ (segeln).",
                "answer": "segelt",
                "hint": ""
              },
              {
                "id": "u3-eln-s2-5",
                "type": "gap",
                "sentence": "Du ___ (sammeln) Steine.",
                "answer": "sammelst",
                "hint": ""
              },
              {
                "id": "u3-eln-s2-6",
                "type": "gap",
                "sentence": "Wir ___ (basteln).",
                "answer": "basteln",
                "hint": ""
              },
              {
                "id": "u3-eln-s2-7",
                "type": "gap",
                "sentence": "Er ___ (basteln) gern.",
                "answer": "bastelt",
                "hint": ""
              },
              {
                "id": "u3-eln-s2-8",
                "type": "gap",
                "sentence": "Ich ___ (sammeln) Karten.",
                "answer": "sammle",
                "hint": ""
              }
            ]
          },
          {
            "id": "u3-eln-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u3-eln-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise eln verbs: the 'ich' form drops the 'e' in the stem (ich sammle).",
                "answer": ""
              },
              {
                "id": "u3-eln-s3-1",
                "type": "gap",
                "sentence": "Er ___ (basteln) gern.",
                "answer": "bastelt",
                "hint": ""
              },
              {
                "id": "u3-eln-s3-2",
                "type": "gap",
                "sentence": "Ich ___ (sammeln) Karten.",
                "answer": "sammle",
                "hint": ""
              },
              {
                "id": "u3-eln-s3-3",
                "type": "gap",
                "sentence": "Wir ___ (basteln).",
                "answer": "basteln",
                "hint": ""
              },
              {
                "id": "u3-eln-s3-4",
                "type": "gap",
                "sentence": "Ich ___ (segeln) am Sonntag.",
                "answer": "segle",
                "hint": ""
              },
              {
                "id": "u3-eln-s3-5",
                "type": "gap",
                "sentence": "Ihr ___ (segeln).",
                "answer": "segelt",
                "hint": ""
              },
              {
                "id": "u3-eln-s3-6",
                "type": "gap",
                "sentence": "Du ___ (sammeln) Steine.",
                "answer": "sammelst",
                "hint": ""
              },
              {
                "id": "u3-eln-s3-7",
                "type": "gap",
                "sentence": "Sie ___ (segeln - they) im See.",
                "answer": "segeln",
                "hint": ""
              },
              {
                "id": "u3-eln-s3-8",
                "type": "gap",
                "sentence": "Er ___ (basteln) gern.",
                "answer": "bastelt",
                "hint": ""
              }
            ]
          }
        ]
      },
      {
        "id": "u3-su4",
        "title": "Verbs ending in ern",
        "taskSets": [
          {
            "id": "u3-ern-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u3-ern-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise ern verbs: endings are regular, but the 'wir' and 'sie/Sie' endings drop the 'e' (we wandern, not wanderen).",
                "answer": ""
              },
              {
                "id": "u3-ern-s1-1",
                "type": "gap",
                "sentence": "Wir ___ (klettern).",
                "answer": "klettern",
                "hint": ""
              },
              {
                "id": "u3-ern-s1-2",
                "type": "gap",
                "sentence": "Er ___ (rudern) schnell.",
                "answer": "rudert",
                "hint": ""
              },
              {
                "id": "u3-ern-s1-3",
                "type": "gap",
                "sentence": "Ihr ___ (klettern).",
                "answer": "klettert",
                "hint": ""
              },
              {
                "id": "u3-ern-s1-4",
                "type": "gap",
                "sentence": "Ich ___ (wandern) gern.",
                "answer": "wandere",
                "hint": ""
              },
              {
                "id": "u3-ern-s1-5",
                "type": "gap",
                "sentence": "Du ___ (wandern) im Wald.",
                "answer": "wanderst",
                "hint": ""
              },
              {
                "id": "u3-ern-s1-6",
                "type": "gap",
                "sentence": "Sie ___ (rudern - they) auf dem See.",
                "answer": "rudern",
                "hint": ""
              },
              {
                "id": "u3-ern-s1-7",
                "type": "gap",
                "sentence": "Wir ___ (klettern).",
                "answer": "klettern",
                "hint": ""
              },
              {
                "id": "u3-ern-s1-8",
                "type": "gap",
                "sentence": "Er ___ (rudern) schnell.",
                "answer": "rudert",
                "hint": ""
              }
            ]
          },
          {
            "id": "u3-ern-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u3-ern-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise ern verbs: endings are regular, but the 'wir' and 'sie/Sie' endings drop the 'e' (we wandern, not wanderen).",
                "answer": ""
              },
              {
                "id": "u3-ern-s2-1",
                "type": "gap",
                "sentence": "Er ___ (rudern) schnell.",
                "answer": "rudert",
                "hint": ""
              },
              {
                "id": "u3-ern-s2-2",
                "type": "gap",
                "sentence": "Ihr ___ (klettern).",
                "answer": "klettert",
                "hint": ""
              },
              {
                "id": "u3-ern-s2-3",
                "type": "gap",
                "sentence": "Wir ___ (klettern).",
                "answer": "klettern",
                "hint": ""
              },
              {
                "id": "u3-ern-s2-4",
                "type": "gap",
                "sentence": "Ich ___ (wandern) gern.",
                "answer": "wandere",
                "hint": ""
              },
              {
                "id": "u3-ern-s2-5",
                "type": "gap",
                "sentence": "Sie ___ (rudern - they) auf dem See.",
                "answer": "rudern",
                "hint": ""
              },
              {
                "id": "u3-ern-s2-6",
                "type": "gap",
                "sentence": "Du ___ (wandern) im Wald.",
                "answer": "wanderst",
                "hint": ""
              },
              {
                "id": "u3-ern-s2-7",
                "type": "gap",
                "sentence": "Er ___ (rudern) schnell.",
                "answer": "rudert",
                "hint": ""
              },
              {
                "id": "u3-ern-s2-8",
                "type": "gap",
                "sentence": "Ihr ___ (klettern).",
                "answer": "klettert",
                "hint": ""
              }
            ]
          },
          {
            "id": "u3-ern-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u3-ern-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise ern verbs: endings are regular, but the 'wir' and 'sie/Sie' endings drop the 'e' (we wandern, not wanderen).",
                "answer": ""
              },
              {
                "id": "u3-ern-s3-1",
                "type": "gap",
                "sentence": "Wir ___ (klettern).",
                "answer": "klettern",
                "hint": ""
              },
              {
                "id": "u3-ern-s3-2",
                "type": "gap",
                "sentence": "Du ___ (wandern) im Wald.",
                "answer": "wanderst",
                "hint": ""
              },
              {
                "id": "u3-ern-s3-3",
                "type": "gap",
                "sentence": "Sie ___ (rudern - they) auf dem See.",
                "answer": "rudern",
                "hint": ""
              },
              {
                "id": "u3-ern-s3-4",
                "type": "gap",
                "sentence": "Er ___ (rudern) schnell.",
                "answer": "rudert",
                "hint": ""
              },
              {
                "id": "u3-ern-s3-5",
                "type": "gap",
                "sentence": "Ich ___ (wandern) gern.",
                "answer": "wandere",
                "hint": ""
              },
              {
                "id": "u3-ern-s3-6",
                "type": "gap",
                "sentence": "Ihr ___ (klettern).",
                "answer": "klettert",
                "hint": ""
              },
              {
                "id": "u3-ern-s3-7",
                "type": "gap",
                "sentence": "Wir ___ (klettern).",
                "answer": "klettern",
                "hint": ""
              },
              {
                "id": "u3-ern-s3-8",
                "type": "gap",
                "sentence": "Du ___ (wandern) im Wald.",
                "answer": "wanderst",
                "hint": ""
              }
            ]
          }
        ]
      },
      {
        "id": "u3-su5",
        "title": "Verbs ending in s, z, ß",
        "taskSets": [
          {
            "id": "u3-szss-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u3-szss-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise s/z/ß verbs: the 'du' form only adds -t instead of -st (du tanzt, du heißt).",
                "answer": ""
              },
              {
                "id": "u3-szss-s1-1",
                "type": "gap",
                "sentence": "Ich ___ (tanzen) gern.",
                "answer": "tanze",
                "hint": ""
              },
              {
                "id": "u3-szss-s1-2",
                "type": "gap",
                "sentence": "Wir ___ (tanzen).",
                "answer": "tanzen",
                "hint": ""
              },
              {
                "id": "u3-szss-s1-3",
                "type": "gap",
                "sentence": "Er ___ (heißen) Max.",
                "answer": "heißt",
                "hint": ""
              },
              {
                "id": "u3-szss-s1-4",
                "type": "gap",
                "sentence": "Du ___ (tanzen) gut.",
                "answer": "tanzt",
                "hint": ""
              },
              {
                "id": "u3-szss-s1-5",
                "type": "gap",
                "sentence": "Er ___ (tanzen).",
                "answer": "tanzt",
                "hint": ""
              },
              {
                "id": "u3-szss-s1-6",
                "type": "gap",
                "sentence": "Ich ___ (heißen) Tom.",
                "answer": "heiße",
                "hint": ""
              },
              {
                "id": "u3-szss-s1-7",
                "type": "gap",
                "sentence": "Wie ___ (heißen) du?",
                "answer": "heißt",
                "hint": ""
              },
              {
                "id": "u3-szss-s1-8",
                "type": "gap",
                "sentence": "Ich ___ (tanzen) gern.",
                "answer": "tanze",
                "hint": ""
              }
            ]
          },
          {
            "id": "u3-szss-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u3-szss-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise s/z/ß verbs: the 'du' form only adds -t instead of -st (du tanzt, du heißt).",
                "answer": ""
              },
              {
                "id": "u3-szss-s2-1",
                "type": "gap",
                "sentence": "Wir ___ (tanzen).",
                "answer": "tanzen",
                "hint": ""
              },
              {
                "id": "u3-szss-s2-2",
                "type": "gap",
                "sentence": "Ich ___ (tanzen) gern.",
                "answer": "tanze",
                "hint": ""
              },
              {
                "id": "u3-szss-s2-3",
                "type": "gap",
                "sentence": "Ich ___ (heißen) Tom.",
                "answer": "heiße",
                "hint": ""
              },
              {
                "id": "u3-szss-s2-4",
                "type": "gap",
                "sentence": "Er ___ (tanzen).",
                "answer": "tanzt",
                "hint": ""
              },
              {
                "id": "u3-szss-s2-5",
                "type": "gap",
                "sentence": "Du ___ (tanzen) gut.",
                "answer": "tanzt",
                "hint": ""
              },
              {
                "id": "u3-szss-s2-6",
                "type": "gap",
                "sentence": "Wie ___ (heißen) du?",
                "answer": "heißt",
                "hint": ""
              },
              {
                "id": "u3-szss-s2-7",
                "type": "gap",
                "sentence": "Er ___ (heißen) Max.",
                "answer": "heißt",
                "hint": ""
              },
              {
                "id": "u3-szss-s2-8",
                "type": "gap",
                "sentence": "Wir ___ (tanzen).",
                "answer": "tanzen",
                "hint": ""
              }
            ]
          },
          {
            "id": "u3-szss-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u3-szss-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise s/z/ß verbs: the 'du' form only adds -t instead of -st (du tanzt, du heißt).",
                "answer": ""
              },
              {
                "id": "u3-szss-s3-1",
                "type": "gap",
                "sentence": "Er ___ (heißen) Max.",
                "answer": "heißt",
                "hint": ""
              },
              {
                "id": "u3-szss-s3-2",
                "type": "gap",
                "sentence": "Du ___ (tanzen) gut.",
                "answer": "tanzt",
                "hint": ""
              },
              {
                "id": "u3-szss-s3-3",
                "type": "gap",
                "sentence": "Er ___ (tanzen).",
                "answer": "tanzt",
                "hint": ""
              },
              {
                "id": "u3-szss-s3-4",
                "type": "gap",
                "sentence": "Wie ___ (heißen) du?",
                "answer": "heißt",
                "hint": ""
              },
              {
                "id": "u3-szss-s3-5",
                "type": "gap",
                "sentence": "Ich ___ (tanzen) gern.",
                "answer": "tanze",
                "hint": ""
              },
              {
                "id": "u3-szss-s3-6",
                "type": "gap",
                "sentence": "Wir ___ (tanzen).",
                "answer": "tanzen",
                "hint": ""
              },
              {
                "id": "u3-szss-s3-7",
                "type": "gap",
                "sentence": "Ich ___ (heißen) Tom.",
                "answer": "heiße",
                "hint": ""
              },
              {
                "id": "u3-szss-s3-8",
                "type": "gap",
                "sentence": "Er ___ (heißen) Max.",
                "answer": "heißt",
                "hint": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "unit-4",
    "title": "Unit 4: Irregular verbs (present tense)",
    "explanation": "Irregular verbs in present tense change a->ä or e->i/ie.",
    "subunits": [
      {
        "id": "u4-su1",
        "title": "Change a to ä",
        "taskSets": [
          {
            "id": "u4-a-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u4-a-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise a to ä verbs: 'du' and 'er/sie/es' forms add an umlaut (e.g. du fährst, er fährt).",
                "answer": ""
              },
              {
                "id": "u4-a-s1-1",
                "type": "gap",
                "sentence": "Ihr ___ (tragen) Schuhe, aber du ___ (tragen) Stiefel.",
                "answer": [
                  "tragt",
                  "trägst"
                ],
                "hint": ""
              },
              {
                "id": "u4-a-s1-2",
                "type": "gap",
                "sentence": "Wir ___ (fahren) Zug, aber er ___ (fahren) Auto.",
                "answer": [
                  "fahren",
                  "fährt"
                ],
                "hint": ""
              },
              {
                "id": "u4-a-s1-3",
                "type": "gap",
                "sentence": "Ich ___ (halten) das Buch, aber sie ___ (halten - she) die Tasche.",
                "answer": [
                  "halte",
                  "hält"
                ],
                "hint": ""
              },
              {
                "id": "u4-a-s1-4",
                "type": "gap",
                "sentence": "Ich ___ (tragen) ein T-Shirt, aber er ___ (tragen) eine Jacke.",
                "answer": [
                  "trage",
                  "trägt"
                ],
                "hint": ""
              },
              {
                "id": "u4-a-s1-5",
                "type": "gap",
                "sentence": "Ich ___ (fahren) Rad, aber du ___ (fahren) Bus.",
                "answer": [
                  "fahre",
                  "fährst"
                ],
                "hint": ""
              },
              {
                "id": "u4-a-s1-6",
                "type": "gap",
                "sentence": "Ich ___ (fahren) Roller, aber sie ___ (fahren - she) Motorrad.",
                "answer": [
                  "fahre",
                  "fährt"
                ],
                "hint": ""
              },
              {
                "id": "u4-a-s1-7",
                "type": "gap",
                "sentence": "Ich ___ (laufen) schnell, aber er ___ (laufen) langsam.",
                "answer": [
                  "laufe",
                  "läuft"
                ],
                "hint": ""
              },
              {
                "id": "u4-a-s1-8",
                "type": "gap",
                "sentence": "Ich ___ (schlafen) lange, aber du ___ (schlafen) kurz.",
                "answer": [
                  "schlafe",
                  "schläfst"
                ],
                "hint": ""
              }
            ]
          },
          {
            "id": "u4-a-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u4-a-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise a to ä verbs: 'du' and 'er/sie/es' forms add an umlaut (e.g. du fährst, er fährt).",
                "answer": ""
              },
              {
                "id": "u4-a-s2-1",
                "type": "gap",
                "sentence": "Wir ___ (fallen) oft, aber das Kind ___ (fallen) nicht.",
                "answer": [
                  "fallen",
                  "fällt"
                ],
                "hint": ""
              },
              {
                "id": "u4-a-s2-2",
                "type": "gap",
                "sentence": "Ich ___ (tragen) ein T-Shirt, aber er ___ (tragen) eine Jacke.",
                "answer": [
                  "trage",
                  "trägt"
                ],
                "hint": ""
              },
              {
                "id": "u4-a-s2-3",
                "type": "gap",
                "sentence": "Ihr ___ (tragen) Schuhe, aber du ___ (tragen) Stiefel.",
                "answer": [
                  "tragt",
                  "trägst"
                ],
                "hint": ""
              },
              {
                "id": "u4-a-s2-4",
                "type": "gap",
                "sentence": "Ich ___ (halten) das Buch, aber sie ___ (halten - she) die Tasche.",
                "answer": [
                  "halte",
                  "hält"
                ],
                "hint": ""
              },
              {
                "id": "u4-a-s2-5",
                "type": "gap",
                "sentence": "Ich ___ (fahren) Rad, aber du ___ (fahren) Bus.",
                "answer": [
                  "fahre",
                  "fährst"
                ],
                "hint": ""
              },
              {
                "id": "u4-a-s2-6",
                "type": "gap",
                "sentence": "Ich ___ (schlafen) lange, aber du ___ (schlafen) kurz.",
                "answer": [
                  "schlafe",
                  "schläfst"
                ],
                "hint": ""
              },
              {
                "id": "u4-a-s2-7",
                "type": "gap",
                "sentence": "Ich ___ (fahren) Roller, aber sie ___ (fahren - she) Motorrad.",
                "answer": [
                  "fahre",
                  "fährt"
                ],
                "hint": ""
              },
              {
                "id": "u4-a-s2-8",
                "type": "gap",
                "sentence": "Ich ___ (laufen) schnell, aber er ___ (laufen) langsam.",
                "answer": [
                  "laufe",
                  "läuft"
                ],
                "hint": ""
              }
            ]
          },
          {
            "id": "u4-a-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u4-a-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise a to ä verbs: 'du' and 'er/sie/es' forms add an umlaut (e.g. du fährst, er fährt).",
                "answer": ""
              },
              {
                "id": "u4-a-s3-1",
                "type": "gap",
                "sentence": "Ich ___ (schlafen) lange, aber du ___ (schlafen) kurz.",
                "answer": [
                  "schlafe",
                  "schläfst"
                ],
                "hint": ""
              },
              {
                "id": "u4-a-s3-2",
                "type": "gap",
                "sentence": "Ich ___ (fahren) Rad, aber du ___ (fahren) Bus.",
                "answer": [
                  "fahre",
                  "fährst"
                ],
                "hint": ""
              },
              {
                "id": "u4-a-s3-3",
                "type": "gap",
                "sentence": "Wir ___ (fahren) Zug, aber er ___ (fahren) Auto.",
                "answer": [
                  "fahren",
                  "fährt"
                ],
                "hint": ""
              },
              {
                "id": "u4-a-s3-4",
                "type": "gap",
                "sentence": "Ihr ___ (tragen) Schuhe, aber du ___ (tragen) Stiefel.",
                "answer": [
                  "tragt",
                  "trägst"
                ],
                "hint": ""
              },
              {
                "id": "u4-a-s3-5",
                "type": "gap",
                "sentence": "Ich ___ (fahren) Roller, aber sie ___ (fahren - she) Motorrad.",
                "answer": [
                  "fahre",
                  "fährt"
                ],
                "hint": ""
              },
              {
                "id": "u4-a-s3-6",
                "type": "gap",
                "sentence": "Wir ___ (schlafen) im Bett, aber sie ___ (schlafen - she) auf dem Sofa.",
                "answer": [
                  "schlafen",
                  "schläft"
                ],
                "hint": ""
              },
              {
                "id": "u4-a-s3-7",
                "type": "gap",
                "sentence": "Ich ___ (halten) das Buch, aber sie ___ (halten - she) die Tasche.",
                "answer": [
                  "halte",
                  "hält"
                ],
                "hint": ""
              },
              {
                "id": "u4-a-s3-8",
                "type": "gap",
                "sentence": "Wir ___ (fallen) oft, aber das Kind ___ (fallen) nicht.",
                "answer": [
                  "fallen",
                  "fällt"
                ],
                "hint": ""
              }
            ]
          }
        ]
      },
      {
        "id": "u4-su2",
        "title": "Change e to i/ie",
        "taskSets": [
          {
            "id": "u4-e-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u4-e-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise e to i/ie verbs: 'du' and 'er/sie/es' forms change the vowel (e.g. du sprichst, er sieht).",
                "answer": ""
              },
              {
                "id": "u4-e-s1-1",
                "type": "gap",
                "sentence": "Wir ___ (sehen) das, aber er ___ (sehen) nichts.",
                "answer": [
                  "sehen",
                  "sieht"
                ],
                "hint": ""
              },
              {
                "id": "u4-e-s1-2",
                "type": "gap",
                "sentence": "Ich ___ (essen) Pizza, aber er ___ (essen) Salat.",
                "answer": [
                  "esse",
                  "isst"
                ],
                "hint": ""
              },
              {
                "id": "u4-e-s1-3",
                "type": "gap",
                "sentence": "Ich ___ (sprechen) Englisch, aber du ___ (sprechen) Deutsch.",
                "answer": [
                  "spreche",
                  "sprichst"
                ],
                "hint": ""
              },
              {
                "id": "u4-e-s1-4",
                "type": "gap",
                "sentence": "Ich ___ (lesen) ein Buch, aber du ___ (lesen) eine Zeitung.",
                "answer": [
                  "lese",
                  "liest"
                ],
                "hint": ""
              },
              {
                "id": "u4-e-s1-5",
                "type": "gap",
                "sentence": "Ich ___ (treffen) Freunde, aber sie ___ (treffen - she) den Lehrer.",
                "answer": [
                  "treffe",
                  "trifft"
                ],
                "hint": ""
              },
              {
                "id": "u4-e-s1-6",
                "type": "gap",
                "sentence": "Wir ___ (nehmen) Wasser, aber du ___ (nehmen) Cola.",
                "answer": [
                  "nehmen",
                  "nimmst"
                ],
                "hint": ""
              },
              {
                "id": "u4-e-s1-7",
                "type": "gap",
                "sentence": "Ihr ___ (geben) Geld, aber er ___ (geben) ein Buch.",
                "answer": [
                  "gebt",
                  "gibt"
                ],
                "hint": ""
              },
              {
                "id": "u4-e-s1-8",
                "type": "gap",
                "sentence": "Wir ___ (sehen) das, aber er ___ (sehen) nichts.",
                "answer": [
                  "sehen",
                  "sieht"
                ],
                "hint": ""
              }
            ]
          },
          {
            "id": "u4-e-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u4-e-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise e to i/ie verbs: 'du' and 'er/sie/es' forms change the vowel (e.g. du sprichst, er sieht).",
                "answer": ""
              },
              {
                "id": "u4-e-s2-1",
                "type": "gap",
                "sentence": "Ihr ___ (geben) Geld, aber er ___ (geben) ein Buch.",
                "answer": [
                  "gebt",
                  "gibt"
                ],
                "hint": ""
              },
              {
                "id": "u4-e-s2-2",
                "type": "gap",
                "sentence": "Ich ___ (sprechen) Englisch, aber du ___ (sprechen) Deutsch.",
                "answer": [
                  "spreche",
                  "sprichst"
                ],
                "hint": ""
              },
              {
                "id": "u4-e-s2-3",
                "type": "gap",
                "sentence": "Ich ___ (treffen) Freunde, aber sie ___ (treffen - she) den Lehrer.",
                "answer": [
                  "treffe",
                  "trifft"
                ],
                "hint": ""
              },
              {
                "id": "u4-e-s2-4",
                "type": "gap",
                "sentence": "Wir ___ (nehmen) Wasser, aber du ___ (nehmen) Cola.",
                "answer": [
                  "nehmen",
                  "nimmst"
                ],
                "hint": ""
              },
              {
                "id": "u4-e-s2-5",
                "type": "gap",
                "sentence": "Ich ___ (essen) Pizza, aber er ___ (essen) Salat.",
                "answer": [
                  "esse",
                  "isst"
                ],
                "hint": ""
              },
              {
                "id": "u4-e-s2-6",
                "type": "gap",
                "sentence": "Ich ___ (lesen) ein Buch, aber du ___ (lesen) eine Zeitung.",
                "answer": [
                  "lese",
                  "liest"
                ],
                "hint": ""
              },
              {
                "id": "u4-e-s2-7",
                "type": "gap",
                "sentence": "Wir ___ (sehen) das, aber er ___ (sehen) nichts.",
                "answer": [
                  "sehen",
                  "sieht"
                ],
                "hint": ""
              },
              {
                "id": "u4-e-s2-8",
                "type": "gap",
                "sentence": "Ihr ___ (geben) Geld, aber er ___ (geben) ein Buch.",
                "answer": [
                  "gebt",
                  "gibt"
                ],
                "hint": ""
              }
            ]
          },
          {
            "id": "u4-e-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u4-e-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise e to i/ie verbs: 'du' and 'er/sie/es' forms change the vowel (e.g. du sprichst, er sieht).",
                "answer": ""
              },
              {
                "id": "u4-e-s3-1",
                "type": "gap",
                "sentence": "Wir ___ (sehen) das, aber er ___ (sehen) nichts.",
                "answer": [
                  "sehen",
                  "sieht"
                ],
                "hint": ""
              },
              {
                "id": "u4-e-s3-2",
                "type": "gap",
                "sentence": "Ich ___ (sprechen) Englisch, aber du ___ (sprechen) Deutsch.",
                "answer": [
                  "spreche",
                  "sprichst"
                ],
                "hint": ""
              },
              {
                "id": "u4-e-s3-3",
                "type": "gap",
                "sentence": "Ich ___ (treffen) Freunde, aber sie ___ (treffen - she) den Lehrer.",
                "answer": [
                  "treffe",
                  "trifft"
                ],
                "hint": ""
              },
              {
                "id": "u4-e-s3-4",
                "type": "gap",
                "sentence": "Wir ___ (nehmen) Wasser, aber du ___ (nehmen) Cola.",
                "answer": [
                  "nehmen",
                  "nimmst"
                ],
                "hint": ""
              },
              {
                "id": "u4-e-s3-5",
                "type": "gap",
                "sentence": "Ihr ___ (geben) Geld, aber er ___ (geben) ein Buch.",
                "answer": [
                  "gebt",
                  "gibt"
                ],
                "hint": ""
              },
              {
                "id": "u4-e-s3-6",
                "type": "gap",
                "sentence": "Ich ___ (lesen) ein Buch, aber du ___ (lesen) eine Zeitung.",
                "answer": [
                  "lese",
                  "liest"
                ],
                "hint": ""
              },
              {
                "id": "u4-e-s3-7",
                "type": "gap",
                "sentence": "Ich ___ (essen) Pizza, aber er ___ (essen) Salat.",
                "answer": [
                  "esse",
                  "isst"
                ],
                "hint": ""
              },
              {
                "id": "u4-e-s3-8",
                "type": "gap",
                "sentence": "Wir ___ (sehen) das, aber er ___ (sehen) nichts.",
                "answer": [
                  "sehen",
                  "sieht"
                ],
                "hint": ""
              }
            ]
          }
        ]
      },
      {
        "id": "u4-su3",
        "title": "Mixed irregular verbs",
        "taskSets": [
          {
            "id": "u4-mix-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u4-mix-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Remember: irregular verbs only alter their stem vowel in the 'du' and 'er/sie/es' forms. Treat others regularly.",
                "answer": ""
              },
              {
                "id": "u4-mix-s1-1",
                "type": "gap",
                "sentence": "Wir ___ (fahren) Bus, aber er ___ (fahren) das Auto.",
                "answer": [
                  "fahren",
                  "fährt"
                ],
                "hint": ""
              },
              {
                "id": "u4-mix-s1-2",
                "type": "gap",
                "sentence": "Ihr ___ (schlafen) kurz, aber du ___ (schlafen) lange.",
                "answer": [
                  "schlaft",
                  "schläfst"
                ],
                "hint": ""
              },
              {
                "id": "u4-mix-s1-3",
                "type": "gap",
                "sentence": "Wir ___ (geben) Geld, aber sie ___ (geben - she) das Buch.",
                "answer": [
                  "geben",
                  "gibt"
                ],
                "hint": ""
              },
              {
                "id": "u4-mix-s1-4",
                "type": "gap",
                "sentence": "Wir ___ (sehen) einen Vogel, aber er ___ (sehen) nichts.",
                "answer": [
                  "sehen",
                  "sieht"
                ],
                "hint": ""
              },
              {
                "id": "u4-mix-s1-5",
                "type": "gap",
                "sentence": "Wir ___ (laufen) langsam, aber er ___ (laufen) schnell.",
                "answer": [
                  "laufen",
                  "läuft"
                ],
                "hint": ""
              },
              {
                "id": "u4-mix-s1-6",
                "type": "gap",
                "sentence": "Ihr ___ (lesen) nicht, aber du ___ (lesen) gern.",
                "answer": [
                  "lest",
                  "liest"
                ],
                "hint": ""
              },
              {
                "id": "u4-mix-s1-7",
                "type": "gap",
                "sentence": "Wir ___ (fahren) Bus, aber er ___ (fahren) das Auto.",
                "answer": [
                  "fahren",
                  "fährt"
                ],
                "hint": ""
              },
              {
                "id": "u4-mix-s1-8",
                "type": "gap",
                "sentence": "Ihr ___ (schlafen) kurz, aber du ___ (schlafen) lange.",
                "answer": [
                  "schlaft",
                  "schläfst"
                ],
                "hint": ""
              }
            ]
          },
          {
            "id": "u4-mix-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u4-mix-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Remember: irregular verbs only alter their stem vowel in the 'du' and 'er/sie/es' forms. Treat others regularly.",
                "answer": ""
              },
              {
                "id": "u4-mix-s2-1",
                "type": "gap",
                "sentence": "Wir ___ (fahren) Bus, aber er ___ (fahren) das Auto.",
                "answer": [
                  "fahren",
                  "fährt"
                ],
                "hint": ""
              },
              {
                "id": "u4-mix-s2-2",
                "type": "gap",
                "sentence": "Ihr ___ (schlafen) kurz, aber du ___ (schlafen) lange.",
                "answer": [
                  "schlaft",
                  "schläfst"
                ],
                "hint": ""
              },
              {
                "id": "u4-mix-s2-3",
                "type": "gap",
                "sentence": "Wir ___ (laufen) langsam, aber er ___ (laufen) schnell.",
                "answer": [
                  "laufen",
                  "läuft"
                ],
                "hint": ""
              },
              {
                "id": "u4-mix-s2-4",
                "type": "gap",
                "sentence": "Ihr ___ (lesen) nicht, aber du ___ (lesen) gern.",
                "answer": [
                  "lest",
                  "liest"
                ],
                "hint": ""
              },
              {
                "id": "u4-mix-s2-5",
                "type": "gap",
                "sentence": "Wir ___ (geben) Geld, aber sie ___ (geben - she) das Buch.",
                "answer": [
                  "geben",
                  "gibt"
                ],
                "hint": ""
              },
              {
                "id": "u4-mix-s2-6",
                "type": "gap",
                "sentence": "Wir ___ (sehen) einen Vogel, aber er ___ (sehen) nichts.",
                "answer": [
                  "sehen",
                  "sieht"
                ],
                "hint": ""
              },
              {
                "id": "u4-mix-s2-7",
                "type": "gap",
                "sentence": "Wir ___ (fahren) Bus, aber er ___ (fahren) das Auto.",
                "answer": [
                  "fahren",
                  "fährt"
                ],
                "hint": ""
              },
              {
                "id": "u4-mix-s2-8",
                "type": "gap",
                "sentence": "Ihr ___ (schlafen) kurz, aber du ___ (schlafen) lange.",
                "answer": [
                  "schlaft",
                  "schläfst"
                ],
                "hint": ""
              }
            ]
          },
          {
            "id": "u4-mix-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u4-mix-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Remember: irregular verbs only alter their stem vowel in the 'du' and 'er/sie/es' forms. Treat others regularly.",
                "answer": ""
              },
              {
                "id": "u4-mix-s3-1",
                "type": "gap",
                "sentence": "Ihr ___ (lesen) nicht, aber du ___ (lesen) gern.",
                "answer": [
                  "lest",
                  "liest"
                ],
                "hint": ""
              },
              {
                "id": "u4-mix-s3-2",
                "type": "gap",
                "sentence": "Wir ___ (geben) Geld, aber sie ___ (geben - she) das Buch.",
                "answer": [
                  "geben",
                  "gibt"
                ],
                "hint": ""
              },
              {
                "id": "u4-mix-s3-3",
                "type": "gap",
                "sentence": "Wir ___ (fahren) Bus, aber er ___ (fahren) das Auto.",
                "answer": [
                  "fahren",
                  "fährt"
                ],
                "hint": ""
              },
              {
                "id": "u4-mix-s3-4",
                "type": "gap",
                "sentence": "Ihr ___ (schlafen) kurz, aber du ___ (schlafen) lange.",
                "answer": [
                  "schlaft",
                  "schläfst"
                ],
                "hint": ""
              },
              {
                "id": "u4-mix-s3-5",
                "type": "gap",
                "sentence": "Wir ___ (sehen) einen Vogel, aber er ___ (sehen) nichts.",
                "answer": [
                  "sehen",
                  "sieht"
                ],
                "hint": ""
              },
              {
                "id": "u4-mix-s3-6",
                "type": "gap",
                "sentence": "Wir ___ (laufen) langsam, aber er ___ (laufen) schnell.",
                "answer": [
                  "laufen",
                  "läuft"
                ],
                "hint": ""
              },
              {
                "id": "u4-mix-s3-7",
                "type": "gap",
                "sentence": "Ihr ___ (lesen) nicht, aber du ___ (lesen) gern.",
                "answer": [
                  "lest",
                  "liest"
                ],
                "hint": ""
              },
              {
                "id": "u4-mix-s3-8",
                "type": "gap",
                "sentence": "Wir ___ (geben) Geld, aber sie ___ (geben - she) das Buch.",
                "answer": [
                  "geben",
                  "gibt"
                ],
                "hint": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "unit-5",
    "title": "Unit 5: Separable verbs",
    "explanation": "Prefix separates and goes to the end of the sentence.",
    "subunits": [
      {
        "id": "u5-su1",
        "title": "Separable verbs (Word Order)",
        "taskSets": [
          {
            "id": "u5-order-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u5-order-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Arrange the words in the correct order to form a valid German sentence. Pay attention to word order rules (like verb position) and verb forms you've learned.",
                "answer": ""
              },
              {
                "id": "u5-order-s1-1",
                "type": "order",
                "sentence": "You all borrow a book.",
                "answer": "Ihr leiht ein Buch aus.",
                "orderTokens": [
                  "Ihr",
                  "ein",
                  "aus",
                  ".",
                  "leiht",
                  "Buch"
                ],
                "hint": ""
              },
              {
                "id": "u5-order-s1-2",
                "type": "order",
                "sentence": "He watches TV today.",
                "answer": "Er sieht heute fern.",
                "orderTokens": [
                  ".",
                  "Er",
                  "heute",
                  "sieht",
                  "fern"
                ],
                "hint": ""
              },
              {
                "id": "u5-order-s1-3",
                "type": "order",
                "sentence": "I wake up early.",
                "answer": "Ich stehe früh auf.",
                "orderTokens": [
                  "früh",
                  "stehe",
                  "auf",
                  "Ich",
                  "."
                ],
                "hint": ""
              },
              {
                "id": "u5-order-s1-4",
                "type": "order",
                "sentence": "We shop in the supermarket.",
                "answer": "Wir kaufen im Supermarkt ein.",
                "orderTokens": [
                  "ein",
                  "Wir",
                  ".",
                  "Supermarkt",
                  "im",
                  "kaufen"
                ],
                "hint": ""
              },
              {
                "id": "u5-order-s1-5",
                "type": "order",
                "sentence": "She puts on the jacket.",
                "answer": "Sie zieht die Jacke an.",
                "orderTokens": [
                  ".",
                  "Jacke",
                  "an",
                  "zieht",
                  "die",
                  "Sie"
                ],
                "hint": ""
              },
              {
                "id": "u5-order-s1-6",
                "type": "order",
                "sentence": "They take off the shoes.",
                "answer": "Sie ziehen die Schuhe aus.",
                "orderTokens": [
                  "Schuhe",
                  "Sie",
                  "aus",
                  "die",
                  "ziehen",
                  "."
                ],
                "hint": ""
              },
              {
                "id": "u5-order-s1-7",
                "type": "order",
                "sentence": "I have my book with me.",
                "answer": "Ich habe mein Buch dabei.",
                "orderTokens": [
                  "habe",
                  "Ich",
                  "Buch",
                  "mein",
                  "dabei",
                  "."
                ],
                "hint": ""
              },
              {
                "id": "u5-order-s1-8",
                "type": "order",
                "sentence": "I pack my bag.",
                "answer": "Ich packe meine Tasche ein.",
                "orderTokens": [
                  "packe",
                  "Ich",
                  "Tasche",
                  ".",
                  "meine",
                  "ein"
                ],
                "hint": ""
              }
            ]
          },
          {
            "id": "u5-order-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u5-order-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Arrange the words in the correct order to form a valid German sentence. Pay attention to word order rules (like verb position) and verb forms you've learned.",
                "answer": ""
              },
              {
                "id": "u5-order-s2-1",
                "type": "order",
                "sentence": "You all borrow a book.",
                "answer": "Ihr leiht ein Buch aus.",
                "orderTokens": [
                  "aus",
                  "ein",
                  "Buch",
                  ".",
                  "leiht",
                  "Ihr"
                ],
                "hint": ""
              },
              {
                "id": "u5-order-s2-2",
                "type": "order",
                "sentence": "She wears a jacket.",
                "answer": "Sie hat eine Jacke an.",
                "orderTokens": [
                  "an",
                  "hat",
                  ".",
                  "Jacke",
                  "eine",
                  "Sie"
                ],
                "hint": ""
              },
              {
                "id": "u5-order-s2-3",
                "type": "order",
                "sentence": "I wake up early.",
                "answer": "Ich stehe früh auf.",
                "orderTokens": [
                  "auf",
                  "früh",
                  ".",
                  "Ich",
                  "stehe"
                ],
                "hint": ""
              },
              {
                "id": "u5-order-s2-4",
                "type": "order",
                "sentence": "I have my book with me.",
                "answer": "Ich habe mein Buch dabei.",
                "orderTokens": [
                  "dabei",
                  "Ich",
                  ".",
                  "Buch",
                  "mein",
                  "habe"
                ],
                "hint": ""
              },
              {
                "id": "u5-order-s2-5",
                "type": "order",
                "sentence": "He watches TV today.",
                "answer": "Er sieht heute fern.",
                "orderTokens": [
                  "Er",
                  "heute",
                  "fern",
                  ".",
                  "sieht"
                ],
                "hint": ""
              },
              {
                "id": "u5-order-s2-6",
                "type": "order",
                "sentence": "I pack my bag.",
                "answer": "Ich packe meine Tasche ein.",
                "orderTokens": [
                  "meine",
                  "Ich",
                  "packe",
                  "ein",
                  "Tasche",
                  "."
                ],
                "hint": ""
              },
              {
                "id": "u5-order-s2-7",
                "type": "order",
                "sentence": "We shop in the supermarket.",
                "answer": "Wir kaufen im Supermarkt ein.",
                "orderTokens": [
                  ".",
                  "ein",
                  "kaufen",
                  "Supermarkt",
                  "Wir",
                  "im"
                ],
                "hint": ""
              },
              {
                "id": "u5-order-s2-8",
                "type": "order",
                "sentence": "She puts on the jacket.",
                "answer": "Sie zieht die Jacke an.",
                "orderTokens": [
                  "an",
                  "Jacke",
                  ".",
                  "zieht",
                  "die",
                  "Sie"
                ],
                "hint": ""
              }
            ]
          },
          {
            "id": "u5-order-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u5-order-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Arrange the words in the correct order to form a valid German sentence. Pay attention to word order rules (like verb position) and verb forms you've learned.",
                "answer": ""
              },
              {
                "id": "u5-order-s3-1",
                "type": "order",
                "sentence": "I wake up early.",
                "answer": "Ich stehe früh auf.",
                "orderTokens": [
                  "früh",
                  "auf",
                  "stehe",
                  ".",
                  "Ich"
                ],
                "hint": ""
              },
              {
                "id": "u5-order-s3-2",
                "type": "order",
                "sentence": "We shop in the supermarket.",
                "answer": "Wir kaufen im Supermarkt ein.",
                "orderTokens": [
                  "kaufen",
                  ".",
                  "im",
                  "Wir",
                  "ein",
                  "Supermarkt"
                ],
                "hint": ""
              },
              {
                "id": "u5-order-s3-3",
                "type": "order",
                "sentence": "She puts on the jacket.",
                "answer": "Sie zieht die Jacke an.",
                "orderTokens": [
                  "zieht",
                  "Sie",
                  "an",
                  "Jacke",
                  "die",
                  "."
                ],
                "hint": ""
              },
              {
                "id": "u5-order-s3-4",
                "type": "order",
                "sentence": "He watches TV today.",
                "answer": "Er sieht heute fern.",
                "orderTokens": [
                  "sieht",
                  ".",
                  "Er",
                  "fern",
                  "heute"
                ],
                "hint": ""
              },
              {
                "id": "u5-order-s3-5",
                "type": "order",
                "sentence": "They take off the shoes.",
                "answer": "Sie ziehen die Schuhe aus.",
                "orderTokens": [
                  "aus",
                  "Schuhe",
                  "Sie",
                  ".",
                  "die",
                  "ziehen"
                ],
                "hint": ""
              },
              {
                "id": "u5-order-s3-6",
                "type": "order",
                "sentence": "She wears a jacket.",
                "answer": "Sie hat eine Jacke an.",
                "orderTokens": [
                  "hat",
                  "Jacke",
                  "eine",
                  ".",
                  "Sie",
                  "an"
                ],
                "hint": ""
              },
              {
                "id": "u5-order-s3-7",
                "type": "order",
                "sentence": "I have my book with me.",
                "answer": "Ich habe mein Buch dabei.",
                "orderTokens": [
                  "dabei",
                  ".",
                  "mein",
                  "habe",
                  "Ich",
                  "Buch"
                ],
                "hint": ""
              },
              {
                "id": "u5-order-s3-8",
                "type": "order",
                "sentence": "I pack my bag.",
                "answer": "Ich packe meine Tasche ein.",
                "orderTokens": [
                  "meine",
                  "ein",
                  "Tasche",
                  ".",
                  "packe",
                  "Ich"
                ],
                "hint": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "unit-6",
    "title": "Unit 6: Perfect tense",
    "explanation": "Perfect tense with regular, irregular, and separable verbs. We use 'haben' exclusively for now to practice the Partizip II forms.",
    "subunits": [
      {
        "id": "u6-su1",
        "title": "Regular perfect tense - ge..t",
        "taskSets": [
          {
            "id": "u6-reg-t1-s1",
            "title": "Task 1: Type Participle 1",
            "exercises": [
              {
                "id": "u6-reg-t1-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Type the correct German word or phrase for the given English translation or context to solve the tasks.",
                "answer": ""
              },
              {
                "id": "u6-reg-t1-s1-1",
                "type": "type",
                "sentence": "wohnen -> ?",
                "answer": "gewohnt",
                "hint": ""
              },
              {
                "id": "u6-reg-t1-s1-2",
                "type": "type",
                "sentence": "spielen -> ?",
                "answer": "gespielt",
                "hint": ""
              },
              {
                "id": "u6-reg-t1-s1-3",
                "type": "type",
                "sentence": "packen -> ?",
                "answer": "gepackt",
                "hint": ""
              },
              {
                "id": "u6-reg-t1-s1-4",
                "type": "type",
                "sentence": "machen -> ?",
                "answer": "gemacht",
                "hint": ""
              },
              {
                "id": "u6-reg-t1-s1-5",
                "type": "type",
                "sentence": "schmecken -> ?",
                "answer": "geschmeckt",
                "hint": ""
              },
              {
                "id": "u6-reg-t1-s1-6",
                "type": "type",
                "sentence": "hören -> ?",
                "answer": "gehört",
                "hint": ""
              },
              {
                "id": "u6-reg-t1-s1-7",
                "type": "type",
                "sentence": "kaufen -> ?",
                "answer": "gekauft",
                "hint": ""
              },
              {
                "id": "u6-reg-t1-s1-8",
                "type": "type",
                "sentence": "suchen -> ?",
                "answer": "gesucht",
                "hint": ""
              }
            ]
          },
          {
            "id": "u6-reg-t2-s1",
            "title": "Task 2: Gap Fill 1",
            "exercises": [
              {
                "id": "u6-reg-t2-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Read the sentence and figure out the missing word. Think about the rules you've learned in this unit to solve the tasks.",
                "answer": ""
              },
              {
                "id": "u6-reg-t2-s1-1",
                "type": "gap",
                "sentence": "Du hast Musik ___ (hören).",
                "answer": "gehört",
                "hint": ""
              },
              {
                "id": "u6-reg-t2-s1-2",
                "type": "gap",
                "sentence": "Sie hat die Brille ___ (suchen).",
                "answer": "gesucht",
                "hint": ""
              },
              {
                "id": "u6-reg-t2-s1-3",
                "type": "gap",
                "sentence": "Er hat ein Foto ___ (machen).",
                "answer": "gemacht",
                "hint": ""
              },
              {
                "id": "u6-reg-t2-s1-4",
                "type": "gap",
                "sentence": "Wir haben ein Buch ___ (kaufen).",
                "answer": "gekauft",
                "hint": ""
              },
              {
                "id": "u6-reg-t2-s1-5",
                "type": "gap",
                "sentence": "Ich habe Tennis ___ (spielen).",
                "answer": "gespielt",
                "hint": ""
              },
              {
                "id": "u6-reg-t2-s1-6",
                "type": "gap",
                "sentence": "Du hast Musik ___ (hören).",
                "answer": "gehört",
                "hint": ""
              },
              {
                "id": "u6-reg-t2-s1-7",
                "type": "gap",
                "sentence": "Sie hat die Brille ___ (suchen).",
                "answer": "gesucht",
                "hint": ""
              },
              {
                "id": "u6-reg-t2-s1-8",
                "type": "gap",
                "sentence": "Er hat ein Foto ___ (machen).",
                "answer": "gemacht",
                "hint": ""
              }
            ]
          },
          {
            "id": "u6-reg-t3-s1",
            "title": "Task 3: Word Order 1",
            "exercises": [
              {
                "id": "u6-reg-t3-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Arrange the words in the correct order to form a valid German sentence. Pay attention to word order rules (like verb position) and verb forms you've learned.",
                "answer": ""
              },
              {
                "id": "u6-reg-t3-s1-1",
                "type": "order",
                "sentence": "I have played tennis.",
                "answer": "Ich habe Tennis gespielt.",
                "orderTokens": [
                  ".",
                  "gespielt",
                  "habe",
                  "Tennis",
                  "Ich"
                ],
                "hint": ""
              },
              {
                "id": "u6-reg-t3-s1-2",
                "type": "order",
                "sentence": "We have bought a book.",
                "answer": "Wir haben ein Buch gekauft.",
                "orderTokens": [
                  ".",
                  "Wir",
                  "gekauft",
                  "haben",
                  "ein",
                  "Buch"
                ],
                "hint": ""
              },
              {
                "id": "u6-reg-t3-s1-3",
                "type": "order",
                "sentence": "He has searched for a dog.",
                "answer": "Er hat einen Hund gesucht.",
                "orderTokens": [
                  "hat",
                  "gesucht",
                  "einen",
                  "Hund",
                  "Er",
                  "."
                ],
                "hint": ""
              },
              {
                "id": "u6-reg-t3-s1-4",
                "type": "order",
                "sentence": "She has heard music.",
                "answer": "Sie hat Musik gehört.",
                "orderTokens": [
                  "gehört",
                  "Musik",
                  ".",
                  "hat",
                  "Sie"
                ],
                "hint": ""
              },
              {
                "id": "u6-reg-t3-s1-5",
                "type": "order",
                "sentence": "I have played tennis.",
                "answer": "Ich habe Tennis gespielt.",
                "orderTokens": [
                  ".",
                  "Ich",
                  "gespielt",
                  "habe",
                  "Tennis"
                ],
                "hint": ""
              },
              {
                "id": "u6-reg-t3-s1-6",
                "type": "order",
                "sentence": "We have bought a book.",
                "answer": "Wir haben ein Buch gekauft.",
                "orderTokens": [
                  "Wir",
                  "haben",
                  "ein",
                  "gekauft",
                  ".",
                  "Buch"
                ],
                "hint": ""
              },
              {
                "id": "u6-reg-t3-s1-7",
                "type": "order",
                "sentence": "He has searched for a dog.",
                "answer": "Er hat einen Hund gesucht.",
                "orderTokens": [
                  "Er",
                  "gesucht",
                  "einen",
                  ".",
                  "hat",
                  "Hund"
                ],
                "hint": ""
              },
              {
                "id": "u6-reg-t3-s1-8",
                "type": "order",
                "sentence": "She has heard music.",
                "answer": "Sie hat Musik gehört.",
                "orderTokens": [
                  "Musik",
                  ".",
                  "hat",
                  "gehört",
                  "Sie"
                ],
                "hint": ""
              }
            ]
          },
          {
            "id": "u6-reg-t4-s1",
            "title": "Task 4: Word Order - form change 1",
            "exercises": [
              {
                "id": "u6-reg-t4-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Arrange the words in the correct order to form a valid German sentence. Pay attention to word order rules (like verb position) and verb forms you've learned.",
                "answer": ""
              },
              {
                "id": "u6-reg-t4-s1-1",
                "type": "order",
                "sentence": "You must change the verb form! (We have bought...)",
                "answer": "Wir haben ein Buch gekauft.",
                "orderTokens": [
                  "haben",
                  "Buch",
                  "Wir",
                  "ein",
                  "(kaufen)"
                ],
                "hint": ""
              },
              {
                "id": "u6-reg-t4-s1-2",
                "type": "order",
                "sentence": "You must change the verb form! (I have played...)",
                "answer": "Ich habe Tennis gespielt.",
                "orderTokens": [
                  "habe",
                  "Ich",
                  "(spielen)",
                  "Tennis"
                ],
                "hint": ""
              },
              {
                "id": "u6-reg-t4-s1-3",
                "type": "order",
                "sentence": "You must change the verb form! (He has searched...)",
                "answer": "Er hat einen Hund gesucht.",
                "orderTokens": [
                  "Er",
                  "(suchen)",
                  "einen",
                  "Hund",
                  "hat"
                ],
                "hint": ""
              },
              {
                "id": "u6-reg-t4-s1-4",
                "type": "order",
                "sentence": "You must change the verb form! (We have bought...)",
                "answer": "Wir haben ein Buch gekauft.",
                "orderTokens": [
                  "Buch",
                  "(kaufen)",
                  "Wir",
                  "haben",
                  "ein"
                ],
                "hint": ""
              },
              {
                "id": "u6-reg-t4-s1-5",
                "type": "order",
                "sentence": "You must change the verb form! (I have played...)",
                "answer": "Ich habe Tennis gespielt.",
                "orderTokens": [
                  "Tennis",
                  "Ich",
                  "habe",
                  "(spielen)"
                ],
                "hint": ""
              },
              {
                "id": "u6-reg-t4-s1-6",
                "type": "order",
                "sentence": "You must change the verb form! (He has searched...)",
                "answer": "Er hat einen Hund gesucht.",
                "orderTokens": [
                  "hat",
                  "einen",
                  "(suchen)",
                  "Hund",
                  "Er"
                ],
                "hint": ""
              },
              {
                "id": "u6-reg-t4-s1-7",
                "type": "order",
                "sentence": "You must change the verb form! (We have bought...)",
                "answer": "Wir haben ein Buch gekauft.",
                "orderTokens": [
                  "Buch",
                  "ein",
                  "Wir",
                  "(kaufen)",
                  "haben"
                ],
                "hint": ""
              },
              {
                "id": "u6-reg-t4-s1-8",
                "type": "order",
                "sentence": "You must change the verb form! (I have played...)",
                "answer": "Ich habe Tennis gespielt.",
                "orderTokens": [
                  "Ich",
                  "(spielen)",
                  "Tennis",
                  "habe"
                ],
                "hint": ""
              }
            ]
          }
        ]
      },
      {
        "id": "u6-su2",
        "title": "Irregular perfect tense",
        "taskSets": [
          {
            "id": "u6-irr-t1-s1",
            "title": "Task 1: Type Participle 1",
            "exercises": [
              {
                "id": "u6-irr-t1-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Type the correct German word or phrase for the given English translation or context to solve the tasks.",
                "answer": ""
              },
              {
                "id": "u6-irr-t1-s1-1",
                "type": "type",
                "sentence": "singen -> ?",
                "answer": "gesungen",
                "hint": ""
              },
              {
                "id": "u6-irr-t1-s1-2",
                "type": "type",
                "sentence": "treffen -> ?",
                "answer": "getroffen",
                "hint": ""
              },
              {
                "id": "u6-irr-t1-s1-3",
                "type": "type",
                "sentence": "finden -> ?",
                "answer": "gefunden",
                "hint": ""
              },
              {
                "id": "u6-irr-t1-s1-4",
                "type": "type",
                "sentence": "trinken -> ?",
                "answer": "getrunken",
                "hint": ""
              },
              {
                "id": "u6-irr-t1-s1-5",
                "type": "type",
                "sentence": "nehmen -> ?",
                "answer": "genommen",
                "hint": ""
              },
              {
                "id": "u6-irr-t1-s1-6",
                "type": "type",
                "sentence": "essen -> ?",
                "answer": "gegessen",
                "hint": ""
              },
              {
                "id": "u6-irr-t1-s1-7",
                "type": "type",
                "sentence": "lesen -> ?",
                "answer": "gelesen",
                "hint": ""
              },
              {
                "id": "u6-irr-t1-s1-8",
                "type": "type",
                "sentence": "sehen -> ?",
                "answer": "gesehen",
                "hint": ""
              }
            ]
          },
          {
            "id": "u6-irr-t2-s1",
            "title": "Task 2: Gap Fill 1",
            "exercises": [
              {
                "id": "u6-irr-t2-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Read the sentence and figure out the missing word. Think about the rules you've learned in this unit to solve the tasks.",
                "answer": ""
              },
              {
                "id": "u6-irr-t2-s1-1",
                "type": "gap",
                "sentence": "Wir haben Wasser ___ (trinken).",
                "answer": "getrunken",
                "hint": ""
              },
              {
                "id": "u6-irr-t2-s1-2",
                "type": "gap",
                "sentence": "Sie hat den Schlüssel ___ (finden).",
                "answer": "gefunden",
                "hint": ""
              },
              {
                "id": "u6-irr-t2-s1-3",
                "type": "gap",
                "sentence": "Ich habe ein Buch ___ (lesen).",
                "answer": "gelesen",
                "hint": ""
              },
              {
                "id": "u6-irr-t2-s1-4",
                "type": "gap",
                "sentence": "Er hat Pizza ___ (essen).",
                "answer": "gegessen",
                "hint": ""
              },
              {
                "id": "u6-irr-t2-s1-5",
                "type": "gap",
                "sentence": "Wir haben Wasser ___ (trinken).",
                "answer": "getrunken",
                "hint": ""
              },
              {
                "id": "u6-irr-t2-s1-6",
                "type": "gap",
                "sentence": "Sie hat den Schlüssel ___ (finden).",
                "answer": "gefunden",
                "hint": ""
              },
              {
                "id": "u6-irr-t2-s1-7",
                "type": "gap",
                "sentence": "Ich habe ein Buch ___ (lesen).",
                "answer": "gelesen",
                "hint": ""
              },
              {
                "id": "u6-irr-t2-s1-8",
                "type": "gap",
                "sentence": "Er hat Pizza ___ (essen).",
                "answer": "gegessen",
                "hint": ""
              }
            ]
          },
          {
            "id": "u6-irr-t3-s1",
            "title": "Task 3: Word Order 1",
            "exercises": [
              {
                "id": "u6-irr-t3-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Arrange the words in the correct order to form a valid German sentence. Pay attention to word order rules (like verb position) and verb forms you've learned.",
                "answer": ""
              },
              {
                "id": "u6-irr-t3-s1-1",
                "type": "order",
                "sentence": "We have seen a film.",
                "answer": "Wir haben einen Film gesehen.",
                "orderTokens": [
                  "Wir",
                  "Film",
                  ".",
                  "haben",
                  "gesehen",
                  "einen"
                ],
                "hint": ""
              },
              {
                "id": "u6-irr-t3-s1-2",
                "type": "order",
                "sentence": "He has eaten pizza.",
                "answer": "Er hat Pizza gegessen.",
                "orderTokens": [
                  "hat",
                  "gegessen",
                  "Pizza",
                  ".",
                  "Er"
                ],
                "hint": ""
              },
              {
                "id": "u6-irr-t3-s1-3",
                "type": "order",
                "sentence": "She has drunk water.",
                "answer": "Sie hat Wasser getrunken.",
                "orderTokens": [
                  "hat",
                  "Wasser",
                  ".",
                  "Sie",
                  "getrunken"
                ],
                "hint": ""
              },
              {
                "id": "u6-irr-t3-s1-4",
                "type": "order",
                "sentence": "I have read a book.",
                "answer": "Ich habe ein Buch gelesen.",
                "orderTokens": [
                  "Ich",
                  "gelesen",
                  ".",
                  "ein",
                  "Buch",
                  "habe"
                ],
                "hint": ""
              },
              {
                "id": "u6-irr-t3-s1-5",
                "type": "order",
                "sentence": "We have seen a film.",
                "answer": "Wir haben einen Film gesehen.",
                "orderTokens": [
                  ".",
                  "gesehen",
                  "haben",
                  "einen",
                  "Wir",
                  "Film"
                ],
                "hint": ""
              },
              {
                "id": "u6-irr-t3-s1-6",
                "type": "order",
                "sentence": "He has eaten pizza.",
                "answer": "Er hat Pizza gegessen.",
                "orderTokens": [
                  "gegessen",
                  "Er",
                  "Pizza",
                  "hat",
                  "."
                ],
                "hint": ""
              },
              {
                "id": "u6-irr-t3-s1-7",
                "type": "order",
                "sentence": "She has drunk water.",
                "answer": "Sie hat Wasser getrunken.",
                "orderTokens": [
                  "Wasser",
                  ".",
                  "getrunken",
                  "hat",
                  "Sie"
                ],
                "hint": ""
              },
              {
                "id": "u6-irr-t3-s1-8",
                "type": "order",
                "sentence": "I have read a book.",
                "answer": "Ich habe ein Buch gelesen.",
                "orderTokens": [
                  "Buch",
                  "gelesen",
                  "Ich",
                  "ein",
                  ".",
                  "habe"
                ],
                "hint": ""
              }
            ]
          },
          {
            "id": "u6-irr-t4-s1",
            "title": "Task 4: Word Order - form change 1",
            "exercises": [
              {
                "id": "u6-irr-t4-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Arrange the words in the correct order to form a valid German sentence. Pay attention to word order rules (like verb position) and verb forms you've learned.",
                "answer": ""
              },
              {
                "id": "u6-irr-t4-s1-1",
                "type": "order",
                "sentence": "Make the perfect tense sentence! (I have read a book.)",
                "answer": "Ich habe ein Buch gelesen.",
                "orderTokens": [
                  "habe",
                  "(lesen)",
                  "Buch",
                  "ein",
                  "Ich"
                ],
                "hint": ""
              },
              {
                "id": "u6-irr-t4-s1-2",
                "type": "order",
                "sentence": "Make the perfect tense sentence! (She has drunk water.)",
                "answer": "Sie hat Wasser getrunken.",
                "orderTokens": [
                  "Wasser",
                  "(trinken)",
                  "Sie",
                  "hat"
                ],
                "hint": ""
              },
              {
                "id": "u6-irr-t4-s1-3",
                "type": "order",
                "sentence": "Make the perfect tense sentence! (He has eaten pizza.)",
                "answer": "Er hat Pizza gegessen.",
                "orderTokens": [
                  "Er",
                  "(essen)",
                  "hat",
                  "Pizza"
                ],
                "hint": ""
              },
              {
                "id": "u6-irr-t4-s1-4",
                "type": "order",
                "sentence": "Make the perfect tense sentence! (I have read a book.)",
                "answer": "Ich habe ein Buch gelesen.",
                "orderTokens": [
                  "ein",
                  "(lesen)",
                  "Ich",
                  "habe",
                  "Buch"
                ],
                "hint": ""
              },
              {
                "id": "u6-irr-t4-s1-5",
                "type": "order",
                "sentence": "Make the perfect tense sentence! (She has drunk water.)",
                "answer": "Sie hat Wasser getrunken.",
                "orderTokens": [
                  "hat",
                  "(trinken)",
                  "Wasser",
                  "Sie"
                ],
                "hint": ""
              },
              {
                "id": "u6-irr-t4-s1-6",
                "type": "order",
                "sentence": "Make the perfect tense sentence! (He has eaten pizza.)",
                "answer": "Er hat Pizza gegessen.",
                "orderTokens": [
                  "Er",
                  "hat",
                  "(essen)",
                  "Pizza"
                ],
                "hint": ""
              },
              {
                "id": "u6-irr-t4-s1-7",
                "type": "order",
                "sentence": "Make the perfect tense sentence! (I have read a book.)",
                "answer": "Ich habe ein Buch gelesen.",
                "orderTokens": [
                  "(lesen)",
                  "Buch",
                  "Ich",
                  "habe",
                  "ein"
                ],
                "hint": ""
              },
              {
                "id": "u6-irr-t4-s1-8",
                "type": "order",
                "sentence": "Make the perfect tense sentence! (She has drunk water.)",
                "answer": "Sie hat Wasser getrunken.",
                "orderTokens": [
                  "hat",
                  "Sie",
                  "(trinken)",
                  "Wasser"
                ],
                "hint": ""
              }
            ]
          }
        ]
      },
      {
        "id": "u6-su3",
        "title": "Separable verbs",
        "taskSets": [
          {
            "id": "u6-sep-t1-s1",
            "title": "Task 1: Type Participle 1",
            "exercises": [
              {
                "id": "u6-sep-t1-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Type the correct German word or phrase for the given English translation or context to solve the tasks.",
                "answer": ""
              },
              {
                "id": "u6-sep-t1-s1-1",
                "type": "type",
                "sentence": "ausziehen -> ?",
                "answer": "ausgezogen",
                "hint": ""
              },
              {
                "id": "u6-sep-t1-s1-2",
                "type": "type",
                "sentence": "fernsehen -> ?",
                "answer": "ferngesehen",
                "hint": ""
              },
              {
                "id": "u6-sep-t1-s1-3",
                "type": "type",
                "sentence": "ausleihen -> ?",
                "answer": "ausgeliehen",
                "hint": ""
              },
              {
                "id": "u6-sep-t1-s1-4",
                "type": "type",
                "sentence": "anziehen -> ?",
                "answer": "angezogen",
                "hint": ""
              },
              {
                "id": "u6-sep-t1-s1-5",
                "type": "type",
                "sentence": "einkaufen -> ?",
                "answer": "eingekauft",
                "hint": ""
              },
              {
                "id": "u6-sep-t1-s1-6",
                "type": "type",
                "sentence": "ausziehen -> ?",
                "answer": "ausgezogen",
                "hint": ""
              },
              {
                "id": "u6-sep-t1-s1-7",
                "type": "type",
                "sentence": "fernsehen -> ?",
                "answer": "ferngesehen",
                "hint": ""
              },
              {
                "id": "u6-sep-t1-s1-8",
                "type": "type",
                "sentence": "ausleihen -> ?",
                "answer": "ausgeliehen",
                "hint": ""
              }
            ]
          },
          {
            "id": "u6-sep-t2-s1",
            "title": "Task 2: Gap Fill 1",
            "exercises": [
              {
                "id": "u6-sep-t2-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Read the sentence and figure out the missing word. Think about the rules you've learned in this unit to solve the tasks.",
                "answer": ""
              },
              {
                "id": "u6-sep-t2-s1-1",
                "type": "gap",
                "sentence": "Sie hat den Kuli ___ (dabeihaben).",
                "answer": "dabeigehabt",
                "hint": ""
              },
              {
                "id": "u6-sep-t2-s1-2",
                "type": "gap",
                "sentence": "Ich habe im Supermarkt ___ (einkaufen).",
                "answer": "eingekauft",
                "hint": ""
              },
              {
                "id": "u6-sep-t2-s1-3",
                "type": "gap",
                "sentence": "Wir haben gestern ___ (fernsehen).",
                "answer": "ferngesehen",
                "hint": ""
              },
              {
                "id": "u6-sep-t2-s1-4",
                "type": "gap",
                "sentence": "Du hast die Schuhe ___ (anziehen).",
                "answer": "angezogen",
                "hint": ""
              },
              {
                "id": "u6-sep-t2-s1-5",
                "type": "gap",
                "sentence": "Sie hat den Kuli ___ (dabeihaben).",
                "answer": "dabeigehabt",
                "hint": ""
              },
              {
                "id": "u6-sep-t2-s1-6",
                "type": "gap",
                "sentence": "Ich habe im Supermarkt ___ (einkaufen).",
                "answer": "eingekauft",
                "hint": ""
              },
              {
                "id": "u6-sep-t2-s1-7",
                "type": "gap",
                "sentence": "Wir haben gestern ___ (fernsehen).",
                "answer": "ferngesehen",
                "hint": ""
              },
              {
                "id": "u6-sep-t2-s1-8",
                "type": "gap",
                "sentence": "Du hast die Schuhe ___ (anziehen).",
                "answer": "angezogen",
                "hint": ""
              }
            ]
          },
          {
            "id": "u6-sep-t3-s1",
            "title": "Task 3: Word Order 1",
            "exercises": [
              {
                "id": "u6-sep-t3-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Arrange the words in the correct order to form a valid German sentence. Pay attention to word order rules (like verb position) and verb forms you've learned.",
                "answer": ""
              },
              {
                "id": "u6-sep-t3-s1-1",
                "type": "order",
                "sentence": "He has watched TV.",
                "answer": "Er hat ferngesehen.",
                "orderTokens": [
                  "ferngesehen",
                  ".",
                  "hat",
                  "Er"
                ],
                "hint": ""
              },
              {
                "id": "u6-sep-t3-s1-2",
                "type": "order",
                "sentence": "I have shopped in the supermarket.",
                "answer": "Ich habe im Supermarkt eingekauft.",
                "orderTokens": [
                  "eingekauft",
                  "habe",
                  "Supermarkt",
                  ".",
                  "Ich",
                  "im"
                ],
                "hint": ""
              },
              {
                "id": "u6-sep-t3-s1-3",
                "type": "order",
                "sentence": "She has taken off the jacket.",
                "answer": "Sie hat die Jacke ausgezogen.",
                "orderTokens": [
                  "die",
                  "ausgezogen",
                  "hat",
                  "Jacke",
                  ".",
                  "Sie"
                ],
                "hint": ""
              },
              {
                "id": "u6-sep-t3-s1-4",
                "type": "order",
                "sentence": "We have put on the shoes.",
                "answer": "Wir haben die Schuhe angezogen.",
                "orderTokens": [
                  "haben",
                  ".",
                  "die",
                  "Wir",
                  "angezogen",
                  "Schuhe"
                ],
                "hint": ""
              },
              {
                "id": "u6-sep-t3-s1-5",
                "type": "order",
                "sentence": "He has watched TV.",
                "answer": "Er hat ferngesehen.",
                "orderTokens": [
                  "hat",
                  "ferngesehen",
                  "Er",
                  "."
                ],
                "hint": ""
              },
              {
                "id": "u6-sep-t3-s1-6",
                "type": "order",
                "sentence": "I have shopped in the supermarket.",
                "answer": "Ich habe im Supermarkt eingekauft.",
                "orderTokens": [
                  ".",
                  "Supermarkt",
                  "im",
                  "habe",
                  "Ich",
                  "eingekauft"
                ],
                "hint": ""
              },
              {
                "id": "u6-sep-t3-s1-7",
                "type": "order",
                "sentence": "She has taken off the jacket.",
                "answer": "Sie hat die Jacke ausgezogen.",
                "orderTokens": [
                  ".",
                  "die",
                  "Sie",
                  "hat",
                  "ausgezogen",
                  "Jacke"
                ],
                "hint": ""
              },
              {
                "id": "u6-sep-t3-s1-8",
                "type": "order",
                "sentence": "We have put on the shoes.",
                "answer": "Wir haben die Schuhe angezogen.",
                "orderTokens": [
                  "angezogen",
                  ".",
                  "Schuhe",
                  "die",
                  "Wir",
                  "haben"
                ],
                "hint": ""
              }
            ]
          },
          {
            "id": "u6-sep-t4-s1",
            "title": "Task 4: Word Order - form change 1",
            "exercises": [
              {
                "id": "u6-sep-t4-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Arrange the words in the correct order to form a valid German sentence. Pay attention to word order rules (like verb position) and verb forms you've learned.",
                "answer": ""
              },
              {
                "id": "u6-sep-t4-s1-1",
                "type": "order",
                "sentence": "Make the perfect tense! (He watched tv.)",
                "answer": "Er hat ferngesehen.",
                "orderTokens": [
                  "hat",
                  "(fernsehen)",
                  "Er"
                ],
                "hint": ""
              },
              {
                "id": "u6-sep-t4-s1-2",
                "type": "order",
                "sentence": "Make the perfect tense! (I shopped...)",
                "answer": "Ich habe im Supermarkt eingekauft.",
                "orderTokens": [
                  "im",
                  "Supermarkt",
                  "habe",
                  "Ich",
                  "(einkaufen)"
                ],
                "hint": ""
              },
              {
                "id": "u6-sep-t4-s1-3",
                "type": "order",
                "sentence": "Make the perfect tense! (He watched tv.)",
                "answer": "Er hat ferngesehen.",
                "orderTokens": [
                  "hat",
                  "Er",
                  "(fernsehen)"
                ],
                "hint": ""
              },
              {
                "id": "u6-sep-t4-s1-4",
                "type": "order",
                "sentence": "Make the perfect tense! (I shopped...)",
                "answer": "Ich habe im Supermarkt eingekauft.",
                "orderTokens": [
                  "(einkaufen)",
                  "Ich",
                  "habe",
                  "Supermarkt",
                  "im"
                ],
                "hint": ""
              },
              {
                "id": "u6-sep-t4-s1-5",
                "type": "order",
                "sentence": "Make the perfect tense! (He watched tv.)",
                "answer": "Er hat ferngesehen.",
                "orderTokens": [
                  "hat",
                  "(fernsehen)",
                  "Er"
                ],
                "hint": ""
              },
              {
                "id": "u6-sep-t4-s1-6",
                "type": "order",
                "sentence": "Make the perfect tense! (I shopped...)",
                "answer": "Ich habe im Supermarkt eingekauft.",
                "orderTokens": [
                  "(einkaufen)",
                  "im",
                  "Supermarkt",
                  "habe",
                  "Ich"
                ],
                "hint": ""
              },
              {
                "id": "u6-sep-t4-s1-7",
                "type": "order",
                "sentence": "Make the perfect tense! (He watched tv.)",
                "answer": "Er hat ferngesehen.",
                "orderTokens": [
                  "hat",
                  "Er",
                  "(fernsehen)"
                ],
                "hint": ""
              },
              {
                "id": "u6-sep-t4-s1-8",
                "type": "order",
                "sentence": "Make the perfect tense! (I shopped...)",
                "answer": "Ich habe im Supermarkt eingekauft.",
                "orderTokens": [
                  "Ich",
                  "(einkaufen)",
                  "habe",
                  "im",
                  "Supermarkt"
                ],
                "hint": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "unit-7",
    "title": "Unit 7: Nominative and accusative",
    "explanation": "Nominative (Subject/der-words)\nThe: der, die, das\na: ein, eine, ein\n\nAccusative (Direct Object/den-words)\nThe: den, die, das\na: einen, eine, ein",
    "subunits": [
      {
        "id": "u7-su1",
        "title": "Nominative definite and indefinite",
        "taskSets": [
          {
            "id": "u7-nom-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u7-nom-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Decide if it is 'der', 'die', 'das' or 'ein', 'eine', 'ein' in the Nominative case.",
                "answer": ""
              },
              {
                "id": "u7-nom-s1-1",
                "type": "gap",
                "sentence": "___ (A - n) Kind lacht.",
                "answer": "Ein",
                "hint": ""
              },
              {
                "id": "u7-nom-s1-2",
                "type": "gap",
                "sentence": "___ (A - m) Hund bellt.",
                "answer": "Ein",
                "hint": ""
              },
              {
                "id": "u7-nom-s1-3",
                "type": "gap",
                "sentence": "___ (The - pl) Lehrer sind hier.",
                "answer": "Die",
                "hint": ""
              },
              {
                "id": "u7-nom-s1-4",
                "type": "gap",
                "sentence": "___ (The - m) Vater ist groß.",
                "answer": "Der",
                "hint": ""
              },
              {
                "id": "u7-nom-s1-5",
                "type": "gap",
                "sentence": "___ (The - f) Schwester ist nett.",
                "answer": "Die",
                "hint": ""
              },
              {
                "id": "u7-nom-s1-6",
                "type": "gap",
                "sentence": "___ (A - f) Katze schläft.",
                "answer": "Eine",
                "hint": ""
              },
              {
                "id": "u7-nom-s1-7",
                "type": "gap",
                "sentence": "___ (The - n) Buch ist gut.",
                "answer": "Das",
                "hint": ""
              },
              {
                "id": "u7-nom-s1-8",
                "type": "gap",
                "sentence": "___ (A - n) Kind lacht.",
                "answer": "Ein",
                "hint": ""
              }
            ]
          },
          {
            "id": "u7-nom-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u7-nom-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Decide if it is 'der', 'die', 'das' or 'ein', 'eine', 'ein' in the Nominative case.",
                "answer": ""
              },
              {
                "id": "u7-nom-s2-1",
                "type": "gap",
                "sentence": "___ (The - m) Vater ist groß.",
                "answer": "Der",
                "hint": ""
              },
              {
                "id": "u7-nom-s2-2",
                "type": "gap",
                "sentence": "___ (A - f) Katze schläft.",
                "answer": "Eine",
                "hint": ""
              },
              {
                "id": "u7-nom-s2-3",
                "type": "gap",
                "sentence": "___ (A - m) Hund bellt.",
                "answer": "Ein",
                "hint": ""
              },
              {
                "id": "u7-nom-s2-4",
                "type": "gap",
                "sentence": "___ (The - f) Schwester ist nett.",
                "answer": "Die",
                "hint": ""
              },
              {
                "id": "u7-nom-s2-5",
                "type": "gap",
                "sentence": "___ (The - pl) Lehrer sind hier.",
                "answer": "Die",
                "hint": ""
              },
              {
                "id": "u7-nom-s2-6",
                "type": "gap",
                "sentence": "___ (A - n) Kind lacht.",
                "answer": "Ein",
                "hint": ""
              },
              {
                "id": "u7-nom-s2-7",
                "type": "gap",
                "sentence": "___ (The - n) Buch ist gut.",
                "answer": "Das",
                "hint": ""
              },
              {
                "id": "u7-nom-s2-8",
                "type": "gap",
                "sentence": "___ (The - m) Vater ist groß.",
                "answer": "Der",
                "hint": ""
              }
            ]
          },
          {
            "id": "u7-nom-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u7-nom-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Decide if it is 'der', 'die', 'das' or 'ein', 'eine', 'ein' in the Nominative case.",
                "answer": ""
              },
              {
                "id": "u7-nom-s3-1",
                "type": "gap",
                "sentence": "___ (A - n) Kind lacht.",
                "answer": "Ein",
                "hint": ""
              },
              {
                "id": "u7-nom-s3-2",
                "type": "gap",
                "sentence": "___ (The - n) Buch ist gut.",
                "answer": "Das",
                "hint": ""
              },
              {
                "id": "u7-nom-s3-3",
                "type": "gap",
                "sentence": "___ (The - m) Vater ist groß.",
                "answer": "Der",
                "hint": ""
              },
              {
                "id": "u7-nom-s3-4",
                "type": "gap",
                "sentence": "___ (A - f) Katze schläft.",
                "answer": "Eine",
                "hint": ""
              },
              {
                "id": "u7-nom-s3-5",
                "type": "gap",
                "sentence": "___ (The - pl) Lehrer sind hier.",
                "answer": "Die",
                "hint": ""
              },
              {
                "id": "u7-nom-s3-6",
                "type": "gap",
                "sentence": "___ (The - f) Schwester ist nett.",
                "answer": "Die",
                "hint": ""
              },
              {
                "id": "u7-nom-s3-7",
                "type": "gap",
                "sentence": "___ (A - m) Hund bellt.",
                "answer": "Ein",
                "hint": ""
              },
              {
                "id": "u7-nom-s3-8",
                "type": "gap",
                "sentence": "___ (A - n) Kind lacht.",
                "answer": "Ein",
                "hint": ""
              }
            ]
          }
        ]
      },
      {
        "id": "u7-su2",
        "title": "Accusative definite and indefinite",
        "taskSets": [
          {
            "id": "u7-acc-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u7-acc-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Decide if it is 'den', 'die', 'das' or 'einen', 'eine', 'ein' in the Accusative case.",
                "answer": ""
              },
              {
                "id": "u7-acc-s1-1",
                "type": "gap",
                "sentence": "Ich habe ___ (the - m) Hund.",
                "answer": "den",
                "hint": ""
              },
              {
                "id": "u7-acc-s1-2",
                "type": "gap",
                "sentence": "Sie sucht ___ (a - f) Tasche.",
                "answer": "eine",
                "hint": ""
              },
              {
                "id": "u7-acc-s1-3",
                "type": "gap",
                "sentence": "Er isst ___ (a - m) Apfel.",
                "answer": "einen",
                "hint": ""
              },
              {
                "id": "u7-acc-s1-4",
                "type": "gap",
                "sentence": "Wir lesen ___ (the - n) Buch.",
                "answer": "das",
                "hint": ""
              },
              {
                "id": "u7-acc-s1-5",
                "type": "gap",
                "sentence": "Ich trinke ___ (a - m) Saft.",
                "answer": "einen",
                "hint": ""
              },
              {
                "id": "u7-acc-s1-6",
                "type": "gap",
                "sentence": "Du kaufst ___ (a - n) Eis.",
                "answer": "ein",
                "hint": ""
              },
              {
                "id": "u7-acc-s1-7",
                "type": "gap",
                "sentence": "Ich kaufe ___ (the - f) Pizza.",
                "answer": "die",
                "hint": ""
              },
              {
                "id": "u7-acc-s1-8",
                "type": "gap",
                "sentence": "Ich habe ___ (the - m) Hund.",
                "answer": "den",
                "hint": ""
              }
            ]
          },
          {
            "id": "u7-acc-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u7-acc-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Decide if it is 'den', 'die', 'das' or 'einen', 'eine', 'ein' in the Accusative case.",
                "answer": ""
              },
              {
                "id": "u7-acc-s2-1",
                "type": "gap",
                "sentence": "Ich trinke ___ (a - m) Saft.",
                "answer": "einen",
                "hint": ""
              },
              {
                "id": "u7-acc-s2-2",
                "type": "gap",
                "sentence": "Ich habe ___ (the - m) Hund.",
                "answer": "den",
                "hint": ""
              },
              {
                "id": "u7-acc-s2-3",
                "type": "gap",
                "sentence": "Er isst ___ (a - m) Apfel.",
                "answer": "einen",
                "hint": ""
              },
              {
                "id": "u7-acc-s2-4",
                "type": "gap",
                "sentence": "Sie sucht ___ (a - f) Tasche.",
                "answer": "eine",
                "hint": ""
              },
              {
                "id": "u7-acc-s2-5",
                "type": "gap",
                "sentence": "Du kaufst ___ (a - n) Eis.",
                "answer": "ein",
                "hint": ""
              },
              {
                "id": "u7-acc-s2-6",
                "type": "gap",
                "sentence": "Wir lesen ___ (the - n) Buch.",
                "answer": "das",
                "hint": ""
              },
              {
                "id": "u7-acc-s2-7",
                "type": "gap",
                "sentence": "Ich kaufe ___ (the - f) Pizza.",
                "answer": "die",
                "hint": ""
              },
              {
                "id": "u7-acc-s2-8",
                "type": "gap",
                "sentence": "Ich trinke ___ (a - m) Saft.",
                "answer": "einen",
                "hint": ""
              }
            ]
          },
          {
            "id": "u7-acc-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u7-acc-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Decide if it is 'den', 'die', 'das' or 'einen', 'eine', 'ein' in the Accusative case.",
                "answer": ""
              },
              {
                "id": "u7-acc-s3-1",
                "type": "gap",
                "sentence": "Du kaufst ___ (a - n) Eis.",
                "answer": "ein",
                "hint": ""
              },
              {
                "id": "u7-acc-s3-2",
                "type": "gap",
                "sentence": "Er isst ___ (a - m) Apfel.",
                "answer": "einen",
                "hint": ""
              },
              {
                "id": "u7-acc-s3-3",
                "type": "gap",
                "sentence": "Ich habe ___ (the - m) Hund.",
                "answer": "den",
                "hint": ""
              },
              {
                "id": "u7-acc-s3-4",
                "type": "gap",
                "sentence": "Ich kaufe ___ (the - f) Pizza.",
                "answer": "die",
                "hint": ""
              },
              {
                "id": "u7-acc-s3-5",
                "type": "gap",
                "sentence": "Ich trinke ___ (a - m) Saft.",
                "answer": "einen",
                "hint": ""
              },
              {
                "id": "u7-acc-s3-6",
                "type": "gap",
                "sentence": "Wir lesen ___ (the - n) Buch.",
                "answer": "das",
                "hint": ""
              },
              {
                "id": "u7-acc-s3-7",
                "type": "gap",
                "sentence": "Sie sucht ___ (a - f) Tasche.",
                "answer": "eine",
                "hint": ""
              },
              {
                "id": "u7-acc-s3-8",
                "type": "gap",
                "sentence": "Du kaufst ___ (a - n) Eis.",
                "answer": "ein",
                "hint": ""
              }
            ]
          }
        ]
      },
      {
        "id": "u7-su3",
        "title": "Mixture definite",
        "taskSets": [
          {
            "id": "u7-mixdef-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u7-mixdef-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Decide if it is 'der', 'die', 'das' (Nominative) or 'den', 'die', 'das' (Accusative).",
                "answer": ""
              },
              {
                "id": "u7-mixdef-s1-1",
                "type": "gap",
                "sentence": "___ (The) Kind sucht den Ball.",
                "answer": "Das",
                "hint": ""
              },
              {
                "id": "u7-mixdef-s1-2",
                "type": "gap",
                "sentence": "Die Tante sieht ___ (the - m) Vater.",
                "answer": "den",
                "hint": ""
              },
              {
                "id": "u7-mixdef-s1-3",
                "type": "gap",
                "sentence": "Der Lehrer liest ___ (the - n) Buch.",
                "answer": "das",
                "hint": ""
              },
              {
                "id": "u7-mixdef-s1-4",
                "type": "gap",
                "sentence": "___ (The - f) Tante sieht den Vater.",
                "answer": "Die",
                "hint": ""
              },
              {
                "id": "u7-mixdef-s1-5",
                "type": "gap",
                "sentence": "Ich mag ___ (the) Hund.",
                "answer": "den",
                "hint": ""
              },
              {
                "id": "u7-mixdef-s1-6",
                "type": "gap",
                "sentence": "Der Onkel kauft ___ (the) Jacke.",
                "answer": "die",
                "hint": ""
              },
              {
                "id": "u7-mixdef-s1-7",
                "type": "gap",
                "sentence": "Wir essen ___ (the) Banane.",
                "answer": "die",
                "hint": ""
              },
              {
                "id": "u7-mixdef-s1-8",
                "type": "gap",
                "sentence": "___ (The) Kind sucht den Ball.",
                "answer": "Das",
                "hint": ""
              }
            ]
          },
          {
            "id": "u7-mixdef-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u7-mixdef-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Decide if it is 'der', 'die', 'das' (Nominative) or 'den', 'die', 'das' (Accusative).",
                "answer": ""
              },
              {
                "id": "u7-mixdef-s2-1",
                "type": "gap",
                "sentence": "___ (The) Kind sucht den Ball.",
                "answer": "Das",
                "hint": ""
              },
              {
                "id": "u7-mixdef-s2-2",
                "type": "gap",
                "sentence": "___ (The - f) Tante sieht den Vater.",
                "answer": "Die",
                "hint": ""
              },
              {
                "id": "u7-mixdef-s2-3",
                "type": "gap",
                "sentence": "Wir essen ___ (the) Banane.",
                "answer": "die",
                "hint": ""
              },
              {
                "id": "u7-mixdef-s2-4",
                "type": "gap",
                "sentence": "Der Onkel kauft ___ (the) Jacke.",
                "answer": "die",
                "hint": ""
              },
              {
                "id": "u7-mixdef-s2-5",
                "type": "gap",
                "sentence": "Die Tante sieht ___ (the - m) Vater.",
                "answer": "den",
                "hint": ""
              },
              {
                "id": "u7-mixdef-s2-6",
                "type": "gap",
                "sentence": "Der Lehrer liest ___ (the - n) Buch.",
                "answer": "das",
                "hint": ""
              },
              {
                "id": "u7-mixdef-s2-7",
                "type": "gap",
                "sentence": "Ich mag ___ (the) Hund.",
                "answer": "den",
                "hint": ""
              },
              {
                "id": "u7-mixdef-s2-8",
                "type": "gap",
                "sentence": "___ (The) Kind sucht den Ball.",
                "answer": "Das",
                "hint": ""
              }
            ]
          },
          {
            "id": "u7-mixdef-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u7-mixdef-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Decide if it is 'der', 'die', 'das' (Nominative) or 'den', 'die', 'das' (Accusative).",
                "answer": ""
              },
              {
                "id": "u7-mixdef-s3-1",
                "type": "gap",
                "sentence": "Der Onkel kauft ___ (the) Jacke.",
                "answer": "die",
                "hint": ""
              },
              {
                "id": "u7-mixdef-s3-2",
                "type": "gap",
                "sentence": "___ (The - f) Tante sieht den Vater.",
                "answer": "Die",
                "hint": ""
              },
              {
                "id": "u7-mixdef-s3-3",
                "type": "gap",
                "sentence": "Die Tante sieht ___ (the - m) Vater.",
                "answer": "den",
                "hint": ""
              },
              {
                "id": "u7-mixdef-s3-4",
                "type": "gap",
                "sentence": "Der Lehrer liest ___ (the - n) Buch.",
                "answer": "das",
                "hint": ""
              },
              {
                "id": "u7-mixdef-s3-5",
                "type": "gap",
                "sentence": "___ (The) Kind sucht den Ball.",
                "answer": "Das",
                "hint": ""
              },
              {
                "id": "u7-mixdef-s3-6",
                "type": "gap",
                "sentence": "Ich mag ___ (the) Hund.",
                "answer": "den",
                "hint": ""
              },
              {
                "id": "u7-mixdef-s3-7",
                "type": "gap",
                "sentence": "Wir essen ___ (the) Banane.",
                "answer": "die",
                "hint": ""
              },
              {
                "id": "u7-mixdef-s3-8",
                "type": "gap",
                "sentence": "Der Onkel kauft ___ (the) Jacke.",
                "answer": "die",
                "hint": ""
              }
            ]
          }
        ]
      },
      {
        "id": "u7-su4",
        "title": "Mixture indefinite",
        "taskSets": [
          {
            "id": "u7-mixindef-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u7-mixindef-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Decide if it is 'ein', 'eine', 'ein' (Nominative) or 'einen', 'eine', 'ein' (Accusative).",
                "answer": ""
              },
              {
                "id": "u7-mixindef-s1-1",
                "type": "gap",
                "sentence": "___ (A - m) Lehrer kommt.",
                "answer": "Ein",
                "hint": ""
              },
              {
                "id": "u7-mixindef-s1-2",
                "type": "gap",
                "sentence": "Da ist ___ (a - m) Hund.",
                "answer": "ein",
                "hint": ""
              },
              {
                "id": "u7-mixindef-s1-3",
                "type": "gap",
                "sentence": "Wir nehmen ___ (a - f) Cola.",
                "answer": "eine",
                "hint": ""
              },
              {
                "id": "u7-mixindef-s1-4",
                "type": "gap",
                "sentence": "Ich habe ___ (a - m) Bruder.",
                "answer": "einen",
                "hint": ""
              },
              {
                "id": "u7-mixindef-s1-5",
                "type": "gap",
                "sentence": "___ (A - f) Schwester ist hier.",
                "answer": "Eine",
                "hint": ""
              },
              {
                "id": "u7-mixindef-s1-6",
                "type": "gap",
                "sentence": "Er isst ___ (a - n) Eis.",
                "answer": "ein",
                "hint": ""
              },
              {
                "id": "u7-mixindef-s1-7",
                "type": "gap",
                "sentence": "Ich sehe ___ (a - m) Vogel.",
                "answer": "einen",
                "hint": ""
              },
              {
                "id": "u7-mixindef-s1-8",
                "type": "gap",
                "sentence": "___ (A - m) Lehrer kommt.",
                "answer": "Ein",
                "hint": ""
              }
            ]
          },
          {
            "id": "u7-mixindef-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u7-mixindef-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Decide if it is 'ein', 'eine', 'ein' (Nominative) or 'einen', 'eine', 'ein' (Accusative).",
                "answer": ""
              },
              {
                "id": "u7-mixindef-s2-1",
                "type": "gap",
                "sentence": "Wir nehmen ___ (a - f) Cola.",
                "answer": "eine",
                "hint": ""
              },
              {
                "id": "u7-mixindef-s2-2",
                "type": "gap",
                "sentence": "___ (A - m) Lehrer kommt.",
                "answer": "Ein",
                "hint": ""
              },
              {
                "id": "u7-mixindef-s2-3",
                "type": "gap",
                "sentence": "Er isst ___ (a - n) Eis.",
                "answer": "ein",
                "hint": ""
              },
              {
                "id": "u7-mixindef-s2-4",
                "type": "gap",
                "sentence": "Da ist ___ (a - m) Hund.",
                "answer": "ein",
                "hint": ""
              },
              {
                "id": "u7-mixindef-s2-5",
                "type": "gap",
                "sentence": "Ich habe ___ (a - m) Bruder.",
                "answer": "einen",
                "hint": ""
              },
              {
                "id": "u7-mixindef-s2-6",
                "type": "gap",
                "sentence": "Ich sehe ___ (a - m) Vogel.",
                "answer": "einen",
                "hint": ""
              },
              {
                "id": "u7-mixindef-s2-7",
                "type": "gap",
                "sentence": "___ (A - f) Schwester ist hier.",
                "answer": "Eine",
                "hint": ""
              },
              {
                "id": "u7-mixindef-s2-8",
                "type": "gap",
                "sentence": "Wir nehmen ___ (a - f) Cola.",
                "answer": "eine",
                "hint": ""
              }
            ]
          },
          {
            "id": "u7-mixindef-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u7-mixindef-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Decide if it is 'ein', 'eine', 'ein' (Nominative) or 'einen', 'eine', 'ein' (Accusative).",
                "answer": ""
              },
              {
                "id": "u7-mixindef-s3-1",
                "type": "gap",
                "sentence": "Er isst ___ (a - n) Eis.",
                "answer": "ein",
                "hint": ""
              },
              {
                "id": "u7-mixindef-s3-2",
                "type": "gap",
                "sentence": "Ich habe ___ (a - m) Bruder.",
                "answer": "einen",
                "hint": ""
              },
              {
                "id": "u7-mixindef-s3-3",
                "type": "gap",
                "sentence": "Ich sehe ___ (a - m) Vogel.",
                "answer": "einen",
                "hint": ""
              },
              {
                "id": "u7-mixindef-s3-4",
                "type": "gap",
                "sentence": "___ (A - m) Lehrer kommt.",
                "answer": "Ein",
                "hint": ""
              },
              {
                "id": "u7-mixindef-s3-5",
                "type": "gap",
                "sentence": "Wir nehmen ___ (a - f) Cola.",
                "answer": "eine",
                "hint": ""
              },
              {
                "id": "u7-mixindef-s3-6",
                "type": "gap",
                "sentence": "Da ist ___ (a - m) Hund.",
                "answer": "ein",
                "hint": ""
              },
              {
                "id": "u7-mixindef-s3-7",
                "type": "gap",
                "sentence": "___ (A - f) Schwester ist hier.",
                "answer": "Eine",
                "hint": ""
              },
              {
                "id": "u7-mixindef-s3-8",
                "type": "gap",
                "sentence": "Er isst ___ (a - n) Eis.",
                "answer": "ein",
                "hint": ""
              }
            ]
          }
        ]
      },
      {
        "id": "u7-su5",
        "title": "Possessive pronouns",
        "explanation": "All forms: mein, dein, sein, ihr, unser, euer. Remember Accusative adds -en to masculines!",
        "taskSets": [
          {
            "id": "u7-poss-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u7-poss-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Read the sentence and figure out the missing word. Think about the rules you've learned in this unit to solve the tasks.",
                "answer": ""
              },
              {
                "id": "u7-poss-s1-1",
                "type": "gap",
                "sentence": "Er sucht ___ (his - m, acc) Onkel.",
                "answer": "seinen",
                "hint": ""
              },
              {
                "id": "u7-poss-s1-2",
                "type": "gap",
                "sentence": "Das ist ___ (my - m, nom) Vater.",
                "answer": "mein",
                "hint": ""
              },
              {
                "id": "u7-poss-s1-3",
                "type": "gap",
                "sentence": "Sie mag ___ (her - m, acc) Füller.",
                "answer": "ihren",
                "hint": ""
              },
              {
                "id": "u7-poss-s1-4",
                "type": "gap",
                "sentence": "Ich liebe ___ (my - m, acc) Bruder.",
                "answer": "meinen",
                "hint": ""
              },
              {
                "id": "u7-poss-s1-5",
                "type": "gap",
                "sentence": "Wo ist ___ (your - f, nom) Schwester?",
                "answer": "deine",
                "hint": ""
              },
              {
                "id": "u7-poss-s1-6",
                "type": "gap",
                "sentence": "Hast du ___ (your - m, acc) Hund?",
                "answer": "deinen",
                "hint": ""
              },
              {
                "id": "u7-poss-s1-7",
                "type": "gap",
                "sentence": "Das ist ___ (my - f, nom) Mutter.",
                "answer": "meine",
                "hint": ""
              },
              {
                "id": "u7-poss-s1-8",
                "type": "gap",
                "sentence": "Wir finden ___ (our - f, acc) Katze nicht.",
                "answer": "unsere",
                "hint": ""
              }
            ]
          },
          {
            "id": "u7-poss-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u7-poss-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Read the sentence and figure out the missing word. Think about the rules you've learned in this unit to solve the tasks.",
                "answer": ""
              },
              {
                "id": "u7-poss-s2-1",
                "type": "gap",
                "sentence": "Hast du ___ (your - m, acc) Hund?",
                "answer": "deinen",
                "hint": ""
              },
              {
                "id": "u7-poss-s2-2",
                "type": "gap",
                "sentence": "Wir finden ___ (our - f, acc) Katze nicht.",
                "answer": "unsere",
                "hint": ""
              },
              {
                "id": "u7-poss-s2-3",
                "type": "gap",
                "sentence": "Ich liebe ___ (my - m, acc) Bruder.",
                "answer": "meinen",
                "hint": ""
              },
              {
                "id": "u7-poss-s2-4",
                "type": "gap",
                "sentence": "Wo ist ___ (your - f, nom) Schwester?",
                "answer": "deine",
                "hint": ""
              },
              {
                "id": "u7-poss-s2-5",
                "type": "gap",
                "sentence": "Das ist ___ (my - m, nom) Vater.",
                "answer": "mein",
                "hint": ""
              },
              {
                "id": "u7-poss-s2-6",
                "type": "gap",
                "sentence": "Sie mag ___ (her - m, acc) Füller.",
                "answer": "ihren",
                "hint": ""
              },
              {
                "id": "u7-poss-s2-7",
                "type": "gap",
                "sentence": "Er sucht ___ (his - m, acc) Onkel.",
                "answer": "seinen",
                "hint": ""
              },
              {
                "id": "u7-poss-s2-8",
                "type": "gap",
                "sentence": "Das ist ___ (my - f, nom) Mutter.",
                "answer": "meine",
                "hint": ""
              }
            ]
          },
          {
            "id": "u7-poss-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u7-poss-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Read the sentence and figure out the missing word. Think about the rules you've learned in this unit to solve the tasks.",
                "answer": ""
              },
              {
                "id": "u7-poss-s3-1",
                "type": "gap",
                "sentence": "Wo ist ___ (your - f, nom) Schwester?",
                "answer": "deine",
                "hint": ""
              },
              {
                "id": "u7-poss-s3-2",
                "type": "gap",
                "sentence": "Das ist ___ (my - m, nom) Vater.",
                "answer": "mein",
                "hint": ""
              },
              {
                "id": "u7-poss-s3-3",
                "type": "gap",
                "sentence": "Sie mag ___ (her - m, acc) Füller.",
                "answer": "ihren",
                "hint": ""
              },
              {
                "id": "u7-poss-s3-4",
                "type": "gap",
                "sentence": "Er sucht ___ (his - m, acc) Onkel.",
                "answer": "seinen",
                "hint": ""
              },
              {
                "id": "u7-poss-s3-5",
                "type": "gap",
                "sentence": "Hast du ___ (your - m, acc) Hund?",
                "answer": "deinen",
                "hint": ""
              },
              {
                "id": "u7-poss-s3-6",
                "type": "gap",
                "sentence": "Das ist ___ (my - f, nom) Mutter.",
                "answer": "meine",
                "hint": ""
              },
              {
                "id": "u7-poss-s3-7",
                "type": "gap",
                "sentence": "Wir finden ___ (our - f, acc) Katze nicht.",
                "answer": "unsere",
                "hint": ""
              },
              {
                "id": "u7-poss-s3-8",
                "type": "gap",
                "sentence": "Ich liebe ___ (my - m, acc) Bruder.",
                "answer": "meinen",
                "hint": ""
              }
            ]
          }
        ]
      },
      {
        "id": "u7-su6",
        "title": "Mixture of all",
        "taskSets": [
          {
            "id": "u7-mixall-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u7-mixall-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Read the sentence and figure out the missing word. Think about the rules you've learned in this unit to solve the tasks.",
                "answer": ""
              },
              {
                "id": "u7-mixall-s1-1",
                "type": "gap",
                "sentence": "___ (The - n) Mädchen lacht.",
                "answer": "Das",
                "hint": ""
              },
              {
                "id": "u7-mixall-s1-2",
                "type": "gap",
                "sentence": "Der Hund beißt ___ (the - m) Lehrer.",
                "answer": "den",
                "hint": ""
              },
              {
                "id": "u7-mixall-s1-3",
                "type": "gap",
                "sentence": "Siehst du ___ (my - m) Ball?",
                "answer": "meinen",
                "hint": ""
              },
              {
                "id": "u7-mixall-s1-4",
                "type": "gap",
                "sentence": "___ (My - f) Tante wohnt hier.",
                "answer": "Meine",
                "hint": ""
              },
              {
                "id": "u7-mixall-s1-5",
                "type": "gap",
                "sentence": "Ich nehme ___ (a - n) Wasser.",
                "answer": "ein",
                "hint": ""
              },
              {
                "id": "u7-mixall-s1-6",
                "type": "gap",
                "sentence": "___ (A - m) Junge spielt.",
                "answer": "Ein",
                "hint": ""
              },
              {
                "id": "u7-mixall-s1-7",
                "type": "gap",
                "sentence": "Hast du ___ (your - f) Jacke?",
                "answer": "deine",
                "hint": ""
              },
              {
                "id": "u7-mixall-s1-8",
                "type": "gap",
                "sentence": "___ (The - n) Mädchen lacht.",
                "answer": "Das",
                "hint": ""
              }
            ]
          },
          {
            "id": "u7-mixall-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u7-mixall-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Read the sentence and figure out the missing word. Think about the rules you've learned in this unit to solve the tasks.",
                "answer": ""
              },
              {
                "id": "u7-mixall-s2-1",
                "type": "gap",
                "sentence": "___ (A - m) Junge spielt.",
                "answer": "Ein",
                "hint": ""
              },
              {
                "id": "u7-mixall-s2-2",
                "type": "gap",
                "sentence": "___ (My - f) Tante wohnt hier.",
                "answer": "Meine",
                "hint": ""
              },
              {
                "id": "u7-mixall-s2-3",
                "type": "gap",
                "sentence": "Hast du ___ (your - f) Jacke?",
                "answer": "deine",
                "hint": ""
              },
              {
                "id": "u7-mixall-s2-4",
                "type": "gap",
                "sentence": "Ich nehme ___ (a - n) Wasser.",
                "answer": "ein",
                "hint": ""
              },
              {
                "id": "u7-mixall-s2-5",
                "type": "gap",
                "sentence": "___ (The - n) Mädchen lacht.",
                "answer": "Das",
                "hint": ""
              },
              {
                "id": "u7-mixall-s2-6",
                "type": "gap",
                "sentence": "Siehst du ___ (my - m) Ball?",
                "answer": "meinen",
                "hint": ""
              },
              {
                "id": "u7-mixall-s2-7",
                "type": "gap",
                "sentence": "Der Hund beißt ___ (the - m) Lehrer.",
                "answer": "den",
                "hint": ""
              },
              {
                "id": "u7-mixall-s2-8",
                "type": "gap",
                "sentence": "___ (A - m) Junge spielt.",
                "answer": "Ein",
                "hint": ""
              }
            ]
          },
          {
            "id": "u7-mixall-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u7-mixall-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Read the sentence and figure out the missing word. Think about the rules you've learned in this unit to solve the tasks.",
                "answer": ""
              },
              {
                "id": "u7-mixall-s3-1",
                "type": "gap",
                "sentence": "___ (The - n) Mädchen lacht.",
                "answer": "Das",
                "hint": ""
              },
              {
                "id": "u7-mixall-s3-2",
                "type": "gap",
                "sentence": "___ (A - m) Junge spielt.",
                "answer": "Ein",
                "hint": ""
              },
              {
                "id": "u7-mixall-s3-3",
                "type": "gap",
                "sentence": "Hast du ___ (your - f) Jacke?",
                "answer": "deine",
                "hint": ""
              },
              {
                "id": "u7-mixall-s3-4",
                "type": "gap",
                "sentence": "Der Hund beißt ___ (the - m) Lehrer.",
                "answer": "den",
                "hint": ""
              },
              {
                "id": "u7-mixall-s3-5",
                "type": "gap",
                "sentence": "Ich nehme ___ (a - n) Wasser.",
                "answer": "ein",
                "hint": ""
              },
              {
                "id": "u7-mixall-s3-6",
                "type": "gap",
                "sentence": "___ (My - f) Tante wohnt hier.",
                "answer": "Meine",
                "hint": ""
              },
              {
                "id": "u7-mixall-s3-7",
                "type": "gap",
                "sentence": "Siehst du ___ (my - m) Ball?",
                "answer": "meinen",
                "hint": ""
              },
              {
                "id": "u7-mixall-s3-8",
                "type": "gap",
                "sentence": "___ (The - n) Mädchen lacht.",
                "answer": "Das",
                "hint": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "unit-8",
    "title": "Unit 8: Adverbs",
    "explanation": "Adverbs tell us more about the verb.\nAdverbs of preference: gern (gladly), lieber (prefer, like more), am liebsten (most of all).\n\nAdverbs of frequency: immer (always), oft (often), regelmäßig (regularly), manchmal (sometimes), selten (rarely), kaum (hardly), nie (never).\n\nTime-Manner-Place (TeKaMoLo): Temporal (When?), Kausal (Why?), Modal (How?), Lokal (Where?). Always in this order!",
    "subunits": [
      {
        "id": "u8-su1",
        "title": "Adverbs of preference",
        "taskSets": [
          {
            "id": "u8-pref-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u8-pref-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Read the sentence and figure out the missing word. Think about the rules you've learned in this unit to solve the tasks.",
                "answer": ""
              },
              {
                "id": "u8-pref-s1-1",
                "type": "gap",
                "sentence": "Ich koche ___ (gladly), aber er kocht nicht ___ (gladly).",
                "answer": [
                  "gern",
                  "gern"
                ],
                "hint": ""
              },
              {
                "id": "u8-pref-s1-2",
                "type": "gap",
                "sentence": "Sie liest ___ (gladly).",
                "answer": "gern",
                "hint": ""
              },
              {
                "id": "u8-pref-s1-3",
                "type": "gap",
                "sentence": "Ich arbeite ___ (rather) zu Hause.",
                "answer": "lieber",
                "hint": ""
              },
              {
                "id": "u8-pref-s1-4",
                "type": "gap",
                "sentence": "Am ___ (most of all) esse ich Pizza.",
                "answer": "liebsten",
                "hint": ""
              },
              {
                "id": "u8-pref-s1-5",
                "type": "gap",
                "sentence": "Er lacht ___ (rather/prefer to) als weinen.",
                "answer": "lieber",
                "hint": ""
              },
              {
                "id": "u8-pref-s1-6",
                "type": "gap",
                "sentence": "Ich spiele ___ (gladly) Fußball.",
                "answer": "gern",
                "hint": ""
              },
              {
                "id": "u8-pref-s1-7",
                "type": "gap",
                "sentence": "Wir schwimmen ___ (rather/prefer to) als laufen.",
                "answer": "lieber",
                "hint": ""
              },
              {
                "id": "u8-pref-s1-8",
                "type": "gap",
                "sentence": "Am ___ (most of all) spiele ich Tennis.",
                "answer": "liebsten",
                "hint": ""
              }
            ]
          },
          {
            "id": "u8-pref-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u8-pref-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Read the sentence and figure out the missing word. Think about the rules you've learned in this unit to solve the tasks.",
                "answer": ""
              },
              {
                "id": "u8-pref-s2-1",
                "type": "gap",
                "sentence": "Er lacht ___ (rather/prefer to) als weinen.",
                "answer": "lieber",
                "hint": ""
              },
              {
                "id": "u8-pref-s2-2",
                "type": "gap",
                "sentence": "Ich koche ___ (gladly), aber er kocht nicht ___ (gladly).",
                "answer": [
                  "gern",
                  "gern"
                ],
                "hint": ""
              },
              {
                "id": "u8-pref-s2-3",
                "type": "gap",
                "sentence": "Am ___ (most of all) spiele ich Tennis.",
                "answer": "liebsten",
                "hint": ""
              },
              {
                "id": "u8-pref-s2-4",
                "type": "gap",
                "sentence": "Ich spiele ___ (gladly) Fußball.",
                "answer": "gern",
                "hint": ""
              },
              {
                "id": "u8-pref-s2-5",
                "type": "gap",
                "sentence": "Ich arbeite ___ (rather) zu Hause.",
                "answer": "lieber",
                "hint": ""
              },
              {
                "id": "u8-pref-s2-6",
                "type": "gap",
                "sentence": "Wir schwimmen ___ (rather/prefer to) als laufen.",
                "answer": "lieber",
                "hint": ""
              },
              {
                "id": "u8-pref-s2-7",
                "type": "gap",
                "sentence": "Am ___ (most of all) esse ich Pizza.",
                "answer": "liebsten",
                "hint": ""
              },
              {
                "id": "u8-pref-s2-8",
                "type": "gap",
                "sentence": "Sie liest ___ (gladly).",
                "answer": "gern",
                "hint": ""
              }
            ]
          },
          {
            "id": "u8-pref-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u8-pref-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Read the sentence and figure out the missing word. Think about the rules you've learned in this unit to solve the tasks.",
                "answer": ""
              },
              {
                "id": "u8-pref-s3-1",
                "type": "gap",
                "sentence": "Am ___ (most of all) spiele ich Tennis.",
                "answer": "liebsten",
                "hint": ""
              },
              {
                "id": "u8-pref-s3-2",
                "type": "gap",
                "sentence": "Wir schwimmen ___ (rather/prefer to) als laufen.",
                "answer": "lieber",
                "hint": ""
              },
              {
                "id": "u8-pref-s3-3",
                "type": "gap",
                "sentence": "Ich arbeite ___ (rather) zu Hause.",
                "answer": "lieber",
                "hint": ""
              },
              {
                "id": "u8-pref-s3-4",
                "type": "gap",
                "sentence": "Sie liest ___ (gladly).",
                "answer": "gern",
                "hint": ""
              },
              {
                "id": "u8-pref-s3-5",
                "type": "gap",
                "sentence": "Am ___ (most of all) esse ich Pizza.",
                "answer": "liebsten",
                "hint": ""
              },
              {
                "id": "u8-pref-s3-6",
                "type": "gap",
                "sentence": "Er lacht ___ (rather/prefer to) als weinen.",
                "answer": "lieber",
                "hint": ""
              },
              {
                "id": "u8-pref-s3-7",
                "type": "gap",
                "sentence": "Ich koche ___ (gladly), aber er kocht nicht ___ (gladly).",
                "answer": [
                  "gern",
                  "gern"
                ],
                "hint": ""
              },
              {
                "id": "u8-pref-s3-8",
                "type": "gap",
                "sentence": "Ich spiele ___ (gladly) Fußball.",
                "answer": "gern",
                "hint": ""
              }
            ]
          }
        ]
      },
      {
        "id": "u8-su1-rewrite",
        "title": "Rewrite with gern",
        "taskSets": [
          {
            "id": "u8-rewrite-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u8-rewrite-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Rewrite sentences starting with 'Ich mag' to using the verb + 'gern'. Remove 'mag/mögen' and put the main verb in second position.",
                "answer": ""
              },
              {
                "id": "u8-rewrite-s1-1",
                "type": "type",
                "sentence": "Rewrite using 'gern': Ihr mögt tanzen.",
                "answer": "Ihr tanzt gern",
                "hint": ""
              },
              {
                "id": "u8-rewrite-s1-2",
                "type": "type",
                "sentence": "Rewrite using 'gern': Er mag arbeiten.",
                "answer": "Er arbeitet gern",
                "hint": ""
              },
              {
                "id": "u8-rewrite-s1-3",
                "type": "type",
                "sentence": "Rewrite using 'gern': Ich mag singen.",
                "answer": "Ich singe gern",
                "hint": ""
              },
              {
                "id": "u8-rewrite-s1-4",
                "type": "type",
                "sentence": "Rewrite using 'gern': Du magst schwimmen.",
                "answer": "Du schwimmst gern",
                "hint": ""
              },
              {
                "id": "u8-rewrite-s1-5",
                "type": "type",
                "sentence": "Rewrite using 'gern': Er mag lesen.",
                "answer": "Er liest gern",
                "hint": ""
              },
              {
                "id": "u8-rewrite-s1-6",
                "type": "type",
                "sentence": "Rewrite using 'gern': Sie mögen essen.",
                "answer": "Sie essen gern",
                "hint": ""
              },
              {
                "id": "u8-rewrite-s1-7",
                "type": "type",
                "sentence": "Rewrite using 'gern': Ich mag Fußball spielen.",
                "answer": "Ich spiele gern Fußball",
                "hint": ""
              },
              {
                "id": "u8-rewrite-s1-8",
                "type": "type",
                "sentence": "Rewrite using 'gern': Wir mögen kochen.",
                "answer": "Wir kochen gern",
                "hint": ""
              }
            ]
          },
          {
            "id": "u8-rewrite-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u8-rewrite-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Rewrite sentences starting with 'Ich mag' to using the verb + 'gern'. Remove 'mag/mögen' and put the main verb in second position.",
                "answer": ""
              },
              {
                "id": "u8-rewrite-s2-1",
                "type": "type",
                "sentence": "Rewrite using 'gern': Ich mag singen.",
                "answer": "Ich singe gern",
                "hint": ""
              },
              {
                "id": "u8-rewrite-s2-2",
                "type": "type",
                "sentence": "Rewrite using 'gern': Er mag lesen.",
                "answer": "Er liest gern",
                "hint": ""
              },
              {
                "id": "u8-rewrite-s2-3",
                "type": "type",
                "sentence": "Rewrite using 'gern': Du magst schwimmen.",
                "answer": "Du schwimmst gern",
                "hint": ""
              },
              {
                "id": "u8-rewrite-s2-4",
                "type": "type",
                "sentence": "Rewrite using 'gern': Wir mögen kochen.",
                "answer": "Wir kochen gern",
                "hint": ""
              },
              {
                "id": "u8-rewrite-s2-5",
                "type": "type",
                "sentence": "Rewrite using 'gern': Er mag arbeiten.",
                "answer": "Er arbeitet gern",
                "hint": ""
              },
              {
                "id": "u8-rewrite-s2-6",
                "type": "type",
                "sentence": "Rewrite using 'gern': Ich mag Fußball spielen.",
                "answer": "Ich spiele gern Fußball",
                "hint": ""
              },
              {
                "id": "u8-rewrite-s2-7",
                "type": "type",
                "sentence": "Rewrite using 'gern': Ihr mögt tanzen.",
                "answer": "Ihr tanzt gern",
                "hint": ""
              },
              {
                "id": "u8-rewrite-s2-8",
                "type": "type",
                "sentence": "Rewrite using 'gern': Sie mögen essen.",
                "answer": "Sie essen gern",
                "hint": ""
              }
            ]
          },
          {
            "id": "u8-rewrite-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u8-rewrite-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Rewrite sentences starting with 'Ich mag' to using the verb + 'gern'. Remove 'mag/mögen' and put the main verb in second position.",
                "answer": ""
              },
              {
                "id": "u8-rewrite-s3-1",
                "type": "type",
                "sentence": "Rewrite using 'gern': Er mag lesen.",
                "answer": "Er liest gern",
                "hint": ""
              },
              {
                "id": "u8-rewrite-s3-2",
                "type": "type",
                "sentence": "Rewrite using 'gern': Ich mag singen.",
                "answer": "Ich singe gern",
                "hint": ""
              },
              {
                "id": "u8-rewrite-s3-3",
                "type": "type",
                "sentence": "Rewrite using 'gern': Sie mögen essen.",
                "answer": "Sie essen gern",
                "hint": ""
              },
              {
                "id": "u8-rewrite-s3-4",
                "type": "type",
                "sentence": "Rewrite using 'gern': Du magst schwimmen.",
                "answer": "Du schwimmst gern",
                "hint": ""
              },
              {
                "id": "u8-rewrite-s3-5",
                "type": "type",
                "sentence": "Rewrite using 'gern': Wir mögen kochen.",
                "answer": "Wir kochen gern",
                "hint": ""
              },
              {
                "id": "u8-rewrite-s3-6",
                "type": "type",
                "sentence": "Rewrite using 'gern': Ihr mögt tanzen.",
                "answer": "Ihr tanzt gern",
                "hint": ""
              },
              {
                "id": "u8-rewrite-s3-7",
                "type": "type",
                "sentence": "Rewrite using 'gern': Ich mag Fußball spielen.",
                "answer": "Ich spiele gern Fußball",
                "hint": ""
              },
              {
                "id": "u8-rewrite-s3-8",
                "type": "type",
                "sentence": "Rewrite using 'gern': Er mag arbeiten.",
                "answer": "Er arbeitet gern",
                "hint": ""
              }
            ]
          }
        ]
      },
      {
        "id": "u8-su2",
        "title": "Adverbs of frequency",
        "taskSets": [
          {
            "id": "u8-freq-t1-s1",
            "title": "Task 1: Gap Fill 1",
            "exercises": [
              {
                "id": "u8-freq-t1-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Read the sentence and figure out the missing word. Think about the rules you've learned in this unit to solve the tasks.",
                "answer": ""
              },
              {
                "id": "u8-freq-t1-s1-1",
                "type": "gap",
                "sentence": "Er kocht ___ (sometimes) Nudeln.",
                "answer": "manchmal",
                "hint": ""
              },
              {
                "id": "u8-freq-t1-s1-2",
                "type": "gap",
                "sentence": "Du bist ___ (rarely) müde.",
                "answer": "selten",
                "hint": ""
              },
              {
                "id": "u8-freq-t1-s1-3",
                "type": "gap",
                "sentence": "Er schwimmt ___ (never).",
                "answer": "nie",
                "hint": ""
              },
              {
                "id": "u8-freq-t1-s1-4",
                "type": "gap",
                "sentence": "Ich spiele ___ (always) Fußball.",
                "answer": "immer",
                "hint": ""
              },
              {
                "id": "u8-freq-t1-s1-5",
                "type": "gap",
                "sentence": "Wir gehen ___ (often) ins Kino.",
                "answer": "oft",
                "hint": ""
              },
              {
                "id": "u8-freq-t1-s1-6",
                "type": "gap",
                "sentence": "Sie liest ___ (regularly) Bücher.",
                "answer": "regelmäßig",
                "hint": ""
              },
              {
                "id": "u8-freq-t1-s1-7",
                "type": "gap",
                "sentence": "Ich esse ___ (hardly) Chips.",
                "answer": "kaum",
                "hint": ""
              },
              {
                "id": "u8-freq-t1-s1-8",
                "type": "gap",
                "sentence": "Er kocht ___ (sometimes) Nudeln.",
                "answer": "manchmal",
                "hint": ""
              }
            ]
          },
          {
            "id": "u8-freq-t2-s1",
            "title": "Task 2: Word Order 1",
            "exercises": [
              {
                "id": "u8-freq-t2-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Arrange the words in the correct order to form a valid German sentence. Pay attention to word order rules (like verb position) and verb forms you've learned.",
                "answer": ""
              },
              {
                "id": "u8-freq-t2-s1-1",
                "type": "order",
                "sentence": "She regularly reads books.",
                "answer": "Sie liest regelmäßig Bücher.",
                "orderTokens": [
                  "Bücher",
                  "regelmäßig",
                  "Sie",
                  ".",
                  "liest"
                ],
                "hint": ""
              },
              {
                "id": "u8-freq-t2-s1-2",
                "type": "order",
                "sentence": "He sometimes cooks pasta.",
                "answer": "Er kocht manchmal Nudeln.",
                "orderTokens": [
                  "manchmal",
                  ".",
                  "Nudeln",
                  "Er",
                  "kocht"
                ],
                "hint": ""
              },
              {
                "id": "u8-freq-t2-s1-3",
                "type": "order",
                "sentence": "We often go to the cinema.",
                "answer": "Wir gehen oft ins Kino.",
                "orderTokens": [
                  "Wir",
                  "ins",
                  ".",
                  "Kino",
                  "gehen",
                  "oft"
                ],
                "hint": ""
              },
              {
                "id": "u8-freq-t2-s1-4",
                "type": "order",
                "sentence": "You are rarely tired.",
                "answer": "Du bist selten müde.",
                "orderTokens": [
                  "müde",
                  "selten",
                  "bist",
                  ".",
                  "Du"
                ],
                "hint": ""
              },
              {
                "id": "u8-freq-t2-s1-5",
                "type": "order",
                "sentence": "I always play football.",
                "answer": "Ich spiele immer Fußball.",
                "orderTokens": [
                  "Fußball",
                  ".",
                  "Ich",
                  "immer",
                  "spiele"
                ],
                "hint": ""
              },
              {
                "id": "u8-freq-t2-s1-6",
                "type": "order",
                "sentence": "He never swims.",
                "answer": "Er schwimmt nie.",
                "orderTokens": [
                  ".",
                  "Er",
                  "nie",
                  "schwimmt"
                ],
                "hint": ""
              },
              {
                "id": "u8-freq-t2-s1-7",
                "type": "order",
                "sentence": "She regularly reads books.",
                "answer": "Sie liest regelmäßig Bücher.",
                "orderTokens": [
                  "Sie",
                  "liest",
                  ".",
                  "regelmäßig",
                  "Bücher"
                ],
                "hint": ""
              },
              {
                "id": "u8-freq-t2-s1-8",
                "type": "order",
                "sentence": "He sometimes cooks pasta.",
                "answer": "Er kocht manchmal Nudeln.",
                "orderTokens": [
                  "manchmal",
                  "Nudeln",
                  ".",
                  "kocht",
                  "Er"
                ],
                "hint": ""
              }
            ]
          },
          {
            "id": "u8-freq-t3-s1",
            "title": "Task 3: Word Order with translations 1",
            "exercises": [
              {
                "id": "u8-freq-t3-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Arrange the words in the correct order to form a valid German sentence. Pay attention to word order rules (like verb position) and verb forms you've learned.",
                "answer": ""
              },
              {
                "id": "u8-freq-t3-s1-1",
                "type": "order",
                "sentence": "I ALWAYS play football.",
                "answer": "Ich spiele immer Fußball.",
                "orderTokens": [
                  "immer",
                  "spiele",
                  ".",
                  "Fußball",
                  "Ich"
                ],
                "hint": ""
              },
              {
                "id": "u8-freq-t3-s1-2",
                "type": "order",
                "sentence": "He SOMETIMES cooks pasta.",
                "answer": "Er kocht manchmal Nudeln.",
                "orderTokens": [
                  ".",
                  "kocht",
                  "Nudeln",
                  "manchmal",
                  "Er"
                ],
                "hint": ""
              },
              {
                "id": "u8-freq-t3-s1-3",
                "type": "order",
                "sentence": "We OFTEN go to the cinema.",
                "answer": "Wir gehen oft ins Kino.",
                "orderTokens": [
                  "oft",
                  "gehen",
                  ".",
                  "ins",
                  "Kino",
                  "Wir"
                ],
                "hint": ""
              },
              {
                "id": "u8-freq-t3-s1-4",
                "type": "order",
                "sentence": "I ALWAYS play football.",
                "answer": "Ich spiele immer Fußball.",
                "orderTokens": [
                  "Fußball",
                  "spiele",
                  "immer",
                  ".",
                  "Ich"
                ],
                "hint": ""
              },
              {
                "id": "u8-freq-t3-s1-5",
                "type": "order",
                "sentence": "He SOMETIMES cooks pasta.",
                "answer": "Er kocht manchmal Nudeln.",
                "orderTokens": [
                  "Er",
                  "manchmal",
                  "Nudeln",
                  ".",
                  "kocht"
                ],
                "hint": ""
              },
              {
                "id": "u8-freq-t3-s1-6",
                "type": "order",
                "sentence": "We OFTEN go to the cinema.",
                "answer": "Wir gehen oft ins Kino.",
                "orderTokens": [
                  "gehen",
                  "ins",
                  ".",
                  "Wir",
                  "oft",
                  "Kino"
                ],
                "hint": ""
              },
              {
                "id": "u8-freq-t3-s1-7",
                "type": "order",
                "sentence": "I ALWAYS play football.",
                "answer": "Ich spiele immer Fußball.",
                "orderTokens": [
                  "Fußball",
                  ".",
                  "Ich",
                  "immer",
                  "spiele"
                ],
                "hint": ""
              },
              {
                "id": "u8-freq-t3-s1-8",
                "type": "order",
                "sentence": "He SOMETIMES cooks pasta.",
                "answer": "Er kocht manchmal Nudeln.",
                "orderTokens": [
                  "kocht",
                  "Nudeln",
                  "manchmal",
                  ".",
                  "Er"
                ],
                "hint": ""
              }
            ]
          }
        ]
      },
      {
        "id": "u8-su3",
        "title": "Adverbs Time-Manner-Place",
        "taskSets": [
          {
            "id": "u8-tmp-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u8-tmp-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Arrange the words in the correct order to form a valid German sentence. Pay attention to word order rules (like verb position) and verb forms you've learned.",
                "answer": ""
              },
              {
                "id": "u8-tmp-s1-1",
                "type": "order",
                "sentence": "She often reads at home.",
                "answer": "Sie liest oft zu Hause.",
                "orderTokens": [
                  "zu",
                  ".",
                  "Sie",
                  "liest",
                  "oft",
                  "Hause"
                ],
                "hint": ""
              },
              {
                "id": "u8-tmp-s1-2",
                "type": "order",
                "sentence": "We are going quickly to the city tomorrow.",
                "answer": "Wir gehen morgen schnell in die Stadt.",
                "orderTokens": [
                  "gehen",
                  "schnell",
                  "Wir",
                  "in",
                  ".",
                  "morgen",
                  "die",
                  "Stadt"
                ],
                "hint": ""
              },
              {
                "id": "u8-tmp-s1-3",
                "type": "order",
                "sentence": "He is learning well in school now. (T-M-P)",
                "answer": "Er lernt jetzt gut in der Schule.",
                "orderTokens": [
                  "Schule",
                  "Er",
                  "jetzt",
                  "gut",
                  "in",
                  ".",
                  "der",
                  "lernt"
                ],
                "hint": ""
              },
              {
                "id": "u8-tmp-s1-4",
                "type": "order",
                "sentence": "I am travelling to Berlin by train today. (T-M-P)",
                "answer": "Ich fahre heute mit dem Zug nach Berlin.",
                "orderTokens": [
                  "Berlin",
                  "mit",
                  "fahre",
                  "dem",
                  "heute",
                  "Ich",
                  ".",
                  "Zug",
                  "nach"
                ],
                "hint": ""
              },
              {
                "id": "u8-tmp-s1-5",
                "type": "order",
                "sentence": "We play football tomorrow in the park. (Time first!)",
                "answer": "Wir spielen morgen im Park Fußball.",
                "orderTokens": [
                  "Park",
                  ".",
                  "Wir",
                  "spielen",
                  "morgen",
                  "Fußball",
                  "im"
                ],
                "hint": ""
              },
              {
                "id": "u8-tmp-s1-6",
                "type": "order",
                "sentence": "She often reads at home.",
                "answer": "Sie liest oft zu Hause.",
                "orderTokens": [
                  ".",
                  "liest",
                  "Hause",
                  "zu",
                  "oft",
                  "Sie"
                ],
                "hint": ""
              },
              {
                "id": "u8-tmp-s1-7",
                "type": "order",
                "sentence": "We are going quickly to the city tomorrow.",
                "answer": "Wir gehen morgen schnell in die Stadt.",
                "orderTokens": [
                  ".",
                  "in",
                  "Stadt",
                  "morgen",
                  "Wir",
                  "die",
                  "gehen",
                  "schnell"
                ],
                "hint": ""
              },
              {
                "id": "u8-tmp-s1-8",
                "type": "order",
                "sentence": "He is learning well in school now. (T-M-P)",
                "answer": "Er lernt jetzt gut in der Schule.",
                "orderTokens": [
                  "gut",
                  "Schule",
                  ".",
                  "Er",
                  "jetzt",
                  "lernt",
                  "in",
                  "der"
                ],
                "hint": ""
              }
            ]
          },
          {
            "id": "u8-tmp-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u8-tmp-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Arrange the words in the correct order to form a valid German sentence. Pay attention to word order rules (like verb position) and verb forms you've learned.",
                "answer": ""
              },
              {
                "id": "u8-tmp-s2-1",
                "type": "order",
                "sentence": "I am travelling to Berlin by train today. (T-M-P)",
                "answer": "Ich fahre heute mit dem Zug nach Berlin.",
                "orderTokens": [
                  "mit",
                  "dem",
                  "Zug",
                  "Berlin",
                  "fahre",
                  "heute",
                  "nach",
                  "Ich",
                  "."
                ],
                "hint": ""
              },
              {
                "id": "u8-tmp-s2-2",
                "type": "order",
                "sentence": "We are going quickly to the city tomorrow.",
                "answer": "Wir gehen morgen schnell in die Stadt.",
                "orderTokens": [
                  "Wir",
                  "morgen",
                  "Stadt",
                  "in",
                  "schnell",
                  "die",
                  "gehen",
                  "."
                ],
                "hint": ""
              },
              {
                "id": "u8-tmp-s2-3",
                "type": "order",
                "sentence": "She often reads at home.",
                "answer": "Sie liest oft zu Hause.",
                "orderTokens": [
                  "zu",
                  "liest",
                  "Hause",
                  ".",
                  "oft",
                  "Sie"
                ],
                "hint": ""
              },
              {
                "id": "u8-tmp-s2-4",
                "type": "order",
                "sentence": "We play football tomorrow in the park. (Time first!)",
                "answer": "Wir spielen morgen im Park Fußball.",
                "orderTokens": [
                  "Fußball",
                  "morgen",
                  ".",
                  "Wir",
                  "spielen",
                  "im",
                  "Park"
                ],
                "hint": ""
              },
              {
                "id": "u8-tmp-s2-5",
                "type": "order",
                "sentence": "He is learning well in school now. (T-M-P)",
                "answer": "Er lernt jetzt gut in der Schule.",
                "orderTokens": [
                  "jetzt",
                  "Schule",
                  "in",
                  "der",
                  "gut",
                  "lernt",
                  "Er",
                  "."
                ],
                "hint": ""
              },
              {
                "id": "u8-tmp-s2-6",
                "type": "order",
                "sentence": "I am travelling to Berlin by train today. (T-M-P)",
                "answer": "Ich fahre heute mit dem Zug nach Berlin.",
                "orderTokens": [
                  "Zug",
                  "fahre",
                  "nach",
                  "heute",
                  "Ich",
                  ".",
                  "dem",
                  "Berlin",
                  "mit"
                ],
                "hint": ""
              },
              {
                "id": "u8-tmp-s2-7",
                "type": "order",
                "sentence": "We are going quickly to the city tomorrow.",
                "answer": "Wir gehen morgen schnell in die Stadt.",
                "orderTokens": [
                  "Stadt",
                  "Wir",
                  ".",
                  "morgen",
                  "die",
                  "schnell",
                  "in",
                  "gehen"
                ],
                "hint": ""
              },
              {
                "id": "u8-tmp-s2-8",
                "type": "order",
                "sentence": "She often reads at home.",
                "answer": "Sie liest oft zu Hause.",
                "orderTokens": [
                  "oft",
                  ".",
                  "Sie",
                  "liest",
                  "zu",
                  "Hause"
                ],
                "hint": ""
              }
            ]
          },
          {
            "id": "u8-tmp-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u8-tmp-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Arrange the words in the correct order to form a valid German sentence. Pay attention to word order rules (like verb position) and verb forms you've learned.",
                "answer": ""
              },
              {
                "id": "u8-tmp-s3-1",
                "type": "order",
                "sentence": "I am travelling to Berlin by train today. (T-M-P)",
                "answer": "Ich fahre heute mit dem Zug nach Berlin.",
                "orderTokens": [
                  "heute",
                  "mit",
                  "Ich",
                  ".",
                  "nach",
                  "dem",
                  "Berlin",
                  "fahre",
                  "Zug"
                ],
                "hint": ""
              },
              {
                "id": "u8-tmp-s3-2",
                "type": "order",
                "sentence": "We play football tomorrow in the park. (Time first!)",
                "answer": "Wir spielen morgen im Park Fußball.",
                "orderTokens": [
                  "im",
                  ".",
                  "morgen",
                  "Wir",
                  "Fußball",
                  "spielen",
                  "Park"
                ],
                "hint": ""
              },
              {
                "id": "u8-tmp-s3-3",
                "type": "order",
                "sentence": "He is learning well in school now. (T-M-P)",
                "answer": "Er lernt jetzt gut in der Schule.",
                "orderTokens": [
                  "jetzt",
                  "in",
                  "lernt",
                  ".",
                  "Schule",
                  "der",
                  "gut",
                  "Er"
                ],
                "hint": ""
              },
              {
                "id": "u8-tmp-s3-4",
                "type": "order",
                "sentence": "We are going quickly to the city tomorrow.",
                "answer": "Wir gehen morgen schnell in die Stadt.",
                "orderTokens": [
                  "die",
                  "schnell",
                  "Wir",
                  "Stadt",
                  ".",
                  "morgen",
                  "in",
                  "gehen"
                ],
                "hint": ""
              },
              {
                "id": "u8-tmp-s3-5",
                "type": "order",
                "sentence": "She often reads at home.",
                "answer": "Sie liest oft zu Hause.",
                "orderTokens": [
                  "zu",
                  "Hause",
                  ".",
                  "liest",
                  "oft",
                  "Sie"
                ],
                "hint": ""
              },
              {
                "id": "u8-tmp-s3-6",
                "type": "order",
                "sentence": "I am travelling to Berlin by train today. (T-M-P)",
                "answer": "Ich fahre heute mit dem Zug nach Berlin.",
                "orderTokens": [
                  "fahre",
                  "Berlin",
                  "mit",
                  "Ich",
                  "dem",
                  ".",
                  "heute",
                  "Zug",
                  "nach"
                ],
                "hint": ""
              },
              {
                "id": "u8-tmp-s3-7",
                "type": "order",
                "sentence": "We play football tomorrow in the park. (Time first!)",
                "answer": "Wir spielen morgen im Park Fußball.",
                "orderTokens": [
                  "Fußball",
                  "morgen",
                  ".",
                  "spielen",
                  "Park",
                  "im",
                  "Wir"
                ],
                "hint": ""
              },
              {
                "id": "u8-tmp-s3-8",
                "type": "order",
                "sentence": "He is learning well in school now. (T-M-P)",
                "answer": "Er lernt jetzt gut in der Schule.",
                "orderTokens": [
                  "in",
                  ".",
                  "der",
                  "gut",
                  "jetzt",
                  "Er",
                  "Schule",
                  "lernt"
                ],
                "hint": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "unit-9",
    "title": "Unit 9: Word order",
    "explanation": "The verb is ALWAYS the 2nd idea! If you start with a time phrase, the subject comes after the verb (Inversion).\n\n0-position words: aber (but), und (and), denn (because), oder (or). These words DO NOT count as position 1. The verb is still 2nd after them.\n\nOther conjunctions like außerdem (besides), auch (also), leider (unfortunately) DO count as position 1, so the verb comes right after them!",
    "subunits": [
      {
        "id": "u9-su1",
        "title": "Inversion",
        "taskSets": [
          {
            "id": "u9-inv-s1-s1",
            "title": "Set 1: Basic Inversion 1",
            "exercises": [
              {
                "id": "u9-inv-s1-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Arrange the words in the correct order to form a valid German sentence. Pay attention to word order rules (like verb position) and verb forms you've learned.",
                "answer": ""
              },
              {
                "id": "u9-inv-s1-s1-1",
                "type": "order",
                "sentence": "At the weekend he sleeps long.",
                "answer": "Am Wochenende schläft er lange.",
                "orderTokens": [
                  "Am",
                  "schläft",
                  "er",
                  "Wochenende",
                  ".",
                  "lange"
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s1-s1-2",
                "type": "order",
                "sentence": "Tomorrow I play football.",
                "answer": "Morgen spiele ich Fußball.",
                "orderTokens": [
                  "Fußball",
                  ".",
                  "Morgen",
                  "spiele",
                  "ich"
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s1-s1-3",
                "type": "order",
                "sentence": "Often we go into the cinema.",
                "answer": "Oft gehen wir ins Kino.",
                "orderTokens": [
                  "wir",
                  "Kino",
                  "gehen",
                  ".",
                  "ins",
                  "Oft"
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s1-s1-4",
                "type": "order",
                "sentence": "Today I have no time.",
                "answer": "Heute habe ich keine Zeit.",
                "orderTokens": [
                  "habe",
                  "Heute",
                  "keine",
                  ".",
                  "ich",
                  "Zeit"
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s1-s1-5",
                "type": "order",
                "sentence": "Here I don't park.",
                "answer": "Hier parke ich nicht.",
                "orderTokens": [
                  "parke",
                  "Hier",
                  ".",
                  "nicht",
                  "ich"
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s1-s1-6",
                "type": "order",
                "sentence": "Sometimes she eats pizza.",
                "answer": "Manchmal isst sie Pizza.",
                "orderTokens": [
                  "Manchmal",
                  "Pizza",
                  ".",
                  "sie",
                  "isst"
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s1-s1-7",
                "type": "order",
                "sentence": "At the weekend he sleeps long.",
                "answer": "Am Wochenende schläft er lange.",
                "orderTokens": [
                  "lange",
                  "er",
                  "Am",
                  ".",
                  "schläft",
                  "Wochenende"
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s1-s1-8",
                "type": "order",
                "sentence": "Tomorrow I play football.",
                "answer": "Morgen spiele ich Fußball.",
                "orderTokens": [
                  "ich",
                  ".",
                  "Morgen",
                  "Fußball",
                  "spiele"
                ],
                "hint": ""
              }
            ]
          },
          {
            "id": "u9-inv-s2-s1",
            "title": "Set 2: Time-Manner-Place 1",
            "exercises": [
              {
                "id": "u9-inv-s2-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Arrange the words in the correct order to form a valid German sentence. Pay attention to word order rules (like verb position) and verb forms you've learned.",
                "answer": ""
              },
              {
                "id": "u9-inv-s2-s1-1",
                "type": "order",
                "sentence": "In the morning I eat gladly in the kitchen.",
                "answer": "Am Morgen esse ich gern in der Küche.",
                "orderTokens": [
                  ".",
                  "Küche",
                  "esse",
                  "gern",
                  "Morgen",
                  "ich",
                  "der",
                  "Am",
                  "in"
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s2-s1-2",
                "type": "order",
                "sentence": "At the weekend she reads quietly at home.",
                "answer": "Am Wochenende liest sie ruhig zu Hause.",
                "orderTokens": [
                  "Hause",
                  "sie",
                  "zu",
                  "ruhig",
                  "liest",
                  "Wochenende",
                  ".",
                  "Am"
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s2-s1-3",
                "type": "order",
                "sentence": "Today he plays football well in the park.",
                "answer": "Heute spielt er gut im Park Fußball.",
                "orderTokens": [
                  "im",
                  "Park",
                  "gut",
                  ".",
                  "spielt",
                  "er",
                  "Fußball",
                  "Heute"
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s2-s1-4",
                "type": "order",
                "sentence": "Tomorrow we travel quickly to Berlin.",
                "answer": "Morgen fahren wir schnell nach Berlin.",
                "orderTokens": [
                  "nach",
                  "Morgen",
                  "schnell",
                  "fahren",
                  ".",
                  "Berlin",
                  "wir"
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s2-s1-5",
                "type": "order",
                "sentence": "In the morning I eat gladly in the kitchen.",
                "answer": "Am Morgen esse ich gern in der Küche.",
                "orderTokens": [
                  "Küche",
                  "der",
                  "esse",
                  "Am",
                  "ich",
                  "Morgen",
                  "in",
                  ".",
                  "gern"
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s2-s1-6",
                "type": "order",
                "sentence": "At the weekend she reads quietly at home.",
                "answer": "Am Wochenende liest sie ruhig zu Hause.",
                "orderTokens": [
                  "ruhig",
                  "Am",
                  "Wochenende",
                  ".",
                  "sie",
                  "zu",
                  "Hause",
                  "liest"
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s2-s1-7",
                "type": "order",
                "sentence": "Today he plays football well in the park.",
                "answer": "Heute spielt er gut im Park Fußball.",
                "orderTokens": [
                  "spielt",
                  ".",
                  "Park",
                  "im",
                  "Fußball",
                  "er",
                  "gut",
                  "Heute"
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s2-s1-8",
                "type": "order",
                "sentence": "Tomorrow we travel quickly to Berlin.",
                "answer": "Morgen fahren wir schnell nach Berlin.",
                "orderTokens": [
                  "wir",
                  ".",
                  "schnell",
                  "Morgen",
                  "fahren",
                  "nach",
                  "Berlin"
                ],
                "hint": ""
              }
            ]
          },
          {
            "id": "u9-inv-s3-s1",
            "title": "Set 3: Past Tense 1",
            "exercises": [
              {
                "id": "u9-inv-s3-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Arrange the words in the correct order to form a valid German sentence. Pay attention to word order rules (like verb position) and verb forms you've learned.",
                "answer": ""
              },
              {
                "id": "u9-inv-s3-s1-1",
                "type": "order",
                "sentence": "Often she ate pizza here.",
                "answer": "Oft hat sie hier Pizza gegessen.",
                "orderTokens": [
                  "hier",
                  "gegessen",
                  "Pizza",
                  "hat",
                  "Oft",
                  "sie",
                  "."
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s3-s1-2",
                "type": "order",
                "sentence": "Yesterday I played football.",
                "answer": "Gestern habe ich Fußball gespielt.",
                "orderTokens": [
                  "Fußball",
                  "ich",
                  "habe",
                  "gespielt",
                  "Gestern",
                  "."
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s3-s1-3",
                "type": "order",
                "sentence": "On the weekend we went to the cinema.",
                "answer": "Am Wochenende sind wir ins Kino gegangen.",
                "orderTokens": [
                  "wir",
                  "Kino",
                  "sind",
                  "Wochenende",
                  "gegangen",
                  "ins",
                  "Am",
                  "."
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s3-s1-4",
                "type": "order",
                "sentence": "Letzte Woche war er in Berlin.",
                "answer": "Letzte Woche war er in Berlin.",
                "orderTokens": [
                  "Woche",
                  "Letzte",
                  "in",
                  "Berlin",
                  "war",
                  "er",
                  "."
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s3-s1-5",
                "type": "order",
                "sentence": "Often she ate pizza here.",
                "answer": "Oft hat sie hier Pizza gegessen.",
                "orderTokens": [
                  "Oft",
                  ".",
                  "hat",
                  "hier",
                  "Pizza",
                  "sie",
                  "gegessen"
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s3-s1-6",
                "type": "order",
                "sentence": "Yesterday I played football.",
                "answer": "Gestern habe ich Fußball gespielt.",
                "orderTokens": [
                  ".",
                  "gespielt",
                  "Gestern",
                  "ich",
                  "Fußball",
                  "habe"
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s3-s1-7",
                "type": "order",
                "sentence": "On the weekend we went to the cinema.",
                "answer": "Am Wochenende sind wir ins Kino gegangen.",
                "orderTokens": [
                  "Kino",
                  "wir",
                  "Wochenende",
                  "Am",
                  ".",
                  "sind",
                  "ins",
                  "gegangen"
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s3-s1-8",
                "type": "order",
                "sentence": "Letzte Woche war er in Berlin.",
                "answer": "Letzte Woche war er in Berlin.",
                "orderTokens": [
                  "Berlin",
                  "war",
                  "er",
                  "Woche",
                  "in",
                  ".",
                  "Letzte"
                ],
                "hint": ""
              }
            ]
          },
          {
            "id": "u9-inv-s4-s1",
            "title": "Set 4: Form change 1",
            "exercises": [
              {
                "id": "u9-inv-s4-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Arrange the words in the correct order to form a valid German sentence. Pay attention to word order rules (like verb position) and verb forms you've learned.",
                "answer": ""
              },
              {
                "id": "u9-inv-s4-s1-1",
                "type": "order",
                "sentence": "Today we travel quickly to Berlin.",
                "answer": "Heute fahren wir schnell nach Berlin.",
                "orderTokens": [
                  "Berlin",
                  "wir",
                  "(fahren)",
                  "nach",
                  ".",
                  "Heute",
                  "schnell"
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s4-s1-2",
                "type": "order",
                "sentence": "Yesterday she (ate) pizza.",
                "answer": "Gestern hat sie Pizza gegessen.",
                "orderTokens": [
                  "gegessen",
                  "Gestern",
                  "(haben)",
                  ".",
                  "sie",
                  "Pizza"
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s4-s1-3",
                "type": "order",
                "sentence": "Tomorrow I (play) football.",
                "answer": "Morgen spiele ich Fußball.",
                "orderTokens": [
                  "ich",
                  "Fußball",
                  "(spielen)",
                  ".",
                  "Morgen"
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s4-s1-4",
                "type": "order",
                "sentence": "Today we travel quickly to Berlin.",
                "answer": "Heute fahren wir schnell nach Berlin.",
                "orderTokens": [
                  "Heute",
                  "schnell",
                  "Berlin",
                  "wir",
                  ".",
                  "(fahren)",
                  "nach"
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s4-s1-5",
                "type": "order",
                "sentence": "Yesterday she (ate) pizza.",
                "answer": "Gestern hat sie Pizza gegessen.",
                "orderTokens": [
                  "Pizza",
                  ".",
                  "sie",
                  "(haben)",
                  "Gestern",
                  "gegessen"
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s4-s1-6",
                "type": "order",
                "sentence": "Tomorrow I (play) football.",
                "answer": "Morgen spiele ich Fußball.",
                "orderTokens": [
                  "Fußball",
                  "ich",
                  "(spielen)",
                  "Morgen",
                  "."
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s4-s1-7",
                "type": "order",
                "sentence": "Today we travel quickly to Berlin.",
                "answer": "Heute fahren wir schnell nach Berlin.",
                "orderTokens": [
                  "Heute",
                  "Berlin",
                  "nach",
                  "schnell",
                  "(fahren)",
                  "wir",
                  "."
                ],
                "hint": ""
              },
              {
                "id": "u9-inv-s4-s1-8",
                "type": "order",
                "sentence": "Yesterday she (ate) pizza.",
                "answer": "Gestern hat sie Pizza gegessen.",
                "orderTokens": [
                  "sie",
                  "Pizza",
                  "Gestern",
                  ".",
                  "(haben)",
                  "gegessen"
                ],
                "hint": ""
              }
            ]
          }
        ]
      },
      {
        "id": "u9-su2",
        "title": "Ja-nein Fragen",
        "taskSets": [
          {
            "id": "u9-jaNein-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u9-jaNein-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Arrange the words in the correct order to form a valid German sentence. Pay attention to word order rules (like verb position) and verb forms you've learned.",
                "answer": ""
              },
              {
                "id": "u9-jaNein-s1-1",
                "type": "order",
                "sentence": "Do you have a brother?",
                "answer": "Hast du einen Bruder?",
                "orderTokens": [
                  "Bruder",
                  "einen",
                  "du",
                  "Hast",
                  "?"
                ],
                "hint": ""
              },
              {
                "id": "u9-jaNein-s1-2",
                "type": "order",
                "sentence": "Do you come from England?",
                "answer": "Kommst du aus England?",
                "orderTokens": [
                  "England",
                  "Kommst",
                  "du",
                  "aus",
                  "?"
                ],
                "hint": ""
              },
              {
                "id": "u9-jaNein-s1-3",
                "type": "order",
                "sentence": "Do you all like football?",
                "answer": "Mögt ihr Fußball?",
                "orderTokens": [
                  "Fußball",
                  "ihr",
                  "Mögt",
                  "?"
                ],
                "hint": ""
              },
              {
                "id": "u9-jaNein-s1-4",
                "type": "order",
                "sentence": "Does she play an instrument?",
                "answer": "Spielt sie ein Instrument?",
                "orderTokens": [
                  "sie",
                  "ein",
                  "Spielt",
                  "?",
                  "Instrument"
                ],
                "hint": ""
              },
              {
                "id": "u9-jaNein-s1-5",
                "type": "order",
                "sentence": "Is he twelve years old?",
                "answer": "Ist er zwölf Jahre alt?",
                "orderTokens": [
                  "alt",
                  "?",
                  "zwölf",
                  "er",
                  "Ist",
                  "Jahre"
                ],
                "hint": ""
              },
              {
                "id": "u9-jaNein-s1-6",
                "type": "order",
                "sentence": "Do we have time?",
                "answer": "Haben wir Zeit?",
                "orderTokens": [
                  "wir",
                  "?",
                  "Haben",
                  "Zeit"
                ],
                "hint": ""
              },
              {
                "id": "u9-jaNein-s1-7",
                "type": "order",
                "sentence": "Do you have a brother?",
                "answer": "Hast du einen Bruder?",
                "orderTokens": [
                  "?",
                  "Bruder",
                  "du",
                  "Hast",
                  "einen"
                ],
                "hint": ""
              },
              {
                "id": "u9-jaNein-s1-8",
                "type": "order",
                "sentence": "Do you come from England?",
                "answer": "Kommst du aus England?",
                "orderTokens": [
                  "du",
                  "aus",
                  "?",
                  "England",
                  "Kommst"
                ],
                "hint": ""
              }
            ]
          },
          {
            "id": "u9-jaNein-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u9-jaNein-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Arrange the words in the correct order to form a valid German sentence. Pay attention to word order rules (like verb position) and verb forms you've learned.",
                "answer": ""
              },
              {
                "id": "u9-jaNein-s2-1",
                "type": "order",
                "sentence": "Is he twelve years old?",
                "answer": "Ist er zwölf Jahre alt?",
                "orderTokens": [
                  "?",
                  "zwölf",
                  "er",
                  "Jahre",
                  "Ist",
                  "alt"
                ],
                "hint": ""
              },
              {
                "id": "u9-jaNein-s2-2",
                "type": "order",
                "sentence": "Do you all like football?",
                "answer": "Mögt ihr Fußball?",
                "orderTokens": [
                  "Mögt",
                  "?",
                  "Fußball",
                  "ihr"
                ],
                "hint": ""
              },
              {
                "id": "u9-jaNein-s2-3",
                "type": "order",
                "sentence": "Does she play an instrument?",
                "answer": "Spielt sie ein Instrument?",
                "orderTokens": [
                  "Spielt",
                  "?",
                  "Instrument",
                  "sie",
                  "ein"
                ],
                "hint": ""
              },
              {
                "id": "u9-jaNein-s2-4",
                "type": "order",
                "sentence": "Do you come from England?",
                "answer": "Kommst du aus England?",
                "orderTokens": [
                  "England",
                  "du",
                  "Kommst",
                  "?",
                  "aus"
                ],
                "hint": ""
              },
              {
                "id": "u9-jaNein-s2-5",
                "type": "order",
                "sentence": "Do you have a brother?",
                "answer": "Hast du einen Bruder?",
                "orderTokens": [
                  "einen",
                  "Bruder",
                  "du",
                  "?",
                  "Hast"
                ],
                "hint": ""
              },
              {
                "id": "u9-jaNein-s2-6",
                "type": "order",
                "sentence": "Do we have time?",
                "answer": "Haben wir Zeit?",
                "orderTokens": [
                  "?",
                  "wir",
                  "Zeit",
                  "Haben"
                ],
                "hint": ""
              },
              {
                "id": "u9-jaNein-s2-7",
                "type": "order",
                "sentence": "Is he twelve years old?",
                "answer": "Ist er zwölf Jahre alt?",
                "orderTokens": [
                  "?",
                  "Ist",
                  "zwölf",
                  "er",
                  "alt",
                  "Jahre"
                ],
                "hint": ""
              },
              {
                "id": "u9-jaNein-s2-8",
                "type": "order",
                "sentence": "Do you all like football?",
                "answer": "Mögt ihr Fußball?",
                "orderTokens": [
                  "?",
                  "Mögt",
                  "ihr",
                  "Fußball"
                ],
                "hint": ""
              }
            ]
          },
          {
            "id": "u9-jaNein-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u9-jaNein-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Arrange the words in the correct order to form a valid German sentence. Pay attention to word order rules (like verb position) and verb forms you've learned.",
                "answer": ""
              },
              {
                "id": "u9-jaNein-s3-1",
                "type": "order",
                "sentence": "Is he twelve years old?",
                "answer": "Ist er zwölf Jahre alt?",
                "orderTokens": [
                  "Jahre",
                  "?",
                  "zwölf",
                  "er",
                  "Ist",
                  "alt"
                ],
                "hint": ""
              },
              {
                "id": "u9-jaNein-s3-2",
                "type": "order",
                "sentence": "Do you come from England?",
                "answer": "Kommst du aus England?",
                "orderTokens": [
                  "Kommst",
                  "aus",
                  "England",
                  "?",
                  "du"
                ],
                "hint": ""
              },
              {
                "id": "u9-jaNein-s3-3",
                "type": "order",
                "sentence": "Does she play an instrument?",
                "answer": "Spielt sie ein Instrument?",
                "orderTokens": [
                  "Spielt",
                  "Instrument",
                  "?",
                  "ein",
                  "sie"
                ],
                "hint": ""
              },
              {
                "id": "u9-jaNein-s3-4",
                "type": "order",
                "sentence": "Do we have time?",
                "answer": "Haben wir Zeit?",
                "orderTokens": [
                  "Haben",
                  "Zeit",
                  "wir",
                  "?"
                ],
                "hint": ""
              },
              {
                "id": "u9-jaNein-s3-5",
                "type": "order",
                "sentence": "Do you all like football?",
                "answer": "Mögt ihr Fußball?",
                "orderTokens": [
                  "Fußball",
                  "?",
                  "ihr",
                  "Mögt"
                ],
                "hint": ""
              },
              {
                "id": "u9-jaNein-s3-6",
                "type": "order",
                "sentence": "Do you have a brother?",
                "answer": "Hast du einen Bruder?",
                "orderTokens": [
                  "einen",
                  "Hast",
                  "du",
                  "Bruder",
                  "?"
                ],
                "hint": ""
              },
              {
                "id": "u9-jaNein-s3-7",
                "type": "order",
                "sentence": "Is he twelve years old?",
                "answer": "Ist er zwölf Jahre alt?",
                "orderTokens": [
                  "Jahre",
                  "Ist",
                  "alt",
                  "er",
                  "zwölf",
                  "?"
                ],
                "hint": ""
              },
              {
                "id": "u9-jaNein-s3-8",
                "type": "order",
                "sentence": "Do you come from England?",
                "answer": "Kommst du aus England?",
                "orderTokens": [
                  "England",
                  "?",
                  "aus",
                  "du",
                  "Kommst"
                ],
                "hint": ""
              }
            ]
          }
        ]
      },
      {
        "id": "u9-su3",
        "title": "0-words vs Inversion",
        "taskSets": [
          {
            "id": "u9-0words-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u9-0words-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Arrange the words. Remember: aber, und, denn, oder are 0-words. The subject comes next. Words like außerdem, auch, leider take position 1, so the verb comes next!",
                "answer": ""
              },
              {
                "id": "u9-0words-s1-1",
                "type": "order",
                "sentence": "Because she is tired.",
                "answer": "Denn sie ist müde.",
                "orderTokens": [
                  ".",
                  "Denn",
                  "sie",
                  "müde",
                  "ist"
                ],
                "hint": ""
              },
              {
                "id": "u9-0words-s1-2",
                "type": "order",
                "sentence": "And he reads a book.",
                "answer": "Und er liest ein Buch.",
                "orderTokens": [
                  "Buch",
                  ".",
                  "Und",
                  "er",
                  "liest",
                  "ein"
                ],
                "hint": ""
              },
              {
                "id": "u9-0words-s1-3",
                "type": "order",
                "sentence": "Unfortunately he is ill. (leider puts verb 2nd!)",
                "answer": "Leider ist er krank.",
                "orderTokens": [
                  ".",
                  "er",
                  "ist",
                  "krank",
                  "Leider"
                ],
                "hint": ""
              },
              {
                "id": "u9-0words-s1-4",
                "type": "order",
                "sentence": "Also we are tired. (auch puts verb 2nd!)",
                "answer": "Auch sind wir müde.",
                "orderTokens": [
                  "wir",
                  "sind",
                  ".",
                  "müde",
                  "Auch"
                ],
                "hint": ""
              },
              {
                "id": "u9-0words-s1-5",
                "type": "order",
                "sentence": "Unfortunately I don't have time. (leider puts verb 2nd!)",
                "answer": "Leider habe ich keine Zeit.",
                "orderTokens": [
                  "Leider",
                  "Zeit",
                  "habe",
                  "ich",
                  ".",
                  "keine"
                ],
                "hint": ""
              },
              {
                "id": "u9-0words-s1-6",
                "type": "order",
                "sentence": "Or we go to the cinema.",
                "answer": "Oder wir gehen ins Kino.",
                "orderTokens": [
                  ".",
                  "gehen",
                  "ins",
                  "Oder",
                  "wir",
                  "Kino"
                ],
                "hint": ""
              },
              {
                "id": "u9-0words-s1-7",
                "type": "order",
                "sentence": "Besides that he also plays tennis. (außerdem puts verb 2nd!)",
                "answer": "Außerdem spielt er auch Tennis.",
                "orderTokens": [
                  ".",
                  "auch",
                  "er",
                  "Außerdem",
                  "Tennis",
                  "spielt"
                ],
                "hint": ""
              },
              {
                "id": "u9-0words-s1-8",
                "type": "order",
                "sentence": "But I play football today.",
                "answer": "Aber ich spiele heute Fußball.",
                "orderTokens": [
                  "heute",
                  "Aber",
                  ".",
                  "ich",
                  "spiele",
                  "Fußball"
                ],
                "hint": ""
              }
            ]
          },
          {
            "id": "u9-0words-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u9-0words-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Arrange the words. Remember: aber, und, denn, oder are 0-words. The subject comes next. Words like außerdem, auch, leider take position 1, so the verb comes next!",
                "answer": ""
              },
              {
                "id": "u9-0words-s2-1",
                "type": "order",
                "sentence": "Because she is tired.",
                "answer": "Denn sie ist müde.",
                "orderTokens": [
                  "ist",
                  "müde",
                  ".",
                  "sie",
                  "Denn"
                ],
                "hint": ""
              },
              {
                "id": "u9-0words-s2-2",
                "type": "order",
                "sentence": "Unfortunately he is ill. (leider puts verb 2nd!)",
                "answer": "Leider ist er krank.",
                "orderTokens": [
                  "Leider",
                  "ist",
                  ".",
                  "er",
                  "krank"
                ],
                "hint": ""
              },
              {
                "id": "u9-0words-s2-3",
                "type": "order",
                "sentence": "Also we are tired. (auch puts verb 2nd!)",
                "answer": "Auch sind wir müde.",
                "orderTokens": [
                  "wir",
                  "sind",
                  "müde",
                  "Auch",
                  "."
                ],
                "hint": ""
              },
              {
                "id": "u9-0words-s2-4",
                "type": "order",
                "sentence": "Unfortunately I don't have time. (leider puts verb 2nd!)",
                "answer": "Leider habe ich keine Zeit.",
                "orderTokens": [
                  "keine",
                  "habe",
                  "ich",
                  "Leider",
                  ".",
                  "Zeit"
                ],
                "hint": ""
              },
              {
                "id": "u9-0words-s2-5",
                "type": "order",
                "sentence": "Besides that he also plays tennis. (außerdem puts verb 2nd!)",
                "answer": "Außerdem spielt er auch Tennis.",
                "orderTokens": [
                  "er",
                  "auch",
                  ".",
                  "Außerdem",
                  "spielt",
                  "Tennis"
                ],
                "hint": ""
              },
              {
                "id": "u9-0words-s2-6",
                "type": "order",
                "sentence": "Or we go to the cinema.",
                "answer": "Oder wir gehen ins Kino.",
                "orderTokens": [
                  "gehen",
                  "wir",
                  "Kino",
                  "ins",
                  "Oder",
                  "."
                ],
                "hint": ""
              },
              {
                "id": "u9-0words-s2-7",
                "type": "order",
                "sentence": "And he reads a book.",
                "answer": "Und er liest ein Buch.",
                "orderTokens": [
                  "Und",
                  "ein",
                  ".",
                  "er",
                  "Buch",
                  "liest"
                ],
                "hint": ""
              },
              {
                "id": "u9-0words-s2-8",
                "type": "order",
                "sentence": "But I play football today.",
                "answer": "Aber ich spiele heute Fußball.",
                "orderTokens": [
                  "Fußball",
                  "ich",
                  "Aber",
                  ".",
                  "heute",
                  "spiele"
                ],
                "hint": ""
              }
            ]
          },
          {
            "id": "u9-0words-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u9-0words-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Arrange the words. Remember: aber, und, denn, oder are 0-words. The subject comes next. Words like außerdem, auch, leider take position 1, so the verb comes next!",
                "answer": ""
              },
              {
                "id": "u9-0words-s3-1",
                "type": "order",
                "sentence": "Unfortunately he is ill. (leider puts verb 2nd!)",
                "answer": "Leider ist er krank.",
                "orderTokens": [
                  "er",
                  "ist",
                  "krank",
                  "Leider",
                  "."
                ],
                "hint": ""
              },
              {
                "id": "u9-0words-s3-2",
                "type": "order",
                "sentence": "And he reads a book.",
                "answer": "Und er liest ein Buch.",
                "orderTokens": [
                  "er",
                  "liest",
                  "Und",
                  "Buch",
                  ".",
                  "ein"
                ],
                "hint": ""
              },
              {
                "id": "u9-0words-s3-3",
                "type": "order",
                "sentence": "Also we are tired. (auch puts verb 2nd!)",
                "answer": "Auch sind wir müde.",
                "orderTokens": [
                  "wir",
                  ".",
                  "sind",
                  "Auch",
                  "müde"
                ],
                "hint": ""
              },
              {
                "id": "u9-0words-s3-4",
                "type": "order",
                "sentence": "Besides that he also plays tennis. (außerdem puts verb 2nd!)",
                "answer": "Außerdem spielt er auch Tennis.",
                "orderTokens": [
                  "Tennis",
                  "Außerdem",
                  "spielt",
                  ".",
                  "auch",
                  "er"
                ],
                "hint": ""
              },
              {
                "id": "u9-0words-s3-5",
                "type": "order",
                "sentence": "Unfortunately I don't have time. (leider puts verb 2nd!)",
                "answer": "Leider habe ich keine Zeit.",
                "orderTokens": [
                  "Leider",
                  "habe",
                  "Zeit",
                  ".",
                  "keine",
                  "ich"
                ],
                "hint": ""
              },
              {
                "id": "u9-0words-s3-6",
                "type": "order",
                "sentence": "Or we go to the cinema.",
                "answer": "Oder wir gehen ins Kino.",
                "orderTokens": [
                  "wir",
                  "gehen",
                  ".",
                  "Oder",
                  "ins",
                  "Kino"
                ],
                "hint": ""
              },
              {
                "id": "u9-0words-s3-7",
                "type": "order",
                "sentence": "Because she is tired.",
                "answer": "Denn sie ist müde.",
                "orderTokens": [
                  "sie",
                  "Denn",
                  "ist",
                  ".",
                  "müde"
                ],
                "hint": ""
              },
              {
                "id": "u9-0words-s3-8",
                "type": "order",
                "sentence": "But I play football today.",
                "answer": "Aber ich spiele heute Fußball.",
                "orderTokens": [
                  ".",
                  "Aber",
                  "spiele",
                  "Fußball",
                  "ich",
                  "heute"
                ],
                "hint": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "unit-10",
    "title": "Unit 10: Imperfect (past tense)",
    "explanation": "The imperfect (simple past) of sein (war), haben (hatte), and mögen (mochte).",
    "subunits": [
      {
        "id": "u10-su1",
        "title": "war (was/were)",
        "taskSets": [
          {
            "id": "u10-war-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u10-war-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise 'war' (sein in past): ich war, du warst, er/sie/es war, wir waren, ihr wart, sie/Sie waren",
                "answer": ""
              },
              {
                "id": "u10-war-s1-1",
                "type": "gap",
                "sentence": "Ich ___ (was) müde.",
                "answer": "war",
                "hint": ""
              },
              {
                "id": "u10-war-s1-2",
                "type": "gap",
                "sentence": "Ihr ___ (were) lustig.",
                "answer": "wart",
                "hint": ""
              },
              {
                "id": "u10-war-s1-3",
                "type": "gap",
                "sentence": "Es ___ (was) schön.",
                "answer": "war",
                "hint": ""
              },
              {
                "id": "u10-war-s1-4",
                "type": "gap",
                "sentence": "Sie ___ (they were) in Berlin.",
                "answer": "waren",
                "hint": ""
              },
              {
                "id": "u10-war-s1-5",
                "type": "gap",
                "sentence": "Du ___ (were) krank.",
                "answer": "warst",
                "hint": ""
              },
              {
                "id": "u10-war-s1-6",
                "type": "gap",
                "sentence": "Wir ___ (were) zu Hause.",
                "answer": "waren",
                "hint": ""
              },
              {
                "id": "u10-war-s1-7",
                "type": "gap",
                "sentence": "Sie ___ (she was) dort.",
                "answer": "war",
                "hint": ""
              },
              {
                "id": "u10-war-s1-8",
                "type": "gap",
                "sentence": "Er ___ (was) hier.",
                "answer": "war",
                "hint": ""
              }
            ]
          },
          {
            "id": "u10-war-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u10-war-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise 'war' (sein in past): ich war, du warst, er/sie/es war, wir waren, ihr wart, sie/Sie waren",
                "answer": ""
              },
              {
                "id": "u10-war-s2-1",
                "type": "gap",
                "sentence": "Wir ___ (were) zu Hause.",
                "answer": "waren",
                "hint": ""
              },
              {
                "id": "u10-war-s2-2",
                "type": "gap",
                "sentence": "Du ___ (were) krank.",
                "answer": "warst",
                "hint": ""
              },
              {
                "id": "u10-war-s2-3",
                "type": "gap",
                "sentence": "Ihr ___ (were) lustig.",
                "answer": "wart",
                "hint": ""
              },
              {
                "id": "u10-war-s2-4",
                "type": "gap",
                "sentence": "Ich ___ (was) müde.",
                "answer": "war",
                "hint": ""
              },
              {
                "id": "u10-war-s2-5",
                "type": "gap",
                "sentence": "Es ___ (was) schön.",
                "answer": "war",
                "hint": ""
              },
              {
                "id": "u10-war-s2-6",
                "type": "gap",
                "sentence": "Er ___ (was) hier.",
                "answer": "war",
                "hint": ""
              },
              {
                "id": "u10-war-s2-7",
                "type": "gap",
                "sentence": "Sie ___ (she was) dort.",
                "answer": "war",
                "hint": ""
              },
              {
                "id": "u10-war-s2-8",
                "type": "gap",
                "sentence": "Sie ___ (they were) in Berlin.",
                "answer": "waren",
                "hint": ""
              }
            ]
          },
          {
            "id": "u10-war-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u10-war-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise 'war' (sein in past): ich war, du warst, er/sie/es war, wir waren, ihr wart, sie/Sie waren",
                "answer": ""
              },
              {
                "id": "u10-war-s3-1",
                "type": "gap",
                "sentence": "Er ___ (was) hier.",
                "answer": "war",
                "hint": ""
              },
              {
                "id": "u10-war-s3-2",
                "type": "gap",
                "sentence": "Ihr ___ (were) lustig.",
                "answer": "wart",
                "hint": ""
              },
              {
                "id": "u10-war-s3-3",
                "type": "gap",
                "sentence": "Es ___ (was) schön.",
                "answer": "war",
                "hint": ""
              },
              {
                "id": "u10-war-s3-4",
                "type": "gap",
                "sentence": "Sie ___ (she was) dort.",
                "answer": "war",
                "hint": ""
              },
              {
                "id": "u10-war-s3-5",
                "type": "gap",
                "sentence": "Ich ___ (was) müde.",
                "answer": "war",
                "hint": ""
              },
              {
                "id": "u10-war-s3-6",
                "type": "gap",
                "sentence": "Du ___ (were) krank.",
                "answer": "warst",
                "hint": ""
              },
              {
                "id": "u10-war-s3-7",
                "type": "gap",
                "sentence": "Sie ___ (they were) in Berlin.",
                "answer": "waren",
                "hint": ""
              },
              {
                "id": "u10-war-s3-8",
                "type": "gap",
                "sentence": "Wir ___ (were) zu Hause.",
                "answer": "waren",
                "hint": ""
              }
            ]
          }
        ]
      },
      {
        "id": "u10-su2",
        "title": "hatte (had)",
        "taskSets": [
          {
            "id": "u10-hatte-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u10-hatte-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise 'hatte' (haben in past): ich hatte, du hattest, er/sie/es hatte, wir hatten, ihr hattet, sie/Sie hatten",
                "answer": ""
              },
              {
                "id": "u10-hatte-s1-1",
                "type": "gap",
                "sentence": "Ich ___ (had) keine Zeit.",
                "answer": "hatte",
                "hint": ""
              },
              {
                "id": "u10-hatte-s1-2",
                "type": "gap",
                "sentence": "Sie ___ (they had) viel Geld.",
                "answer": "hatten",
                "hint": ""
              },
              {
                "id": "u10-hatte-s1-3",
                "type": "gap",
                "sentence": "Ihr ___ (had) Spaß.",
                "answer": "hattet",
                "hint": ""
              },
              {
                "id": "u10-hatte-s1-4",
                "type": "gap",
                "sentence": "Wir ___ (had) ein Auto.",
                "answer": "hatten",
                "hint": ""
              },
              {
                "id": "u10-hatte-s1-5",
                "type": "gap",
                "sentence": "Du ___ (had) einen Hund.",
                "answer": "hattest",
                "hint": ""
              },
              {
                "id": "u10-hatte-s1-6",
                "type": "gap",
                "sentence": "Sie ___ (she had) Hunger.",
                "answer": "hatte",
                "hint": ""
              },
              {
                "id": "u10-hatte-s1-7",
                "type": "gap",
                "sentence": "Er ___ (had) Glück.",
                "answer": "hatte",
                "hint": ""
              },
              {
                "id": "u10-hatte-s1-8",
                "type": "gap",
                "sentence": "Ich ___ (had) keine Zeit.",
                "answer": "hatte",
                "hint": ""
              }
            ]
          },
          {
            "id": "u10-hatte-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u10-hatte-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise 'hatte' (haben in past): ich hatte, du hattest, er/sie/es hatte, wir hatten, ihr hattet, sie/Sie hatten",
                "answer": ""
              },
              {
                "id": "u10-hatte-s2-1",
                "type": "gap",
                "sentence": "Ich ___ (had) keine Zeit.",
                "answer": "hatte",
                "hint": ""
              },
              {
                "id": "u10-hatte-s2-2",
                "type": "gap",
                "sentence": "Er ___ (had) Glück.",
                "answer": "hatte",
                "hint": ""
              },
              {
                "id": "u10-hatte-s2-3",
                "type": "gap",
                "sentence": "Sie ___ (she had) Hunger.",
                "answer": "hatte",
                "hint": ""
              },
              {
                "id": "u10-hatte-s2-4",
                "type": "gap",
                "sentence": "Ihr ___ (had) Spaß.",
                "answer": "hattet",
                "hint": ""
              },
              {
                "id": "u10-hatte-s2-5",
                "type": "gap",
                "sentence": "Wir ___ (had) ein Auto.",
                "answer": "hatten",
                "hint": ""
              },
              {
                "id": "u10-hatte-s2-6",
                "type": "gap",
                "sentence": "Sie ___ (they had) viel Geld.",
                "answer": "hatten",
                "hint": ""
              },
              {
                "id": "u10-hatte-s2-7",
                "type": "gap",
                "sentence": "Du ___ (had) einen Hund.",
                "answer": "hattest",
                "hint": ""
              },
              {
                "id": "u10-hatte-s2-8",
                "type": "gap",
                "sentence": "Ich ___ (had) keine Zeit.",
                "answer": "hatte",
                "hint": ""
              }
            ]
          },
          {
            "id": "u10-hatte-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u10-hatte-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise 'hatte' (haben in past): ich hatte, du hattest, er/sie/es hatte, wir hatten, ihr hattet, sie/Sie hatten",
                "answer": ""
              },
              {
                "id": "u10-hatte-s3-1",
                "type": "gap",
                "sentence": "Ihr ___ (had) Spaß.",
                "answer": "hattet",
                "hint": ""
              },
              {
                "id": "u10-hatte-s3-2",
                "type": "gap",
                "sentence": "Sie ___ (she had) Hunger.",
                "answer": "hatte",
                "hint": ""
              },
              {
                "id": "u10-hatte-s3-3",
                "type": "gap",
                "sentence": "Ich ___ (had) keine Zeit.",
                "answer": "hatte",
                "hint": ""
              },
              {
                "id": "u10-hatte-s3-4",
                "type": "gap",
                "sentence": "Wir ___ (had) ein Auto.",
                "answer": "hatten",
                "hint": ""
              },
              {
                "id": "u10-hatte-s3-5",
                "type": "gap",
                "sentence": "Du ___ (had) einen Hund.",
                "answer": "hattest",
                "hint": ""
              },
              {
                "id": "u10-hatte-s3-6",
                "type": "gap",
                "sentence": "Sie ___ (they had) viel Geld.",
                "answer": "hatten",
                "hint": ""
              },
              {
                "id": "u10-hatte-s3-7",
                "type": "gap",
                "sentence": "Er ___ (had) Glück.",
                "answer": "hatte",
                "hint": ""
              },
              {
                "id": "u10-hatte-s3-8",
                "type": "gap",
                "sentence": "Ihr ___ (had) Spaß.",
                "answer": "hattet",
                "hint": ""
              }
            ]
          }
        ]
      },
      {
        "id": "u10-su3",
        "title": "mochte (liked)",
        "taskSets": [
          {
            "id": "u10-mochte-s1",
            "title": "Set 1",
            "exercises": [
              {
                "id": "u10-mochte-s1-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise 'mochte' (mögen in past): ich mochte, du mochtest, er/sie/es mochte, wir mochten, ihr mochtet, sie/Sie mochten",
                "answer": ""
              },
              {
                "id": "u10-mochte-s1-1",
                "type": "gap",
                "sentence": "Du ___ (liked) die Musik.",
                "answer": "mochtest",
                "hint": ""
              },
              {
                "id": "u10-mochte-s1-2",
                "type": "gap",
                "sentence": "Ich ___ (liked) das Buch.",
                "answer": "mochte",
                "hint": ""
              },
              {
                "id": "u10-mochte-s1-3",
                "type": "gap",
                "sentence": "Er ___ (liked) den Film.",
                "answer": "mochte",
                "hint": ""
              },
              {
                "id": "u10-mochte-s1-4",
                "type": "gap",
                "sentence": "Sie ___ (they liked) Tiere.",
                "answer": "mochten",
                "hint": ""
              },
              {
                "id": "u10-mochte-s1-5",
                "type": "gap",
                "sentence": "Sie ___ (she liked) Pizza.",
                "answer": "mochte",
                "hint": ""
              },
              {
                "id": "u10-mochte-s1-6",
                "type": "gap",
                "sentence": "Wir ___ (liked) den Park.",
                "answer": "mochten",
                "hint": ""
              },
              {
                "id": "u10-mochte-s1-7",
                "type": "gap",
                "sentence": "Ihr ___ (liked) das Spiel.",
                "answer": "mochtet",
                "hint": ""
              },
              {
                "id": "u10-mochte-s1-8",
                "type": "gap",
                "sentence": "Du ___ (liked) die Musik.",
                "answer": "mochtest",
                "hint": ""
              }
            ]
          },
          {
            "id": "u10-mochte-s2",
            "title": "Set 2",
            "exercises": [
              {
                "id": "u10-mochte-s2-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise 'mochte' (mögen in past): ich mochte, du mochtest, er/sie/es mochte, wir mochten, ihr mochtet, sie/Sie mochten",
                "answer": ""
              },
              {
                "id": "u10-mochte-s2-1",
                "type": "gap",
                "sentence": "Ihr ___ (liked) das Spiel.",
                "answer": "mochtet",
                "hint": ""
              },
              {
                "id": "u10-mochte-s2-2",
                "type": "gap",
                "sentence": "Du ___ (liked) die Musik.",
                "answer": "mochtest",
                "hint": ""
              },
              {
                "id": "u10-mochte-s2-3",
                "type": "gap",
                "sentence": "Sie ___ (she liked) Pizza.",
                "answer": "mochte",
                "hint": ""
              },
              {
                "id": "u10-mochte-s2-4",
                "type": "gap",
                "sentence": "Wir ___ (liked) den Park.",
                "answer": "mochten",
                "hint": ""
              },
              {
                "id": "u10-mochte-s2-5",
                "type": "gap",
                "sentence": "Er ___ (liked) den Film.",
                "answer": "mochte",
                "hint": ""
              },
              {
                "id": "u10-mochte-s2-6",
                "type": "gap",
                "sentence": "Sie ___ (they liked) Tiere.",
                "answer": "mochten",
                "hint": ""
              },
              {
                "id": "u10-mochte-s2-7",
                "type": "gap",
                "sentence": "Ich ___ (liked) das Buch.",
                "answer": "mochte",
                "hint": ""
              },
              {
                "id": "u10-mochte-s2-8",
                "type": "gap",
                "sentence": "Ihr ___ (liked) das Spiel.",
                "answer": "mochtet",
                "hint": ""
              }
            ]
          },
          {
            "id": "u10-mochte-s3",
            "title": "Set 3",
            "exercises": [
              {
                "id": "u10-mochte-s3-info",
                "type": "info",
                "sentence": "Task Instructions",
                "infoText": "Revise 'mochte' (mögen in past): ich mochte, du mochtest, er/sie/es mochte, wir mochten, ihr mochtet, sie/Sie mochten",
                "answer": ""
              },
              {
                "id": "u10-mochte-s3-1",
                "type": "gap",
                "sentence": "Du ___ (liked) die Musik.",
                "answer": "mochtest",
                "hint": ""
              },
              {
                "id": "u10-mochte-s3-2",
                "type": "gap",
                "sentence": "Ihr ___ (liked) das Spiel.",
                "answer": "mochtet",
                "hint": ""
              },
              {
                "id": "u10-mochte-s3-3",
                "type": "gap",
                "sentence": "Sie ___ (she liked) Pizza.",
                "answer": "mochte",
                "hint": ""
              },
              {
                "id": "u10-mochte-s3-4",
                "type": "gap",
                "sentence": "Wir ___ (liked) den Park.",
                "answer": "mochten",
                "hint": ""
              },
              {
                "id": "u10-mochte-s3-5",
                "type": "gap",
                "sentence": "Ich ___ (liked) das Buch.",
                "answer": "mochte",
                "hint": ""
              },
              {
                "id": "u10-mochte-s3-6",
                "type": "gap",
                "sentence": "Er ___ (liked) den Film.",
                "answer": "mochte",
                "hint": ""
              },
              {
                "id": "u10-mochte-s3-7",
                "type": "gap",
                "sentence": "Sie ___ (they liked) Tiere.",
                "answer": "mochten",
                "hint": ""
              },
              {
                "id": "u10-mochte-s3-8",
                "type": "gap",
                "sentence": "Du ___ (liked) die Musik.",
                "answer": "mochtest",
                "hint": ""
              }
            ]
          }
        ]
      }
    ]
  }
];
