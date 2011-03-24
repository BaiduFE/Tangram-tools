""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Copyright (C) 2010 xiaoqiang@baidu.com
"
" Name: tangramdictionay.vim
" Description: Dictionaries of Tangram Library used for tangram completion
" Author: zhengqianglong
" Mail: zhengqianglong@baidu.com
" Last Modified: Dec 13, 2010
" Version: 1.0
" ChangeLog: 
"           created  2010/11/13
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

if exists('g:tangram_dictionay')
    finish
endif

set completeopt=longest

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
    execute printf('au FileType javascript inoremap <silent> <buffer> %s %s<C-x><C-o>',key,key)
endfor
autocmd FileType javascript set omnifunc=tangramcomplete#CompleteTangram

let g:tangram_dictionay = []

"/-------------------------------------------
" base shortups {{{1
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.G',
            \   'menu' : '(element)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.Q',
            \   'menu' : '(className,[element,[tagName]])',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.g',
            \   'menu' : '(element)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.q',
            \   'menu' : '(className,[element,[tagName]])',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.addClass',
            \   'menu' : '(element,className)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.each',
            \   'menu' : '(source, iterator)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.encodeHTML',
            \   'menu' : '(source)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.decodeHTML',
            \   'menu' : '(source)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.extend',
            \   'menu' : '(target,source)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.format',
            \   'menu' : '(source,opts)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.getAttr',
            \   'menu' : '(element,key)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.getStyle',
            \   'menu' : '(element,key)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.hide',
            \   'menu' : '(element)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.ie',
            \   'menu' : '',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.inherits',
            \   'menu' : '(subClass,superClass)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.insertHTML',
            \   'menu' : '(element,position,html)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.isObject',
            \   'menu' : '(source)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.isString',
            \   'menu' : '(source)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.on',
            \   'menu' : '(element, type, listener)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.removeClass',
            \   'menu' : '(element, className)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.setAttr',
            \   'menu' : '(element, attributes)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.setAttrs',
            \   'menu' : '(element, attributes)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.setStyle',
            \   'menu' : '(element, key, value)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.setStyles',
            \   'menu' : '(element, styles)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.show',
            \   'menu' : '(element)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.trim',
            \   'menu' : '(source)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.un',
            \   'menu' : '(element, type, listener)',
            \   'kind' : 'func'
            \})
" }}}1

"/-------------------------------------------
" Date Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.date',
            \   'menu' : '{format, parse}',
            \   'kind' : 'obj'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.date.format',
            \   'menu' : '(source, pattern)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.date.parse',
            \   'menu' : '(source)',
            \   'kind' : 'func'
            \})
" }}}1

"/-------------------------------------------
" Dom Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom',
            \   'menu' : '{addClass, create, ...}',
            \   'kind' : 'obj'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.addClass',
            \   'menu' : '(element, className)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.children',
            \   'menu' : '(element)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.contains',
            \   'menu' : '(container, contained)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.create',
            \   'menu' : '(tagName, options)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.drag',
            \   'menu' : '(element, options)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.draggable',
            \   'menu' : '(element, options)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.empty',
            \   'menu' : '(element)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.first',
            \   'menu' : '(element)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.g',
            \   'menu' : '(element)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.getAncestorBy',
            \   'menu' : '(element, method)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.getAncestorByTag',
            \   'menu' : '(element, tagName)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.getAncestorByClass',
            \   'menu' : '(element, className)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.getAttr',
            \   'menu' : '(element, key)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.getDocument',
            \   'menu' : '(element)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.getPosition',
            \   'menu' : '(element)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.getStyle',
            \   'menu' : '(element, key)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.getText',
            \   'menu' : '(element)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.getWindow',
            \   'menu' : '(element)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.hasAttr',
            \   'menu' : '(element, name)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.hasClass',
            \   'menu' : '(element, className)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.hide',
            \   'menu' : '(element)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.insertAfter',
            \   'menu' : '(newElement, existElement)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.insertBefore',
            \   'menu' : '(newElement, existElement)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.insertHTML',
            \   'menu' : '(element, position, html)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.intersect',
            \   'menu' : '(element1, element2)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.last',
            \   'menu' : '(element)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.next',
            \   'menu' : '(element)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.prev',
            \   'menu' : '(element)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.q',
            \   'menu' : '(className, element, tagName)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.query',
            \   'menu' : '(selector, context, results)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.ready',
            \   'menu' : '(callback)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.removeClass',
            \   'menu' : '(element, className)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.setAttr',
            \   'menu' : '(element, key, value)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.setAttrs',
            \   'menu' : '(element, attributes)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.setStyle',
            \   'menu' : '(element, key, value)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.setStyles',
            \   'menu' : '(element, styles)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.show',
            \   'menu' : '(element)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.toggle',
            \   'menu' : '(element)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.dom.toggleClass',
            \   'menu' : '(element, className)',
            \   'kind' : 'func'
            \})
" }}}1

"/-------------------------------------------
" Ajax Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.ajax',
            \   'menu' : '{form, get, post...}',
            \   'kind' : 'obj'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.ajax.form',
            \   'menu' : '(form, options)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.ajax.get',
            \   'menu' : '(url, onsuccess)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.ajax.on',
            \   'menu' : '(statuscode)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.ajax.onbeforerequest',
            \   'menu' : '',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.ajax.onfailure',
            \   'menu' : '',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.ajax.post',
            \   'menu' : '(url, data, onsuccess)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.ajax.request',
            \   'menu' : '(url, options)',
            \   'kind' : 'func'
            \})
" }}}1

"/-------------------------------------------
" Array Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.array',
            \   'menu' : '{each, find, indexOf ...}',
            \   'kind' : 'obj'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.array.each',
            \   'menu' : '(source, iterator)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.array.filter',
            \   'menu' : '(source, iterator)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.array.find',
            \   'menu' : '(source, iterator)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.array.indexOf',
            \   'menu' : '(source, condition, position)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.array.lastIndexOf',
            \   'menu' : '(source, condition)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.array.remove',
            \   'menu' : '(source, condition)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.array.removeAt',
            \   'menu' : '(source, index)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.array.unique',
            \   'menu' : '(source [,compareFn])',
            \   'kind' : 'func'
            \})
" }}}1

"/-------------------------------------------
" Lang Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.lang',
            \   'menu' : '{createClass, guid ...}',
            \   'kind' : 'obj'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.lang.Class',
            \   'menu' : '{guid}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.lang.Event',
            \   'menu' : '{type, target}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.lang.createClass',
            \   'menu' : '(myClass, options)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.lang.decontrol',
            \   'menu' : '(guid)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.lang.guid',
            \   'menu' : '',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.lang.inherits',
            \   'menu' : '(subClass, superClass)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.lang.instance',
            \   'menu' : '(guid)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.lang.isArray',
            \   'menu' : '(source)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.lang.isElement',
            \   'menu' : '(source)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.lang.isNumber',
            \   'menu' : '(source)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.lang.isObject',
            \   'menu' : '(source)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.lang.isString',
            \   'menu' : '(source)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.lang.module',
            \   'menu' : '(name, module, owner)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.lang.toArray',
            \   'menu' : '(obj)',
            \   'kind' : 'func'
            \})
" }}}1

"/-------------------------------------------
" Swf Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.swf',
            \   'menu' : '{create, getMovie ...}',
            \   'kind' : 'obj'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.swf.create',
            \   'menu' : '(options, container)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.swf.createHTML',
            \   'menu' : '(options)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.swf.getMovie',
            \   'menu' : '(name)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.swf.version',
            \   'menu' : '',
            \   'kind' : 'func'
            \})
" }}}1

"/-------------------------------------------
" Browser Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.browser',
            \   'menu' : '{ie, chrome ...}',
            \   'kind' : 'obj'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.browser.chrome',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.browser.firefox',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.browser.ie',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.browser.isGecko',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.browser.isStrict',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.browser.isWebkit',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.browser.maxthon',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.browser.opera',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.browser.safari',
            \   'menu' : '',
            \   'kind' : 'property'
            \})
" }}}1

"/-------------------------------------------
" Cookie Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.cookie',
            \   'menu' : '{get, set ...}',
            \   'kind' : 'obj'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.cookie.get',
            \   'menu' : '(key)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.cookie.getRaw',
            \   'menu' : '(key)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.cookie.remove',
            \   'menu' : '(key, options)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.cookie.set',
            \   'menu' : '(key, value, options)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.cookie.setRaw',
            \   'menu' : '(key, value, options)',
            \   'kind' : 'func'
            \})

" }}}1

"/-------------------------------------------
" Cookie Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.json',
            \   'menu' : '{encode, decode ...}',
            \   'kind' : 'obj'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.json.decode',
            \   'menu' : '(source)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.json.encode',
            \   'menu' : '(value)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.json.parse',
            \   'menu' : '(source)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.json.stringify',
            \   'menu' : '(value)',
            \   'kind' : 'func'
            \})
" }}}1

"/-------------------------------------------
" Object Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.object',
            \   'menu' : '{each, clone ...}',
            \   'kind' : 'obj'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.object.clone',
            \   'menu' : '(source)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.object.each',
            \   'menu' : '(source, iterator)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.object.extend',
            \   'menu' : '(target, source)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.object.keys',
            \   'menu' : '(source)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.object.values',
            \   'menu' : '(source)',
            \   'kind' : 'func'
            \})
" }}}1

"/-------------------------------------------
" Page Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.page',
            \   'menu' : '{getWidth, getHeight ...}',
            \   'kind' : 'obj'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.page.createStyleSheet',
            \   'menu' : '',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.page.getMousePosition',
            \   'menu' : '',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.page.getScrollLeft',
            \   'menu' : '',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.page.getScrollTop',
            \   'menu' : '',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.page.getViewHeight',
            \   'menu' : '',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.page.getViewWidth',
            \   'menu' : '',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.page.getWidth',
            \   'menu' : '',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.page.loadCssFile',
            \   'menu' : '(path)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.page.loadJsFile',
            \   'menu' : '(path)',
            \   'kind' : 'func'
            \})
" }}}1

"/-------------------------------------------
" Event Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.event',
            \   'menu' : '{on, get ...}',
            \   'kind' : 'obj'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.event.EventArg',
            \   'menu' : '{event}',
            \   'kind' : 'constructor'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.event.get',
            \   'menu' : '(Event [,win])',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.event.getKeyCode',
            \   'menu' : '(Event)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.event.getPageX',
            \   'menu' : '(Event)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.event.getPageY',
            \   'menu' : '(Event)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.event.getTarget',
            \   'menu' : '(Event)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.event.on',
            \   'menu' : '(element, type, listener)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.event.preventDefault',
            \   'menu' : '(Event)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.event.stop',
            \   'menu' : '(Event)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.event.stopPropagation',
            \   'menu' : '(Event)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.event.un',
            \   'menu' : '(element, type, listener)',
            \   'kind' : 'func'
            \})
" }}}1

"/-------------------------------------------
" Number Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.number',
            \   'menu' : '{comma, pad}',
            \   'kind' : 'obj'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.number.comma',
            \   'menu' : '(source, length)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.number.pad',
            \   'menu' : '(source, length)',
            \   'kind' : 'func'
            \})
" }}}1

"/-------------------------------------------
" Sio Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.sio',
            \   'menu' : '{callByBrowser, callByServer}',
            \   'kind' : 'obj'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.sio.callByBrowser',
            \   'menu' : '(url, callback)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.sio.callByServer',
            \   'menu' : '(url, callback)',
            \   'kind' : 'func'
            \})
" }}}1

"/-------------------------------------------
" String Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.string',
            \   'menu' : '{decodeHTML, encodeHTML...}',
            \   'kind' : 'obj'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.string.decodeHTML',
            \   'menu' : '(source)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.string.encodeHTML',
            \   'menu' : '(source)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.string.escapeReg',
            \   'menu' : '(source)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.string.filterFormat',
            \   'menu' : '(pattern, str)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.string.format',
            \   'menu' : '(pattern, options)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.string.getByteLength',
            \   'menu' : '(source)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.string.subByte',
            \   'menu' : '(source, length)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.string.toCamelCase',
            \   'menu' : '(source)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.string.toHalfWidth',
            \   'menu' : '(source)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.string.trim',
            \   'menu' : '(source)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.string.wbr',
            \   'menu' : '(source)',
            \   'kind' : 'func'
            \})
" }}}1

"/-------------------------------------------
" String Object {{{1
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.url',
            \   'menu' : '{escapeSymbol, jsonToQuery ...}',
            \   'kind' : 'obj'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.url.escapeSymbol',
            \   'menu' : '(source)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.url.getQueryValue',
            \   'menu' : '(url, key)',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.url.jsonToQuery',
            \   'menu' : '(json [,replacer])',
            \   'kind' : 'func'
            \})
call add(g:tangram_dictionay, {
            \   'word' : 'baidu.url.queryToJson',
            \   'menu' : '(url)',
            \   'kind' : 'func'
            \})
" }}}1
"
"/-------------------------------------------
" vim: set fdm=marker:
