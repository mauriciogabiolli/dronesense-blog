import fs from 'fs';
import path from 'path';

const title = process.argv.slice(2).join(' ');
if (!title) {
  console.error('Usage: node scripts/new-post.mjs "Título do Post"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-');

const today = new Date().toISOString().split('T')[0];
const filePath = path.join('src', 'content', 'blog', `${slug}.mdx`);

const content = `---
title: "${title}"
description: ""
pubDate: ${today}
author: "Equipe DroneSense"
category: "Drones Agrícolas"
tags: []
featured: false
---

Escreva seu conteúdo aqui...
`;

if (fs.existsSync(filePath)) {
  console.error(`Arquivo já existe: ${filePath}`);
  process.exit(1);
}

fs.mkdirSync(path.dirname(filePath), { recursive: true });
fs.writeFileSync(filePath, content, 'utf-8');
console.log(`Post criado: ${filePath}`);
console.log(`URL final: /blog/${slug}`);
