const ghpages = require('gh-pages');
const fs = require('fs');
const path = require('path');

// Ensure the out directory exists
const outDir = path.join(process.cwd(), 'out');
if (!fs.existsSync(outDir)) {
  console.error('Build directory "out" does not exist. Run "npm run build" first.');
  process.exit(1);
}

// Create .nojekyll file to prevent GitHub Pages from ignoring files that begin with an underscore
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');

console.log('Deploying to GitHub Pages...');

// Deploy to GitHub Pages
ghpages.publish(
  'out',
  {
    dotfiles: true, // Include dotfiles like .nojekyll
    branch: 'gh-pages',
    repo: 'https://github.com/hutamy/hutamy.github.io.git',
    message: 'Auto-generated deployment to GitHub Pages',
  },
  (err) => {
    if (err) {
      console.error('Deployment error:', err);
      process.exit(1);
    } else {
      console.log('Successfully deployed to GitHub Pages!');
    }
  }
);