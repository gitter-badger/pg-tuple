'use strict';

var parseSingle = require('./single');
var parseArray = require('./array');

/*
 Regular tuples:
 [ '(1,hello)',
 '(2,"one, two three")',
 '(3,"last\\\\""")',
 '(4,"tricky"" a bit")',
 '(5,"Hi "" a bit")',
 '(6,"Hi "" a bit")',
 '(7,"\\\\ a bit")',
 '(8,"\\\\\\\\ a bit")',
 '(9,"\\\\s a bit")',
 '(10,"/s a bit")' ]

 * This is what we are getting for an array of tuples:
 * [ '{"(1,first)","(2,second)"}' ]
 *
 *This is what we are getting for composite tuples (tuple type used inside another tuple):
 * [ '(1,"(2,second)")' ]
 *
 * */

/*

 Examples:

 var res = single('(1,text)', (obj, data)=> {
 obj.a = parseInt(data[0]);
 obj.b = data[1];
 });

 var res = array('{"(1,first)","(2,second)"}', tuple=> {
 return single(tuple, (obj, data)=> {
 obj.a = parseInt(data[0]);
 obj.b = data[1];
 });
 });

 */

module.exports = {
    single: parseSingle,
    array: parseArray
};
