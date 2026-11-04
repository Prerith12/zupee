import git from 'isomorphic-git';
import http from 'isomorphic-git/http/node/index.js';
import fs from 'fs';
import readline from 'readline';

const dir = 'C:/Users/1/.gemini/antigravity/scratch/zupee';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function main() {
  console.log('========================================================');
  console.log('       Zupee ➔ Push Directly to GitHub');
  console.log('========================================================\n');

  const repoUrl = await question('Enter your GitHub Repository URL (e.g., https://github.com/USERNAME/zupee.git): ');
  const token = await question('Enter your GitHub Personal Access Token (or password): ');

  if (!repoUrl.trim() || !token.trim()) {
    console.log('Error: Repo URL and token are required.');
    rl.close();
    return;
  }

  const cleanUrl = repoUrl.trim().replace(/\.git$/, '') + '.git';

  console.log('\n🚀 Pushing all files to GitHub (main branch)...');

  try {
    await git.push({
      fs,
      http,
      dir,
      remote: 'origin',
      url: cleanUrl,
      ref: 'main',
      onAuth: () => ({ username: token.trim() }),
    });

    console.log('\n✅ SUCCESS: Pushed successfully to GitHub!');
    console.log(`🌐 Repository is live at: ${cleanUrl.replace(/\.git$/, '')}`);
  } catch (err) {
    console.error('\n❌ Push Error:', err.message);
    console.log('\nTip: You can generate a GitHub token with "repo" access at https://github.com/settings/tokens');
  } finally {
    rl.close();
  }
}

main();

