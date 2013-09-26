# Talks

1. Make a copy of `template` dir
2. Go to new dir
3. Make a copy of reveal.js index.html
4. Start the compass watcher with `compass watch`

```
project=talk
cp -r template $project
cd $project
cp ../lib/reveal.js/index.html .
perl -p -i -e "s#([\"'])(css|js|lib|plugin)/#\1../lib/reveal.js/\2/#g" index.html
compass watch
```