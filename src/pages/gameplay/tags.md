---
layout: ../../layouts/Layout.astro
---

# Object, Creature, and Terrain Tags

Tags are modifiers on things, creatures, and spaces that describe their specific, changing properties. They are divided into three types, corresponding to each of their targets: Summon Tags, for inanimate objects, Form Tags, for creatures, and Terrain Tags, for parts of the terrain or tiles.

Every Tag has a name, an effect, an end condition, and optionally, parameters, such as a level or damage type.

## Tag Parameters

Tags often have parameters; consider the following tag:

(todo: make this the actual Tag widget)
\<Plagued X/Y (Type)\>

The Tags List states that the parameters are X (level-- number), Y (modifier-- number), and Type (damage type). Conventionally, the "level" of the Tag is the first parameter, if that parameter is numeric. The Tags List will specify which parameter is called the Tag's level (TODO: is this needed? what if we have a special notation for add a level of x and give tag at level x)

There is a monster that inflicts "\<Plagued 10/-5 (Burn)\> on another creature. Plagued is listed with the following parameters:

\<Plagued X/Y (Type)\>

According to the tag's description, the Plagued tag causes its bearer to lose HP at the end of each of its turns. X is the amount of HP the creature will lose at the end of its turn; Y, the decay, is added to X at the end of 

...

TODO:

explain the distinction between "add a level of x" and "give tag at level x"

specify which tag to use in edge cases: ie, constructs, large objects

