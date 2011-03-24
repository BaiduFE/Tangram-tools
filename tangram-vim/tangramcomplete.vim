""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Copyright (C) 2010 xiaoqiang@baidu.com
"
" Name: tangramcomplete.vim
" Description: A plugin for tangram library autocompletion
" Author: zhengqianglong
" Mail: zhengqianglong@baidu.com
" Last Modified: Dec 13, 2010
" Version: 1.0
" ChangeLog: 
"           created  2010/11/13
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" version checking & avoid load twice
if exists('g:tangram_acp_loaded')
    finish
elseif v:version < 702
    echoerr 'Tangram auto complete does not support this version of vim (' . v:version . ').'
    finish
endif
let g:tangram_acp_loaded = 1

" give a off switcher
if exists('g:tangram_acp_disabled') && g:tangram_acp_disabled == 1
    finish
endif
let g:tangram_acp_disabled = 0

" main function
function! tangramcomplete#CompleteTangram(findstart, base)

    if a:findstart
        " We need whole line to proper checking
        let s:line = getline('.')
        let s:start = col('.') - 1
        let s:compl_begin = col('.') - 2
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

    let s:haskeyword = strridx(s:line, 'baidu')

    if s:haskeyword > -1
        let s:tangram_keyword = matchstr(s:line, 'baidu\(\.\|[a-zA-Z]\)*$')
        if s:tangram_keyword != ""
            call add(s:result, s:tangram_keyword)
            for m in g:tangram_dictionay
                if m['word'] =~? '^'.s:tangram_keyword
                    call add(s:result, m)
                endif
            endfor
            return s:result
        endif
    endif

    return []
endfunction
