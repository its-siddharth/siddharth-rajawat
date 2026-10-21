import { useId } from "react";

const font = "'DM Sans', sans-serif";
const mono = "'SFMono-Regular', Consolas, monospace";

function Spark({
  x,
  y,
  size = 28,
  fill = "#d4e8a5",
}: {
  x: number;
  y: number;
  size?: number;
  fill?: string;
}) {
  return (
    <path
      d={`M ${x} ${y - size / 2} Q ${x} ${y} ${x + size / 2} ${y} Q ${x} ${y} ${x} ${y + size / 2} Q ${x} ${y} ${x - size / 2} ${y} Q ${x} ${y} ${x} ${y - size / 2}`}
      fill={fill}
    />
  );
}

export function HeroVisual() {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 520 460"
      fill="none"
      style={{
        width: "100%",
        height: "auto",
        display: "block",
        overflow: "visible",
      }}
    >
      <defs>
        <linearGradient
          id={`${id}-area`}
          x1="250"
          y1="177"
          x2="250"
          y2="322"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#d3ed9b" stopOpacity=".22" />
          <stop offset="1" stopColor="#d3ed9b" stopOpacity="0" />
        </linearGradient>
        <filter
          id={`${id}-shadow`}
          x="-25%"
          y="-25%"
          width="150%"
          height="160%"
        >
          <feDropShadow
            dx="0"
            dy="15"
            stdDeviation="16"
            floodColor="#1c3c2d"
            floodOpacity=".11"
          />
        </filter>
        <pattern
          id={`${id}-dots`}
          width="18"
          height="18"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="1" fill="#315c44" fillOpacity=".12" />
        </pattern>
      </defs>
      <rect x="12" y="14" width="496" height="430" rx="30" fill="#e6eddf" />
      <rect
        x="12"
        y="14"
        width="496"
        height="430"
        rx="30"
        fill={`url(#${id}-dots)`}
      />
      <circle cx="260" cy="229" r="186" stroke="#b9cdb0" strokeOpacity=".6" />
      <circle
        cx="260"
        cy="229"
        r="153"
        stroke="#b9cdb0"
        strokeOpacity=".45"
        strokeDasharray="3 7"
      />
      <text
        x="41"
        y="47"
        fill="#63806a"
        fontFamily={mono}
        fontSize="8.5"
        letterSpacing="1.8"
      >
        A LITTLE SIGNAL. A LOT OF POSSIBILITY.
      </text>
      <g filter={`url(#${id}-shadow)`}>
        <rect x="65" y="83" width="390" height="272" rx="15" fill="#193e30" />
        <rect
          x="65.5"
          y="83.5"
          width="389"
          height="271"
          rx="14.5"
          stroke="#77987a"
          strokeOpacity=".25"
        />
        <circle cx="91" cy="107" r="3" fill="#92ac84" />
        <circle cx="103" cy="107" r="3" fill="#92ac84" fillOpacity=".5" />
        <circle cx="115" cy="107" r="3" fill="#92ac84" fillOpacity=".3" />
        <text
          x="429"
          y="110"
          textAnchor="end"
          fill="#a8bba2"
          fontFamily={mono}
          fontSize="8"
          letterSpacing="1"
        >
          THE BIGGER PICTURE
        </text>
        <text
          x="90"
          y="151"
          fill="#f8f9ee"
          fontFamily="'Instrument Serif', Georgia, serif"
          fontSize="34"
        >
          A clearer view.
        </text>
        <text x="91" y="171" fill="#adc2a9" fontFamily={font} fontSize="10">
          Turning meaningful signals into useful insights.
        </text>
        {[207, 240, 273, 306].map((y) => (
          <path
            key={y}
            d={`M91 ${y}H430`}
            stroke="#86a37d"
            strokeOpacity=".14"
          />
        ))}
        {[145, 202, 259, 316, 373, 430].map((x) => (
          <path
            key={x}
            d={`M${x} 194V306`}
            stroke="#86a37d"
            strokeOpacity=".08"
          />
        ))}
        <path
          d="M92 289C107 286 110 269 125 272S145 292 160 274S178 242 193 249S211 270 229 245S245 211 261 219S281 243 299 214S320 192 337 204S359 197 375 178S403 170 430 155V310H92Z"
          fill={`url(#${id}-area)`}
        />
        <path
          d="M92 289C107 286 110 269 125 272S145 292 160 274S178 242 193 249S211 270 229 245S245 211 261 219S281 243 299 214S320 192 337 204S359 197 375 178S403 170 430 155"
          stroke="#d5ed9f"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="299" cy="214" r="8" fill="#d5ed9f" fillOpacity=".15" />
        <circle
          cx="299"
          cy="214"
          r="3.5"
          fill="#d5ed9f"
          stroke="#193e30"
          strokeWidth="2"
        />
        <path
          d="M299 227V306"
          stroke="#cce3a4"
          strokeOpacity=".3"
          strokeDasharray="3 4"
        />
        <circle cx="94" cy="330" r="3" fill="#d5ed9f" />
        <text
          x="104"
          y="333"
          fill="#c6d6bb"
          fontFamily={mono}
          fontSize="8"
          letterSpacing=".8"
        >
          COMPLEXITY → CLARITY
        </text>
        <path
          d="M414 329H429M425 325L429 329L425 333"
          stroke="#c6d6bb"
          strokeWidth="1.2"
        />
      </g>
      <g filter={`url(#${id}-shadow)`}>
        <rect x="346" y="50" width="147" height="57" rx="11" fill="#fafaf2" />
        <rect x="357" y="64" width="29" height="29" rx="8" fill="#e5edda" />
        <path
          d="M365 79L370 84L379 73"
          stroke="#476540"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="396"
          y="74"
          fill="#23402f"
          fontFamily={font}
          fontSize="10"
          fontWeight="600"
        >
          Built with
        </text>
        <text
          x="396"
          y="88"
          fill="#23402f"
          fontFamily={font}
          fontSize="10"
          fontWeight="600"
        >
          intention.
        </text>
      </g>
      <g filter={`url(#${id}-shadow)`}>
        <rect x="22" y="216" width="113" height="58" rx="11" fill="#fafaf2" />
        <circle cx="44" cy="238" r="4" fill="#67895c" />
        <text
          x="56"
          y="242"
          fill="#3f5740"
          fontFamily={mono}
          fontSize="8"
          letterSpacing=".8"
        >
          HUMAN FIRST
        </text>
        <text x="37" y="259" fill="#53684e" fontFamily={font} fontSize="10">
          Data with purpose.
        </text>
      </g>
      <g>
        <rect
          x="81"
          y="382"
          width="358"
          height="35"
          rx="17.5"
          fill="#fafaf2"
          stroke="#d6dfca"
        />
        <text x="103" y="404" fill="#58704e" fontFamily={mono} fontSize="9">
          DATA
        </text>
        <path d="M153 400H174M170 396L174 400L170 404" stroke="#839279" />
        <text x="193" y="404" fill="#58704e" fontFamily={mono} fontSize="9">
          INTELLIGENCE
        </text>
        <path d="M304 400H325M321 396L325 400L321 404" stroke="#839279" />
        <text x="344" y="404" fill="#58704e" fontFamily={mono} fontSize="9">
          IMPACT
        </text>
      </g>
      <Spark x={39} y={102} size={30} fill="#718f60" />
      <Spark x={476} y={337} size={36} fill="#a2ba78" />
      <circle cx="468" cy="365" r="3" fill="#7b966a" />
      <circle cx="53" cy="377" r="3" fill="#7b966a" />
    </svg>
  );
}

function ConceptLabel({ color = "#66816c" }: { color?: string }) {
  return (
    <text
      x="26"
      y="297"
      fill={color}
      fontFamily={mono}
      fontSize="8"
      letterSpacing="1.5"
    >
      CONCEPT VISUALIZATION
    </text>
  );
}

function CryptoVisual({ id }: { id: string }) {
  return (
    <>
      <defs>
        <linearGradient
          id={`${id}-crypto`}
          x1="300"
          y1="94"
          x2="300"
          y2="271"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#d1e5a0" stopOpacity=".23" />
          <stop offset="1" stopColor="#d1e5a0" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="640" height="320" fill="#1c4134" />
      <circle cx="576" cy="41" r="132" stroke="#607959" strokeOpacity=".15" />
      <circle cx="576" cy="41" r="171" stroke="#607959" strokeOpacity=".1" />
      <rect x="28" y="28" width="25" height="25" rx="7" fill="#d9e9b2" />
      <path
        d="M34 42L39 37L43 44L48 36"
        stroke="#294631"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="65"
        y="45"
        fill="#edf1df"
        fontFamily={font}
        fontSize="13"
        fontWeight="600"
      >
        CryptoLens
      </text>
      <rect
        x="458"
        y="30"
        width="153"
        height="23"
        rx="11.5"
        stroke="#6a875d"
        strokeOpacity=".45"
      />
      <circle cx="472" cy="41.5" r="3" fill="#c9e99c" />
      <text
        x="483"
        y="45"
        fill="#bbcfaa"
        fontFamily={mono}
        fontSize="8"
        letterSpacing=".5"
      >
        MARKET + SENTIMENT
      </text>
      {[104, 150, 196, 242].map((y) => (
        <path key={y} d={`M40 ${y}H600`} stroke="#a5b38a" strokeOpacity=".12" />
      ))}
      {[120, 200, 280, 360, 440, 520].map((x) => (
        <path key={x} d={`M${x} 82V263`} stroke="#a5b38a" strokeOpacity=".07" />
      ))}
      <path
        d="M40 238C67 232 64 211 85 219S116 247 136 224S158 177 184 191S210 213 238 179S270 140 295 150S323 183 347 153S375 107 400 126S427 141 450 112V266H40Z"
        fill={`url(#${id}-crypto)`}
      />
      <path
        d="M40 238C67 232 64 211 85 219S116 247 136 224S158 177 184 191S210 213 238 179S270 140 295 150S323 183 347 153S375 107 400 126S427 141 450 112"
        stroke="#d6eaaa"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M450 112C471 95 482 117 504 98S543 80 564 73S584 75 600 62"
        stroke="#d6eaaa"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="5 5"
      />
      <path
        d="M450 74V266"
        stroke="#c0d1a0"
        strokeOpacity=".3"
        strokeDasharray="3 4"
      />
      <circle cx="450" cy="112" r="6" fill="#d4e6ac" fillOpacity=".2" />
      <circle cx="450" cy="112" r="3" fill="#d4e6ac" />
      <rect
        x="460"
        y="147"
        width="133"
        height="49"
        rx="8"
        fill="#2b503d"
        stroke="#627d51"
        strokeOpacity=".4"
      />
      <text
        x="473"
        y="167"
        fill="#a9c299"
        fontFamily={mono}
        fontSize="8"
        letterSpacing=".8"
      >
        LOOKING AHEAD
      </text>
      <text x="473" y="183" fill="#e7edda" fontFamily={font} fontSize="11">
        Signal → forecast
      </text>
      <ConceptLabel color="#94ad87" />
      <text
        x="612"
        y="297"
        textAnchor="end"
        fill="#94ad87"
        fontFamily={mono}
        fontSize="8"
        letterSpacing="1.5"
      >
        01 / ANALYTICS
      </text>
    </>
  );
}

function UserNode({
  x,
  y,
  r = 21,
  fill = "#faf4ed",
  stroke = "#bb8c71",
}: {
  x: number;
  y: number;
  r?: number;
  fill?: string;
  stroke?: string;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={r} fill={fill} stroke={stroke} strokeOpacity=".35" />
      <circle cy="-5" r="5" stroke={stroke} strokeWidth="1.4" />
      <path
        d="M-9 10C-9 0 9 0 9 10"
        stroke={stroke}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </g>
  );
}

function ChurnVisual() {
  const nodes = [
    { x: 432, y: 63 },
    { x: 521, y: 114 },
    { x: 521, y: 216 },
    { x: 432, y: 267 },
    { x: 343, y: 216 },
    { x: 343, y: 114 },
  ];
  return (
    <>
      <rect width="640" height="320" fill="#eddfd4" />
      <circle cx="432" cy="165" r="139" fill="#e8d5c8" fillOpacity=".5" />
      <circle cx="432" cy="165" r="104" stroke="#bc937a" strokeOpacity=".35" />
      <circle
        cx="432"
        cy="165"
        r="71"
        stroke="#bc937a"
        strokeOpacity=".4"
        strokeDasharray="3 6"
      />
      {nodes.map(({ x, y }, i) => (
        <g key={i}>
          <path d={`M432 165L${x} ${y}`} stroke="#bc937a" strokeOpacity=".25" />
          <UserNode
            x={x}
            y={y}
            fill={i === 2 || i === 5 ? "#a16e53" : "#f8eee5"}
            stroke={i === 2 || i === 5 ? "#f2e8d8" : "#a16e53"}
          />
        </g>
      ))}
      <circle
        cx="432"
        cy="165"
        r="44"
        fill="#f8f0e7"
        stroke="#c29a7d"
        strokeOpacity=".4"
      />
      <Spark x={432} y={155} size={27} fill="#93654a" />
      <text
        x="432"
        y="185"
        textAnchor="middle"
        fill="#825940"
        fontFamily={mono}
        fontSize="7.5"
        letterSpacing=".6"
      >
        CUSTOMER SIGNALS
      </text>
      <text
        x="32"
        y="48"
        fill="#936b51"
        fontFamily={mono}
        fontSize="9"
        letterSpacing="1.6"
      >
        UNDERSTAND. ANTICIPATE. RETAIN.
      </text>
      <text
        x="43"
        y="115"
        fill="#6c503c"
        fontFamily="'Instrument Serif', Georgia, serif"
        fontSize="30"
      >
        A reason to stay.
      </text>
      {[
        ["Engagement", 151, 132],
        ["Behavior", 185, 104],
        ["Retention", 219, 162],
      ].map(([label, y, w]) => (
        <g key={label}>
          <rect
            x="44"
            y={Number(y) - 16}
            width={Number(w) + 38}
            height="25"
            rx="5"
            fill="#fbf4ed"
            fillOpacity=".75"
          />
          <circle cx="58" cy={Number(y) - 3.5} r="3" fill="#b4896a" />
          <text
            x="70"
            y={Number(y)}
            fill="#86654e"
            fontFamily={font}
            fontSize="10"
          >
            {label}
          </text>
          <path
            d={`M${Number(w) + 58} ${Number(y) - 7}L${Number(w) + 62} ${Number(y) - 3}L${Number(w) + 58} ${Number(y) + 1}`}
            stroke="#a58467"
            strokeWidth="1.1"
          />
        </g>
      ))}
      <path d="M247 181H294" stroke="#b18a70" strokeDasharray="3 5" />
      <Spark x={594} y={74} size={24} fill="#b58b6d" />
      <ConceptLabel color="#9b795f" />
    </>
  );
}

function SalesVisual() {
  return (
    <>
      <rect width="640" height="320" fill="#dce6d5" />
      <path
        d="M0 80H640M0 160H640M0 240H640M80 0V320M160 0V320M240 0V320M320 0V320M400 0V320M480 0V320M560 0V320"
        stroke="#94ab89"
        strokeOpacity=".1"
      />
      <rect
        x="34"
        y="31"
        width="572"
        height="241"
        rx="12"
        fill="#f2f5eb"
        stroke="#bdcbb2"
      />
      <text
        x="57"
        y="59"
        fill="#5b7350"
        fontFamily={font}
        fontSize="12"
        fontWeight="600"
      >
        Every channel. One clear picture.
      </text>
      <rect x="521" y="45" width="63" height="19" rx="9.5" fill="#e2e9d6" />
      <text
        x="552"
        y="57"
        textAnchor="middle"
        fill="#648055"
        fontFamily={mono}
        fontSize="7"
      >
        OVERVIEW
      </text>
      <path d="M34 77H606M341 77V272" stroke="#dbe3d0" />
      <text
        x="57"
        y="101"
        fill="#8b9c7d"
        fontFamily={mono}
        fontSize="7.5"
        letterSpacing="1"
      >
        THE CONVERSION JOURNEY
      </text>
      <path d="M69 118H309L288 153H90Z" fill="#b4c58c" />
      <path d="M94 160H284L263 195H115Z" fill="#7e9a63" />
      <path d="M119 202H259L238 237H140Z" fill="#456b43" />
      <text
        x="189"
        y="140"
        textAnchor="middle"
        fill="#385433"
        fontFamily={font}
        fontSize="9"
      >
        Discover
      </text>
      <text
        x="189"
        y="182"
        textAnchor="middle"
        fill="#f4f7e9"
        fontFamily={font}
        fontSize="9"
      >
        Engage
      </text>
      <text
        x="189"
        y="224"
        textAnchor="middle"
        fill="#f4f7e9"
        fontFamily={font}
        fontSize="9"
      >
        Convert
      </text>
      <text
        x="364"
        y="101"
        fill="#8b9c7d"
        fontFamily={mono}
        fontSize="7.5"
        letterSpacing="1"
      >
        CHANNEL PERFORMANCE
      </text>
      {[
        ["Organic", 126, 163],
        ["Social", 163, 111],
        ["Paid", 200, 140],
      ].map(([label, y, width], i) => (
        <g key={label}>
          <text
            x="364"
            y={Number(y)}
            fill="#6e8261"
            fontFamily={font}
            fontSize="8"
          >
            {label}
          </text>
          <rect
            x="364"
            y={Number(y) + 7}
            width="200"
            height="10"
            rx="3"
            fill="#e3e9d9"
          />
          <rect
            x="364"
            y={Number(y) + 7}
            width={Number(width)}
            height="10"
            rx="3"
            fill={["#839f65", "#b0c38a", "#617f51"][i]}
          />
        </g>
      ))}
      <circle cx="368" cy="244" r="3" fill="#78995b" />
      <text x="378" y="247" fill="#839479" fontFamily={mono} fontSize="7">
        FROM DATA TO DIRECTION
      </text>
      <ConceptLabel />
    </>
  );
}

function DiagnosticVisual() {
  const points = [
    [122, 225, 0],
    [147, 208, 0],
    [154, 237, 0],
    [169, 185, 0],
    [188, 217, 0],
    [199, 176, 0],
    [209, 236, 0],
    [222, 199, 0],
    [241, 172, 0],
    [251, 216, 0],
    [269, 157, 0],
    [278, 187, 0],
    [298, 207, 0],
    [310, 169, 0],
    [322, 144, 0],
    [335, 191, 0],
    [285, 108, 1],
    [310, 87, 1],
    [323, 116, 1],
    [344, 97, 1],
    [360, 139, 1],
    [372, 76, 1],
    [391, 112, 1],
    [411, 91, 1],
    [428, 139, 1],
    [442, 106, 1],
    [465, 74, 1],
    [482, 121, 1],
    [493, 93, 1],
    [515, 67, 1],
    [533, 105, 1],
    [548, 82, 1],
  ];
  return (
    <>
      <rect width="640" height="320" fill="#e7e2ed" />
      <text
        x="30"
        y="43"
        fill="#766386"
        fontFamily={mono}
        fontSize="9"
        letterSpacing="1.2"
      >
        FINDING PATTERNS. BUILDING CONFIDENCE.
      </text>
      <rect
        x="60"
        y="64"
        width="527"
        height="202"
        rx="10"
        fill="#f6f3f9"
        fillOpacity=".6"
        stroke="#cbc1d7"
        strokeOpacity=".7"
      />
      {[104, 144, 184, 224].map((y) => (
        <path key={y} d={`M85 ${y}H568`} stroke="#b7aac6" strokeOpacity=".2" />
      ))}
      {[165, 245, 325, 405, 485].map((x) => (
        <path key={x} d={`M${x} 82V247`} stroke="#b7aac6" strokeOpacity=".2" />
      ))}
      <path d="M85 82V247H568" stroke="#b4a8c3" strokeOpacity=".6" />
      <path
        d="M213 73C244 96 262 123 293 136S349 150 372 178S402 220 445 255"
        stroke="#a296b4"
        strokeWidth="1.4"
        strokeDasharray="4 5"
      />
      <ellipse
        cx="231"
        cy="196"
        rx="98"
        ry="40"
        transform="rotate(-24 231 196)"
        stroke="#9d8ab4"
        strokeOpacity=".3"
        fill="#bbaacb"
        fillOpacity=".09"
      />
      <ellipse
        cx="422"
        cy="103"
        rx="112"
        ry="35"
        transform="rotate(-9 422 103)"
        stroke="#6f597f"
        strokeOpacity=".25"
        fill="#ad98bc"
        fillOpacity=".09"
      />
      {points.map(([x, y, group], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 5 === 0 ? 5 : 3.5}
          fill={group ? "#69517f" : "#ad94c2"}
          fillOpacity={i % 3 === 0 ? ".55" : ".85"}
        />
      ))}
      <rect
        x="414"
        y="200"
        width="156"
        height="41"
        rx="7"
        fill="#faf7fc"
        stroke="#d4cadf"
      />
      <circle cx="428" cy="215" r="3" fill="#ad94c2" />
      <text x="438" y="218" fill="#897598" fontFamily={mono} fontSize="7">
        FEATURES → PATTERNS
      </text>
      <text x="426" y="232" fill="#79618c" fontFamily={font} fontSize="9">
        Clarity through classification.
      </text>
      <ConceptLabel color="#94809f" />
    </>
  );
}

export function ProjectVisual({
  kind,
}: {
  kind: "cryptolens" | "churn" | "sales" | "diagnostic";
}) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 640 320"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        background: {
          cryptolens: "#1c4134",
          churn: "#eddfd4",
          sales: "#dce6d5",
          diagnostic: "#e7e2ed",
        }[kind],
      }}
    >
      {kind === "cryptolens" && <CryptoVisual id={id} />}
      {kind === "churn" && <ChurnVisual />}
      {kind === "sales" && <SalesVisual />}
      {kind === "diagnostic" && <DiagnosticVisual />}
    </svg>
  );
}
