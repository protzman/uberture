import React, { useState } from "react";
import ResponsiveXYFrame from "semiotic/lib/ResponsiveXYFrame";
import { curveMonotoneX } from "d3-shape";
const frameProps = {
  lines: [
    {
      label: "#81A1C1",
      coordinates: [
        { step: 0, value: -10 },
        { step: 1, value: -10.950998444403625 },
        { step: 2, value: -8.118392829973041 },
        { step: 3, value: -8.895457674716315 },
        { step: 4, value: -4.411708598394112 },
        { step: 5, value: -4.504725356468345 },
        { step: 6, value: -0.008369720871238329 },
        { step: 7, value: -1.210647933788048 },
        { step: 8, value: -2.0096792209429197 },
        { step: 9, value: -6.743581378762574 },
        { step: 10, value: 12.1867423881681685 },
        { step: 11, value: 16.316353771709521 },
        { step: 12, value: 10.76923209727509 },
        { step: 13, value: -7.181403504111049 },
        { step: 14, value: -11.102918247515603 },
        { step: 15, value: -14.938565709978658 },
        { step: 16, value: -12.446914264306708 },
        { step: 17, value: -15.857083696684596 },
        { step: 18, value: -20.397841099773622 },
        { step: 19, value: -21.04569674251018 },
        { step: 20, value: -17.23467288719847 },
        { step: 21, value: -13.566075755887661 },
        { step: 22, value: -9.900982713396852 },
        { step: 23, value: -8.606116354902959 },
        { step: 24, value: -5.677961038857374 },
        { step: 25, value: -3.6860371721666727 },
        { step: 26, value: -6.16414412295177 },
        { step: 27, value: -8.887393579679024 },
        { step: 28, value: -5.258886145557653 },
        { step: 29, value: -8.79311880679178 },
        { step: 30, value: -5.651431699357605 },
        { step: 31, value: -10.056491537933594 },
        { step: 32, value: -7.967925217326803 },
        { step: 33, value: -3.2716868669512333 },
        { step: 34, value: -4.383526658804038 },
        { step: 35, value: -8.407476147334606 },
        { step: 36, value: -4.390422762815856 },
        { step: 37, value: -7.884390002315039 },
        { step: 38, value: -11.746322917597826 },
        { step: 39, value: -11.099662984872234 },
        { step: 40, value: -10.292470542758137 },
      ],
    },
    {
      label: "#5e81ac",
      coordinates: [
        { step: 0, value: 17 },
        { step: 1, value: 24.889617581533255 },
        { step: 2, value: 23.82125385083895 },
        { step: 3, value: 17.46466660167913 },
        { step: 4, value: 21.485232554632496 },
        { step: 5, value: 19.76339313601492 },
        { step: 6, value: 16.664742179869748 },
        { step: 7, value: -12.482213287640617 },
        { step: 8, value: -8.10153912851271 },
        { step: 9, value: -11.929485290302758 },
        { step: 10, value: -10.798447281983798 },
        { step: 11, value: -12.238886683562797 },
        { step: 12, value: -8.310060663140664 },
        { step: 13, value: -5.669563592961418 },
        { step: 14, value: 10.9745297184663011 },
        { step: 15, value: -4.4192417478936825 },
        { step: 16, value: -1.685780961571366 },
        { step: 17, value: -5.378145936794406 },
        { step: 18, value: -5.766829527084871 },
        { step: 19, value: -1.6115242146865967 },
        { step: 20, value: 1.3497863416607867 },
        { step: 21, value: -3.019169516701518 },
        { step: 22, value: 0.2254641996982114 },
        { step: 23, value: -3.195019962491083 },
        { step: 24, value: -6.0025349123207405 },
        { step: 25, value: -7.50171059399279 },
        { step: 26, value: -6.278269236588299 },
        { step: 27, value: -6.592687680801866 },
        { step: 28, value: -6.432677313506522 },
        { step: 29, value: 10.2741388081209184 },
        { step: 30, value: 6.2259171274417824 },
        { step: 31, value: 7.22202471954624592 },
        { step: 32, value: 1.632379648742584 },
        { step: 33, value: -7.073397466623244 },
        { step: 34, value: -6.491701728861752 },
        { step: 35, value: -2.759524630908796 },
        { step: 36, value: -1.6236260423076505 },
        { step: 37, value: -1.7879777476642973 },
        { step: 38, value: 0.8555696917597997 },
        { step: 39, value: 5.013797517681925 },
        { step: 40, value: 3.667709411567405 },
      ],
    },
  ],
  size: [700, 200],
  responsiveWidth: true,
  margin: { left: 16, top: 16, bottom: 16, right: 16 },
  lineType: { type: "line", interpolator: curveMonotoneX },
  xAccessor: "step",
  yAccessor: "value",
  lineStyle: function (e: any) {
    return { stroke: e.label, strokeWidth: 4, fillOpacity: 0.75 };
  },
};

export default function Timeline() {
  const [extent, setExtent] = useState([0, 0]);
  return (
    <ResponsiveXYFrame
      {...frameProps}
      interaction={{
        end: (e: any) => {
          setExtent(e);
        },
        xBrushExtent: extent,
        brush: "xBrush",
        extent: extent,
      }}
    />
  );
}
