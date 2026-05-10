// source: https://docs.astro.build/en/guides/content-collections/
import {defineCollection} from 'astro:content';
import { file } from 'astro/loaders';

const talent_skills = defineCollection({
  loader: file("src/data/talent-skills.json"),
});

export const collections = { talent_skills };
