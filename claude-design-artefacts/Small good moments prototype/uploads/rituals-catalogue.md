---
title: The Small Good Moments — Ritual Catalogue
description: An import-ready catalogue of culturally specific wellbeing words, structured for an app that reminds, encourages and prompts people to do them.
version: 2.0
date: 2026-06-28
schema_version: 1
primary_source: "Lomas, T. (2016). Towards a positive cross-cultural lexicography: Enriching our emotional landscape through 216 'untranslatable' words pertaining to wellbeing. Journal of Positive Psychology."
notes: >
  Every entry carries the same field set so the whole file can be parsed row by row.
  `type` and `promptable` let the app separate do-this-now rituals from reflective or
  abstract concepts. `cluster` maps to the five app categories. `lomas_path` records
  where the term sits in Lomas's grounded-theory taxonomy (Category > Meta-theme > Theme)
  for entries drawn from or corroborated by the paper.
---

# The Small Good Moments — Ritual Catalogue

A catalogue of culturally specific wellbeing words, each tied to an activity or mood, structured so an app can prompt people to do them.

## How to read this file

Each ritual is a level-3 heading (`###`) followed by a fenced `yaml` block with its metadata, then short prose fields. The fields are identical for every entry, so the file can be parsed either by reading the YAML blocks or by splitting on the headings.

### Field reference

| Field | Meaning |
|---|---|
| `id` | Stable slug. Safe to use as a database key. |
| `name` | The word as displayed. |
| `language` | Language of origin. |
| `region` | Country or culture most associated with it. |
| `pronunciation` | Rough phonetic guide for English speakers. |
| `cluster` | One of: `pause`, `outside`, `savour`, `gather`, `reflect`. The app's five feeling-based categories. |
| `type` | What kind of thing it is: `doable_activity`, `social_ritual`, `perceptual_noticing`, `state_of_mind`, `relational_practice`, `spiritual_practice`. |
| `promptable` | `true` if it maps to a concrete thing a person can be reminded to do; `false` if it is better used as a theme, reflection, or label. |
| `solo_or_social` | `solo`, `social`, or `either`. |
| `time_of_day` | When it naturally happens: `dawn`, `morning`, `midday`, `afternoon`, `evening`, `night`, or `any`. |
| `season` | `spring`, `summer`, `autumn`, `winter`, `cold_months`, `warm_months`, or `any`. |
| `duration_minutes` | Suggested length for a guided "moment". `0` means it is not a timed activity. |
| `essence` | One-line summary for cards. |
| `meaning` | Fuller cultural meaning. |
| `how_to` | Pipe-separated steps. |
| `when` | When and in what context it happens. |
| `feeling` | The mood or benefit it leaves you with. |
| `cultural_note` | Origin, context, or a caution about respectful use. |
| `lomas_path` | Position in Lomas's taxonomy, where applicable. |
| `caution` | Present only where care is needed (sacred, commercialised, or ambivalent meaning). |

### Type and cluster counts

- **Total entries:** 60
- **Promptable (good for reminders):** 38
- **Reference only (themes / reflections):** 22
- **Clusters:** pause, outside, savour, gather, reflect

---

## Cluster: Pause — rest, idleness and cosiness

### Niksen
```yaml
id: niksen
name: Niksen
language: Dutch
region: Netherlands
pronunciation: NIK-sen
cluster: pause
type: doable_activity
promptable: true
solo_or_social: solo
time_of_day: any
season: any
duration_minutes: 3
lomas_path: ""
```
**Essence:** The art of doing absolutely nothing, on purpose.
**Meaning:** Idleness with no aim and no guilt — not resting up for the next task, just being idle and letting that be enough. Often phrased *lekker niksen*, "delicious nothing".
**How to:** Sit or lie somewhere comfortable with nothing to achieve | Let your gaze drift out a window | When the urge to be useful arrives, notice it and let it pass.
**When:** Any unclaimed pocket of time. Usually alone.
**Feeling:** A loosening in the chest. Rest without a reason.
**Cultural note:** Popularised internationally around 2019 as a Dutch antidote to busyness.

### Dolce far niente
```yaml
id: dolce-far-niente
name: Dolce far niente
language: Italian
region: Italy
pronunciation: DOL-chay far nee-EN-tay
cluster: pause
type: doable_activity
promptable: true
solo_or_social: either
time_of_day: midday
season: warm_months
duration_minutes: 5
lomas_path: "Feelings > Positive > Savouring"
```
**Essence:** The sweetness of doing nothing, and savouring it.
**Meaning:** Guilt-free idleness treated as one of life's real pleasures rather than a lapse.
**How to:** Step away from the to-do list entirely | Find sun, shade, a good chair or a slow drink | Let the minutes go uncounted.
**When:** A long lunch, a warm afternoon, a Sunday with no plans.
**Feeling:** Time slows and stops feeling like something to spend.
**Cultural note:** Associated with Italy's slower regional rhythms and Blue Zone longevity.

### Fjaka
```yaml
id: fjaka
name: Fjaka
language: Croatian
region: Dalmatia, Croatia
pronunciation: FYAH-kah
cluster: pause
type: doable_activity
promptable: true
solo_or_social: either
time_of_day: afternoon
season: summer
duration_minutes: 5
lomas_path: ""
```
**Essence:** A blissful, dreamy slowing-down — laziness, perfected.
**Meaning:** A celebrated Dalmatian state of being so relaxed you barely move and feel no need to.
**How to:** Wait for the heat of the day or a heavy, full feeling after a meal | Find shade and somewhere to recline | Surrender; resistance is the only thing that can ruin it.
**When:** Hot afternoons, especially in summer along the coast.
**Feeling:** Total, unbothered ease. The world can wait.
**Cultural note:** A point of regional pride along the Adriatic coast.

### Keyif
```yaml
id: keyif
name: Keyif
language: Turkish
region: Türkiye
pronunciation: kay-EEF
cluster: pause
type: doable_activity
promptable: true
solo_or_social: either
time_of_day: any
season: any
duration_minutes: 4
lomas_path: ""
```
**Essence:** Quiet, intentional idle pleasure, usually with tea and a view.
**Meaning:** Carving out a small, savoured pause for no reason other than that it feels good.
**How to:** Make tea or coffee, properly | Take it somewhere with a view — a balcony, a kerb, the sea | Drink it slowly and watch the world go by.
**When:** Stolen at any hour. Often shared, often silent.
**Feeling:** A settled, unhurried contentment.
**Cultural note:** Frequently cited as a Turkish wellbeing word not captured by standard happiness measures.

### Hygge
```yaml
id: hygge
name: Hygge
language: Danish
region: Denmark
pronunciation: HOO-guh
cluster: pause
type: doable_activity
promptable: true
solo_or_social: either
time_of_day: evening
season: cold_months
duration_minutes: 4
lomas_path: "Feelings > Positive > Cosiness"
```
**Essence:** Cosy contentment, built from small warm things.
**Meaning:** Candlelight, wool socks, a hot drink and easy company — comfort assembled on purpose against the dark. Goes beyond physical comfort to emotional and existential warmth.
**How to:** Lower the lights and light a candle | Make something warm to hold | Gather what comforts you — a blanket, a book, a person — and stay put.
**When:** Autumn and winter evenings especially. Alone or with a close few.
**Feeling:** Safe, warm, quietly glad to be where you are.
**Cultural note:** A hallmark of Danish identity. Note this is the most commercialised term in the catalogue; keep it grounded in atmosphere, not products.
**Caution:** Heavily commercialised abroad — present as a feeling, not a shopping list.

### Koselig
```yaml
id: koselig
name: Koselig
language: Norwegian
region: Norway
pronunciation: KOOSH-lee
cluster: pause
type: doable_activity
promptable: true
solo_or_social: either
time_of_day: evening
season: cold_months
duration_minutes: 4
lomas_path: "Feelings > Positive > Cosiness"
```
**Essence:** Warm, convivial cosiness — the Norwegian cousin of hygge.
**Meaning:** A sense of warmth and togetherness: bonfires, coffee and pastry with friends, candles against a winter storm.
**How to:** Warm and soften the space — light, blankets, a fire if you have one | Bring in a hot drink and good company or a good book | Let it feel unhurried.
**When:** Dark and cold evenings, alone or with others.
**Feeling:** Glowing, sheltered warmth.
**Cultural note:** Part of a Northern European family of "cosiness" words; consider grouping with hygge, mysa, gezelligheid and Gemütlichkeit as variants.

### Mysa
```yaml
id: mysa
name: Mysa
language: Swedish
region: Sweden
pronunciation: MEE-sah
cluster: pause
type: doable_activity
promptable: true
solo_or_social: either
time_of_day: evening
season: cold_months
duration_minutes: 4
lomas_path: "Feelings > Positive > Cosiness"
```
**Essence:** To snuggle down and feel cosy and content, usually at home.
**Meaning:** The Swedish cosiness verb — to make yourself comfortable and enjoy a soft, warm moment.
**How to:** Get comfortable somewhere soft | Add warmth — a blanket, a drink, low light | Let yourself settle and enjoy it.
**When:** Evenings at home, especially in colder months.
**Feeling:** Soft, contented, at ease.
**Cultural note:** Closely related to *mysig* (the adjective).

### Gemütlichkeit
```yaml
id: gemutlichkeit
name: Gemütlichkeit
language: German
region: Germany
pronunciation: ge-MOOT-lish-kite
cluster: pause
type: state_of_mind
promptable: true
solo_or_social: either
time_of_day: evening
season: cold_months
duration_minutes: 4
lomas_path: "Feelings > Positive > Cosiness"
```
**Essence:** Warmth, friendliness, belonging and peace of mind.
**Meaning:** A cosy, convivial atmosphere combined with a feeling of social ease and being at home in a place.
**How to:** Choose a warm, unpretentious setting | Slow the pace and lower the stakes | Let comfort and company do the rest.
**When:** Evenings, gatherings, snug rooms.
**Feeling:** Relaxed belonging.
**Cultural note:** The German member of the cosiness family.

### Feierabend
```yaml
id: feierabend
name: Feierabend
language: German
region: Germany
pronunciation: FY-er-ah-bent
cluster: pause
type: doable_activity
promptable: true
solo_or_social: either
time_of_day: evening
season: any
duration_minutes: 0
lomas_path: "Feelings > Positive > Revelry"
```
**Essence:** The festive, unwound mood at the close of the working day.
**Meaning:** Literally "celebration evening" — the moment work stops and rest, not more activity, begins. A real psychological boundary on the day.
**How to:** Mark a clear end to work — close the laptop, change clothes, step outside | Do something that is the opposite of the day's tasks | Protect it from being eaten by chores.
**When:** Evening, after work.
**Feeling:** Earned release and the day handed back to you.
**Cultural note:** Lomas places it among words of revelry and end-of-day pleasure.

### Meriggiare
```yaml
id: meriggiare
name: Meriggiare
language: Italian
region: Italy
pronunciation: meh-reej-JAH-reh
cluster: pause
type: doable_activity
promptable: true
solo_or_social: either
time_of_day: midday
season: summer
duration_minutes: 5
lomas_path: ""
```
**Essence:** To rest in the shade through the hottest part of the day.
**Meaning:** A single verb for retreating from the midday heat into cool, still shade.
**How to:** When the sun is high and fierce, stop | Find a tree, an awning or a shuttered room | Stay slow and quiet until the heat softens.
**When:** Midday, summer.
**Feeling:** Cool relief and a guilt-free pause.
**Cultural note:** The instinct behind the siesta.

### Kalsarikännit
```yaml
id: kalsarikannit
name: Kalsarikännit
language: Finnish
region: Finland
pronunciation: KAL-sah-ree-kan-nit
cluster: pause
type: doable_activity
promptable: true
solo_or_social: solo
time_of_day: evening
season: any
duration_minutes: 0
lomas_path: ""
```
**Essence:** Drinking at home, in your underwear, with no plan to go out.
**Meaning:** "Pants drunk" — unpretentious, solitary decompression with zero social performance.
**How to:** Cancel any plan to go out | Get comfortable at home in whatever you like | Have a drink, or don't, and do nothing in particular.
**When:** Evenings, alone or with someone very close.
**Feeling:** Freedom from being seen, and total ease.
**Cultural note:** Has its own officially released Finnish emoji. Keep it light and optional given the alcohol element.

### Wú wéi
```yaml
id: wu-wei
name: Wú wéi
language: Chinese
region: China
pronunciation: woo-WAY
cluster: pause
type: state_of_mind
promptable: false
solo_or_social: either
time_of_day: any
season: any
duration_minutes: 0
lomas_path: "Character > Spirituality > Path"
```
**Essence:** Effortless action — doing without forcing.
**Meaning:** Literally "do nothing", but meaning to act so naturally and in tune with the moment that effort disappears. A central Taoist idea.
**How to:** Notice where you are straining or forcing | Loosen your grip on the outcome | Let the next right action arise rather than driving it.
**When:** A way of approaching tasks rather than a scheduled activity.
**Feeling:** Flow, ease, and less friction.
**Cultural note:** Rooted in Taoism and alignment with the Tao. Best used as a reflective theme, not a timed prompt.

---

## Cluster: Outside — air, light and nature

### Friluftsliv
```yaml
id: friluftsliv
name: Friluftsliv
language: Norwegian
region: Norway
pronunciation: FREE-loofts-leev
cluster: outside
type: doable_activity
promptable: true
solo_or_social: either
time_of_day: any
season: any
duration_minutes: 5
lomas_path: "Relationships > Pro-sociality > Communality"
```
**Essence:** "Open-air life" — weaving the outdoors into ordinary days.
**Meaning:** Not a grand expedition but a way of living that keeps you outside in all weathers, all year, living in tune with nature.
**How to:** Go outside, whatever the sky is doing | Walk, sit, ski, swim or forage — whatever fits the day | Stay long enough to stop checking the time.
**When:** Year-round, by design.
**Feeling:** Awake, weathered, more alive than the indoors allows.
**Cultural note:** Lomas groups it under living in harmony with nature; rooted in 19th-century Norwegian Romanticism.

### Shinrin-yoku
```yaml
id: shinrin-yoku
name: Shinrin-yoku
language: Japanese
region: Japan
pronunciation: shin-rin-YOH-koo
cluster: outside
type: doable_activity
promptable: true
solo_or_social: either
time_of_day: any
season: any
duration_minutes: 5
lomas_path: "Feelings > Positive > Savouring"
```
**Essence:** Forest bathing — soaking in the woods through every sense.
**Meaning:** A slow, aimless immersion among trees: relaxation gained from "bathing" in the forest, figuratively and literally.
**How to:** Walk into trees and slow right down | Notice the light, smell, sound and the air on your skin | Let there be no destination.
**When:** Any time you can reach trees. Even a small wood will do.
**Feeling:** Measurably calmer — softer breathing, a quieter mind.
**Cultural note:** Promoted as public health in Japan; supported by research on cortisol and immune markers.

### Gökotta
```yaml
id: gokotta
name: Gökotta
language: Swedish
region: Sweden
pronunciation: yo-KOT-ta
cluster: outside
type: doable_activity
promptable: true
solo_or_social: either
time_of_day: dawn
season: spring
duration_minutes: 4
lomas_path: "Feelings > Positive > Savouring"
```
**Essence:** Rising at dawn just to go out and hear the first birdsong.
**Meaning:** Waking early for no reason but to be outside as the birds begin and the world wakes.
**How to:** Set an early alarm, before the day demands anything | Step outside as the light comes up | Stand still and just listen.
**When:** Early spring and summer mornings.
**Feeling:** Wonder, and a private head start on the day.
**Cultural note:** Explicitly cited by Lomas as a Swedish savouring word.

### Uitwaaien
```yaml
id: uitwaaien
name: Uitwaaien
language: Dutch
region: Netherlands
pronunciation: OUT-vai-en
cluster: outside
type: doable_activity
promptable: true
solo_or_social: either
time_of_day: any
season: any
duration_minutes: 4
lomas_path: "Feelings > Positive > Savouring"
```
**Essence:** To walk into the wind to clear your head.
**Meaning:** Literally "to wind out" — going into a brisk day to be blown clean of whatever is clouding you, with an emphasis on fresh air and health.
**How to:** Pick a blustery day instead of avoiding it | Walk into the wind — coast, field or hilltop | Let it pull the noise out of your head.
**When:** Whenever it's windy and your thoughts feel tangled.
**Feeling:** Scrubbed clean and clear-headed.
**Cultural note:** Listed by Lomas among savouring words for fresh-air walking.

### Utepils
```yaml
id: utepils
name: Utepils
language: Norwegian
region: Norway
pronunciation: OO-teh-pilss
cluster: outside
type: doable_activity
promptable: true
solo_or_social: social
time_of_day: afternoon
season: spring
duration_minutes: 3
lomas_path: "Feelings > Positive > Revelry"
```
**Essence:** The first beer enjoyed outdoors in the sun after winter.
**Meaning:** A small national celebration of the first cold drink taken outside once the sun returns.
**How to:** Wait for the first properly warm, bright day | Take a cold drink outside — step, bench or park | Tip your face to the sun and toast the light coming back.
**When:** The first warm days of spring, then all summer.
**Feeling:** Communal relief that winter is over.
**Cultural note:** Named directly by Lomas as a Norwegian word of revelry.

### Waldeinsamkeit
```yaml
id: waldeinsamkeit
name: Waldeinsamkeit
language: German
region: Germany
pronunciation: VALD-ine-zam-kite
cluster: outside
type: doable_activity
promptable: true
solo_or_social: solo
time_of_day: any
season: any
duration_minutes: 5
lomas_path: "Feelings > Complex > Freedom"
```
**Essence:** The soothing solitude of being alone in the woods.
**Meaning:** A mysterious, slightly sublime feeling of oneness and solitude among trees — the pull of untamed wilderness.
**How to:** Go alone into woodland | Walk slowly or sit still | Let the solitude feel spacious rather than lonely.
**When:** Solo woodland walks, any season.
**Feeling:** Meditative calm with a touch of awe.
**Cultural note:** Rooted in German Romanticism; Lomas files it among words for freedom and solitude.

### Mångata
```yaml
id: mangata
name: Mångata
language: Swedish
region: Sweden
pronunciation: MOHN-gah-ta
cluster: outside
type: perceptual_noticing
promptable: true
solo_or_social: either
time_of_day: night
season: any
duration_minutes: 3
lomas_path: "Feelings > Complex > Aesthetics"
```
**Essence:** The shimmering, road-like reflection of the moon on water.
**Meaning:** A word for the glittering moon-path across the sea — a thing many have seen and never named.
**How to:** On a clear night near water, find the moon | Follow its light down to the surface | Watch the path it lays across the water.
**When:** Clear nights beside water.
**Feeling:** Small, quiet awe.
**Cultural note:** Lomas pairs it with the Turkish *gümüşservi* for the same phenomenon.

### Komorebi
```yaml
id: komorebi
name: Komorebi
language: Japanese
region: Japan
pronunciation: koh-moh-REH-bee
cluster: outside
type: perceptual_noticing
promptable: true
solo_or_social: either
time_of_day: midday
season: any
duration_minutes: 3
lomas_path: "Feelings > Complex > Aesthetics"
```
**Essence:** Sunlight filtering and dappling through leaves.
**Meaning:** The interplay of light and leaves — a small, fleeting beauty worth pausing for.
**How to:** Find a tree with sun behind it | Watch the light scatter through the leaves | Stay with it for a moment before moving on.
**When:** Bright days under trees.
**Feeling:** Gentle delight and present-moment attention.
**Cultural note:** Listed by Lomas among Japanese aesthetic-appreciation words.

### Psithurism
```yaml
id: psithurism
name: Psithurism
language: Greek
region: Greece
pronunciation: SITH-yoor-iz-um
cluster: outside
type: perceptual_noticing
promptable: true
solo_or_social: either
time_of_day: any
season: any
duration_minutes: 3
lomas_path: "Feelings > Complex > Aesthetics"
```
**Essence:** The sound of wind rustling through trees.
**Meaning:** A word for one of nature's quietest pleasures — leaves stirring in the breeze.
**How to:** Find trees on a breezy day | Close your eyes and listen | Let the sound be the whole of your attention.
**When:** Breezy days near trees.
**Feeling:** Calm and quietly soothed.
**Cultural note:** Cited by Lomas alongside other words for the sounds and sights of nature.

---

## Cluster: Savour — food, drink and the table

### Fika
```yaml
id: fika
name: Fika
language: Swedish
region: Sweden
pronunciation: FEE-ka
cluster: savour
type: social_ritual
promptable: true
solo_or_social: social
time_of_day: morning
season: any
duration_minutes: 4
lomas_path: "Feelings > Positive > Revelry"
```
**Essence:** A coffee-and-cake break, taken seriously, with others.
**Meaning:** A protected daily pause for a hot drink, something sweet and company — socialising around food and drink.
**How to:** Step away from work — fika is not done at your desk | Make coffee and find something sweet, ideally a cinnamon bun | Sit with someone and talk about nothing in particular.
**When:** Daily, mid-morning and mid-afternoon. Best shared.
**Feeling:** Reset, connected, reminded the day isn't only work.
**Cultural note:** Lomas lists it among words for socialising around food and drink.

### Sobremesa
```yaml
id: sobremesa
name: Sobremesa
language: Spanish
region: Spain and Latin America
pronunciation: soh-breh-MEH-sah
cluster: savour
type: social_ritual
promptable: true
solo_or_social: social
time_of_day: afternoon
season: any
duration_minutes: 5
lomas_path: "Feelings > Positive > Revelry"
```
**Essence:** The lingering talk at the table after the meal is done.
**Meaning:** "Over the table" — unhurried conversation that keeps everyone seated long after the food is gone.
**How to:** When the plates are cleared, don't get up | Pour another coffee and let the talk wander | Let leaving be no one's priority.
**When:** After lunch and dinner, often an hour or more on weekends.
**Feeling:** Closeness, trust, no rush to part.
**Cultural note:** Named by Lomas as a Spanish word for the pleasure of conversation continuing past the food.

### Aperitivo
```yaml
id: aperitivo
name: Aperitivo
language: Italian
region: Italy
pronunciation: ah-peh-ree-TEE-vo
cluster: savour
type: social_ritual
promptable: true
solo_or_social: social
time_of_day: evening
season: any
duration_minutes: 4
lomas_path: ""
```
**Essence:** A pre-dinner drink and snack that opens the evening.
**Meaning:** A gentle ritual marking the seam between the working day and the night.
**How to:** In the early evening, pour a light drink | Set out a few small things to nibble | Let it slow you down before dinner, not fill you up.
**When:** Early evening, before dinner, usually with others.
**Feeling:** The day exhales; the evening begins.
**Cultural note:** Sits alongside the wider European culture of unhurried eating and drinking.

### Merienda
```yaml
id: merienda
name: Merienda
language: Spanish
region: Spain
pronunciation: meh-ree-EN-dah
cluster: savour
type: social_ritual
promptable: true
solo_or_social: either
time_of_day: afternoon
season: any
duration_minutes: 3
lomas_path: ""
```
**Essence:** A small, sweet afternoon break to bridge the day.
**Meaning:** A light afternoon snack — coffee or chocolate with something to eat — carrying you to a late dinner.
**How to:** Mid-to-late afternoon, pause for a small bite | Coffee, hot chocolate, a pastry or some bread | Best taken with whoever is near.
**When:** Late afternoon, daily.
**Feeling:** A gentle lift in the long stretch before evening.
**Cultural note:** Common across Spain and much of Latin America.

### Gōngfu chá
```yaml
id: gongfu-cha
name: Gōngfu chá
language: Chinese
region: China
pronunciation: gong-foo CHAH
cluster: savour
type: doable_activity
promptable: true
solo_or_social: either
time_of_day: afternoon
season: any
duration_minutes: 5
lomas_path: ""
```
**Essence:** Brewing tea slowly and attentively, as a small meditation.
**Meaning:** Tea made with care in a tiny pot over many short infusions — the doing of it as restful as the drinking.
**How to:** Warm a small pot and cup | Brew in short, repeated steeps, watching each one | Drink slowly and let the ritual hold your attention.
**When:** Unhurried afternoons. Alone for calm, or shared for company.
**Feeling:** Patience, presence, a settled mind.
**Cultural note:** A skilled tea practice with both solitary and social forms.

### Hara hachi bu
```yaml
id: hara-hachi-bu
name: Hara hachi bu
language: Japanese
region: Okinawa, Japan
pronunciation: HA-ra HA-chee boo
cluster: savour
type: doable_activity
promptable: true
solo_or_social: either
time_of_day: any
season: any
duration_minutes: 0
lomas_path: ""
```
**Essence:** Eating until you are only eighty percent full.
**Meaning:** A gentle Okinawan habit of restraint — stopping a little before fullness, on purpose.
**How to:** Eat slowly enough to notice how you feel | Stop when satisfied, not stuffed | Leave a little room and let it settle.
**When:** At every meal.
**Feeling:** Light and clear rather than heavy.
**Cultural note:** Linked to Okinawan longevity. Frame as gentle and intuitive, never as restriction.
**Caution:** Avoid presenting as a diet rule; keep the language about comfort, not control.

### Borrel
```yaml
id: borrel
name: Borrel
language: Dutch
region: Netherlands
pronunciation: BOH-rel
cluster: savour
type: social_ritual
promptable: true
solo_or_social: social
time_of_day: evening
season: any
duration_minutes: 4
lomas_path: "Feelings > Positive > Revelry"
```
**Essence:** A casual drinks-and-snacks gathering with friends or colleagues.
**Meaning:** An informal social drink, often after work, built around easy company.
**How to:** Gather a few people, somewhere relaxed | Put out drinks and simple snacks | Keep it loose and unscheduled.
**When:** Late afternoon or early evening, social.
**Feeling:** Light, warm conviviality.
**Cultural note:** Lomas lists *borrel* among words for socialising around food and drink.

---

## Cluster: Gather — people, warmth and belonging

### Gezelligheid
```yaml
id: gezelligheid
name: Gezelligheid
language: Dutch
region: Netherlands
pronunciation: heh-ZELL-ick-hyte
cluster: gather
type: social_ritual
promptable: true
solo_or_social: social
time_of_day: evening
season: any
duration_minutes: 4
lomas_path: "Feelings > Positive > Cosiness"
```
**Essence:** Cosy togetherness — the warmth of good company.
**Meaning:** A shared, convivial warmth that comes from being among people you like; considered the heart of Dutch social life.
**How to:** Bring a few people into a warm, easy space | Keep it informal — drinks, snacks, no agenda | Let conversation and staying-late do the rest.
**When:** Meals, evenings, café terraces. Almost always with others.
**Feeling:** Belonging, ease, the glow of good company.
**Cultural note:** From *gezel*, "companion". A social cousin of the cosiness words.

### Parea
```yaml
id: parea
name: Parea
language: Greek
region: Greece
pronunciation: pah-REH-ah
cluster: gather
type: social_ritual
promptable: true
solo_or_social: social
time_of_day: evening
season: any
duration_minutes: 4
lomas_path: "Feelings > Positive > Revelry"
```
**Essence:** Your close companionship group, and the joy of simply being together.
**Meaning:** A circle of friends gathered to share food, drink, talk and time, with no purpose beyond the company itself.
**How to:** Gather your regular few | Share a long table, food and drink | Let the evening run with no end-time.
**When:** Evenings and long meals, social.
**Feeling:** Deep belonging and unhurried friendship.
**Cultural note:** Named by Lomas among words for socialising around food and drink.

### Craic
```yaml
id: craic
name: Craic
language: Irish
region: Ireland
pronunciation: crack
cluster: gather
type: social_ritual
promptable: true
solo_or_social: social
time_of_day: evening
season: any
duration_minutes: 4
lomas_path: ""
```
**Essence:** Lively talk, laughter and good times together.
**Meaning:** The whole warm bundle of fun, banter and camaraderie that makes a gathering worth being at.
**How to:** Get a few people together, ideally somewhere lively | Trade stories and laugh | Stay for the conversation, not the schedule.
**When:** Pubs, kitchens, anywhere people gather.
**Feeling:** Lifted, connected, sides aching from laughing.
**Cultural note:** "What's the craic?" is everyday Irish usage.

### Passeggiata
```yaml
id: passeggiata
name: Passeggiata
language: Italian
region: Italy
pronunciation: pah-seh-JAH-tah
cluster: gather
type: social_ritual
promptable: true
solo_or_social: social
time_of_day: evening
season: any
duration_minutes: 4
lomas_path: "Feelings > Positive > Savouring"
```
**Essence:** A leisurely evening stroll to see and greet your neighbours.
**Meaning:** The slow communal walk through town in the evening — to move a little and to be among everyone else doing the same.
**How to:** In the early evening, go out for a slow walk | Take the main streets or the square, no destination | Nod, stop and chat; the point is the people.
**When:** Evenings, especially weekends.
**Feeling:** Part of something — a town breathing together.
**Cultural note:** Akin to the Greek *volta* and French *flâner*, both noted by Lomas for strolling without a destination.

### Volta
```yaml
id: volta
name: Volta
language: Greek
region: Greece
pronunciation: VOL-tah
cluster: gather
type: social_ritual
promptable: true
solo_or_social: either
time_of_day: evening
season: any
duration_minutes: 4
lomas_path: "Feelings > Positive > Savouring"
```
**Essence:** A relaxed evening stroll, taking in the sights and the people.
**Meaning:** A leisurely walk with no destination, valued for the sense of freedom and the chance to greet passers-by.
**How to:** Head out in the cool of the evening | Wander the front, the square or the streets | Let yourself be unhurried and sociable.
**When:** Evenings, social or solo.
**Feeling:** Freedom, ease and gentle connection.
**Cultural note:** Lomas names *volta* and *flâner* together as strolling words carrying a sense of possibility.

### Rènao
```yaml
id: renao
name: Rènao
language: Chinese
region: China
pronunciation: ruh-NOW
cluster: gather
type: social_ritual
promptable: true
solo_or_social: social
time_of_day: evening
season: any
duration_minutes: 4
lomas_path: ""
```
**Essence:** The warm, buzzing liveliness of a happy crowd.
**Meaning:** "Hot and noisy", and entirely a good thing — the vital hum of people, food and festivity together.
**How to:** Head toward where people gather — a market, a feast, a festival | Let yourself be carried by the noise and bustle | Eat, talk, share the crowd's energy.
**When:** Meals, festivals, especially Lunar New Year.
**Feeling:** Alive, included, lifted by the crowd.
**Cultural note:** A positively valued quality of social atmosphere in China.

### Hoʻoponopono
```yaml
id: hooponopono
name: Hoʻoponopono
language: Hawaiian
region: Hawaiʻi
pronunciation: HO-oh-pono-pono
cluster: gather
type: relational_practice
promptable: true
solo_or_social: either
time_of_day: any
season: any
duration_minutes: 4
lomas_path: ""
```
**Essence:** A gentle ritual of forgiveness — "to make right".
**Meaning:** A practice of releasing resentment and repairing a bond, which can be done quietly, even with yourself.
**How to:** Bring to mind the person or hurt you are holding | Slowly repeat: I'm sorry. Please forgive me. Thank you. I love you. | Let the words loosen what you have been carrying.
**When:** Whenever resentment has settled and needs releasing.
**Feeling:** Lighter, softer, more at peace.
**Cultural note:** A sacred Hawaiian reconciliation practice. Present with respect and acknowledgement of its origins.
**Caution:** Sacred living tradition — frame respectfully, not as a generic self-help hack.

### Cwtch
```yaml
id: cwtch
name: Cwtch
language: Welsh
region: Wales
pronunciation: kutch
cluster: gather
type: relational_practice
promptable: true
solo_or_social: social
time_of_day: any
season: any
duration_minutes: 0
lomas_path: "Feelings > Positive > Cosiness"
```
**Essence:** A hug that wraps you in safety — also a safe little space.
**Meaning:** More than an embrace: a hold that says you are safe here. The word doubles as a cosy nook.
**How to:** Find someone you love | Hold them like you mean it, without rushing | Or make a cwtch of a space — a snug corner that feels like shelter.
**When:** Any time warmth or comfort is needed.
**Feeling:** Held, safe, quietly reassured.
**Cultural note:** Cited by Lomas under cosiness and safety; means both "to hug" and "a safe, welcoming place".

### Retrouvailles
```yaml
id: retrouvailles
name: Retrouvailles
language: French
region: France
pronunciation: ruh-troo-VYE
cluster: gather
type: relational_practice
promptable: true
solo_or_social: social
time_of_day: any
season: any
duration_minutes: 0
lomas_path: "Relationships > Intimacy > Desire"
```
**Essence:** The joy of reuniting with someone after a long time apart.
**Meaning:** Literally "rediscoveries" — the happiness of being together again after separation.
**How to:** Reach out to someone you have not seen in too long | Make the plan to actually meet | Let the reunion be the whole point.
**When:** Any reunion worth marking.
**Feeling:** Warm, full-hearted reconnection.
**Cultural note:** Listed by Lomas among words for affection and desire.

### Talkoot
```yaml
id: talkoot
name: Talkoot
language: Finnish
region: Finland
pronunciation: TAL-koht
cluster: gather
type: social_ritual
promptable: true
solo_or_social: social
time_of_day: any
season: any
duration_minutes: 0
lomas_path: "Relationships > Pro-sociality > Communality"
```
**Essence:** Coming together to do a shared task for the common good.
**Meaning:** Voluntary collective work — neighbours or a community pitching in together on something that benefits everyone.
**How to:** Find a task that helps the group — a tidy-up, a build, a harvest | Invite people to do it together | Share the work and the company.
**When:** Whenever a shared job needs doing.
**Feeling:** Belonging and the satisfaction of shared effort.
**Cultural note:** Lomas groups it with the Norwegian *dugnad* and Swedish *talko* as words for collective tasks.

### Nunchi
```yaml
id: nunchi
name: Nunchi
language: Korean
region: Korea
pronunciation: NOON-chee
cluster: gather
type: relational_practice
promptable: false
solo_or_social: social
time_of_day: any
season: any
duration_minutes: 0
lomas_path: "Relationships > Pro-sociality > Communication"
```
**Essence:** The art of reading a room and responding with care.
**Meaning:** Literally "eye-measure" — sensing the mood and unspoken cues of others to keep social harmony.
**How to:** Before speaking, take in the room's mood | Notice what is unsaid as much as what is said | Respond in a way that keeps everyone at ease.
**When:** Any social situation.
**Feeling:** Smoother relationships and social ease.
**Cultural note:** Named by Lomas as a Korean non-verbal communication skill. Better as a learnable skill than a timed prompt.

---

## Cluster: Reflect — meaning, character and quiet

### Ikigai
```yaml
id: ikigai
name: Ikigai
language: Japanese
region: Japan
pronunciation: EE-kee-guy
cluster: reflect
type: state_of_mind
promptable: false
solo_or_social: solo
time_of_day: any
season: any
duration_minutes: 0
lomas_path: "Character > Resources > Flourishing"
```
**Essence:** A reason to get up in the morning, found in small daily joys.
**Meaning:** In its true Japanese sense, the feeling that life is good and worthwhile — drawn from ordinary things, not a grand single purpose.
**How to:** Ask what, however small, you look forward to | Notice what absorbs you and leaves you content | Make a little more room for it tomorrow.
**When:** A quiet reflection, returned to often.
**Feeling:** Quiet purpose drawn from ordinary days.
**Cultural note:** Lomas defines it as a "reason for being". The popular four-circle Venn diagram is a Western invention (2014), not traditional Japanese usage.
**Caution:** Do not reproduce the Western Venn-diagram version as if authentic.

### Lagom
```yaml
id: lagom
name: Lagom
language: Swedish
region: Sweden
pronunciation: LAH-gom
cluster: reflect
type: state_of_mind
promptable: false
solo_or_social: either
time_of_day: any
season: any
duration_minutes: 0
lomas_path: "Character > Resources > Decency"
```
**Essence:** Not too much, not too little — just right.
**Meaning:** A philosophy of balance and moderation: doing anything to just the right degree.
**How to:** Look at one part of life that feels like too much, or too little | Ask what "just enough" would be | Adjust gently toward it and stop there.
**When:** Whenever life tips toward excess or scarcity.
**Feeling:** Steady, sustainable contentment.
**Cultural note:** Lomas lists it among character words, as a valued sense of moderation.

### Wabi-sabi
```yaml
id: wabi-sabi
name: Wabi-sabi
language: Japanese
region: Japan
pronunciation: WAH-bee SAH-bee
cluster: reflect
type: perceptual_noticing
promptable: false
solo_or_social: either
time_of_day: any
season: any
duration_minutes: 0
lomas_path: "Feelings > Complex > Aesthetics"
```
**Essence:** Finding beauty in imperfection and impermanence.
**Meaning:** *Wabi* (imperfect beauty) and *sabi* (aged beauty) together — a "dark, desolate sublimity" that values the worn and the irregular.
**How to:** Pick up something old or imperfect you own | Look at the wear, cracks and irregularities | Let them be the beauty, not the flaw.
**When:** Any moment you catch yourself wanting things flawless.
**Feeling:** Acceptance and a softer eye for the world.
**Cultural note:** Drawn directly from Lomas's discussion of Japanese aesthetics.

### Mono no aware
```yaml
id: mono-no-aware
name: Mono no aware
language: Japanese
region: Japan
pronunciation: MOH-no no ah-WAH-reh
cluster: reflect
type: perceptual_noticing
promptable: false
solo_or_social: either
time_of_day: any
season: spring
duration_minutes: 0
lomas_path: "Feelings > Complex > Aesthetics"
```
**Essence:** The gentle sadness of knowing beautiful things pass.
**Meaning:** The pathos of understanding that the world and its beauty are transient — a bittersweet awareness that deepens appreciation.
**How to:** Notice something lovely and temporary — blossom, light, a mood | Let yourself feel that it won't last | Let the brevity enrich the beauty rather than spoil it.
**When:** Cherry blossom, sunsets, last days.
**Feeling:** Tender presence and a richer sense of now.
**Cultural note:** Lomas describes the related *aware* as the bittersweetness of a brief, fading moment of beauty.

### Sisu
```yaml
id: sisu
name: Sisu
language: Finnish
region: Finland
pronunciation: SEE-soo
cluster: reflect
type: state_of_mind
promptable: false
solo_or_social: solo
time_of_day: any
season: any
duration_minutes: 0
lomas_path: "Character > Resources > Grit"
```
**Essence:** Quiet, stubborn courage in the face of hardship.
**Meaning:** Extraordinary determination and resolve that shows up after your strength was supposed to run out.
**How to:** Name the hard thing plainly | Take the next small step, not the whole mountain | Keep going past the point you would normally stop.
**When:** When something is hard and quitting is tempting.
**Feeling:** Grounded resolve and quiet pride.
**Cultural note:** Lomas characterises sisu as extraordinary determination in the face of adversity; the talk that inspired his paper was about sisu.

### Ubuntu
```yaml
id: ubuntu
name: Ubuntu
language: Nguni Bantu
region: Southern Africa
pronunciation: uu-BUUN-tuu
cluster: reflect
type: relational_practice
promptable: false
solo_or_social: social
time_of_day: any
season: any
duration_minutes: 0
lomas_path: "Relationships > Pro-sociality > Kindness"
```
**Essence:** "I am because we are" — humanity through one another.
**Meaning:** Being kind to others on account of a shared humanity; my wellbeing is bound up in yours.
**How to:** Think of someone whose day you could ease | Do one small, generous thing, expecting nothing | Notice how your wellbeing is tangled with theirs.
**When:** A daily orientation toward others.
**Feeling:** Connected, useful, part of something larger.
**Cultural note:** Lomas quotes Desmond Tutu: my humanity is caught up in yours. A serious ethical concept; treat with depth.

### Saudade
```yaml
id: saudade
name: Saudade
language: Portuguese
region: Portugal and Brazil
pronunciation: sow-DAHD
cluster: reflect
type: state_of_mind
promptable: false
solo_or_social: solo
time_of_day: any
season: any
duration_minutes: 0
lomas_path: "Feelings > Complex > Longing"
```
**Essence:** A bittersweet longing for someone or something absent.
**Meaning:** A melancholic, dreaming nostalgia for a person, place or time far away in space or time — even for things that may not exist.
**How to:** Let the missing-feeling come instead of pushing it away | Hold the memory gently; let it be sweet as well as sad | Maybe write it down, or play the song that holds it.
**When:** When something loved feels far away.
**Feeling:** A soft, full-hearted ache that honours what mattered.
**Cultural note:** Lomas treats it as a key Portuguese emotion; central to fado music. An ambivalent feeling, not a pick-me-up.
**Caution:** Melancholic by nature — offer as gentle reflection, never as a mood-fix prompt.

### Natsukashii
```yaml
id: natsukashii
name: Natsukashii
language: Japanese
region: Japan
pronunciation: nat-soo-KAH-shee
cluster: reflect
type: state_of_mind
promptable: false
solo_or_social: either
time_of_day: any
season: any
duration_minutes: 0
lomas_path: "Feelings > Complex > Longing"
```
**Essence:** Fond nostalgia for the past — happy for the memory, sad it is gone.
**Meaning:** A warm, longing pull toward a fond memory, tinged with the sadness that it is no longer.
**How to:** Let an old memory surface — a song, a smell, a photo | Sit with the warmth of it | Let the sweetness and the ache coexist.
**When:** When something stirs a fond memory.
**Feeling:** Warm, wistful tenderness.
**Cultural note:** Listed by Lomas among words for longing and nostalgia.

### Sukha
```yaml
id: sukha
name: Sukha
language: Sanskrit
region: India
pronunciation: SOO-kah
cluster: reflect
type: state_of_mind
promptable: false
solo_or_social: solo
time_of_day: any
season: any
duration_minutes: 0
lomas_path: "Feelings > Positive > Joy/bliss"
```
**Essence:** Genuine, lasting happiness rooted in inner maturity.
**Meaning:** In Buddhism, a stable flourishing that does not depend on circumstance, in contrast to fleeting hedonic pleasure.
**How to:** Notice the difference between a passing high and a steady contentment | Tend the steady kind — through calm, ethics, attention | Let it be unhurried; it is cultivated, not chased.
**When:** A long-term orientation rather than a single act.
**Feeling:** Deep, durable wellbeing.
**Cultural note:** Lomas contrasts sukha with the more fleeting *ananda* and *khushii*. A spiritual concept; use as a reflective theme.

### Eudaimonia
```yaml
id: eudaimonia
name: Eudaimonia
language: Greek
region: Greece
pronunciation: yoo-day-MOH-nee-ah
cluster: reflect
type: state_of_mind
promptable: false
solo_or_social: solo
time_of_day: any
season: any
duration_minutes: 0
lomas_path: "Feelings > Positive > Joy/bliss"
```
**Essence:** Flourishing through living well and fully.
**Meaning:** A sense of fulfilment and flourishing; in its original sense, being infused with grace, and in modern psychology, a life of meaning and growth.
**How to:** Ask what living well means to you, beyond feeling good | Choose one action that serves it | Let meaning, not just pleasure, guide the choice.
**When:** A guiding orientation.
**Feeling:** Deep fulfilment.
**Cultural note:** A foundational concept in positive psychology, noted by Lomas.

### Joie de vivre
```yaml
id: joie-de-vivre
name: Joie de vivre
language: French
region: France
pronunciation: zhwah duh VEE-vruh
cluster: reflect
type: state_of_mind
promptable: false
solo_or_social: either
time_of_day: any
season: any
duration_minutes: 0
lomas_path: "Character > Resources > Flourishing"
```
**Essence:** An exuberant zest for life.
**Meaning:** The knack of knowing how to live — a sustained, boundless enjoyment of the here and now.
**How to:** Find the small pleasure available right now | Lean into it fully rather than half-noticing | Let enjoyment be a habit, not an occasion.
**When:** A way of meeting daily life.
**Feeling:** Lightness and generalised joy.
**Cultural note:** Lomas describes it as joy generalised, a philosophy of life.

### Kaizen
```yaml
id: kaizen
name: Kaizen
language: Japanese
region: Japan
pronunciation: KY-zen
cluster: reflect
type: doable_activity
promptable: true
solo_or_social: solo
time_of_day: any
season: any
duration_minutes: 0
lomas_path: ""
```
**Essence:** Getting better by the smallest possible step.
**Meaning:** Continuous, tiny improvement — change so small it is almost easy, repeated until it adds up.
**How to:** Choose one thing you would like to improve | Make the next step almost laughably small | Repeat it tomorrow and let it compound.
**When:** Any goal that feels too big to start.
**Feeling:** Progress without pressure.
**Cultural note:** Maps cleanly onto habit-building; one of the few reflective-cluster terms that is directly promptable.

### Dadirri
```yaml
id: dadirri
name: Dadirri
language: Ngangikurungkurr
region: Aboriginal Australia
pronunciation: dah-DEER-ree
cluster: reflect
type: spiritual_practice
promptable: false
solo_or_social: solo
time_of_day: any
season: any
duration_minutes: 0
lomas_path: "Relationships > Pro-sociality > Communication"
```
**Essence:** Deep, still, reflective and respectful listening.
**Meaning:** A contemplative inner stillness and quiet awareness — a deep listening to country, to others and to oneself.
**How to:** Find quiet and stillness | Listen, without needing to respond or fix | Let the silence and attention be enough.
**When:** A contemplative practice rather than a quick activity.
**Feeling:** Stillness, connection and renewal.
**Cultural note:** A sacred Aboriginal Australian practice associated with Miriam-Rose Ungunmerr. Treat with deep respect and acknowledge its source.
**Caution:** Sacred Indigenous practice — represent carefully and never trivialise.

---

## Reference appendix — Lomas's taxonomy

Lomas (2016) organised 216 words into three categories using grounded theory. The structure below is useful for app navigation, weekly themes, or a "concept map" feature. It is reproduced as structure only.

- **Feelings**
  - Positive: Revelry, Cosiness, Savouring, Joy/bliss, "Nirvana"
  - Complex: Hope, Longing, Freedom, Aesthetics
- **Relationships**
  - Intimacy: Friendship, Affection, Desire, Love
  - Pro-sociality: Kindness, Compassion, Morality, Hospitality, Communication, Communality
- **Character**
  - Resources: Grit, Spirit, Decency, Flourishing, Skill
  - Spirituality: Soul, Path, Understanding, Transformation

### Suggested app usage

- **Reminders and prompts:** pull entries where `promptable: true` (38 of 60). Weight by `time_of_day` and `season` against the user's local time so dawn surfaces gökotta, winter evenings surface hygge, and the first warm afternoon surfaces utepils.
- **Weekly themes and reflections:** use `promptable: false` entries (ikigai, lagom, sisu, ubuntu, saudade and the spiritual terms) as a "concept of the week" or journaling cue rather than a do-this-now nudge.
- **Cosiness consolidation:** hygge, koselig, mysa, gezelligheid and Gemütlichkeit share a meaning. Consider presenting them as one theme with regional variants to avoid redundancy.
- **Respectful handling:** entries with a `caution` field touch on sacred living traditions (hoʻoponopono, dadirri), commercialisation (hygge, ikigai), or ambivalent or sensitive meaning (saudade, hara hachi bu). Surface their `cultural_note` prominently and avoid trivialising.

### Source

Lomas, T. (2016). Towards a positive cross-cultural lexicography: Enriching our emotional landscape through 216 'untranslatable' words pertaining to wellbeing. *Journal of Positive Psychology*. Definitions here are condensed and rephrased for app use; cultural meanings run deeper than any single line can hold.
