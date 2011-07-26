#/bin/bash
grep -r "@shortcut" ../src/tangram/* |\
#去tangram
sed "s/\.\.\/src\/tangram\///g" |\
#将//替换为一个
sed "s/\/\///g" |\
#将多个空格替换为一个
sed "s/  */ /g" |\
#抽取shortcut
sed "s/.*\(baidu.*\.js\):\s\*\s@shortcut\s\(.*\)$/\1,\2/g"|\
uniq \
>shortcut.txt
cat shortcut.txt
