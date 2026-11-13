const {
  useState,
  useMemo
} = React;
const P = {
  search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })),
  pin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })),
  send: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m22 2-7 20-4-9-9-4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 2 11 13"
  })),
  clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 6v6l4 2"
  })),
  ok: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  })),
  cal: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 2v4M8 2v4M3 10h18"
  })),
  star: /*#__PURE__*/React.createElement("polygon", {
    points: "12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3"
  }),
  bell: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.3 21a2 2 0 0 0 3.4 0"
  })),
  gear: /*#__PURE__*/React.createElement("path", {
    d: "M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"
  }),
  file: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2v6h6"
  })),
  x: /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }),
  user: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21a8 8 0 0 1 16 0"
  })),
  brief: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "7",
    width: "20",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"
  })),
  code: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m16 18 6-6-6-6M8 6l-6 6 6 6"
  })),
  back: /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5m7-7-7 7 7 7"
  }),
  mic: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "2",
    width: "6",
    height: "12",
    rx: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 10a7 7 0 0 0 14 0M12 17v5"
  })),
  bot: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "8",
    width: "16",
    height: "12",
    rx: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8V4M9 14h.01M15 14h.01"
  })),
  lock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "11",
    width: "18",
    height: "11",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4"
  })),
  mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 7-10 7L2 7"
  })),
  up: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 15V3m-5 5 5-5 5 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 17v3h16v-3"
  }))
};
const I = ({
  n,
  s = 20,
  c = ""
}) => /*#__PURE__*/React.createElement("svg", {
  className: c,
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, P[n]);
const JOBS = [{
  id: 1,
  t: "UI/UX Designer",
  co: "TechCorp",
  loc: "Remote",
  type: "Full-time",
  m: 95,
  pay: "$90k - $120k",
  lvl: "Medium",
  ic: "brief",
  skills: ["Figma", "User Flows", "Prototyping"],
  sch: "Full Schedule Fit",
  d: "Collaborate with product and engineering teams to design user-friendly, visually engaging digital experiences. Focus on user flows, wireframes, and high-fidelity mockups...",
  req: ["3+ years UI/UX Experience", "Experience with Figma & Mockups", "Portfolio required"]
}, {
  id: 2,
  t: "Product Designer",
  co: "DesignHub",
  loc: "Chicago",
  type: "Full-time",
  m: 91,
  pay: "$85k - $110k",
  lvl: "Medium",
  ic: "user",
  skills: ["Wireframing", "Research"],
  sch: "Full Schedule Fit",
  d: "Own the end-to-end design of core product features, from discovery to polished handoff.",
  req: ["2+ years product design", "Strong portfolio", "Figma proficiency"]
}, {
  id: 3,
  t: "Interaction Designer",
  co: "Growth Co",
  loc: "Remote",
  type: "Part-time",
  m: 88,
  pay: "$45k - $60k",
  lvl: "Medium",
  ic: "user",
  skills: ["Interaction Design", "User Flows"],
  sch: "Full Schedule Fit",
  d: "Design micro-interactions and motion patterns for a growing consumer app.",
  req: ["Prototyping experience", "Portfolio required", "Motion basics"]
}, {
  id: 4,
  t: "Interaction Designer",
  co: "Innovotech",
  loc: "San Francisco",
  type: "Full-time",
  m: 72,
  pay: "$100k - $130k",
  lvl: "High",
  ic: "user",
  skills: ["User Flows", "Prototyping"],
  sch: "Partial Schedule Fit: Check Thu/Fri",
  d: "Shape interaction models for enterprise tools used by thousands of teams.",
  req: ["4+ years experience", "Systems thinking", "Portfolio required"]
}, {
  id: 5,
  t: "Sr. UI/UX Designer",
  co: "Bytiris",
  loc: "New York",
  type: "Full-time",
  m: 65,
  pay: "$110k - $150k",
  lvl: "High",
  ic: "brief",
  skills: ["Figma", "User Flows", "Prototyping"],
  sch: "Partial Schedule Fit: Check Mon/Wed",
  d: "Lead design for a flagship analytics product.",
  req: ["5+ years experience", "Leadership experience", "Portfolio required"]
}, {
  id: 6,
  t: "UX Researcher",
  co: "Bytiris",
  loc: "Remote",
  type: "Part-time",
  m: 58,
  pay: "$50k - $70k",
  lvl: "Medium",
  ic: "search",
  skills: ["User Research", "Surveys"],
  sch: "Partial Schedule Fit: Check Thu/Fri",
  d: "Plan and run usability studies and synthesize findings for product teams.",
  req: ["Research methods", "Clear writing", "Portfolio required"]
}, {
  id: 7,
  t: "Full Stack Developer",
  co: "CodeCrafters",
  loc: "New York",
  type: "Full-time",
  m: 44,
  pay: "$100k - $140k",
  lvl: "High",
  ic: "code",
  skills: ["React", "Node"],
  sch: "Partial Schedule Fit: Check Tue/Thu",
  d: "Build and ship features across our React and Node stack.",
  req: ["3+ years full stack", "React + Node", "Git workflow"]
}, {
  id: 8,
  t: "Product Manager",
  co: "Innosphere",
  loc: "San Francisco",
  type: "Full-time",
  m: 32,
  pay: "$120k - $160k",
  lvl: "High",
  ic: "brief",
  skills: ["Roadmaps", "Skills"],
  sch: "Partial Schedule Fit: Check Thu/Fri",
  d: "Define roadmap and priorities with design and engineering leads.",
  req: ["4+ years PM", "Analytics", "Stakeholder skills"]
}, {
  id: 9,
  t: "Digital Marketing Assistant",
  co: "BrightLeaf",
  loc: "Remote",
  type: "Part-time",
  m: 61,
  pay: "$35k - $50k",
  lvl: "Low",
  ic: "search",
  skills: ["Social Media", "Analytics"],
  sch: "Full Schedule Fit",
  d: "Support campaigns, schedule posts and report weekly results.",
  req: ["Strong writing", "Basic analytics", "Flexible evenings"]
}, {
  id: 10,
  t: "Industry Insights Analyst",
  co: "MarketLens",
  loc: "Chicago",
  type: "Part-time",
  m: 54,
  pay: "$40k - $55k",
  lvl: "Low",
  ic: "search",
  skills: ["Research", "Surveys"],
  sch: "Partial Schedule Fit: Check Mon/Tue",
  d: "Track hiring trends and turn them into short weekly briefs.",
  req: ["Research methods", "Clear writing", "Spreadsheet skills"]
}, {
  id: 11,
  t: "Visual Designer",
  co: "Pixelhouse",
  loc: "New York",
  type: "Full-time",
  m: 79,
  pay: "$80k - $105k",
  lvl: "Medium",
  ic: "user",
  skills: ["Figma", "Branding"],
  sch: "Full Schedule Fit",
  d: "Create brand and campaign visuals across web and social.",
  req: ["2+ years design", "Figma proficiency", "Portfolio required"]
}, {
  id: 12,
  t: "Frontend Developer",
  co: "Northwind",
  loc: "Remote",
  type: "Full-time",
  m: 68,
  pay: "$95k - $125k",
  lvl: "Medium",
  ic: "code",
  skills: ["React", "Prototyping"],
  sch: "Partial Schedule Fit: Check Wed/Fri",
  d: "Turn designs into fast, accessible React interfaces.",
  req: ["2+ years React", "CSS fluency", "Git workflow"]
}];
const APPS = [["Sr. UI/UX Designer", "TechCorp", "(Yesterday)", "Submitted", "send", 1], ["Interaction Designer", "Gronote", "5 days ago", "In Review", "clock", 0], ["UX Researcher", "Bytris", "2 days ago", "Received", "ok", 0], ["Product Manager", "Innosphere", "10 days ago", "Interviews", "cal", 0], ["Full Stack Developer", "CodeCrafters", "(Today)", "Submitted", "send", 1]];
const statusLabel = {
  Submitted: "Submitted",
  "In Review": "In Review",
  Received: "Application Received",
  Interviews: "Interview Scheduled"
};
const Logo = ({
  onClick
}) => /*#__PURE__*/React.createElement("button", {
  onClick: onClick,
  className: "flex items-center gap-2 logo text-2xl font-bold",
  "aria-label": "JOB-FILTER.COM home"
}, "JOB-FILTER.COM", /*#__PURE__*/React.createElement(I, {
  n: "search",
  s: 26,
  c: "text-[var(--accent)]"
}));
const Toggle = ({
  on,
  set,
  label
}) => /*#__PURE__*/React.createElement("button", {
  role: "switch",
  "aria-checked": on,
  "aria-label": label,
  onClick: () => set(!on),
  className: "w-11 h-6 rounded-full relative border-[1.5px] border-[var(--line)]",
  style: {
    background: on ? "var(--accent)" : "var(--chip)"
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "absolute top-[2px] w-4 h-4 rounded-full bg-white transition-all",
  style: {
    left: on ? "22px" : "3px"
  }
}));
const StarRow = () => /*#__PURE__*/React.createElement("span", {
  className: "flex"
}, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("svg", {
  key: i,
  className: "shrink-0",
  width: "13",
  height: "13",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("polygon", {
  points: "12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3"
}))));
const Stars = ({
  m
}) => /*#__PURE__*/React.createElement("span", {
  className: "relative inline-flex",
  style: {
    color: "var(--line)"
  }
}, /*#__PURE__*/React.createElement(StarRow, null), /*#__PURE__*/React.createElement("span", {
  className: "absolute inset-y-0 left-0 overflow-hidden",
  style: {
    width: m + "%",
    color: "#e8a317"
  }
}, /*#__PURE__*/React.createElement(StarRow, null)));
const MY = ["ux/ui design", "wireframing", "prototyping", "figma", "user research", "interaction design"];
function explain(j) {
  const hits = j.skills.filter(s => MY.some(p => p.includes(s.toLowerCase()) || s.toLowerCase().includes(p))),
    miss = j.skills.filter(s => !hits.includes(s));
  return [[hits.length > 0, "Skills: your profile covers " + (hits.length ? hits.join(", ") : "none of the required skills") + " (" + hits.length + " of " + j.skills.length + ")." + (miss.length ? " Missing: " + miss.join(", ") + "." : "")], [/design|ux|ui|research/i.test(j.t), "Role: \u201c" + j.t + "\u201d " + (/design|ux|ui|research/i.test(j.t) ? "fits your UX/UI design experience." : "is outside your UX/UI background.")], [j.sch.startsWith("Full"), j.sch.startsWith("Full") ? "Schedule: the hours fit your availability (Mon\u2013Fri, 4pm\u20139pm)." : "Schedule: partial fit. Check " + j.sch.split("Check ")[1] + ", which may clash with your classes."], [j.loc === "Remote" || j.loc === "New York", j.loc === "Remote" ? "Location: remote, so no commute around your classes." : j.loc === "New York" ? "Location: New York matches your profile location." : "Location: " + j.loc + " is outside your profile location (New York, NY)."], [j.lvl !== "High", j.lvl === "High" ? "Experience: asks for senior-level experience, above what your profile shows." : "Experience: " + j.lvl.toLowerCase() + "-level fits your background."]];
}
const burstPts = Array.from({
  length: 32
}, (_, i) => {
  const a = i * Math.PI / 16,
    r = i % 2 ? 39 : 50;
  return (50 + r * Math.sin(a)).toFixed(1) + "," + (50 - r * Math.cos(a)).toFixed(1);
}).join(" ");
const Burst = ({
  m
}) => /*#__PURE__*/React.createElement("span", {
  className: "relative inline-flex items-center justify-center shrink-0",
  style: {
    width: 48,
    height: 48
  }
}, /*#__PURE__*/React.createElement("svg", {
  className: "absolute inset-0",
  viewBox: "0 0 100 100",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("polygon", {
  points: burstPts,
  fill: m >= 80 ? "#1a8f4c" : m >= 50 ? "#c96a00" : "#d62828"
})), /*#__PURE__*/React.createElement("span", {
  className: "relative text-white font-bold text-[.82rem] leading-none"
}, m, "%"));
function Badge({
  m
}) {
  const [open, setOpen] = useState(false),
    [right, setRight] = useState(false),
    ref = React.useRef(null),
    j = JOBS.find(x => x.m === m),
    good = m >= 80;
  React.useEffect(() => {
    if (!open) return;
    const h = e => {
      if (e.type === "keydown" ? e.key === "Escape" : ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    document.addEventListener("keydown", h);
    return () => {
      document.removeEventListener("mousedown", h);
      document.removeEventListener("keydown", h);
    };
  }, [open]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: "relative inline-block align-middle " + (open ? "z-30" : "")
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      if (!open && ref.current) setRight(ref.current.getBoundingClientRect().left + 300 > window.innerWidth);
      setOpen(!open);
    },
    "aria-expanded": open,
    "aria-label": m + "% match. Show why",
    title: "Why this match?",
    className: "inline-flex items-center gap-2 rounded-full"
  }, /*#__PURE__*/React.createElement(Burst, {
    m: m
  }), /*#__PURE__*/React.createElement(Stars, {
    m: m
  })), open && j && /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-label": "Why this match",
    className: "card absolute top-full mt-2 z-30 w-72 max-w-[78vw] p-3 text-left text-sm font-normal shadow-xl " + (right ? "right-0" : "left-0"),
    style: {
      color: "var(--fg)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    className: "text-base"
  }, "Why ", m, "%?"), /*#__PURE__*/React.createElement("ul", {
    className: "mt-2 space-y-2"
  }, explain(j).map(([ok, t], i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement(I, {
    n: ok ? "ok" : "clock",
    s: 16,
    c: "shrink-0 mt-0.5"
  }), /*#__PURE__*/React.createElement("span", null, t)))), /*#__PURE__*/React.createElement("p", {
    className: "mut mt-3"
  }, "Full matches add more to the score than partial ones.")));
}
function Modal({
  job,
  onClose,
  onApply,
  onSave,
  saved,
  user
}) {
  React.useEffect(() => {
    const h = e => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4",
    style: {
      background: "rgba(10,14,20,.6)"
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    className: "card max-w-lg w-full p-6 max-h-full overflow-auto",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-start"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-semibold"
  }, "JOB DETAILS"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(I, {
    n: "x"
  }))), /*#__PURE__*/React.createElement("h3", {
    className: "text-3xl font-semibold mt-1"
  }, job.t, " at ", job.co), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-2 my-4 text-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, job.loc), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, job.type), user && /*#__PURE__*/React.createElement(Badge, {
    m: job.m
  }), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, job.pay)), /*#__PURE__*/React.createElement("h4", {
    className: "font-semibold"
  }, "Job Description"), /*#__PURE__*/React.createElement("p", {
    className: "mb-3"
  }, job.d), /*#__PURE__*/React.createElement("h4", {
    className: "font-semibold"
  }, "Requirements"), /*#__PURE__*/React.createElement("ul", {
    className: "mb-4"
  }, job.req.map(r => /*#__PURE__*/React.createElement("li", {
    key: r,
    className: "flex gap-2 items-center"
  }, /*#__PURE__*/React.createElement(I, {
    n: "ok",
    s: 16,
    c: "text-[var(--accent)]"
  }), r))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-y",
    autoFocus: true,
    onClick: onApply
  }, "APPLY NOW"))));
}
function Home({
  go,
  openJob,
  user
}) {
  const [q, setQ] = useState(""),
    [l, setL] = useState(""),
    [res, setRes] = useState(null),
    [n, setN] = useState(3);
  const find = e => {
    e && e.preventDefault();
    const k = q.toLowerCase(),
      lc = l.toLowerCase();
    const toks = k.split(/[\s/,]+/).filter(Boolean);
    const hit = j => !toks.length || toks.some(t => (j.t + " " + j.co + " " + j.skills.join(" ")).toLowerCase().includes(t));
    const lw = j => lc && j.loc.toLowerCase().includes(lc) ? 1 : 0;
    const r = JOBS.filter(hit).sort((a, b) => lw(b) - lw(a) || b.m - a.m);
    setN(3);
    setRes(r.length ? r : JOBS.slice().sort((a, b) => b.m - a.m));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen"
  }, /*#__PURE__*/React.createElement("header", {
    className: "bar flex items-center justify-between px-5 py-3"
  }, /*#__PURE__*/React.createElement(Logo, {
    onClick: () => setRes(null)
  }), /*#__PURE__*/React.createElement("nav", {
    className: "flex gap-2"
  }, user ? /*#__PURE__*/React.createElement("button", {
    className: "btn-o",
    onClick: () => go("app")
  }, "Dashboard") : /*#__PURE__*/React.createElement("button", {
    className: "btn-o",
    onClick: () => go("signin")
  }, "Sign In"), /*#__PURE__*/React.createElement("button", {
    className: "btn-o",
    onClick: () => go("about")
  }, "About"), /*#__PURE__*/React.createElement("button", {
    className: "btn-o",
    onClick: () => go("help")
  }, "Help"))), /*#__PURE__*/React.createElement("main", {
    className: "max-w-2xl mx-auto px-4 pt-14 sm:pt-20 pb-16 text-center"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-4xl sm:text-6xl font-semibold text-balance leading-[1.05]"
  }, "YOUR ALL-IN-ONE JOB SEARCH HUB"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg mt-3 mb-10"
  }, "Filter. Match. Apply. Simple as that!"), /*#__PURE__*/React.createElement("form", {
    onSubmit: find,
    className: "card flex flex-wrap items-stretch overflow-hidden text-left shadow-lg",
    style: {
      borderColor: "var(--accent)",
      borderWidth: 2
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "flex items-center gap-2 px-3 flex-1 min-w-[10rem]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Job title"), /*#__PURE__*/React.createElement("input", {
    className: "w-full py-3 bg-transparent outline-none",
    placeholder: "Job Title, Keywords...",
    value: q,
    onChange: e => setQ(e.target.value)
  }), /*#__PURE__*/React.createElement(I, {
    n: "search",
    s: 18,
    c: "mut"
  })), /*#__PURE__*/React.createElement("label", {
    className: "flex items-center gap-2 px-3 flex-1 min-w-[9rem] border-l border-[var(--line)]"
  }, /*#__PURE__*/React.createElement(I, {
    n: "pin",
    s: 18,
    c: "mut"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Location"), /*#__PURE__*/React.createElement("input", {
    className: "w-full py-3 bg-transparent outline-none",
    placeholder: "Location...",
    value: l,
    onChange: e => setL(e.target.value)
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn-y m-1.5"
  }, "FIND MATCHED JOBS")), !res ? /*#__PURE__*/React.createElement("div", {
    className: "mt-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex p-6 card"
  }, /*#__PURE__*/React.createElement(I, {
    n: "search",
    s: 56,
    c: "text-[var(--accent)]"
  })), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-lg font-medium"
  }, "Find the right jobs with the click of a button!"), /*#__PURE__*/React.createElement("p", {
    className: "mut"
  }, "Matches will appear here")) : /*#__PURE__*/React.createElement("section", {
    className: "mt-6 text-left"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-semibold mb-2"
  }, "MATCHED JOBS (", res.length, ")"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, res.slice(0, n).map(j => /*#__PURE__*/React.createElement("div", {
    key: j.id,
    className: "card p-4 flex items-center justify-between gap-3 transition hover:shadow-md"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 flex-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xl font-semibold"
  }, j.t), user ? /*#__PURE__*/React.createElement(Badge, {
    m: j.m
  }) : /*#__PURE__*/React.createElement("button", {
    className: "lnk text-sm",
    onClick: () => go("signin")
  }, "Sign in to see your match")), /*#__PURE__*/React.createElement("div", {
    className: "mut text-sm"
  }, j.co), /*#__PURE__*/React.createElement("div", {
    className: "text-sm"
  }, j.loc, j.loc === "Chicago" ? " (Hybrid)" : "", " • ", j.type)), /*#__PURE__*/React.createElement("button", {
    className: "btn-o",
    onClick: () => openJob(j)
  }, "View")))), n < res.length && /*#__PURE__*/React.createElement("div", {
    className: "text-center mt-4"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-o",
    onClick: () => setN(n + 3)
  }, "Load More")))));
}
function Shell({
  children,
  children2,
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-4xl mx-auto px-4 pt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement(Logo, {
    onClick: () => go("home")
  }))), /*#__PURE__*/React.createElement("main", {
    className: "px-4 py-6"
  }, children));
}
function Auth({
  page,
  go,
  job,
  setUser,
  pendingJob
}) {
  const [email, setEmail] = useState(""),
    [pw, setPw] = useState(""),
    [rem, setRem] = useState(false),
    [err, setErr] = useState("");
  const [re, setRe] = useState("support@job-filter.com"),
    [nm, setNm] = useState(""),
    [p2, setP2] = useState("");
  React.useEffect(() => {
    setErr("");
  }, [page]);
  const target = job ? `${job.t} position at ${job.co}` : "the position";
  const back = /*#__PURE__*/React.createElement("button", {
    className: "mt-5 flex items-center gap-1 mx-auto",
    onClick: () => go("home")
  }, /*#__PURE__*/React.createElement(I, {
    n: "back",
    s: 16
  }), " Go Back to Matches");
  const box = "card max-w-sm mx-auto p-5 ";
  if (page === "signin") return /*#__PURE__*/React.createElement(Shell, {
    go: go
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-4xl font-semibold"
  }, "SIGN IN TO YOUR ACCOUNT"), /*#__PURE__*/React.createElement("p", {
    className: "mb-4"
  }, "You’re one step away! Please sign in to apply for the ", target, "."), /*#__PURE__*/React.createElement("form", {
    className: box + "text-left",
    onSubmit: e => {
      e.preventDefault();
      if (!email || !pw) return setErr("Enter your email and password.");
      setUser(true);
      go("app");
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-center text-xl font-semibold mb-2"
  }, "SIGN IN"), /*#__PURE__*/React.createElement("label", {
    className: "block"
  }, "Email Address", /*#__PURE__*/React.createElement("input", {
    className: "inp",
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value)
  })), /*#__PURE__*/React.createElement("label", {
    className: "block mt-2"
  }, "Password", /*#__PURE__*/React.createElement("input", {
    className: "inp",
    type: "password",
    value: pw,
    onChange: e => setPw(e.target.value)
  })), err && /*#__PURE__*/React.createElement("p", {
    role: "alert",
    className: "text-sm mt-1",
    style: {
      color: "#d64545"
    }
  }, err), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-sm my-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "flex gap-1 items-center"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: rem,
    onChange: e => setRem(e.target.checked)
  }), "Remember me"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lnk",
    onClick: () => go("reset")
  }, "Forgot password?")), /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn px-8",
    type: "submit"
  }, "SIGN IN")), /*#__PURE__*/React.createElement("p", {
    className: "text-center text-sm mt-3"
  }, "Don’t have an account? ", /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lnk",
    onClick: () => go("create")
  }, "Create an account"))), back));
  if (page === "reset") return /*#__PURE__*/React.createElement(Shell, {
    go: go
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-4xl font-semibold"
  }, "RESET YOUR PASSWORD"), /*#__PURE__*/React.createElement("p", {
    className: "mb-4"
  }, "Enter your email address and we will send you a link to reset your password."), /*#__PURE__*/React.createElement("form", {
    className: box + "text-left",
    onSubmit: e => {
      e.preventDefault();
      go("resetSent", {
        re
      });
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "block mut"
  }, "Email Address", /*#__PURE__*/React.createElement("input", {
    className: "inp",
    type: "email",
    value: re,
    onChange: e => setRe(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-center mt-5"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    type: "submit"
  }, "SEND RESET LINK"))), /*#__PURE__*/React.createElement("button", {
    className: "mt-5 flex items-center gap-1 mx-auto",
    onClick: () => go("signin")
  }, /*#__PURE__*/React.createElement(I, {
    n: "back",
    s: 16
  }), " Back to Sign In")));
  if (page === "resetSent") return /*#__PURE__*/React.createElement(Shell, {
    go: go
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-4xl font-semibold"
  }, "PASSWORD RESET LINK SENT!"), /*#__PURE__*/React.createElement("p", null, "A link to reset your password has been sent to ", re, "."), /*#__PURE__*/React.createElement("p", {
    className: "mb-4"
  }, "Please check your inbox and spam folder. If you don’t receive it shortly, you can try again."), /*#__PURE__*/React.createElement("div", {
    className: box + "py-12"
  }, "Reset link sent to:", /*#__PURE__*/React.createElement("br", null), re), /*#__PURE__*/React.createElement("button", {
    className: "mt-5 flex items-center gap-1 mx-auto",
    onClick: () => go("signin")
  }, /*#__PURE__*/React.createElement(I, {
    n: "back",
    s: 16
  }), " Back to Sign In")));
  if (page === "create") return /*#__PURE__*/React.createElement(Shell, {
    go: go
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-4xl font-semibold"
  }, "CREATE YOUR ACCOUNT"), /*#__PURE__*/React.createElement("p", {
    className: "mb-4"
  }, "Create your account to apply for the ", target, "."), /*#__PURE__*/React.createElement("form", {
    className: box + "text-left",
    onSubmit: e => {
      e.preventDefault();
      if (!nm || !email) return setErr("Enter your name and email.");
      if (pw.length < 6 || pw !== p2) return setErr("Passwords must match and be at least 6 characters.");
      setErr("");
      go("success");
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-center text-xl font-semibold mb-2"
  }, "CREATE AN ACCOUNT"), /*#__PURE__*/React.createElement("label", {
    className: "block"
  }, "Full Name", /*#__PURE__*/React.createElement("input", {
    className: "inp",
    value: nm,
    onChange: e => setNm(e.target.value)
  })), /*#__PURE__*/React.createElement("label", {
    className: "block mt-2"
  }, "Email Address", /*#__PURE__*/React.createElement("input", {
    className: "inp",
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value)
  })), /*#__PURE__*/React.createElement("label", {
    className: "block mt-2"
  }, "Password", /*#__PURE__*/React.createElement("input", {
    className: "inp",
    type: "password",
    value: pw,
    onChange: e => setPw(e.target.value)
  })), /*#__PURE__*/React.createElement("label", {
    className: "block mt-2"
  }, "Confirm Password", /*#__PURE__*/React.createElement("input", {
    className: "inp",
    type: "password",
    value: p2,
    onChange: e => setP2(e.target.value)
  })), err && /*#__PURE__*/React.createElement("p", {
    role: "alert",
    className: "text-sm mt-2",
    style: {
      color: "#d64545"
    }
  }, err), /*#__PURE__*/React.createElement("button", {
    className: "btn w-full mt-4",
    type: "submit"
  }, "CREATE ACCOUNT"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm mt-3"
  }, "Already have an account? ", /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lnk",
    onClick: () => go("signin")
  }, "Sign In"))), back));
  return /*#__PURE__*/React.createElement(Shell, {
    go: go
  }, /*#__PURE__*/React.createElement("div", {
    className: box + "text-center"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-5xl font-bold"
  }, "SUCCESS!"), /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-semibold"
  }, "Account Created!"), /*#__PURE__*/React.createElement("div", {
    className: "my-5 inline-flex text-[var(--accent)]"
  }, /*#__PURE__*/React.createElement(I, {
    n: "ok",
    s: 72
  })), /*#__PURE__*/React.createElement("p", null, "Verification link sent to:", /*#__PURE__*/React.createElement("br", null), email || "user@example.com"), /*#__PURE__*/React.createElement("p", {
    className: "mt-3"
  }, "Next: Complete your ", job ? `${job.t} application profile at ${job.co}` : "application profile", "."), /*#__PURE__*/React.createElement("button", {
    className: "btn mt-4",
    onClick: () => {
      setUser(true);
      go("app");
    }
  }, "BEGIN APPLICATION"), back));
}
function Info({
  page,
  go,
  user
}) {
  const [q, setQ] = useState(""),
    [open, setOpen] = useState(null);
  const FAQ = [["How does the match % work?", "Our algorithm compares your profile, skills, and availability with job requirements to calculate how closely you match."], ["Do I need an account to apply?", "You can search as a guest, but you must create a free account to apply or save jobs."], ["Can I filter by my class/study schedule?", "Yes! Go to ‘Settings’ to upload or scan your schedule and we will filter for roles that fit."]];
  const TOP = [["gear", "Managing Account Settings", "Open Settings from your dashboard menu to change your email, password, notifications and privacy options."], ["file", "Resumes & Uploading CVs", "Go to My Profile and choose Upload New next to Resume & CV. PDF files work best."], ["lock", "Resetting Your Password", "Use Forgot password? on the Sign In page and we will email you a reset link."]];
  const k = q.toLowerCase(),
    faq = FAQ.filter(f => (f[0] + f[1]).toLowerCase().includes(k)),
    top = TOP.filter(t => (t[1] + t[2]).toLowerCase().includes(k));
  const nav = (p, l) => /*#__PURE__*/React.createElement("button", {
    className: "btn-o " + (page === p ? "!bg-[var(--chip)] !border-[var(--accent)]" : ""),
    onClick: () => go(p),
    "aria-current": page === p ? "page" : undefined
  }, l);
  const back = /*#__PURE__*/React.createElement("button", {
    className: "mt-8 flex items-center gap-1 mx-auto",
    onClick: () => go(user ? "app" : "home")
  }, /*#__PURE__*/React.createElement(I, {
    n: "back",
    s: 16
  }), " ", user ? "Go back to Dashboard" : "Go back to Homepage");
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen"
  }, /*#__PURE__*/React.createElement("header", {
    className: "bar flex items-center justify-between px-5 py-3"
  }, /*#__PURE__*/React.createElement(Logo, {
    onClick: () => go(user ? "app" : "home")
  }), /*#__PURE__*/React.createElement("nav", {
    className: "flex gap-2"
  }, !user && /*#__PURE__*/React.createElement("button", {
    className: "btn-o",
    onClick: () => go("signin")
  }, "Sign In"), nav("about", "About"), nav("help", "Help"))), page === "about" ? /*#__PURE__*/React.createElement("main", {
    className: "max-w-3xl mx-auto px-4 pt-12 text-center"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-5xl font-semibold"
  }, "ABOUT JOB-FILTER.COM"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg mb-8"
  }, "We make job hunting simple, transparent, and fit for your life!"), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 gap-8 text-left"
  }, /*#__PURE__*/React.createElement("section", {
    className: "flex gap-3"
  }, /*#__PURE__*/React.createElement(I, {
    n: "file",
    s: 44,
    c: "shrink-0 text-[var(--accent)]"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-semibold"
  }, "OUR MISSION"), /*#__PURE__*/React.createElement("p", null, "We believe finding the right job shouldn’t be a full-time job. We created Job-Filter to simplify your search by matching your skills, schedule, and preferences directly to local & remote roles."))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-semibold"
  }, "HOW IT WORKS"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-3 mt-2"
  }, [["search", "FILTER", "Customize by schedule, experience & salary."], ["ok", "MATCH", "Our smart algorithm finds your instant match %."], ["send", "APPLY", "Submit in one click & track your progress easily!"]].map(([ic, t, d]) => /*#__PURE__*/React.createElement("li", {
    key: t,
    className: "flex gap-3"
  }, /*#__PURE__*/React.createElement(I, {
    n: ic,
    s: 22,
    c: "shrink-0 text-[var(--accent)] mt-0.5"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, t, ":"), " ", d)))))), back) : /*#__PURE__*/React.createElement("main", {
    className: "max-w-3xl mx-auto px-4 pt-12 text-center"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-5xl font-semibold"
  }, "HELP & SUPPORT"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg mb-5"
  }, "How can we help you today?"), /*#__PURE__*/React.createElement("label", {
    className: "card flex items-center gap-2 px-3 max-w-lg mx-auto",
    style: {
      borderColor: "var(--accent)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Search help"), /*#__PURE__*/React.createElement("input", {
    className: "w-full py-2.5 bg-transparent outline-none",
    placeholder: "Search for answers, topics, or FAQs...",
    value: q,
    onChange: e => setQ(e.target.value)
  }), /*#__PURE__*/React.createElement(I, {
    n: "search",
    s: 18,
    c: "mut"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-[3fr_2fr] gap-4 mt-6 text-left"
  }, /*#__PURE__*/React.createElement("section", {
    className: "card p-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-semibold mb-2"
  }, "FREQUENTLY ASKED QUESTIONS (FAQs)"), faq.map(f => /*#__PURE__*/React.createElement("div", {
    key: f[0],
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, "Q:"), " ", /*#__PURE__*/React.createElement("b", null, f[0])), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, "A:"), " ", f[1]))), !faq.length && /*#__PURE__*/React.createElement("p", {
    className: "mut"
  }, "No FAQs match that search. Try a different keyword.")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("section", {
    className: "card p-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-semibold mb-2"
  }, "POPULAR HELP TOPICS"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2"
  }, top.map(t => /*#__PURE__*/React.createElement("li", {
    key: t[1]
  }, /*#__PURE__*/React.createElement("button", {
    className: "flex items-center gap-2 lnk text-left",
    onClick: () => setOpen(open === t[1] ? null : t[1]),
    "aria-expanded": open === t[1]
  }, /*#__PURE__*/React.createElement(I, {
    n: t[0],
    s: 20
  }), t[1]), open === t[1] && /*#__PURE__*/React.createElement("p", {
    className: "text-sm ml-7 mt-1"
  }, t[2], t[1].startsWith("Resetting") && /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("button", {
    className: "lnk",
    onClick: () => go("reset")
  }, "Reset it now"))))), !top.length && /*#__PURE__*/React.createElement("li", {
    className: "mut"
  }, "No topics match that search."))), /*#__PURE__*/React.createElement("section", {
    className: "card p-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-semibold mb-2"
  }, "STILL NEED HELP?"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement(I, {
    n: "mail",
    s: 22,
    c: "shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, "Contact us anytime at ", /*#__PURE__*/React.createElement("a", {
    className: "lnk",
    href: "mailto:support@job-filter.com"
  }, "support@job-filter.com")))))), back));
}
const TABS = [["dash", "Dashboard"], ["matches", "Job Matches (12)"], ["apps", "My Applications"], ["profile", "My Profile"], ["settings", "Settings"]];
function AppShell({
  tab,
  setTab,
  go,
  out,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen"
  }, /*#__PURE__*/React.createElement("header", {
    className: "bar px-5 pt-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-3 flex-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement(Logo, {
    onClick: () => setTab("dash")
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setTab("profile"),
    className: "flex items-center gap-2 text-left",
    "aria-label": "Open my profile"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-10 h-10 rounded-full flex items-center justify-center",
    style: {
      background: "var(--chip)"
    }
  }, /*#__PURE__*/React.createElement(I, {
    n: "user"
  })), /*#__PURE__*/React.createElement("span", {
    className: "leading-tight text-sm"
  }, "Welcome,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, "Jane Doe!"))), /*#__PURE__*/React.createElement("button", {
    className: "btn-o text-sm",
    onClick: out
  }, "Sign out"))), /*#__PURE__*/React.createElement("nav", {
    className: "flex items-center gap-5 mt-2 overflow-x-auto",
    "aria-label": "Main"
  }, TABS.map(([k, v]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setTab(k),
    "aria-current": tab === k ? "page" : undefined,
    className: "py-2 whitespace-nowrap hover:text-[var(--accent)] " + (tab === k ? "tabon" : "")
  }, v)))), /*#__PURE__*/React.createElement("main", {
    className: "max-w-5xl mx-auto px-4 py-6"
  }, children), /*#__PURE__*/React.createElement("footer", {
    className: "max-w-5xl mx-auto px-4 pb-24 flex justify-center gap-5 text-sm text-[var(--accent)]"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go("help")
  }, "Help"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setTab("settings")
  }, "Settings"), /*#__PURE__*/React.createElement("button", {
    onClick: () => alert("Job Filter Academy (prototype)")
  }, "Job Filter Academy")));
}
function Dash({
  setTab,
  total = 28
}) {
  const S = [["TOTAL APPLICATIONS", total, "send", "apps"], ["INTERVIEWS PENDING", 3, "cal", "apps"], ["NEW JOB MATCHES", 12, "search", "matches"], ["SAVED JOBS", 15, "star", "matches"]];
  const act = [["send", "Application Submitted for Sr. UI/UX Designer", "(Yesterday)"], ["star", "Saved Job UX Researcher at Bytris", "(2 days ago)"], ["bell", "New Job Alert: Full Stack Developer added to list", "(Today)"]];
  const ins = ["Tech Layoffs Slow Down and Hiring Stabilizes", "The Role of AI in UX Design and Job Searching", "5 Top Cities for Job Growth in 2024"];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl font-bold mb-3"
  }, "DASHBOARD OVERVIEW"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-4 gap-3"
  }, S.map(([l, n, ic, t]) => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setTab(t),
    className: "card p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm mut leading-tight"
  }, l), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mt-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-4xl font-bold"
  }, n), /*#__PURE__*/React.createElement(I, {
    n: ic,
    s: 28
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 gap-3 mt-3"
  }, /*#__PURE__*/React.createElement("section", {
    className: "card p-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-semibold text-lg mb-2"
  }, "RECENT ACTIVITY"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-3"
  }, act.map(([ic, t, d]) => /*#__PURE__*/React.createElement("li", {
    key: t,
    className: "flex gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-8 h-8 shrink-0 rounded flex items-center justify-center",
    style: {
      background: "var(--chip)"
    }
  }, /*#__PURE__*/React.createElement(I, {
    n: ic,
    s: 16
  })), /*#__PURE__*/React.createElement("span", null, t, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "text-sm mut"
  }, d)))))), /*#__PURE__*/React.createElement("section", {
    className: "card p-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-semibold text-lg mb-2"
  }, "TOP INDUSTRY INSIGHTS"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-3"
  }, ins.map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    className: "flex gap-3 items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-10 h-10 shrink-0 rounded",
    style: {
      background: "var(--chip)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "text-left hover:underline",
    onClick: () => alert(t)
  }, t)))))));
}
function Matches({
  openJob
}) {
  const [f, setF] = useState({
      loc: [],
      type: [],
      lvl: [],
      sal: []
    }),
    [sort, setSort] = useState("m"),
    [pp, setPp] = useState(6),
    [pg, setPg] = useState(1);
  const tog = (k, v) => {
    setPg(1);
    setF(s => ({
      ...s,
      [k]: s[k].includes(v) ? s[k].filter(x => x !== v) : [...s[k], v]
    }));
  };
  const salMax = j => parseInt(j.pay.split("- $")[1]);
  const sal = {
    "Under $100k": j => salMax(j) < 100,
    "$100k - $150k": j => salMax(j) >= 100 && salMax(j) <= 150,
    "$150k+": j => salMax(j) > 150
  };
  const list = useMemo(() => JOBS.filter(j => (!f.loc.length || f.loc.includes(j.loc)) && (!f.type.length || f.type.includes(j.type)) && (!f.lvl.length || f.lvl.includes(j.lvl)) && (!f.sal.length || f.sal.some(s => sal[s](j)))).sort((a, b) => sort === "m" ? b.m - a.m : a.t.localeCompare(b.t)), [f, sort]);
  const pages = Math.max(1, Math.ceil(list.length / pp)),
    shown = list.slice((pg - 1) * pp, pg * pp);
  const G = [["Location", "loc", ["Remote", "San Francisco", "New York", "Chicago"]], ["Job Type", "type", ["Full-time", "Part-time"]], ["Experience Level", "lvl", ["High", "Medium", "Low"]], ["Salary Range", "sal", Object.keys(sal)]];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-2 mb-3"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl font-bold"
  }, "Job Matches (", list.length, ")"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-3 text-sm"
  }, /*#__PURE__*/React.createElement("label", null, "Sort by: ", /*#__PURE__*/React.createElement("select", {
    className: "inp !w-auto !py-1",
    value: sort,
    onChange: e => setSort(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "m"
  }, "Best Match"), /*#__PURE__*/React.createElement("option", {
    value: "t"
  }, "Title"))), /*#__PURE__*/React.createElement("label", null, "Items per page ", /*#__PURE__*/React.createElement("select", {
    className: "inp !w-auto !py-1",
    value: pp,
    onChange: e => {
      setPp(+e.target.value);
      setPg(1);
    }
  }, /*#__PURE__*/React.createElement("option", null, "4"), /*#__PURE__*/React.createElement("option", null, "6"), /*#__PURE__*/React.createElement("option", null, "8"))))), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-[13rem_minmax(0,1fr)] gap-4"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "card p-4 h-fit md:sticky md:top-36"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-2"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-semibold"
  }, "Filters"), /*#__PURE__*/React.createElement("button", {
    className: "lnk text-sm",
    onClick: () => {
      setF({
        loc: [],
        type: [],
        lvl: [],
        sal: []
      });
      setPg(1);
    }
  }, "Clear all")), G.map(([t, k, o]) => /*#__PURE__*/React.createElement("fieldset", {
    key: k,
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("legend", {
    className: "font-semibold mb-1"
  }, t), o.map(v => /*#__PURE__*/React.createElement("label", {
    key: v,
    className: "flex gap-2 text-sm py-0.5 cursor-pointer"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "accent-[var(--accent)]",
    checked: f[k].includes(v),
    onChange: () => tog(k, v)
  }), v))))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 gap-3"
  }, shown.map(j => /*#__PURE__*/React.createElement("article", {
    key: j.id,
    className: "card p-4 flex flex-col gap-1.5 transition hover:shadow-md min-w-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-12 h-12 rounded shrink-0 flex items-center justify-center",
    style: {
      background: "var(--fg)",
      color: "var(--bg)"
    }
  }, /*#__PURE__*/React.createElement(I, {
    n: j.ic,
    s: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-semibold leading-tight"
  }, j.t), /*#__PURE__*/React.createElement("div", {
    className: "text-sm"
  }, j.co, " • ", j.loc))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-x-3 gap-y-1 text-sm"
  }, /*#__PURE__*/React.createElement(Badge, {
    m: j.m
  }), /*#__PURE__*/React.createElement("span", {
    className: "mut"
  }, j.sch)), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1"
  }, j.skills.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    className: "chip"
  }, s))), /*#__PURE__*/React.createElement("button", {
    className: "btn self-end mt-1",
    onClick: () => openJob(j)
  }, "View & Apply"))), !shown.length && /*#__PURE__*/React.createElement("p", {
    className: "mut"
  }, "No matches for those filters. Clear a filter to see more jobs.")), /*#__PURE__*/React.createElement("nav", {
    className: "flex justify-end gap-1 mt-3",
    "aria-label": "Pages"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-o",
    onClick: () => setPg(Math.max(1, pg - 1))
  }, "<"), Array.from({
    length: pages
  }, (_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setPg(i + 1),
    className: "btn-o " + (pg === i + 1 ? "!bg-[var(--accent)] !text-[var(--accent-fg)]" : "")
  }, i + 1)), /*#__PURE__*/React.createElement("button", {
    className: "btn-o",
    onClick: () => setPg(Math.min(pages, pg + 1))
  }, ">")))));
}
function Apps({
  openJob,
  apps
}) {
  const [t, setT] = useState("All"),
    [w, setW] = useState({});
  const rows = apps.filter(a => t === "All" || a[3] === t);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl font-bold mb-3"
  }, "MY APPLICATIONS"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 mb-3"
  }, ["All", "Submitted", "In Review", "Interviews", "Hired", "Rejected"].map(x => /*#__PURE__*/React.createElement("button", {
    key: x,
    onClick: () => setT(x),
    className: "px-3 py-1 rounded " + (t === x ? "font-semibold" : ""),
    style: {
      background: t === x ? "var(--chip)" : "transparent"
    }
  }, x))), /*#__PURE__*/React.createElement("div", {
    className: "card overflow-x-auto"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-left"
  }, /*#__PURE__*/React.createElement("thead", {
    style: {
      background: "var(--chip)"
    }
  }, /*#__PURE__*/React.createElement("tr", null, ["Job Title", "Company", "Date Applied", "Status", "Actions"].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    className: "p-2"
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map(a => /*#__PURE__*/React.createElement("tr", {
    key: a[0] + a[1],
    className: "border-t border-[var(--line)] hover:bg-[var(--chip)]"
  }, /*#__PURE__*/React.createElement("td", {
    className: "p-2"
  }, a[0]), /*#__PURE__*/React.createElement("td", {
    className: "p-2"
  }, a[1]), /*#__PURE__*/React.createElement("td", {
    className: "p-2"
  }, a[2]), /*#__PURE__*/React.createElement("td", {
    className: "p-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(I, {
    n: w[a[0]] ? "x" : a[4],
    s: 18
  }), w[a[0]] ? "Withdrawn" : statusLabel[a[3]])), /*#__PURE__*/React.createElement("td", {
    className: "p-2"
  }, /*#__PURE__*/React.createElement("button", {
    className: "lnk block",
    onClick: () => openJob(JOBS.find(j => j.co === a[1] || j.t === a[0]) || JOBS[0])
  }, "View Details"), a[5] && !w[a[0]] ? /*#__PURE__*/React.createElement("button", {
    className: "lnk block",
    onClick: () => confirm("Withdraw this application?") && setW({
      ...w,
      [a[0]]: 1
    })
  }, "Withdraw") : null))), !rows.length && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "5",
    className: "p-4 mut"
  }, "No applications here yet. Apply from Job Matches to start tracking."))))), /*#__PURE__*/React.createElement("nav", {
    className: "flex justify-center gap-2 mt-3 text-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mut"
  }, "Prev"), /*#__PURE__*/React.createElement("b", {
    className: "px-2 rounded",
    style: {
      background: "var(--chip)"
    }
  }, "1"), /*#__PURE__*/React.createElement("span", null, "2"), /*#__PURE__*/React.createElement("span", null, "3"), /*#__PURE__*/React.createElement("span", null, "Next")));
}
function Profile() {
  const [ed, setEd] = useState(null);
  const [p, setP] = useState({
    name: "Jane Doe",
    email: "jane.doe@email.com",
    phone: "(555) 123-4567",
    loc: "New York, NY"
  });
  const [sk, setSk] = useState("UX/UI Design, Wireframing, Prototyping, Figma, User Research, Interaction Design");
  const Row = ({
    t,
    children,
    k,
    edit
  }) => /*#__PURE__*/React.createElement("section", {
    className: "flex gap-4 py-4 border-t border-[var(--line)]"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "w-32 shrink-0 text-lg font-semibold leading-tight"
  }, t), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, children), edit && /*#__PURE__*/React.createElement("button", {
    className: "lnk self-start",
    onClick: () => setEd(ed === k ? null : k)
  }, ed === k ? "Done" : edit));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl font-bold mb-3"
  }, "MY PROFILE"), /*#__PURE__*/React.createElement(Row, {
    t: "PERSONAL INFORMATION",
    k: "p",
    edit: "Edit"
  }, ed === "p" ? /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 gap-2"
  }, [["name", "Name"], ["email", "Email"], ["phone", "Phone"], ["loc", "Location"]].map(([k, l]) => /*#__PURE__*/React.createElement("label", {
    key: k,
    className: "text-sm"
  }, l, /*#__PURE__*/React.createElement("input", {
    className: "inp",
    value: p[k],
    onChange: e => setP({
      ...p,
      [k]: e.target.value
    })
  })))) : /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 gap-1"
  }, /*#__PURE__*/React.createElement("div", null, "Name: ", p.name), /*#__PURE__*/React.createElement("div", null, "Phone: ", p.phone), /*#__PURE__*/React.createElement("div", null, "Email: ", p.email), /*#__PURE__*/React.createElement("div", null, "Location: ", p.loc))), /*#__PURE__*/React.createElement(Row, {
    t: "RESUME & CV",
    k: "r",
    edit: "Upload New"
  }, /*#__PURE__*/React.createElement("button", {
    className: "lnk",
    onClick: () => alert("janedoe_cv.pdf (prototype download)")
  }, "janedoe_cv.pdf"), " (View/Download)", ed === "r" && /*#__PURE__*/React.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "file",
    "aria-label": "Upload resume"
  }))), /*#__PURE__*/React.createElement(Row, {
    t: "WORK EXPERIENCE"
  }, /*#__PURE__*/React.createElement("div", null, "Sr. UX Designer at TechCorp (2021-Present)"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc ml-5"
  }, /*#__PURE__*/React.createElement("li", null, "Sr. UX Designer at Coderafters"), /*#__PURE__*/React.createElement("li", null, "Product Manager at Full Stack Developer"))), /*#__PURE__*/React.createElement(Row, {
    t: "SKILLS",
    k: "s",
    edit: "Edit"
  }, ed === "s" ? /*#__PURE__*/React.createElement("input", {
    className: "inp",
    "aria-label": "Skills",
    value: sk,
    onChange: e => setSk(e.target.value)
  }) : /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, sk.split(",").map(s => s.trim()).filter(Boolean).map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    className: "chip"
  }, s)))));
}
function Settings({
  go,
  setUser
}) {
  const [n1, setN1] = useState(true),
    [n2, setN2] = useState(true),
    [deact, setDeact] = useState(false),
    [vis, setVis] = useState(true),
    [av, setAv] = useState("Mon–Fri, 4pm–9pm"),
    [eav, setEav] = useState(false),
    [file, setFile] = useState("");
  const Sec = ({
    n,
    t,
    children
  }) => /*#__PURE__*/React.createElement("section", {
    className: "py-4 border-t border-[var(--line)]"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-semibold mb-2"
  }, n, ". ", t), children);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl font-bold mb-3"
  }, "SETTINGS"), /*#__PURE__*/React.createElement(Sec, {
    n: "1",
    t: "ACCOUNT SETTINGS"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, "Email: jane.doe@email.com", /*#__PURE__*/React.createElement("button", {
    className: "lnk",
    onClick: () => alert("Edit email (prototype)")
  }, "Edit")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, "Password: ••••••••", /*#__PURE__*/React.createElement("button", {
    className: "lnk",
    onClick: () => go("reset")
  }, "Edit")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, "Account deactivated", /*#__PURE__*/React.createElement(Toggle, {
    on: deact,
    set: setDeact,
    label: "Account deactivated"
  })))), /*#__PURE__*/React.createElement(Sec, {
    n: "2",
    t: "NOTIFICATION PREFERENCES"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, "New job alerts", /*#__PURE__*/React.createElement(Toggle, {
    on: n1,
    set: setN1,
    label: "New job alerts"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, "Application Status Updates", /*#__PURE__*/React.createElement(Toggle, {
    on: n2,
    set: setN2,
    label: "Application status updates"
  })))), /*#__PURE__*/React.createElement(Sec, {
    n: "3",
    t: "STUDY LOAD & SCHEDULE SETTINGS"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-4 items-start"
  }, /*#__PURE__*/React.createElement("label", {
    className: "card p-3 cursor-pointer flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(I, {
    n: "up"
  }), /*#__PURE__*/React.createElement("span", {
    className: "lnk"
  }, "Update PDF/Scan Study Schedule"), /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: ".pdf,image/*",
    className: "sr-only",
    onChange: e => setFile(e.target.files[0]?.name || "")
  })), file && /*#__PURE__*/React.createElement("span", {
    className: "self-center text-sm"
  }, "Uploaded: ", file), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-w-[12rem]"
  }, eav ? /*#__PURE__*/React.createElement("input", {
    className: "inp",
    "aria-label": "Availability",
    value: av,
    onChange: e => setAv(e.target.value)
  }) : /*#__PURE__*/React.createElement("div", {
    className: "card p-2"
  }, av), /*#__PURE__*/React.createElement("button", {
    className: "lnk mt-1",
    onClick: () => setEav(!eav)
  }, eav ? "Save Availability Times" : "Edit Availability Times")))), /*#__PURE__*/React.createElement(Sec, {
    n: "4",
    t: "PRIVACY & DATA"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-6 items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-3"
  }, "Profile Visibility", /*#__PURE__*/React.createElement(Toggle, {
    on: vis,
    set: setVis,
    label: "Profile visibility"
  })), /*#__PURE__*/React.createElement("button", {
    className: "lnk",
    onClick: () => alert("Preparing your data download (prototype)")
  }, "Download My Data"), /*#__PURE__*/React.createElement("button", {
    className: "lnk",
    onClick: () => {
      if (confirm("Delete account?")) {
        setUser(false);
        go("home");
      }
    }
  }, "Delete Account"))));
}
function Chat({
  setTab
}) {
  const [open, setOpen] = useState(false),
    [txt, setTxt] = useState(""),
    [typing, setTyping] = useState(false);
  const [msgs, setMsgs] = useState([{
    b: 1,
    t: "Hi Jane! 👋 I can help you update your schedule PDF or edit your availability settings. What would you like to do?"
  }]);
  const end = React.useRef(null);
  React.useEffect(() => {
    end.current && end.current.scrollIntoView({
      block: "end"
    });
  }, [msgs, typing, open]);
  React.useEffect(() => {
    if (!open) return;
    const h = e => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open]);
  const reply = s => {
    const k = s.toLowerCase();
    if (/^other/.test(k)) return {
      t: "Sure. Ask me about job matches, your applications, your profile or your account."
    };
    if (/availab/.test(k)) return {
      t: "You can change the times you can work under Study Load & Schedule Settings. Choose Edit Availability Times.",
      a: ["Open availability settings", "settings"]
    };
    if (/schedule|class|timetable|pdf|scan/.test(k)) return {
      t: "Open Settings and find Study Load & Schedule Settings. Upload a PDF or scan of your study schedule there, and I’ll filter for roles that fit around your classes.",
      a: ["Open schedule settings", "settings"]
    };
    if (/notif|alert|email/.test(k)) return {
      t: "Notification Preferences in Settings let you turn new job alerts and application status updates on or off.",
      a: ["Open notification settings", "settings"]
    };
    if (/match|%/.test(k)) return {
      t: "Your match % compares your profile, skills and availability with each job’s requirements. Partial schedule fits show which days to check.",
      a: ["See job matches", "matches"]
    };
    if (/appl|status|interview|withdraw/.test(k)) return {
      t: "My Applications lists every job you’ve applied to, with its status. You can withdraw a submitted application there.",
      a: ["Open My Applications", "apps"]
    };
    if (/resume|cv|profile|skill|experience/.test(k)) return {
      t: "My Profile is where you upload a new resume and edit your details, work experience and skills.",
      a: ["Open My Profile", "profile"]
    };
    if (/password|account|delete|privacy|data|visib/.test(k)) return {
      t: "Account, privacy and data options (password, profile visibility, download or delete your data) are under Settings.",
      a: ["Open Settings", "settings"]
    };
    return {
      t: "I can help with your schedule, notifications, job matches, applications and profile. Try one of the quick replies below."
    };
  };
  const send = s => {
    s = s.trim();
    if (!s) return;
    setMsgs(m => [...m, {
      t: s
    }]);
    setTxt("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs(m => [...m, {
        b: 1,
        ...reply(s)
      }]);
    }, 600);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, open && /*#__PURE__*/React.createElement("section", {
    role: "dialog",
    "aria-label": "JOB-FILTER AI chat",
    className: "card fixed z-40 right-4 flex flex-col w-[22rem] max-w-[calc(100vw-2rem)] h-[30rem] max-h-[calc(100vh-7rem)] shadow-xl",
    style: {
      bottom: "calc(4.75rem + env(safe-area-inset-bottom,0px))"
    }
  }, /*#__PURE__*/React.createElement("header", {
    className: "flex items-center gap-2 px-3 py-2 border-b border-[var(--line)]"
  }, /*#__PURE__*/React.createElement(I, {
    n: "bot",
    s: 22,
    c: "text-[var(--accent)]"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-semibold flex-1"
  }, "JOB-FILTER AI"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(false),
    "aria-label": "Close chat"
  }, /*#__PURE__*/React.createElement(I, {
    n: "x",
    s: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-y-auto p-3 space-y-2",
    "aria-live": "polite"
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: m.b ? "flex" : "flex justify-end"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[85%] rounded-xl px-3 py-2 text-[.95rem]",
    style: m.b ? {
      background: "var(--chip)"
    } : {
      background: "var(--accent)",
      color: "var(--accent-fg)"
    }
  }, m.t, m.a && /*#__PURE__*/React.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-o text-sm",
    onClick: () => {
      setTab(m.a[1]);
      setOpen(false);
    }
  }, m.a[0]))))), typing && /*#__PURE__*/React.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl px-3 py-2 mut",
    style: {
      background: "var(--chip)"
    }
  }, "Typing…")), /*#__PURE__*/React.createElement("div", {
    ref: end
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 px-3 pb-2"
  }, ["Help with schedule", "Change notification settings", "Other..."].map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: "btn-o !rounded-full text-sm",
    onClick: () => send(c)
  }, c))), /*#__PURE__*/React.createElement("form", {
    className: "flex items-center gap-2 p-3 border-t border-[var(--line)]",
    onSubmit: e => {
      e.preventDefault();
      send(txt);
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Message"), /*#__PURE__*/React.createElement("input", {
    className: "inp",
    placeholder: "Ask me anything...",
    value: txt,
    onChange: e => setTxt(e.target.value)
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Voice input",
    onClick: () => alert("Voice input isn’t available in this prototype.")
  }, /*#__PURE__*/React.createElement(I, {
    n: "mic",
    s: 20
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn !px-3",
    "aria-label": "Send message"
  }, /*#__PURE__*/React.createElement(I, {
    n: "send",
    s: 18
  })))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    "aria-expanded": open,
    "aria-label": open ? "Close AI chat" : "Open AI chat",
    className: "fixed z-40 right-4 flex items-center gap-1.5 rounded-full px-4 py-3 font-bold shadow-lg",
    style: {
      bottom: "calc(1rem + env(safe-area-inset-bottom,0px))",
      background: "var(--accent)",
      color: "var(--accent-fg)"
    }
  }, "AI", /*#__PURE__*/React.createElement(I, {
    n: "star",
    s: 16
  })));
}
window.alert = m => window.dispatchEvent(new CustomEvent("toast", {
  detail: m
}));
function Toast() {
  const [m, setM] = useState("");
  React.useEffect(() => {
    let t;
    const h = e => {
      setM(e.detail);
      clearTimeout(t);
      t = setTimeout(() => setM(""), 3200);
    };
    window.addEventListener("toast", h);
    return () => window.removeEventListener("toast", h);
  }, []);
  return m ? /*#__PURE__*/React.createElement("div", {
    role: "status",
    className: "fixed left-1/2 -translate-x-1/2 bottom-6 z-[60] px-4 py-2 rounded-lg shadow-lg max-w-[90vw]",
    style: {
      background: "var(--fg)",
      color: "var(--bg)"
    }
  }, m) : null;
}
function App() {
  const [screen, setScreen] = useState("home"),
    [tab, setTab] = useState("dash"),
    [job, setJob] = useState(null),
    [pending, setPending] = useState(null),
    [user, setUserRaw] = useState(false),
    [saved, setSaved] = useState({}),
    [apps, setApps] = useState(APPS);
  const addApp = j => setApps(a => a.some(x => x[0] === j.t && x[1] === j.co) ? a : [[j.t, j.co, "(Today)", "Submitted", "send", 1], ...a]);
  const setUser = v => {
    setUserRaw(v);
    if (v && pending) {
      addApp(pending);
      setTab("apps");
      alert("Application to " + pending.t + " at " + pending.co + " submitted.");
      setPending(null);
    }
  };
  const go = (s, x) => {
    setScreen(s);
    window.scrollTo(0, 0);
    if (s === "app") setTab(t => t);
  };
  const apply = () => {
    const j = job;
    setJob(null);
    if (user) {
      if (apps.some(x => x[0] === j.t && x[1] === j.co)) alert("You’ve already applied to this job.");else {
        addApp(j);
        alert("Application to " + j.t + " at " + j.co + " submitted.");
      }
      setScreen("app");
      setTab("apps");
    } else {
      setPending(j);
      go("signin");
    }
  };
  const modal = job && /*#__PURE__*/React.createElement(Modal, {
    job: job,
    user: user,
    onClose: () => setJob(null),
    onApply: apply,
    saved: saved[job.id],
    onSave: () => {
      setSaved({
        ...saved,
        [job.id]: 1
      });
      alert("Saved “" + job.t + "” to your list.");
    }
  });
  if (screen === "app") return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AppShell, {
    tab: tab,
    setTab: setTab,
    go: go,
    out: () => {
      setUser(false);
      setTab("dash");
      go("home");
      alert("You’ve been signed out.");
    }
  }, tab === "dash" && /*#__PURE__*/React.createElement(Dash, {
    setTab: setTab,
    total: 28 + apps.length - APPS.length
  }), tab === "matches" && /*#__PURE__*/React.createElement(Matches, {
    openJob: setJob
  }), tab === "apps" && /*#__PURE__*/React.createElement(Apps, {
    apps: apps,
    openJob: setJob
  }), tab === "profile" && /*#__PURE__*/React.createElement(Profile, null), tab === "settings" && /*#__PURE__*/React.createElement(Settings, {
    go: go,
    setUser: setUser
  })), /*#__PURE__*/React.createElement(Chat, {
    setTab: setTab
  }), modal);
  if (screen === "about" || screen === "help") return /*#__PURE__*/React.createElement(Info, {
    page: screen,
    go: go,
    user: user
  });
  if (screen === "home") return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Home, {
    go: go,
    openJob: setJob,
    user: user
  }), modal);
  return /*#__PURE__*/React.createElement(Auth, {
    page: screen,
    go: go,
    job: pending,
    setUser: setUser
  });
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(App, null), /*#__PURE__*/React.createElement(Toast, null)));
