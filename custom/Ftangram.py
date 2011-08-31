#!/usr/bin/env python
#!-*- coding:utf-8 -*-
#!vim: set ts=4 sw=4 sts=4 tw=100 noet:
# ***************************************************************************
# 
# Copyright (c) 2011 Baidu.com, Inc. All Rights Reserved
# $Id: Ftangram.py 88712 2011-08-23 03:43:06Z  $ 
# 
# **************************************************************************/
 
 
 
import os
import sys
import logging
import urllib2
import urllib
import codecs
from optparse import OptionParser
 
 
__author__ = 'leeight <liyubei@baidu.com>'
__date__ = '2011/08/19 13:42:18'
__revision = '$Revision: 88712 $'


from closure_linter import javascripttokenizer
from closure_linter import javascripttokens
from closure_linter import tokenutil

TokenType = javascripttokens.JavaScriptTokenType

API_ALIAS_MAP = {
  "baidu.format" : "baidu.string.format",
  "baidu.setStyles" : "baidu.dom.setStyles",
  "baidu.inherits" : "baidu.lang.inherits",
  "baidu.show" : "baidu.dom.show",
  "baidu.addClass" : "baidu.dom.addClass",
  "baidu.removeClass" : "baidu.dom.removeClass",
  "baidu.Q" : "baidu.dom.q",
  "baidu.hide" : "baidu.dom.hide",
  "baidu.isString" : "baidu.lang.isString",
  "baidu.G" : "baidu.dom.g",
  "baidu.g" : "baidu.dom.g",
  "baidu.insertHTML" : "baidu.dom.insertHTML",
  "baidu.setStyle" : "baidu.dom.setStyle",
  "baidu.getAttr" : "baidu.dom.getAttr",
  "baidu.encodeHTML" : "baidu.string.encodeHTML",
  "baidu.trim" : "baidu.string.trim",
  "baidu.isObject" : "baidu.lang.isObject",
  "baidu.setAttrs" : "baidu.dom.setAttrs",
  "baidu.un" : "baidu.event.un",
  "baidu.on" : "baidu.event.on",
  "baidu.q" : "baidu.dom.q",
  "baidu.getStyle" : "baidu.dom.getStyle",
  "baidu.each" : "baidu.array.each",
  "baidu.decodeHTML" : "baidu.string.decodeHTML",
  "baidu.extend" : "baidu.object.extend",
  "baidu.setAttr" : "baidu.dom.setAttr",
  "baidu.dom.setOuterHeight" : "baidu.dom.setBorderBoxHeight",
  "baidu.dom.setOuterWidth" : "baidu.dom.setBorderBoxWidth"
}

def tangram_compile(args, options):
  tokens = set()
  for filename in args:
    tokens.update(collect_tokens(filename))
  tangram = fetch_remote_source(list(tokens))
  if options.keep_first:
    options.output.write(codecs.open(args[0], 'r', options.charset).read().encode("utf-8"))
    program = "\n".join([
      tangram,
    ] + map(lambda x : codecs.open(x, 'r', options.charset).read().encode("utf-8"), args[1:]))
  else:
    program = "\n".join([
      tangram,
    ] + map(lambda x : codecs.open(x, 'r', options.charset).read().encode("utf-8"), args))
    
  options.output.write(options.output_wrapper.replace("%output%", program))

def normalize_api_name(tokens):
  return map(lambda x : API_ALIAS_MAP[x] if x in API_ALIAS_MAP else x, tokens)

def fetch_remote_source(tokens):
  """
  发起HTTP请求，获取代码
  """

  tokens = normalize_api_name(tokens)
  src = "\n".join(map(lambda x : "///import %s;" % x, tokens))
  request = urllib2.Request("http://tangram.baidu.com/codesearch/script/code.php")
  request.add_data(urllib.urlencode({
    "compress" : "source",
    "isLite" : "0",
    "nobase" : "false",
    "nouibase" : "false",
    "short_key" : "",
    "short_value" : "",
    "src" : src,
    "tag" : "src",
    "version" : "tangram-component_stable",
  }))
  handler = urllib2.urlopen(request)
  try:
    body = handler.read()
    return body
  except (urllib2.URLError, urllib2.HTTPError, httplib.BadStatusLine, httplib.IncompleteRead, socket.timeout):
    return "/** == E R R O R  H A P P E N E D  == */"

def collect_tokens(filename):
  tokens = set()
  if not os.path.exists(filename):
    return tokens

  tokenizer = javascripttokenizer.JavaScriptTokenizer()
  lines_iter = file(filename)
  token = tokenizer.TokenizeFile(lines_iter)
  while token:
    if token.type == TokenType.IDENTIFIER:
      value = token.string
      if value.startswith("baidu."):
        tokens.add(value)
    token = token.next
  return tokens

def main():
  logging.basicConfig(format='Ftangram.py: %(message)s', level=logging.INFO)

  parser = OptionParser("Usage: Ftangram.py [options] file1 [file2 [file3] ... ]")
  parser.add_option("-o", "--output", dest="output", help="output file")
  parser.add_option("-f", "--functions", dest="functions", action="append")
  parser.add_option("-l", "--keep-first-file-position", dest="keep_first", 
      action="store_true", default=False)
  parser.add_option("-w", "--output_wrapper", dest="output_wrapper", 
      default="%output%", help="default is %output%")
  parser.add_option("-c", "--charset", dest="charset", default="utf-8")
 
  (options, args) = parser.parse_args()

  options.output = open(options.output, 'w') if options.output else sys.stdout
  if options.functions:
    options.output.write(fetch_remote_source(filter(lambda x : x.startswith("baidu"), options.functions)))
  elif len(args) <= 0:
    parser.print_help()
  else:
    tangram_compile(args, options)

if __name__ == "__main__":
  main()



