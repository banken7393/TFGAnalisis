//2705 Fu
//16690 Ke
var zb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.";
test = function(a) {
		console.log("a",a);
        a = charizard(a);
        console.log("a",a);
        verbalize();
        console.log("wb",wb);
        for (var b = wb, c = [], d = 0; d < a.length; d += 3) {
            
            var f = a[d]
              , g = d + 1 < a.length
              , h = g ? a[d + 1] : 0
              , k = d + 2 < a.length
              , m = k ? a[d + 2] : 0
              , r = f >> 2
              , f = (f & 3) << 4 | h >> 4
              , h = (h & 15) << 2 | m >> 6
              , m = m & 63;
            k || (m = 64,
            g || (h = 64));
            c.push(b[r], b[f], b[h], b[m])
        }
        return c.join("")
    };

    var charizard = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            for (var f = a.charCodeAt(d); 255 < f; )
                b[c++] = f & 255,
                f >>= 8;
            b[c++] = f
        }
        return b
    }

    var verbalize = function() {
        
            xb = {};
            yeben = {};
            wb = {};
            for (var a = 0; 65 > a; a++)
                xb[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt(a),
                yeben[xb[a]] = a,
                wb[a] = zb.charAt(a),
                62 <= a && (yeben[zb.charAt(a)] = a)
        
    }

ZjEyMjFlNDgtYWUzMy0xMWU4LTlmMzYtYTAzNTdiNDlmODk3
ZjEyMjFlNDgtYWUzMy0xMWU4LTlmMzYtYTAzNTdiNDlmODk3

MjAxODA5MDI0NTE1Njg0NjA1MTI.
ZDcxMWQ5NGJiNjI5OGJjYTFiNGJlMWU5NjEyYWI1NTc.
f1221e48-ae33-11e8-9f36-a0357b49f897