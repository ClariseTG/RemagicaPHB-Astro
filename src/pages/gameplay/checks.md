---
layout: ../../layouts/Layout.astro
---
# Checks and Dice

When a character takes an action with an uncertain outcome, the uncertainty can be resolved with a Check. A Check involves rolling dice, adding modifiers, and comparing the outcome to a Difficulty.

## Dice Notation

Dice are notated as such:

XdY

When a roll is written this way, it means to roll X dice with a maximum value Y. For example, "roll 2d6" means to roll 2 dice that each have 6 sides.

## Skill Checks

Skill checks in Remagica are performed by rolling 1d20, adding "modifiers," and comparing the result to a [[Target]]. [[TODO]] As of 4.5e, there are a few kinds of modifiers:

- Stats, notated with the first 3 letters of the stat name (+Str). In this case, you add the stat bonus, and not the stat itself; for example, if a character has 14 Strength, they would have a +2 bonus, so +Str means to add that +2 bonus.

- Proficiencies, notated with the full proficiency name (+ Athletics). You add all of the points in that proficiency to the check.

- [[TODO Talent pools?]]

So, if Borro wanted to make an Athletics check when they have a 14 in Strength and 5 points in Athletics, they would roll 1d20 and take the result:

1d20 -> (result of roll) 4

Then, they would add all of the modifiers:

4 + Str + Athletics
4 + 2 + 5
= 11


