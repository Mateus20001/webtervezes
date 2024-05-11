import { Component } from '@angular/core';
import { Erdekes } from '../erdekesadatok';
@Component({
  selector: 'app-erdekes-adatok',
  templateUrl: './erdekes-adatok.component.html',
  styleUrl: './erdekes-adatok.component.css'
})
export class ErdekesAdatokComponent {
  selectedImage: { path: string, topdescription: string, botdescription:string  } | undefined;
  images: Erdekes = {
    'Image 1': { path: 'aiatvesz.png', 
    topdescription: `Ahogy a mesterséges intelligencia (MI) egyre szélesebb körben terjed, egyre több területen van jelen az életünkben, és egyre több munkafolyamatot képes automatizálni. Íme egy érdekes leírás arról, hogy hogyan befolyásolja a mesterséges intelligencia a munkánkat:A mesterséges intelligencia nem csupán egy technológiai
    forradalom, hanem egy átalakuló munkaerő-piaci paradigma is. Ami egykor emberi szakértelemre és kézügyességre alapult, mostanra gépek és algoritmusok által végzett feladatokká váltak. Ez a változás egyrészt új lehetőségeket nyit meg az emberiség előtt, másrészt pedig kihívások elé állítja a hagyományos munkamódszereket és foglalkoztatási gyakorlatokat.`, 
    botdescription:`Az MI által automatizált folyamatok széles skálán mozognak a rutinfeladatoktól egészen az összetett döntési mechanizmusokig. Például az ipari termeléstől kezdve az ügyfélszolgálaton át egészen az orvosi diagnosztikáig, az MI rendszerek hatékonyan végzik a feladatok jelentős részét, gyakran pontosabban és gyorsabban, mint az emberi munkaerő.
    Ez a folyamat egyben lehetőségeket is rejt magában. Az MI által végzett automatizáció és hatékonyságnövelés lehetővé teszi az emberek számára, hogy szabadidejüket és energiájukat magasabb szintű kreatív és értékalapú munkára fordítsák. Emellett új foglalkoztatási lehetőségeket is teremthet, például az MI fejlesztéséhez, karbantartásához és felügyeletéhez kapcsolódó területeken.` },
    'Image 2': { path: 'motiv.jpg', topdescription: `Az emberek motivációja egy rendkívül összetett és sokszínű téma, amely számos különböző tényezőből származhat. Íme egy érdekes leírás arról, hogy mi motiválja az embereket:
    Az emberek motivációját számos belső és külső tényező befolyásolja. Egyik alapvető motivációs tényező az egyén saját belső értékei és céljai. Az emberek motiváltak lehetnek arra, hogy személyes célokat érjenek el, mint például a szakmai fejlődés, a boldogság, az egészség vagy a kreativitás kifejezése.
    Emellett a külső tényezők, mint például a pénz, a dicséret, a pozitív visszajelzés vagy a jutalmak is motiváló erők lehetnek. A pénz gyakran alapvető motivációként szolgál az anyagi biztonság és a jólét eléréséhez, míg a dicséret és a pozitív visszajelzés segíthet az egyén önbizalmának növelésében és elismerésében.`,
    botdescription:`Az emberek motivációját továbbá a külső környezet is befolyásolhatja, például a munkahelyi kultúra, a vezetők stílusa és a társadalmi normák. Az inspiráló vezetők, az összetartó csapatok és az érdekes munkakörnyezetek mind hozzájárulhatnak az emberek motivációjához és teljesítményéhez.
     Fontos megérteni, hogy az emberek motivációja egyénenként és helyzetenként változó lehet. Ami egy embert motivál, az másnak lehet, hogy nem jelent ugyanakkora ösztönző erőt. Ezért fontos, hogy a munkahelyek és a szervezetek figyelembe vegyék az egyéni különbségeket és igényeket, és rugalmas módon alakítsák ki a motivációs stratégiáikat és gyakorlataikat.
    Összességében az emberek motivációját egy komplex összefonódása belső és külső tényezők, személyes célok és értékek, valamint a külső környezet és társadalmi normák befolyásolják. Ahhoz, hogy az emberek inspiráltak és elkötelezettek legyenek a céljaik elérésében és a sikeres teljesítményben, fontos megfelelő egyensúlyt teremteni ezek között a tényezők között és alkalmazkodni az egyén egyedi szükségleteihez és körülményeihez.` },
    'Image 3': { path: 'homeoffice.jpg', topdescription: `A home office - vagy otthoni iroda - olyan helyszín, ahol a kényelem és a produktivitás találkozik a modern munkavégzésben. Ez a munkastílus lehetőséget ad arra, hogy az emberek otthonuk kényelméből dolgozhassanak, miközben hatékonyan végezhetik el a feladataikat.
    Egy home office olyan tér, amely személyre szabott és inspiráló környezetet kínál, hogy az egyének kihozhassák magukból a legjobbat. Lehet, hogy ez egy sarok az otthonban, egy külön szoba vagy akár egy átalakított pince. A lényeg az, hogy olyan hely legyen, ahol az ember számára ideális munkakörülményeket teremthet.`, 
    botdescription:`A home office - vagy otthoni iroda - olyan helyszín, ahol a kényelem és a produktivitás találkozik a modern munkavégzésben. Ez a munkastílus lehetőséget ad arra, hogy az emberek otthonuk kényelméből dolgozhassanak, miközben hatékonyan végezhetik el a feladataikat.
    Egy home office olyan tér, amely személyre szabott és inspiráló környezetet kínál, hogy az egyének kihozhassák magukból a legjobbat. Lehet, hogy ez egy sarok az otthonban, egy külön szoba vagy akár egy átalakított pince. A lényeg az, hogy olyan hely legyen, ahol az ember számára ideális munkakörülményeket teremthet.
    Egy jól kialakított home office nemcsak praktikus, de akár stílusos is lehet. Az egyéni ízlés és preferenciák alapján berendezve ez a tér lehet modern, minimalista vagy éppen bohém stílusú. A megfelelő bútorok, berendezési tárgyak és megvilágítás segítségével az otthoni iroda könnyedén tükrözheti az ember személyiségét és munkastílusát.
    Az otthoni iroda használata nemcsak a kényelemről szól, hanem számos más előnnyel is jár. Az időt és pénzt megtakarítva a napi ingázásból, az egyének több időt tölthetnek a családjukkal és a szabadidős tevékenységeikkel. Emellett a home office lehetőséget ad arra, hogy az emberek rugalmasabban kezeljék a munkaidejüket, és jobban egyensúlyba hozzák a munka és a magánélet követelményeit.` },
  };
  ngAfterContentInit() {
    this.selectedImage = this.images["Image 1"];
  }
  onImageChange(event: any) {
    this.selectedImage = this.images[event.target.value];
  }
}
