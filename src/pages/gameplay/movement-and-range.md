---
layout: ../../layouts/Layout.astro
---

# Movement and Range

## Spaces, Tiles, and distance

Movement and the range of distanced interactions can be infinitely complex, and in the real world, often deal with arbitrary and hard-to-work-with numbers. Remagica, like many TTRPG systems, abstracts 3d space into Spaces and Tiles, cubic and square groupings of locations that can be used for determining how movement and range play out.

A Space is a cubic unit of space, and a Tile is any one of its 6 faces that could represent a physical surface. Typically, the dimensions of a Space are 5ft x 5ft x 5ft, but a roughly similar distance in any measuring system could be used instead, as long as everything is consistent.

Creatures often fill one Space, but if they are larger than the bounds of the space, they may take up multiple, often in a cube shape. Creatures can also co-inhabit a space if they are either fairly small relative to the size of the Space or not hostile towards each other.

Two Spaces are considered adjacent if they share an edge. That is, if two Spaces are right next to each other (sharing a face,) they are adjacent; if two Spaces are diagonal (forward and to the left, up and back, or any combination of just two directions,) they are also adjacent. Two Spaces that only share a vertex, and require a shift in all three directions, are not adjacent.

The distance between two Spaces is determined by how many adjacent tiles you would have to move through to get from one to the other. For example, 2 Spaces, where one is 5ft forward, up, and left, would be 2 Spaces or 10ft apart from each other, since it takes two movements to an adjacent tile to get from one to the other.

## Moving

When a creature takes the Move action, they choose a form of movement, be it walk, swim, or something else. They then get an amount of movement equivalent to the Speed they have in that type of movement, which they can spend on moving between adjacent, unblocked Spaces. If they do not have enough movement left to move to any adjacent Spaces, they cannot leave their current Space.

An "unblocked Space" is a space that can be passed through (usually, this means it is not filled with some solid material,) and does not contain a hostile creature. Certain Terrain Tags can cause a space to become blocked.

Each creature has a default amount of each kind of movement, which is listed below. These are modified by racial features or skills.

## Walk
Default: 20ft
The speed at which the creature moves between Spaces on a mostly horizontal surface.

## Swim
Default: 10ft
The speed at which the creature moves between Spaces in water in all directions.

## Climb
Default: 0ft
The speed at which the creature moves between Spaces along a vertical surface of some kind made of tiles that are possible to climb. This is different from the Climbable Terrain Tag, which gives a Climb speed to all creatures that are using the affected Tile to Climb.

Creatures without a Climb speed of 0 can Climb up a surface with a speed of 5ft if they succeed some sort of Acrobatics or Athletics check.

## Crawl
Default: 5ft
The speed at which the creature moves through Spaces that are too narrow to be easily traversed. 

## Dig
Default: 0ft
The speed at which the creature can burrow through solid material that they can break through, leaving behind a narrow passage that must be Crawled through.
