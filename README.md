# joeltomy34.github.io

Personal portfolio of Joel Tomy: AI / ML engineer and McGill MMA candidate in Montreal.
Live at https://joeltomy34.github.io

- The files at the top of this repository are the built site that GitHub Pages serves.
- `source/` is the React project they are built from.

## Making changes

```bash
cd source
npm install
npm run dev            # preview at http://localhost:5173
npm run publish:site   # rebuild and copy the site to the top of the repo
```

Then commit and push. All the content (jobs, projects, skills) is in `source/src/data/portfolio.ts`.

Design based on Sushmita Dasari's Portfolio Series. Build animation from swarm-page-builder.
