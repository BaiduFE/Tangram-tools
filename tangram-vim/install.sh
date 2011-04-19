#! /bin/sh

########################################
## Shell script created by xiaoqiang
## @brief  本脚本自动安装TangramVIM插件
## @2011-04-19
########################################

CURRENT=$PWD
VIM_RUNTIME=$HOME"/.vimm"


# 判断用户的Home目录下是否存在.vim目录
if [ ! -d $VIM_RUNTIME ]; then
    echo -n "You don't have the VIM_RUNTIME directory, This script will auto create one? (y/n):"
    read c1
    sc1=`echo $c1 | tr A-Z a-z`
    if [ $sc1 = "y" ]; then
        mkdir $VIM_RUNTIME
        mkdir $VIM_RUNTIME"/autoload"
        mkdir $VIM_RUNTIME"/plugin"
    else
        exit
    fi
fi

if [ ! -d $VIM_RUNTIME"/autoload" ]; then
    echo -n "You don't have the autoload directory, This script will auto create one? (y/n):"
    read c2
    sc2=`echo $c2 | tr A-Z a-z`
    if [ $sc2 = "y" ]; then
        mkdir $VIM_RUNTIME"/autoload"
    else
        exit
    fi
fi

if [ ! -d $VIM_RUNTIME"/plugin" ]; then
    echo -n "You don't have the plugin directory, This script will auto create one? (y/n):"
    read c3
    sc3=`echo $c3 | tr A-Z a-z`
    if [ $sc3 = "y" ]; then
        mkdir $VIM_RUNTIME"/plugin"
    else
        exit
    fi
fi

cp $CURRENT"/tangramcomplete.vim" $VIM_RUNTIME"/autoload/"
cp $CURRENT"/tangramdictionay.vim" $VIM_RUNTIME"/plugin/"

echo "All done! Enjoy..."
