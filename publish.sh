rm -rf ~/mefcorvi.github.io/mexexam
npm run build
cp -r dist ~/mefcorvi.github.io/mexexam
cd ~/mefcorvi.github.io
git add -A .
git commit -m "chore: Update mexexam assets and dependencies"
git push
cd ~/mexexam
