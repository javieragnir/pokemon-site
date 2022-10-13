const router = require('express').Router()
const { Pokemon } = require('../models')

const pokemonList = [
  {
  name: "bulbasaur",
  apiId: 1
  },
  {
  name: "ivysaur",
  apiId: 2
  },
  {
  name: "venusaur",
  apiId: 3
  },
  {
  name: "charmander",
  apiId: 4
  },
  {
  name: "charmeleon",
  apiId: 5
  },
  {
  name: "charizard",
  apiId: 6
  },
  {
  name: "squirtle",
  apiId: 7
  },
  {
  name: "wartortle",
  apiId: 8
  },
  {
  name: "blastoise",
  apiId: 9
  },
  {
  name: "caterpie",
  apiId: 10
  },
  {
  name: "metapod",
  apiId: 11
  },
  {
  name: "butterfree",
  apiId: 12
  },
  {
  name: "weedle",
  apiId: 13
  },
  {
  name: "kakuna",
  apiId: 14
  },
  {
  name: "beedrill",
  apiId: 15
  },
  {
  name: "pidgey",
  apiId: 16
  },
  {
  name: "pidgeotto",
  apiId: 17
  },
  {
  name: "pidgeot",
  apiId: 18
  },
  {
  name: "rattata",
  apiId: 19
  },
  {
  name: "raticate",
  apiId: 20
  },
  {
  name: "spearow",
  apiId: 21
  },
  {
  name: "fearow",
  apiId: 22
  },
  {
  name: "ekans",
  apiId: 23
  },
  {
  name: "arbok",
  apiId: 24
  },
  {
  name: "pikachu",
  apiId: 25
  },
  {
  name: "raichu",
  apiId: 26
  },
  {
  name: "sandshrew",
  apiId: 27
  },
  {
  name: "sandslash",
  apiId: 28
  },
  {
  name: "nidoran-f",
  apiId: 29
  },
  {
  name: "nidorina",
  apiId: 30
  },
  {
  name: "nidoqueen",
  apiId: 31
  },
  {
  name: "nidoran-m",
  apiId: 32
  },
  {
  name: "nidorino",
  apiId: 33
  },
  {
  name: "nidoking",
  apiId: 34
  },
  {
  name: "clefairy",
  apiId: 35
  },
  {
  name: "clefable",
  apiId: 36
  },
  {
  name: "vulpix",
  apiId: 37
  },
  {
  name: "ninetales",
  apiId: 38
  },
  {
  name: "jigglypuff",
  apiId: 39
  },
  {
  name: "wigglytuff",
  apiId: 40
  },
  {
  name: "zubat",
  apiId: 41
  },
  {
  name: "golbat",
  apiId: 42
  },
  {
  name: "oddish",
  apiId: 43
  },
  {
  name: "gloom",
  apiId: 44
  },
  {
  name: "vileplume",
  apiId: 45
  },
  {
  name: "paras",
  apiId: 46
  },
  {
  name: "parasect",
  apiId: 47
  },
  {
  name: "venonat",
  apiId: 48
  },
  {
  name: "venomoth",
  apiId: 49
  },
  {
  name: "diglett",
  apiId: 50
  },
  {
  name: "dugtrio",
  apiId: 51
  },
  {
  name: "meowth",
  apiId: 52
  },
  {
  name: "persian",
  apiId: 53
  },
  {
  name: "psyduck",
  apiId: 54
  },
  {
  name: "golduck",
  apiId: 55
  },
  {
  name: "mankey",
  apiId: 56
  },
  {
  name: "primeape",
  apiId: 57
  },
  {
  name: "growlithe",
  apiId: 58
  },
  {
  name: "arcanine",
  apiId: 59
  },
  {
  name: "poliwag",
  apiId: 60
  },
  {
  name: "poliwhirl",
  apiId: 61
  },
  {
  name: "poliwrath",
  apiId: 62
  },
  {
  name: "abra",
  apiId: 63
  },
  {
  name: "kadabra",
  apiId: 64
  },
  {
  name: "alakazam",
  apiId: 65
  },
  {
  name: "machop",
  apiId: 66
  },
  {
  name: "machoke",
  apiId: 67
  },
  {
  name: "machamp",
  apiId: 68
  },
  {
  name: "bellsprout",
  apiId: 69
  },
  {
  name: "weepinbell",
  apiId: 70
  },
  {
  name: "victreebel",
  apiId: 71
  },
  {
  name: "tentacool",
  apiId: 72
  },
  {
  name: "tentacruel",
  apiId: 73
  },
  {
  name: "geodude",
  apiId: 74
  },
  {
  name: "graveler",
  apiId: 75
  },
  {
  name: "golem",
  apiId: 76
  },
  {
  name: "ponyta",
  apiId: 77
  },
  {
  name: "rapidash",
  apiId: 78
  },
  {
  name: "slowpoke",
  apiId: 79
  },
  {
  name: "slowbro",
  apiId: 80
  },
  {
  name: "magnemite",
  apiId: 81
  },
  {
  name: "magneton",
  apiId: 82
  },
  {
  name: "farfetchd",
  apiId: 83
  },
  {
  name: "doduo",
  apiId: 84
  },
  {
  name: "dodrio",
  apiId: 85
  },
  {
  name: "seel",
  apiId: 86
  },
  {
  name: "dewgong",
  apiId: 87
  },
  {
  name: "grimer",
  apiId: 88
  },
  {
  name: "muk",
  apiId: 89
  },
  {
  name: "shellder",
  apiId: 90
  },
  {
  name: "cloyster",
  apiId: 91
  },
  {
  name: "gastly",
  apiId: 92
  },
  {
  name: "haunter",
  apiId: 93
  },
  {
  name: "gengar",
  apiId: 94
  },
  {
  name: "onix",
  apiId: 95
  },
  {
  name: "drowzee",
  apiId: 96
  },
  {
  name: "hypno",
  apiId: 97
  },
  {
  name: "krabby",
  apiId: 98
  },
  {
  name: "kingler",
  apiId: 99
  },
  {
  name: "voltorb",
  apiId: 100
  },
  {
  name: "electrode",
  apiId: 101
  },
  {
  name: "exeggcute",
  apiId: 102
  },
  {
  name: "exeggutor",
  apiId: 103
  },
  {
  name: "cubone",
  apiId: 104
  },
  {
  name: "marowak",
  apiId: 105
  },
  {
  name: "hitmonlee",
  apiId: 106
  },
  {
  name: "hitmonchan",
  apiId: 107
  },
  {
  name: "lickitung",
  apiId: 108
  },
  {
  name: "koffing",
  apiId: 109
  },
  {
  name: "weezing",
  apiId: 110
  },
  {
  name: "rhyhorn",
  apiId: 111
  },
  {
  name: "rhydon",
  apiId: 112
  },
  {
  name: "chansey",
  apiId: 113
  },
  {
  name: "tangela",
  apiId: 114
  },
  {
  name: "kangaskhan",
  apiId: 115
  },
  {
  name: "horsea",
  apiId: 116
  },
  {
  name: "seadra",
  apiId: 117
  },
  {
  name: "goldeen",
  apiId: 118
  },
  {
  name: "seaking",
  apiId: 119
  },
  {
  name: "staryu",
  apiId: 120
  },
  {
  name: "starmie",
  apiId: 121
  },
  {
  name: "mr-mime",
  apiId: 122
  },
  {
  name: "scyther",
  apiId: 123
  },
  {
  name: "jynx",
  apiId: 124
  },
  {
  name: "electabuzz",
  apiId: 125
  },
  {
  name: "magmar",
  apiId: 126
  },
  {
  name: "pinsir",
  apiId: 127
  },
  {
  name: "tauros",
  apiId: 128
  },
  {
  name: "magikarp",
  apiId: 129
  },
  {
  name: "gyarados",
  apiId: 130
  },
  {
  name: "lapras",
  apiId: 131
  },
  {
  name: "ditto",
  apiId: 132
  },
  {
  name: "eevee",
  apiId: 133
  },
  {
  name: "vaporeon",
  apiId: 134
  },
  {
  name: "jolteon",
  apiId: 135
  },
  {
  name: "flareon",
  apiId: 136
  },
  {
  name: "porygon",
  apiId: 137
  },
  {
  name: "omanyte",
  apiId: 138
  },
  {
  name: "omastar",
  apiId: 139
  },
  {
  name: "kabuto",
  apiId: 140
  },
  {
  name: "kabutops",
  apiId: 141
  },
  {
  name: "aerodactyl",
  apiId: 142
  },
  {
  name: "snorlax",
  apiId: 143
  },
  {
  name: "articuno",
  apiId: 144
  },
  {
  name: "zapdos",
  apiId: 145
  },
  {
  name: "moltres",
  apiId: 146
  },
  {
  name: "dratini",
  apiId: 147
  },
  {
  name: "dragonair",
  apiId: 148
  },
  {
  name: "dragonite",
  apiId: 149
  },
  {
  name: "mewtwo",
  apiId: 150
  },
  {
  name: "mew",
  apiId: 151
  },
  {
  name: "chikorita",
  apiId: 152
  },
  {
  name: "bayleef",
  apiId: 153
  },
  {
  name: "meganium",
  apiId: 154
  },
  {
  name: "cyndaquil",
  apiId: 155
  },
  {
  name: "quilava",
  apiId: 156
  },
  {
  name: "typhlosion",
  apiId: 157
  },
  {
  name: "totodile",
  apiId: 158
  },
  {
  name: "croconaw",
  apiId: 159
  },
  {
  name: "feraligatr",
  apiId: 160
  },
  {
  name: "sentret",
  apiId: 161
  },
  {
  name: "furret",
  apiId: 162
  },
  {
  name: "hoothoot",
  apiId: 163
  },
  {
  name: "noctowl",
  apiId: 164
  },
  {
  name: "ledyba",
  apiId: 165
  },
  {
  name: "ledian",
  apiId: 166
  },
  {
  name: "spinarak",
  apiId: 167
  },
  {
  name: "ariados",
  apiId: 168
  },
  {
  name: "crobat",
  apiId: 169
  },
  {
  name: "chinchou",
  apiId: 170
  },
  {
  name: "lanturn",
  apiId: 171
  },
  {
  name: "pichu",
  apiId: 172
  },
  {
  name: "cleffa",
  apiId: 173
  },
  {
  name: "igglybuff",
  apiId: 174
  },
  {
  name: "togepi",
  apiId: 175
  },
  {
  name: "togetic",
  apiId: 176
  },
  {
  name: "natu",
  apiId: 177
  },
  {
  name: "xatu",
  apiId: 178
  },
  {
  name: "mareep",
  apiId: 179
  },
  {
  name: "flaaffy",
  apiId: 180
  },
  {
  name: "ampharos",
  apiId: 181
  },
  {
  name: "bellossom",
  apiId: 182
  },
  {
  name: "marill",
  apiId: 183
  },
  {
  name: "azumarill",
  apiId: 184
  },
  {
  name: "sudowoodo",
  apiId: 185
  },
  {
  name: "politoed",
  apiId: 186
  },
  {
  name: "hoppip",
  apiId: 187
  },
  {
  name: "skiploom",
  apiId: 188
  },
  {
  name: "jumpluff",
  apiId: 189
  },
  {
  name: "aipom",
  apiId: 190
  },
  {
  name: "sunkern",
  apiId: 191
  },
  {
  name: "sunflora",
  apiId: 192
  },
  {
  name: "yanma",
  apiId: 193
  },
  {
  name: "wooper",
  apiId: 194
  },
  {
  name: "quagsire",
  apiId: 195
  },
  {
  name: "espeon",
  apiId: 196
  },
  {
  name: "umbreon",
  apiId: 197
  },
  {
  name: "murkrow",
  apiId: 198
  },
  {
  name: "slowking",
  apiId: 199
  },
  {
  name: "misdreavus",
  apiId: 200
  },
  {
  name: "unown",
  apiId: 201
  },
  {
  name: "wobbuffet",
  apiId: 202
  },
  {
  name: "girafarig",
  apiId: 203
  },
  {
  name: "pineco",
  apiId: 204
  },
  {
  name: "forretress",
  apiId: 205
  },
  {
  name: "dunsparce",
  apiId: 206
  },
  {
  name: "gligar",
  apiId: 207
  },
  {
  name: "steelix",
  apiId: 208
  },
  {
  name: "snubbull",
  apiId: 209
  },
  {
  name: "granbull",
  apiId: 210
  },
  {
  name: "qwilfish",
  apiId: 211
  },
  {
  name: "scizor",
  apiId: 212
  },
  {
  name: "shuckle",
  apiId: 213
  },
  {
  name: "heracross",
  apiId: 214
  },
  {
  name: "sneasel",
  apiId: 215
  },
  {
  name: "teddiursa",
  apiId: 216
  },
  {
  name: "ursaring",
  apiId: 217
  },
  {
  name: "slugma",
  apiId: 218
  },
  {
  name: "magcargo",
  apiId: 219
  },
  {
  name: "swinub",
  apiId: 220
  },
  {
  name: "piloswine",
  apiId: 221
  },
  {
  name: "corsola",
  apiId: 222
  },
  {
  name: "remoraid",
  apiId: 223
  },
  {
  name: "octillery",
  apiId: 224
  },
  {
  name: "delibird",
  apiId: 225
  },
  {
  name: "mantine",
  apiId: 226
  },
  {
  name: "skarmory",
  apiId: 227
  },
  {
  name: "houndour",
  apiId: 228
  },
  {
  name: "houndoom",
  apiId: 229
  },
  {
  name: "kingdra",
  apiId: 230
  },
  {
  name: "phanpy",
  apiId: 231
  },
  {
  name: "donphan",
  apiId: 232
  },
  {
  name: "porygon2",
  apiId: 233
  },
  {
  name: "stantler",
  apiId: 234
  },
  {
  name: "smeargle",
  apiId: 235
  },
  {
  name: "tyrogue",
  apiId: 236
  },
  {
  name: "hitmontop",
  apiId: 237
  },
  {
  name: "smoochum",
  apiId: 238
  },
  {
  name: "elekid",
  apiId: 239
  },
  {
  name: "magby",
  apiId: 240
  },
  {
  name: "miltank",
  apiId: 241
  },
  {
  name: "blissey",
  apiId: 242
  },
  {
  name: "raikou",
  apiId: 243
  },
  {
  name: "entei",
  apiId: 244
  },
  {
  name: "suicune",
  apiId: 245
  },
  {
  name: "larvitar",
  apiId: 246
  },
  {
  name: "pupitar",
  apiId: 247
  },
  {
  name: "tyranitar",
  apiId: 248
  },
  {
  name: "lugia",
  apiId: 249
  },
  {
  name: "ho-oh",
  apiId: 250
  },
  {
  name: "celebi",
  apiId: 251
  },
  {
  name: "treecko",
  apiId: 252
  },
  {
  name: "grovyle",
  apiId: 253
  },
  {
  name: "sceptile",
  apiId: 254
  },
  {
  name: "torchic",
  apiId: 255
  },
  {
  name: "combusken",
  apiId: 256
  },
  {
  name: "blaziken",
  apiId: 257
  },
  {
  name: "mudkip",
  apiId: 258
  },
  {
  name: "marshtomp",
  apiId: 259
  },
  {
  name: "swampert",
  apiId: 260
  },
  {
  name: "poochyena",
  apiId: 261
  },
  {
  name: "mightyena",
  apiId: 262
  },
  {
  name: "zigzagoon",
  apiId: 263
  },
  {
  name: "linoone",
  apiId: 264
  },
  {
  name: "wurmple",
  apiId: 265
  },
  {
  name: "silcoon",
  apiId: 266
  },
  {
  name: "beautifly",
  apiId: 267
  },
  {
  name: "cascoon",
  apiId: 268
  },
  {
  name: "dustox",
  apiId: 269
  },
  {
  name: "lotad",
  apiId: 270
  },
  {
  name: "lombre",
  apiId: 271
  },
  {
  name: "ludicolo",
  apiId: 272
  },
  {
  name: "seedot",
  apiId: 273
  },
  {
  name: "nuzleaf",
  apiId: 274
  },
  {
  name: "shiftry",
  apiId: 275
  },
  {
  name: "taillow",
  apiId: 276
  },
  {
  name: "swellow",
  apiId: 277
  },
  {
  name: "wingull",
  apiId: 278
  },
  {
  name: "pelipper",
  apiId: 279
  },
  {
  name: "ralts",
  apiId: 280
  },
  {
  name: "kirlia",
  apiId: 281
  },
  {
  name: "gardevoir",
  apiId: 282
  },
  {
  name: "surskit",
  apiId: 283
  },
  {
  name: "masquerain",
  apiId: 284
  },
  {
  name: "shroomish",
  apiId: 285
  },
  {
  name: "breloom",
  apiId: 286
  },
  {
  name: "slakoth",
  apiId: 287
  },
  {
  name: "vigoroth",
  apiId: 288
  },
  {
  name: "slaking",
  apiId: 289
  },
  {
  name: "nincada",
  apiId: 290
  },
  {
  name: "ninjask",
  apiId: 291
  },
  {
  name: "shedinja",
  apiId: 292
  },
  {
  name: "whismur",
  apiId: 293
  },
  {
  name: "loudred",
  apiId: 294
  },
  {
  name: "exploud",
  apiId: 295
  },
  {
  name: "makuhita",
  apiId: 296
  },
  {
  name: "hariyama",
  apiId: 297
  },
  {
  name: "azurill",
  apiId: 298
  },
  {
  name: "nosepass",
  apiId: 299
  },
  {
  name: "skitty",
  apiId: 300
  },
  {
  name: "delcatty",
  apiId: 301
  },
  {
  name: "sableye",
  apiId: 302
  },
  {
  name: "mawile",
  apiId: 303
  },
  {
  name: "aron",
  apiId: 304
  },
  {
  name: "lairon",
  apiId: 305
  },
  {
  name: "aggron",
  apiId: 306
  },
  {
  name: "meditite",
  apiId: 307
  },
  {
  name: "medicham",
  apiId: 308
  },
  {
  name: "electrike",
  apiId: 309
  },
  {
  name: "manectric",
  apiId: 310
  },
  {
  name: "plusle",
  apiId: 311
  },
  {
  name: "minun",
  apiId: 312
  },
  {
  name: "volbeat",
  apiId: 313
  },
  {
  name: "illumise",
  apiId: 314
  },
  {
  name: "roselia",
  apiId: 315
  },
  {
  name: "gulpin",
  apiId: 316
  },
  {
  name: "swalot",
  apiId: 317
  },
  {
  name: "carvanha",
  apiId: 318
  },
  {
  name: "sharpedo",
  apiId: 319
  },
  {
  name: "wailmer",
  apiId: 320
  },
  {
  name: "wailord",
  apiId: 321
  },
  {
  name: "numel",
  apiId: 322
  },
  {
  name: "camerupt",
  apiId: 323
  },
  {
  name: "torkoal",
  apiId: 324
  },
  {
  name: "spoink",
  apiId: 325
  },
  {
  name: "grumpig",
  apiId: 326
  },
  {
  name: "spinda",
  apiId: 327
  },
  {
  name: "trapinch",
  apiId: 328
  },
  {
  name: "vibrava",
  apiId: 329
  },
  {
  name: "flygon",
  apiId: 330
  },
  {
  name: "cacnea",
  apiId: 331
  },
  {
  name: "cacturne",
  apiId: 332
  },
  {
  name: "swablu",
  apiId: 333
  },
  {
  name: "altaria",
  apiId: 334
  },
  {
  name: "zangoose",
  apiId: 335
  },
  {
  name: "seviper",
  apiId: 336
  },
  {
  name: "lunatone",
  apiId: 337
  },
  {
  name: "solrock",
  apiId: 338
  },
  {
  name: "barboach",
  apiId: 339
  },
  {
  name: "whiscash",
  apiId: 340
  },
  {
  name: "corphish",
  apiId: 341
  },
  {
  name: "crawdaunt",
  apiId: 342
  },
  {
  name: "baltoy",
  apiId: 343
  },
  {
  name: "claydol",
  apiId: 344
  },
  {
  name: "lileep",
  apiId: 345
  },
  {
  name: "cradily",
  apiId: 346
  },
  {
  name: "anorith",
  apiId: 347
  },
  {
  name: "armaldo",
  apiId: 348
  },
  {
  name: "feebas",
  apiId: 349
  },
  {
  name: "milotic",
  apiId: 350
  },
  {
  name: "castform",
  apiId: 351
  },
  {
  name: "kecleon",
  apiId: 352
  },
  {
  name: "shuppet",
  apiId: 353
  },
  {
  name: "banette",
  apiId: 354
  },
  {
  name: "duskull",
  apiId: 355
  },
  {
  name: "dusclops",
  apiId: 356
  },
  {
  name: "tropius",
  apiId: 357
  },
  {
  name: "chimecho",
  apiId: 358
  },
  {
  name: "absol",
  apiId: 359
  },
  {
  name: "wynaut",
  apiId: 360
  },
  {
  name: "snorunt",
  apiId: 361
  },
  {
  name: "glalie",
  apiId: 362
  },
  {
  name: "spheal",
  apiId: 363
  },
  {
  name: "sealeo",
  apiId: 364
  },
  {
  name: "walrein",
  apiId: 365
  },
  {
  name: "clamperl",
  apiId: 366
  },
  {
  name: "huntail",
  apiId: 367
  },
  {
  name: "gorebyss",
  apiId: 368
  },
  {
  name: "relicanth",
  apiId: 369
  },
  {
  name: "luvdisc",
  apiId: 370
  },
  {
  name: "bagon",
  apiId: 371
  },
  {
  name: "shelgon",
  apiId: 372
  },
  {
  name: "salamence",
  apiId: 373
  },
  {
  name: "beldum",
  apiId: 374
  },
  {
  name: "metang",
  apiId: 375
  },
  {
  name: "metagross",
  apiId: 376
  },
  {
  name: "regirock",
  apiId: 377
  },
  {
  name: "regice",
  apiId: 378
  },
  {
  name: "registeel",
  apiId: 379
  },
  {
  name: "latias",
  apiId: 380
  },
  {
  name: "latios",
  apiId: 381
  },
  {
  name: "kyogre",
  apiId: 382
  },
  {
  name: "groudon",
  apiId: 383
  },
  {
  name: "rayquaza",
  apiId: 384
  },
  {
  name: "jirachi",
  apiId: 385
  },
  {
  name: "deoxys-normal",
  apiId: 386
  },
  {
  name: "turtwig",
  apiId: 387
  },
  {
  name: "grotle",
  apiId: 388
  },
  {
  name: "torterra",
  apiId: 389
  },
  {
  name: "chimchar",
  apiId: 390
  },
  {
  name: "monferno",
  apiId: 391
  },
  {
  name: "infernape",
  apiId: 392
  },
  {
  name: "piplup",
  apiId: 393
  },
  {
  name: "prinplup",
  apiId: 394
  },
  {
  name: "empoleon",
  apiId: 395
  },
  {
  name: "starly",
  apiId: 396
  },
  {
  name: "staravia",
  apiId: 397
  },
  {
  name: "staraptor",
  apiId: 398
  },
  {
  name: "bidoof",
  apiId: 399
  },
  {
  name: "bibarel",
  apiId: 400
  },
  {
  name: "kricketot",
  apiId: 401
  },
  {
  name: "kricketune",
  apiId: 402
  },
  {
  name: "shinx",
  apiId: 403
  },
  {
  name: "luxio",
  apiId: 404
  },
  {
  name: "luxray",
  apiId: 405
  },
  {
  name: "budew",
  apiId: 406
  },
  {
  name: "roserade",
  apiId: 407
  },
  {
  name: "cranidos",
  apiId: 408
  },
  {
  name: "rampardos",
  apiId: 409
  },
  {
  name: "shieldon",
  apiId: 410
  },
  {
  name: "bastiodon",
  apiId: 411
  },
  {
  name: "burmy",
  apiId: 412
  },
  {
  name: "wormadam-plant",
  apiId: 413
  },
  {
  name: "mothim",
  apiId: 414
  },
  {
  name: "combee",
  apiId: 415
  },
  {
  name: "vespiquen",
  apiId: 416
  },
  {
  name: "pachirisu",
  apiId: 417
  },
  {
  name: "buizel",
  apiId: 418
  },
  {
  name: "floatzel",
  apiId: 419
  },
  {
  name: "cherubi",
  apiId: 420
  },
  {
  name: "cherrim",
  apiId: 421
  },
  {
  name: "shellos",
  apiId: 422
  },
  {
  name: "gastrodon",
  apiId: 423
  },
  {
  name: "ambipom",
  apiId: 424
  },
  {
  name: "drifloon",
  apiId: 425
  },
  {
  name: "drifblim",
  apiId: 426
  },
  {
  name: "buneary",
  apiId: 427
  },
  {
  name: "lopunny",
  apiId: 428
  },
  {
  name: "mismagius",
  apiId: 429
  },
  {
  name: "honchkrow",
  apiId: 430
  },
  {
  name: "glameow",
  apiId: 431
  },
  {
  name: "purugly",
  apiId: 432
  },
  {
  name: "chingling",
  apiId: 433
  },
  {
  name: "stunky",
  apiId: 434
  },
  {
  name: "skuntank",
  apiId: 435
  },
  {
  name: "bronzor",
  apiId: 436
  },
  {
  name: "bronzong",
  apiId: 437
  },
  {
  name: "bonsly",
  apiId: 438
  },
  {
  name: "mime-jr",
  apiId: 439
  },
  {
  name: "happiny",
  apiId: 440
  },
  {
  name: "chatot",
  apiId: 441
  },
  {
  name: "spiritomb",
  apiId: 442
  },
  {
  name: "gible",
  apiId: 443
  },
  {
  name: "gabite",
  apiId: 444
  },
  {
  name: "garchomp",
  apiId: 445
  },
  {
  name: "munchlax",
  apiId: 446
  },
  {
  name: "riolu",
  apiId: 447
  },
  {
  name: "lucario",
  apiId: 448
  },
  {
  name: "hippopotas",
  apiId: 449
  },
  {
  name: "hippowdon",
  apiId: 450
  },
  {
  name: "skorupi",
  apiId: 451
  },
  {
  name: "drapion",
  apiId: 452
  },
  {
  name: "croagunk",
  apiId: 453
  },
  {
  name: "toxicroak",
  apiId: 454
  },
  {
  name: "carnivine",
  apiId: 455
  },
  {
  name: "finneon",
  apiId: 456
  },
  {
  name: "lumineon",
  apiId: 457
  },
  {
  name: "mantyke",
  apiId: 458
  },
  {
  name: "snover",
  apiId: 459
  },
  {
  name: "abomasnow",
  apiId: 460
  },
  {
  name: "weavile",
  apiId: 461
  },
  {
  name: "magnezone",
  apiId: 462
  },
  {
  name: "lickilicky",
  apiId: 463
  },
  {
  name: "rhyperior",
  apiId: 464
  },
  {
  name: "tangrowth",
  apiId: 465
  },
  {
  name: "electivire",
  apiId: 466
  },
  {
  name: "magmortar",
  apiId: 467
  },
  {
  name: "togekiss",
  apiId: 468
  },
  {
  name: "yanmega",
  apiId: 469
  },
  {
  name: "leafeon",
  apiId: 470
  },
  {
  name: "glaceon",
  apiId: 471
  },
  {
  name: "gliscor",
  apiId: 472
  },
  {
  name: "mamoswine",
  apiId: 473
  },
  {
  name: "porygon-z",
  apiId: 474
  },
  {
  name: "gallade",
  apiId: 475
  },
  {
  name: "probopass",
  apiId: 476
  },
  {
  name: "dusknoir",
  apiId: 477
  },
  {
  name: "froslass",
  apiId: 478
  },
  {
  name: "rotom",
  apiId: 479
  },
  {
  name: "uxie",
  apiId: 480
  },
  {
  name: "mesprit",
  apiId: 481
  },
  {
  name: "azelf",
  apiId: 482
  },
  {
  name: "dialga",
  apiId: 483
  },
  {
  name: "palkia",
  apiId: 484
  },
  {
  name: "heatran",
  apiId: 485
  },
  {
  name: "regigigas",
  apiId: 486
  },
  {
  name: "giratina-altered",
  apiId: 487
  },
  {
  name: "cresselia",
  apiId: 488
  },
  {
  name: "phione",
  apiId: 489
  },
  {
  name: "manaphy",
  apiId: 490
  },
  {
  name: "darkrai",
  apiId: 491
  },
  {
  name: "shaymin-land",
  apiId: 492
  },
  {
  name: "arceus",
  apiId: 493
  },
  {
  name: "victini",
  apiId: 494
  },
  {
  name: "snivy",
  apiId: 495
  },
  {
  name: "servine",
  apiId: 496
  },
  {
  name: "serperior",
  apiId: 497
  },
  {
  name: "tepig",
  apiId: 498
  },
  {
  name: "pignite",
  apiId: 499
  },
  {
  name: "emboar",
  apiId: 500
  },
  {
  name: "oshawott",
  apiId: 501
  },
  {
  name: "dewott",
  apiId: 502
  },
  {
  name: "samurott",
  apiId: 503
  },
  {
  name: "patrat",
  apiId: 504
  },
  {
  name: "watchog",
  apiId: 505
  },
  {
  name: "lillipup",
  apiId: 506
  },
  {
  name: "herdier",
  apiId: 507
  },
  {
  name: "stoutland",
  apiId: 508
  },
  {
  name: "purrloin",
  apiId: 509
  },
  {
  name: "liepard",
  apiId: 510
  },
  {
  name: "pansage",
  apiId: 511
  },
  {
  name: "simisage",
  apiId: 512
  },
  {
  name: "pansear",
  apiId: 513
  },
  {
  name: "simisear",
  apiId: 514
  },
  {
  name: "panpour",
  apiId: 515
  },
  {
  name: "simipour",
  apiId: 516
  },
  {
  name: "munna",
  apiId: 517
  },
  {
  name: "musharna",
  apiId: 518
  },
  {
  name: "pidove",
  apiId: 519
  },
  {
  name: "tranquill",
  apiId: 520
  },
  {
  name: "unfezant",
  apiId: 521
  },
  {
  name: "blitzle",
  apiId: 522
  },
  {
  name: "zebstrika",
  apiId: 523
  },
  {
  name: "roggenrola",
  apiId: 524
  },
  {
  name: "boldore",
  apiId: 525
  },
  {
  name: "gigalith",
  apiId: 526
  },
  {
  name: "woobat",
  apiId: 527
  },
  {
  name: "swoobat",
  apiId: 528
  },
  {
  name: "drilbur",
  apiId: 529
  },
  {
  name: "excadrill",
  apiId: 530
  },
  {
  name: "audino",
  apiId: 531
  },
  {
  name: "timburr",
  apiId: 532
  },
  {
  name: "gurdurr",
  apiId: 533
  },
  {
  name: "conkeldurr",
  apiId: 534
  },
  {
  name: "tympole",
  apiId: 535
  },
  {
  name: "palpitoad",
  apiId: 536
  },
  {
  name: "seismitoad",
  apiId: 537
  },
  {
  name: "throh",
  apiId: 538
  },
  {
  name: "sawk",
  apiId: 539
  },
  {
  name: "sewaddle",
  apiId: 540
  },
  {
  name: "swadloon",
  apiId: 541
  },
  {
  name: "leavanny",
  apiId: 542
  },
  {
  name: "venipede",
  apiId: 543
  },
  {
  name: "whirlipede",
  apiId: 544
  },
  {
  name: "scolipede",
  apiId: 545
  },
  {
  name: "cottonee",
  apiId: 546
  },
  {
  name: "whimsicott",
  apiId: 547
  },
  {
  name: "petilil",
  apiId: 548
  },
  {
  name: "lilligant",
  apiId: 549
  },
  {
  name: "basculin-red-striped",
  apiId: 550
  },
  {
  name: "sandile",
  apiId: 551
  },
  {
  name: "krokorok",
  apiId: 552
  },
  {
  name: "krookodile",
  apiId: 553
  },
  {
  name: "darumaka",
  apiId: 554
  },
  {
  name: "darmanitan-standard",
  apiId: 555
  },
  {
  name: "maractus",
  apiId: 556
  },
  {
  name: "dwebble",
  apiId: 557
  },
  {
  name: "crustle",
  apiId: 558
  },
  {
  name: "scraggy",
  apiId: 559
  },
  {
  name: "scrafty",
  apiId: 560
  },
  {
  name: "sigilyph",
  apiId: 561
  },
  {
  name: "yamask",
  apiId: 562
  },
  {
  name: "cofagrigus",
  apiId: 563
  },
  {
  name: "tirtouga",
  apiId: 564
  },
  {
  name: "carracosta",
  apiId: 565
  },
  {
  name: "archen",
  apiId: 566
  },
  {
  name: "archeops",
  apiId: 567
  },
  {
  name: "trubbish",
  apiId: 568
  },
  {
  name: "garbodor",
  apiId: 569
  },
  {
  name: "zorua",
  apiId: 570
  },
  {
  name: "zoroark",
  apiId: 571
  },
  {
  name: "minccino",
  apiId: 572
  },
  {
  name: "cinccino",
  apiId: 573
  },
  {
  name: "gothita",
  apiId: 574
  },
  {
  name: "gothorita",
  apiId: 575
  },
  {
  name: "gothitelle",
  apiId: 576
  },
  {
  name: "solosis",
  apiId: 577
  },
  {
  name: "duosion",
  apiId: 578
  },
  {
  name: "reuniclus",
  apiId: 579
  },
  {
  name: "ducklett",
  apiId: 580
  },
  {
  name: "swanna",
  apiId: 581
  },
  {
  name: "vanillite",
  apiId: 582
  },
  {
  name: "vanillish",
  apiId: 583
  },
  {
  name: "vanilluxe",
  apiId: 584
  },
  {
  name: "deerling",
  apiId: 585
  },
  {
  name: "sawsbuck",
  apiId: 586
  },
  {
  name: "emolga",
  apiId: 587
  },
  {
  name: "karrablast",
  apiId: 588
  },
  {
  name: "escavalier",
  apiId: 589
  },
  {
  name: "foongus",
  apiId: 590
  },
  {
  name: "amoonguss",
  apiId: 591
  },
  {
  name: "frillish",
  apiId: 592
  },
  {
  name: "jellicent",
  apiId: 593
  },
  {
  name: "alomomola",
  apiId: 594
  },
  {
  name: "joltik",
  apiId: 595
  },
  {
  name: "galvantula",
  apiId: 596
  },
  {
  name: "ferroseed",
  apiId: 597
  },
  {
  name: "ferrothorn",
  apiId: 598
  },
  {
  name: "klink",
  apiId: 599
  },
  {
  name: "klang",
  apiId: 600
  },
  {
  name: "klinklang",
  apiId: 601
  },
  {
  name: "tynamo",
  apiId: 602
  },
  {
  name: "eelektrik",
  apiId: 603
  },
  {
  name: "eelektross",
  apiId: 604
  },
  {
  name: "elgyem",
  apiId: 605
  },
  {
  name: "beheeyem",
  apiId: 606
  },
  {
  name: "litwick",
  apiId: 607
  },
  {
  name: "lampent",
  apiId: 608
  },
  {
  name: "chandelure",
  apiId: 609
  },
  {
  name: "axew",
  apiId: 610
  },
  {
  name: "fraxure",
  apiId: 611
  },
  {
  name: "haxorus",
  apiId: 612
  },
  {
  name: "cubchoo",
  apiId: 613
  },
  {
  name: "beartic",
  apiId: 614
  },
  {
  name: "cryogonal",
  apiId: 615
  },
  {
  name: "shelmet",
  apiId: 616
  },
  {
  name: "accelgor",
  apiId: 617
  },
  {
  name: "stunfisk",
  apiId: 618
  },
  {
  name: "mienfoo",
  apiId: 619
  },
  {
  name: "mienshao",
  apiId: 620
  },
  {
  name: "druddigon",
  apiId: 621
  },
  {
  name: "golett",
  apiId: 622
  },
  {
  name: "golurk",
  apiId: 623
  },
  {
  name: "pawniard",
  apiId: 624
  },
  {
  name: "bisharp",
  apiId: 625
  },
  {
  name: "bouffalant",
  apiId: 626
  },
  {
  name: "rufflet",
  apiId: 627
  },
  {
  name: "braviary",
  apiId: 628
  },
  {
  name: "vullaby",
  apiId: 629
  },
  {
  name: "mandibuzz",
  apiId: 630
  },
  {
  name: "heatmor",
  apiId: 631
  },
  {
  name: "durant",
  apiId: 632
  },
  {
  name: "deino",
  apiId: 633
  },
  {
  name: "zweilous",
  apiId: 634
  },
  {
  name: "hydreigon",
  apiId: 635
  },
  {
  name: "larvesta",
  apiId: 636
  },
  {
  name: "volcarona",
  apiId: 637
  },
  {
  name: "cobalion",
  apiId: 638
  },
  {
  name: "terrakion",
  apiId: 639
  },
  {
  name: "virizion",
  apiId: 640
  },
  {
  name: "tornadus-incarnate",
  apiId: 641
  },
  {
  name: "thundurus-incarnate",
  apiId: 642
  },
  {
  name: "reshiram",
  apiId: 643
  },
  {
  name: "zekrom",
  apiId: 644
  },
  {
  name: "landorus-incarnate",
  apiId: 645
  },
  {
  name: "kyurem",
  apiId: 646
  },
  {
  name: "keldeo-ordinary",
  apiId: 647
  },
  {
  name: "meloetta-aria",
  apiId: 648
  },
  {
  name: "genesect",
  apiId: 649
  },
  {
  name: "chespin",
  apiId: 650
  },
  {
  name: "quilladin",
  apiId: 651
  },
  {
  name: "chesnaught",
  apiId: 652
  },
  {
  name: "fennekin",
  apiId: 653
  },
  {
  name: "braixen",
  apiId: 654
  },
  {
  name: "delphox",
  apiId: 655
  },
  {
  name: "froakie",
  apiId: 656
  },
  {
  name: "frogadier",
  apiId: 657
  },
  {
  name: "greninja",
  apiId: 658
  },
  {
  name: "bunnelby",
  apiId: 659
  },
  {
  name: "diggersby",
  apiId: 660
  },
  {
  name: "fletchling",
  apiId: 661
  },
  {
  name: "fletchinder",
  apiId: 662
  },
  {
  name: "talonflame",
  apiId: 663
  },
  {
  name: "scatterbug",
  apiId: 664
  },
  {
  name: "spewpa",
  apiId: 665
  },
  {
  name: "vivillon",
  apiId: 666
  },
  {
  name: "litleo",
  apiId: 667
  },
  {
  name: "pyroar",
  apiId: 668
  },
  {
  name: "flabebe",
  apiId: 669
  },
  {
  name: "floette",
  apiId: 670
  },
  {
  name: "florges",
  apiId: 671
  },
  {
  name: "skiddo",
  apiId: 672
  },
  {
  name: "gogoat",
  apiId: 673
  },
  {
  name: "pancham",
  apiId: 674
  },
  {
  name: "pangoro",
  apiId: 675
  },
  {
  name: "furfrou",
  apiId: 676
  },
  {
  name: "espurr",
  apiId: 677
  },
  {
  name: "meowstic-male",
  apiId: 678
  },
  {
  name: "honedge",
  apiId: 679
  },
  {
  name: "doublade",
  apiId: 680
  },
  {
  name: "aegislash-shield",
  apiId: 681
  },
  {
  name: "spritzee",
  apiId: 682
  },
  {
  name: "aromatisse",
  apiId: 683
  },
  {
  name: "swirlix",
  apiId: 684
  },
  {
  name: "slurpuff",
  apiId: 685
  },
  {
  name: "inkay",
  apiId: 686
  },
  {
  name: "malamar",
  apiId: 687
  },
  {
  name: "binacle",
  apiId: 688
  },
  {
  name: "barbaracle",
  apiId: 689
  },
  {
  name: "skrelp",
  apiId: 690
  },
  {
  name: "dragalge",
  apiId: 691
  },
  {
  name: "clauncher",
  apiId: 692
  },
  {
  name: "clawitzer",
  apiId: 693
  },
  {
  name: "helioptile",
  apiId: 694
  },
  {
  name: "heliolisk",
  apiId: 695
  },
  {
  name: "tyrunt",
  apiId: 696
  },
  {
  name: "tyrantrum",
  apiId: 697
  },
  {
  name: "amaura",
  apiId: 698
  },
  {
  name: "aurorus",
  apiId: 699
  },
  {
  name: "sylveon",
  apiId: 700
  },
  {
  name: "hawlucha",
  apiId: 701
  },
  {
  name: "dedenne",
  apiId: 702
  },
  {
  name: "carbink",
  apiId: 703
  },
  {
  name: "goomy",
  apiId: 704
  },
  {
  name: "sliggoo",
  apiId: 705
  },
  {
  name: "goodra",
  apiId: 706
  },
  {
  name: "klefki",
  apiId: 707
  },
  {
  name: "phantump",
  apiId: 708
  },
  {
  name: "trevenant",
  apiId: 709
  },
  {
  name: "pumpkaboo-average",
  apiId: 710
  },
  {
  name: "gourgeist-average",
  apiId: 711
  },
  {
  name: "bergmite",
  apiId: 712
  },
  {
  name: "avalugg",
  apiId: 713
  },
  {
  name: "noibat",
  apiId: 714
  },
  {
  name: "noivern",
  apiId: 715
  },
  {
  name: "xerneas",
  apiId: 716
  },
  {
  name: "yveltal",
  apiId: 717
  },
  {
  name: "zygarde-50",
  apiId: 718
  },
  {
  name: "diancie",
  apiId: 719
  },
  {
  name: "hoopa",
  apiId: 720
  },
  {
  name: "volcanion",
  apiId: 721
  },
  {
  name: "rowlet",
  apiId: 722
  },
  {
  name: "dartrix",
  apiId: 723
  },
  {
  name: "decidueye",
  apiId: 724
  },
  {
  name: "litten",
  apiId: 725
  },
  {
  name: "torracat",
  apiId: 726
  },
  {
  name: "incineroar",
  apiId: 727
  },
  {
  name: "popplio",
  apiId: 728
  },
  {
  name: "brionne",
  apiId: 729
  },
  {
  name: "primarina",
  apiId: 730
  },
  {
  name: "pikipek",
  apiId: 731
  },
  {
  name: "trumbeak",
  apiId: 732
  },
  {
  name: "toucannon",
  apiId: 733
  },
  {
  name: "yungoos",
  apiId: 734
  },
  {
  name: "gumshoos",
  apiId: 735
  },
  {
  name: "grubbin",
  apiId: 736
  },
  {
  name: "charjabug",
  apiId: 737
  },
  {
  name: "vikavolt",
  apiId: 738
  },
  {
  name: "crabrawler",
  apiId: 739
  },
  {
  name: "crabominable",
  apiId: 740
  },
  {
  name: "oricorio-baile",
  apiId: 741
  },
  {
  name: "cutiefly",
  apiId: 742
  },
  {
  name: "ribombee",
  apiId: 743
  },
  {
  name: "rockruff",
  apiId: 744
  },
  {
  name: "lycanroc-midday",
  apiId: 745
  },
  {
  name: "wishiwashi-solo",
  apiId: 746
  },
  {
  name: "mareanie",
  apiId: 747
  },
  {
  name: "toxapex",
  apiId: 748
  },
  {
  name: "mudbray",
  apiId: 749
  },
  {
  name: "mudsdale",
  apiId: 750
  },
  {
  name: "dewpider",
  apiId: 751
  },
  {
  name: "araquanid",
  apiId: 752
  },
  {
  name: "fomantis",
  apiId: 753
  },
  {
  name: "lurantis",
  apiId: 754
  },
  {
  name: "morelull",
  apiId: 755
  },
  {
  name: "shiinotic",
  apiId: 756
  },
  {
  name: "salandit",
  apiId: 757
  },
  {
  name: "salazzle",
  apiId: 758
  },
  {
  name: "stufful",
  apiId: 759
  },
  {
  name: "bewear",
  apiId: 760
  },
  {
  name: "bounsweet",
  apiId: 761
  },
  {
  name: "steenee",
  apiId: 762
  },
  {
  name: "tsareena",
  apiId: 763
  },
  {
  name: "comfey",
  apiId: 764
  },
  {
  name: "oranguru",
  apiId: 765
  },
  {
  name: "passimian",
  apiId: 766
  },
  {
  name: "wimpod",
  apiId: 767
  },
  {
  name: "golisopod",
  apiId: 768
  },
  {
  name: "sandygast",
  apiId: 769
  },
  {
  name: "palossand",
  apiId: 770
  },
  {
  name: "pyukumuku",
  apiId: 771
  },
  {
  name: "type-null",
  apiId: 772
  },
  {
  name: "silvally",
  apiId: 773
  },
  {
  name: "minior-red-meteor",
  apiId: 774
  },
  {
  name: "komala",
  apiId: 775
  },
  {
  name: "turtonator",
  apiId: 776
  },
  {
  name: "togedemaru",
  apiId: 777
  },
  {
  name: "mimikyu-disguised",
  apiId: 778
  },
  {
  name: "bruxish",
  apiId: 779
  },
  {
  name: "drampa",
  apiId: 780
  },
  {
  name: "dhelmise",
  apiId: 781
  },
  {
  name: "jangmo-o",
  apiId: 782
  },
  {
  name: "hakamo-o",
  apiId: 783
  },
  {
  name: "kommo-o",
  apiId: 784
  },
  {
  name: "tapu-koko",
  apiId: 785
  },
  {
  name: "tapu-lele",
  apiId: 786
  },
  {
  name: "tapu-bulu",
  apiId: 787
  },
  {
  name: "tapu-fini",
  apiId: 788
  },
  {
  name: "cosmog",
  apiId: 789
  },
  {
  name: "cosmoem",
  apiId: 790
  },
  {
  name: "solgaleo",
  apiId: 791
  },
  {
  name: "lunala",
  apiId: 792
  },
  {
  name: "nihilego",
  apiId: 793
  },
  {
  name: "buzzwole",
  apiId: 794
  },
  {
  name: "pheromosa",
  apiId: 795
  },
  {
  name: "xurkitree",
  apiId: 796
  },
  {
  name: "celesteela",
  apiId: 797
  },
  {
  name: "kartana",
  apiId: 798
  },
  {
  name: "guzzlord",
  apiId: 799
  },
  {
  name: "necrozma",
  apiId: 800
  },
  {
  name: "magearna",
  apiId: 801
  },
  {
  name: "marshadow",
  apiId: 802
  },
  {
  name: "poipole",
  apiId: 803
  },
  {
  name: "naganadel",
  apiId: 804
  },
  {
  name: "stakataka",
  apiId: 805
  },
  {
  name: "blacephalon",
  apiId: 806
  },
  {
  name: "zeraora",
  apiId: 807
  },
  {
  name: "meltan",
  apiId: 808
  },
  {
  name: "melmetal",
  apiId: 809
  },
  {
  name: "grookey",
  apiId: 810
  },
  {
  name: "thwackey",
  apiId: 811
  },
  {
  name: "rillaboom",
  apiId: 812
  },
  {
  name: "scorbunny",
  apiId: 813
  },
  {
  name: "raboot",
  apiId: 814
  },
  {
  name: "cinderace",
  apiId: 815
  },
  {
  name: "sobble",
  apiId: 816
  },
  {
  name: "drizzile",
  apiId: 817
  },
  {
  name: "inteleon",
  apiId: 818
  },
  {
  name: "skwovet",
  apiId: 819
  },
  {
  name: "greedent",
  apiId: 820
  },
  {
  name: "rookidee",
  apiId: 821
  },
  {
  name: "corvisquire",
  apiId: 822
  },
  {
  name: "corviknight",
  apiId: 823
  },
  {
  name: "blipbug",
  apiId: 824
  },
  {
  name: "dottler",
  apiId: 825
  },
  {
  name: "orbeetle",
  apiId: 826
  },
  {
  name: "nickit",
  apiId: 827
  },
  {
  name: "thievul",
  apiId: 828
  },
  {
  name: "gossifleur",
  apiId: 829
  },
  {
  name: "eldegoss",
  apiId: 830
  },
  {
  name: "wooloo",
  apiId: 831
  },
  {
  name: "dubwool",
  apiId: 832
  },
  {
  name: "chewtle",
  apiId: 833
  },
  {
  name: "drednaw",
  apiId: 834
  },
  {
  name: "yamper",
  apiId: 835
  },
  {
  name: "boltund",
  apiId: 836
  },
  {
  name: "rolycoly",
  apiId: 837
  },
  {
  name: "carkol",
  apiId: 838
  },
  {
  name: "coalossal",
  apiId: 839
  },
  {
  name: "applin",
  apiId: 840
  },
  {
  name: "flapple",
  apiId: 841
  },
  {
  name: "appletun",
  apiId: 842
  },
  {
  name: "silicobra",
  apiId: 843
  },
  {
  name: "sandaconda",
  apiId: 844
  },
  {
  name: "cramorant",
  apiId: 845
  },
  {
  name: "arrokuda",
  apiId: 846
  },
  {
  name: "barraskewda",
  apiId: 847
  },
  {
  name: "toxel",
  apiId: 848
  },
  {
  name: "toxtricity-amped",
  apiId: 849
  },
  {
  name: "sizzlipede",
  apiId: 850
  },
  {
  name: "centiskorch",
  apiId: 851
  },
  {
  name: "clobbopus",
  apiId: 852
  },
  {
  name: "grapploct",
  apiId: 853
  },
  {
  name: "sinistea",
  apiId: 854
  },
  {
  name: "polteageist",
  apiId: 855
  },
  {
  name: "hatenna",
  apiId: 856
  },
  {
  name: "hattrem",
  apiId: 857
  },
  {
  name: "hatterene",
  apiId: 858
  },
  {
  name: "impidimp",
  apiId: 859
  },
  {
  name: "morgrem",
  apiId: 860
  },
  {
  name: "grimmsnarl",
  apiId: 861
  },
  {
  name: "obstagoon",
  apiId: 862
  },
  {
  name: "perrserker",
  apiId: 863
  },
  {
  name: "cursola",
  apiId: 864
  },
  {
  name: "sirfetchd",
  apiId: 865
  },
  {
  name: "mr-rime",
  apiId: 866
  },
  {
  name: "runerigus",
  apiId: 867
  },
  {
  name: "milcery",
  apiId: 868
  },
  {
  name: "alcremie",
  apiId: 869
  },
  {
  name: "falinks",
  apiId: 870
  },
  {
  name: "pincurchin",
  apiId: 871
  },
  {
  name: "snom",
  apiId: 872
  },
  {
  name: "frosmoth",
  apiId: 873
  },
  {
  name: "stonjourner",
  apiId: 874
  },
  {
  name: "eiscue-ice",
  apiId: 875
  },
  {
  name: "indeedee-male",
  apiId: 876
  },
  {
  name: "morpeko-full-belly",
  apiId: 877
  },
  {
  name: "cufant",
  apiId: 878
  },
  {
  name: "copperajah",
  apiId: 879
  },
  {
  name: "dracozolt",
  apiId: 880
  },
  {
  name: "arctozolt",
  apiId: 881
  },
  {
  name: "dracovish",
  apiId: 882
  },
  {
  name: "arctovish",
  apiId: 883
  },
  {
  name: "duraludon",
  apiId: 884
  },
  {
  name: "dreepy",
  apiId: 885
  },
  {
  name: "drakloak",
  apiId: 886
  },
  {
  name: "dragapult",
  apiId: 887
  },
  {
  name: "zacian",
  apiId: 888
  },
  {
  name: "zamazenta",
  apiId: 889
  },
  {
  name: "eternatus",
  apiId: 890
  },
  {
  name: "kubfu",
  apiId: 891
  },
  {
  name: "urshifu-single-strike",
  apiId: 892
  },
  {
  name: "zarude",
  apiId: 893
  },
  {
  name: "regieleki",
  apiId: 894
  },
  {
  name: "regidrago",
  apiId: 895
  },
  {
  name: "glastrier",
  apiId: 896
  },
  {
  name: "spectrier",
  apiId: 897
  },
  {
  name: "calyrex",
  apiId: 898
  },
  {
  name: "wyrdeer",
  apiId: 899
  },
  {
  name: "kleavor",
  apiId: 900
  },
  {
  name: "ursaluna",
  apiId: 901
  },
  {
  name: "basculegion-male",
  apiId: 902
  },
  {
  name: "sneasler",
  apiId: 903
  },
  {
  name: "overqwil",
  apiId: 904
  },
  {
  name: "enamorus-incarnate",
  apiId: 905
  },
  {
  name: "deoxys-attack",
  apiId: 10001
  },
  {
  name: "deoxys-defense",
  apiId: 10002
  },
  {
  name: "deoxys-speed",
  apiId: 10003
  },
  {
  name: "wormadam-sandy",
  apiId: 10004
  },
  {
  name: "wormadam-trash",
  apiId: 10005
  },
  {
  name: "shaymin-sky",
  apiId: 10006
  },
  {
  name: "giratina-origin",
  apiId: 10007
  },
  {
  name: "rotom-heat",
  apiId: 10008
  },
  {
  name: "rotom-wash",
  apiId: 10009
  },
  {
  name: "rotom-frost",
  apiId: 10010
  },
  {
  name: "rotom-fan",
  apiId: 10011
  },
  {
  name: "rotom-mow",
  apiId: 10012
  },
  {
  name: "castform-sunny",
  apiId: 10013
  },
  {
  name: "castform-rainy",
  apiId: 10014
  },
  {
  name: "castform-snowy",
  apiId: 10015
  },
  {
  name: "basculin-blue-striped",
  apiId: 10016
  },
  {
  name: "darmanitan-zen",
  apiId: 10017
  },
  {
  name: "meloetta-pirouette",
  apiId: 10018
  },
  {
  name: "tornadus-therian",
  apiId: 10019
  },
  {
  name: "thundurus-therian",
  apiId: 10020
  },
  {
  name: "landorus-therian",
  apiId: 10021
  },
  {
  name: "kyurem-black",
  apiId: 10022
  },
  {
  name: "kyurem-white",
  apiId: 10023
  },
  {
  name: "keldeo-resolute",
  apiId: 10024
  },
  {
  name: "meowstic-female",
  apiId: 10025
  },
  {
  name: "aegislash-blade",
  apiId: 10026
  },
  {
  name: "pumpkaboo-small",
  apiId: 10027
  },
  {
  name: "pumpkaboo-large",
  apiId: 10028
  },
  {
  name: "pumpkaboo-super",
  apiId: 10029
  },
  {
  name: "gourgeist-small",
  apiId: 10030
  },
  {
  name: "gourgeist-large",
  apiId: 10031
  },
  {
  name: "gourgeist-super",
  apiId: 10032
  },
  {
  name: "venusaur-mega",
  apiId: 10033
  },
  {
  name: "charizard-mega-x",
  apiId: 10034
  },
  {
  name: "charizard-mega-y",
  apiId: 10035
  },
  {
  name: "blastoise-mega",
  apiId: 10036
  },
  {
  name: "alakazam-mega",
  apiId: 10037
  },
  {
  name: "gengar-mega",
  apiId: 10038
  },
  {
  name: "kangaskhan-mega",
  apiId: 10039
  },
  {
  name: "pinsir-mega",
  apiId: 10040
  },
  {
  name: "gyarados-mega",
  apiId: 10041
  },
  {
  name: "aerodactyl-mega",
  apiId: 10042
  },
  {
  name: "mewtwo-mega-x",
  apiId: 10043
  },
  {
  name: "mewtwo-mega-y",
  apiId: 10044
  },
  {
  name: "ampharos-mega",
  apiId: 10045
  },
  {
  name: "scizor-mega",
  apiId: 10046
  },
  {
  name: "heracross-mega",
  apiId: 10047
  },
  {
  name: "houndoom-mega",
  apiId: 10048
  },
  {
  name: "tyranitar-mega",
  apiId: 10049
  },
  {
  name: "blaziken-mega",
  apiId: 10050
  },
  {
  name: "gardevoir-mega",
  apiId: 10051
  },
  {
  name: "mawile-mega",
  apiId: 10052
  },
  {
  name: "aggron-mega",
  apiId: 10053
  },
  {
  name: "medicham-mega",
  apiId: 10054
  },
  {
  name: "manectric-mega",
  apiId: 10055
  },
  {
  name: "banette-mega",
  apiId: 10056
  },
  {
  name: "absol-mega",
  apiId: 10057
  },
  {
  name: "garchomp-mega",
  apiId: 10058
  },
  {
  name: "lucario-mega",
  apiId: 10059
  },
  {
  name: "abomasnow-mega",
  apiId: 10060
  },
  {
  name: "floette-eternal",
  apiId: 10061
  },
  {
  name: "latias-mega",
  apiId: 10062
  },
  {
  name: "latios-mega",
  apiId: 10063
  },
  {
  name: "swampert-mega",
  apiId: 10064
  },
  {
  name: "sceptile-mega",
  apiId: 10065
  },
  {
  name: "sableye-mega",
  apiId: 10066
  },
  {
  name: "altaria-mega",
  apiId: 10067
  },
  {
  name: "gallade-mega",
  apiId: 10068
  },
  {
  name: "audino-mega",
  apiId: 10069
  },
  {
  name: "sharpedo-mega",
  apiId: 10070
  },
  {
  name: "slowbro-mega",
  apiId: 10071
  },
  {
  name: "steelix-mega",
  apiId: 10072
  },
  {
  name: "pidgeot-mega",
  apiId: 10073
  },
  {
  name: "glalie-mega",
  apiId: 10074
  },
  {
  name: "diancie-mega",
  apiId: 10075
  },
  {
  name: "metagross-mega",
  apiId: 10076
  },
  {
  name: "kyogre-primal",
  apiId: 10077
  },
  {
  name: "groudon-primal",
  apiId: 10078
  },
  {
  name: "rayquaza-mega",
  apiId: 10079
  },
  {
  name: "pikachu-rock-star",
  apiId: 10080
  },
  {
  name: "pikachu-belle",
  apiId: 10081
  },
  {
  name: "pikachu-pop-star",
  apiId: 10082
  },
  {
  name: "pikachu-phd",
  apiId: 10083
  },
  {
  name: "pikachu-libre",
  apiId: 10084
  },
  {
  name: "pikachu-cosplay",
  apiId: 10085
  },
  {
  name: "hoopa-unbound",
  apiId: 10086
  },
  {
  name: "camerupt-mega",
  apiId: 10087
  },
  {
  name: "lopunny-mega",
  apiId: 10088
  },
  {
  name: "salamence-mega",
  apiId: 10089
  },
  {
  name: "beedrill-mega",
  apiId: 10090
  },
  {
  name: "rattata-alola",
  apiId: 10091
  },
  {
  name: "raticate-alola",
  apiId: 10092
  },
  {
  name: "raticate-totem-alola",
  apiId: 10093
  },
  {
  name: "pikachu-original-cap",
  apiId: 10094
  },
  {
  name: "pikachu-hoenn-cap",
  apiId: 10095
  },
  {
  name: "pikachu-sinnoh-cap",
  apiId: 10096
  },
  {
  name: "pikachu-unova-cap",
  apiId: 10097
  },
  {
  name: "pikachu-kalos-cap",
  apiId: 10098
  },
  {
  name: "pikachu-alola-cap",
  apiId: 10099
  },
  {
  name: "raichu-alola",
  apiId: 10100
  },
  {
  name: "sandshrew-alola",
  apiId: 10101
  },
  {
  name: "sandslash-alola",
  apiId: 10102
  },
  {
  name: "vulpix-alola",
  apiId: 10103
  },
  {
  name: "ninetales-alola",
  apiId: 10104
  },
  {
  name: "diglett-alola",
  apiId: 10105
  },
  {
  name: "dugtrio-alola",
  apiId: 10106
  },
  {
  name: "meowth-alola",
  apiId: 10107
  },
  {
  name: "persian-alola",
  apiId: 10108
  },
  {
  name: "geodude-alola",
  apiId: 10109
  },
  {
  name: "graveler-alola",
  apiId: 10110
  },
  {
  name: "golem-alola",
  apiId: 10111
  },
  {
  name: "grimer-alola",
  apiId: 10112
  },
  {
  name: "muk-alola",
  apiId: 10113
  },
  {
  name: "exeggutor-alola",
  apiId: 10114
  },
  {
  name: "marowak-alola",
  apiId: 10115
  },
  {
  name: "greninja-battle-bond",
  apiId: 10116
  },
  {
  name: "greninja-ash",
  apiId: 10117
  },
  {
  name: "zygarde-10-power-construct",
  apiId: 10118
  },
  {
  name: "zygarde-50-power-construct",
  apiId: 10119
  },
  {
  name: "zygarde-complete",
  apiId: 10120
  },
  {
  name: "gumshoos-totem",
  apiId: 10121
  },
  {
  name: "vikavolt-totem",
  apiId: 10122
  },
  {
  name: "oricorio-pom-pom",
  apiId: 10123
  },
  {
  name: "oricorio-pau",
  apiId: 10124
  },
  {
  name: "oricorio-sensu",
  apiId: 10125
  },
  {
  name: "lycanroc-midnight",
  apiId: 10126
  },
  {
  name: "wishiwashi-school",
  apiId: 10127
  },
  {
  name: "lurantis-totem",
  apiId: 10128
  },
  {
  name: "salazzle-totem",
  apiId: 10129
  },
  {
  name: "minior-orange-meteor",
  apiId: 10130
  },
  {
  name: "minior-yellow-meteor",
  apiId: 10131
  },
  {
  name: "minior-green-meteor",
  apiId: 10132
  },
  {
  name: "minior-blue-meteor",
  apiId: 10133
  },
  {
  name: "minior-indigo-meteor",
  apiId: 10134
  },
  {
  name: "minior-violet-meteor",
  apiId: 10135
  },
  {
  name: "minior-red",
  apiId: 10136
  },
  {
  name: "minior-orange",
  apiId: 10137
  },
  {
  name: "minior-yellow",
  apiId: 10138
  },
  {
  name: "minior-green",
  apiId: 10139
  },
  {
  name: "minior-blue",
  apiId: 10140
  },
  {
  name: "minior-indigo",
  apiId: 10141
  },
  {
  name: "minior-violet",
  apiId: 10142
  },
  {
  name: "mimikyu-busted",
  apiId: 10143
  },
  {
  name: "mimikyu-totem-disguised",
  apiId: 10144
  },
  {
  name: "mimikyu-totem-busted",
  apiId: 10145
  },
  {
  name: "kommo-o-totem",
  apiId: 10146
  },
  {
  name: "magearna-original",
  apiId: 10147
  },
  {
  name: "pikachu-partner-cap",
  apiId: 10148
  },
  {
  name: "marowak-totem",
  apiId: 10149
  },
  {
  name: "ribombee-totem",
  apiId: 10150
  },
  {
  name: "rockruff-own-tempo",
  apiId: 10151
  },
  {
  name: "lycanroc-dusk",
  apiId: 10152
  },
  {
  name: "araquanid-totem",
  apiId: 10153
  },
  {
  name: "togedemaru-totem",
  apiId: 10154
  },
  {
  name: "necrozma-dusk",
  apiId: 10155
  },
  {
  name: "necrozma-dawn",
  apiId: 10156
  },
  {
  name: "necrozma-ultra",
  apiId: 10157
  },
  {
  name: "pikachu-starter",
  apiId: 10158
  },
  {
  name: "eevee-starter",
  apiId: 10159
  },
  {
  name: "pikachu-world-cap",
  apiId: 10160
  },
  {
  name: "meowth-galar",
  apiId: 10161
  },
  {
  name: "ponyta-galar",
  apiId: 10162
  },
  {
  name: "rapidash-galar",
  apiId: 10163
  },
  {
  name: "slowpoke-galar",
  apiId: 10164
  },
  {
  name: "slowbro-galar",
  apiId: 10165
  },
  {
  name: "farfetchd-galar",
  apiId: 10166
  },
  {
  name: "weezing-galar",
  apiId: 10167
  },
  {
  name: "mr-mime-galar",
  apiId: 10168
  },
  {
  name: "articuno-galar",
  apiId: 10169
  },
  {
  name: "zapdos-galar",
  apiId: 10170
  },
  {
  name: "moltres-galar",
  apiId: 10171
  },
  {
  name: "slowking-galar",
  apiId: 10172
  },
  {
  name: "corsola-galar",
  apiId: 10173
  },
  {
  name: "zigzagoon-galar",
  apiId: 10174
  },
  {
  name: "linoone-galar",
  apiId: 10175
  },
  {
  name: "darumaka-galar",
  apiId: 10176
  },
  {
  name: "darmanitan-galar-standard",
  apiId: 10177
  },
  {
  name: "darmanitan-galar-zen",
  apiId: 10178
  },
  {
  name: "yamask-galar",
  apiId: 10179
  },
  {
  name: "stunfisk-galar",
  apiId: 10180
  },
  {
  name: "zygarde-10",
  apiId: 10181
  },
  {
  name: "cramorant-gulping",
  apiId: 10182
  },
  {
  name: "cramorant-gorging",
  apiId: 10183
  },
  {
  name: "toxtricity-low-key",
  apiId: 10184
  },
  {
  name: "eiscue-noice",
  apiId: 10185
  },
  {
  name: "indeedee-female",
  apiId: 10186
  },
  {
  name: "morpeko-hangry",
  apiId: 10187
  },
  {
  name: "zacian-crowned",
  apiId: 10188
  },
  {
  name: "zamazenta-crowned",
  apiId: 10189
  },
  {
  name: "eternatus-eternamax",
  apiId: 10190
  },
  {
  name: "urshifu-rapid-strike",
  apiId: 10191
  },
  {
  name: "zarude-dada",
  apiId: 10192
  },
  {
  name: "calyrex-ice",
  apiId: 10193
  },
  {
  name: "calyrex-shadow",
  apiId: 10194
  },
  {
  name: "venusaur-gmax",
  apiId: 10195
  },
  {
  name: "charizard-gmax",
  apiId: 10196
  },
  {
  name: "blastoise-gmax",
  apiId: 10197
  },
  {
  name: "butterfree-gmax",
  apiId: 10198
  },
  {
  name: "pikachu-gmax",
  apiId: 10199
  },
  {
  name: "meowth-gmax",
  apiId: 10200
  },
  {
  name: "machamp-gmax",
  apiId: 10201
  },
  {
  name: "gengar-gmax",
  apiId: 10202
  },
  {
  name: "kingler-gmax",
  apiId: 10203
  },
  {
  name: "lapras-gmax",
  apiId: 10204
  },
  {
  name: "eevee-gmax",
  apiId: 10205
  },
  {
  name: "snorlax-gmax",
  apiId: 10206
  },
  {
  name: "garbodor-gmax",
  apiId: 10207
  },
  {
  name: "melmetal-gmax",
  apiId: 10208
  },
  {
  name: "rillaboom-gmax",
  apiId: 10209
  },
  {
  name: "cinderace-gmax",
  apiId: 10210
  },
  {
  name: "inteleon-gmax",
  apiId: 10211
  },
  {
  name: "corviknight-gmax",
  apiId: 10212
  },
  {
  name: "orbeetle-gmax",
  apiId: 10213
  },
  {
  name: "drednaw-gmax",
  apiId: 10214
  },
  {
  name: "coalossal-gmax",
  apiId: 10215
  },
  {
  name: "flapple-gmax",
  apiId: 10216
  },
  {
  name: "appletun-gmax",
  apiId: 10217
  },
  {
  name: "sandaconda-gmax",
  apiId: 10218
  },
  {
  name: "toxtricity-amped-gmax",
  apiId: 10219
  },
  {
  name: "centiskorch-gmax",
  apiId: 10220
  },
  {
  name: "hatterene-gmax",
  apiId: 10221
  },
  {
  name: "grimmsnarl-gmax",
  apiId: 10222
  },
  {
  name: "alcremie-gmax",
  apiId: 10223
  },
  {
  name: "copperajah-gmax",
  apiId: 10224
  },
  {
  name: "duraludon-gmax",
  apiId: 10225
  },
  {
  name: "urshifu-single-strike-gmax",
  apiId: 10226
  },
  {
  name: "urshifu-rapid-strike-gmax",
  apiId: 10227
  },
  {
  name: "toxtricity-low-key-gmax",
  apiId: 10228
  },
  {
  name: "growlithe-hisui",
  apiId: 10229
  },
  {
  name: "arcanine-hisui",
  apiId: 10230
  },
  {
  name: "voltorb-hisui",
  apiId: 10231
  },
  {
  name: "electrode-hisui",
  apiId: 10232
  },
  {
  name: "typhlosion-hisui",
  apiId: 10233
  },
  {
  name: "qwilfish-hisui",
  apiId: 10234
  },
  {
  name: "sneasel-hisui",
  apiId: 10235
  },
  {
  name: "samurott-hisui",
  apiId: 10236
  },
  {
  name: "lilligant-hisui",
  apiId: 10237
  },
  {
  name: "zorua-hisui",
  apiId: 10238
  },
  {
  name: "zoroark-hisui",
  apiId: 10239
  },
  {
  name: "braviary-hisui",
  apiId: 10240
  },
  {
  name: "sliggoo-hisui",
  apiId: 10241
  },
  {
  name: "goodra-hisui",
  apiId: 10242
  },
  {
  name: "avalugg-hisui",
  apiId: 10243
  },
  {
  name: "decidueye-hisui",
  apiId: 10244
  },
  {
  name: "dialga-origin",
  apiId: 10245
  },
  {
  name: "palkia-origin",
  apiId: 10246
  },
  {
  name: "basculin-white-striped",
  apiId: 10247
  },
  {
  name: "basculegion-female",
  apiId: 10248
  },
  {
  name: "enamorus-therian",
  apiId: 10249
  }
  ]

router.post('/populate', async (req, res) => {
  try {
    await Pokemon.destroy({
      where: {},
      truncate: true
    })
    await Pokemon.bulkCreate(pokemonList)
    res.status(204).end()
    
  } catch (exception) {
    res.status(500).json({ error: `${exception}`})
  }
})

module.exports = router