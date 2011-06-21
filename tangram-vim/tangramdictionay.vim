""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Copyright (C) 2010 zhengqianglong@baidu.com
"
" Name: tangramdictionay.vim
" Description: Dictionaries of Tangram Library used for tangram completion
" Author: zhengqianglong
" Mail: zhengqianglong@baidu.com
" Last Modified: Apr 06, 2011
" Version: 2.0
" ChangeLog: 
" 1. 创建字典支持Tangram1.1.0
" 2. tangramcomplete的相关配置项
"           created 1.0  2010/11/13
" -------------------------------------------
" 1. 修改了自动命令的相关实现，提升交互体验
" 2. 完善tangramdictionary，支持Tangram1.3.5
"           updated to 2.0 2011/04/06
" -------------------------------------------
"  1. 接口升级，支持Tangram1.3.9
"           updated to 2.0 2011/06/21
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

if exists('g:tangram_dictionay')
    finish
endif

set completeopt=menu,menuone

" mapping keys trigger
let g:tangram_mapping_driven = [
            \'a','b','c','d','e','f','g',
            \'A','B','C','D','E','F','G',
            \'h','i','j','k','l','m','n','o','p',
            \'H','I','J','K','L','M','N','O','P',
            \'q','r','s','t','u','v','w','x','y','z',
            \'Q','R','S','T','U','V','W','X','Y','Z',
            \'.','<BS>']
for key in g:tangram_mapping_driven
    execute printf('au FileType javascript inoremap <silent> <buffer> %s %s<C-x><C-o><C-r>=tangramcomplete#onPopupPost()<CR>',key,key)
endfor
autocmd FileType javascript set omnifunc=tangramcomplete#CompleteTangram

let g:tangram_dictionay = []

"/-------------------------------------------
" base shortups {{{1
call add(g:tangram_dictionay, {
            \   'word' : '.G',
            \   'menu' : '(element)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.Q',
            \   'menu' : '(className,[element,[tagName]])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.g',
            \   'menu' : '(element)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.q',
            \   'menu' : '(className,[element,[tagName]])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.addClass',
            \   'menu' : '(element,className)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.each',
            \   'menu' : '(source, iterator)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.encodeHTML',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.decodeHTML',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.extend',
            \   'menu' : '(target,source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.format',
            \   'menu' : '(source,opts)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.getAttr',
            \   'menu' : '(element,key)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.getStyle',
            \   'menu' : '(element,key)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.hide',
            \   'menu' : '(element)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ie',
            \   'menu' : '',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.inherits',
            \   'menu' : '(subClass,superClass)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.insertHTML',
            \   'menu' : '(element,position,html)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.isObject',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.isString',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.on',
            \   'menu' : '(element, type, listener)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.removeClass',
            \   'menu' : '(element, className)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.setAttr',
            \   'menu' : '(element, attributes)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.setAttrs',
            \   'menu' : '(element, attributes)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.setStyle',
            \   'menu' : '(element, key, value)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.setStyles',
            \   'menu' : '(element, styles)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.show',
            \   'menu' : '(element)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.trim',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.un',
            \   'menu' : '(element, type, listener)',
            \   'kind' : 'Function'
            \})
" }}}1

"/-------------------------------------------
" Date Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : '.date',
            \   'menu' : '{format, parse}',
            \   'kind' : 'Object'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.date.format',
            \   'menu' : '(source, pattern)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.date.parse',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
" }}}1

"/-------------------------------------------
" Dom Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : '.dom',
            \   'menu' : '{addClass, create, ...}',
            \   'kind' : 'Object'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.addClass',
            \   'menu' : '(element, className)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.children',
            \   'menu' : '(element)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.contains',
            \   'menu' : '(container, contained)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.create',
            \   'menu' : '(tagName [,options])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.ddManager',
            \   'menu' : '(element ,options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.drag',
            \   'menu' : '(element, options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.draggable',
            \   'menu' : '(element, options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.droppable',
            \   'menu' : '(element [,options])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.empty',
            \   'menu' : '(element)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.first',
            \   'menu' : '(element)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.g',
            \   'menu' : '(element)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.getAncestorBy',
            \   'menu' : '(element, method)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.getAncestorByTag',
            \   'menu' : '(element, tagName)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.getAncestorByClass',
            \   'menu' : '(element, className)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.getAttr',
            \   'menu' : '(element, key)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.getComputedStyle',
            \   'menu' : '(element, key)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.getDocument',
            \   'menu' : '(element)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.getParent',
            \   'menu' : '(element)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.getPosition',
            \   'menu' : '(element)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.getStyle',
            \   'menu' : '(element, key)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.getText',
            \   'menu' : '(element)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.getWindow',
            \   'menu' : '(element)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.hasAttr',
            \   'menu' : '(element, name)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.hasClass',
            \   'menu' : '(element, className)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.hide',
            \   'menu' : '(element)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.insertAfter',
            \   'menu' : '(newElement, existElement)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.insertBefore',
            \   'menu' : '(newElement, existElement)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.insertHTML',
            \   'menu' : '(element, position, html)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.intersect',
            \   'menu' : '(element1, element2)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.last',
            \   'menu' : '(element)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.next',
            \   'menu' : '(element)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.prev',
            \   'menu' : '(element)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.q',
            \   'menu' : '(className [, element, tagName])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.query',
            \   'menu' : '(selector [, context, results])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.ready',
            \   'menu' : '(callback)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.remove',
            \   'menu' : '(element)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.removeClass',
            \   'menu' : '(element, className)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.removeStyle',
            \   'menu' : '(element, styleName)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.resizable',
            \   'menu' : '(element [,options])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.setAttr',
            \   'menu' : '(element, key, value)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.setAttrs',
            \   'menu' : '(element, attributes)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.setBorderBoxHeight',
            \   'menu' : '(element, height)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.setBorderBoxSize',
            \   'menu' : '(element, size)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.setBorderBoxWidth',
            \   'menu' : '(element, width)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.setPosition',
            \   'menu' : '(element, position)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.setStyle',
            \   'menu' : '(element, key, value)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.setStyles',
            \   'menu' : '(element, styles)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.show',
            \   'menu' : '(element)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.toggle',
            \   'menu' : '(element)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.dom.toggleClass',
            \   'menu' : '(element, className)',
            \   'kind' : 'Function'
            \})
" }}}1

"/-------------------------------------------
" Element Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : '.element',
            \   'menu' : '{each, events, extend...}',
            \   'kind' : 'Object'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.element.each',
            \   'menu' : '(node).each(iterator)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.element.events',
            \   'menu' : '(node).events(fn)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.element.extend',
            \   'menu' : '(json)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.element.Element',
            \   'menu' : '(node)',
            \   'kind' : 'Function'
            \})
" }}}1

"/-------------------------------------------
" Ajax Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : '.ajax',
            \   'menu' : '{form, get, post...}',
            \   'kind' : 'Object'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ajax.form',
            \   'menu' : '(form [,options])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ajax.get',
            \   'menu' : '(url [,onsuccess])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ajax.post',
            \   'menu' : '(url, data [,onsuccess])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ajax.request',
            \   'menu' : '(url [,options])',
            \   'kind' : 'Function'
            \})
" }}}1

"/-------------------------------------------
" Array Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : '.array',
            \   'menu' : '{each, find, indexOf ...}',
            \   'kind' : 'Object'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.array.contains',
            \   'menu' : '(source, obj)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.array.each',
            \   'menu' : '(source, iterator [, thisObject])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.array.empty',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.array.every',
            \   'menu' : '(source, iterator [,thisObject])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.array.filter',
            \   'menu' : '(source, iterator [,thisObject])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.array.find',
            \   'menu' : '(source, iterator)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.array.hash',
            \   'menu' : '(keys [,values])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.array.indexOf',
            \   'menu' : '(source, match [,fromIndex])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.array.lastIndexOf',
            \   'menu' : '(source, match)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.array.map',
            \   'menu' : '(source, iterator [,thisObject])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.array.reduce',
            \   'menu' : '(source, iterator [,initializer])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.array.remove',
            \   'menu' : '(source, match)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.array.removeAt',
            \   'menu' : '(source, index)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.array.some',
            \   'menu' : '(source, iterator)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.array.unique',
            \   'menu' : '(source [,compareFn])',
            \   'kind' : 'Function'
            \})
" }}}1

"/-------------------------------------------
" Lang Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : '.lang',
            \   'menu' : '{createClass, guid ...}',
            \   'kind' : 'Object'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.lang.Class',
            \   'menu' : '{guid}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.lang.Event',
            \   'menu' : '{type, target}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.lang.createClass',
            \   'menu' : '(constructor [, options])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.lang.createSingle',
            \   'menu' : '(json)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.lang.decontrol',
            \   'menu' : '(guid)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.lang.guid',
            \   'menu' : '',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.lang.inherits',
            \   'menu' : '(subClass, superClass [,className])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.lang.instance',
            \   'menu' : '(guid)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.lang.isArray',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.lang.isBoolean',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.lang.isDate',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.lang.isFunction',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.lang.isElement',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.lang.isNumber',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.lang.isObject',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.lang.isString',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.lang.module',
            \   'menu' : '(name, module [,owner])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.lang.toArray',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.lang.eventCenter',
            \   'menu' : '{addEventListener, dispatchEvent}',
            \   'kind' : 'Object'
            \})
" }}}1

"/-------------------------------------------
" Swf Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : '.swf',
            \   'menu' : '{create, getMovie ...}',
            \   'kind' : 'Object'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.swf.create',
            \   'menu' : '(options [,container])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.swf.createHTML',
            \   'menu' : '(options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.swf.getMovie',
            \   'menu' : '(name)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.swf.version',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.swf.Proxy',
            \   'menu' : '(id, property, [, loadedHandler])',
            \   'kind' : 'Function'
            \})
" }}}1

"/-------------------------------------------
" Browser Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : '.browser',
            \   'menu' : '{ie, chrome ...}',
            \   'kind' : 'Object'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.browser.chrome',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.browser.firefox',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.browser.ie',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.browser.isGecko',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.browser.isStrict',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.browser.isWebkit',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.browser.maxthon',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.browser.opera',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.browser.safari',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
" }}}1

"/-------------------------------------------
" Cookie Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : '.cookie',
            \   'menu' : '{get, set ...}',
            \   'kind' : 'Object'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.cookie.get',
            \   'menu' : '(key)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.cookie.getRaw',
            \   'menu' : '(key)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.cookie.remove',
            \   'menu' : '(key, options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.cookie.set',
            \   'menu' : '(key, value [,options])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.cookie.setRaw',
            \   'menu' : '(key, value [,options])',
            \   'kind' : 'Function'
            \})

" }}}1

"/-------------------------------------------
" Json Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : '.json',
            \   'menu' : '{encode, decode ...}',
            \   'kind' : 'Object'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.json.decode',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.json.encode',
            \   'menu' : '(value)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.json.parse',
            \   'menu' : '(data)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.json.stringify',
            \   'menu' : '(value)',
            \   'kind' : 'Function'
            \})
" }}}1

"/-------------------------------------------
" Object Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : '.object',
            \   'menu' : '{each, clone ...}',
            \   'kind' : 'Object'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.object.clone',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.object.each',
            \   'menu' : '(source, iterator)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.object.extend',
            \   'menu' : '(target, source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.object.isPlain',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.object.keys',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.object.map',
            \   'menu' : '(source, iterator)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.object.merge',
            \   'menu' : '(target, source [,opt_options])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.object.values',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
" }}}1

"/-------------------------------------------
" Page Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : '.page',
            \   'menu' : '{getWidth, getHeight ...}',
            \   'kind' : 'Object'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.page.createStyleSheet', 
            \   'menu' : '(options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.page.getHeight',
            \   'menu' : '',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.page.getMousePosition',
            \   'menu' : '',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.page.getScrollLeft',
            \   'menu' : '',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.page.getScrollTop',
            \   'menu' : '',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.page.getViewHeight',
            \   'menu' : '',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.page.getViewWidth',
            \   'menu' : '',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.page.getWidth',
            \   'menu' : '',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.page.lazyLoadImage',
            \   'menu' : '([options])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.page.load',
            \   'menu' : '(resources [,options])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.page.loadCssFile',
            \   'menu' : '(path)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.page.loadJsFile',
            \   'menu' : '(path)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.page.rules',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
" }}}1

"/------------------------------------------- " 
"Platform Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : '.platform',
            \   'menu' : '{isIpad, isWindows ...}',
            \   'kind' : 'Object'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.platform.isAndroid',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.platform.isIpad',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.platform.isIphone',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.platform.isMacintosh',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.platform.isWindows',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.platform.isX11',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
" }}}1

"/------------------------------------------- " 
"Event Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : '.event',
            \   'menu' : '{on, get ...}',
            \   'kind' : 'Object'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.event.EventArg',
            \   'menu' : '(event, [,win])',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.event.fire',
            \   'menu' : '(element, type, options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.event.get',
            \   'menu' : '(Event [,win])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.event.getKeyCode',
            \   'menu' : '(Event)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.event.getPageX',
            \   'menu' : '(Event)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.event.getPageY',
            \   'menu' : '(Event)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.event.getTarget',
            \   'menu' : '(Event)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.event.on',
            \   'menu' : '(element, type, listener)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.event.once',
            \   'menu' : '(element, type, listener)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.event.preventDefault',
            \   'menu' : '(Event)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.event.stop',
            \   'menu' : '(Event)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.event.stopPropagation',
            \   'menu' : '(Event)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.event.un',
            \   'menu' : '(element, type, listener)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.event.keyCode',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.event.pageX',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.event.pageY',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.event.target',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
" }}}1

"/-------------------------------------------
" Fn Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : '.fn',
            \   'menu' : '{bind, blank, ...}',
            \   'kind' : 'Object'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.fn.bind',
            \   'menu' : '(handler [,obj, args])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.fn.blank',
            \   'menu' : '',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.fn.methodize',
            \   'menu' : '(func [,attr])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.fn.multize',
            \   'menu' : '(func [,recursive])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.fn.wrapReturnValue',
            \   'menu' : '(func ,wrapper ,mode)',
            \   'kind' : 'Function'
            \})

" }}}1

"/-------------------------------------------
" Number Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : '.number',
            \   'menu' : '{comma, pad}',
            \   'kind' : 'Object'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.number.comma',
            \   'menu' : '(source [,length])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.number.pad',
            \   'menu' : '(source, length)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.number.randomInt',
            \   'menu' : '(min, max)',
            \   'kind' : 'Function'
            \})
" }}}1

"/-------------------------------------------
" Sio Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : '.sio',
            \   'menu' : '{callByBrowser, callByServer}',
            \   'kind' : 'Object'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.sio.callByBrowser',
            \   'menu' : '(url, opt_callback, opt_options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.sio.callByServer',
            \   'menu' : '(url, callback, opt_options)',
            \   'kind' : 'Function'
            \})
" }}}1

"/-------------------------------------------
" String Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : '.string',
            \   'menu' : '{decodeHTML, encodeHTML...}',
            \   'kind' : 'Object'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.string.decodeHTML',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.string.encodeHTML',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.string.escapeReg',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.string.filterFormat',
            \   'menu' : '(source, options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.string.format',
            \   'menu' : '(source, options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.string.formatColor',
            \   'menu' : '(color)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.string.getByteLength',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.string.subByte',
            \   'menu' : '(source, length)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.string.toCamelCase',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.string.toHalfWidth',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.string.trim',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.string.wbr',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
" }}}1

"/-------------------------------------------
" Url Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : '.url',
            \   'menu' : '{escapeSymbol, jsonToQuery ...}',
            \   'kind' : 'Object'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.url.escapeSymbol',
            \   'menu' : '(source)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.url.getQueryValue',
            \   'menu' : '(url, key)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.url.jsonToQuery',
            \   'menu' : '(json [,replacer])',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.url.queryToJson',
            \   'menu' : '(url)',
            \   'kind' : 'Function'
            \})
" }}}1
"
"/-------------------------------------------
" UI Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : '.ui.Accordion',
            \   'menu' : '{options}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ui.Behavior',
            \   'menu' : '{options}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ui.Button',
            \   'menu' : '{options}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ui.Carousel',
            \   'menu' : '{options}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ui.ColorPalette',
            \   'menu' : '{options}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ui.ColorPicker',
            \   'menu' : '{options}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ui.Combox',
            \   'menu' : '{options}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ui.DatePicker',
            \   'menu' : '{options}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ui.Decorator',
            \   'menu' : '{options}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ui.Dialog',
            \   'menu' : '{options}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ui.Input',
            \   'menu' : '{options}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ui.Menubar',
            \   'menu' : '{options}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ui.Modal',
            \   'menu' : '{options}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ui.Pager',
            \   'menu' : '{options}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ui.Popup',
            \   'menu' : '{options}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ui.ScrollBar',
            \   'menu' : '{options}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ui.ScrollPanel',
            \   'menu' : '{options}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ui.ScrollPanel',
            \   'menu' : '{options}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ui.Slider',
            \   'menu' : '{options}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ui.StarRate',
            \   'menu' : '{options}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ui.Suggestion',
            \   'menu' : '{options}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ui.Tab',
            \   'menu' : '{options}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ui.Table',
            \   'menu' : '{options}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ui.Toolbar',
            \   'menu' : '{options}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ui.Tooltip',
            \   'menu' : '{options}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.ui.Tree',
            \   'menu' : '{options}',
            \   'kind' : 'constructor'
            \})
" }}}1

"/-------------------------------------------
" Fx Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : '.fx',
            \   'menu' : '{collapse, expand ...}',
            \   'kind' : 'Object'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.fx.collapse',
            \   'menu' : '(element, options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.fx.current',
            \   'menu' : '(element)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.fx.expand',
            \   'menu' : '(element, options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.fx.fadeIn',
            \   'menu' : '(element, options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.fx.fadeOut',
            \   'menu' : '(element, options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.fx.highlight',
            \   'menu' : '(element, options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.fx.mask',
            \   'menu' : '(element, options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.fx.move',
            \   'menu' : '(element, options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.fx.moveBy',
            \   'menu' : '(element, distance, options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.fx.moveTo',
            \   'menu' : '(element, point, options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.fx.opacity',
            \   'menu' : '(element, options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.fx.puff',
            \   'menu' : '(element, options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.fx.pulsate',
            \   'menu' : '(element, loop, options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.fx.remove',
            \   'menu' : '(element, options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.fx.scale',
            \   'menu' : '(element, options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.fx.scrollBy',
            \   'menu' : '(element, distance, options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.fx.scrollTo',
            \   'menu' : '(element, distance, options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.fx.shake',
            \   'menu' : '(element, offset, options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.fx.zoomIn',
            \   'menu' : '(element, options)',
            \   'kind' : 'Function'
            \})
call add(g:tangram_dictionay, {
            \   'word' : '.fx.zoomOut',
            \   'menu' : '(element, options)',
            \   'kind' : 'Function'
            \})
" }}}1
"/-------------------------------------------
" vim: set fdm=marker:
