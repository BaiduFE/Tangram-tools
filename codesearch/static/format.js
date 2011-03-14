  // javascript format script
// copyright Stephen Chapman 22 April 2007
// NOTE that you do not have permission to copy this script


var kw = ['abstract', 'as', 'boolean', 'break', 'byte', 'case', 'catch', 'char', 'class', 'const', 'continue', 'default', 'delete', 'do', 'double', 'else', 'enum', 'export', 'extends', 'false', 'final', 'finally', 'float', 'for', 'function', 'goto', 'if', 'implements', 'import', 'in', 'instanceof', 'int', 'interface', 'long', 'namespace', 'native', 'new', 'null', 'package', 'private', 'protected', 'public', 'return', 'short', 'static', 'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'true', 'try', 'typeof', 'use', 'var', 'void', 'volatile', 'while', 'with'];
var ob = ['Anchor', 'anchors', 'Applet', 'applets', 'Area', 'Array', 'Body', 'Button', 'Checkbox', 'Date', 'document', 'FileUpload', 'Form', 'forms', 'Frame', 'frames', 'Hidden', 'History', 'history', 'Image', 'images', 'Layer', 'layers', 'Link', 'links', 'location', 'Math', 'MimeType', 'mimeTypes', 'navigator', 'Number', 'Option', 'options', 'Password', 'Plugin', 'plugins', 'Radio', 'RegExp', 'Reset', 'screen', 'Script', 'Select', 'String', 'Style', 'StyleSheet', 'Submit', 'Text', 'Textarea', 'window'];
var sym = '-+*<=>?:&|/!%';

function JSfmt(s) {
this.i = this.r = this.lvl = this.pr = 0;
this.row = [''];
this.lW = this.nC = this.pC = '';

this.decode = function() {
s = s.replace(/(\r\n|\r|\n)/g, '\n');
while (this.i < s.length) { var c = s.charAt(this.i); if (s.length - 1 == this.i) this.nC = ''; else this.nC = s.charAt(this.i + 1);
if (/\w/.test(c)) {if (this.lW) this.lW += c; else this.lW = c; this.row[this.r] += c; } else switch (c) {
case '\n': break;
case ' ': case '\t': this.hl(); this.row[this.r] += ' '; break;
case '.':  this.hl(); this.row[this.r] += '.'; break;
case '{': this.hl(); var currentLine = this.row[this.r]; if (currentLine.length) {var lastChar = currentLine[currentLine.length - 1]; if (lastChar != '&nbsp;' && lastChar != '\t') this.row[this.r] += ' {'; else this.row[this.r] += '{';} else this.row[this.r] += '{'; this.lvl++; this.wl(); break;
case '}': this.hl(); this.lvl--; this.row[this.r] += '}'; if (';' != this.nC) this.wl(); break;
case ';': this.hl(); this.row[this.r] += '; '; if (this.pr == 0) this.wl(); break;
case '(': this.pr++; this.hl(); this.row[this.r] += '('; break;
case ')': this.pr--; this.hl(); this.row[this.r] += ')'; break;
case '"': case "'": this.hl(); var escaped = false; this.row[this.r] += '<span class="literal">' + c; while (this.i < s.length - 1) {this.i++; var ch = s.charAt(this.i); if (ch == '\\') escaped = !escaped; if (ch == '&') ch = '&amp;'; if (ch == '<') ch = '&lt;'; if (ch == '>') ch = '&gt;'; this.row[this.r] += ch; if (c == ch && !escaped) {this.row[this.r] += '<\/span>';break;} if (ch != '\\') escaped = false;} break;
case '/': if ('/' == this.nC) {this.row[this.r] += '<span class="comment">//'; this.i++; while (this.i < s.length - 1) {this.i++; var c = s.charAt(this.i); if (c == '&') c = '&amp;'; if (c == '<') c = '&lt;'; if (c == '>') c = '&gt;'; if (c == '\n') { this.row[this.r] += '<\/span>';   this.wl();break;} this.row[this.r] += c;}} else if (this.nC == '*') {this.row[this.r] += '<span class="comment">/*'; this.i++; var c = ''; var prevC = ''; while (this.i < s.length - 1) {this.i++; prevC = c;  c = s.charAt(this.i); if (c =='&nbsp;' || c == '\t' || c == '\n') {if (c == '&nbsp;') {if (this.row[this.r]) this.row[this.r] += '&nbsp;';} else if (c == '\t') {if (this.row[this.r]) this.row[this.r] += '&nbsp;&nbsp; ';} else if (c == '\n') this.wl();} else this.row[this.r] += c; if (c == '/' && prevC == '*') {this.row[this.r] += '<\/span>'; break;}}  this.wl();} else if (this.lW) {this.hl(); if (this.nC == '=') this.row[this.r] += ' /'; else this.row[this.r] += ' / ';} else if (this.pC == '*') this.row[this.r] += '/ '; else if (this.pC == ')') this.row[this.r] += ' / ';else {if (this.pC == '=') this.row[this.r] += ' /'; else this.row[this.r] += '/'; while (this.i < s.length - 1) {this.i++; var c = s.charAt(this.i); if (c == '(') this.pr++; if (c == ')') this.pr--; if (c == '\\') escaped = !escaped; this.row[this.r] += c; if (c == ';' && this.pr == 0) {this.wl(); break;} if (c =='/' && this.pr == 0) if (!escaped) break; if (c != '\\') escaped = false;}} break;
case ',':  this.hl(); this.row[this.r] += ', '; break;
case '-': case '+': case '*': case '%': case '<': case '=': case '>': case '?': case ':': case '&': case '|':  case '!': this.hl(); if (c == '!' && this.nC != '=') {this.row[this.r] += c; break;} if (c == ':' && this.pC == "'") {this.row[this.r] += c; break;}  if (c == '+' || c == '-') if (c == this.nC || c == this.pC) {this.row[this.r] += c; break;} if (sym.indexOf(this.pC) != -1) {if (sym.indexOf(this.nC) != -1) this.row[this.r] += c; else this.row[this.r] += c + ' ';} else {if (sym.indexOf(this.nC) != -1) this.row[this.r] += ' ' + c; else this.row[this.r] += ' ' + c + ' ';} break;
default: this.hl(); this.row[this.r] += c; break;}
if (!/\w/.test(c)) if (c != ' ' && c != '\t') {this.hl(); this.lW = '';}
this.pC = c; this.i++;}
return this.row.join('<br />');}
this.hl = function() { if (this.lW && kw.indexOf(this.lW) != -1) {this.row[this.r] = this.row[this.r].substr(0,this.row[this.r].lastIndexOf(this.lW)) + '<span class="keyword">' + this.lW + '<\/span>'; this.lW = '';} else if (this.lW && ob.indexOf(this.lW) != -1) {this.row[this.r] = this.row[this.r].substr(0,this.row[this.r].lastIndexOf(this.lW)) + '<span class="object">' + this.lW + '<\/span>'; this.lW = '';}}
this.wl = function() {this.row.push(''); this.r++; var i = 0; while (i < this.lvl) {this.row[this.r] += '&nbsp;&nbsp; '; i++;}}
}
if (typeof Array.prototype.indexOf == 'undefined') {Array.prototype.indexOf = function(item) {for (var i = 0; i < this.length; i++) {if ((typeof this[i] == typeof item) && (this[i] == item)) {return i;}}return -1;}}
function decode(el) {var jsformat = new JSfmt(el); res(jsformat.decode());}


function res(t) {var mh = screen.height-150; var mw = screen.width-20; TheResWin = window.open('','format','height=' + mh + ',width=' + mw + ',toolbar=no,directories=no,status=no,' + 'menubar=no,scrollbars=yes,resizable=yes'); TheResWin.document.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"\n"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http:\/\/www.w3.org\/1999\/xhtml">\n<head><title>Results<\/title><style type="text/css">#out {font: normal 10pt Courier,"Courier New",monospace; background: #f5f5f5;}\n.keyword {color:#0000ff;}\n.object {color:#ff00ff;}\n.literal {color:#cc9966;}\n.comment {color:#999999;}\n</style><\/head>\n<body ><p align="right"><a  href="#" onclick="self.close();return false;">Close Window<\/a><\/p><div id="out">'+t+'</div><p align="right"><a  href="#" onclick="self.close();return false;">Close Window<\/a><\/p><\/body><\/html>'); TheResWin.document.close(); TheResWin.moveTo(0,0); TheResWin.focus();}
