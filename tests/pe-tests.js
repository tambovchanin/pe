var monoCorlib;
var tests;
(function (tests) {
    var strlist = monoCorlib;
    var byteCount = 0;
    for (var i = 0; i < strlist.length; i++) {
        strlist[i] = atob(strlist[i]);
        byteCount += strlist[i].length;
    }
    var buffer;
    ;
    var binary;
    if (typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined') {
        buffer = new ArrayBuffer(byteCount);
        binary = new Uint8Array(buffer);
    }
    else {
        buffer = (binary = []);
    }
    var pos = 0;
    for (var i = 0; i < strlist.length; i++) {
        for (var j = 0; j < strlist[i].length; j++) {
            binary[pos] = strlist[i].charCodeAt(j);
            pos++;
        }
    }
    monoCorlib = buffer;
})(tests || (tests = {}));
/// <reference path="../lib/pe.d.ts"/>
var sample64Exe;
(function (sample64Exe) {
    var sampleBuf = [77, 90, 144, , 3, , , , 4, , , , 255, 255, , , 184, , , , , , , , 64, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 128, , , , 14, 31, 186, 14, , 180, 9, 205, 33, 184, 1, 76, 205, 33, 84, 104, 105, 115, 32, 112, 114, 111, 103, 114, 97, 109, 32, 99, 97, 110, 110, 111, 116, 32, 98, 101, 32, 114, 117, 110, 32, 105, 110, 32, 68, 79, 83, 32, 109, 111, 100, 101, 46, 13, 13, 10, 36, , , , , , , , 80, 69, , , 100, 134, 2, , 160, 22, 193, 80, , , , , , , , , 240, , 34, , 11, 2, 11, , , 4, , , , 6, , , , , , , , , , , , 32, , , , , , 64, 1, , , , , 32, , , , 2, , , 4, , , , , , , , 4, , , , , , , , , 96, , , , 2, , , , , , , 3, , 64, 133, , , 64, , , , , , , 64, , , , , , , , , 16, , , , , , , 32, , , , , , , , , , , 16, , , , , , , , , , , , , , , , , , , , , 64, , , 224, 4, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 32, , , 72, , , , , , , , , , , , 46, 116, 101, 120, 116, , , , 232, 2, , , , 32, , , , 4, , , , 2, , , , , , , , , , , , , , , 32, , , 96, 46, 114, 115, 114, 99, , , , 224, 4, , , , 64, , , , 6, , , , 6, , , , , , , , , , , , , , , 64, , , 64, 46, 114, 101, 108, 111, 99, , , , , , , , 96, , , , , , , , 12, , , , , , , , , , , , , , , 64, , , 66, 72, , , , 2, , 5, , 104, 32, , , 128, 2, , , 1, , , , 1, , , 6, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 54, , 114, 1, , , 112, 40, 3, , , 10, , 42, 30, 2, 40, 4, , , 10, 42, , , 66, 83, 74, 66, 1, , 1, , , , , , 12, , , , 118, 52, 46, 48, 46, 51, 48, 51, 49, 57, , , , , 5, , 108, , , , 228, , , , 35, 126, , , 80, 1, , , 188, , , , 35, 83, 116, 114, 105, 110, 103, 115, , , , , 12, 2, , , 32, , , , 35, 85, 83, , 44, 2, , , 16, , , , 35, 71, 85, 73, 68, , , , 60, 2, , , 68, , , , 35, 66, 108, 111, 98, , , , , , , , 2, , , 1, 71, 20, , , 9, , , , , 250, 37, 51, , 22, , , 1, , , , 4, , , , 2, , , , 2, , , , 4, , , , 2, , , , 1, , , , 1, , , , , , 10, , 1, , , , , , 6, , 47, , 40, , 6, , 97, , 65, , 6, , 129, , 65, , 6, , 168, , 40, , , , , , 1, , , , , , 1, , 1, , , , 16, , 23, , , , 5, , 1, , 1, , 80, 32, , , , , 145, , 54, , 10, , 1, , 94, 32, , , , , 134, 24, 59, , 14, , 1, , 17, , 59, , 18, , 25, , 59, , 14, , 33, , 176, , 23, , 9, , 59, , 14, , 46, , 11, , 28, , 46, , 19, , 37, , 4, 128, , , , , , , , , , , , , , , , , 159, , , , 4, , , , , , , , , , , , 1, , 31, , , , , , , , , , , 60, 77, 111, 100, 117, 108, 101, 62, , 115, 97, 109, 112, 108, 101, 54, 52, 46, 101, 120, 101, , 80, 114, 111, 103, 114, 97, 109, , 109, 115, 99, 111, 114, 108, 105, 98, , 83, 121, 115, 116, 101, 109, , 79, 98, 106, 101, 99, 116, , 77, 97, 105, 110, , 46, 99, 116, 111, 114, , 83, 121, 115, 116, 101, 109, 46, 82, 117, 110, 116, 105, 109, 101, 46, 67, 111, 109, 112, 105, 108, 101, 114, 83, 101, 114, 118, 105, 99, 101, 115, , 67, 111, 109, 112, 105, 108, 97, 116, 105, 111, 110, 82, 101, 108, 97, 120, 97, 116, 105, 111, 110, 115, 65, 116, 116, 114, 105, 98, 117, 116, 101, , 82, 117, 110, 116, 105, 109, 101, 67, 111, 109, 112, 97, 116, 105, 98, 105, 108, 105, 116, 121, 65, 116, 116, 114, 105, 98, 117, 116, 101, , 115, 97, 109, 112, 108, 101, 54, 52, , 67, 111, 110, 115, 111, 108, 101, , 87, 114, 105, 116, 101, 76, 105, 110, 101, , , , , 27, 72, , 101, , 108, , 108, , 111, , 44, , 32, , 87, , 111, , 114, , 108, , 100, , 33, , , , , , 202, 173, 71, 97, 31, 64, 83, 71, 138, 19, 175, 127, 84, 43, 181, 190, , 8, 183, 122, 92, 86, 25, 52, 224, 137, 3, , , 1, 3, 32, , 1, 4, 32, 1, 1, 8, 4, , 1, 1, 14, 8, 1, , 8, , , , , , 30, 1, , 1, , 84, 2, 22, 87, 114, 97, 112, 78, 111, 110, 69, 120, 99, 101, 112, 116, 105, 111, 110, 84, 104, 114, 111, 119, 115, 1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 2, , 16, , , , 32, , , 128, 24, , , , 56, , , 128, , , , , , , , , , , , , , , 1, , 1, , , , 80, , , 128, , , , , , , , , , , , , , , 1, , 1, , , , 104, , , 128, , , , , , , , , , , , , , , 1, , , , , , 128, , , , , , , , , , , , , , , , , , 1, , , , , , 144, , , , 160, 64, , , 76, 2, , , , , , , , , , , 240, 66, , , 234, 1, , , , , , , , , , , 76, 2, 52, , , , 86, , 83, , 95, , 86, , 69, , 82, , 83, , 73, , 79, , 78, , 95, , 73, , 78, , 70, , 79, , , , , , 189, 4, 239, 254, , , 1, , , , , , , , , , , , , , , , , , 63, , , , , , , , 4, , , , 1, , , , , , , , , , , , , , , , 68, , , , 1, , 86, , 97, , 114, , 70, , 105, , 108, , 101, , 73, , 110, , 102, , 111, , , , , , 36, , 4, , , , 84, , 114, , 97, , 110, , 115, , 108, , 97, , 116, , 105, , 111, , 110, , , , , , , , 176, 4, 172, 1, , , 1, , 83, , 116, , 114, , 105, , 110, , 103, , 70, , 105, , 108, , 101, , 73, , 110, , 102, , 111, , , , 136, 1, , , 1, , 48, , 48, , 48, , 48, , 48, , 52, , 98, , 48, , , , 44, , 2, , 1, , 70, , 105, , 108, , 101, , 68, , 101, , 115, , 99, , 114, , 105, , 112, , 116, , 105, , 111, , 110, , , , , , 32, , , , 48, , 8, , 1, , 70, , 105, , 108, , 101, , 86, , 101, , 114, , 115, , 105, , 111, , 110, , , , , , 48, , 46, , 48, , 46, , 48, , 46, , 48, , , , 60, , 13, , 1, , 73, , 110, , 116, , 101, , 114, , 110, , 97, , 108, , 78, , 97, , 109, , 101, , , , 115, , 97, , 109, , 112, , 108, , 101, , 54, , 52, , 46, , 101, , 120, , 101, , , , , , 40, , 2, , 1, , 76, , 101, , 103, , 97, , 108, , 67, , 111, , 112, , 121, , 114, , 105, , 103, , 104, , 116, , , , 32, , , , 68, , 13, , 1, , 79, , 114, , 105, , 103, , 105, , 110, , 97, , 108, , 70, , 105, , 108, , 101, , 110, , 97, , 109, , 101, , , , 115, , 97, , 109, , 112, , 108, , 101, , 54, , 52, , 46, , 101, , 120, , 101, , , , , , 52, , 8, , 1, , 80, , 114, , 111, , 100, , 117, , 99, , 116, , 86, , 101, , 114, , 115, , 105, , 111, , 110, , , , 48, , 46, , 48, , 46, , 48, , 46, , 48, , , , 56, , 8, , 1, , 65, , 115, , 115, , 101, , 109, , 98, , 108, , 121, , 32, , 86, , 101, , 114, , 115, , 105, , 111, , 110, , , , 48, , 46, , 48, , 46, , 48, , 46, , 48, , , , , , , , 239, 187, 191, 60, 63, 120, 109, 108, 32, 118, 101, 114, 115, 105, 111, 110, 61, 34, 49, 46, 48, 34, 32, 101, 110, 99, 111, 100, 105, 110, 103, 61, 34, 85, 84, 70, 45, 56, 34, 32, 115, 116, 97, 110, 100, 97, 108, 111, 110, 101, 61, 34, 121, 101, 115, 34, 63, 62, 13, 10, 60, 97, 115, 115, 101, 109, 98, 108, 121, 32, 120, 109, 108, 110, 115, 61, 34, 117, 114, 110, 58, 115, 99, 104, 101, 109, 97, 115, 45, 109, 105, 99, 114, 111, 115, 111, 102, 116, 45, 99, 111, 109, 58, 97, 115, 109, 46, 118, 49, 34, 32, 109, 97, 110, 105, 102, 101, 115, 116, 86, 101, 114, 115, 105, 111, 110, 61, 34, 49, 46, 48, 34, 62, 13, 10, 32, 32, 60, 97, 115, 115, 101, 109, 98, 108, 121, 73, 100, 101, 110, 116, 105, 116, 121, 32, 118, 101, 114, 115, 105, 111, 110, 61, 34, 49, 46, 48, 46, 48, 46, 48, 34, 32, 110, 97, 109, 101, 61, 34, 77, 121, 65, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 46, 97, 112, 112, 34, 47, 62, 13, 10, 32, 32, 60, 116, 114, 117, 115, 116, 73, 110, 102, 111, 32, 120, 109, 108, 110, 115, 61, 34, 117, 114, 110, 58, 115, 99, 104, 101, 109, 97, 115, 45, 109, 105, 99, 114, 111, 115, 111, 102, 116, 45, 99, 111, 109, 58, 97, 115, 109, 46, 118, 50, 34, 62, 13, 10, 32, 32, 32, 32, 60, 115, 101, 99, 117, 114, 105, 116, 121, 62, 13, 10, 32, 32, 32, 32, 32, 32, 60, 114, 101, 113, 117, 101, 115, 116, 101, 100, 80, 114, 105, 118, 105, 108, 101, 103, 101, 115, 32, 120, 109, 108, 110, 115, 61, 34, 117, 114, 110, 58, 115, 99, 104, 101, 109, 97, 115, 45, 109, 105, 99, 114, 111, 115, 111, 102, 116, 45, 99, 111, 109, 58, 97, 115, 109, 46, 118, 51, 34, 62, 13, 10, 32, 32, 32, 32, 32, 32, 32, 32, 60, 114, 101, 113, 117, 101, 115, 116, 101, 100, 69, 120, 101, 99, 117, 116, 105, 111, 110, 76, 101, 118, 101, 108, 32, 108, 101, 118, 101, 108, 61, 34, 97, 115, 73, 110, 118, 111, 107, 101, 114, 34, 32, 117, 105, 65, 99, 99, 101, 115, 115, 61, 34, 102, 97, 108, 115, 101, 34, 47, 62, 13, 10, 32, 32, 32, 32, 32, 32, 60, 47, 114, 101, 113, 117, 101, 115, 116, 101, 100, 80, 114, 105, 118, 105, 108, 101, 103, 101, 115, 62, 13, 10, 32, 32, 32, 32, 60, 47, 115, 101, 99, 117, 114, 105, 116, 121, 62, 13, 10, 32, 32, 60, 47, 116, 114, 117, 115, 116, 73, 110, 102, 111, 62, 13, 10, 60, 47, 97, 115, 115, 101, 109, 98, 108, 121, 62, 13, 10];
    sampleBuf[3071] = 0; // 3072 bytes
    for (var i = 0; i < sampleBuf.length; i++) {
        if (!sampleBuf[i])
            sampleBuf[i] = 0;
    }
    var global = (function () { return this; })();
    if ("ArrayBuffer" in global) {
        var arrb = new ArrayBuffer(sampleBuf.length);
        var vi = new DataView(arrb);
        for (var i = 0; i < sampleBuf.length; i++) {
            vi.setUint8(i, sampleBuf[i]);
        }
        sampleBuf = arrb;
    }
    sample64Exe.bytes = sampleBuf;
})(sample64Exe || (sample64Exe = {}));
var sampleExe;
(function (sampleExe) {
    var sampleBuf = [77, 90, 144, , 3, , , , 4, , , , 255, 255, , , 184, , , , , , , , 64, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 128, , , , 14, 31, 186, 14, , 180, 9, 205, 33, 184, 1, 76, 205, 33, 84, 104, 105, 115, 32, 112, 114, 111, 103, 114, 97, 109, 32, 99, 97, 110, 110, 111, 116, 32, 98, 101, 32, 114, 117, 110, 32, 105, 110, 32, 68, 79, 83, 32, 109, 111, 100, 101, 46, 13, 13, 10, 36, , , , , , , , 80, 69, , , 76, 1, 3, , 195, 135, 151, 80, , , , , , , , , 224, , 2, 1, 11, 1, 8, , , 4, , , , 6, , , , , , , 62, 35, , , , 32, , , , 64, , , , , 64, , , 32, , , , 2, , , 4, , , , , , , , 4, , , , , , , , , 128, , , , 2, , , , , , , 3, , 64, 133, , , 16, , , 16, , , , , 16, , , 16, , , , , , , 16, , , , , , , , , , , , 228, 34, , , 87, , , , , 64, , , 160, 2, , , , , , , , , , , , , , , , , , , , 96, , , 12, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 32, , , 8, , , , , , , , , , , , 8, 32, , , 72, , , , , , , , , , , , 46, 116, 101, 120, 116, , , , 68, 3, , , , 32, , , , 4, , , , 2, , , , , , , , , , , , , , , 32, , , 96, 46, 114, 115, 114, 99, , , , 160, 2, , , , 64, , , , 4, , , , 6, , , , , , , , , , , , , , , 64, , , 64, 46, 114, 101, 108, 111, 99, , , 12, , , , , 96, , , , 2, , , , 10, , , , , , , , , , , , , , , 64, , , 66, , , , , , , , , , , , , , , , , 32, 35, , , , , , , 72, , , , 2, , 5, , 104, 32, , , 124, 2, , , 1, , , , 1, , , 6, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 54, , 114, 1, , , 112, 40, 3, , , 10, , 42, 30, 2, 40, 4, , , 10, 42, , , 66, 83, 74, 66, 1, , 1, , , , , , 12, , , , 118, 50, 46, 48, 46, 53, 48, 55, 50, 55, , , , , 5, , 108, , , , 228, , , , 35, 126, , , 80, 1, , , 184, , , , 35, 83, 116, 114, 105, 110, 103, 115, , , , , 8, 2, , , 32, , , , 35, 85, 83, , 40, 2, , , 16, , , , 35, 71, 85, 73, 68, , , , 56, 2, , , 68, , , , 35, 66, 108, 111, 98, , , , , , , , 2, , , 1, 71, 20, , , 9, , , , , 250, 1, 51, , 22, , , 1, , , , 4, , , , 2, , , , 2, , , , 4, , , , 2, , , , 1, , , , 1, , , , , , 10, , 1, , , , , , 6, , 45, , 38, , 6, , 95, , 63, , 6, , 127, , 63, , 6, , 164, , 38, , , , , , 1, , , , , , 1, , 1, , , , 16, , 21, , , , 5, , 1, , 1, , 80, 32, , , , , 145, , 52, , 10, , 1, , 94, 32, , , , , 134, 24, 57, , 14, , 1, , 17, , 57, , 18, , 25, , 57, , 14, , 33, , 172, , 23, , 9, , 57, , 14, , 46, , 11, , 28, , 46, , 19, , 37, , 4, 128, , , , , , , , , , , , , , , , , 157, , , , 2, , , , , , , , , , , , 1, , 29, , , , , , , , , , , 60, 77, 111, 100, 117, 108, 101, 62, , 115, 97, 109, 112, 108, 101, 46, 101, 120, 101, , 80, 114, 111, 103, 114, 97, 109, , 109, 115, 99, 111, 114, 108, 105, 98, , 83, 121, 115, 116, 101, 109, , 79, 98, 106, 101, 99, 116, , 77, 97, 105, 110, , 46, 99, 116, 111, 114, , 83, 121, 115, 116, 101, 109, 46, 82, 117, 110, 116, 105, 109, 101, 46, 67, 111, 109, 112, 105, 108, 101, 114, 83, 101, 114, 118, 105, 99, 101, 115, , 67, 111, 109, 112, 105, 108, 97, 116, 105, 111, 110, 82, 101, 108, 97, 120, 97, 116, 105, 111, 110, 115, 65, 116, 116, 114, 105, 98, 117, 116, 101, , 82, 117, 110, 116, 105, 109, 101, 67, 111, 109, 112, 97, 116, 105, 98, 105, 108, 105, 116, 121, 65, 116, 116, 114, 105, 98, 117, 116, 101, , 115, 97, 109, 112, 108, 101, , 67, 111, 110, 115, 111, 108, 101, , 87, 114, 105, 116, 101, 76, 105, 110, 101, , , , , 27, 72, , 101, , 108, , 108, , 111, , 44, , 32, , 87, , 111, , 114, , 108, , 100, , 33, , , , , , 146, 199, 156, 13, 90, 202, 19, 73, 158, 118, 143, 24, 114, 188, 194, 39, , 8, 183, 122, 92, 86, 25, 52, 224, 137, 3, , , 1, 3, 32, , 1, 4, 32, 1, 1, 8, 4, , 1, 1, 14, 8, 1, , 8, , , , , , 30, 1, , 1, , 84, 2, 22, 87, 114, 97, 112, 78, 111, 110, 69, 120, 99, 101, 112, 116, 105, 111, 110, 84, 104, 114, 111, 119, 115, 1, 12, 35, , , , , , , , , , , 46, 35, , , , 32, , , , , , , , , , , , , , , , , , , , , , , 32, 35, , , , , , , , , , , , , , , , , , , , , 95, 67, 111, 114, 69, 120, 101, 77, 97, 105, 110, , 109, 115, 99, 111, 114, 101, 101, 46, 100, 108, 108, , , , , , 255, 37, , 32, 64, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 1, , 16, , , , 24, , , 128, , , , , , , , , , , , , , , 1, , 1, , , , 48, , , 128, , , , , , , , , , , , , , , 1, , , , , , 72, , , , 88, 64, , , 68, 2, , , , , , , , , , , 68, 2, 52, , , , 86, , 83, , 95, , 86, , 69, , 82, , 83, , 73, , 79, , 78, , 95, , 73, , 78, , 70, , 79, , , , , , 189, 4, 239, 254, , , 1, , , , , , , , , , , , , , , , , , 63, , , , , , , , 4, , , , 1, , , , , , , , , , , , , , , , 68, , , , 1, , 86, , 97, , 114, , 70, , 105, , 108, , 101, , 73, , 110, , 102, , 111, , , , , , 36, , 4, , , , 84, , 114, , 97, , 110, , 115, , 108, , 97, , 116, , 105, , 111, , 110, , , , , , , , 176, 4, 164, 1, , , 1, , 83, , 116, , 114, , 105, , 110, , 103, , 70, , 105, , 108, , 101, , 73, , 110, , 102, , 111, , , , 128, 1, , , 1, , 48, , 48, , 48, , 48, , 48, , 52, , 98, , 48, , , , 44, , 2, , 1, , 70, , 105, , 108, , 101, , 68, , 101, , 115, , 99, , 114, , 105, , 112, , 116, , 105, , 111, , 110, , , , , , 32, , , , 48, , 8, , 1, , 70, , 105, , 108, , 101, , 86, , 101, , 114, , 115, , 105, , 111, , 110, , , , , , 48, , 46, , 48, , 46, , 48, , 46, , 48, , , , 56, , 11, , 1, , 73, , 110, , 116, , 101, , 114, , 110, , 97, , 108, , 78, , 97, , 109, , 101, , , , 115, , 97, , 109, , 112, , 108, , 101, , 46, , 101, , 120, , 101, , , , , , 40, , 2, , 1, , 76, , 101, , 103, , 97, , 108, , 67, , 111, , 112, , 121, , 114, , 105, , 103, , 104, , 116, , , , 32, , , , 64, , 11, , 1, , 79, , 114, , 105, , 103, , 105, , 110, , 97, , 108, , 70, , 105, , 108, , 101, , 110, , 97, , 109, , 101, , , , 115, , 97, , 109, , 112, , 108, , 101, , 46, , 101, , 120, , 101, , , , , , 52, , 8, , 1, , 80, , 114, , 111, , 100, , 117, , 99, , 116, , 86, , 101, , 114, , 115, , 105, , 111, , 110, , , , 48, , 46, , 48, , 46, , 48, , 46, , 48, , , , 56, , 8, , 1, , 65, , 115, , 115, , 101, , 109, , 98, , 108, , 121, , 32, , 86, , 101, , 114, , 115, , 105, , 111, , 110, , , , 48, , 46, , 48, , 46, , 48, , 46, , 48, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 32, , , 12, , , , 64, 51];
    sampleBuf[3071] = 0; // 3072 bytes
    for (var i = 0; i < sampleBuf.length; i++) {
        if (!sampleBuf[i])
            sampleBuf[i] = 0;
    }
    var global = (function () { return this; })();
    if ("ArrayBuffer" in global) {
        var arrb = new ArrayBuffer(sampleBuf.length);
        var vi = new DataView(arrb);
        for (var i = 0; i < sampleBuf.length; i++) {
            vi.setUint8(i, sampleBuf[i]);
        }
        sampleBuf = arrb;
    }
    sampleExe.bytes = sampleBuf;
})(sampleExe || (sampleExe = {}));
var tests;
(function (tests) {
    var AddressRange;
    (function (AddressRange) {
        function constructor_succeeds() {
            var dd = new pe.headers.AddressRange(0, 0);
        }
        AddressRange.constructor_succeeds = constructor_succeeds;
        function constructor_assigns_address_654201() {
            var dd = new pe.headers.AddressRange(654201, 0);
            if (dd.address !== 654201)
                throw dd.address;
        }
        AddressRange.constructor_assigns_address_654201 = constructor_assigns_address_654201;
        function constructor_assigns_size_900114() {
            var dd = new pe.headers.AddressRange(0, 900114);
            if (dd.size !== 900114)
                throw dd.size;
        }
        AddressRange.constructor_assigns_size_900114 = constructor_assigns_size_900114;
        function toString_0xCEF_0x36A() {
            var dd = new pe.headers.AddressRange(0xCEF, 0x36A);
            if (dd.toString() !== "CEF:36Ah")
                throw dd.toString();
        }
        AddressRange.toString_0xCEF_0x36A = toString_0xCEF_0x36A;
        function mapRelative_default_0_minus1() {
            var dd = new pe.headers.AddressRange(0, 0);
            var r = dd.mapRelative(0);
            if (r !== -1)
                throw r;
        }
        AddressRange.mapRelative_default_0_minus1 = mapRelative_default_0_minus1;
        function mapRelative_default_64_minus1() {
            var dd = new pe.headers.AddressRange(0, 0);
            var r = dd.mapRelative(64);
            if (r !== -1)
                throw r;
        }
        AddressRange.mapRelative_default_64_minus1 = mapRelative_default_64_minus1;
        function mapRelative_default_minus64_minus1() {
            var dd = new pe.headers.AddressRange(0, 0);
            var r = dd.mapRelative(-64);
            if (r !== -1)
                throw r;
        }
        AddressRange.mapRelative_default_minus64_minus1 = mapRelative_default_minus64_minus1;
        function mapRelative_lowerEnd_below_minus1() {
            var dd = new pe.headers.AddressRange(10, 20);
            var r = dd.mapRelative(9);
            if (r !== -1)
                throw r;
        }
        AddressRange.mapRelative_lowerEnd_below_minus1 = mapRelative_lowerEnd_below_minus1;
        function mapRelative_lowerEnd_equal_0() {
            var dd = new pe.headers.AddressRange(10, 20);
            var r = dd.mapRelative(10);
            if (r !== 0)
                throw r;
        }
        AddressRange.mapRelative_lowerEnd_equal_0 = mapRelative_lowerEnd_equal_0;
        function mapRelative_lowerEnd_above_1() {
            var dd = new pe.headers.AddressRange(10, 20);
            var r = dd.mapRelative(11);
            if (r !== 1)
                throw r;
        }
        AddressRange.mapRelative_lowerEnd_above_1 = mapRelative_lowerEnd_above_1;
        function mapRelative_lowerEndPlusSize_above_minus1() {
            var dd = new pe.headers.AddressRange(10, 20);
            var r = dd.mapRelative(31);
            if (r !== -1)
                throw r;
        }
        AddressRange.mapRelative_lowerEndPlusSize_above_minus1 = mapRelative_lowerEndPlusSize_above_minus1;
        function mapRelative_lowerEndPlusSize_equal_minus1() {
            var dd = new pe.headers.AddressRange(10, 20);
            var r = dd.mapRelative(30);
            if (r !== -1)
                throw r;
        }
        AddressRange.mapRelative_lowerEndPlusSize_equal_minus1 = mapRelative_lowerEndPlusSize_equal_minus1;
        function mapRelative_lowerEndPlusSize_below_sizeMinus1() {
            var dd = new pe.headers.AddressRange(10, 20);
            var r = dd.mapRelative(29);
            if (r !== 19)
                throw r;
        }
        AddressRange.mapRelative_lowerEndPlusSize_below_sizeMinus1 = mapRelative_lowerEndPlusSize_below_sizeMinus1;
    })(AddressRange = tests.AddressRange || (tests.AddressRange = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var BufferReader;
    (function (BufferReader) {
        function constructor_succeeds() {
            var br = new pe.io.BufferReader([]);
        }
        BufferReader.constructor_succeeds = constructor_succeeds;
        function readByte_firstByte_43() {
            var br = new pe.io.BufferReader([43]);
            var b = br.readByte();
            if (b !== 43)
                throw br;
        }
        BufferReader.readByte_firstByte_43 = readByte_firstByte_43;
        function readByte_twice_98() {
            var br = new pe.io.BufferReader([43, 98]);
            br.readByte();
            var b = br.readByte();
            if (b !== 98)
                throw br;
        }
        BufferReader.readByte_twice_98 = readByte_twice_98;
        function readBytes_1234() {
            var br = new pe.io.BufferReader([1, 2, 3, 4]);
            var b = br.readBytes(4);
            var bStr = b.join(",");
            if (bStr !== "1,2,3,4")
                throw bStr + " expected 1,2,3,4";
        }
        BufferReader.readBytes_1234 = readBytes_1234;
        function skipBytes_1234_3() {
            var br = new pe.io.BufferReader([1, 2, 3, 4]);
            br.readBytes(2);
            var b = br.readByte();
            if (b !== 3)
                throw b;
        }
        BufferReader.skipBytes_1234_3 = skipBytes_1234_3;
    })(BufferReader = tests.BufferReader || (tests.BufferReader = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var ClrDirectory_old;
    (function (ClrDirectory_old) {
        function constructor_succeeds() {
            var cdi = new pe.managed.metadata.ClrDirectory();
        }
        ClrDirectory_old.constructor_succeeds = constructor_succeeds;
        function cb_default_0() {
            var cdi = new pe.managed.metadata.ClrDirectory();
            if (cdi.cb !== 0)
                throw cdi.cb;
        }
        ClrDirectory_old.cb_default_0 = cb_default_0;
        function runtimeVersion_default_emptyString() {
            var cdi = new pe.managed.metadata.ClrDirectory();
            if (cdi.runtimeVersion !== "")
                throw cdi.runtimeVersion;
        }
        ClrDirectory_old.runtimeVersion_default_emptyString = runtimeVersion_default_emptyString;
        function imageFlags_default_0() {
            var cdi = new pe.managed.metadata.ClrDirectory();
            if (cdi.imageFlags !== 0)
                throw cdi.imageFlags;
        }
        ClrDirectory_old.imageFlags_default_0 = imageFlags_default_0;
        function metadataDir_default_null() {
            var cdi = new pe.managed.metadata.ClrDirectory();
            if (cdi.metadataDir !== null)
                throw cdi.metadataDir;
        }
        ClrDirectory_old.metadataDir_default_null = metadataDir_default_null;
        function entryPointToken_default_0() {
            var cdi = new pe.managed.metadata.ClrDirectory();
            if (cdi.entryPointToken !== 0)
                throw cdi.entryPointToken;
        }
        ClrDirectory_old.entryPointToken_default_0 = entryPointToken_default_0;
        function resourcesDir_default_null() {
            var cdi = new pe.managed.metadata.ClrDirectory();
            if (cdi.resourcesDir !== null)
                throw cdi.resourcesDir;
        }
        ClrDirectory_old.resourcesDir_default_null = resourcesDir_default_null;
        function strongNameSignatureDir_default_null() {
            var cdi = new pe.managed.metadata.ClrDirectory();
            if (cdi.strongNameSignatureDir !== null)
                throw cdi.strongNameSignatureDir;
        }
        ClrDirectory_old.strongNameSignatureDir_default_null = strongNameSignatureDir_default_null;
        function codeManagerTableDir_default_null() {
            var cdi = new pe.managed.metadata.ClrDirectory();
            if (cdi.codeManagerTableDir !== null)
                throw cdi.codeManagerTableDir;
        }
        ClrDirectory_old.codeManagerTableDir_default_null = codeManagerTableDir_default_null;
        function vtableFixupsDir_default_null() {
            var cdi = new pe.managed.metadata.ClrDirectory();
            if (cdi.vtableFixupsDir !== null)
                throw cdi.vtableFixupsDir;
        }
        ClrDirectory_old.vtableFixupsDir_default_null = vtableFixupsDir_default_null;
        function exportAddressTableJumpsDir_default_null() {
            var cdi = new pe.managed.metadata.ClrDirectory();
            if (cdi.exportAddressTableJumpsDir !== null)
                throw cdi.exportAddressTableJumpsDir;
        }
        ClrDirectory_old.exportAddressTableJumpsDir_default_null = exportAddressTableJumpsDir_default_null;
        function managedNativeHeaderDir_default_null() {
            var cdi = new pe.managed.metadata.ClrDirectory();
            if (cdi.managedNativeHeaderDir !== null)
                throw cdi.managedNativeHeaderDir;
        }
        ClrDirectory_old.managedNativeHeaderDir_default_null = managedNativeHeaderDir_default_null;
    })(ClrDirectory_old = tests.ClrDirectory_old || (tests.ClrDirectory_old = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var ClrDirectory_read_sample64Exe;
    (function (ClrDirectory_read_sample64Exe) {
        function read_succeeds() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
        }
        ClrDirectory_read_sample64Exe.read_succeeds = read_succeeds;
        function cb_72() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            if (cdi.cb !== 72)
                throw cdi.cb;
        }
        ClrDirectory_read_sample64Exe.cb_72 = cb_72;
        function runtimeVersion_25() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            if (cdi.runtimeVersion !== "2.5")
                throw cdi.runtimeVersion;
        }
        ClrDirectory_read_sample64Exe.runtimeVersion_25 = runtimeVersion_25;
        function imageFlags_ILOnly() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            if (cdi.imageFlags !== pe.managed.metadata.ClrImageFlags.ILOnly)
                throw cdi.imageFlags;
        }
        ClrDirectory_read_sample64Exe.imageFlags_ILOnly = imageFlags_ILOnly;
        function metadataDir_toString_2068_280h() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            if (cdi.metadataDir + "" !== "2068:280h")
                throw cdi.metadataDir;
        }
        ClrDirectory_read_sample64Exe.metadataDir_toString_2068_280h = metadataDir_toString_2068_280h;
        function entryPointToken_100663297() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            if (cdi.entryPointToken !== 100663297)
                throw cdi.entryPointToken;
        }
        ClrDirectory_read_sample64Exe.entryPointToken_100663297 = entryPointToken_100663297;
        function resourcesDir_toString_00h() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            if (cdi.resourcesDir + "" !== "0:0h")
                throw cdi.resourcesDir;
        }
        ClrDirectory_read_sample64Exe.resourcesDir_toString_00h = resourcesDir_toString_00h;
        function strongNameSignatureDir_toString_00h() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            if (cdi.strongNameSignatureDir + "" !== "0:0h")
                throw cdi.strongNameSignatureDir;
        }
        ClrDirectory_read_sample64Exe.strongNameSignatureDir_toString_00h = strongNameSignatureDir_toString_00h;
        function codeManagerTableDir_toString_00h() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            if (cdi.codeManagerTableDir + "" !== "0:0h")
                throw cdi.codeManagerTableDir;
        }
        ClrDirectory_read_sample64Exe.codeManagerTableDir_toString_00h = codeManagerTableDir_toString_00h;
        function vtableFixupsDir_toString_00h() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            if (cdi.vtableFixupsDir + "" !== "0:0h")
                throw cdi.vtableFixupsDir;
        }
        ClrDirectory_read_sample64Exe.vtableFixupsDir_toString_00h = vtableFixupsDir_toString_00h;
        function exportAddressTableJumpsDir_toString_00h() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            if (cdi.exportAddressTableJumpsDir + "" !== "0:0h")
                throw cdi.exportAddressTableJumpsDir;
        }
        ClrDirectory_read_sample64Exe.exportAddressTableJumpsDir_toString_00h = exportAddressTableJumpsDir_toString_00h;
        function managedNativeHeaderDir_toString_00h() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            if (cdi.managedNativeHeaderDir + "" !== "0:0h")
                throw cdi.managedNativeHeaderDir;
        }
        ClrDirectory_read_sample64Exe.managedNativeHeaderDir_toString_00h = managedNativeHeaderDir_toString_00h;
    })(ClrDirectory_read_sample64Exe = tests.ClrDirectory_read_sample64Exe || (tests.ClrDirectory_read_sample64Exe = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var ClrDirectory_read_sampleExe;
    (function (ClrDirectory_read_sampleExe) {
        function read_succeeds() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
        }
        ClrDirectory_read_sampleExe.read_succeeds = read_succeeds;
        function cb_72() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            if (cdi.cb !== 72)
                throw cdi.cb;
        }
        ClrDirectory_read_sampleExe.cb_72 = cb_72;
        function runtimeVersion_25() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            if (cdi.runtimeVersion !== "2.5")
                throw cdi.runtimeVersion;
        }
        ClrDirectory_read_sampleExe.runtimeVersion_25 = runtimeVersion_25;
        function imageFlags_ILOnly() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            if (cdi.imageFlags !== pe.managed.metadata.ClrImageFlags.ILOnly)
                throw cdi.imageFlags;
        }
        ClrDirectory_read_sampleExe.imageFlags_ILOnly = imageFlags_ILOnly;
        function metadataDir_toString_2068_27Ch() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            if (cdi.metadataDir + "" !== "2068:27Ch")
                throw cdi.metadataDir;
        }
        ClrDirectory_read_sampleExe.metadataDir_toString_2068_27Ch = metadataDir_toString_2068_27Ch;
        function entryPointToken_100663297() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            if (cdi.entryPointToken !== 100663297)
                throw cdi.entryPointToken;
        }
        ClrDirectory_read_sampleExe.entryPointToken_100663297 = entryPointToken_100663297;
        function resourcesDir_toString_00h() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            if (cdi.resourcesDir + "" !== "0:0h")
                throw cdi.resourcesDir;
        }
        ClrDirectory_read_sampleExe.resourcesDir_toString_00h = resourcesDir_toString_00h;
        function strongNameSignatureDir_toString_00h() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            if (cdi.strongNameSignatureDir + "" !== "0:0h")
                throw cdi.strongNameSignatureDir;
        }
        ClrDirectory_read_sampleExe.strongNameSignatureDir_toString_00h = strongNameSignatureDir_toString_00h;
        function codeManagerTableDir_toString_00h() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            if (cdi.codeManagerTableDir + "" !== "0:0h")
                throw cdi.codeManagerTableDir;
        }
        ClrDirectory_read_sampleExe.codeManagerTableDir_toString_00h = codeManagerTableDir_toString_00h;
        function vtableFixupsDir_toString_00h() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            if (cdi.vtableFixupsDir + "" !== "0:0h")
                throw cdi.vtableFixupsDir;
        }
        ClrDirectory_read_sampleExe.vtableFixupsDir_toString_00h = vtableFixupsDir_toString_00h;
        function exportAddressTableJumpsDir_toString_00h() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            if (cdi.exportAddressTableJumpsDir + "" !== "0:0h")
                throw cdi.exportAddressTableJumpsDir;
        }
        ClrDirectory_read_sampleExe.exportAddressTableJumpsDir_toString_00h = exportAddressTableJumpsDir_toString_00h;
        function managedNativeHeaderDir_toString_00h() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            if (cdi.managedNativeHeaderDir + "" !== "0:0h")
                throw cdi.managedNativeHeaderDir;
        }
        ClrDirectory_read_sampleExe.managedNativeHeaderDir_toString_00h = managedNativeHeaderDir_toString_00h;
    })(ClrDirectory_read_sampleExe = tests.ClrDirectory_read_sampleExe || (tests.ClrDirectory_read_sampleExe = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var ClrMetadata;
    (function (ClrMetadata) {
        function constructor_succeeds() {
            var cdi = new pe.managed.metadata.ClrMetadata();
        }
        ClrMetadata.constructor_succeeds = constructor_succeeds;
        function mdSignature_default_Signature() {
            var cme = new pe.managed.metadata.ClrMetadata();
            if (cme.mdSignature !== pe.managed.metadata.ClrMetadataSignature.Signature)
                throw cme.mdSignature;
        }
        ClrMetadata.mdSignature_default_Signature = mdSignature_default_Signature;
        function metadataVersion_default_emptyString() {
            var cme = new pe.managed.metadata.ClrMetadata();
            if (cme.metadataVersion !== "")
                throw cme.metadataVersion;
        }
        ClrMetadata.metadataVersion_default_emptyString = metadataVersion_default_emptyString;
        function runtimeVersion_default_emptyString() {
            var cme = new pe.managed.metadata.ClrMetadata();
            if (cme.runtimeVersion !== "")
                throw cme.runtimeVersion;
        }
        ClrMetadata.runtimeVersion_default_emptyString = runtimeVersion_default_emptyString;
        function mdReserved_default_0() {
            var cme = new pe.managed.metadata.ClrMetadata();
            if (cme.mdReserved !== 0)
                throw cme.mdReserved;
        }
        ClrMetadata.mdReserved_default_0 = mdReserved_default_0;
        function mdFlags_default_0() {
            var cme = new pe.managed.metadata.ClrMetadata();
            if (cme.mdFlags !== 0)
                throw cme.mdFlags;
        }
        ClrMetadata.mdFlags_default_0 = mdFlags_default_0;
        function streamCount_default_0() {
            var cme = new pe.managed.metadata.ClrMetadata();
            if (cme.streamCount !== 0)
                throw cme.streamCount;
        }
        ClrMetadata.streamCount_default_0 = streamCount_default_0;
    })(ClrMetadata = tests.ClrMetadata || (tests.ClrMetadata = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var ClrMetadata_read_sample64Exe;
    (function (ClrMetadata_read_sample64Exe) {
        function read_succeeds() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
        }
        ClrMetadata_read_sample64Exe.read_succeeds = read_succeeds;
        function mdSignature_Signature() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            if (cme.mdSignature !== pe.managed.metadata.ClrMetadataSignature.Signature)
                throw cme.mdSignature;
        }
        ClrMetadata_read_sample64Exe.mdSignature_Signature = mdSignature_Signature;
        function metadataVersion_11() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            if (cme.metadataVersion !== "1.1")
                throw cme.metadataVersion;
        }
        ClrMetadata_read_sample64Exe.metadataVersion_11 = metadataVersion_11;
        function mdReserved_0() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            if (cme.mdReserved !== 0)
                throw cme.mdReserved;
        }
        ClrMetadata_read_sample64Exe.mdReserved_0 = mdReserved_0;
        function runtimeVersion_v4_0_30319() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            if (cme.runtimeVersion !== "v4.0.30319")
                throw cme.runtimeVersion;
        }
        ClrMetadata_read_sample64Exe.runtimeVersion_v4_0_30319 = runtimeVersion_v4_0_30319;
        function mdFlags_0() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            if (cme.mdFlags !== 0)
                throw cme.mdFlags;
        }
        ClrMetadata_read_sample64Exe.mdFlags_0 = mdFlags_0;
        function streamCount_5() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            if (cme.streamCount !== 5)
                throw cme.streamCount;
        }
        ClrMetadata_read_sample64Exe.streamCount_5 = streamCount_5;
    })(ClrMetadata_read_sample64Exe = tests.ClrMetadata_read_sample64Exe || (tests.ClrMetadata_read_sample64Exe = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var ClrMetadata_read_sampleExe;
    (function (ClrMetadata_read_sampleExe) {
        function read_succeeds() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
        }
        ClrMetadata_read_sampleExe.read_succeeds = read_succeeds;
        function mdSignature_Signature() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            if (cme.mdSignature !== pe.managed.metadata.ClrMetadataSignature.Signature)
                throw cme.mdSignature;
        }
        ClrMetadata_read_sampleExe.mdSignature_Signature = mdSignature_Signature;
        function metadataVersion_11() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            if (cme.metadataVersion !== "1.1")
                throw cme.metadataVersion;
        }
        ClrMetadata_read_sampleExe.metadataVersion_11 = metadataVersion_11;
        function mdReserved_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            if (cme.mdReserved !== 0)
                throw cme.mdReserved;
        }
        ClrMetadata_read_sampleExe.mdReserved_0 = mdReserved_0;
        function runtimeVersion_v2_0_50727() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            if (cme.runtimeVersion !== "v2.0.50727")
                throw cme.runtimeVersion;
        }
        ClrMetadata_read_sampleExe.runtimeVersion_v2_0_50727 = runtimeVersion_v2_0_50727;
        function mdFlags_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            if (cme.mdFlags !== 0)
                throw cme.mdFlags;
        }
        ClrMetadata_read_sampleExe.mdFlags_0 = mdFlags_0;
        function streamCount_5() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            if (cme.streamCount !== 5)
                throw cme.streamCount;
        }
        ClrMetadata_read_sampleExe.streamCount_5 = streamCount_5;
    })(ClrMetadata_read_sampleExe = tests.ClrMetadata_read_sampleExe || (tests.ClrMetadata_read_sampleExe = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var DllImport_read_012345;
    (function (DllImport_read_012345) {
        var sampleBuf = (function () {
            var buf = [];
            for (var i = 0; i < 400; i++) {
                buf[i] = 0;
            }
            // originalFirstThunk
            buf[0] = 50;
            buf[1] = buf[2] = buf[3] = 0;
            // importPosition rva
            buf[50] = 150;
            buf[51] = buf[52] = buf[53] = 0;
            // ordinal
            buf[150] = 14;
            buf[151] = 0;
            // name
            buf[152] = ("Q").charCodeAt(0);
            buf[153] = 0;
            // library name rva
            buf[12] = 100;
            buf[13] = buf[14] = buf[15] = 0;
            buf[100] = ("Y").charCodeAt(0);
            buf[101] = 0;
            // importPosition ordinal
            buf[54] = 250;
            buf[55] = buf[56] = 0;
            buf[57] = 128;
            return buf;
        })();
        var global = (function () { return this; })();
        var bytes;
        if ("ArrayBuffer" in global) {
            var arrb = new ArrayBuffer(sampleBuf.length);
            var vi = new DataView(arrb);
            for (var i = 0; i < sampleBuf.length; i++) {
                vi.setUint8(i, sampleBuf[i]);
            }
            bytes = arrb;
        }
        else {
            bytes = sampleBuf;
        }
        function read_succeeds() {
            var bi = new pe.io.BufferReader(bytes);
            bi.sections.push(new pe.headers.AddressRangeMap(0, sampleBuf.length, 0));
            var imports = pe.unmanaged.DllImport.read(bi);
        }
        DllImport_read_012345.read_succeeds = read_succeeds;
        function read_length_2() {
            var bi = new pe.io.BufferReader(bytes);
            bi.sections.push(new pe.headers.AddressRangeMap(0, sampleBuf.length, 0));
            var imports = pe.unmanaged.DllImport.read(bi);
            if (imports.length !== 2)
                throw imports.length;
        }
        DllImport_read_012345.read_length_2 = read_length_2;
        function read_0_dllName_Y() {
            var bi = new pe.io.BufferReader(bytes);
            bi.sections.push(new pe.headers.AddressRangeMap(0, sampleBuf.length, 0));
            var imports = pe.unmanaged.DllImport.read(bi);
            if (imports[0].dllName !== "Y")
                throw imports[0].dllName;
        }
        DllImport_read_012345.read_0_dllName_Y = read_0_dllName_Y;
        function read_0_name_Q() {
            var bi = new pe.io.BufferReader(bytes);
            bi.sections.push(new pe.headers.AddressRangeMap(0, sampleBuf.length, 0));
            var imports = pe.unmanaged.DllImport.read(bi);
            if (imports[0].name !== "Q")
                throw imports[0].name;
        }
        DllImport_read_012345.read_0_name_Q = read_0_name_Q;
        function read_0_ordinal_14() {
            var bi = new pe.io.BufferReader(bytes);
            bi.sections.push(new pe.headers.AddressRangeMap(0, sampleBuf.length, 0));
            var imports = pe.unmanaged.DllImport.read(bi);
            if (imports[0].ordinal !== 14)
                throw imports[0].ordinal;
        }
        DllImport_read_012345.read_0_ordinal_14 = read_0_ordinal_14;
        function read_1_dllName_Y() {
            var bi = new pe.io.BufferReader(bytes);
            bi.sections.push(new pe.headers.AddressRangeMap(0, sampleBuf.length, 0));
            var imports = pe.unmanaged.DllImport.read(bi);
            if (imports[1].dllName !== "Y")
                throw imports[1].dllName;
        }
        DllImport_read_012345.read_1_dllName_Y = read_1_dllName_Y;
        function read_1_name_null() {
            var bi = new pe.io.BufferReader(bytes);
            bi.sections.push(new pe.headers.AddressRangeMap(0, sampleBuf.length, 0));
            var imports = pe.unmanaged.DllImport.read(bi);
            if (imports[1].name !== null)
                throw imports[1].name;
        }
        DllImport_read_012345.read_1_name_null = read_1_name_null;
        function read_1_ordinal_250() {
            var bi = new pe.io.BufferReader(bytes);
            bi.sections.push(new pe.headers.AddressRangeMap(0, sampleBuf.length, 0));
            var imports = pe.unmanaged.DllImport.read(bi);
            if (imports[1].ordinal !== 250)
                throw imports[1].ordinal;
        }
        DllImport_read_012345.read_1_ordinal_250 = read_1_ordinal_250;
    })(DllImport_read_012345 = tests.DllImport_read_012345 || (tests.DllImport_read_012345 = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var DllImport_read_sampleExe;
    (function (DllImport_read_sampleExe) {
        function read_succeeds() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            var importRange = pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.ImportSymbols];
            bi.setVirtualOffset(importRange.address);
            pe.unmanaged.DllImport.read(bi);
        }
        DllImport_read_sampleExe.read_succeeds = read_succeeds;
        function read_length_1() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            var importRange = pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.ImportSymbols];
            bi.setVirtualOffset(importRange.address);
            var imports = pe.unmanaged.DllImport.read(bi);
            if (imports.length !== 1)
                throw imports.length;
        }
        DllImport_read_sampleExe.read_length_1 = read_length_1;
        function read_0_dllName_mscoreeDll() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            var importRange = pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.ImportSymbols];
            bi.setVirtualOffset(importRange.address);
            var imports = pe.unmanaged.DllImport.read(bi);
            if (imports[0].dllName !== "mscoree.dll")
                throw imports[0].dllName;
        }
        DllImport_read_sampleExe.read_0_dllName_mscoreeDll = read_0_dllName_mscoreeDll;
        function read_0_name__CorExeMain() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            var importRange = pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.ImportSymbols];
            bi.setVirtualOffset(importRange.address);
            var imports = pe.unmanaged.DllImport.read(bi);
            if (imports[0].name !== "_CorExeMain")
                throw imports[0].name;
        }
        DllImport_read_sampleExe.read_0_name__CorExeMain = read_0_name__CorExeMain;
        function read_0_ordinal_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            var importRange = pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.ImportSymbols];
            bi.setVirtualOffset(importRange.address);
            var imports = pe.unmanaged.DllImport.read(bi);
            if (imports[0].ordinal !== 0)
                throw imports[0].ordinal;
        }
        DllImport_read_sampleExe.read_0_ordinal_0 = read_0_ordinal_0;
    })(DllImport_read_sampleExe = tests.DllImport_read_sampleExe || (tests.DllImport_read_sampleExe = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var DosHeader;
    (function (DosHeader) {
        function constructor_succeeds() {
            var doh = new pe.headers.DosHeader();
        }
        DosHeader.constructor_succeeds = constructor_succeeds;
        function mz_defaultMZ() {
            var doh = new pe.headers.DosHeader();
            if (doh.mz !== pe.headers.MZSignature.MZ)
                throw doh.mz;
        }
        DosHeader.mz_defaultMZ = mz_defaultMZ;
        function cblp_default144() {
            var doh = new pe.headers.DosHeader();
            if (doh.cblp !== 144)
                throw doh.cblp;
        }
        DosHeader.cblp_default144 = cblp_default144;
        function cp_default3() {
            var doh = new pe.headers.DosHeader();
            if (doh.cp !== 3)
                throw doh.cp;
        }
        DosHeader.cp_default3 = cp_default3;
        function crlc_default0() {
            var doh = new pe.headers.DosHeader();
            if (doh.crlc !== 0)
                throw doh.crlc;
        }
        DosHeader.crlc_default0 = crlc_default0;
        function cparhdr_default4() {
            var doh = new pe.headers.DosHeader();
            if (doh.cparhdr !== 4)
                throw doh.cparhdr;
        }
        DosHeader.cparhdr_default4 = cparhdr_default4;
        function minalloc_default0() {
            var doh = new pe.headers.DosHeader();
            if (doh.minalloc !== 0)
                throw doh.minalloc;
        }
        DosHeader.minalloc_default0 = minalloc_default0;
        function maxalloc_default65535() {
            var doh = new pe.headers.DosHeader();
            if (doh.maxalloc !== 65535)
                throw doh.maxalloc;
        }
        DosHeader.maxalloc_default65535 = maxalloc_default65535;
        function ss_default0() {
            var doh = new pe.headers.DosHeader();
            if (doh.ss !== 0)
                throw doh.ss;
        }
        DosHeader.ss_default0 = ss_default0;
        function sp_default184() {
            var doh = new pe.headers.DosHeader();
            if (doh.sp !== 184)
                throw doh.sp;
        }
        DosHeader.sp_default184 = sp_default184;
        function csum_default0() {
            var doh = new pe.headers.DosHeader();
            if (doh.csum !== 0)
                throw doh.csum;
        }
        DosHeader.csum_default0 = csum_default0;
        function cs_default0() {
            var doh = new pe.headers.DosHeader();
            if (doh.cs !== 0)
                throw doh.cs;
        }
        DosHeader.cs_default0 = cs_default0;
        function lfarlc_default64() {
            var doh = new pe.headers.DosHeader();
            if (doh.lfarlc !== 64)
                throw doh.lfarlc;
        }
        DosHeader.lfarlc_default64 = lfarlc_default64;
        function ovno_default0() {
            var doh = new pe.headers.DosHeader();
            if (doh.ovno !== 0)
                throw doh.ovno;
        }
        DosHeader.ovno_default0 = ovno_default0;
        function res1_default0() {
            var doh = new pe.headers.DosHeader();
            if (doh.res1.hi !== 0 || doh.res1.lo !== 0)
                throw doh.res1;
        }
        DosHeader.res1_default0 = res1_default0;
        function oemid_default0() {
            var doh = new pe.headers.DosHeader();
            if (doh.oemid !== 0)
                throw doh.oemid;
        }
        DosHeader.oemid_default0 = oemid_default0;
        function oeminfo_default0() {
            var doh = new pe.headers.DosHeader();
            if (doh.oeminfo !== 0)
                throw doh.oeminfo;
        }
        DosHeader.oeminfo_default0 = oeminfo_default0;
        function reserved_defaultArray5() {
            var doh = new pe.headers.DosHeader();
            if (doh.reserved.length !== 5
                || doh.reserved[0] !== 0
                || doh.reserved[1] !== 0
                || doh.reserved[2] !== 0
                || doh.reserved[3] !== 0
                || doh.reserved[4] !== 0)
                throw doh.reserved;
        }
        DosHeader.reserved_defaultArray5 = reserved_defaultArray5;
        function lfanew_default0() {
            var doh = new pe.headers.DosHeader();
            if (doh.lfanew !== 0)
                throw doh.lfanew;
        }
        DosHeader.lfanew_default0 = lfanew_default0;
        function toString_default() {
            var doh = new pe.headers.DosHeader();
            if (doh.toString() !== "[MZ].lfanew=0h")
                throw doh.toString();
        }
        DosHeader.toString_default = toString_default;
        function toString_mz_oxEA() {
            var doh = new pe.headers.DosHeader();
            doh.mz = 0xEA;
            if (doh.toString() !== "[EAh].lfanew=0h")
                throw doh.toString();
        }
        DosHeader.toString_mz_oxEA = toString_mz_oxEA;
        function toString_lfanew_oxFF803() {
            var doh = new pe.headers.DosHeader();
            doh.lfanew = 0xFF803;
            if (doh.toString() !== "[MZ].lfanew=FF803h")
                throw doh.toString();
        }
        DosHeader.toString_lfanew_oxFF803 = toString_lfanew_oxFF803;
    })(DosHeader = tests.DosHeader || (tests.DosHeader = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var DosHeader_read_MZ2345;
    (function (DosHeader_read_MZ2345) {
        var sampleBuf = (function () {
            var array = [("M").charCodeAt(0), ("Z").charCodeAt(0)];
            for (var i = 0; i < 64; i++) {
                if (i == 0 || i == 1)
                    continue; // skipMZ
                array[i] = i;
            }
            return array;
        })();
        var global = (function () { return this; })();
        if ("ArrayBuffer" in global) {
            var arrb = new ArrayBuffer(sampleBuf.length);
            var vi = new DataView(arrb);
            for (var i = 0; i < sampleBuf.length; i++) {
                vi.setUint8(i, sampleBuf[i]);
            }
            sampleBuf = arrb;
        }
        DosHeader_read_MZ2345.bytes = sampleBuf;
        function read_succeeds() {
            var bi = new pe.io.BufferReader(DosHeader_read_MZ2345.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
        }
        DosHeader_read_MZ2345.read_succeeds = read_succeeds;
        function read_mz_MZ() {
            var bi = new pe.io.BufferReader(DosHeader_read_MZ2345.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.mz !== pe.headers.MZSignature.MZ)
                throw doh.mz;
        }
        DosHeader_read_MZ2345.read_mz_MZ = read_mz_MZ;
        function read_cblp_770() {
            var bi = new pe.io.BufferReader(DosHeader_read_MZ2345.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.cblp !== 770)
                throw doh.cblp;
        }
        DosHeader_read_MZ2345.read_cblp_770 = read_cblp_770;
        function read_cp_1284() {
            var bi = new pe.io.BufferReader(DosHeader_read_MZ2345.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.cp !== 1284)
                throw doh.cp;
        }
        DosHeader_read_MZ2345.read_cp_1284 = read_cp_1284;
        function read_crlc_1798() {
            var bi = new pe.io.BufferReader(DosHeader_read_MZ2345.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.crlc !== 1798)
                throw doh.crlc;
        }
        DosHeader_read_MZ2345.read_crlc_1798 = read_crlc_1798;
        function read_cparhdr_2312() {
            var bi = new pe.io.BufferReader(DosHeader_read_MZ2345.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.cparhdr !== 2312)
                throw doh.cparhdr;
        }
        DosHeader_read_MZ2345.read_cparhdr_2312 = read_cparhdr_2312;
        function read_minalloc_2826() {
            var bi = new pe.io.BufferReader(DosHeader_read_MZ2345.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.minalloc !== 2826)
                throw doh.minalloc;
        }
        DosHeader_read_MZ2345.read_minalloc_2826 = read_minalloc_2826;
        function read_maxalloc_3340() {
            var bi = new pe.io.BufferReader(DosHeader_read_MZ2345.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.maxalloc !== 3340)
                throw doh.maxalloc;
        }
        DosHeader_read_MZ2345.read_maxalloc_3340 = read_maxalloc_3340;
        function read_ss_3854() {
            var bi = new pe.io.BufferReader(DosHeader_read_MZ2345.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.ss !== 3854)
                throw doh.ss;
        }
        DosHeader_read_MZ2345.read_ss_3854 = read_ss_3854;
        function read_sp_4368() {
            var bi = new pe.io.BufferReader(DosHeader_read_MZ2345.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.sp !== 4368)
                throw doh.sp;
        }
        DosHeader_read_MZ2345.read_sp_4368 = read_sp_4368;
        function read_csum_4882() {
            var bi = new pe.io.BufferReader(DosHeader_read_MZ2345.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.csum !== 4882)
                throw doh.csum;
        }
        DosHeader_read_MZ2345.read_csum_4882 = read_csum_4882;
        function read_ip_5396() {
            var bi = new pe.io.BufferReader(DosHeader_read_MZ2345.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.ip !== 5396)
                throw doh.ip;
        }
        DosHeader_read_MZ2345.read_ip_5396 = read_ip_5396;
        function read_cs_5910() {
            var bi = new pe.io.BufferReader(DosHeader_read_MZ2345.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.cs !== 5910)
                throw doh.cs;
        }
        DosHeader_read_MZ2345.read_cs_5910 = read_cs_5910;
        function read_lfarc_6424() {
            var bi = new pe.io.BufferReader(DosHeader_read_MZ2345.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.lfarlc !== 6424)
                throw doh.lfarlc;
        }
        DosHeader_read_MZ2345.read_lfarc_6424 = read_lfarc_6424;
        function read_ovno_6938() {
            var bi = new pe.io.BufferReader(DosHeader_read_MZ2345.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.ovno !== 6938)
                throw doh.ovno;
        }
        DosHeader_read_MZ2345.read_ovno_6938 = read_ovno_6938;
        function read_res1_232221201F1E1D1C() {
            var bi = new pe.io.BufferReader(DosHeader_read_MZ2345.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.res1.toString() !== "232221201F1E1D1Ch")
                throw doh.res1;
        }
        DosHeader_read_MZ2345.read_res1_232221201F1E1D1C = read_res1_232221201F1E1D1C;
        function read_oemid_9508() {
            var bi = new pe.io.BufferReader(DosHeader_read_MZ2345.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.oemid !== 9508)
                throw doh.oemid;
        }
        DosHeader_read_MZ2345.read_oemid_9508 = read_oemid_9508;
        function read_oeminfo_10022() {
            var bi = new pe.io.BufferReader(DosHeader_read_MZ2345.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.oeminfo !== 10022)
                throw doh.oeminfo;
        }
        DosHeader_read_MZ2345.read_oeminfo_10022 = read_oeminfo_10022;
        function read_reserved_724183336_791555372_858927408_926299444_993671480() {
            var bi = new pe.io.BufferReader(DosHeader_read_MZ2345.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            var reservedStr = doh.reserved.join(",");
            if (reservedStr !== "724183336,791555372,858927408,926299444,993671480")
                throw reservedStr;
        }
        DosHeader_read_MZ2345.read_reserved_724183336_791555372_858927408_926299444_993671480 = read_reserved_724183336_791555372_858927408_926299444_993671480;
        function read_dosHeader_lfanew_1061043516() {
            var bi = new pe.io.BufferReader(DosHeader_read_MZ2345.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.lfanew !== 1061043516)
                throw doh.lfanew;
        }
        DosHeader_read_MZ2345.read_dosHeader_lfanew_1061043516 = read_dosHeader_lfanew_1061043516;
    })(DosHeader_read_MZ2345 = tests.DosHeader_read_MZ2345 || (tests.DosHeader_read_MZ2345 = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var DosHeader_read_sample64Exe;
    (function (DosHeader_read_sample64Exe) {
        function read_succeeds() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
        }
        DosHeader_read_sample64Exe.read_succeeds = read_succeeds;
        function read_mz_MZ() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.mz !== pe.headers.MZSignature.MZ)
                throw doh.mz;
        }
        DosHeader_read_sample64Exe.read_mz_MZ = read_mz_MZ;
        function read_cblp_144() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.cblp !== 144)
                throw doh.cblp;
        }
        DosHeader_read_sample64Exe.read_cblp_144 = read_cblp_144;
        function read_cp_3() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.cp !== 3)
                throw doh.cp;
        }
        DosHeader_read_sample64Exe.read_cp_3 = read_cp_3;
        function read_crlc_0() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.crlc !== 0)
                throw doh.crlc;
        }
        DosHeader_read_sample64Exe.read_crlc_0 = read_crlc_0;
        function read_cparhdr_4() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.cparhdr !== 4)
                throw doh.cparhdr;
        }
        DosHeader_read_sample64Exe.read_cparhdr_4 = read_cparhdr_4;
        function read_minalloc_0() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.minalloc !== 0)
                throw doh.minalloc;
        }
        DosHeader_read_sample64Exe.read_minalloc_0 = read_minalloc_0;
        function read_maxalloc_65535() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.maxalloc !== 65535)
                throw doh.maxalloc;
        }
        DosHeader_read_sample64Exe.read_maxalloc_65535 = read_maxalloc_65535;
        function read_ss_0() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.ss !== 0)
                throw doh.ss;
        }
        DosHeader_read_sample64Exe.read_ss_0 = read_ss_0;
        function read_sp_184() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.sp !== 184)
                throw doh.sp;
        }
        DosHeader_read_sample64Exe.read_sp_184 = read_sp_184;
        function read_csum_0() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.csum !== 0)
                throw doh.csum;
        }
        DosHeader_read_sample64Exe.read_csum_0 = read_csum_0;
        function read_ip_0() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.ip !== 0)
                throw doh.ip;
        }
        DosHeader_read_sample64Exe.read_ip_0 = read_ip_0;
        function read_cs_0() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.cs !== 0)
                throw doh.cs;
        }
        DosHeader_read_sample64Exe.read_cs_0 = read_cs_0;
        function read_lfarc_64() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.lfarlc !== 64)
                throw doh.lfarlc;
        }
        DosHeader_read_sample64Exe.read_lfarc_64 = read_lfarc_64;
        function read_ovno_0() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.ovno !== 0)
                throw doh.ovno;
        }
        DosHeader_read_sample64Exe.read_ovno_0 = read_ovno_0;
        function read_res1_0() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.res1.toString() !== "0h")
                throw doh.res1;
        }
        DosHeader_read_sample64Exe.read_res1_0 = read_res1_0;
        function read_oemid_0() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.oemid !== 0)
                throw doh.oemid;
        }
        DosHeader_read_sample64Exe.read_oemid_0 = read_oemid_0;
        function read_oeminfo_0() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.oeminfo !== 0)
                throw doh.oeminfo;
        }
        DosHeader_read_sample64Exe.read_oeminfo_0 = read_oeminfo_0;
        function read_reserved_00000() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            var reservedStr = doh.reserved.join(",");
            if (reservedStr !== "0,0,0,0,0")
                throw reservedStr;
        }
        DosHeader_read_sample64Exe.read_reserved_00000 = read_reserved_00000;
        function read_dosHeader_lfanew_128() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.lfanew !== 128)
                throw doh.lfanew;
        }
        DosHeader_read_sample64Exe.read_dosHeader_lfanew_128 = read_dosHeader_lfanew_128;
    })(DosHeader_read_sample64Exe = tests.DosHeader_read_sample64Exe || (tests.DosHeader_read_sample64Exe = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var DosHeader_read_sampleExe;
    (function (DosHeader_read_sampleExe) {
        function read_succeeds() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
        }
        DosHeader_read_sampleExe.read_succeeds = read_succeeds;
        function read_mz_MZ() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.mz !== pe.headers.MZSignature.MZ)
                throw doh.mz;
        }
        DosHeader_read_sampleExe.read_mz_MZ = read_mz_MZ;
        function read_cblp_144() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.cblp !== 144)
                throw doh.cblp;
        }
        DosHeader_read_sampleExe.read_cblp_144 = read_cblp_144;
        function read_cp_3() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.cp !== 3)
                throw doh.cp;
        }
        DosHeader_read_sampleExe.read_cp_3 = read_cp_3;
        function read_crlc_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.crlc !== 0)
                throw doh.crlc;
        }
        DosHeader_read_sampleExe.read_crlc_0 = read_crlc_0;
        function read_cparhdr_4() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.cparhdr !== 4)
                throw doh.cparhdr;
        }
        DosHeader_read_sampleExe.read_cparhdr_4 = read_cparhdr_4;
        function read_minalloc_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.minalloc !== 0)
                throw doh.minalloc;
        }
        DosHeader_read_sampleExe.read_minalloc_0 = read_minalloc_0;
        function read_maxalloc_65535() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.maxalloc !== 65535)
                throw doh.maxalloc;
        }
        DosHeader_read_sampleExe.read_maxalloc_65535 = read_maxalloc_65535;
        function read_ss_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.ss !== 0)
                throw doh.ss;
        }
        DosHeader_read_sampleExe.read_ss_0 = read_ss_0;
        function read_sp_184() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.sp !== 184)
                throw doh.sp;
        }
        DosHeader_read_sampleExe.read_sp_184 = read_sp_184;
        function read_csum_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.csum !== 0)
                throw doh.csum;
        }
        DosHeader_read_sampleExe.read_csum_0 = read_csum_0;
        function read_ip_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.ip !== 0)
                throw doh.ip;
        }
        DosHeader_read_sampleExe.read_ip_0 = read_ip_0;
        function read_cs_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.cs !== 0)
                throw doh.cs;
        }
        DosHeader_read_sampleExe.read_cs_0 = read_cs_0;
        function read_lfarc_64() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.lfarlc !== 64)
                throw doh.lfarlc;
        }
        DosHeader_read_sampleExe.read_lfarc_64 = read_lfarc_64;
        function read_ovno_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.ovno !== 0)
                throw doh.ovno;
        }
        DosHeader_read_sampleExe.read_ovno_0 = read_ovno_0;
        function read_res1_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.res1.toString() !== "0h")
                throw doh.res1;
        }
        DosHeader_read_sampleExe.read_res1_0 = read_res1_0;
        function read_oemid_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.oemid !== 0)
                throw doh.oemid;
        }
        DosHeader_read_sampleExe.read_oemid_0 = read_oemid_0;
        function read_oeminfo_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.oeminfo !== 0)
                throw doh.oeminfo;
        }
        DosHeader_read_sampleExe.read_oeminfo_0 = read_oeminfo_0;
        function read_reserved_00000() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            var reservedStr = doh.reserved.join(",");
            if (reservedStr !== "0,0,0,0,0")
                throw reservedStr;
        }
        DosHeader_read_sampleExe.read_reserved_00000 = read_reserved_00000;
        function read_dosHeader_lfanew_128() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var doh = new pe.headers.DosHeader();
            doh.read(bi);
            if (doh.lfanew !== 128)
                throw doh.lfanew;
        }
        DosHeader_read_sampleExe.read_dosHeader_lfanew_128 = read_dosHeader_lfanew_128;
    })(DosHeader_read_sampleExe = tests.DosHeader_read_sampleExe || (tests.DosHeader_read_sampleExe = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var Long;
    (function (Long) {
        function constructor_succeeds() {
            var lg = new pe.Long(0, 0);
        }
        Long.constructor_succeeds = constructor_succeeds;
        function constructor_assigns_lo_602048() {
            var lg = new pe.Long(602048, 0);
            if (lg.lo !== 602048)
                throw lg.lo;
        }
        Long.constructor_assigns_lo_602048 = constructor_assigns_lo_602048;
        function constructor_assigns_hi_2130006() {
            var lg = new pe.Long(0, 2130006);
            if (lg.hi !== 2130006)
                throw lg.hi;
        }
        Long.constructor_assigns_hi_2130006 = constructor_assigns_hi_2130006;
        function toString_zeros() {
            var lg = new pe.Long(0, 0);
            if (lg.toString() !== "0h")
                throw lg.toString();
        }
        Long.toString_zeros = toString_zeros;
        function toString_1() {
            var lg = new pe.Long(1, 0);
            if (lg.toString() !== "1h")
                throw lg.toString();
        }
        Long.toString_1 = toString_1;
        function toString_0xB() {
            var lg = new pe.Long(0xB, 0);
            if (lg.toString() !== "Bh")
                throw lg.toString();
        }
        Long.toString_0xB = toString_0xB;
        function toString_0xFFFF() {
            var lg = new pe.Long(0xFFFF, 0);
            if (lg.toString() !== "FFFFh")
                throw lg.toString();
        }
        Long.toString_0xFFFF = toString_0xFFFF;
        function toString_0xFFFF0() {
            var lg = new pe.Long(0xFFF0, 0xF);
            if (lg.toString() !== "FFFF0h")
                throw lg.toString();
        }
        Long.toString_0xFFFF0 = toString_0xFFFF0;
        function toString_0xFFFFFFFF() {
            var lg = new pe.Long(0xFFFF, 0xFFFF);
            if (lg.toString() !== "FFFFFFFFh")
                throw lg.toString();
        }
        Long.toString_0xFFFFFFFF = toString_0xFFFFFFFF;
    })(Long = tests.Long || (tests.Long = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var MetadataStreams_read_sample64Exe;
    (function (MetadataStreams_read_sample64Exe) {
        function read_succeeds() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
        }
        MetadataStreams_read_sample64Exe.read_succeeds = read_succeeds;
        function read_guids_length_1() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
            if (mes.guids.length !== 1)
                throw mes.guids.length;
        }
        MetadataStreams_read_sample64Exe.read_guids_length_1 = read_guids_length_1;
        function read_guids_0_6147adca4753401f7faf138abeb52b54() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
            if (mes.guids[0] !== "{6147adca4753401f7faf138abeb52b54}")
                throw mes.guids[0];
        }
        MetadataStreams_read_sample64Exe.read_guids_0_6147adca4753401f7faf138abeb52b54 = read_guids_0_6147adca4753401f7faf138abeb52b54;
        function read_strings_toString_21B8_BCh() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
            if (mes.strings + "" !== "21B8:BCh")
                throw mes.strings;
        }
        MetadataStreams_read_sample64Exe.read_strings_toString_21B8_BCh = read_strings_toString_21B8_BCh;
        function read_blobs_toString_22A4_44h() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
            if (mes.blobs + "" !== "22A4:44h")
                throw mes.blobs;
        }
        MetadataStreams_read_sample64Exe.read_blobs_toString_22A4_44h = read_blobs_toString_22A4_44h;
        function read_tables_toString_20D4_E4h() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
            if (mes.tables + "" !== "20D4:E4h")
                throw mes.tables;
        }
        MetadataStreams_read_sample64Exe.read_tables_toString_20D4_E4h = read_tables_toString_20D4_E4h;
    })(MetadataStreams_read_sample64Exe = tests.MetadataStreams_read_sample64Exe || (tests.MetadataStreams_read_sample64Exe = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var MetadataStreams_read_sampleExe;
    (function (MetadataStreams_read_sampleExe) {
        function read_succeeds() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
        }
        MetadataStreams_read_sampleExe.read_succeeds = read_succeeds;
        function read_guids_length_1() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
            if (mes.guids.length !== 1)
                throw mes.guids.length;
        }
        MetadataStreams_read_sampleExe.read_guids_length_1 = read_guids_length_1;
        function read_guids_0_0d9cc7924913ca5a188f769e27c2bc72() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
            if (mes.guids[0] !== "{0d9cc7924913ca5a188f769e27c2bc72}")
                throw mes.guids[0];
        }
        MetadataStreams_read_sampleExe.read_guids_0_0d9cc7924913ca5a188f769e27c2bc72 = read_guids_0_0d9cc7924913ca5a188f769e27c2bc72;
        function read_strings_toString_21B8_B8h() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
            if (mes.strings + "" !== "21B8:B8h")
                throw mes.strings;
        }
        MetadataStreams_read_sampleExe.read_strings_toString_21B8_B8h = read_strings_toString_21B8_B8h;
        function read_blobs_toString_22A0_44h() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
            if (mes.blobs + "" !== "22A0:44h")
                throw mes.blobs;
        }
        MetadataStreams_read_sampleExe.read_blobs_toString_22A0_44h = read_blobs_toString_22A0_44h;
        function read_tables_toString_20D4_E4h() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
            if (mes.tables + "" !== "20D4:E4h")
                throw mes.tables;
        }
        MetadataStreams_read_sampleExe.read_tables_toString_20D4_E4h = read_tables_toString_20D4_E4h;
    })(MetadataStreams_read_sampleExe = tests.MetadataStreams_read_sampleExe || (tests.MetadataStreams_read_sampleExe = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var OptionalHeader;
    (function (OptionalHeader) {
        function constructor_succeeds() {
            var oph = new pe.headers.OptionalHeader();
        }
        OptionalHeader.constructor_succeeds = constructor_succeeds;
        function peMagic_defaultNT32() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.peMagic !== pe.headers.PEMagic.NT32)
                throw oph.peMagic;
        }
        OptionalHeader.peMagic_defaultNT32 = peMagic_defaultNT32;
        function linkerVersion_defaultEmptyString() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.linkerVersion !== "")
                throw oph.linkerVersion;
        }
        OptionalHeader.linkerVersion_defaultEmptyString = linkerVersion_defaultEmptyString;
        function sizeOfCode_default0() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.sizeOfCode !== 0)
                throw oph.sizeOfCode;
        }
        OptionalHeader.sizeOfCode_default0 = sizeOfCode_default0;
        function sizeOfInitializedData_default0() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.sizeOfInitializedData !== 0)
                throw oph.sizeOfInitializedData;
        }
        OptionalHeader.sizeOfInitializedData_default0 = sizeOfInitializedData_default0;
        function sizeOfUninitializedData_default0() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.sizeOfUninitializedData !== 0)
                throw oph.sizeOfUninitializedData;
        }
        OptionalHeader.sizeOfUninitializedData_default0 = sizeOfUninitializedData_default0;
        function addressOfEntryPoint_default0() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.addressOfEntryPoint !== 0)
                throw oph.addressOfEntryPoint;
        }
        OptionalHeader.addressOfEntryPoint_default0 = addressOfEntryPoint_default0;
        function baseOfCode_default0x2000() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.baseOfCode !== 0x2000)
                throw oph.baseOfCode;
        }
        OptionalHeader.baseOfCode_default0x2000 = baseOfCode_default0x2000;
        function baseOfData_default0x4000() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.baseOfData !== 0x4000)
                throw oph.baseOfData;
        }
        OptionalHeader.baseOfData_default0x4000 = baseOfData_default0x4000;
        function imageBase_default0x4000() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.imageBase !== 0x4000)
                throw oph.imageBase;
        }
        OptionalHeader.imageBase_default0x4000 = imageBase_default0x4000;
        function sectionAlignment_default0x2000() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.sectionAlignment !== 0x2000)
                throw oph.sectionAlignment;
        }
        OptionalHeader.sectionAlignment_default0x2000 = sectionAlignment_default0x2000;
        function fileAlignment_default0x200() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.fileAlignment !== 0x200)
                throw oph.fileAlignment;
        }
        OptionalHeader.fileAlignment_default0x200 = fileAlignment_default0x200;
        function operatingSystemVersion_defaultEmptyString() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.operatingSystemVersion !== "")
                throw oph.operatingSystemVersion;
        }
        OptionalHeader.operatingSystemVersion_defaultEmptyString = operatingSystemVersion_defaultEmptyString;
        function imageVersion_defaultEmptyString() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.imageVersion !== "")
                throw oph.imageVersion;
        }
        OptionalHeader.imageVersion_defaultEmptyString = imageVersion_defaultEmptyString;
        function subsystemVersion_defaultEmptyString() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.subsystemVersion !== "")
                throw oph.subsystemVersion;
        }
        OptionalHeader.subsystemVersion_defaultEmptyString = subsystemVersion_defaultEmptyString;
        function win32VersionValue_default0() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.win32VersionValue !== 0)
                throw oph.win32VersionValue;
        }
        OptionalHeader.win32VersionValue_default0 = win32VersionValue_default0;
        function sizeOfImage_default0() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.sizeOfImage !== 0)
                throw oph.sizeOfImage;
        }
        OptionalHeader.sizeOfImage_default0 = sizeOfImage_default0;
        function sizeOfHeaders_default0() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.sizeOfHeaders !== 0)
                throw oph.sizeOfHeaders;
        }
        OptionalHeader.sizeOfHeaders_default0 = sizeOfHeaders_default0;
        function checkSum_default0() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.checkSum !== 0)
                throw oph.checkSum;
        }
        OptionalHeader.checkSum_default0 = checkSum_default0;
        function subsystem_defaultWindowsCUI() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.subsystem !== pe.headers.Subsystem.WindowsCUI)
                throw oph.subsystem;
        }
        OptionalHeader.subsystem_defaultWindowsCUI = subsystem_defaultWindowsCUI;
        function dllCharacteristics_defaultNxCompatible() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.dllCharacteristics !== pe.headers.DllCharacteristics.NxCompatible)
                throw oph.dllCharacteristics;
        }
        OptionalHeader.dllCharacteristics_defaultNxCompatible = dllCharacteristics_defaultNxCompatible;
        function sizeOfStackReserve_default0x100000() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.sizeOfStackReserve !== 0x100000)
                throw oph.sizeOfStackReserve;
        }
        OptionalHeader.sizeOfStackReserve_default0x100000 = sizeOfStackReserve_default0x100000;
        function sizeOfStackCommit_default0x1000() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.sizeOfStackCommit !== 0x1000)
                throw oph.sizeOfStackCommit;
        }
        OptionalHeader.sizeOfStackCommit_default0x1000 = sizeOfStackCommit_default0x1000;
        function sizeOfHeapReserve_default0x100000() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.sizeOfHeapReserve !== 0x100000)
                throw oph.sizeOfHeapReserve;
        }
        OptionalHeader.sizeOfHeapReserve_default0x100000 = sizeOfHeapReserve_default0x100000;
        function sizeOfHeapCommit_default0x1000() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.sizeOfHeapCommit !== 0x1000)
                throw oph.sizeOfHeapCommit;
        }
        OptionalHeader.sizeOfHeapCommit_default0x1000 = sizeOfHeapCommit_default0x1000;
        function loaderFlags_default0() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.loaderFlags !== 0)
                throw oph.loaderFlags;
        }
        OptionalHeader.loaderFlags_default0 = loaderFlags_default0;
        function numberOfRvaAndSizes_default16() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.numberOfRvaAndSizes !== 16)
                throw oph.numberOfRvaAndSizes;
        }
        OptionalHeader.numberOfRvaAndSizes_default16 = numberOfRvaAndSizes_default16;
        function dataDirectories_defaultZeroLength() {
            var oph = new pe.headers.OptionalHeader();
            if (oph.dataDirectories.length !== 0)
                throw oph.dataDirectories.length;
        }
        OptionalHeader.dataDirectories_defaultZeroLength = dataDirectories_defaultZeroLength;
        function toString_default() {
            var oph = new pe.headers.OptionalHeader();
            var expectedString = "NT32 WindowsCUI NxCompatible dataDirectories[]";
            if (oph.toString() !== expectedString)
                throw oph.toString() + " expected " + expectedString;
        }
        OptionalHeader.toString_default = toString_default;
        function toString_dataDirectories_1and7() {
            var oph = new pe.headers.OptionalHeader();
            oph.dataDirectories[1] = new pe.headers.AddressRange(1, 1);
            oph.dataDirectories[7] = new pe.headers.AddressRange(2, 2);
            var expectedString = "NT32 WindowsCUI NxCompatible dataDirectories[ImportSymbols,CopyrightString]";
            if (oph.toString() !== expectedString)
                throw oph.toString() + " expected " + expectedString;
        }
        OptionalHeader.toString_dataDirectories_1and7 = toString_dataDirectories_1and7;
    })(OptionalHeader = tests.OptionalHeader || (tests.OptionalHeader = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var OptionalHeader_read_NT322345;
    (function (OptionalHeader_read_NT322345) {
        var sampleBuf = (function () {
            var array = [
                pe.headers.PEMagic.NT32 & 0xFF,
                (pe.headers.PEMagic.NT32 >> 8) & 0xFF
            ];
            for (var i = 0; i < 300; i++) {
                if (typeof (array[i]) === "number")
                    continue; // PEMagic.NT32
                array[i] = i;
            }
            array[92] = 1;
            array[93] = 0;
            array[94] = 0;
            array[95] = 0;
            return array;
        })();
        var global = (function () { return this; })();
        if ("ArrayBuffer" in global) {
            var arrb = new ArrayBuffer(sampleBuf.length);
            var vi = new DataView(arrb);
            for (var i = 0; i < sampleBuf.length; i++) {
                vi.setUint8(i, sampleBuf[i]);
            }
            sampleBuf = arrb;
        }
        OptionalHeader_read_NT322345.bytes = sampleBuf;
        function read_succeeds() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
        }
        OptionalHeader_read_NT322345.read_succeeds = read_succeeds;
        function read_peMagic_NT32() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.peMagic !== pe.headers.PEMagic.NT32)
                throw oph.peMagic;
        }
        OptionalHeader_read_NT322345.read_peMagic_NT32 = read_peMagic_NT32;
        function read_linkerVersion_23() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.linkerVersion !== "2.3")
                throw oph.linkerVersion;
        }
        OptionalHeader_read_NT322345.read_linkerVersion_23 = read_linkerVersion_23;
        function read_sizeOfCode_117835012() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfCode !== 117835012)
                throw oph.sizeOfCode;
        }
        OptionalHeader_read_NT322345.read_sizeOfCode_117835012 = read_sizeOfCode_117835012;
        function read_sizeOfInitializedData_185207048() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfInitializedData !== 185207048)
                throw oph.sizeOfInitializedData;
        }
        OptionalHeader_read_NT322345.read_sizeOfInitializedData_185207048 = read_sizeOfInitializedData_185207048;
        function read_sizeOfUninitializedData_252579084() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfUninitializedData !== 252579084)
                throw oph.sizeOfUninitializedData;
        }
        OptionalHeader_read_NT322345.read_sizeOfUninitializedData_252579084 = read_sizeOfUninitializedData_252579084;
        function read_addressOfEntryPoint_319951120() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.addressOfEntryPoint !== 319951120)
                throw oph.addressOfEntryPoint;
        }
        OptionalHeader_read_NT322345.read_addressOfEntryPoint_319951120 = read_addressOfEntryPoint_319951120;
        function read_baseOfCode_387323156() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.baseOfCode !== 387323156)
                throw oph.baseOfCode;
        }
        OptionalHeader_read_NT322345.read_baseOfCode_387323156 = read_baseOfCode_387323156;
        function read_baseOfData_454695192() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.baseOfData !== 454695192)
                throw oph.baseOfData;
        }
        OptionalHeader_read_NT322345.read_baseOfData_454695192 = read_baseOfData_454695192;
        function read_imageBase_454695192() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.baseOfData !== 454695192)
                throw oph.baseOfData;
        }
        OptionalHeader_read_NT322345.read_imageBase_454695192 = read_imageBase_454695192;
        function read_sectionAlignment_589439264() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sectionAlignment !== 589439264)
                throw oph.sectionAlignment;
        }
        OptionalHeader_read_NT322345.read_sectionAlignment_589439264 = read_sectionAlignment_589439264;
        function read_fileAlignment_656811300() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.fileAlignment !== 656811300)
                throw oph.fileAlignment;
        }
        OptionalHeader_read_NT322345.read_fileAlignment_656811300 = read_fileAlignment_656811300;
        function read_operatingSystemVersion_10536_11050() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.operatingSystemVersion !== "10536.11050")
                throw oph.operatingSystemVersion;
        }
        OptionalHeader_read_NT322345.read_operatingSystemVersion_10536_11050 = read_operatingSystemVersion_10536_11050;
        function read_imageVersion_11564_12078() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.imageVersion !== "11564.12078")
                throw oph.imageVersion;
        }
        OptionalHeader_read_NT322345.read_imageVersion_11564_12078 = read_imageVersion_11564_12078;
        function read_subsystemVersion_12592_13106() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.subsystemVersion !== "12592.13106")
                throw oph.subsystemVersion;
        }
        OptionalHeader_read_NT322345.read_subsystemVersion_12592_13106 = read_subsystemVersion_12592_13106;
        function read_win32VersionValue_926299444() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.win32VersionValue !== 926299444)
                throw oph.win32VersionValue;
        }
        OptionalHeader_read_NT322345.read_win32VersionValue_926299444 = read_win32VersionValue_926299444;
        function read_sizeOfImage_993671480() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfImage !== 993671480)
                throw oph.sizeOfImage;
        }
        OptionalHeader_read_NT322345.read_sizeOfImage_993671480 = read_sizeOfImage_993671480;
        function read_sizeOfHeaders_1061043516() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfHeaders !== 1061043516)
                throw oph.sizeOfHeaders;
        }
        OptionalHeader_read_NT322345.read_sizeOfHeaders_1061043516 = read_sizeOfHeaders_1061043516;
        function read_checkSum_1128415552() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.checkSum !== 1128415552)
                throw oph.checkSum;
        }
        OptionalHeader_read_NT322345.read_checkSum_1128415552 = read_checkSum_1128415552;
        function read_subsystem_17732() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.subsystem !== 17732)
                throw oph.subsystem;
        }
        OptionalHeader_read_NT322345.read_subsystem_17732 = read_subsystem_17732;
        function read_dllCharacteristics_18246() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.dllCharacteristics !== 18246)
                throw oph.dllCharacteristics;
        }
        OptionalHeader_read_NT322345.read_dllCharacteristics_18246 = read_dllCharacteristics_18246;
        function read_sizeOfStackReserve_1263159624() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfStackReserve !== 1263159624)
                throw oph.sizeOfStackReserve;
        }
        OptionalHeader_read_NT322345.read_sizeOfStackReserve_1263159624 = read_sizeOfStackReserve_1263159624;
        function read_sizeOfStackCommit_1330531660() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfStackCommit !== 1330531660)
                throw oph.sizeOfStackCommit;
        }
        OptionalHeader_read_NT322345.read_sizeOfStackCommit_1330531660 = read_sizeOfStackCommit_1330531660;
        function read_sizeOfHeapReserve_1397903696() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfHeapReserve !== 1397903696)
                throw oph.sizeOfHeapReserve;
        }
        OptionalHeader_read_NT322345.read_sizeOfHeapReserve_1397903696 = read_sizeOfHeapReserve_1397903696;
        function read_sizeOfHeapCommit_1465275732() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfHeapCommit !== 1465275732)
                throw oph.sizeOfHeapCommit;
        }
        OptionalHeader_read_NT322345.read_sizeOfHeapCommit_1465275732 = read_sizeOfHeapCommit_1465275732;
        function read_loaderFlags_1532647768() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.loaderFlags !== 1532647768)
                throw oph.loaderFlags;
        }
        OptionalHeader_read_NT322345.read_loaderFlags_1532647768 = read_loaderFlags_1532647768;
        function read_numberOfRvaAndSizes_1() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.numberOfRvaAndSizes !== 1)
                throw oph.numberOfRvaAndSizes;
        }
        OptionalHeader_read_NT322345.read_numberOfRvaAndSizes_1 = read_numberOfRvaAndSizes_1;
        function read_dataDirectories_length_1() {
            var bi = new pe.io.BufferReader(OptionalHeader_read_NT322345.bytes);
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.dataDirectories.length !== 1)
                throw oph.dataDirectories.length;
        }
        OptionalHeader_read_NT322345.read_dataDirectories_length_1 = read_dataDirectories_length_1;
    })(OptionalHeader_read_NT322345 = tests.OptionalHeader_read_NT322345 || (tests.OptionalHeader_read_NT322345 = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var OptionalHeader_read_sample64Exe;
    (function (OptionalHeader_read_sample64Exe) {
        function read_succeeds() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
        }
        OptionalHeader_read_sample64Exe.read_succeeds = read_succeeds;
        function read_peMagic_NT64() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.peMagic !== pe.headers.PEMagic.NT64)
                throw oph.peMagic;
        }
        OptionalHeader_read_sample64Exe.read_peMagic_NT64 = read_peMagic_NT64;
        function read_linkerVersion_110() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.linkerVersion !== "11.0")
                throw oph.linkerVersion;
        }
        OptionalHeader_read_sample64Exe.read_linkerVersion_110 = read_linkerVersion_110;
        function read_sizeOfCode_1024() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfCode !== 1024)
                throw oph.sizeOfCode;
        }
        OptionalHeader_read_sample64Exe.read_sizeOfCode_1024 = read_sizeOfCode_1024;
        function read_sizeOfInitializedData_1536() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfInitializedData !== 1536)
                throw oph.sizeOfInitializedData;
        }
        OptionalHeader_read_sample64Exe.read_sizeOfInitializedData_1536 = read_sizeOfInitializedData_1536;
        function read_sizeOfUninitializedData_0() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfUninitializedData !== 0)
                throw oph.sizeOfUninitializedData;
        }
        OptionalHeader_read_sample64Exe.read_sizeOfUninitializedData_0 = read_sizeOfUninitializedData_0;
        function read_addressOfEntryPoint_0() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.addressOfEntryPoint !== 0)
                throw oph.addressOfEntryPoint;
        }
        OptionalHeader_read_sample64Exe.read_addressOfEntryPoint_0 = read_addressOfEntryPoint_0;
        function read_baseOfCode_0x2000() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.baseOfCode !== 0x2000)
                throw oph.baseOfCode;
        }
        OptionalHeader_read_sample64Exe.read_baseOfCode_0x2000 = read_baseOfCode_0x2000;
        function read_baseOfData_0x4000() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.baseOfData !== 0x4000)
                throw oph.baseOfData;
        }
        OptionalHeader_read_sample64Exe.read_baseOfData_0x4000 = read_baseOfData_0x4000;
        function read_imageBase_0x4000() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.baseOfData !== 0x4000)
                throw oph.baseOfData;
        }
        OptionalHeader_read_sample64Exe.read_imageBase_0x4000 = read_imageBase_0x4000;
        function read_sectionAlignment_0x2000() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sectionAlignment !== 0x2000)
                throw oph.sectionAlignment;
        }
        OptionalHeader_read_sample64Exe.read_sectionAlignment_0x2000 = read_sectionAlignment_0x2000;
        function read_fileAlignment_0x200() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.fileAlignment !== 0x200)
                throw oph.fileAlignment;
        }
        OptionalHeader_read_sample64Exe.read_fileAlignment_0x200 = read_fileAlignment_0x200;
        function read_operatingSystemVersion_40() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.operatingSystemVersion !== "4.0")
                throw oph.operatingSystemVersion;
        }
        OptionalHeader_read_sample64Exe.read_operatingSystemVersion_40 = read_operatingSystemVersion_40;
        function read_imageVersion_00() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.imageVersion !== "0.0")
                throw oph.imageVersion;
        }
        OptionalHeader_read_sample64Exe.read_imageVersion_00 = read_imageVersion_00;
        function read_subsystemVersion_40() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.subsystemVersion !== "4.0")
                throw oph.subsystemVersion;
        }
        OptionalHeader_read_sample64Exe.read_subsystemVersion_40 = read_subsystemVersion_40;
        function read_win32VersionValue_0() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.win32VersionValue !== 0)
                throw oph.win32VersionValue;
        }
        OptionalHeader_read_sample64Exe.read_win32VersionValue_0 = read_win32VersionValue_0;
        function read_sizeOfImage_24576() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfImage !== 24576)
                throw oph.sizeOfImage;
        }
        OptionalHeader_read_sample64Exe.read_sizeOfImage_24576 = read_sizeOfImage_24576;
        function read_sizeOfHeaders_512() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfHeaders !== 512)
                throw oph.sizeOfHeaders;
        }
        OptionalHeader_read_sample64Exe.read_sizeOfHeaders_512 = read_sizeOfHeaders_512;
        function read_checkSum_0() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.checkSum !== 0)
                throw oph.checkSum;
        }
        OptionalHeader_read_sample64Exe.read_checkSum_0 = read_checkSum_0;
        function read_subsystem_WindowsCUI() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.subsystem !== pe.headers.Subsystem.WindowsCUI)
                throw oph.subsystem;
        }
        OptionalHeader_read_sample64Exe.read_subsystem_WindowsCUI = read_subsystem_WindowsCUI;
        function read_dllCharacteristics_0x8540() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.dllCharacteristics !== 0x8540)
                throw oph.dllCharacteristics;
        }
        OptionalHeader_read_sample64Exe.read_dllCharacteristics_0x8540 = read_dllCharacteristics_0x8540;
        function read_sizeOfStackReserve_toString_400000h() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfStackReserve + "" !== "400000h")
                throw oph.sizeOfStackReserve;
        }
        OptionalHeader_read_sample64Exe.read_sizeOfStackReserve_toString_400000h = read_sizeOfStackReserve_toString_400000h;
        function read_sizeOfStackCommit_toString_4000h() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfStackCommit + "" !== "4000h")
                throw oph.sizeOfStackCommit;
        }
        OptionalHeader_read_sample64Exe.read_sizeOfStackCommit_toString_4000h = read_sizeOfStackCommit_toString_4000h;
        function read_sizeOfHeapReserve_toString_100000h() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfHeapReserve + "" !== "100000h")
                throw oph.sizeOfHeapReserve;
        }
        OptionalHeader_read_sample64Exe.read_sizeOfHeapReserve_toString_100000h = read_sizeOfHeapReserve_toString_100000h;
        function read_sizeOfHeapCommit_toString_2000h() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfHeapCommit + "" !== "2000h")
                throw oph.sizeOfHeapCommit;
        }
        OptionalHeader_read_sample64Exe.read_sizeOfHeapCommit_toString_2000h = read_sizeOfHeapCommit_toString_2000h;
        function read_loaderFlags_0() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.loaderFlags !== 0)
                throw oph.loaderFlags;
        }
        OptionalHeader_read_sample64Exe.read_loaderFlags_0 = read_loaderFlags_0;
        function read_numberOfRvaAndSizes_16() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.numberOfRvaAndSizes !== 16)
                throw oph.numberOfRvaAndSizes;
        }
        OptionalHeader_read_sample64Exe.read_numberOfRvaAndSizes_16 = read_numberOfRvaAndSizes_16;
        function read_dataDirectories_length_16() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.dataDirectories.length !== 16)
                throw oph.dataDirectories.length;
        }
        OptionalHeader_read_sample64Exe.read_dataDirectories_length_16 = read_dataDirectories_length_16;
    })(OptionalHeader_read_sample64Exe = tests.OptionalHeader_read_sample64Exe || (tests.OptionalHeader_read_sample64Exe = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var OptionalHeader_read_sampleExe;
    (function (OptionalHeader_read_sampleExe) {
        function read_succeeds() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
        }
        OptionalHeader_read_sampleExe.read_succeeds = read_succeeds;
        function read_peMagic_NT32() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.peMagic !== pe.headers.PEMagic.NT32)
                throw oph.peMagic;
        }
        OptionalHeader_read_sampleExe.read_peMagic_NT32 = read_peMagic_NT32;
        function read_linkerVersion_80() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.linkerVersion !== "8.0")
                throw oph.linkerVersion;
        }
        OptionalHeader_read_sampleExe.read_linkerVersion_80 = read_linkerVersion_80;
        function read_sizeOfCode_1024() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfCode !== 1024)
                throw oph.sizeOfCode;
        }
        OptionalHeader_read_sampleExe.read_sizeOfCode_1024 = read_sizeOfCode_1024;
        function read_sizeOfInitializedData_1536() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfInitializedData !== 1536)
                throw oph.sizeOfInitializedData;
        }
        OptionalHeader_read_sampleExe.read_sizeOfInitializedData_1536 = read_sizeOfInitializedData_1536;
        function read_sizeOfUninitializedData_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfUninitializedData !== 0)
                throw oph.sizeOfUninitializedData;
        }
        OptionalHeader_read_sampleExe.read_sizeOfUninitializedData_0 = read_sizeOfUninitializedData_0;
        function read_addressOfEntryPoint_9022() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.addressOfEntryPoint !== 9022)
                throw oph.addressOfEntryPoint;
        }
        OptionalHeader_read_sampleExe.read_addressOfEntryPoint_9022 = read_addressOfEntryPoint_9022;
        function read_baseOfCode_0x2000() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.baseOfCode !== 0x2000)
                throw oph.baseOfCode;
        }
        OptionalHeader_read_sampleExe.read_baseOfCode_0x2000 = read_baseOfCode_0x2000;
        function read_baseOfData_0x4000() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.baseOfData !== 0x4000)
                throw oph.baseOfData;
        }
        OptionalHeader_read_sampleExe.read_baseOfData_0x4000 = read_baseOfData_0x4000;
        function read_imageBase_0x4000() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.baseOfData !== 0x4000)
                throw oph.baseOfData;
        }
        OptionalHeader_read_sampleExe.read_imageBase_0x4000 = read_imageBase_0x4000;
        function read_sectionAlignment_0x2000() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sectionAlignment !== 0x2000)
                throw oph.sectionAlignment;
        }
        OptionalHeader_read_sampleExe.read_sectionAlignment_0x2000 = read_sectionAlignment_0x2000;
        function read_fileAlignment_0x200() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.fileAlignment !== 0x200)
                throw oph.fileAlignment;
        }
        OptionalHeader_read_sampleExe.read_fileAlignment_0x200 = read_fileAlignment_0x200;
        function read_operatingSystemVersion_40() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.operatingSystemVersion !== "4.0")
                throw oph.operatingSystemVersion;
        }
        OptionalHeader_read_sampleExe.read_operatingSystemVersion_40 = read_operatingSystemVersion_40;
        function read_imageVersion_00() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.imageVersion !== "0.0")
                throw oph.imageVersion;
        }
        OptionalHeader_read_sampleExe.read_imageVersion_00 = read_imageVersion_00;
        function read_subsystemVersion_40() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.subsystemVersion !== "4.0")
                throw oph.subsystemVersion;
        }
        OptionalHeader_read_sampleExe.read_subsystemVersion_40 = read_subsystemVersion_40;
        function read_win32VersionValue_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.win32VersionValue !== 0)
                throw oph.win32VersionValue;
        }
        OptionalHeader_read_sampleExe.read_win32VersionValue_0 = read_win32VersionValue_0;
        function read_sizeOfImage_32768() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfImage !== 32768)
                throw oph.sizeOfImage;
        }
        OptionalHeader_read_sampleExe.read_sizeOfImage_32768 = read_sizeOfImage_32768;
        function read_sizeOfHeaders_512() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfHeaders !== 512)
                throw oph.sizeOfHeaders;
        }
        OptionalHeader_read_sampleExe.read_sizeOfHeaders_512 = read_sizeOfHeaders_512;
        function read_checkSum_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.checkSum !== 0)
                throw oph.checkSum;
        }
        OptionalHeader_read_sampleExe.read_checkSum_0 = read_checkSum_0;
        function read_subsystem_WindowsCUI() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.subsystem !== pe.headers.Subsystem.WindowsCUI)
                throw oph.subsystem;
        }
        OptionalHeader_read_sampleExe.read_subsystem_WindowsCUI = read_subsystem_WindowsCUI;
        function read_dllCharacteristics_0x8540() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.dllCharacteristics !== 0x8540)
                throw oph.dllCharacteristics;
        }
        OptionalHeader_read_sampleExe.read_dllCharacteristics_0x8540 = read_dllCharacteristics_0x8540;
        function read_sizeOfStackReserve_0x100000() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfStackReserve !== 0x100000)
                throw oph.sizeOfStackReserve;
        }
        OptionalHeader_read_sampleExe.read_sizeOfStackReserve_0x100000 = read_sizeOfStackReserve_0x100000;
        function read_sizeOfStackCommit_0x1000() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfStackCommit !== 0x1000)
                throw oph.sizeOfStackCommit;
        }
        OptionalHeader_read_sampleExe.read_sizeOfStackCommit_0x1000 = read_sizeOfStackCommit_0x1000;
        function read_sizeOfHeapReserve_0x100000() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfHeapReserve !== 0x100000)
                throw oph.sizeOfHeapReserve;
        }
        OptionalHeader_read_sampleExe.read_sizeOfHeapReserve_0x100000 = read_sizeOfHeapReserve_0x100000;
        function read_sizeOfHeapCommit_0x1000() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.sizeOfHeapCommit !== 0x1000)
                throw oph.sizeOfHeapCommit;
        }
        OptionalHeader_read_sampleExe.read_sizeOfHeapCommit_0x1000 = read_sizeOfHeapCommit_0x1000;
        function read_loaderFlags_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.loaderFlags !== 0)
                throw oph.loaderFlags;
        }
        OptionalHeader_read_sampleExe.read_loaderFlags_0 = read_loaderFlags_0;
        function read_numberOfRvaAndSizes_16() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.numberOfRvaAndSizes !== 16)
                throw oph.numberOfRvaAndSizes;
        }
        OptionalHeader_read_sampleExe.read_numberOfRvaAndSizes_16 = read_numberOfRvaAndSizes_16;
        function read_dataDirectories_length_16() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 0x98;
            var oph = new pe.headers.OptionalHeader();
            oph.read(bi);
            if (oph.dataDirectories.length !== 16)
                throw oph.dataDirectories.length;
        }
        OptionalHeader_read_sampleExe.read_dataDirectories_length_16 = read_dataDirectories_length_16;
    })(OptionalHeader_read_sampleExe = tests.OptionalHeader_read_sampleExe || (tests.OptionalHeader_read_sampleExe = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var PEFileHeaders;
    (function (PEFileHeaders) {
        function constructor_succeeds() {
            var pefi = new pe.headers.PEFileHeaders();
        }
        PEFileHeaders.constructor_succeeds = constructor_succeeds;
        function dosHeader_defaultNotNull() {
            var pefi = new pe.headers.PEFileHeaders();
            if (!pefi.dosHeader)
                throw pefi.dosHeader;
        }
        PEFileHeaders.dosHeader_defaultNotNull = dosHeader_defaultNotNull;
        function peHeader_defaultNotNull() {
            var pefi = new pe.headers.PEFileHeaders();
            if (!pefi.peHeader)
                throw pefi.peHeader;
        }
        PEFileHeaders.peHeader_defaultNotNull = peHeader_defaultNotNull;
        function optionalHeader_defaultNotNull() {
            var pefi = new pe.headers.PEFileHeaders();
            if (!pefi.optionalHeader)
                throw pefi.optionalHeader;
        }
        PEFileHeaders.optionalHeader_defaultNotNull = optionalHeader_defaultNotNull;
        function sectionHeaders_defaultZeroLength() {
            var pefi = new pe.headers.PEFileHeaders();
            if (pefi.sectionHeaders.length !== 0)
                throw pefi.sectionHeaders.length;
        }
        PEFileHeaders.sectionHeaders_defaultZeroLength = sectionHeaders_defaultZeroLength;
        function toString_default() {
            var pefi = new pe.headers.PEFileHeaders();
            var expectedToString_withNullDosHeader = "dosHeader: [MZ].lfanew=0h dosStub: null peHeader: [332] optionalHeader: [WindowsCUI,] sectionHeaders: [0]";
            var expectedToString = 'dosHeader: [MZ].lfanew=0h dosStub: [0] peHeader: [332] optionalHeader: [WindowsCUI,] sectionHeaders: [0]';
            if (pefi.toString() !== expectedToString)
                throw pefi.toString() + " instead of expected " + expectedToString;
        }
        PEFileHeaders.toString_default = toString_default;
    })(PEFileHeaders = tests.PEFileHeaders || (tests.PEFileHeaders = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var PEFileHeaders_read_sample64Exe;
    (function (PEFileHeaders_read_sample64Exe) {
        function read_succeeds() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
        }
        PEFileHeaders_read_sample64Exe.read_succeeds = read_succeeds;
        function read_dosHeader_mz_MZ() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            if (pef.dosHeader.mz !== pe.headers.MZSignature.MZ)
                throw pef.dosHeader.mz;
        }
        PEFileHeaders_read_sample64Exe.read_dosHeader_mz_MZ = read_dosHeader_mz_MZ;
        function read_dosHeader_lfanew_128() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            if (pef.dosHeader.lfanew !== 128)
                throw pef.dosHeader.lfanew;
        }
        PEFileHeaders_read_sample64Exe.read_dosHeader_lfanew_128 = read_dosHeader_lfanew_128;
        function read_dosStub_length_64() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            if (pef.dosStub.length !== 64)
                throw pef.dosStub.length;
        }
        PEFileHeaders_read_sample64Exe.read_dosStub_length_64 = read_dosStub_length_64;
        function read_dosStub_matchesInputAt64() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            var dosStub = [];
            for (var i = 0; i < pef.dosStub.length; i++) {
                dosStub[i] = pef.dosStub[i];
            }
            var dosStubStr = dosStub.join(",");
            var arr = new Uint8Array(sample64Exe.bytes, 64, dosStub.length);
            var inputAt64 = Array(arr.length);
            for (var i = 0; i < arr.length; i++) {
                inputAt64[i] = arr[i];
            }
            var inputAt64Str = inputAt64.join(",");
            if (dosStubStr !== inputAt64Str)
                throw dosStubStr + " expected " + inputAt64Str;
        }
        PEFileHeaders_read_sample64Exe.read_dosStub_matchesInputAt64 = read_dosStub_matchesInputAt64;
        function read_peHeader_pe_PE() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            if (pef.peHeader.pe !== pe.headers.PESignature.PE)
                throw pef.peHeader.pe;
        }
        PEFileHeaders_read_sample64Exe.read_peHeader_pe_PE = read_peHeader_pe_PE;
        function read_peHeader_machine_AMD64() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            if (pef.peHeader.machine !== pe.headers.Machine.AMD64)
                throw pef.peHeader.machine;
        }
        PEFileHeaders_read_sample64Exe.read_peHeader_machine_AMD64 = read_peHeader_machine_AMD64;
        function read_optionalHeader_peMagic_NT64() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            if (pef.optionalHeader.peMagic !== pe.headers.PEMagic.NT64)
                throw pef.optionalHeader.peMagic;
        }
        PEFileHeaders_read_sample64Exe.read_optionalHeader_peMagic_NT64 = read_optionalHeader_peMagic_NT64;
        function read_optionalHeader_numberOfRvaAndSizes_16() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            if (pef.optionalHeader.numberOfRvaAndSizes !== 16)
                throw pef.optionalHeader.numberOfRvaAndSizes;
        }
        PEFileHeaders_read_sample64Exe.read_optionalHeader_numberOfRvaAndSizes_16 = read_optionalHeader_numberOfRvaAndSizes_16;
        function read_optionalHeader_dataDirectories_length_16() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            if (pef.optionalHeader.dataDirectories.length !== 16)
                throw pef.optionalHeader.dataDirectories.length;
        }
        PEFileHeaders_read_sample64Exe.read_optionalHeader_dataDirectories_length_16 = read_optionalHeader_dataDirectories_length_16;
        function read_optionalHeader_dataDirectories_14_address_8192() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            if (pef.optionalHeader.dataDirectories[14].address !== 8192)
                throw pef.optionalHeader.dataDirectories[14].address;
        }
        PEFileHeaders_read_sample64Exe.read_optionalHeader_dataDirectories_14_address_8192 = read_optionalHeader_dataDirectories_14_address_8192;
        function read_optionalHeader_dataDirectories_14_size_72() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            if (pef.optionalHeader.dataDirectories[14].size !== 72)
                throw pef.optionalHeader.dataDirectories[14].size;
        }
        PEFileHeaders_read_sample64Exe.read_optionalHeader_dataDirectories_14_size_72 = read_optionalHeader_dataDirectories_14_size_72;
        function read_sectionHeaders_length_2() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            if (pef.sectionHeaders.length !== 2)
                throw pef.sectionHeaders.length;
        }
        PEFileHeaders_read_sample64Exe.read_sectionHeaders_length_2 = read_sectionHeaders_length_2;
        function read_sectionHeaders_names_DOTtext_DOTrsrc() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            var namesArray = [];
            for (var i = 0; i < pef.sectionHeaders.length; i++) {
                namesArray.push(pef.sectionHeaders[i].name);
            }
            var namesStr = namesArray.join(" ");
            if (namesStr !== ".text .rsrc")
                throw namesStr;
        }
        PEFileHeaders_read_sample64Exe.read_sectionHeaders_names_DOTtext_DOTrsrc = read_sectionHeaders_names_DOTtext_DOTrsrc;
    })(PEFileHeaders_read_sample64Exe = tests.PEFileHeaders_read_sample64Exe || (tests.PEFileHeaders_read_sample64Exe = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var PEFileHeaders_read_sampleExe;
    (function (PEFileHeaders_read_sampleExe) {
        function read_succeeds() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
        }
        PEFileHeaders_read_sampleExe.read_succeeds = read_succeeds;
        function read_dosHeader_mz_MZ() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            if (pef.dosHeader.mz !== pe.headers.MZSignature.MZ)
                throw pef.dosHeader.mz;
        }
        PEFileHeaders_read_sampleExe.read_dosHeader_mz_MZ = read_dosHeader_mz_MZ;
        function read_dosHeader_lfanew_128() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            if (pef.dosHeader.lfanew !== 128)
                throw pef.dosHeader.lfanew;
        }
        PEFileHeaders_read_sampleExe.read_dosHeader_lfanew_128 = read_dosHeader_lfanew_128;
        function read_dosStub_length_64() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            if (pef.dosStub.length !== 64)
                throw pef.dosStub.length;
        }
        PEFileHeaders_read_sampleExe.read_dosStub_length_64 = read_dosStub_length_64;
        function read_dosStub_matchesInputAt64() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            var dosStub = [];
            for (var i = 0; i < pef.dosStub.length; i++) {
                dosStub[i] = pef.dosStub[i];
            }
            var dosStubStr = dosStub.join(",");
            var arr = new Uint8Array(sampleExe.bytes, 64, dosStub.length);
            var inputAt64 = Array(arr.length);
            for (var i = 0; i < arr.length; i++) {
                inputAt64[i] = arr[i];
            }
            var inputAt64Str = inputAt64.join(",");
            if (dosStubStr !== inputAt64Str)
                throw dosStubStr + " expected " + inputAt64Str;
        }
        PEFileHeaders_read_sampleExe.read_dosStub_matchesInputAt64 = read_dosStub_matchesInputAt64;
        function read_peHeader_pe_PE() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            if (pef.peHeader.pe !== pe.headers.PESignature.PE)
                throw pef.peHeader.pe;
        }
        PEFileHeaders_read_sampleExe.read_peHeader_pe_PE = read_peHeader_pe_PE;
        function read_peHeader_machine_I386() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            if (pef.peHeader.machine !== pe.headers.Machine.I386)
                throw pef.peHeader.machine;
        }
        PEFileHeaders_read_sampleExe.read_peHeader_machine_I386 = read_peHeader_machine_I386;
        function read_optionalHeader_peMagic_NT32() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            if (pef.optionalHeader.peMagic !== pe.headers.PEMagic.NT32)
                throw pef.optionalHeader.peMagic;
        }
        PEFileHeaders_read_sampleExe.read_optionalHeader_peMagic_NT32 = read_optionalHeader_peMagic_NT32;
        function read_optionalHeader_numberOfRvaAndSizes_16() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            if (pef.optionalHeader.numberOfRvaAndSizes !== 16)
                throw pef.optionalHeader.numberOfRvaAndSizes;
        }
        PEFileHeaders_read_sampleExe.read_optionalHeader_numberOfRvaAndSizes_16 = read_optionalHeader_numberOfRvaAndSizes_16;
        function read_optionalHeader_dataDirectories_length_16() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            if (pef.optionalHeader.dataDirectories.length !== 16)
                throw pef.optionalHeader.dataDirectories.length;
        }
        PEFileHeaders_read_sampleExe.read_optionalHeader_dataDirectories_length_16 = read_optionalHeader_dataDirectories_length_16;
        function read_optionalHeader_dataDirectories_14_address_8200() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            if (pef.optionalHeader.dataDirectories[14].address !== 8200)
                throw pef.optionalHeader.dataDirectories[14].address;
        }
        PEFileHeaders_read_sampleExe.read_optionalHeader_dataDirectories_14_address_8200 = read_optionalHeader_dataDirectories_14_address_8200;
        function read_optionalHeader_dataDirectories_14_size_72() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            if (pef.optionalHeader.dataDirectories[14].size !== 72)
                throw pef.optionalHeader.dataDirectories[14].size;
        }
        PEFileHeaders_read_sampleExe.read_optionalHeader_dataDirectories_14_size_72 = read_optionalHeader_dataDirectories_14_size_72;
        function read_sectionHeaders_length_3() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            if (pef.sectionHeaders.length !== 3)
                throw pef.sectionHeaders.length;
        }
        PEFileHeaders_read_sampleExe.read_sectionHeaders_length_3 = read_sectionHeaders_length_3;
        function read_sectionHeaders_names_DOTtext_DOTrsrc_DOTreloc() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            var namesArray = [];
            for (var i = 0; i < pef.sectionHeaders.length; i++) {
                namesArray.push(pef.sectionHeaders[i].name);
            }
            var namesStr = namesArray.join(" ");
            if (namesStr !== ".text .rsrc .reloc")
                throw namesStr;
        }
        PEFileHeaders_read_sampleExe.read_sectionHeaders_names_DOTtext_DOTrsrc_DOTreloc = read_sectionHeaders_names_DOTtext_DOTrsrc_DOTreloc;
    })(PEFileHeaders_read_sampleExe = tests.PEFileHeaders_read_sampleExe || (tests.PEFileHeaders_read_sampleExe = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var PEHeader;
    (function (PEHeader) {
        function constructor_succeeds() {
            var peh = new pe.headers.PEHeader();
        }
        PEHeader.constructor_succeeds = constructor_succeeds;
        function pe_defaultPE() {
            var peh = new pe.headers.PEHeader();
            if (peh.pe !== pe.headers.PESignature.PE)
                throw peh.pe;
        }
        PEHeader.pe_defaultPE = pe_defaultPE;
        function machine_defaultI386() {
            var peh = new pe.headers.PEHeader();
            if (peh.machine !== pe.headers.Machine.I386)
                throw peh.machine;
        }
        PEHeader.machine_defaultI386 = machine_defaultI386;
        function numberOfSections_default0() {
            var peh = new pe.headers.PEHeader();
            if (peh.numberOfSections !== 0)
                throw peh.numberOfSections;
        }
        PEHeader.numberOfSections_default0 = numberOfSections_default0;
        function timestamp_defaultZeroDate() {
            var peh = new pe.headers.PEHeader();
            if (peh.timestamp.getTime() !== new Date(0).getTime())
                throw peh.timestamp;
        }
        PEHeader.timestamp_defaultZeroDate = timestamp_defaultZeroDate;
        function pointerToSymbolTable_default0() {
            var peh = new pe.headers.PEHeader();
            if (peh.pointerToSymbolTable !== 0)
                throw peh.pointerToSymbolTable;
        }
        PEHeader.pointerToSymbolTable_default0 = pointerToSymbolTable_default0;
        function numberOfSymbols_default0() {
            var peh = new pe.headers.PEHeader();
            if (peh.numberOfSymbols !== 0)
                throw peh.numberOfSymbols;
        }
        PEHeader.numberOfSymbols_default0 = numberOfSymbols_default0;
        function sizeOfOptionalHeader_default0() {
            var peh = new pe.headers.PEHeader();
            if (peh.sizeOfOptionalHeader !== 0)
                throw peh.sizeOfOptionalHeader;
        }
        PEHeader.sizeOfOptionalHeader_default0 = sizeOfOptionalHeader_default0;
        function characteristics_defaultDll() {
            var peh = new pe.headers.PEHeader();
            var expected = pe.headers.ImageCharacteristics.Dll | pe.headers.ImageCharacteristics.Bit32Machine;
            if (peh.characteristics !== expected)
                throw peh.characteristics + " expected " + expected;
        }
        PEHeader.characteristics_defaultDll = characteristics_defaultDll;
        function toString_default() {
            var peh = new pe.headers.PEHeader();
            var expected = "I386 Bit32Machine | Dll Sections[0]";
            if (peh.toString() !== expected)
                throw peh.toString() + ' expected ' + expected;
        }
        PEHeader.toString_default = toString_default;
    })(PEHeader = tests.PEHeader || (tests.PEHeader = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var PEHeader_read_PE004567;
    (function (PEHeader_read_PE004567) {
        var sampleBuf = (function () {
            var array = [("P").charCodeAt(0), ("E").charCodeAt(0), 0, 0];
            for (var i = 0; i < 1000; i++) {
                if (i < 4)
                    continue; // skip PE00
                array[i] = i;
            }
            return array;
        })();
        var global = (function () { return this; })();
        if ("ArrayBuffer" in global) {
            var arrb = new ArrayBuffer(sampleBuf.length);
            var vi = new DataView(arrb);
            for (var i = 0; i < sampleBuf.length; i++) {
                vi.setUint8(i, sampleBuf[i]);
            }
            sampleBuf = arrb;
        }
        PEHeader_read_PE004567.bytes = sampleBuf;
        function read_succeeds() {
            var bi = new pe.io.BufferReader(PEHeader_read_PE004567.bytes);
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
        }
        PEHeader_read_PE004567.read_succeeds = read_succeeds;
        function read_pe_PE() {
            var bi = new pe.io.BufferReader(PEHeader_read_PE004567.bytes);
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
            if (peh.pe !== pe.headers.PESignature.PE)
                throw peh.pe;
        }
        PEHeader_read_PE004567.read_pe_PE = read_pe_PE;
        function read_machine_1284() {
            var bi = new pe.io.BufferReader(PEHeader_read_PE004567.bytes);
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
            if (peh.machine !== 1284)
                throw peh.machine;
        }
        PEHeader_read_PE004567.read_machine_1284 = read_machine_1284;
        function read_numberOfSections_1798() {
            var bi = new pe.io.BufferReader(PEHeader_read_PE004567.bytes);
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
            if (peh.numberOfSections !== 1798)
                throw peh.numberOfSections;
        }
        PEHeader_read_PE004567.read_numberOfSections_1798 = read_numberOfSections_1798;
        function read_timestamp_1975Nov14_142408() {
            var bi = new pe.io.BufferReader(PEHeader_read_PE004567.bytes);
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
            var expectedDate = new Date(1975, 10, 14, 14, 24, 08);
            if (peh.timestamp.getTime() !== expectedDate.getTime())
                throw peh.timestamp + " expected " + expectedDate;
        }
        PEHeader_read_PE004567.read_timestamp_1975Nov14_142408 = read_timestamp_1975Nov14_142408;
        function read_pointerToSymbolTable_252579084() {
            var bi = new pe.io.BufferReader(PEHeader_read_PE004567.bytes);
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
            if (peh.pointerToSymbolTable !== 252579084)
                throw peh.pointerToSymbolTable;
        }
        PEHeader_read_PE004567.read_pointerToSymbolTable_252579084 = read_pointerToSymbolTable_252579084;
        function read_numberOfSymbols_319951120() {
            var bi = new pe.io.BufferReader(PEHeader_read_PE004567.bytes);
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
            if (peh.numberOfSymbols !== 319951120)
                throw peh.numberOfSymbols;
        }
        PEHeader_read_PE004567.read_numberOfSymbols_319951120 = read_numberOfSymbols_319951120;
        function read_sizeOfOptionalHeader_5396() {
            var bi = new pe.io.BufferReader(PEHeader_read_PE004567.bytes);
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
            if (peh.sizeOfOptionalHeader !== 5396)
                throw peh.sizeOfOptionalHeader;
        }
        PEHeader_read_PE004567.read_sizeOfOptionalHeader_5396 = read_sizeOfOptionalHeader_5396;
        function read_characteristics_5910() {
            var bi = new pe.io.BufferReader(PEHeader_read_PE004567.bytes);
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
            if (peh.characteristics !== 5910)
                throw peh.characteristics;
        }
        PEHeader_read_PE004567.read_characteristics_5910 = read_characteristics_5910;
    })(PEHeader_read_PE004567 = tests.PEHeader_read_PE004567 || (tests.PEHeader_read_PE004567 = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var PEHeader_read_sample64Exe;
    (function (PEHeader_read_sample64Exe) {
        function read_succeeds() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 128;
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
        }
        PEHeader_read_sample64Exe.read_succeeds = read_succeeds;
        function read_pe_PE() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 128;
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
            if (peh.pe !== pe.headers.PESignature.PE)
                throw peh.pe;
        }
        PEHeader_read_sample64Exe.read_pe_PE = read_pe_PE;
        function read_machine_AMD64() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 128;
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
            if (peh.machine !== pe.headers.Machine.AMD64)
                throw peh.machine;
        }
        PEHeader_read_sample64Exe.read_machine_AMD64 = read_machine_AMD64;
        function read_numberOfSections_2() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 128;
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
            if (peh.numberOfSections !== 2)
                throw peh.numberOfSections;
        }
        PEHeader_read_sample64Exe.read_numberOfSections_2 = read_numberOfSections_2;
        function read_timestamp_2012Dec6_220520() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 128;
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
            var expectedDate = new Date(2012, 11, 6, 22, 05, 20);
            if (peh.timestamp.getTime() !== expectedDate.getTime())
                throw peh.timestamp + " expected " + expectedDate;
        }
        PEHeader_read_sample64Exe.read_timestamp_2012Dec6_220520 = read_timestamp_2012Dec6_220520;
        function read_pointerToSymbolTable_0() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 128;
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
            if (peh.pointerToSymbolTable !== 0)
                throw peh.pointerToSymbolTable;
        }
        PEHeader_read_sample64Exe.read_pointerToSymbolTable_0 = read_pointerToSymbolTable_0;
        function read_numberOfSymbols_0() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 128;
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
            if (peh.numberOfSymbols !== 0)
                throw peh.numberOfSymbols;
        }
        PEHeader_read_sample64Exe.read_numberOfSymbols_0 = read_numberOfSymbols_0;
        function read_sizeOfOptionalHeader_240() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 128;
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
            if (peh.sizeOfOptionalHeader !== 240)
                throw peh.sizeOfOptionalHeader;
        }
        PEHeader_read_sample64Exe.read_sizeOfOptionalHeader_240 = read_sizeOfOptionalHeader_240;
        function read_characteristics_LargeAddressAwareExecutableImage() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            bi.offset = 128;
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
            var expected = pe.headers.ImageCharacteristics.LargeAddressAware | pe.headers.ImageCharacteristics.ExecutableImage;
            if (peh.characteristics !== expected)
                throw peh.characteristics + " expected " + expected;
        }
        PEHeader_read_sample64Exe.read_characteristics_LargeAddressAwareExecutableImage = read_characteristics_LargeAddressAwareExecutableImage;
    })(PEHeader_read_sample64Exe = tests.PEHeader_read_sample64Exe || (tests.PEHeader_read_sample64Exe = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var PEHeader_read_sampleExe;
    (function (PEHeader_read_sampleExe) {
        function read_succeeds() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 128;
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
        }
        PEHeader_read_sampleExe.read_succeeds = read_succeeds;
        function read_pe_PE() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 128;
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
            if (peh.pe !== pe.headers.PESignature.PE)
                throw peh.pe;
        }
        PEHeader_read_sampleExe.read_pe_PE = read_pe_PE;
        function read_machine_I386() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 128;
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
            if (peh.machine !== pe.headers.Machine.I386)
                throw peh.machine;
        }
        PEHeader_read_sampleExe.read_machine_I386 = read_machine_I386;
        function read_numberOfSections_3() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 128;
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
            if (peh.numberOfSections !== 3)
                throw peh.numberOfSections;
        }
        PEHeader_read_sampleExe.read_numberOfSections_3 = read_numberOfSections_3;
        function read_timestamp_2012Nov5_093251() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 128;
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
            var expectedDate = new Date(2012, 10, 5, 9, 32, 51);
            if (peh.timestamp.getTime() !== expectedDate.getTime())
                throw peh.timestamp + " expected " + expectedDate;
        }
        PEHeader_read_sampleExe.read_timestamp_2012Nov5_093251 = read_timestamp_2012Nov5_093251;
        function read_pointerToSymbolTable_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 128;
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
            if (peh.pointerToSymbolTable !== 0)
                throw peh.pointerToSymbolTable;
        }
        PEHeader_read_sampleExe.read_pointerToSymbolTable_0 = read_pointerToSymbolTable_0;
        function read_numberOfSymbols_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 128;
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
            if (peh.numberOfSymbols !== 0)
                throw peh.numberOfSymbols;
        }
        PEHeader_read_sampleExe.read_numberOfSymbols_0 = read_numberOfSymbols_0;
        function read_sizeOfOptionalHeader_224() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 128;
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
            if (peh.sizeOfOptionalHeader !== 224)
                throw peh.sizeOfOptionalHeader;
        }
        PEHeader_read_sampleExe.read_sizeOfOptionalHeader_224 = read_sizeOfOptionalHeader_224;
        function read_characteristics_Bit32MachineExecutableImage() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            bi.offset = 128;
            var peh = new pe.headers.PEHeader();
            peh.read(bi);
            var expected = pe.headers.ImageCharacteristics.Bit32Machine | pe.headers.ImageCharacteristics.ExecutableImage;
            if (peh.characteristics !== expected)
                throw peh.characteristics + " expected " + expected;
        }
        PEHeader_read_sampleExe.read_characteristics_Bit32MachineExecutableImage = read_characteristics_Bit32MachineExecutableImage;
    })(PEHeader_read_sampleExe = tests.PEHeader_read_sampleExe || (tests.PEHeader_read_sampleExe = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var ResourceDirectory;
    (function (ResourceDirectory) {
        function constructor_succeeds() {
            var dr = new pe.unmanaged.ResourceDirectory();
        }
        ResourceDirectory.constructor_succeeds = constructor_succeeds;
        function characterstics_default_0() {
            var dr = new pe.unmanaged.ResourceDirectory();
            if (dr.characteristics !== 0)
                throw dr.characteristics;
        }
        ResourceDirectory.characterstics_default_0 = characterstics_default_0;
        function timestamp_default_Epoch() {
            var dr = new pe.unmanaged.ResourceDirectory();
            if (dr.timestamp.getTime() !== new Date(0).getTime())
                throw dr.timestamp + " expected " + new Date(0);
        }
        ResourceDirectory.timestamp_default_Epoch = timestamp_default_Epoch;
        function version_default_emptyString() {
            var dr = new pe.unmanaged.ResourceDirectory();
            if (dr.version !== "")
                throw dr.version;
        }
        ResourceDirectory.version_default_emptyString = version_default_emptyString;
        function subdirectories_default_length_0() {
            var dr = new pe.unmanaged.ResourceDirectory();
            if (dr.subdirectories.length !== 0)
                throw dr.subdirectories.length;
        }
        ResourceDirectory.subdirectories_default_length_0 = subdirectories_default_length_0;
        function dataEntries_default_length_0() {
            var dr = new pe.unmanaged.ResourceDirectory();
            if (dr.dataEntries.length !== 0)
                throw dr.dataEntries.length;
        }
        ResourceDirectory.dataEntries_default_length_0 = dataEntries_default_length_0;
    })(ResourceDirectory = tests.ResourceDirectory || (tests.ResourceDirectory = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var ResourceDirectory_read_sampleExe;
    (function (ResourceDirectory_read_sampleExe) {
        function read_succeeds() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Resources].address);
            var redi = new pe.unmanaged.ResourceDirectory();
            redi.read(bi);
        }
        ResourceDirectory_read_sampleExe.read_succeeds = read_succeeds;
        function read_characteristics_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Resources].address);
            var redi = new pe.unmanaged.ResourceDirectory();
            redi.read(bi);
            if (redi.characteristics !== 0)
                throw redi.characteristics;
        }
        ResourceDirectory_read_sampleExe.read_characteristics_0 = read_characteristics_0;
        function read_version_00() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Resources].address);
            var redi = new pe.unmanaged.ResourceDirectory();
            redi.read(bi);
            if (redi.version !== "0.0")
                throw redi.version;
        }
        ResourceDirectory_read_sampleExe.read_version_00 = read_version_00;
        function read_subdirectories_length_1() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Resources].address);
            var redi = new pe.unmanaged.ResourceDirectory();
            redi.read(bi);
            if (redi.subdirectories.length !== 1)
                throw redi.subdirectories.length;
        }
        ResourceDirectory_read_sampleExe.read_subdirectories_length_1 = read_subdirectories_length_1;
        function read_dataEntries_length_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Resources].address);
            var redi = new pe.unmanaged.ResourceDirectory();
            redi.read(bi);
            if (redi.dataEntries.length !== 0)
                throw redi.dataEntries.length;
        }
        ResourceDirectory_read_sampleExe.read_dataEntries_length_0 = read_dataEntries_length_0;
        function read_subdirectories_0_name_null() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Resources].address);
            var redi = new pe.unmanaged.ResourceDirectory();
            redi.read(bi);
            if (redi.subdirectories[0].name !== null)
                throw redi.subdirectories[0].name;
        }
        ResourceDirectory_read_sampleExe.read_subdirectories_0_name_null = read_subdirectories_0_name_null;
        function read_subdirectories_0_integerId_16() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Resources].address);
            var redi = new pe.unmanaged.ResourceDirectory();
            redi.read(bi);
            if (redi.subdirectories[0].integerId !== 16)
                throw redi.subdirectories[0].integerId;
        }
        ResourceDirectory_read_sampleExe.read_subdirectories_0_integerId_16 = read_subdirectories_0_integerId_16;
        function read_subdirectories_0_directory_notNull() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Resources].address);
            var redi = new pe.unmanaged.ResourceDirectory();
            redi.read(bi);
            if (redi.subdirectories[0].directory === null)
                throw redi.subdirectories[0].directory;
        }
        ResourceDirectory_read_sampleExe.read_subdirectories_0_directory_notNull = read_subdirectories_0_directory_notNull;
        function read_subdirectories_0_directory_characteristics_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Resources].address);
            var redi = new pe.unmanaged.ResourceDirectory();
            redi.read(bi);
            if (redi.subdirectories[0].directory.characteristics !== 0)
                throw redi.subdirectories[0].directory.characteristics;
        }
        ResourceDirectory_read_sampleExe.read_subdirectories_0_directory_characteristics_0 = read_subdirectories_0_directory_characteristics_0;
        function read_subdirectories_0_directory_version_00() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Resources].address);
            var redi = new pe.unmanaged.ResourceDirectory();
            redi.read(bi);
            if (redi.subdirectories[0].directory.version !== "0.0")
                throw redi.subdirectories[0].directory.version;
        }
        ResourceDirectory_read_sampleExe.read_subdirectories_0_directory_version_00 = read_subdirectories_0_directory_version_00;
        function read_subdirectories_0_directory_subdirectories_length_1() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Resources].address);
            var redi = new pe.unmanaged.ResourceDirectory();
            redi.read(bi);
            if (redi.subdirectories[0].directory.subdirectories.length !== 1)
                throw redi.subdirectories[0].directory.subdirectories;
        }
        ResourceDirectory_read_sampleExe.read_subdirectories_0_directory_subdirectories_length_1 = read_subdirectories_0_directory_subdirectories_length_1;
        function read_subdirectories_0_directory_dataEntries_length_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Resources].address);
            var redi = new pe.unmanaged.ResourceDirectory();
            redi.read(bi);
            if (redi.subdirectories[0].directory.dataEntries.length !== 0)
                throw redi.subdirectories[0].directory.dataEntries;
        }
        ResourceDirectory_read_sampleExe.read_subdirectories_0_directory_dataEntries_length_0 = read_subdirectories_0_directory_dataEntries_length_0;
        function read_subdirectories_0_directory_subdirectories_0_name_null() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Resources].address);
            var redi = new pe.unmanaged.ResourceDirectory();
            redi.read(bi);
            if (redi.subdirectories[0].directory.subdirectories[0].name !== null)
                throw redi.subdirectories[0].directory.subdirectories[0].name;
        }
        ResourceDirectory_read_sampleExe.read_subdirectories_0_directory_subdirectories_0_name_null = read_subdirectories_0_directory_subdirectories_0_name_null;
        function read_subdirectories_0_directory_subdirectories_0_integerId_1() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Resources].address);
            var redi = new pe.unmanaged.ResourceDirectory();
            redi.read(bi);
            if (redi.subdirectories[0].directory.subdirectories[0].integerId !== 1)
                throw redi.subdirectories[0].directory.subdirectories[0].integerId;
        }
        ResourceDirectory_read_sampleExe.read_subdirectories_0_directory_subdirectories_0_integerId_1 = read_subdirectories_0_directory_subdirectories_0_integerId_1;
        function read_subdirectories_0_directory_subdirectories_0_directory_notNull() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Resources].address);
            var redi = new pe.unmanaged.ResourceDirectory();
            redi.read(bi);
            if (redi.subdirectories[0].directory.subdirectories[0].directory === null)
                throw redi.subdirectories[0].directory.subdirectories[0].directory;
        }
        ResourceDirectory_read_sampleExe.read_subdirectories_0_directory_subdirectories_0_directory_notNull = read_subdirectories_0_directory_subdirectories_0_directory_notNull;
        function read_subdirectories_0_directory_subdirectories_0_directory_characteristics_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Resources].address);
            var redi = new pe.unmanaged.ResourceDirectory();
            redi.read(bi);
            if (redi.subdirectories[0].directory.subdirectories[0].directory.characteristics !== 0)
                throw redi.subdirectories[0].directory.subdirectories[0].directory.characteristics;
        }
        ResourceDirectory_read_sampleExe.read_subdirectories_0_directory_subdirectories_0_directory_characteristics_0 = read_subdirectories_0_directory_subdirectories_0_directory_characteristics_0;
        function read_subdirectories_0_directory_subdirectories_0_directory_version_00() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Resources].address);
            var redi = new pe.unmanaged.ResourceDirectory();
            redi.read(bi);
            if (redi.subdirectories[0].directory.subdirectories[0].directory.version !== "0.0")
                throw redi.subdirectories[0].directory.subdirectories[0].directory.version;
        }
        ResourceDirectory_read_sampleExe.read_subdirectories_0_directory_subdirectories_0_directory_version_00 = read_subdirectories_0_directory_subdirectories_0_directory_version_00;
        function read_subdirectories_0_directory_subdirectories_0_directory_subdirectories_length_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Resources].address);
            var redi = new pe.unmanaged.ResourceDirectory();
            redi.read(bi);
            if (redi.subdirectories[0].directory.subdirectories[0].directory.subdirectories.length !== 0)
                throw redi.subdirectories[0].directory.subdirectories[0].directory.subdirectories.length;
        }
        ResourceDirectory_read_sampleExe.read_subdirectories_0_directory_subdirectories_0_directory_subdirectories_length_0 = read_subdirectories_0_directory_subdirectories_0_directory_subdirectories_length_0;
        function read_subdirectories_0_directory_subdirectories_0_directory_dataEntries_length_1() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Resources].address);
            var redi = new pe.unmanaged.ResourceDirectory();
            redi.read(bi);
            if (redi.subdirectories[0].directory.subdirectories[0].directory.dataEntries.length !== 1)
                throw redi.subdirectories[0].directory.subdirectories[0].directory.dataEntries.length;
        }
        ResourceDirectory_read_sampleExe.read_subdirectories_0_directory_subdirectories_0_directory_dataEntries_length_1 = read_subdirectories_0_directory_subdirectories_0_directory_dataEntries_length_1;
        function read_subdirectories_0_directory_subdirectories_0_directory_dataEntries_0_name_null() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Resources].address);
            var redi = new pe.unmanaged.ResourceDirectory();
            redi.read(bi);
            if (redi.subdirectories[0].directory.subdirectories[0].directory.dataEntries[0].name !== null)
                throw redi.subdirectories[0].directory.subdirectories[0].directory.dataEntries[0].name;
        }
        ResourceDirectory_read_sampleExe.read_subdirectories_0_directory_subdirectories_0_directory_dataEntries_0_name_null = read_subdirectories_0_directory_subdirectories_0_directory_dataEntries_0_name_null;
        function read_subdirectories_0_directory_subdirectories_0_directory_dataEntries_0_integerId_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Resources].address);
            var redi = new pe.unmanaged.ResourceDirectory();
            redi.read(bi);
            if (redi.subdirectories[0].directory.subdirectories[0].directory.dataEntries[0].integerId !== 0)
                throw redi.subdirectories[0].directory.subdirectories[0].directory.dataEntries[0].integerId;
        }
        ResourceDirectory_read_sampleExe.read_subdirectories_0_directory_subdirectories_0_directory_dataEntries_0_integerId_0 = read_subdirectories_0_directory_subdirectories_0_directory_dataEntries_0_integerId_0;
        function read_subdirectories_0_directory_subdirectories_0_directory_dataEntries_0_dataRva_16472() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Resources].address);
            var redi = new pe.unmanaged.ResourceDirectory();
            redi.read(bi);
            if (redi.subdirectories[0].directory.subdirectories[0].directory.dataEntries[0].dataRva !== 16472)
                throw redi.subdirectories[0].directory.subdirectories[0].directory.dataEntries[0].dataRva;
        }
        ResourceDirectory_read_sampleExe.read_subdirectories_0_directory_subdirectories_0_directory_dataEntries_0_dataRva_16472 = read_subdirectories_0_directory_subdirectories_0_directory_dataEntries_0_dataRva_16472;
        function read_subdirectories_0_directory_subdirectories_0_directory_dataEntries_0_size_580() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Resources].address);
            var redi = new pe.unmanaged.ResourceDirectory();
            redi.read(bi);
            if (redi.subdirectories[0].directory.subdirectories[0].directory.dataEntries[0].size !== 580)
                throw redi.subdirectories[0].directory.subdirectories[0].directory.dataEntries[0].size;
        }
        ResourceDirectory_read_sampleExe.read_subdirectories_0_directory_subdirectories_0_directory_dataEntries_0_size_580 = read_subdirectories_0_directory_subdirectories_0_directory_dataEntries_0_size_580;
        function read_subdirectories_0_directory_subdirectories_0_directory_dataEntries_0_codepage_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Resources].address);
            var redi = new pe.unmanaged.ResourceDirectory();
            redi.read(bi);
            if (redi.subdirectories[0].directory.subdirectories[0].directory.dataEntries[0].codepage !== 0)
                throw redi.subdirectories[0].directory.subdirectories[0].directory.dataEntries[0].codepage;
        }
        ResourceDirectory_read_sampleExe.read_subdirectories_0_directory_subdirectories_0_directory_dataEntries_0_codepage_0 = read_subdirectories_0_directory_subdirectories_0_directory_dataEntries_0_codepage_0;
        function read_subdirectories_0_directory_subdirectories_0_directory_dataEntries_0_reserved_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Resources].address);
            var redi = new pe.unmanaged.ResourceDirectory();
            redi.read(bi);
            if (redi.subdirectories[0].directory.subdirectories[0].directory.dataEntries[0].reserved !== 0)
                throw redi.subdirectories[0].directory.subdirectories[0].directory.dataEntries[0].reserved;
        }
        ResourceDirectory_read_sampleExe.read_subdirectories_0_directory_subdirectories_0_directory_dataEntries_0_reserved_0 = read_subdirectories_0_directory_subdirectories_0_directory_dataEntries_0_reserved_0;
    })(ResourceDirectory_read_sampleExe = tests.ResourceDirectory_read_sampleExe || (tests.ResourceDirectory_read_sampleExe = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var SectionHeader;
    (function (SectionHeader) {
        function constructor_succeeds() {
            var seh = new pe.headers.SectionHeader();
        }
        SectionHeader.constructor_succeeds = constructor_succeeds;
        function name_defaultEmptyString() {
            var seh = new pe.headers.SectionHeader();
            if (seh.name !== "")
                throw seh.name;
        }
        SectionHeader.name_defaultEmptyString = name_defaultEmptyString;
        function toString_default() {
            var seh = new pe.headers.SectionHeader();
            var expectedString = " 0:0@0h";
            if (seh.toString() != expectedString)
                throw seh + " expected " + expectedString;
        }
        SectionHeader.toString_default = toString_default;
        function pointerToRelocations_default0() {
            var seh = new pe.headers.SectionHeader();
            if (seh.pointerToRelocations !== 0)
                throw seh.pointerToRelocations;
        }
        SectionHeader.pointerToRelocations_default0 = pointerToRelocations_default0;
    })(SectionHeader = tests.SectionHeader || (tests.SectionHeader = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var TableStream_read_monoCorlibDll;
    (function (TableStream_read_monoCorlibDll) {
        function read_succeeds() {
            var bi = new pe.io.BufferReader(monoCorlib);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
            bi.setVirtualOffset(mes.tables.address);
            var tas = new pe.managed.metadata.TableStream();
            tas.read(bi, mes.strings.size, mes.guids.length, mes.blobs.size);
        }
        TableStream_read_monoCorlibDll.read_succeeds = read_succeeds;
        function modules_length_1() {
            var bi = new pe.io.BufferReader(monoCorlib);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
            bi.setVirtualOffset(mes.tables.address);
            var tas = new pe.managed.metadata.TableStream();
            tas.read(bi, mes.strings.size, mes.guids.length, mes.blobs.size);
            if (tas.tables[pe.managed.metadata.TableKind.Module].length !== 1)
                throw tas.tables[pe.managed.metadata.TableKind.Module].length;
        }
        TableStream_read_monoCorlibDll.modules_length_1 = modules_length_1;
        function modules_0_name_mscorlibDll() {
            var bi = new pe.io.BufferReader(monoCorlib);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
            bi.setVirtualOffset(mes.tables.address);
            var tas = new pe.managed.metadata.TableStream();
            tas.read(bi, mes.strings.size, mes.guids.length, mes.blobs.size);
            var _module = tas.tables[pe.managed.metadata.TableKind.Module][0];
            var moduleName = tas.stringIndices[_module.name];
            if (moduleName !== "mscorlib.dll")
                throw moduleName;
        }
        TableStream_read_monoCorlibDll.modules_0_name_mscorlibDll = modules_0_name_mscorlibDll;
        function modules_0_generation_0() {
            var bi = new pe.io.BufferReader(monoCorlib);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
            bi.setVirtualOffset(mes.tables.address);
            var tas = new pe.managed.metadata.TableStream();
            tas.read(bi, mes.strings.size, mes.guids.length, mes.blobs.size);
            var _module = tas.tables[pe.managed.metadata.TableKind.Module][0];
            if (_module.generation !== 0)
                throw _module.generation;
        }
        TableStream_read_monoCorlibDll.modules_0_generation_0 = modules_0_generation_0;
        function modules_0_mvid_5f771c4d459bd228469487b532184ce5() {
            var bi = new pe.io.BufferReader(monoCorlib);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
            bi.setVirtualOffset(mes.tables.address);
            var tas = new pe.managed.metadata.TableStream();
            tas.read(bi, mes.strings.size, mes.guids.length, mes.blobs.size);
            var _module = tas.tables[pe.managed.metadata.TableKind.Module][0];
            var mvid = mes.guids[_module.mvid];
            if (mvid !== "{5f771c4d459bd228469487b532184ce5}")
                throw mvid;
        }
        TableStream_read_monoCorlibDll.modules_0_mvid_5f771c4d459bd228469487b532184ce5 = modules_0_mvid_5f771c4d459bd228469487b532184ce5;
        function modules_0_encId_null() {
            var bi = new pe.io.BufferReader(monoCorlib);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
            bi.setVirtualOffset(mes.tables.address);
            var tas = new pe.managed.metadata.TableStream();
            tas.read(bi, mes.strings.size, mes.guids.length, mes.blobs.size);
            var _module = tas.tables[pe.managed.metadata.TableKind.Module][0];
            if (_module.encId !== null)
                throw _module.encId;
        }
        TableStream_read_monoCorlibDll.modules_0_encId_null = modules_0_encId_null;
        function modules_0_encBaseId_null() {
            var bi = new pe.io.BufferReader(monoCorlib);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
            bi.setVirtualOffset(mes.tables.address);
            var tas = new pe.managed.metadata.TableStream();
            tas.read(bi, mes.strings.size, mes.guids.length, mes.blobs.size);
            var _module = tas.tables[pe.managed.metadata.TableKind.Module][0];
            if (_module.encBaseId !== null)
                throw _module.encBaseId;
        }
        TableStream_read_monoCorlibDll.modules_0_encBaseId_null = modules_0_encBaseId_null;
        function typeRefs_empty() {
            var bi = new pe.io.BufferReader(monoCorlib);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
            bi.setVirtualOffset(mes.tables.address);
            var tas = new pe.managed.metadata.TableStream();
            tas.read(bi, mes.strings.size, mes.guids.length, mes.blobs.size);
            var typeRefs = tas.tables[pe.managed.metadata.TableKind.TypeRef];
            if (typeRefs.length)
                throw typeRefs.length;
        }
        TableStream_read_monoCorlibDll.typeRefs_empty = typeRefs_empty;
    })(TableStream_read_monoCorlibDll = tests.TableStream_read_monoCorlibDll || (tests.TableStream_read_monoCorlibDll = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var TableStream_read_sampleExe;
    (function (TableStream_read_sampleExe) {
        function read_succeeds() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
            bi.setVirtualOffset(mes.tables.address);
            var tas = new pe.managed.metadata.TableStream();
            tas.read(bi, mes.strings.size, mes.guids.length, mes.blobs.size);
        }
        TableStream_read_sampleExe.read_succeeds = read_succeeds;
        function modules_length_1() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
            bi.setVirtualOffset(mes.tables.address);
            var tas = new pe.managed.metadata.TableStream();
            tas.read(bi, mes.strings.size, mes.guids.length, mes.blobs.size);
            if (tas.tables[pe.managed.metadata.TableKind.Module].length !== 1)
                throw tas.tables[pe.managed.metadata.TableKind.Module].length;
        }
        TableStream_read_sampleExe.modules_length_1 = modules_length_1;
        function modules_0_name_sampleExe() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
            bi.setVirtualOffset(mes.tables.address);
            var tas = new pe.managed.metadata.TableStream();
            tas.read(bi, mes.strings.size, mes.guids.length, mes.blobs.size);
            var _module = tas.tables[pe.managed.metadata.TableKind.Module][0];
            var moduleName = tas.stringIndices[_module.name];
            if (moduleName !== "sample.exe")
                throw moduleName;
        }
        TableStream_read_sampleExe.modules_0_name_sampleExe = modules_0_name_sampleExe;
        function modules_0_generation_0() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
            bi.setVirtualOffset(mes.tables.address);
            var tas = new pe.managed.metadata.TableStream();
            tas.read(bi, mes.strings.size, mes.guids.length, mes.blobs.size);
            var _module = tas.tables[pe.managed.metadata.TableKind.Module][0];
            if (_module.generation !== 0)
                throw _module.generation;
        }
        TableStream_read_sampleExe.modules_0_generation_0 = modules_0_generation_0;
        function modules_0_mvid_0d9cc7924913ca5a188f769e27c2bc72() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
            bi.setVirtualOffset(mes.tables.address);
            var tas = new pe.managed.metadata.TableStream();
            tas.read(bi, mes.strings.size, mes.guids.length, mes.blobs.size);
            var _module = tas.tables[pe.managed.metadata.TableKind.Module][0];
            var mvid = mes.guids[_module.mvid];
            if (mvid !== "{0d9cc7924913ca5a188f769e27c2bc72}")
                throw mvid;
        }
        TableStream_read_sampleExe.modules_0_mvid_0d9cc7924913ca5a188f769e27c2bc72 = modules_0_mvid_0d9cc7924913ca5a188f769e27c2bc72;
        function modules_0_encId_null() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
            bi.setVirtualOffset(mes.tables.address);
            var tas = new pe.managed.metadata.TableStream();
            tas.read(bi, mes.strings.size, mes.guids.length, mes.blobs.size);
            var _module = tas.tables[pe.managed.metadata.TableKind.Module][0];
            if (_module.encId !== null)
                throw _module.encId;
        }
        TableStream_read_sampleExe.modules_0_encId_null = modules_0_encId_null;
        function modules_0_encBaseId_null() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
            bi.setVirtualOffset(mes.tables.address);
            var tas = new pe.managed.metadata.TableStream();
            tas.read(bi, mes.strings.size, mes.guids.length, mes.blobs.size);
            var _module = tas.tables[pe.managed.metadata.TableKind.Module][0];
            if (_module.encBaseId !== null)
                throw _module.encBaseId;
        }
        TableStream_read_sampleExe.modules_0_encBaseId_null = modules_0_encBaseId_null;
        function typeRefs_length_4() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var pef = new pe.headers.PEFileHeaders();
            pef.read(bi);
            bi.sections = pef.sectionHeaders;
            bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);
            var cdi = new pe.managed.metadata.ClrDirectory();
            cdi.read(bi);
            bi.setVirtualOffset(cdi.metadataDir.address);
            var cme = new pe.managed.metadata.ClrMetadata();
            cme.read(bi);
            var mes = new pe.managed.metadata.MetadataStreams();
            mes.read(cdi.metadataDir.address, cme.streamCount, bi);
            bi.setVirtualOffset(mes.tables.address);
            var tas = new pe.managed.metadata.TableStream();
            tas.read(bi, mes.strings.size, mes.guids.length, mes.blobs.size);
            var typeRefs = tas.tables[pe.managed.metadata.TableKind.TypeRef];
            if (typeRefs.length !== 4)
                throw typeRefs.length;
        }
        TableStream_read_sampleExe.typeRefs_length_4 = typeRefs_length_4;
    })(TableStream_read_sampleExe = tests.TableStream_read_sampleExe || (tests.TableStream_read_sampleExe = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var AppDomain_monoCorlibDll;
    (function (AppDomain_monoCorlibDll) {
        function constructor_succeeds() {
            var appDomain = new pe.managed.AppDomain();
        }
        AppDomain_monoCorlibDll.constructor_succeeds = constructor_succeeds;
        function read_succeeds() {
            var bi = new pe.io.BufferReader(monoCorlib);
            var appDomain = new pe.managed.AppDomain();
            var asm = appDomain.read(bi);
        }
        AppDomain_monoCorlibDll.read_succeeds = read_succeeds;
        function read_toString() {
            var bi = new pe.io.BufferReader(monoCorlib);
            var appDomain = new pe.managed.AppDomain();
            var asm = appDomain.read(bi);
            var expectedFullName = "mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089";
            if (asm.toString() !== expectedFullName)
                throw asm.toString() + " expected " + expectedFullName;
        }
        AppDomain_monoCorlibDll.read_toString = read_toString;
        function read_types_length_2094() {
            var bi = new pe.io.BufferReader(monoCorlib);
            var appDomain = new pe.managed.AppDomain();
            var asm = appDomain.read(bi);
            if (asm.types.length !== 2094)
                throw asm.types.length;
        }
        AppDomain_monoCorlibDll.read_types_length_2094 = read_types_length_2094;
        function read_types_0_1_21_last_toString() {
            var bi = new pe.io.BufferReader(monoCorlib);
            var appDomain = new pe.managed.AppDomain();
            var asm = appDomain.read(bi);
            var expectedFullName_0 = "<Module>";
            var expectedFullName_1 = "Consts";
            var expectedFullName_21 = "Microsoft.Win32.SafeHandles.SafeFileHandle";
            var expectedFullName_last = "<SpawnBestNumber>c__AnonStorey45";
            var t0 = asm.types[0];
            var t1 = asm.types[1];
            var t21 = asm.types[21];
            var tlast = asm.types[asm.types.length - 1];
            var expectedList = expectedFullName_0 + ' ' + expectedFullName_1 + ' ' + expectedFullName_21 + ' ' + expectedFullName_last;
            var actualList = t0.toString() + ' ' + t1.toString() + ' ' + t21.toString() + ' ' + tlast.toString();
            if (actualList !== expectedList)
                throw actualList + " expected " + expectedList;
        }
        AppDomain_monoCorlibDll.read_types_0_1_21_last_toString = read_types_0_1_21_last_toString;
    })(AppDomain_monoCorlibDll = tests.AppDomain_monoCorlibDll || (tests.AppDomain_monoCorlibDll = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var AppDomain_sample64Exe;
    (function (AppDomain_sample64Exe) {
        function read_succeeds() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var appDomain = new pe.managed.AppDomain();
            var asm = appDomain.read(bi);
        }
        AppDomain_sample64Exe.read_succeeds = read_succeeds;
        function read_toString() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var appDomain = new pe.managed.AppDomain();
            var asm = appDomain.read(bi);
            var expectedFullName = "sample64, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
            if (asm.toString() !== expectedFullName)
                throw asm.toString() + " expected " + expectedFullName;
        }
        AppDomain_sample64Exe.read_toString = read_toString;
        function read_types_length2() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var appDomain = new pe.managed.AppDomain();
            var asm = appDomain.read(bi);
            if (asm.types.length !== 2)
                throw asm.types.length;
        }
        AppDomain_sample64Exe.read_types_length2 = read_types_length2;
        function read_types_0_toString() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var appDomain = new pe.managed.AppDomain();
            var asm = appDomain.read(bi);
            var t0 = asm.types[0];
            var expectedFullName = "<Module>";
            if (t0.toString() !== expectedFullName)
                throw t0.toString() + " expected " + expectedFullName;
        }
        AppDomain_sample64Exe.read_types_0_toString = read_types_0_toString;
        function read_types_1_toString() {
            var bi = new pe.io.BufferReader(sample64Exe.bytes);
            var appDomain = new pe.managed.AppDomain();
            var asm = appDomain.read(bi);
            var t0 = asm.types[1];
            var expectedFullName = "Program";
            if (t0.toString() !== expectedFullName)
                throw t0.toString() + " expected " + expectedFullName;
        }
        AppDomain_sample64Exe.read_types_1_toString = read_types_1_toString;
    })(AppDomain_sample64Exe = tests.AppDomain_sample64Exe || (tests.AppDomain_sample64Exe = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var AppDomain_sampleExe;
    (function (AppDomain_sampleExe) {
        function constructor_succeeds() {
            var appDomain = new pe.managed.AppDomain();
        }
        AppDomain_sampleExe.constructor_succeeds = constructor_succeeds;
        function constructor_hasMscorlib() {
            var appDomain = new pe.managed.AppDomain();
            if (appDomain.assemblies.length !== 1)
                throw "incorrect number of assemblies: " + appDomain.assemblies.length;
            var mscorlib = appDomain.assemblies[0];
            if (mscorlib.name !== "mscorlib")
                throw "incorrect name of mscorlib: " + mscorlib.name;
            if (!mscorlib.isSpeculative)
                throw "mscorlib should be marked as speculative on init";
        }
        AppDomain_sampleExe.constructor_hasMscorlib = constructor_hasMscorlib;
        function read_succeeds() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var appDomain = new pe.managed.AppDomain();
            var asm = appDomain.read(bi);
        }
        AppDomain_sampleExe.read_succeeds = read_succeeds;
        function read_has1Assembly() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var appDomain = new pe.managed.AppDomain();
            var asm = appDomain.read(bi);
            if (appDomain.assemblies.length !== 1)
                throw "incorrect number of assemblies: " + appDomain.assemblies.length;
        }
        AppDomain_sampleExe.read_has1Assembly = read_has1Assembly;
        function read_toString() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var appDomain = new pe.managed.AppDomain();
            var asm = appDomain.read(bi);
            var expectedFullName = "sample, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
            if (asm.toString() !== expectedFullName)
                throw asm.toString() + " expected " + expectedFullName;
        }
        AppDomain_sampleExe.read_toString = read_toString;
        function read_types_length2() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var appDomain = new pe.managed.AppDomain();
            var asm = appDomain.read(bi);
            if (asm.types.length !== 2)
                throw asm.types.length;
        }
        AppDomain_sampleExe.read_types_length2 = read_types_length2;
        function read_types_0_toString() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var appDomain = new pe.managed.AppDomain();
            var asm = appDomain.read(bi);
            var t0 = asm.types[0];
            var expectedFullName = "<Module>";
            if (t0.toString() !== expectedFullName)
                throw t0.toString() + " expected " + expectedFullName;
        }
        AppDomain_sampleExe.read_types_0_toString = read_types_0_toString;
        function read_types_1_toString() {
            var bi = new pe.io.BufferReader(sampleExe.bytes);
            var appDomain = new pe.managed.AppDomain();
            var asm = appDomain.read(bi);
            var t0 = asm.types[1];
            var expectedFullName = "Program";
            if (t0.toString() !== expectedFullName)
                throw t0.toString() + " expected " + expectedFullName;
        }
        AppDomain_sampleExe.read_types_1_toString = read_types_1_toString;
    })(AppDomain_sampleExe = tests.AppDomain_sampleExe || (tests.AppDomain_sampleExe = {}));
})(tests || (tests = {}));
var tests;
(function (tests) {
    var BufferReader;
    (function (BufferReader) {
        var global = (function () { return this; })();
        var ArrayBuffer = "ArrayBuffer" in global ? global.ArrayBuffer : Array;
        function constructor_WithArrayBuffer0_succeeds() {
            var bi = new pe.io.BufferReader(new ArrayBuffer(0));
        }
        BufferReader.constructor_WithArrayBuffer0_succeeds = constructor_WithArrayBuffer0_succeeds;
        function constructor_WithArrayBuffer10_succeeds() {
            var bi = new pe.io.BufferReader(new ArrayBuffer(10));
        }
        BufferReader.constructor_WithArrayBuffer10_succeeds = constructor_WithArrayBuffer10_succeeds;
        function with123_readByte_1() {
            var buf = new ArrayBuffer(3);
            var vi = new DataView(buf);
            vi.setUint8(0, 1);
            vi.setUint8(1, 2);
            vi.setUint8(2, 3);
            var bi = new pe.io.BufferReader(buf);
            var b = bi.readByte();
            if (b !== 1)
                throw b;
        }
        BufferReader.with123_readByte_1 = with123_readByte_1;
        function with123_readShort_0x0201() {
            var buf = new ArrayBuffer(3);
            var vi = new DataView(buf);
            vi.setUint8(0, 1);
            vi.setUint8(1, 2);
            vi.setUint8(2, 3);
            var bi = new pe.io.BufferReader(buf);
            var b = bi.readShort();
            if (b !== 0x0201)
                throw "0x" + b.toString(16);
        }
        BufferReader.with123_readShort_0x0201 = with123_readShort_0x0201;
        function with1234_readInt_0x04030201() {
            var buf = new ArrayBuffer(4);
            var vi = new DataView(buf);
            vi.setUint8(0, 1);
            vi.setUint8(1, 2);
            vi.setUint8(2, 3);
            vi.setUint8(3, 4);
            var bi = new pe.io.BufferReader(buf);
            var b = bi.readInt();
            if (b !== 0x04030201)
                throw "0x" + b.toString(16);
        }
        BufferReader.with1234_readInt_0x04030201 = with1234_readInt_0x04030201;
        function withFEDC_readInt_0x0C0D0E0F() {
            var buf = new ArrayBuffer(4);
            var vi = new DataView(buf);
            vi.setUint8(0, 0xF);
            vi.setUint8(1, 0xE);
            vi.setUint8(2, 0xD);
            vi.setUint8(3, 0xC);
            var bi = new pe.io.BufferReader(buf);
            var b = bi.readInt();
            if (b !== 0x0C0D0E0F)
                throw "0x" + b.toString(16);
        }
        BufferReader.withFEDC_readInt_0x0C0D0E0F = withFEDC_readInt_0x0C0D0E0F;
        function with01_readInt_throws() {
            var buf = new ArrayBuffer(2);
            var vi = new DataView(buf);
            vi.setUint8(0, 0xF);
            vi.setUint8(1, 0xE);
            var bi = new pe.io.BufferReader(buf);
            bi.readByte();
            try {
                var b = bi.readInt();
            }
            catch (expectedError) {
                return;
            }
            throw "Error expected.";
        }
        BufferReader.with01_readInt_throws = with01_readInt_throws;
        function withFEDCBA21_readLong_1020A0BC0D0E0Fh() {
            var buf = new ArrayBuffer(8);
            var vi = new DataView(buf);
            vi.setUint8(0, 0xF);
            vi.setUint8(1, 0xE);
            vi.setUint8(2, 0xD);
            vi.setUint8(3, 0xC);
            vi.setUint8(4, 0xB);
            vi.setUint8(5, 0xA);
            vi.setUint8(6, 0x2);
            vi.setUint8(7, 0x1);
            var bi = new pe.io.BufferReader(buf);
            var b = bi.readLong();
            if (b.toString() !== "1020A0BC0D0E0Fh")
                throw b.toString();
        }
        BufferReader.withFEDCBA21_readLong_1020A0BC0D0E0Fh = withFEDCBA21_readLong_1020A0BC0D0E0Fh;
        function with0FEDCBA21_readByte_readLong_1020A0BC0D0E0Fh() {
            var buf = new ArrayBuffer(9);
            var vi = new DataView(buf);
            vi.setUint8(0, 0);
            vi.setUint8(1, 0xF);
            vi.setUint8(2, 0xE);
            vi.setUint8(3, 0xD);
            vi.setUint8(4, 0xC);
            vi.setUint8(5, 0xB);
            vi.setUint8(6, 0xA);
            vi.setUint8(7, 0x2);
            vi.setUint8(8, 0x1);
            var bi = new pe.io.BufferReader(buf);
            bi.readByte();
            var b = bi.readLong();
            if (b.toString() !== "1020A0BC0D0E0Fh")
                throw b.toString();
        }
        BufferReader.with0FEDCBA21_readByte_readLong_1020A0BC0D0E0Fh = with0FEDCBA21_readByte_readLong_1020A0BC0D0E0Fh;
        function with01_readByte_readLong_throws() {
            var buf = new ArrayBuffer(2);
            var vi = new DataView(buf);
            vi.setUint8(0, 0);
            vi.setUint8(1, 0xF);
            var bi = new pe.io.BufferReader(buf);
            bi.readByte();
            try {
                var b = bi.readLong();
            }
            catch (expectedError) {
                return;
            }
            throw "Error expected.";
        }
        BufferReader.with01_readByte_readLong_throws = with01_readByte_readLong_throws;
        function with0_readZeroFilledAscii_1() {
            var buf = new ArrayBuffer(1);
            var vi = new DataView(buf);
            vi.setUint8(0, 0);
            var bi = new pe.io.BufferReader(buf);
            var b = bi.readZeroFilledAscii(1);
            if (b !== "")
                throw b;
        }
        BufferReader.with0_readZeroFilledAscii_1 = with0_readZeroFilledAscii_1;
        function with0_readZeroFilledAscii_0() {
            var buf = new ArrayBuffer(1);
            var vi = new DataView(buf);
            vi.setUint8(0, 0);
            var bi = new pe.io.BufferReader(buf);
            var b = bi.readZeroFilledAscii(0);
            if (b !== "")
                throw b;
        }
        BufferReader.with0_readZeroFilledAscii_0 = with0_readZeroFilledAscii_0;
        function withA0_readZeroFilledAscii_2() {
            var buf = new ArrayBuffer(2);
            var vi = new DataView(buf);
            vi.setUint8(0, ("A").charCodeAt(0));
            vi.setUint8(1, 0);
            var bi = new pe.io.BufferReader(buf);
            var b = bi.readZeroFilledAscii(2);
            if (b !== "A")
                throw b;
        }
        BufferReader.withA0_readZeroFilledAscii_2 = withA0_readZeroFilledAscii_2;
        function withA0_readZeroFilledAscii_1() {
            var buf = new ArrayBuffer(2);
            var vi = new DataView(buf);
            vi.setUint8(0, ("A").charCodeAt(0));
            vi.setUint8(1, 0);
            var bi = new pe.io.BufferReader(buf);
            var b = bi.readZeroFilledAscii(1);
            if (b !== "A")
                throw b;
        }
        BufferReader.withA0_readZeroFilledAscii_1 = withA0_readZeroFilledAscii_1;
        function withAB0_readByte_readZeroFilledAscii_1() {
            var buf = new ArrayBuffer(3);
            var vi = new DataView(buf);
            vi.setUint8(0, ("A").charCodeAt(0));
            vi.setUint8(1, ("B").charCodeAt(0));
            vi.setUint8(2, 0);
            var bi = new pe.io.BufferReader(buf);
            bi.readByte();
            var b = bi.readZeroFilledAscii(1);
            if (b !== "B")
                throw b;
        }
        BufferReader.withAB0_readByte_readZeroFilledAscii_1 = withAB0_readByte_readZeroFilledAscii_1;
        function withAB0_readByte_readZeroFilledAscii_2() {
            var buf = new ArrayBuffer(3);
            var vi = new DataView(buf);
            vi.setUint8(0, ("A").charCodeAt(0));
            vi.setUint8(1, ("B").charCodeAt(0));
            vi.setUint8(2, 0);
            var bi = new pe.io.BufferReader(buf);
            bi.readByte();
            var b = bi.readZeroFilledAscii(2);
            if (b !== "B")
                throw b;
        }
        BufferReader.withAB0_readByte_readZeroFilledAscii_2 = withAB0_readByte_readZeroFilledAscii_2;
        function withAB0_readByte_readZeroFilledAscii_3_throws() {
            var buf = new ArrayBuffer(3);
            var vi = new DataView(buf);
            vi.setUint8(0, ("A").charCodeAt(0));
            vi.setUint8(1, ("B").charCodeAt(0));
            vi.setUint8(2, 0);
            var bi = new pe.io.BufferReader(buf);
            bi.readByte();
            try {
                var b = bi.readZeroFilledAscii(3);
            }
            catch (expectedError) {
                return;
            }
            throw "Error expected.";
        }
        BufferReader.withAB0_readByte_readZeroFilledAscii_3_throws = withAB0_readByte_readZeroFilledAscii_3_throws;
        function with0_readAsciiZ_1() {
            var buf = new ArrayBuffer(1);
            var vi = new DataView(buf);
            vi.setUint8(0, 0);
            var bi = new pe.io.BufferReader(buf);
            var b = bi.readAsciiZ(1);
            if (b !== "")
                throw b;
        }
        BufferReader.with0_readAsciiZ_1 = with0_readAsciiZ_1;
        function with0_readAsciiZ_0() {
            var buf = new ArrayBuffer(1);
            var vi = new DataView(buf);
            vi.setUint8(0, 0);
            var bi = new pe.io.BufferReader(buf);
            var b = bi.readAsciiZ(0);
            if (b !== "")
                throw b;
        }
        BufferReader.with0_readAsciiZ_0 = with0_readAsciiZ_0;
        function withA0_readAsciiZ_2() {
            var buf = new ArrayBuffer(2);
            var vi = new DataView(buf);
            vi.setUint8(0, ("A").charCodeAt(0));
            vi.setUint8(1, 0);
            var bi = new pe.io.BufferReader(buf);
            var b = bi.readAsciiZ(2);
            if (b !== "A")
                throw b;
        }
        BufferReader.withA0_readAsciiZ_2 = withA0_readAsciiZ_2;
        function withASpace_readAsciiZ_1() {
            var buf = new ArrayBuffer(2);
            var vi = new DataView(buf);
            vi.setUint8(0, ("A").charCodeAt(0));
            vi.setUint8(1, 32);
            var bi = new pe.io.BufferReader(buf);
            var b = bi.readAsciiZ(1);
            if (b !== "A")
                throw b;
        }
        BufferReader.withASpace_readAsciiZ_1 = withASpace_readAsciiZ_1;
        function withA0_readAsciiZ_1() {
            var buf = new ArrayBuffer(2);
            var vi = new DataView(buf);
            vi.setUint8(0, ("A").charCodeAt(0));
            vi.setUint8(1, 0);
            var bi = new pe.io.BufferReader(buf);
            var b = bi.readAsciiZ(1);
            if (b !== "A")
                throw b;
        }
        BufferReader.withA0_readAsciiZ_1 = withA0_readAsciiZ_1;
        function withAB0_readByte_readAsciiZ_1() {
            var buf = new ArrayBuffer(3);
            var vi = new DataView(buf);
            vi.setUint8(0, ("A").charCodeAt(0));
            vi.setUint8(1, ("B").charCodeAt(0));
            vi.setUint8(2, 0);
            var bi = new pe.io.BufferReader(buf);
            bi.readByte();
            var b = bi.readAsciiZ(1);
            if (b !== "B")
                throw b;
        }
        BufferReader.withAB0_readByte_readAsciiZ_1 = withAB0_readByte_readAsciiZ_1;
        function withAB0_readByte_readAsciiZ_2() {
            var buf = new ArrayBuffer(3);
            var vi = new DataView(buf);
            vi.setUint8(0, ("A").charCodeAt(0));
            vi.setUint8(1, ("B").charCodeAt(0));
            vi.setUint8(2, 0);
            var bi = new pe.io.BufferReader(buf);
            bi.readByte();
            var b = bi.readAsciiZ(2);
            if (b !== "B")
                throw b;
        }
        BufferReader.withAB0_readByte_readAsciiZ_2 = withAB0_readByte_readAsciiZ_2;
        function withAB0_readByte_readAsciiZ_3() {
            var buf = new ArrayBuffer(3);
            var vi = new DataView(buf);
            vi.setUint8(0, ("A").charCodeAt(0));
            vi.setUint8(1, ("B").charCodeAt(0));
            vi.setUint8(2, 0);
            var bi = new pe.io.BufferReader(buf);
            bi.readByte();
            var b = bi.readAsciiZ(3);
            if (b !== "B")
                throw b;
        }
        BufferReader.withAB0_readByte_readAsciiZ_3 = withAB0_readByte_readAsciiZ_3;
        function withABC_readByte_readAsciiZ_3_throws() {
            var buf = new ArrayBuffer(3);
            var vi = new DataView(buf);
            vi.setUint8(0, ("A").charCodeAt(0));
            vi.setUint8(1, ("B").charCodeAt(0));
            vi.setUint8(2, ("C").charCodeAt(0));
            var bi = new pe.io.BufferReader(buf);
            bi.readByte();
            try {
                var b = bi.readAsciiZ(3);
            }
            catch (expectedError) {
                return;
            }
            throw "Error expected.";
        }
        BufferReader.withABC_readByte_readAsciiZ_3_throws = withABC_readByte_readAsciiZ_3_throws;
        function with0_readUtf8Z_1() {
            var buf = new ArrayBuffer(1);
            var vi = new DataView(buf);
            vi.setUint8(0, 0);
            var bi = new pe.io.BufferReader(buf);
            var b = bi.readUtf8Z(1);
            if (b !== "")
                throw b;
        }
        BufferReader.with0_readUtf8Z_1 = with0_readUtf8Z_1;
        function with0_readUtf8Z_0() {
            var buf = new ArrayBuffer(1);
            var vi = new DataView(buf);
            vi.setUint8(0, 0);
            var bi = new pe.io.BufferReader(buf);
            var b = bi.readUtf8Z(0);
            if (b !== "")
                throw b;
        }
        BufferReader.with0_readUtf8Z_0 = with0_readUtf8Z_0;
        function withA0_readUtf8Z_2() {
            var buf = new ArrayBuffer(2);
            var vi = new DataView(buf);
            vi.setUint8(0, ("A").charCodeAt(0));
            vi.setUint8(1, 0);
            var bi = new pe.io.BufferReader(buf);
            var b = bi.readUtf8Z(2);
            if (b !== "A")
                throw b;
        }
        BufferReader.withA0_readUtf8Z_2 = withA0_readUtf8Z_2;
        function withASpace_readUtf8Z_1() {
            var buf = new ArrayBuffer(2);
            var vi = new DataView(buf);
            vi.setUint8(0, ("A").charCodeAt(0));
            vi.setUint8(1, 32);
            var bi = new pe.io.BufferReader(buf);
            var b = bi.readUtf8Z(1);
            if (b !== "A")
                throw b;
        }
        BufferReader.withASpace_readUtf8Z_1 = withASpace_readUtf8Z_1;
        function withA0_readUtf8Z_1() {
            var buf = new ArrayBuffer(2);
            var vi = new DataView(buf);
            vi.setUint8(0, ("A").charCodeAt(0));
            vi.setUint8(1, 0);
            var bi = new pe.io.BufferReader(buf);
            var b = bi.readUtf8Z(1);
            if (b !== "A")
                throw b;
        }
        BufferReader.withA0_readUtf8Z_1 = withA0_readUtf8Z_1;
        function withAB0_readByte_readUtf8Z_1() {
            var buf = new ArrayBuffer(3);
            var vi = new DataView(buf);
            vi.setUint8(0, ("A").charCodeAt(0));
            vi.setUint8(1, ("B").charCodeAt(0));
            vi.setUint8(2, 0);
            var bi = new pe.io.BufferReader(buf);
            bi.readByte();
            var b = bi.readUtf8Z(1);
            if (b !== "B")
                throw b;
        }
        BufferReader.withAB0_readByte_readUtf8Z_1 = withAB0_readByte_readUtf8Z_1;
        function withAB0_readByte_readUtf8Z_2() {
            var buf = new ArrayBuffer(3);
            var vi = new DataView(buf);
            vi.setUint8(0, ("A").charCodeAt(0));
            vi.setUint8(1, ("B").charCodeAt(0));
            vi.setUint8(2, 0);
            var bi = new pe.io.BufferReader(buf);
            bi.readByte();
            var b = bi.readUtf8Z(2);
            if (b !== "B")
                throw b;
        }
        BufferReader.withAB0_readByte_readUtf8Z_2 = withAB0_readByte_readUtf8Z_2;
        function withAB0_readByte_readUtf8Z_3() {
            var buf = new ArrayBuffer(3);
            var vi = new DataView(buf);
            vi.setUint8(0, ("A").charCodeAt(0));
            vi.setUint8(1, ("B").charCodeAt(0));
            vi.setUint8(2, 0);
            var bi = new pe.io.BufferReader(buf);
            bi.readByte();
            var b = bi.readUtf8Z(3);
            if (b !== "B")
                throw b;
        }
        BufferReader.withAB0_readByte_readUtf8Z_3 = withAB0_readByte_readUtf8Z_3;
        function withABC_readByte_readUtf8Z_3_throws() {
            var buf = new ArrayBuffer(3);
            var vi = new DataView(buf);
            vi.setUint8(0, ("A").charCodeAt(0));
            vi.setUint8(1, ("B").charCodeAt(0));
            vi.setUint8(2, ("C").charCodeAt(0));
            var bi = new pe.io.BufferReader(buf);
            bi.readByte();
            try {
                var b = bi.readUtf8Z(3);
            }
            catch (expectedError) {
                return;
            }
            throw "Error expected.";
        }
        BufferReader.withABC_readByte_readUtf8Z_3_throws = withABC_readByte_readUtf8Z_3_throws;
        function withChineseMi_readUtf8Z() {
            var buf = new ArrayBuffer(3);
            var vi = new DataView(buf);
            vi.setUint8(0, 0xE6);
            vi.setUint8(1, 0x9C);
            vi.setUint8(2, 0xAA);
            var bi = new pe.io.BufferReader(buf);
            var b = bi.readUtf8Z(3);
            if (b.charCodeAt(0) !== 26410)
                throw b + " (" + b.charCodeAt(0) + ") expected " + String.fromCharCode(26410) + " (26410)";
        }
        BufferReader.withChineseMi_readUtf8Z = withChineseMi_readUtf8Z;
        function withChineseMiSpaceSpace_readUtf8Z() {
            var buf = new ArrayBuffer(5);
            var vi = new DataView(buf);
            vi.setUint8(0, 0xE6);
            vi.setUint8(1, 0x9C);
            vi.setUint8(2, 0xAA);
            vi.setUint8(3, 32);
            vi.setUint8(4, 32);
            var bi = new pe.io.BufferReader(buf);
            var b = bi.readUtf8Z(3);
            if (b.charCodeAt(0) !== 26410)
                throw b + " (" + b.charCodeAt(0) + ") expected " + String.fromCharCode(26410) + " (26410)";
        }
        BufferReader.withChineseMiSpaceSpace_readUtf8Z = withChineseMiSpaceSpace_readUtf8Z;
        function withRussianSch_readUtf8Z() {
            var buf = new ArrayBuffer(2);
            var vi = new DataView(buf);
            vi.setUint8(0, 0xD0);
            vi.setUint8(1, 0xA9);
            var bi = new pe.io.BufferReader(buf);
            var b = bi.readUtf8Z(2);
            if (b.charCodeAt(0) !== 1065)
                throw b + " (" + b.charCodeAt(0) + ") expected " + String.fromCharCode(1065) + " (1065)";
        }
        BufferReader.withRussianSch_readUtf8Z = withRussianSch_readUtf8Z;
        function withRussianSchSpaceSpace_readUtf8Z() {
            var buf = new ArrayBuffer(4);
            var vi = new DataView(buf);
            vi.setUint8(0, 0xD0);
            vi.setUint8(1, 0xA9);
            vi.setUint8(2, 32);
            vi.setUint8(3, 32);
            var bi = new pe.io.BufferReader(buf);
            var b = bi.readUtf8Z(2);
            if (b.charCodeAt(0) !== 1065)
                throw b + " (" + b.charCodeAt(0) + ") expected " + String.fromCharCode(1065) + " (1065)";
        }
        BufferReader.withRussianSchSpaceSpace_readUtf8Z = withRussianSchSpaceSpace_readUtf8Z;
    })(BufferReader = tests.BufferReader || (tests.BufferReader = {}));
})(tests || (tests = {}));
