#/bin/bash
###############配置#####################
basepath=/home/g/public_html/docbeta/source/
basepath=/home/xyz/code/codesearch/src/
githubDataBasePath=$basepath"github/"
sentToFeMachine=1 #是否将代码发送到fe机器上
###############配置结束###################

##############封装函数#################

#判断是在本地运行此脚本还是在FE机器上运行此脚本

isLocal ()
{
    hostname="`hostname --fqdn`"
    if [ ${hostname}x = 'tc-tstest02.tc.baidu.com'x ]; then
        bIsLocal=0
    else
        bIsLocal=1
    fi
}

#判断目录是不是包含git版本控制的目录

isGit ()
{
    if [ -n $1 ];then
        if [ -d $1".git" ];then
            bIsGit=1
        else
            bIsGit=0
        fi
    else
        bIsGit=0
    fi
}

#将生成的代码发送到fe机器上

copyDataToRemote ()
{
cd $basepath
tar -cvf  tangramgit.tar ./*
smbclient  //fe/g  -U g -N -c "cd dev\;cd source\;put tangramgit.tar tangramgit.tar;"
}

##############
#update stable/master
##############
updateMaster ()
{   
    cd $basepath
    if [ ! -d "$githubDataBasePath" ] ;then
        mkdir "$githubDataBasePath"
    fi
    stablepath=${githubDataBasePath}"stable/"
    
    if [ ! -d "$stablepath" ] ;then
        mkdir "$stablepath"
    fi

    cd $stablepath

    #update stable base
    stableBasePath=${stablepath}"Tangram-base"
    isGit "${stableBasePath}/"
    #如果目标目录的代码不含有git信息，则从github上拉源代码，否则直接更新
    if [ $bIsGit -eq 0 ] ;then
        echo "${stableBasePath}/.git not exists  dir.Now clone a new source."
        if [ -d "$stableBasePath" ] ;then
            mv ${stableBasePath} ${stableBasePath}"-bak"
        fi
        git clone https://github.com/BaiduFE/Tangram-base.git 
        cd Tangram-base
    else
        cd ${stableBasePath}
        git checkout -f
        git pull
    fi
    
    #将源代码拷到codesearch目录
    if [ ! -d "${basepath}stable" ] ;then
        mkdir  ${basepath}stable
    fi
    if [ -d "${basepath}stable/tangram" ] ;then
        rm -rf ${basepath}stable/tangram
    fi

    cp -rf src ${basepath}stable/tangram
    echo "#############base master 处理完毕###############"

    cd $stablepath

    #update stable component
    stableComponentPath=${stablepath}"Tangram-component"
    isGit "${stableComponentPath}/"
    #如果目标目录的代码不含有git信息，则从github上拉源代码，否则直接更新
    if [ $bIsGit -eq 0 ] ;then
        echo "${stableComponentPath}/.git not exists  dir.Now clone a new source."
        if [ -d "$stableComponentPath" ] ;then
            mv ${stableComponentPath} ${stableComponentPath}"-bak"
        fi
        git clone https://github.com/BaiduFE/Tangram-component.git 
        cd Tangram-component
    else
        cd ${stableComponentPath}
        git checkout -f
        git pull
    fi
    
    #将源代码拷到codesearch目录
    if [ ! -d "${basepath}stable" ] ;then
        mkdir  ${basepath}stable
    fi

    if [ -d "${basepath}stable/tangram-component" ] ;then
        rm -rf ${basepath}stable/tangram-component
    fi

    cp -rf src ${basepath}stable/tangram-component
    echo "#############component master 处理完毕###############"
}

###############
#update nightly
###############
updateDev ()
{
    cd $basepath
    if [ ! -d "$githubDataBasePath" ] ;then
        mkdir "$githubDataBasePath"
    fi

    nightlypath=${githubDataBasePath}"nightly/"
    
    if [ ! -d "$nightlypath" ] ;then
        mkdir "$nightlypath"
    fi

    cd $nightlypath

    #update nightly base
    nightlyBasePath=${nightlypath}"Tangram-base"
    #isGit "${nightlyBasePath}/"
    #如果目标目录的代码不含有git信息，则从github上拉源代码，否则直接更新
    if [ $bIsGit -eq 0 ] ;then
        echo "${nightlyBasePath}/.git not exists  dir.Now clone a new source."
        if [ -d "$nightlyBasePath" ] ;then
            mv ${nightlyBasePath} ${nightlyBasePath}"-bak"
        fi
        git clone -b dev https://github.com/BaiduFE/Tangram-base.git 
    else
        cd ${nightlyBasePath}
        git checkout -f
        git pull https://github.com/BaiduFE/Tangram-base.git dev
    fi
    

    #将源代码拷到codesearch目录
    if [ ! -d "${basepath}nightly" ] ;then
        mkdir  ${basepath}nightly
    fi

    if [ -d "${basepath}nightly/tangram" ] ;then
        rm -rf ${basepath}nightly/tangram
    fi
    cp -rf src ${basepath}nightly/tangram
    echo "#############base dev 处理完毕###############"

    cd $nightlypath

    #update nightly component
    nightlyComponentPath=${nightlypath}"Tangram-component"
    isGit "${nightlyComponentPath}/"
    #如果目标目录的代码不含有git信息，则从github上拉源代码，否则直接更新
    if [ $bIsGit -eq 0 ] ;then
        echo "${nightlyComponentPath}/.git not exists  dir.Now clone a new source."
        if [ -d "$nightlyComponentPath" ] ;then
            mv ${nightlyComponentPath} ${nightlyComponentPath}"-bak"
        fi
        git clone https://github.com/BaiduFE/Tangram-component.git 
        cd Tangram-component
    else
        cd ${nightlyComponentPath}
        git checkout -f
        git pull https://github.com/BaiduFE/Tangram-component.git dev
    fi
    

    #将源代码拷到codesearch目录
    if [ ! -d "${basepath}nightly" ] ;then
        mkdir  ${basepath}nightly
    fi

    if [ -d "${basepath}nightly/tangram-component" ] ;then
        rm -rf ${basepath}nightly/tangram-component
    fi

    cp -rf src ${basepath}nightly/tangram-component
    echo "#############component dev 处理完毕###############"
}
##############主程序###################
rawpath=`pwd`
#如果传入第一个参数，则将第一个参数设置为更新源代码的根目录
if [ -n "$1" ] ;then
    basepath=$1
fi

#如果根目录不存在，就创建根目录
if [ ! -d "$basepath" ] ;then
    mkdir "$basepath"
fi
cd $basepath

updateMaster
updateDev

if [ $sentToFeMachine -eq 1 ] ;then
    copyDataToRemote
fi

cd $rawpath



echo "done."

