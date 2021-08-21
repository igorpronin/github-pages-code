cp -r ./build/* ../igorpronin.github.io
cd ../igorpronin.github.io || exit
git checkout master
git add .
git commit -m "deploy"
git push
