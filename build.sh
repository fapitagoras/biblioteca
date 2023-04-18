echo "qual o commit?"
read commit
cd biblioteca
npm run build
cp -R build/* ../build/.
cd ../build/
git add .
git commit -m "$commit"
git push origin master