""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Copyright (C) 2010 zhengqianglong@baidu.com
"
" Name: tangramcomplete.vim
" Description: A plugin for tangram library autocompletion
" Author: zhengqianglong
" Mail: zhengqianglong@baidu.com
" Last Modified: Apr 19, 2011
" Version: 2.0
" ChangeLog: 
" 
" 1. 创建此脚本，支持tangram1.1.0
"           created 1.0  2010/11/13
" --------------------------------------------------------------
" 1. 修改了核心关键词查询的函数，修复了1.0中存在的的一些bug，e.g.
"       a)  baidu.('xx')  无法输入g
"       b)  window.baidu.sug  会默认变成baidu.
" 2. 增加了onPopupPost函数的检查，解决了1.0中存在的两个问题
"       a)  当没有匹配时，命令行会出无匹配的红色警告
"       b)  当有匹配时，默认第一项是输入内容，需要按下键才能选择
" 3. 增加了baidu和T的两个名称空间支持
"           updated to 2.0  2011/04/05
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" version checking & avoid load twice
" vim版本检查，避免加载两次
if exists('g:tangram_acp_loaded')
    finish
elseif v:version < 702
    echoerr 'Tangram auto complete does not support this version of vim (' . v:version . ').'
    finish
endif
let g:tangram_acp_loaded = 1

" give a off switcher, user can set g:tangram_acp_disabled = 1 to turn off this plugin
" 开关，可以设置g:tangram_acp_disabled = 1来关闭此功能
if exists('g:tangram_acp_disabled') && g:tangram_acp_disabled == 1
    finish
endif
let g:tangram_acp_disabled = 0

" do something when popup is show
function tangramcomplete#onPopupPost()
    echo ''
    if pumvisible()
        return "\<C-p>\<Down>"
    endif
    return "\<C-e>"
endfunction

" main function
function! tangramcomplete#CompleteTangram(findstart, base)

    if a:findstart
        " 获取当前行的所有内容
        let s:line = getline('.')
        " 光标所在位置的前一个字符
        let s:start = col('.') - 1
        " 光标所在位置的前2个字符
        let s:compl_begin = col('.') - 2
        " \k表示一个keyword，这行的作用是一直往前索引，直到遇到一个非keyword的字符就停止
        " 用来做匹配的起始位置项
        while s:start >= 0 && s:line[s:start - 1] =~ '\%(\k\|-\|\.\)'
            let s:start -= 1
        endwhile
        let b:compl_context = s:line[0:s:compl_begin]
        return s:start
    endif

    if exists("b:compl_context")
        let s:line = b:compl_context
        unlet! b:compl_context
    else
        let s:line = a:base
    endif

    let s:result = []

    " 支持baidu和T两个名称空间
    if s:line =~# 'baidu\|T'
        " 存储名称空间
        let s:tangram_prefix = match(s:line, 'baidu')>-1? 'baidu' : 'T'

        let s:tangram_keyword = matchstr(s:line, '\s*'.s:tangram_prefix.'\(\.\|[a-zA-Z]\)*$')
        if s:tangram_keyword != ""
            " 这行用来解决非tangram代码，却包含baidu关键词会误匹配的情况，比如zhidao.baidu.com
            let s:real_keyword = substitute(s:tangram_keyword, '\s*'.s:tangram_prefix, s:tangram_prefix, '')
            for m in g:tangram_dictionay
                " 字典中已经不再标识baidu或者T名称空间
                if s:tangram_prefix.m['word'] =~? '^'.s:real_keyword
                    if m['word'] !~ '^'.s:tangram_prefix
                        " VIM的对象数据类型采用寻址引用的方式，所以通过deepcopy函数进行复制
                        let s:the_math = deepcopy(m) 
                        call extend(s:the_math, {'word' : s:tangram_prefix.m['word']})
                    endif
                    call add(s:result, s:the_math)
                endif
            endfor
            return s:result
        endif
    endif

    return []
endfunction
