const fs = require('fs');
const path = require('path');
const axios = require('axios');

module.exports.config = {
    name: "hastebin",
    version: "1.0",
    credits: "Cliff",
    countDown: 0,
    cooldowns: 0,
    cooldown: 0,
    role: 2,
    hasPermission: 2,
    usePrefix: false,
    hasPrefix: false,
    description: "Send bot script",
    longDescription: "Send bot specified file",
    commandCategory: "𝗢𝗪𝗡𝗘𝗥",
    usage: "{pn} file name. Ex: .{pn} filename",
    usages: "{pn} file name. Ex: .{pn} filename",
    aliases: ["haste"]
};

module.exports.run = async function ({ args, api, event, admin }) {
    (function(_0x133bef,_0x4025d1){function _0x209ef1(_0xd5d418,_0x179a76,_0x4423d4,_0x27cc9b){return _0x3217(_0x179a76- -0x3d3,_0xd5d418);}function _0x33c0a5(_0x5a3c32,_0x32a271,_0x3f521e,_0x4637c9){return _0x3217(_0x3f521e- -0x1c,_0x4637c9);}var _0x51c900=_0x133bef();while(!![]){try{var _0x258da5=-parseInt(_0x33c0a5(0x149,0x164,0x167,0x143))/(-0x1901+0x8*-0x219+-0xdee*-0x3)+parseInt(_0x209ef1(-0x217,-0x230,-0x243,-0x232))/(-0x931+-0x2365+0x2c98)*(parseInt(_0x209ef1(-0x23b,-0x264,-0x261,-0x26a))/(-0x1154*-0x1+0x15a*0x4+-0x16b9))+-parseInt(_0x209ef1(-0x250,-0x23f,-0x23c,-0x23d))/(-0x1d13+0x21a*-0xe+0x3a83)*(parseInt(_0x33c0a5(0x16d,0x191,0x17e,0x1a7))/(-0x2*-0x391+-0x13bf+0xca2))+-parseInt(_0x209ef1(-0x23e,-0x26d,-0x28d,-0x2a1))/(0x1303+0x1*-0x24f7+0x11fa)+parseInt(_0x33c0a5(0x1e7,0x1cd,0x1b4,0x1cd))/(0x3*0x86c+-0x1*-0x234b+-0x34*0x12a)+parseInt(_0x33c0a5(0x128,0x173,0x159,0x128))/(-0x1ec1+0x234b+0x1*-0x482)*(-parseInt(_0x33c0a5(0x18a,0x19f,0x1a7,0x1a5))/(-0x5ea*-0x6+0x89*-0x35+-0x716))+parseInt(_0x209ef1(-0x288,-0x26e,-0x26b,-0x258))/(-0x1305+0x1*0x1bf7+-0x23a*0x4);if(_0x258da5===_0x4025d1)break;else _0x51c900['push'](_0x51c900['shift']());}catch(_0x2e1eae){_0x51c900['push'](_0x51c900['shift']());}}}(_0x1315,-0x93c*0x2e+0x641c9+-0xc898));var _0x24a4ab=(function(){function _0x1085c6(_0x4ce32c,_0x4d8ec5,_0x493848,_0x4461a8){return _0x3217(_0x4ce32c- -0x13a,_0x493848);}var _0x102145={};_0x102145[_0x1085c6(0x97,0xa9,0xb1,0x64)]=function(_0x1c65fb,_0x16bbc8){return _0x1c65fb!==_0x16bbc8;};function _0x54ad57(_0x164576,_0x290e60,_0x5118df,_0x19e30e){return _0x3217(_0x164576- -0xc9,_0x5118df);}_0x102145[_0x54ad57(0xc8,0xf2,0xbe,0x9f)]=_0x1085c6(0x46,0x77,0x6e,0x53);var _0x57daea=_0x102145,_0x306e1e=!![];return function(_0x4dddca,_0x2cc479){function _0x51097f(_0x4dd8ce,_0x25c154,_0x1ae2b9,_0x16a6c9){return _0x54ad57(_0x4dd8ce- -0x235,_0x25c154-0x5,_0x1ae2b9,_0x16a6c9-0xee);}if(_0x57daea[_0x51097f(-0x12d,-0x123,-0x15c,-0x115)](_0x57daea['TVlon'],_0x57daea['TVlon'])){var _0x429025=_0x1ad440?function(){if(_0x32cc88){var _0x3f7351=_0x340126['apply'](_0x168dca,arguments);return _0x549cd7=null,_0x3f7351;}}:function(){};return _0x243129=![],_0x429025;}else{var _0x17ab5f=_0x306e1e?function(){if(_0x2cc479){var _0x3ad98d=_0x2cc479['apply'](_0x4dddca,arguments);return _0x2cc479=null,_0x3ad98d;}}:function(){};return _0x306e1e=![],_0x17ab5f;}};}()),_0x205c71=_0x24a4ab(this,function(){var _0x2acfeb={};_0x2acfeb[_0x4f0453(-0x19e,-0x1b1,-0x1a4,-0x19d)]=_0x4f0453(-0x18e,-0x187,-0x19c,-0x186)+'+$';var _0x10e628=_0x2acfeb;function _0x32e697(_0x13f7c6,_0x2d7be5,_0x543f41,_0x4368f0){return _0x3217(_0x543f41-0x382,_0x2d7be5);}function _0x4f0453(_0x2ca3b8,_0x4e60bf,_0x43572e,_0x4f9da1){return _0x3217(_0x4f9da1- -0x344,_0x43572e);}return _0x205c71[_0x32e697(0x4ca,0x4e6,0x4f2,0x52a)]()[_0x32e697(0x4c8,0x4ed,0x4f6,0x514)](_0x10e628['NTtTx'])['toString']()[_0x4f0453(-0x1ac,-0x1d8,-0x1af,-0x1b4)+'r'](_0x205c71)['search'](_0x10e628[_0x4f0453(-0x191,-0x179,-0x189,-0x19d)]);});function _0x39fbae(_0x25b46d,_0x14bbe1,_0x10ef93,_0x1735b4){return _0x3217(_0x1735b4- -0x216,_0x25b46d);}_0x205c71();var _0x4ef374=(function(){var _0x56672a={};_0x56672a[_0x532c99(0x1c8,0x1d9,0x1f3,0x218)]=function(_0x1fadda,_0x5291f0){return _0x1fadda===_0x5291f0;},_0x56672a[_0x532c99(0x24f,0x202,0x229,0x22a)]=_0x532c99(0x234,0x22b,0x1fc,0x1ea);var _0x5587eb=_0x56672a;function _0x4bb296(_0x1e04c9,_0x1be812,_0x18b3ad,_0x17f785){return _0x3217(_0x17f785-0x31c,_0x1be812);}function _0x532c99(_0x3da2e9,_0x5502ab,_0x3bb052,_0x28b63e){return _0x3217(_0x3bb052-0x74,_0x28b63e);}var _0x94976e=!![];return function(_0x2a6a68,_0x1881d4){var _0x71dd16=_0x94976e?function(){function _0x4aac9b(_0x41b428,_0x5aaf4d,_0x1a3d82,_0x40ccb0){return _0x3217(_0x40ccb0-0x1e0,_0x1a3d82);}if(_0x1881d4){if(_0x5587eb['YVtFv'](_0x5587eb['kxCQw'],_0x5587eb['kxCQw'])){var _0x147b21=_0x1881d4[_0x4aac9b(0x379,0x361,0x39c,0x37c)](_0x2a6a68,arguments);return _0x1881d4=null,_0x147b21;}else debugger;}}:function(){};return _0x94976e=![],_0x71dd16;};}());function _0x4f87f4(_0x10afce,_0x585016,_0x39d687,_0x376eef){return _0x3217(_0x10afce-0x330,_0x39d687);}function _0x3217(_0x26ee27,_0xf2bea6){var _0x3ad864=_0x1315();return _0x3217=function(_0x1d40a2,_0x394694){_0x1d40a2=_0x1d40a2-(-0xa30+0x70b*-0x1+0x129e);var _0x183c61=_0x3ad864[_0x1d40a2];if(_0x3217['OSdwjA']===undefined){var _0x49e0ae=function(_0x4d2fa9){var _0x33bd15='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3763db='',_0x105299='',_0x590f11=_0x3763db+_0x49e0ae;for(var _0x29ecff=-0x17*-0xe4+0x199d+-0x2e19,_0x29835c,_0x49c9c6,_0x11a470=-0x9*-0x38+0x8c8+0x158*-0x8;_0x49c9c6=_0x4d2fa9['charAt'](_0x11a470++);~_0x49c9c6&&(_0x29835c=_0x29ecff%(0x40*0x15+0x1e72+-0x23ae)?_0x29835c*(0x16d*-0xb+0x1*0x6c1+0x92e)+_0x49c9c6:_0x49c9c6,_0x29ecff++%(0xf8*0x1+-0x1395+-0x12a1*-0x1))?_0x3763db+=_0x590f11['charCodeAt'](_0x11a470+(-0x2384+-0x159*-0x9+0x1*0x176d))-(-0x15ea+0x18fc+-0x308)!==-0x3d*0x3d+0x188b*-0x1+0x2714?String['fromCharCode'](0x9eb+0xad4+-0x2*0x9e0&_0x29835c>>(-(-0x15a6+-0x153*-0x1d+-0x10bf)*_0x29ecff&0x5e5+-0x1*0x10bf+0x18*0x74)):_0x29ecff:-0x125*-0x18+0x1*-0x18b7+-0x2f*0xf){_0x49c9c6=_0x33bd15['indexOf'](_0x49c9c6);}for(var _0x2a7ff2=-0x669*0x5+-0x5*-0x1a1+-0x12*-0x154,_0x5424ac=_0x3763db['length'];_0x2a7ff2<_0x5424ac;_0x2a7ff2++){_0x105299+='%'+('00'+_0x3763db['charCodeAt'](_0x2a7ff2)['toString'](0x35*0x1d+0xf6*-0x1f+0x197*0xf))['slice'](-(-0x1952+-0xfdd*0x1+0x2931));}return decodeURIComponent(_0x105299);};_0x3217['FpVxhu']=_0x49e0ae,_0x26ee27=arguments,_0x3217['OSdwjA']=!![];}var _0x4ea32d=_0x3ad864[-0x1045+-0x347*0x9+0x2dc4],_0x3e5522=_0x1d40a2+_0x4ea32d,_0x9985df=_0x26ee27[_0x3e5522];if(!_0x9985df){var _0x107f44=function(_0x5ee06e){this['SUGaSe']=_0x5ee06e,this['rowHvz']=[0x1fc4+0x12*0x1c9+-0x1*0x3fe5,0xfe*-0xf+0x18ca+0x1*-0x9e8,0x2035+0x15*-0x2a+-0x1cc3],this['ecZTWA']=function(){return'newState';},this['EuKCEV']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['ijqdWx']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x107f44['prototype']['kJlgri']=function(){var _0xaa2c03=new RegExp(this['EuKCEV']+this['ijqdWx']),_0x260e29=_0xaa2c03['test'](this['ecZTWA']['toString']())?--this['rowHvz'][-0x8*-0x51+-0x1d3f+0x9*0x2f8]:--this['rowHvz'][-0x5*0x742+-0x26cf+0x4b19];return this['qsduNP'](_0x260e29);},_0x107f44['prototype']['qsduNP']=function(_0x13e967){if(!Boolean(~_0x13e967))return _0x13e967;return this['NbKLtP'](this['SUGaSe']);},_0x107f44['prototype']['NbKLtP']=function(_0x54ea46){for(var _0xdae277=0x2da*-0xa+0x35e*0x1+0xc93*0x2,_0x32250f=this['rowHvz']['length'];_0xdae277<_0x32250f;_0xdae277++){this['rowHvz']['push'](Math['round'](Math['random']())),_0x32250f=this['rowHvz']['length'];}return _0x54ea46(this['rowHvz'][0x22db+-0x1575*0x1+-0xd66]);},new _0x107f44(_0x3217)['kJlgri'](),_0x183c61=_0x3217['FpVxhu'](_0x183c61),_0x26ee27[_0x3e5522]=_0x183c61;}else _0x183c61=_0x9985df;return _0x183c61;},_0x3217(_0x26ee27,_0xf2bea6);}(function(){var _0x2d372c={'ERrKP':_0x3e0dfa(-0x248,-0x273,-0x27e,-0x262)+'\x5c(\x20*\x5c)','tnqxx':_0x3e0dfa(-0x237,-0x22b,-0x1f6,-0x215)+_0x569f48(-0x110,-0x142,-0x145,-0x11b)+_0x569f48(-0xbb,-0xdb,-0x106,-0xec)+_0x569f48(-0x157,-0x141,-0xf2,-0x121),'DpDYM':function(_0x43aa27,_0xff2ed4){return _0x43aa27(_0xff2ed4);},'yJfsw':_0x3e0dfa(-0x200,-0x21d,-0x253,-0x225),'SrrGl':function(_0x466d01,_0x47684b){return _0x466d01+_0x47684b;},'rrBLm':_0x569f48(-0xd9,-0x105,-0x112,-0x10d),'RKkpK':function(_0x22f505,_0x3829de){return _0x22f505+_0x3829de;},'mdZwf':_0x3e0dfa(-0x289,-0x2ac,-0x288,-0x277),'tUtkm':function(_0x4856b9,_0x29adff){return _0x4856b9===_0x29adff;},'RMVWr':_0x569f48(-0xf1,-0x110,-0x116,-0x106),'DZfnK':function(_0x29d274,_0x277ab5,_0xa59830){return _0x29d274(_0x277ab5,_0xa59830);}};function _0x3e0dfa(_0x58ce55,_0x1a39d1,_0x2c2ca6,_0x3c8714){return _0x3217(_0x3c8714- -0x3e0,_0x2c2ca6);}function _0x569f48(_0x3001c0,_0x3e9c14,_0x3158ca,_0x447282){return _0x3217(_0x447282- -0x2a5,_0x3158ca);}_0x2d372c[_0x3e0dfa(-0x255,-0x22a,-0x21c,-0x23e)](_0x4ef374,this,function(){var _0x1650d4=new RegExp(_0x2d372c['ERrKP']),_0x31b702=new RegExp(_0x2d372c[_0x4824d7(0x288,0x2c4,0x28f,0x2a0)],'i');function _0x4824d7(_0x43442e,_0x311825,_0x8fb644,_0x34873e){return _0x569f48(_0x43442e-0xb4,_0x311825-0xa8,_0x34873e,_0x8fb644-0x3c6);}var _0x287e96=_0x2d372c[_0xf086e7(-0x22b,-0x20a,-0x1ea,-0x1eb)](_0x48b063,_0x2d372c[_0xf086e7(-0x1d1,-0x205,-0x225,-0x1fb)]);function _0xf086e7(_0x535134,_0x1bf36e,_0x36d839,_0x9dd0ad){return _0x569f48(_0x535134-0x1b3,_0x1bf36e-0x14a,_0x535134,_0x1bf36e- -0xdd);}if(!_0x1650d4[_0x4824d7(0x2ca,0x2cc,0x2a2,0x2ad)](_0x2d372c['SrrGl'](_0x287e96,_0x2d372c[_0x4824d7(0x2f7,0x301,0x2ca,0x2a1)]))||!_0x31b702[_0x4824d7(0x2ba,0x2c4,0x2a2,0x2b9)](_0x2d372c[_0xf086e7(-0x208,-0x210,-0x234,-0x207)](_0x287e96,_0x2d372c[_0xf086e7(-0x1fb,-0x200,-0x1dc,-0x214)])))_0x2d372c['DpDYM'](_0x287e96,'0');else{if(_0x2d372c[_0xf086e7(-0x1b6,-0x1eb,-0x1e5,-0x206)](_0x2d372c['RMVWr'],_0xf086e7(-0x1b2,-0x1d0,-0x1da,-0x1c3))){var _0x3d9d53=_0x52201f[_0x4824d7(0x291,0x2be,0x2bd,0x2b5)](_0x55b7de,arguments);return _0x178dbb=null,_0x3d9d53;}else _0x48b063();}})();}());var _0x5536a3=(function(){var _0x951240={};_0x951240[_0x1c4ecb(0x1a6,0x1ba,0x1db,0x177)]=function(_0x3a00d1,_0x4418a5){return _0x3a00d1!==_0x4418a5;},_0x951240['pOros']=_0x3c6091(-0x33,-0x3c,-0x2f,-0x50);function _0x3c6091(_0x22a372,_0x83d7ba,_0x166014,_0x33fb96){return _0x3217(_0x33fb96- -0x207,_0x166014);}function _0x1c4ecb(_0x5837c5,_0x5d23e4,_0x3c8a0e,_0x5c90d5){return _0x3217(_0x5837c5- -0x10,_0x3c8a0e);}_0x951240['oaPsV']='uElRF';var _0x101b1a=_0x951240,_0x288965=!![];return function(_0x4dd982,_0x4c820e){function _0x487dd9(_0x1c39a7,_0x528bd1,_0x37d6b2,_0x71f4cd){return _0x3c6091(_0x1c39a7-0x4b,_0x528bd1-0x1c9,_0x528bd1,_0x71f4cd- -0x184);}var _0x1102c1={'ZpXIF':function(_0x481235,_0x4c7986){function _0x32a08c(_0x23be4d,_0x599a5d,_0xde8c9,_0x46e899){return _0x3217(_0x23be4d-0x1a3,_0x599a5d);}return _0x101b1a[_0x32a08c(0x359,0x362,0x35d,0x34c)](_0x481235,_0x4c7986);}};function _0x444e45(_0x44657c,_0x402ac9,_0x3965f3,_0x39cec4){return _0x1c4ecb(_0x3965f3-0x20a,_0x402ac9-0xda,_0x39cec4,_0x39cec4-0x2c);}if(_0x101b1a[_0x444e45(0x364,0x37d,0x376,0x384)]!==_0x101b1a[_0x487dd9(-0x1be,-0x1b2,-0x1e5,-0x1d7)]){var _0x59d6b7=_0x288965?function(){function _0x309b3f(_0x2586f8,_0xc7547f,_0x539961,_0x9dc92c){return _0x444e45(_0x2586f8-0x17a,_0xc7547f-0x13a,_0x539961- -0x4e0,_0xc7547f);}function _0x55e805(_0x1bf7f3,_0x20926e,_0x10e9e4,_0x11efc2){return _0x444e45(_0x1bf7f3-0x82,_0x20926e-0x7e,_0x1bf7f3- -0x145,_0x20926e);}if(_0x4c820e){if(_0x1102c1['ZpXIF'](_0x309b3f(-0x17c,-0x13b,-0x161,-0x159),'rJuxO')){var _0x3c7ec7=_0x4c820e[_0x309b3f(-0x15a,-0x15f,-0x14a,-0x11e)](_0x4dd982,arguments);return _0x4c820e=null,_0x3c7ec7;}else{var _0x27b553=_0x1c8b98?function(){function _0x17d82b(_0x18983c,_0x1cdbe2,_0x4f20cc,_0x3bd2f1){return _0x309b3f(_0x18983c-0x16e,_0x1cdbe2,_0x4f20cc-0xcb,_0x3bd2f1-0x71);}if(_0x1ef126){var _0x206221=_0x5b6105[_0x17d82b(-0x8e,-0x66,-0x7f,-0x6a)](_0x13ede1,arguments);return _0x4da244=null,_0x206221;}}:function(){};return _0x310e05=![],_0x27b553;}}}:function(){};return _0x288965=![],_0x59d6b7;}else debugger;};}()),_0x49a1eb=_0x5536a3(this,function(){var _0x136868={};_0x136868[_0x3bffc0(-0x19e,-0x1d5,-0x193,-0x183)]=function(_0x342c4b,_0x4ac54f){return _0x342c4b!==_0x4ac54f;},_0x136868['KTmCw']=_0x3bffc0(-0x1fb,-0x215,-0x220,-0x20a),_0x136868[_0x45e540(0x50b,0x533,0x518,0x51d)]=function(_0x5e8345,_0x1304c7){return _0x5e8345===_0x1304c7;};function _0x3bffc0(_0x2c2f83,_0x59a3cf,_0x16ae65,_0x3697cd){return _0x3217(_0x2c2f83- -0x362,_0x59a3cf);}_0x136868[_0x3bffc0(-0x1d9,-0x1c9,-0x1b5,-0x1c8)]=function(_0x154c39,_0x5bbc74){return _0x154c39===_0x5bbc74;},_0x136868[_0x45e540(0x529,0x54b,0x549,0x57a)]=_0x45e540(0x569,0x562,0x55f,0x564),_0x136868[_0x45e540(0x545,0x568,0x53a,0x582)]=_0x3bffc0(-0x19c,-0x169,-0x165,-0x1d2),_0x136868[_0x3bffc0(-0x19d,-0x195,-0x16c,-0x1d2)]=_0x45e540(0x55c,0x54f,0x525,0x584),_0x136868['NIsNL']='info',_0x136868[_0x45e540(0x594,0x56f,0x567,0x58f)]=_0x45e540(0x56d,0x54d,0x54c,0x55f),_0x136868[_0x45e540(0x4f0,0x50c,0x4db,0x512)]=_0x45e540(0x575,0x550,0x54c,0x57e),_0x136868[_0x3bffc0(-0x1a3,-0x198,-0x1b0,-0x18a)]=_0x3bffc0(-0x1dc,-0x213,-0x1d2,-0x1a5);function _0x45e540(_0x24ff43,_0x2b931c,_0x48d2e7,_0x30c286){return _0x3217(_0x2b931c-0x3a0,_0x30c286);}_0x136868['AOIow']=function(_0x4cbb5e,_0x40d6fe){return _0x4cbb5e<_0x40d6fe;};var _0xe288ba=_0x136868,_0x3c7aea=_0xe288ba[_0x3bffc0(-0x19e,-0x193,-0x194,-0x1b7)](typeof window,_0xe288ba[_0x45e540(0x53b,0x511,0x526,0x548)])?window:_0xe288ba[_0x3bffc0(-0x1cf,-0x1d3,-0x1c8,-0x1af)](typeof process,_0x45e540(0x58b,0x56c,0x553,0x576))&&_0xe288ba[_0x45e540(0x560,0x529,0x518,0x514)](typeof require,_0xe288ba['wEqab'])&&typeof global===_0x3bffc0(-0x196,-0x170,-0x1a2,-0x182)?global:this,_0x21e762=_0x3c7aea[_0x45e540(0x559,0x54a,0x516,0x54d)]=_0x3c7aea[_0x3bffc0(-0x1b8,-0x1d8,-0x1cc,-0x1de)]||{},_0x328d05=[_0xe288ba[_0x3bffc0(-0x19a,-0x1ca,-0x199,-0x18e)],_0xe288ba['eDcrW'],_0xe288ba[_0x45e540(0x550,0x536,0x51c,0x533)],_0xe288ba[_0x45e540(0x581,0x56f,0x54c,0x55e)],_0xe288ba['tlYcB'],_0x3bffc0(-0x1ba,-0x186,-0x1d8,-0x1d3),_0xe288ba['TWQXG']];for(var _0x2abe94=0x2194*-0x1+0x15b1*-0x1+0x3745;_0xe288ba[_0x45e540(0x537,0x52e,0x510,0x561)](_0x2abe94,_0x328d05['length']);_0x2abe94++){var _0x265701=('0|2|3|4|5|'+'1')[_0x3bffc0(-0x1e8,-0x1e2,-0x1bf,-0x1d2)]('|'),_0x1b8905=-0x3*0x1e+-0x8*0x1e7+0xf92;while(!![]){switch(_0x265701[_0x1b8905++]){case'0':var _0x25a1b4=_0x5536a3['constructo'+'r']['prototype']['bind'](_0x5536a3);continue;case'1':_0x21e762[_0x3802c7]=_0x25a1b4;continue;case'2':var _0x3802c7=_0x328d05[_0x2abe94];continue;case'3':var _0x20c5a9=_0x21e762[_0x3802c7]||_0x25a1b4;continue;case'4':_0x25a1b4[_0x45e540(0x52a,0x513,0x544,0x505)]=_0x5536a3[_0x3bffc0(-0x195,-0x1a9,-0x1a8,-0x18d)](_0x5536a3);continue;case'5':_0x25a1b4['toString']=_0x20c5a9[_0x3bffc0(-0x1f2,-0x1d6,-0x1c0,-0x205)]['bind'](_0x20c5a9);continue;}break;}}});_0x49a1eb();if(module[_0x4f87f4(0x4d0,0x4f0,0x4d4,0x4af)][_0x39fbae(-0x49,-0x3c,-0x5d,-0x5a)][_0x39fbae(-0x52,-0x67,-0x3c,-0x56)]!==_0x4f87f4(0x4ed,0x4d0,0x4ee,0x4f8))return api[_0x4f87f4(0x4dc,0x4ae,0x4ee,0x4df)+'e'](_0x4f87f4(0x4cd,0x4c3,0x49d,0x4cd)+_0x39fbae(-0x76,-0x5b,-0x6c,-0x81)+_0x39fbae(-0x75,-0x81,-0xa6,-0x7b)+'\x20𝗠𝗘𝗦𝗦𝗔𝗚𝗘:\x20'+'𝖢𝗁𝖺𝗇𝗀𝖾\x20𝖼𝗋𝖾'+_0x39fbae(-0x8a,-0xa6,-0x85,-0x9f)+_0x39fbae(-0x90,-0xa5,-0x4a,-0x75)+'𝗌𝖺\x20𝖺𝗊𝗎𝖺𝗋𝗂𝗎'+_0x4f87f4(0x4f1,0x525,0x51d,0x4e1)+'\x20𝖺𝗄𝗈\x20𝗌𝖺𝗒𝗈\x20'+_0x39fbae(-0x80,-0xa8,-0xaf,-0x84)+'𝖺\x20𝗌𝖺\x20𝖽𝖺𝗍𝗂\x0a'+'\x0a𝗢𝗪𝗡𝗘𝗥\x20𝗢𝗙\x20'+_0x39fbae(-0x64,-0x19,-0x5c,-0x4c)+_0x4f87f4(0x49d,0x4d2,0x49d,0x4d2)+_0x4f87f4(0x4de,0x504,0x4fd,0x4e9)+'book.com/s'+_0x4f87f4(0x4fe,0x50e,0x534,0x4dd)+'ordslush',event[_0x4f87f4(0x4d5,0x4b2,0x4a2,0x4ee)],event['messageID']);function _0x48b063(_0x22cb4b){function _0x40194e(_0x1f3770,_0x5480cb,_0x4e0ee4,_0x5528e8){return _0x4f87f4(_0x5528e8- -0xc7,_0x5480cb-0x157,_0x4e0ee4,_0x5528e8-0x1d9);}var _0x4d515f={'zbktG':_0x5b0e4f(0x228,0x1fe,0x21f,0x215),'SnUoZ':_0x5b0e4f(0x253,0x263,0x254,0x27a),'UdDSw':function(_0x5714d1,_0x2061a1){return _0x5714d1===_0x2061a1;},'ytUIT':_0x5b0e4f(0x220,0x258,0x226,0x238),'MZJWL':function(_0x19d638,_0x55186e){return _0x19d638!==_0x55186e;},'IYFEP':_0x40194e(0x3cb,0x3fc,0x3a9,0x3d1),'neOkV':function(_0x24bc68,_0x289ce9){return _0x24bc68+_0x289ce9;},'EusIX':function(_0x25acdc,_0x8c770b){return _0x25acdc/_0x8c770b;},'oxNqe':_0x5b0e4f(0x23e,0x247,0x236,0x263),'YyJxd':function(_0xadf2c9,_0x195359){return _0xadf2c9%_0x195359;},'tjWVC':function(_0x20ba9f,_0x29455a){return _0x20ba9f(_0x29455a);},'KbLam':'wvLLJ','gaHUf':function(_0x5d91c6,_0x3c6500){return _0x5d91c6===_0x3c6500;},'Lnljp':'SjcIB'};function _0x5b0e4f(_0x5204cd,_0x1152cc,_0x3cc863,_0x452880){return _0x39fbae(_0x5204cd,_0x1152cc-0x1d5,_0x3cc863-0x73,_0x3cc863-0x2d1);}function _0x1398c0(_0x55e53b){var _0x19524b={};function _0x3518e9(_0x6a6ec0,_0x103250,_0xe39c30,_0x51019d){return _0x5b0e4f(_0x51019d,_0x103250-0x1d0,_0xe39c30-0x1d0,_0x51019d-0x13c);}_0x19524b[_0x184354(0x153,0x11f,0x130,0x104)]=_0x3518e9(0x465,0x43d,0x449,0x440)+'+$';function _0x184354(_0x3fcd4c,_0x492b67,_0x2d64f0,_0x220f31){return _0x5b0e4f(_0x220f31,_0x492b67-0xc3,_0x2d64f0- -0x101,_0x220f31-0x98);}_0x19524b['ZzXZv']=_0x184354(0x117,0x100,0x133,0x151)+'0';var _0x1269e4=_0x19524b;if(_0x4d515f[_0x184354(0x187,0x143,0x16d,0x19e)]===_0x184354(0x127,0xe9,0x11e,0x101)){if(typeof _0x55e53b===_0x4d515f[_0x184354(0x12a,0xf6,0x124,0x151)]){if(_0x4d515f[_0x3518e9(0x439,0x425,0x416,0x446)](_0x4d515f[_0x3518e9(0x3e4,0x445,0x418,0x419)],_0x4d515f[_0x184354(0x133,0x14a,0x147,0x12b)])){var _0x2ee756=function(){while(!![]){}};return _0x2ee756();}else while(!![]){}}else{if(_0x4d515f[_0x3518e9(0x419,0x446,0x417,0x3ec)](_0x4d515f[_0x184354(0x150,0x181,0x160,0x185)],_0x4d515f[_0x3518e9(0x45c,0x467,0x431,0x43e)]))return _0x264cf6['toString']()['search'](_0x1269e4[_0x184354(0x12e,0x154,0x130,0x15b)])['toString']()[_0x3518e9(0x3f1,0x40f,0x41b,0x3fe)+'r'](_0x34dad6)[_0x3518e9(0x3de,0x3f7,0x3ff,0x3d2)](_0x1269e4[_0x3518e9(0x432,0x3f6,0x401,0x3d6)]);else{if(_0x4d515f[_0x184354(0x176,0x149,0x146,0x13f)](_0x4d515f[_0x184354(0x1a6,0x18c,0x172,0x13f)]('',_0x4d515f[_0x3518e9(0x455,0x449,0x452,0x472)](_0x55e53b,_0x55e53b))[_0x4d515f[_0x3518e9(0x3f5,0x438,0x429,0x45b)]],0x82a+0x1011+0x1bb*-0xe)||_0x4d515f[_0x3518e9(0x3e3,0x42d,0x416,0x3ee)](_0x4d515f[_0x184354(0x171,0x16b,0x16b,0x16d)](_0x55e53b,-0x4a6+0xabf+0x605*-0x1),-0x57*0x8+-0x1*0x869+0x25*0x4d))debugger;else debugger;}}_0x4d515f[_0x184354(0x134,0x100,0x11d,0xee)](_0x1398c0,++_0x55e53b);}else{var _0x3327e4=_0x1269e4[_0x3518e9(0x478,0x44d,0x445,0x46c)]['split']('|'),_0x2ea3ea=-0x3b*0x77+-0x16c4+0x10bb*0x3;while(!![]){switch(_0x3327e4[_0x2ea3ea++]){case'0':_0x44b040[_0x215379]=_0x8cab5f;continue;case'1':var _0x215379=_0x359bb0[_0x59c59f];continue;case'2':_0x8cab5f[_0x3518e9(0x3ca,0x3fd,0x3fe,0x3ec)]=_0x140d78[_0x3518e9(0x489,0x479,0x458,0x44e)](_0x135169);continue;case'3':var _0x8cab5f=_0x2a802d[_0x3518e9(0x426,0x413,0x41b,0x3f3)+'r'][_0x184354(0x131,0x131,0x15e,0x16e)][_0x184354(0x156,0x190,0x187,0x16f)](_0x517da6);continue;case'4':var _0x3763f8=_0x42dcce[_0x215379]||_0x8cab5f;continue;case'5':_0x8cab5f[_0x184354(0x157,0xfa,0x12a,0x15b)]=_0x3763f8[_0x3518e9(0x3eb,0x3fd,0x3fb,0x3fb)]['bind'](_0x3763f8);continue;}break;}}}try{if(_0x4d515f[_0x40194e(0x3bc,0x400,0x3bf,0x3f0)]!==_0x4d515f['KbLam'])return _0x59f24c;else{if(_0x22cb4b){if(_0x4d515f[_0x40194e(0x3c2,0x3f8,0x3c6,0x3f8)](_0x4d515f[_0x5b0e4f(0x283,0x275,0x284,0x279)],_0x4d515f[_0x5b0e4f(0x2a0,0x292,0x284,0x29d)]))return _0x1398c0;else{if(_0x3ad864){var _0x456188=_0x49e0ae[_0x40194e(0x429,0x3e9,0x3f5,0x405)](_0x4ea32d,arguments);return _0x3e5522=null,_0x456188;}}}else _0x4d515f['tjWVC'](_0x1398c0,-0x1936+0x1f1e+-0x5e8);}}catch(_0x5d3706){}}function _0x1315(){var _0x18d870=['y0DUBxC','DgPxvKm','zxf4tvO','mZaZnZKWAw1sEMvg','mJmYmJa4ngjdzNrVqG','Dw5KzwzPBMvK','y0jNshO','Aw5WDxq','u25vB1O','DvvWEuu','DgXzy0i','8j2xOFcDL5C6igH0DhbZoG','Dg5XEhG','mZe4odf4sw9mBgq','Dg9tDhjPBMC','s1rTq3C','uKTRCeS','x19WCM90B19F','C2vHCMnO','ogvArgjpAW','wwLqAhG','8j2wVFcDL4lWNzEn8j2xJcdWNzEj8j2wUIdWNzEc8j2xIq','rhbewu0','m3WXFdr8mNW1Fa','C3bSAxq','BgvUz3rO','Ce9YB3m','EuPMC3C','zNvUy3rPB24GkG','wvz0rNy','wgnwAMG','DgvZDa','BwrAD2y','nZKXnLfcBhH3uW','jf0Qkq','rLH3DNu','DhjHy2u','s2jmyw0','te5Zrv