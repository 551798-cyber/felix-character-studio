import React from "react";
const assetPathPrefix = "./assets";
const img = `${assetPathPrefix}/3147f.png`;
const img1 = `${assetPathPrefix}/b7efe.png`;
const img88 = `${assetPathPrefix}/10147.png`;
const img89 = `${assetPathPrefix}/ce163.png`;
const img90 = `${assetPathPrefix}/b5f8b.png`;
const img91 = `${assetPathPrefix}/de647.png`;
const img92 = `${assetPathPrefix}/5743e.png`;
const img93 = `${assetPathPrefix}/5bbc0.png`;
const img101 = `${assetPathPrefix}/e4611.png`;
const img102 = `${assetPathPrefix}/08fc7.png`;
const img104 = `${assetPathPrefix}/a4f7c.png`;
const img94 = `${assetPathPrefix}/6b8d1.png`;
const img103 = `${assetPathPrefix}/1de65.png`;
const img22 = `${assetPathPrefix}/eb403.png`;
const img27 = `${assetPathPrefix}/d1001.png`;
const img40 = `${assetPathPrefix}/9fcb6.png`;
const img41 = `${assetPathPrefix}/d23c7.png`;
const img39 = `${assetPathPrefix}/ed1d2.png`;
const img18 = `${assetPathPrefix}/903c0.png`;
const img19 = `${assetPathPrefix}/4cd4d.png`;
const img20 = `${assetPathPrefix}/42203.png`;
const img23 = `${assetPathPrefix}/f8929.png`;
const img45 = `${assetPathPrefix}/d175e.png`;
const img49 = `${assetPathPrefix}/8a9fa.png`;
const img48 = `${assetPathPrefix}/6976a.png`;
const img46 = `${assetPathPrefix}/98979.png`;
const img47 = `${assetPathPrefix}/9954f.png`;
const img50 = `${assetPathPrefix}/44ab8.png`;
const imgHairW1 = `${assetPathPrefix}/410c4.png`;
const imgHairW2 = `${assetPathPrefix}/0cc4a.png`;
const img2 = `${assetPathPrefix}/1cccf.png`;
const img95 = `${assetPathPrefix}/12608.png`;
const img105 = `${assetPathPrefix}/c26af.png`;
const img96 = `${assetPathPrefix}/05202.png`;
const img24 = `${assetPathPrefix}/a589e.png`;
const img3 = `${assetPathPrefix}/ac8fb.png`;
const img51 = `${assetPathPrefix}/65cbe.png`;
const img4 = `${assetPathPrefix}/9a524.png`;
const img5 = `${assetPathPrefix}/f4bf4.png`;
const img112 = `${assetPathPrefix}/ef59d.png`;
const img6 = `${assetPathPrefix}/a2a25.png`;
const img16 = `${assetPathPrefix}/39099.png`;
const img17 = `${assetPathPrefix}/85ce5.png`;
const img21 = `${assetPathPrefix}/1afc7.png`;
const img32 = `${assetPathPrefix}/5668e.png`;
const img97 = `${assetPathPrefix}/51993.png`;
const img84 = `${assetPathPrefix}/7ded1.png`;
const img98 = `${assetPathPrefix}/9b97e.png`;
const img99 = `${assetPathPrefix}/ec3f9.png`;
const img85 = `${assetPathPrefix}/334ba.png`;
const img86 = `${assetPathPrefix}/384d9.png`;
const img100 = `${assetPathPrefix}/5fb3a.png`;
const img87 = `${assetPathPrefix}/da982.png`;
const img106 = `${assetPathPrefix}/635e6.png`;
const imgHairW3 = `${assetPathPrefix}/5c903.png`;
const imgHairP1 = `${assetPathPrefix}/79db2.png`;
const imgHairB1 = `${assetPathPrefix}/aa101.png`;
const img107 = `${assetPathPrefix}/0e251.png`;
const imgHairW4 = `${assetPathPrefix}/c12d3.png`;
const imgHairP2 = `${assetPathPrefix}/66bb5.png`;
const imgHairB2 = `${assetPathPrefix}/27d37.png`;
const img7 = `${assetPathPrefix}/0f220.png`;
const img8 = `${assetPathPrefix}/43702.png`;
const imgObject = `${assetPathPrefix}/f61c8.png`;
const imgObject2 = `${assetPathPrefix}/9447e.png`;
const img25 = `${assetPathPrefix}/04949.png`;
const img26 = `${assetPathPrefix}/a1313.png`;
const img70 = `${assetPathPrefix}/94130.png`;
const img62 = `${assetPathPrefix}/ad026.png`;
const img59 = `${assetPathPrefix}/1dc57.png`;
const img71 = `${assetPathPrefix}/596cc.png`;
const img108 = `${assetPathPrefix}/4c94c.png`;
const img9 = `${assetPathPrefix}/3bf7f.png`;
const img66 = `${assetPathPrefix}/08706.png`;
const img83 = `${assetPathPrefix}/f2119.png`;
const img109 = `${assetPathPrefix}/c4e42.png`;
const img110 = `${assetPathPrefix}/c0778.png`;
const img111 = `${assetPathPrefix}/7174d.png`;
const img113 = `${assetPathPrefix}/4a50e.png`;
const img114 = `${assetPathPrefix}/6b98a.png`;
const img115 = `${assetPathPrefix}/91ea5.png`;
const img116 = `${assetPathPrefix}/368c8.png`;
const img117 = `${assetPathPrefix}/0af1b.png`;
const img118 = `${assetPathPrefix}/8e9c1.png`;
const img119 = `${assetPathPrefix}/d5507.png`;
const img10 = `${assetPathPrefix}/e759b.png`;
const img11 = `${assetPathPrefix}/1b969.png`;
const img53 = `${assetPathPrefix}/01b12.png`;
const img120 = `${assetPathPrefix}/e6aec.png`;
const img121 = `${assetPathPrefix}/e1b92.png`;
const img122 = `${assetPathPrefix}/205ec.png`;
const img123 = `${assetPathPrefix}/27132.png`;
const img124 = `${assetPathPrefix}/6ff6c.png`;
const img125 = `${assetPathPrefix}/14e93.png`;
const img126 = `${assetPathPrefix}/787d7.png`;
const img127 = `${assetPathPrefix}/63a20.png`;
const img128 = `${assetPathPrefix}/17e83.png`;

type Component14Props = {
  className?: string;
  property1?: "Катаны" | "Перчатки" | "Джинсы" | "Жилет" | "Штаны Хаки" | "Кофта";
};

export function Component14({ className, property1 = "Катаны" }: Component14Props) {
  const is = property1 === "Перчатки";
  const is1 = property1 === "Жилет";
  const is2 = property1 === "Кофта";
  const is3 = property1 === "Джинсы";
  const is4 = property1 === "Штаны Хаки";
  return (
    <div className={className || `relative ${is2 ? "h-[423px] w-[490px]" : is1 ? "h-[423px] w-[494px]" : ["Джинсы", "Штаны Хаки"].includes(property1) ? "h-[506px] w-[884px]" : is ? "h-[174px] w-[412px]" : "size-[609px]"}`} id={is2 ? "node-11_761" : is4 ? "node-11_762" : is1 ? "node-11_763" : is3 ? "node-11_764" : is ? "node-11_765" : "node-11_766"}>
      {["Катаны", "Перчатки"].includes(property1) && (
        <div className="absolute flex inset-0 items-center justify-center" id={is ? "node-11_757" : "node-11_759"} style={{ containerType: "size" }}>
          <div className="-rotate-90 -scale-x-100 flex-none h-[100cqw] w-[100cqh]">
            {property1 === "Катаны" && (
              <div className="relative size-full" data-name="Катаны">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
              </div>
            )}
            {is && (
              <div className="relative size-full" data-name="Перчатки">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
              </div>
            )}
          </div>
        </div>
      )}
      {is3 && (
        <>
          <div className="absolute contents inset-[2.77%_0.68%_3.56%_6.45%]" data-node-id="11:747" data-name="Слой 88 (Clip group)">
            <div className="absolute inset-[2.77%_0.68%_3.56%_5.66%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[7px_0px] mask-size-[821px_474px]" data-node-id="11:749" style={{ maskImage: `url("${img88}")` }} data-name="Слой 88">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-full left-[-7.25%] max-w-none top-0 w-[107.25%]" src={img89} />
              </div>
            </div>
            <div className="absolute inset-[3.56%_2.38%_-3.36%_6.56%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1px_-4px] mask-size-[821px_474px]" data-node-id="11:750" style={{ maskImage: `url("${img88}")` }} data-name="Слой 90">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img90} />
            </div>
            <div className="absolute inset-[1.98%_0.68%_2.37%_3.62%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[25px_4px] mask-size-[821px_474px]" data-node-id="11:751" style={{ maskImage: `url("${img88}")` }} data-name="Слой 91">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img91} />
            </div>
          </div>
          <div className="absolute contents inset-[67.79%_43.33%_6.32%_10.41%]" data-node-id="11:752" data-name="Слой 92 (Clip group)">
            <div className="absolute inset-[67.79%_43.33%_6.32%_10.41%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[409px_131px]" data-node-id="11:754" style={{ maskImage: `url("${img92}")` }} data-name="Слой 92">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img93} />
            </div>
            <div className="absolute inset-[67.39%_42.53%_-15.02%_9.84%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[5px_2px] mask-size-[409px_131px]" data-node-id="11:755" style={{ maskImage: `url("${img92}")` }} data-name="Слой 101">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img101} />
            </div>
          </div>
          <div className="absolute inset-[2.17%_0.11%_0.59%_7.35%]" data-node-id="11:756" data-name="Слой 102">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[109.35%] left-0 max-w-none top-0 w-full" src={img102} />
            </div>
          </div>
        </>
      )}
      {is1 && (
        <>
          <div className="absolute inset-[20.57%_24.9%_21.04%_1.62%] mix-blend-multiply" data-node-id="11:742" data-name="Слой 104">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img104} />
          </div>
          <div className="absolute inset-[4.02%_29.76%_21.51%_1.82%]" data-node-id="11:743" data-name="Слой 89">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img94} />
          </div>
          <div className="absolute inset-[3.55%_28.74%_20.57%_2.43%]" data-node-id="11:745" data-name="Слой 103">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img103} />
          </div>
        </>
      )}
      {is4 && (
        <>
          <div className="absolute inset-[0_1.02%_3.95%_0]" data-node-id="11:736" data-name="Слой 22">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[145.27%] left-[-7.2%] max-w-none top-[-45.27%] w-[107.2%]" src={img22} />
            </div>
          </div>
          <div className="absolute inset-[2.96%_0_1.58%_7.13%]" data-node-id="11:737" data-name="Слой 27">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img27} />
          </div>
          <div className="absolute inset-[15.61%_1.13%_0_2.38%] mix-blend-multiply" data-node-id="11:738" data-name="Слой 40">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img40} />
          </div>
          <div className="absolute inset-[10.67%_2.04%_9.29%_7.92%] mix-blend-screen" data-node-id="11:739" data-name="Слой 41">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img41} />
          </div>
          <div className="absolute inset-[2.37%_0.68%_2.96%_7.01%]" data-node-id="11:740" data-name="Слой 39">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img39} />
          </div>
        </>
      )}
      {is2 && (
        <>
          <div className="absolute contents inset-[0.47%_0_0_0]" data-node-id="11:722" data-name="Слой 18 (Clip group)">
            <div className="absolute inset-[0.47%_-13.88%_-34.52%_-8.98%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[44px_0px] mask-size-[490px_421px]" data-node-id="11:724" style={{ maskImage: `url("${img18}")` }} data-name="Слой 18">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img19} />
            </div>
            <div className="absolute inset-[-70.92%_-106.53%_-101.18%_-88.57%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[434px_302px] mask-size-[490px_421px]" data-node-id="11:725" style={{ maskImage: `url("${img18}")` }} data-name="Слой 19">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img20} />
            </div>
            <div className="absolute inset-[-271.63%_-151.84%_-192.91%_-88.57%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[434px_1151px] mask-size-[490px_421px]" data-node-id="11:726" style={{ maskImage: `url("${img18}")` }} data-name="Слой 23">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img23} />
            </div>
            <div className="absolute inset-[-4.02%_-6.73%_-1.42%_0.2%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1px_19px] mask-size-[490px_421px]" data-node-id="11:727" style={{ maskImage: `url("${img18}")` }} data-name="Слой 45">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-full left-[-6.9%] max-w-none top-0 w-[106.9%]" src={img45} />
              </div>
            </div>
          </div>
          <div className="absolute inset-[0_0.41%_1.89%_1.63%]" data-node-id="11:729" data-name="Слой 49">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[102.5%]" src={img49} />
            </div>
          </div>
          <div className="absolute inset-[21.99%_33.47%_37.59%_8.37%]" data-node-id="11:730" data-name="Слой 48">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img48} />
          </div>
          <div className="absolute contents inset-[18.91%_30%_29.31%_3.27%]" data-node-id="11:731" data-name="Слой 46 (Clip group)">
            <div className="absolute inset-[18.91%_30%_29.31%_3.27%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[327px_219px]" data-node-id="11:733" style={{ maskImage: `url("${img46}")` }} data-name="Слой 46">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img47} />
            </div>
            <div className="absolute inset-[19.62%_32.04%_30.97%_5.1%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-9px_-3px] mask-size-[327px_219px]" data-node-id="11:734" style={{ maskImage: `url("${img46}")` }} data-name="Слой 47">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img50} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

type ComponentProps = {
  className?: string;
  property1?: "Hair w1" | "Hair w2";
};

export function Component({ className, property1 = "Hair w2" }: ComponentProps) {
  const isHairW2 = property1 === "Hair w2";
  return (
    <div className={className || "h-[320px] relative w-[185px]"} id={isHairW2 ? "node-11_703" : "node-11_706"}>
      <div className="absolute flex inset-0 items-center justify-center" id={isHairW2 ? "node-11_698" : "node-11_695"} style={{ containerType: "size" }}>
        <div className="-rotate-90 -scale-x-100 flex-none h-[100cqw] w-[100cqh]">
          {property1 === "Hair w1" && (
            <div className="relative size-full" data-name="Hair w1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[109.73%] left-[8.44%] max-w-none top-0 w-[86.56%]" src={imgHairW1} />
              </div>
            </div>
          )}
          {isHairW2 && (
            <div className="relative size-full" data-name="Hair w2">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[90.27%] left-0 max-w-none top-[5.95%] w-full" src={imgHairW2} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

type Component1Props = {
  className?: string;
  property1?: "Кофта 1" | "Жилет 1" | "Джинсы 1" | "Хаки 1" | "Катаны 1";
};

export function Component1({ className, property1 = "Кофта 1" }: Component1Props) {
  const is1 = property1 === "Джинсы 1";
  const is11 = property1 === "Хаки 1";
  const is12 = property1 === "Катаны 1";
  const is13 = property1 === "Жилет 1";
  return (
    <div className={className || `relative ${is12 ? "h-[207px] w-[147px]" : is11 ? "h-[221px] w-[138px]" : is1 ? "h-[221px] w-[139px]" : "h-[163px] w-[141px]"}`} id={is12 ? "node-11_666" : is11 ? "node-11_669" : is1 ? "node-11_674" : is13 ? "node-11_671" : "node-11_673"}>
      {["Кофта 1", "Джинсы 1", "Хаки 1", "Катаны 1"].includes(property1) && (
        <div className={`absolute flex items-center justify-center left-0 top-0 ${is12 ? "h-[207px] w-[147px]" : is11 ? "h-[221px] w-[138px]" : is1 ? "h-[221px] w-[139px]" : "h-[163px] w-[141px]"}`} id={is12 ? "node-11_635" : is11 ? "node-11_634" : is1 ? "node-11_633" : "node-11_627"}>
          <div className="-scale-y-100 flex-none rotate-90">
            {property1 === "Кофта 1" && (
              <div className="h-[141px] relative w-[163px]" data-name="Кофта">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[124.11%] left-0 max-w-none top-[4.26%] w-full" src={img2} />
                </div>
              </div>
            )}
            {is1 && (
              <div className="h-[139px] relative w-[221px]" data-name="Слой 88">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[90.91%] left-[-21.49%] max-w-none top-[3.5%] w-[121.49%]" src={img96} />
                </div>
              </div>
            )}
            {is11 && (
              <div className="h-[138px] relative w-[221px]" data-name="Слой 22">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[134.78%] left-[-11.31%] max-w-none top-[-40.58%] w-[111.31%]" src={img24} />
                </div>
              </div>
            )}
            {is12 && (
              <div className="h-[147px] relative w-[207px]" data-name="Из выделенного">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[155.1%] left-[-7.73%] max-w-none top-[-25.17%] w-[110.14%]" src={img3} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {is13 && (
        <div className="absolute contents h-[163px] left-0 top-0 w-[141px]" data-node-id="11:628" data-name="Жилет">
          <div className="absolute flex h-[148px] items-center justify-center left-px top-0 w-[138px]" data-node-id="11:630">
            <div className="-scale-y-100 flex-none rotate-90">
              <div className="h-[138px] relative w-[148px]" data-name="Слой 89">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img95} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[162px] items-center justify-center left-0 top-px w-[141px]" data-node-id="11:631">
            <div className="-scale-y-100 flex-none rotate-90">
              <div className="h-[141px] relative w-[162px]" data-name="Слой 103">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[91.98%]" src={img105} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

type Component3Props = {
  className?: string;
  property1?: "Frame 2" | "Frame 4" | "Frame 5" | "Variant10" | "Variant9" | "Variant8";
};

export function Component3({ className, property1 = "Frame 2" }: Component3Props) {
  const isFrame4 = property1 === "Frame 4";
  const isFrame5 = property1 === "Frame 5";
  const isVariant10 = property1 === "Variant10";
  const isVariant10OrVariant9OrVariant8 = ["Variant10", "Variant9", "Variant8"].includes(property1);
  const isVariant8 = property1 === "Variant8";
  const isVariant9 = property1 === "Variant9";
  return (
    <div className={className || `relative ${["Frame 5", "Variant8"].includes(property1) ? "h-[77px] w-[72px]" : ["Frame 4", "Variant9"].includes(property1) ? "size-[73px]" : "h-[74px] w-[73px]"}`} id={isVariant8 ? "node-3_294" : isFrame5 ? "node-3_265" : isVariant9 ? "node-3_291" : isFrame4 ? "node-3_266" : isVariant10 ? "node-3_288" : "node-3_268"}>
      <div className={`absolute flex items-center justify-center ${isVariant8 ? "h-[105px] left-[-18px] top-[-14px] w-[108px]" : isFrame5 ? "h-[77px] left-0 top-0 w-[72px]" : isVariant9 ? "h-[105px] left-[-17px] top-[-16px] w-[108px]" : isFrame4 ? "left-0 size-[73px] top-0" : isVariant10 ? "h-[105px] left-[-17px] top-[-15px] w-[108px]" : "h-[74px] left-0 top-0 w-[73px]"}`} id={isVariant8 ? "node-3_295" : isFrame5 ? "node-1_169" : isVariant9 ? "node-3_292" : isFrame4 ? "node-1_168" : isVariant10 ? "node-3_289" : "node-1_167"}>
        <div className="-scale-y-100 flex-none rotate-90">
          {property1 === "Frame 2" && (
            <div className="h-[73px] relative w-[74px]" data-name="Слой 85">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img85} />
            </div>
          )}
          {isVariant10 && (
            <div className="h-[108px] relative w-[105px]" data-name="Слой 84">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img84} />
            </div>
          )}
          {isFrame4 && (
            <div className="relative size-[73px]" data-name="Слой 86">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img86} />
            </div>
          )}
          {isVariant9 && (
            <div className="h-[108px] relative w-[105px]" data-name="Слой 88">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img84} />
            </div>
          )}
          {isFrame5 && (
            <div className="h-[72px] relative w-[77px]" data-name="Слой 87">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img99} />
            </div>
          )}
          {isVariant8 && (
            <div className="h-[108px] relative w-[105px]" data-name="Слой 89">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img84} />
            </div>
          )}
        </div>
      </div>
      {isVariant10OrVariant9OrVariant8 && (
        <>
          <div className={`absolute flex h-[105px] items-center justify-center w-[108px] ${isVariant8 ? "left-[-18px] top-[-14px]" : isVariant9 ? "left-[-17px] top-[-16px]" : "left-[-17px] top-[-15px]"}`} id={isVariant8 ? "node-3_301" : isVariant9 ? "node-3_299" : "node-3_297"}>
            <div className="-scale-y-100 flex-none rotate-90">
              {isVariant10 && (
                <div className="h-[108px] relative w-[105px]" data-name="Слой 86">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img84} />
                </div>
              )}
              {isVariant9 && (
                <div className="h-[108px] relative w-[105px]" data-name="Слой 89">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img84} />
                </div>
              )}
              {isVariant8 && (
                <div className="h-[108px] relative w-[105px]" data-name="Слой 90">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img84} />
                </div>
              )}
            </div>
          </div>
          <div className={`absolute flex items-center justify-center left-0 top-0 ${isVariant8 ? "h-[77px] w-[72px]" : isVariant9 ? "size-[73px]" : "h-[74px] w-[73px]"}`} id={isVariant8 ? "node-3_296" : isVariant9 ? "node-3_293" : "node-3_290"}>
            <div className="-scale-y-100 flex-none rotate-90">
              {isVariant10 && (
                <div className="h-[73px] relative w-[74px]" data-name="Слой 85">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img85} />
                </div>
              )}
              {isVariant9 && (
                <div className="relative size-[73px]" data-name="Слой 86">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img86} />
                </div>
              )}
              {isVariant8 && (
                <div className="h-[72px] relative w-[77px]" data-name="Слой 87">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img99} />
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

type Component4Props = {
  className?: string;
  property1?: "Frame 2" | "Frame 3" | "Frame 4" | "Variant9" | "Variant8" | "Variant7";
};

export function Component4({ className, property1 = "Frame 2" }: Component4Props) {
  const isFrame3 = property1 === "Frame 3";
  const isFrame4 = property1 === "Frame 4";
  const isVariant7 = property1 === "Variant7";
  const isVariant8 = property1 === "Variant8";
  const isVariant9 = property1 === "Variant9";
  const isVariant9OrVariant8OrVariant7 = ["Variant9", "Variant8", "Variant7"].includes(property1);
  return (
    <div className={className || `relative ${["Frame 4", "Variant7"].includes(property1) ? "h-[77px] w-[72px]" : ["Frame 3", "Variant8"].includes(property1) ? "size-[73px]" : "h-[74px] w-[73px]"}`} id={isVariant7 ? "node-3_349" : isFrame4 ? "node-3_327" : isVariant8 ? "node-3_346" : isFrame3 ? "node-3_328" : isVariant9 ? "node-3_343" : "node-3_332"}>
      <div className={`absolute flex items-center justify-center ${isVariant7 ? "h-[105px] left-[-18px] top-[-16px] w-[108px]" : isFrame4 ? "h-[77px] left-0 top-0 w-[72px]" : isVariant8 ? "h-[105px] left-[-17px] top-[-16px] w-[108px]" : isFrame3 ? "left-0 size-[73px] top-0" : isVariant9 ? "h-[105px] left-[-17px] top-[-15px] w-[108px]" : "h-[74px] left-0 top-0 w-[73px]"}`} id={isVariant7 ? "node-3_350" : isFrame4 ? "node-1_174" : isVariant8 ? "node-3_347" : isFrame3 ? "node-1_173" : isVariant9 ? "node-3_344" : "node-1_172"}>
        <div className="-scale-y-100 flex-none rotate-90">
          {property1 === "Frame 2" && (
            <div className="h-[73px] relative w-[74px]" data-name="Слой 90">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img97} />
            </div>
          )}
          {isVariant9 && (
            <div className="h-[108px] relative w-[105px]" data-name="Слой 84">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img84} />
            </div>
          )}
          {isFrame3 && (
            <div className="relative size-[73px]" data-name="Слой 91">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img98} />
            </div>
          )}
          {isVariant8 && (
            <div className="h-[108px] relative w-[105px]" data-name="Слой 93">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img84} />
            </div>
          )}
          {isFrame4 && (
            <div className="h-[72px] relative w-[77px]" data-name="Слой 92">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img99} />
            </div>
          )}
          {isVariant7 && (
            <div className="h-[108px] relative w-[105px]" data-name="Слой 94">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img84} />
            </div>
          )}
        </div>
      </div>
      {isVariant9OrVariant8OrVariant7 && (
        <>
          <div className={`absolute flex h-[105px] items-center justify-center w-[108px] ${isVariant7 ? "left-[-18px] top-[-16px]" : isVariant8 ? "left-[-17px] top-[-16px]" : "left-[-17px] top-[-15px]"}`} id={isVariant7 ? "node-3_356" : isVariant8 ? "node-3_354" : "node-3_352"}>
            <div className="-scale-y-100 flex-none rotate-90">
              {isVariant9 && (
                <div className="h-[108px] relative w-[105px]" data-name="Слой 91">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img84} />
                </div>
              )}
              {isVariant8 && (
                <div className="h-[108px] relative w-[105px]" data-name="Слой 94">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img84} />
                </div>
              )}
              {isVariant7 && (
                <div className="h-[108px] relative w-[105px]" data-name="Слой 95">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img84} />
                </div>
              )}
            </div>
          </div>
          <div className={`absolute flex items-center justify-center left-0 top-0 ${isVariant7 ? "h-[77px] w-[72px]" : isVariant8 ? "size-[73px]" : "h-[74px] w-[73px]"}`} id={isVariant7 ? "node-3_351" : isVariant8 ? "node-3_348" : "node-3_345"}>
            <div className="-scale-y-100 flex-none rotate-90">
              {isVariant9 && (
                <div className="h-[73px] relative w-[74px]" data-name="Слой 90">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img97} />
                </div>
              )}
              {isVariant8 && (
                <div className="relative size-[73px]" data-name="Слой 91">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img98} />
                </div>
              )}
              {isVariant7 && (
                <div className="h-[72px] relative w-[77px]" data-name="Слой 92">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img99} />
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

type Component5Props = {
  className?: string;
  property1?: "Frame 3" | "Frame 2" | "Frame 5" | "Variant6";
};

export function Component5({ className, property1 = "Frame 2" }: Component5Props) {
  const isFrame2 = property1 === "Frame 2";
  const isFrame5 = property1 === "Frame 5";
  const isVariant6 = property1 === "Variant6";
  const isVariant6OrFrame5 = ["Variant6", "Frame 5"].includes(property1);
  return (
    <div className={className || "h-[185px] relative w-[127px]"} id={isFrame5 ? "node-3_381" : isFrame2 ? "node-3_382" : isVariant6 ? "node-3_392" : "node-3_384"}>
      <div className={`absolute flex items-center justify-center ${isFrame5 ? "h-[200px] left-[-26px] top-[-6px] w-[153px]" : isVariant6 ? "h-[200px] left-[-26px] top-[-7px] w-[153px]" : "h-[185px] left-0 top-0 w-[127px]"}`} id={isFrame5 ? "node-3_379" : isFrame2 ? "node-1_179" : isVariant6 ? "node-3_393" : "node-1_178"}>
        <div className="-scale-y-100 flex-none rotate-90">
          {isVariant6OrFrame5 && (
            <div className="h-[153px] relative w-[200px]" data-name="Слой 84">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img87} />
            </div>
          )}
          {property1 === "Frame 3" && (
            <div className="h-[127px] relative w-[185px]" data-name="Слой 96">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[102.36%] left-0 max-w-none top-[-7.87%] w-[111.89%]" src={img100} />
              </div>
            </div>
          )}
          {isFrame2 && (
            <div className="h-[127px] relative w-[185px]" data-name="Слой 97">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img106} />
            </div>
          )}
        </div>
      </div>
      {isVariant6OrFrame5 && (
        <div className={`absolute flex items-center justify-center ${isFrame5 ? "h-[185px] left-0 top-0 w-[127px]" : "h-[200px] left-[-26px] top-[-7px] w-[153px]"}`} id={isFrame5 ? "node-3_378" : "node-3_400"}>
          <div className="-scale-y-100 flex-none rotate-90">
            <div className={`relative ${isFrame5 ? "h-[127px] w-[185px]" : "h-[153px] w-[200px]"}`} data-name="Слой 97">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={isFrame5 ? img106 : img87} />
            </div>
          </div>
        </div>
      )}
      {isVariant6 && (
        <div className="absolute flex h-[185px] items-center justify-center left-0 top-0 w-[127px]" data-node-id="3:394">
          <div className="-scale-y-100 flex-none rotate-90">
            <div className="h-[127px] relative w-[185px]" data-name="Слой 96">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[102.36%] left-0 max-w-none top-[-7.87%] w-[111.89%]" src={img100} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

type Component6Props = {
  className?: string;
  property1?: "Hair w1" | "Hair p1" | "Hair b1" | "Hair w2" | "Hair p2" | "Hair b2";
};

export function Component6({ className, property1 = "Hair w1" }: Component6Props) {
  const isHairB1 = property1 === "Hair b1";
  const isHairB2 = property1 === "Hair b2";
  const isHairP1 = property1 === "Hair p1";
  const isHairP2 = property1 === "Hair p2";
  const isHairW2 = property1 === "Hair w2";
  const isHairW2OrHairP2OrHairB2 = ["Hair w2", "Hair p2", "Hair b2"].includes(property1);
  return (
    <div className={className || `relative ${isHairW2OrHairP2OrHairB2 ? "h-[1250px] w-[805px]" : "h-[1034px] w-[738px]"}`} id={isHairB2 ? "node-3_882" : isHairP2 ? "node-3_883" : isHairW2 ? "node-3_884" : isHairB1 ? "node-3_885" : isHairP1 ? "node-3_886" : "node-3_887"}>
      <div className={`absolute flex items-center justify-center ${isHairB2 ? "h-[457px] left-[156px] top-[280px] w-[390px]" : ["Hair w2", "Hair p2"].includes(property1) ? "h-[457px] left-[159px] top-[280px] w-[390px]" : "h-[1034px] left-0 top-0 w-[738px]"}`} id={isHairB2 ? "node-3_430" : isHairP2 ? "node-3_431" : isHairW2 ? "node-3_432" : isHairB1 ? "node-1_166" : isHairP1 ? "node-1_165" : "node-1_164"}>
        <div className="-scale-y-100 flex-none rotate-90">
          {property1 === "Hair w1" && (
            <div className="h-[738px] relative w-[1034px]" data-name="Hair w1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[144.72%] left-[-10.93%] max-w-none top-[-14.5%] w-[142.75%]" src={imgHairW3} />
              </div>
            </div>
          )}
          {isHairP1 && (
            <div className="h-[738px] relative w-[1034px]" data-name="Hair p1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[144.72%] left-[-10.93%] max-w-none top-[-14.63%] w-[142.75%]" src={imgHairP1} />
              </div>
            </div>
          )}
          {isHairB1 && (
            <div className="h-[738px] relative w-[1034px]" data-name="Hair b1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[144.72%] left-[-10.93%] max-w-none top-[-14.63%] w-[142.75%]" src={imgHairB1} />
              </div>
            </div>
          )}
          {isHairW2 && (
            <div className="h-[390px] relative w-[457px]" data-name="Слой 104">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img107} />
            </div>
          )}
          {isHairP2 && (
            <div className="h-[390px] relative w-[457px]" data-name="Слой 103">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img107} />
            </div>
          )}
          {isHairB2 && (
            <div className="h-[390px] relative w-[457px]" data-name="Слой 102">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img107} />
            </div>
          )}
        </div>
      </div>
      {isHairW2OrHairP2OrHairB2 && (
        <div className="absolute flex h-[1250px] items-center justify-center left-0 top-0 w-[805px]" id={isHairB2 ? "node-1_163" : isHairP2 ? "node-1_162" : "node-1_161"}>
          <div className="-scale-y-100 flex-none rotate-90">
            {isHairW2 && (
              <div className="h-[805px] relative w-[1250px]" data-name="Hair w2">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[152.8%] left-[-4.24%] max-w-none top-[-13.04%] w-[118.08%]" src={imgHairW4} />
                </div>
              </div>
            )}
            {isHairP2 && (
              <div className="h-[805px] relative w-[1250px]" data-name="Hair p2">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[132.67%] left-[-4.24%] max-w-none top-[-12.55%] w-[118.08%]" src={imgHairP2} />
                </div>
              </div>
            )}
            {isHairB2 && (
              <div className="h-[805px] relative w-[1250px]" data-name="Hair b2">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[132.67%] left-[-4.24%] max-w-none top-[-12.67%] w-[118.08%]" src={imgHairB2} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

type Component9Props = {
  className?: string;
  property1?: "Красные" | "Черные" | "голубые";
};

export function Component9({ className, property1 = "голубые" }: Component9Props) {
  const is = property1 === "Черные";
  const is1 = property1 === "голубые";
  return (
    <div className={className || "h-[83px] relative w-[226px]"} id={is1 ? "node-3_914" : is ? "node-3_915" : "node-3_916"}>
      <div className={`absolute ${is1 ? "-translate-y-1/2 contents left-[1.77%] right-[1.77%] top-[calc(50%-5px)]" : "flex h-[83px] items-center justify-center left-0 top-0 w-[226px]"}`} id={is1 ? "node-3_907" : is ? "node-3_900" : "node-3_899"} style={is1 ? { containerType: "size" } : undefined}>
        <div className={is1 ? "-translate-y-1/2 absolute aspect-[37/27] flex items-center justify-center left-[81.86%] right-[1.77%] top-[calc(50%-25px)]" : "-scale-y-100 flex-none rotate-90"} id={is1 ? "node-3_908" : undefined} style={is1 ? { containerType: "size" } : undefined}>
          {property1 === "Красные" && (
            <div className="h-[226px] relative w-[83px]" data-name="Красные">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[114.6%] left-[-13.25%] max-w-none top-0 w-[125.3%]" src={img7} />
              </div>
            </div>
          )}
          {is && (
            <div className="h-[226px] relative w-[83px]" data-name="черные">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[114.6%] left-[-13.25%] max-w-none top-0 w-[125.3%]" src={img8} />
              </div>
            </div>
          )}
          {is1 && (
            <div className="-rotate-90 -scale-x-100 flex-none h-[100cqw] w-[100cqh]">
              <div className="relative size-full" data-name="Object">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[97.3%] left-0 max-w-none top-0 w-full" src={imgObject} />
                </div>
              </div>
            </div>
          )}
        </div>
        {is1 && (
          <div className="-translate-y-1/2 absolute aspect-[35/25] flex items-center justify-center left-[1.77%] right-[82.74%] top-[calc(50%+16px)]" data-node-id="3:909" style={{ containerType: "size" }}>
            <div className="-rotate-90 -scale-x-100 flex-none h-[100cqw] w-[100cqh]">
              <div className="relative size-full" data-name="Object 2">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgObject2} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

type Component2Props = {
  className?: string;
  property1?: "Frame 2";
};

export function Component2({ className, property1 = "Frame 2" }: Component2Props) {
  return (
    <div className={className || "h-[1308px] relative w-[1339px]"} data-node-id="1:225">
      <div className="absolute contents h-[440px] left-[60px] top-[803px] w-[436px]" data-node-id="1:180" data-name="Новая группа">
        <div className="absolute flex h-[440px] items-center justify-center left-[60px] top-[803px] w-[436px]" data-node-id="1:181">
          <div className="-scale-y-100 flex-none rotate-90">
            <div className="h-[436px] opacity-42 relative w-[440px]" data-name="Слой 108">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-full left-[-39.55%] max-w-none top-0 w-[139.55%]" src={img111} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[130px] items-center justify-center left-[233px] top-[1099px] w-[177px]" data-node-id="1:182">
          <div className="-scale-y-100 flex-none rotate-90">
            <div className="h-[177px] relative w-[130px]" data-name="Слой 111">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img113} />
            </div>
          </div>
        </div>
        <div className="absolute contents h-[336px] left-[163px] top-[864px] w-[252px]" data-node-id="1:183" data-name="Слой 105 (Clip group)">
          <div className="absolute flex h-[336px] items-center justify-center left-[163px] top-[864px] w-[252px]" data-node-id="1:185">
            <div className="-scale-y-100 flex-none rotate-90">
              <div className="h-[252px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[252px_336px] relative w-[336px]" style={{ maskImage: `url("${img114}")` }} data-name="Слой 105">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img115} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[73px] items-center justify-center left-[193px] top-[1025px] w-[138px]" data-node-id="1:186">
            <div className="-scale-y-100 flex-none rotate-90">
              <div className="h-[138px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-30px_-161px] mask-size-[252px_336px] relative w-[73px]" style={{ maskImage: `url("${img114}")` }} data-name="Слой 114">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img116} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[470px] items-center justify-center left-[40px] top-[1021px] w-[616px]" data-node-id="1:187">
            <div className="-scale-y-100 flex-none rotate-90">
              <div className="h-[616px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[123px_-157px] mask-size-[252px_336px] relative w-[470px]" style={{ maskImage: `url("${img114}")` }} data-name="Слой 106">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img117} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[239px] items-center justify-center left-[193px] top-[864px] w-[240px]" data-node-id="1:188">
          <div className="-scale-y-100 flex-none rotate-90">
            <div className="h-[240px] relative w-[239px]" data-name="Слой 115">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[357.92%] left-[-221.76%] max-w-none top-0 w-[321.76%]" src={img118} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[355px] items-center justify-center left-[107px] top-[837px] w-[313px]" data-node-id="1:189">
          <div className="-scale-y-100 flex-none rotate-90">
            <div className="h-[313px] relative w-[355px]" data-name="Слой 109">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img119} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
