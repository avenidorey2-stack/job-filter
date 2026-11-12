import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
const {
  useState,
  useMemo
} = React;
const P = {
  search: /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV("circle", {
      cx: "11",
      cy: "11",
      r: "8"
    }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
      d: "m21 21-4.3-4.3"
    }, void 0, false)]
  }, void 0, true),
  pin: /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV("path", {
      d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
    }, void 0, false), /*#__PURE__*/_jsxDEV("circle", {
      cx: "12",
      cy: "10",
      r: "3"
    }, void 0, false)]
  }, void 0, true),
  send: /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV("path", {
      d: "m22 2-7 20-4-9-9-4Z"
    }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
      d: "M22 2 11 13"
    }, void 0, false)]
  }, void 0, true),
  clock: /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
      d: "M12 6v6l4 2"
    }, void 0, false)]
  }, void 0, true),
  ok: /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
      d: "m9 12 2 2 4-4"
    }, void 0, false)]
  }, void 0, true),
  cal: /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "18",
      rx: "2"
    }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
      d: "M16 2v4M8 2v4M3 10h18"
    }, void 0, false)]
  }, void 0, true),
  star: /*#__PURE__*/_jsxDEV("polygon", {
    points: "12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3"
  }, void 0, false),
  bell: /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV("path", {
      d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
    }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
      d: "M10.3 21a2 2 0 0 0 3.4 0"
    }, void 0, false)]
  }, void 0, true),
  gear: /*#__PURE__*/_jsxDEV("path", {
    d: "M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"
  }, void 0, false),
  file: /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV("path", {
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"
    }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
      d: "M14 2v6h6"
    }, void 0, false)]
  }, void 0, true),
  x: /*#__PURE__*/_jsxDEV("path", {
    d: "M18 6 6 18M6 6l12 12"
  }, void 0, false),
  user: /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV("circle", {
      cx: "12",
      cy: "8",
      r: "4"
    }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
      d: "M4 21a8 8 0 0 1 16 0"
    }, void 0, false)]
  }, void 0, true),
  brief: /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV("rect", {
      x: "2",
      y: "7",
      width: "20",
      height: "14",
      rx: "2"
    }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
      d: "M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"
    }, void 0, false)]
  }, void 0, true),
  code: /*#__PURE__*/_jsxDEV(_Fragment, {
    children: /*#__PURE__*/_jsxDEV("path", {
      d: "m16 18 6-6-6-6M8 6l-6 6 6 6"
    }, void 0, false)
  }, void 0, false),
  back: /*#__PURE__*/_jsxDEV("path", {
    d: "M19 12H5m7-7-7 7 7 7"
  }, void 0, false),
  mic: /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV("rect", {
      x: "9",
      y: "2",
      width: "6",
      height: "12",
      rx: "3"
    }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
      d: "M5 10a7 7 0 0 0 14 0M12 17v5"
    }, void 0, false)]
  }, void 0, true),
  bot: /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV("rect", {
      x: "4",
      y: "8",
      width: "16",
      height: "12",
      rx: "3"
    }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
      d: "M12 8V4M9 14h.01M15 14h.01"
    }, void 0, false)]
  }, void 0, true),
  lock: /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV("rect", {
      x: "3",
      y: "11",
      width: "18",
      height: "11",
      rx: "2"
    }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
      d: "M7 11V7a5 5 0 0 1 10 0v4"
    }, void 0, false)]
  }, void 0, true),
  mail: /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV("rect", {
      x: "2",
      y: "4",
      width: "20",
      height: "16",
      rx: "2"
    }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
      d: "m22 7-10 7L2 7"
    }, void 0, false)]
  }, void 0, true),
  up: /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV("path", {
      d: "M12 15V3m-5 5 5-5 5 5"
    }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
      d: "M4 17v3h16v-3"
    }, void 0, false)]
  }, void 0, true)
};
const I = ({
  n,
  s = 20,
  c = ""
}) => /*#__PURE__*/_jsxDEV("svg", {
  className: c,
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  children: P[n]
}, void 0, false);
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
}) => /*#__PURE__*/_jsxDEV("button", {
  onClick: onClick,
  className: "flex items-center gap-2 logo text-2xl font-bold",
  "aria-label": "JOB-FILTER.COM home",
  children: ["JOB-FILTER.COM", /*#__PURE__*/_jsxDEV(I, {
    n: "search",
    s: 26,
    c: "text-[var(--accent)]"
  }, void 0, false)]
}, void 0, true);
const Toggle = ({
  on,
  set,
  label
}) => /*#__PURE__*/_jsxDEV("button", {
  role: "switch",
  "aria-checked": on,
  "aria-label": label,
  onClick: () => set(!on),
  className: "w-11 h-6 rounded-full relative border-[1.5px] border-[var(--line)]",
  style: {
    background: on ? "var(--accent)" : "var(--chip)"
  },
  children: /*#__PURE__*/_jsxDEV("span", {
    className: "absolute top-[2px] w-4 h-4 rounded-full bg-white transition-all",
    style: {
      left: on ? "22px" : "3px"
    }
  }, void 0, false)
}, void 0, false);
const StarRow = () => /*#__PURE__*/_jsxDEV("span", {
  className: "flex",
  children: [0, 1, 2, 3, 4].map(i => /*#__PURE__*/_jsxDEV("svg", {
    className: "shrink-0",
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    children: /*#__PURE__*/_jsxDEV("polygon", {
      points: "12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3"
    }, void 0, false)
  }, i, false))
}, void 0, false);
const Stars = ({
  m
}) => /*#__PURE__*/_jsxDEV("span", {
  className: "relative inline-flex",
  style: {
    color: "var(--line)"
  },
  children: [/*#__PURE__*/_jsxDEV(StarRow, {}, void 0, false), /*#__PURE__*/_jsxDEV("span", {
    className: "absolute inset-y-0 left-0 overflow-hidden",
    style: {
      width: m + "%",
      color: "#e8a317"
    },
    children: /*#__PURE__*/_jsxDEV(StarRow, {}, void 0, false)
  }, void 0, false)]
}, void 0, true);
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
}) => /*#__PURE__*/_jsxDEV("span", {
  className: "relative inline-flex items-center justify-center shrink-0",
  style: {
    width: 48,
    height: 48
  },
  children: [/*#__PURE__*/_jsxDEV("svg", {
    className: "absolute inset-0",
    viewBox: "0 0 100 100",
    "aria-hidden": "true",
    children: /*#__PURE__*/_jsxDEV("polygon", {
      points: burstPts,
      fill: m >= 80 ? "#1a8f4c" : m >= 50 ? "#c96a00" : "#d62828"
    }, void 0, false)
  }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
    className: "relative text-white font-bold text-[.82rem] leading-none",
    children: [m, "%"]
  }, void 0, true)]
}, void 0, true);
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
  return /*#__PURE__*/_jsxDEV("span", {
    ref: ref,
    className: "relative inline-block align-middle " + (open ? "z-30" : ""),
    children: [/*#__PURE__*/_jsxDEV("button", {
      type: "button",
      onClick: () => {
        if (!open && ref.current) setRight(ref.current.getBoundingClientRect().left + 300 > window.innerWidth);
        setOpen(!open);
      },
      "aria-expanded": open,
      "aria-label": m + "% match. Show why",
      title: "Why this match?",
      className: "inline-flex items-center gap-2 rounded-full",
      children: [/*#__PURE__*/_jsxDEV(Burst, {
        m: m
      }, void 0, false), /*#__PURE__*/_jsxDEV(Stars, {
        m: m
      }, void 0, false)]
    }, void 0, true), open && j && /*#__PURE__*/_jsxDEV("div", {
      role: "dialog",
      "aria-label": "Why this match",
      className: "card absolute top-full mt-2 z-30 w-72 max-w-[78vw] p-3 text-left text-sm font-normal shadow-xl " + (right ? "right-0" : "left-0"),
      style: {
        color: "var(--fg)"
      },
      children: [/*#__PURE__*/_jsxDEV("b", {
        className: "text-base",
        children: ["Why ", m, "%?"]
      }, void 0, true), /*#__PURE__*/_jsxDEV("ul", {
        className: "mt-2 space-y-2",
        children: explain(j).map(([ok, t], i) => /*#__PURE__*/_jsxDEV("li", {
          className: "flex gap-2",
          children: [/*#__PURE__*/_jsxDEV(I, {
            n: ok ? "ok" : "clock",
            s: 16,
            c: "shrink-0 mt-0.5"
          }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
            children: t
          }, void 0, false)]
        }, i, true))
      }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
        className: "mut mt-3",
        children: "Full matches add more to the score than partial ones."
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
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
  return /*#__PURE__*/_jsxDEV("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4",
    style: {
      background: "rgba(10,14,20,.6)"
    },
    onClick: onClose,
    children: /*#__PURE__*/_jsxDEV("div", {
      role: "dialog",
      "aria-modal": "true",
      className: "card max-w-lg w-full p-6 max-h-full overflow-auto",
      onClick: e => e.stopPropagation(),
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "flex justify-between items-start",
        children: [/*#__PURE__*/_jsxDEV("h2", {
          className: "text-lg font-semibold",
          children: "JOB DETAILS"
        }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
          onClick: onClose,
          "aria-label": "Close",
          children: /*#__PURE__*/_jsxDEV(I, {
            n: "x"
          }, void 0, false)
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("h3", {
        className: "text-3xl font-semibold mt-1",
        children: [job.t, " at ", job.co]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "flex flex-wrap items-center gap-2 my-4 text-sm",
        children: [/*#__PURE__*/_jsxDEV("span", {
          className: "chip",
          children: job.loc
        }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
          className: "chip",
          children: job.type
        }, void 0, false), user && /*#__PURE__*/_jsxDEV(Badge, {
          m: job.m
        }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
          className: "chip",
          children: job.pay
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("h4", {
        className: "font-semibold",
        children: "Job Description"
      }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
        className: "mb-3",
        children: job.d
      }, void 0, false), /*#__PURE__*/_jsxDEV("h4", {
        className: "font-semibold",
        children: "Requirements"
      }, void 0, false), /*#__PURE__*/_jsxDEV("ul", {
        className: "mb-4",
        children: job.req.map(r => /*#__PURE__*/_jsxDEV("li", {
          className: "flex gap-2 items-center",
          children: [/*#__PURE__*/_jsxDEV(I, {
            n: "ok",
            s: 16,
            c: "text-[var(--accent)]"
          }, void 0, false), r]
        }, r, true))
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "flex gap-3",
        children: /*#__PURE__*/_jsxDEV("button", {
          className: "btn-y",
          autoFocus: true,
          onClick: onApply,
          children: "APPLY NOW"
        }, void 0, false)
      }, void 0, false)]
    }, void 0, true)
  }, void 0, false);
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
  return /*#__PURE__*/_jsxDEV("div", {
    className: "min-h-screen",
    children: [/*#__PURE__*/_jsxDEV("header", {
      className: "bar flex items-center justify-between px-5 py-3",
      children: [/*#__PURE__*/_jsxDEV(Logo, {
        onClick: () => setRes(null)
      }, void 0, false), /*#__PURE__*/_jsxDEV("nav", {
        className: "flex gap-2",
        children: [user ? /*#__PURE__*/_jsxDEV("button", {
          className: "btn-o",
          onClick: () => go("app"),
          children: "Dashboard"
        }, void 0, false) : /*#__PURE__*/_jsxDEV("button", {
          className: "btn-o",
          onClick: () => go("signin"),
          children: "Sign In"
        }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
          className: "btn-o",
          onClick: () => go("about"),
          children: "About"
        }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
          className: "btn-o",
          onClick: () => go("help"),
          children: "Help"
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("main", {
      className: "max-w-2xl mx-auto px-4 pt-14 sm:pt-20 pb-16 text-center",
      children: [/*#__PURE__*/_jsxDEV("h1", {
        className: "text-4xl sm:text-6xl font-semibold text-balance leading-[1.05]",
        children: "YOUR ALL-IN-ONE JOB SEARCH HUB"
      }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
        className: "text-lg mt-3 mb-10",
        children: "Filter. Match. Apply. Simple as that!"
      }, void 0, false), /*#__PURE__*/_jsxDEV("form", {
        onSubmit: find,
        className: "card flex flex-wrap items-stretch overflow-hidden text-left shadow-lg",
        style: {
          borderColor: "var(--accent)",
          borderWidth: 2
        },
        children: [/*#__PURE__*/_jsxDEV("label", {
          className: "flex items-center gap-2 px-3 flex-1 min-w-[10rem]",
          children: [/*#__PURE__*/_jsxDEV("span", {
            className: "sr-only",
            children: "Job title"
          }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
            className: "w-full py-3 bg-transparent outline-none",
            placeholder: "Job Title, Keywords...",
            value: q,
            onChange: e => setQ(e.target.value)
          }, void 0, false), /*#__PURE__*/_jsxDEV(I, {
            n: "search",
            s: 18,
            c: "mut"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("label", {
          className: "flex items-center gap-2 px-3 flex-1 min-w-[9rem] border-l border-[var(--line)]",
          children: [/*#__PURE__*/_jsxDEV(I, {
            n: "pin",
            s: 18,
            c: "mut"
          }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
            className: "sr-only",
            children: "Location"
          }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
            className: "w-full py-3 bg-transparent outline-none",
            placeholder: "Location...",
            value: l,
            onChange: e => setL(e.target.value)
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
          type: "submit",
          className: "btn-y m-1.5",
          children: "FIND MATCHED JOBS"
        }, void 0, false)]
      }, void 0, true), !res ? /*#__PURE__*/_jsxDEV("div", {
        className: "mt-12",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "inline-flex p-6 card",
          children: /*#__PURE__*/_jsxDEV(I, {
            n: "search",
            s: 56,
            c: "text-[var(--accent)]"
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "mt-4 text-lg font-medium",
          children: "Find the right jobs with the click of a button!"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "mut",
          children: "Matches will appear here"
        }, void 0, false)]
      }, void 0, true) : /*#__PURE__*/_jsxDEV("section", {
        className: "mt-6 text-left",
        children: [/*#__PURE__*/_jsxDEV("h2", {
          className: "text-xl font-semibold mb-2",
          children: ["MATCHED JOBS (", res.length, ")"]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "space-y-3",
          children: res.slice(0, n).map(j => /*#__PURE__*/_jsxDEV("div", {
            className: "card p-4 flex items-center justify-between gap-3 transition hover:shadow-md",
            children: [/*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "flex items-center gap-2 flex-wrap",
                children: [/*#__PURE__*/_jsxDEV("span", {
                  className: "text-xl font-semibold",
                  children: j.t
                }, void 0, false), user ? /*#__PURE__*/_jsxDEV(Badge, {
                  m: j.m
                }, void 0, false) : /*#__PURE__*/_jsxDEV("button", {
                  className: "lnk text-sm",
                  onClick: () => go("signin"),
                  children: "Sign in to see your match"
                }, void 0, false)]
              }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                className: "mut text-sm",
                children: j.co
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                className: "text-sm",
                children: [j.loc, j.loc === "Chicago" ? " (Hybrid)" : "", " • ", j.type]
              }, void 0, true)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
              className: "btn-o",
              onClick: () => openJob(j),
              children: "View"
            }, void 0, false)]
          }, j.id, true))
        }, void 0, false), n < res.length && /*#__PURE__*/_jsxDEV("div", {
          className: "text-center mt-4",
          children: /*#__PURE__*/_jsxDEV("button", {
            className: "btn-o",
            onClick: () => setN(n + 3),
            children: "Load More"
          }, void 0, false)
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true);
}
function Shell({
  children,
  children2,
  go
}) {
  return /*#__PURE__*/_jsxDEV("div", {
    className: "min-h-screen",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "max-w-4xl mx-auto px-4 pt-4",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "flex items-center justify-between",
        children: /*#__PURE__*/_jsxDEV(Logo, {
          onClick: () => go("home")
        }, void 0, false)
      }, void 0, false)
    }, void 0, false), /*#__PURE__*/_jsxDEV("main", {
      className: "px-4 py-6",
      children: children
    }, void 0, false)]
  }, void 0, true);
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
  const back = /*#__PURE__*/_jsxDEV("button", {
    className: "mt-5 flex items-center gap-1 mx-auto",
    onClick: () => go("home"),
    children: [/*#__PURE__*/_jsxDEV(I, {
      n: "back",
      s: 16
    }, void 0, false), " Go Back to Matches"]
  }, void 0, true);
  const box = "card max-w-sm mx-auto p-5 ";
  if (page === "signin") return /*#__PURE__*/_jsxDEV(Shell, {
    go: go,
    children: /*#__PURE__*/_jsxDEV("div", {
      className: "text-center",
      children: [/*#__PURE__*/_jsxDEV("h1", {
        className: "text-4xl font-semibold",
        children: "SIGN IN TO YOUR ACCOUNT"
      }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
        className: "mb-4",
        children: ["You’re one step away! Please sign in to apply for the ", target, "."]
      }, void 0, true), /*#__PURE__*/_jsxDEV("form", {
        className: box + "text-left",
        onSubmit: e => {
          e.preventDefault();
          if (!email || !pw) return setErr("Enter your email and password.");
          setUser(true);
          go("app");
        },
        children: [/*#__PURE__*/_jsxDEV("h2", {
          className: "text-center text-xl font-semibold mb-2",
          children: "SIGN IN"
        }, void 0, false), /*#__PURE__*/_jsxDEV("label", {
          className: "block",
          children: ["Email Address", /*#__PURE__*/_jsxDEV("input", {
            className: "inp",
            type: "email",
            value: email,
            onChange: e => setEmail(e.target.value)
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("label", {
          className: "block mt-2",
          children: ["Password", /*#__PURE__*/_jsxDEV("input", {
            className: "inp",
            type: "password",
            value: pw,
            onChange: e => setPw(e.target.value)
          }, void 0, false)]
        }, void 0, true), err && /*#__PURE__*/_jsxDEV("p", {
          role: "alert",
          className: "text-sm mt-1",
          style: {
            color: "#d64545"
          },
          children: err
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "flex justify-between text-sm my-3",
          children: [/*#__PURE__*/_jsxDEV("label", {
            className: "flex gap-1 items-center",
            children: [/*#__PURE__*/_jsxDEV("input", {
              type: "checkbox",
              checked: rem,
              onChange: e => setRem(e.target.checked)
            }, void 0, false), "Remember me"]
          }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
            type: "button",
            className: "lnk",
            onClick: () => go("reset"),
            children: "Forgot password?"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "text-center",
          children: /*#__PURE__*/_jsxDEV("button", {
            className: "btn px-8",
            type: "submit",
            children: "SIGN IN"
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "text-center text-sm mt-3",
          children: ["Don’t have an account? ", /*#__PURE__*/_jsxDEV("button", {
            type: "button",
            className: "lnk",
            onClick: () => go("create"),
            children: "Create an account"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true), back]
    }, void 0, true)
  }, void 0, false);
  if (page === "reset") return /*#__PURE__*/_jsxDEV(Shell, {
    go: go,
    children: /*#__PURE__*/_jsxDEV("div", {
      className: "text-center",
      children: [/*#__PURE__*/_jsxDEV("h1", {
        className: "text-4xl font-semibold",
        children: "RESET YOUR PASSWORD"
      }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
        className: "mb-4",
        children: "Enter your email address and we will send you a link to reset your password."
      }, void 0, false), /*#__PURE__*/_jsxDEV("form", {
        className: box + "text-left",
        onSubmit: e => {
          e.preventDefault();
          go("resetSent", {
            re
          });
        },
        children: [/*#__PURE__*/_jsxDEV("label", {
          className: "block mut",
          children: ["Email Address", /*#__PURE__*/_jsxDEV("input", {
            className: "inp",
            type: "email",
            value: re,
            onChange: e => setRe(e.target.value)
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "text-center mt-5",
          children: /*#__PURE__*/_jsxDEV("button", {
            className: "btn",
            type: "submit",
            children: "SEND RESET LINK"
          }, void 0, false)
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
        className: "mt-5 flex items-center gap-1 mx-auto",
        onClick: () => go("signin"),
        children: [/*#__PURE__*/_jsxDEV(I, {
          n: "back",
          s: 16
        }, void 0, false), " Back to Sign In"]
      }, void 0, true)]
    }, void 0, true)
  }, void 0, false);
  if (page === "resetSent") return /*#__PURE__*/_jsxDEV(Shell, {
    go: go,
    children: /*#__PURE__*/_jsxDEV("div", {
      className: "text-center",
      children: [/*#__PURE__*/_jsxDEV("h1", {
        className: "text-4xl font-semibold",
        children: "PASSWORD RESET LINK SENT!"
      }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
        children: ["A link to reset your password has been sent to ", re, "."]
      }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
        className: "mb-4",
        children: "Please check your inbox and spam folder. If you don’t receive it shortly, you can try again."
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: box + "py-12",
        children: ["Reset link sent to:", /*#__PURE__*/_jsxDEV("br", {}, void 0, false), re]
      }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
        className: "mt-5 flex items-center gap-1 mx-auto",
        onClick: () => go("signin"),
        children: [/*#__PURE__*/_jsxDEV(I, {
          n: "back",
          s: 16
        }, void 0, false), " Back to Sign In"]
      }, void 0, true)]
    }, void 0, true)
  }, void 0, false);
  if (page === "create") return /*#__PURE__*/_jsxDEV(Shell, {
    go: go,
    children: /*#__PURE__*/_jsxDEV("div", {
      className: "text-center",
      children: [/*#__PURE__*/_jsxDEV("h1", {
        className: "text-4xl font-semibold",
        children: "CREATE YOUR ACCOUNT"
      }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
        className: "mb-4",
        children: ["Create your account to apply for the ", target, "."]
      }, void 0, true), /*#__PURE__*/_jsxDEV("form", {
        className: box + "text-left",
        onSubmit: e => {
          e.preventDefault();
          if (!nm || !email) return setErr("Enter your name and email.");
          if (pw.length < 6 || pw !== p2) return setErr("Passwords must match and be at least 6 characters.");
          setErr("");
          go("success");
        },
        children: [/*#__PURE__*/_jsxDEV("h2", {
          className: "text-center text-xl font-semibold mb-2",
          children: "CREATE AN ACCOUNT"
        }, void 0, false), /*#__PURE__*/_jsxDEV("label", {
          className: "block",
          children: ["Full Name", /*#__PURE__*/_jsxDEV("input", {
            className: "inp",
            value: nm,
            onChange: e => setNm(e.target.value)
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("label", {
          className: "block mt-2",
          children: ["Email Address", /*#__PURE__*/_jsxDEV("input", {
            className: "inp",
            type: "email",
            value: email,
            onChange: e => setEmail(e.target.value)
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("label", {
          className: "block mt-2",
          children: ["Password", /*#__PURE__*/_jsxDEV("input", {
            className: "inp",
            type: "password",
            value: pw,
            onChange: e => setPw(e.target.value)
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("label", {
          className: "block mt-2",
          children: ["Confirm Password", /*#__PURE__*/_jsxDEV("input", {
            className: "inp",
            type: "password",
            value: p2,
            onChange: e => setP2(e.target.value)
          }, void 0, false)]
        }, void 0, true), err && /*#__PURE__*/_jsxDEV("p", {
          role: "alert",
          className: "text-sm mt-2",
          style: {
            color: "#d64545"
          },
          children: err
        }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
          className: "btn w-full mt-4",
          type: "submit",
          children: "CREATE ACCOUNT"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "text-sm mt-3",
          children: ["Already have an account? ", /*#__PURE__*/_jsxDEV("button", {
            type: "button",
            className: "lnk",
            onClick: () => go("signin"),
            children: "Sign In"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true), back]
    }, void 0, true)
  }, void 0, false);
  return /*#__PURE__*/_jsxDEV(Shell, {
    go: go,
    children: /*#__PURE__*/_jsxDEV("div", {
      className: box + "text-center",
      children: [/*#__PURE__*/_jsxDEV("h1", {
        className: "text-5xl font-bold",
        children: "SUCCESS!"
      }, void 0, false), /*#__PURE__*/_jsxDEV("h2", {
        className: "text-2xl font-semibold",
        children: "Account Created!"
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "my-5 inline-flex text-[var(--accent)]",
        children: /*#__PURE__*/_jsxDEV(I, {
          n: "ok",
          s: 72
        }, void 0, false)
      }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
        children: ["Verification link sent to:", /*#__PURE__*/_jsxDEV("br", {}, void 0, false), email || "user@example.com"]
      }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
        className: "mt-3",
        children: ["Next: Complete your ", job ? `${job.t} application profile at ${job.co}` : "application profile", "."]
      }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
        className: "btn mt-4",
        onClick: () => {
          setUser(true);
          go("app");
        },
        children: "BEGIN APPLICATION"
      }, void 0, false), back]
    }, void 0, true)
  }, void 0, false);
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
  const nav = (p, l) => /*#__PURE__*/_jsxDEV("button", {
    className: "btn-o " + (page === p ? "!bg-[var(--chip)] !border-[var(--accent)]" : ""),
    onClick: () => go(p),
    "aria-current": page === p ? "page" : undefined,
    children: l
  }, void 0, false);
  const back = /*#__PURE__*/_jsxDEV("button", {
    className: "mt-8 flex items-center gap-1 mx-auto",
    onClick: () => go(user ? "app" : "home"),
    children: [/*#__PURE__*/_jsxDEV(I, {
      n: "back",
      s: 16
    }, void 0, false), " ", user ? "Go back to Dashboard" : "Go back to Homepage"]
  }, void 0, true);
  return /*#__PURE__*/_jsxDEV("div", {
    className: "min-h-screen",
    children: [/*#__PURE__*/_jsxDEV("header", {
      className: "bar flex items-center justify-between px-5 py-3",
      children: [/*#__PURE__*/_jsxDEV(Logo, {
        onClick: () => go(user ? "app" : "home")
      }, void 0, false), /*#__PURE__*/_jsxDEV("nav", {
        className: "flex gap-2",
        children: [!user && /*#__PURE__*/_jsxDEV("button", {
          className: "btn-o",
          onClick: () => go("signin"),
          children: "Sign In"
        }, void 0, false), nav("about", "About"), nav("help", "Help")]
      }, void 0, true)]
    }, void 0, true), page === "about" ? /*#__PURE__*/_jsxDEV("main", {
      className: "max-w-3xl mx-auto px-4 pt-12 text-center",
      children: [/*#__PURE__*/_jsxDEV("h1", {
        className: "text-5xl font-semibold",
        children: "ABOUT JOB-FILTER.COM"
      }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
        className: "text-lg mb-8",
        children: "We make job hunting simple, transparent, and fit for your life!"
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "grid md:grid-cols-2 gap-8 text-left",
        children: [/*#__PURE__*/_jsxDEV("section", {
          className: "flex gap-3",
          children: [/*#__PURE__*/_jsxDEV(I, {
            n: "file",
            s: 44,
            c: "shrink-0 text-[var(--accent)]"
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("h2", {
              className: "text-2xl font-semibold",
              children: "OUR MISSION"
            }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
              children: "We believe finding the right job shouldn’t be a full-time job. We created Job-Filter to simplify your search by matching your skills, schedule, and preferences directly to local & remote roles."
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("section", {
          children: [/*#__PURE__*/_jsxDEV("h2", {
            className: "text-2xl font-semibold",
            children: "HOW IT WORKS"
          }, void 0, false), /*#__PURE__*/_jsxDEV("ul", {
            className: "space-y-3 mt-2",
            children: [["search", "FILTER", "Customize by schedule, experience & salary."], ["ok", "MATCH", "Our smart algorithm finds your instant match %."], ["send", "APPLY", "Submit in one click & track your progress easily!"]].map(([ic, t, d]) => /*#__PURE__*/_jsxDEV("li", {
              className: "flex gap-3",
              children: [/*#__PURE__*/_jsxDEV(I, {
                n: ic,
                s: 22,
                c: "shrink-0 text-[var(--accent)] mt-0.5"
              }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                children: [/*#__PURE__*/_jsxDEV("b", {
                  children: [t, ":"]
                }, void 0, true), " ", d]
              }, void 0, true)]
            }, t, true))
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true), back]
    }, void 0, true) : /*#__PURE__*/_jsxDEV("main", {
      className: "max-w-3xl mx-auto px-4 pt-12 text-center",
      children: [/*#__PURE__*/_jsxDEV("h1", {
        className: "text-5xl font-semibold",
        children: "HELP & SUPPORT"
      }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
        className: "text-lg mb-5",
        children: "How can we help you today?"
      }, void 0, false), /*#__PURE__*/_jsxDEV("label", {
        className: "card flex items-center gap-2 px-3 max-w-lg mx-auto",
        style: {
          borderColor: "var(--accent)"
        },
        children: [/*#__PURE__*/_jsxDEV("span", {
          className: "sr-only",
          children: "Search help"
        }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
          className: "w-full py-2.5 bg-transparent outline-none",
          placeholder: "Search for answers, topics, or FAQs...",
          value: q,
          onChange: e => setQ(e.target.value)
        }, void 0, false), /*#__PURE__*/_jsxDEV(I, {
          n: "search",
          s: 18,
          c: "mut"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "grid md:grid-cols-[3fr_2fr] gap-4 mt-6 text-left",
        children: [/*#__PURE__*/_jsxDEV("section", {
          className: "card p-4",
          children: [/*#__PURE__*/_jsxDEV("h2", {
            className: "text-xl font-semibold mb-2",
            children: "FREQUENTLY ASKED QUESTIONS (FAQs)"
          }, void 0, false), faq.map(f => /*#__PURE__*/_jsxDEV("div", {
            className: "mb-3",
            children: [/*#__PURE__*/_jsxDEV("p", {
              children: [/*#__PURE__*/_jsxDEV("b", {
                children: "Q:"
              }, void 0, false), " ", /*#__PURE__*/_jsxDEV("b", {
                children: f[0]
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
              children: [/*#__PURE__*/_jsxDEV("b", {
                children: "A:"
              }, void 0, false), " ", f[1]]
            }, void 0, true)]
          }, f[0], true)), !faq.length && /*#__PURE__*/_jsxDEV("p", {
            className: "mut",
            children: "No FAQs match that search. Try a different keyword."
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "space-y-4",
          children: [/*#__PURE__*/_jsxDEV("section", {
            className: "card p-4",
            children: [/*#__PURE__*/_jsxDEV("h2", {
              className: "text-xl font-semibold mb-2",
              children: "POPULAR HELP TOPICS"
            }, void 0, false), /*#__PURE__*/_jsxDEV("ul", {
              className: "space-y-2",
              children: [top.map(t => /*#__PURE__*/_jsxDEV("li", {
                children: [/*#__PURE__*/_jsxDEV("button", {
                  className: "flex items-center gap-2 lnk text-left",
                  onClick: () => setOpen(open === t[1] ? null : t[1]),
                  "aria-expanded": open === t[1],
                  children: [/*#__PURE__*/_jsxDEV(I, {
                    n: t[0],
                    s: 20
                  }, void 0, false), t[1]]
                }, void 0, true), open === t[1] && /*#__PURE__*/_jsxDEV("p", {
                  className: "text-sm ml-7 mt-1",
                  children: [t[2], t[1].startsWith("Resetting") && /*#__PURE__*/_jsxDEV(_Fragment, {
                    children: [" ", /*#__PURE__*/_jsxDEV("button", {
                      className: "lnk",
                      onClick: () => go("reset"),
                      children: "Reset it now"
                    }, void 0, false)]
                  }, void 0, true)]
                }, void 0, true)]
              }, t[1], true)), !top.length && /*#__PURE__*/_jsxDEV("li", {
                className: "mut",
                children: "No topics match that search."
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("section", {
            className: "card p-4",
            children: [/*#__PURE__*/_jsxDEV("h2", {
              className: "text-xl font-semibold mb-2",
              children: "STILL NEED HELP?"
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "flex gap-2",
              children: [/*#__PURE__*/_jsxDEV(I, {
                n: "mail",
                s: 22,
                c: "shrink-0"
              }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                children: ["Contact us anytime at ", /*#__PURE__*/_jsxDEV("a", {
                  className: "lnk",
                  href: "mailto:support@job-filter.com",
                  children: "support@job-filter.com"
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), back]
    }, void 0, true)]
  }, void 0, true);
}
const TABS = [["dash", "Dashboard"], ["matches", "Job Matches (12)"], ["apps", "My Applications"], ["profile", "My Profile"], ["settings", "Settings"]];
function AppShell({
  tab,
  setTab,
  go,
  out,
  children
}) {
  return /*#__PURE__*/_jsxDEV("div", {
    className: "min-h-screen",
    children: [/*#__PURE__*/_jsxDEV("header", {
      className: "bar px-5 pt-3",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "flex items-center justify-between gap-3 flex-wrap",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "flex items-center gap-3",
          children: /*#__PURE__*/_jsxDEV(Logo, {
            onClick: () => setTab("dash")
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "flex items-center gap-3",
          children: [/*#__PURE__*/_jsxDEV("button", {
            onClick: () => setTab("profile"),
            className: "flex items-center gap-2 text-left",
            "aria-label": "Open my profile",
            children: [/*#__PURE__*/_jsxDEV("span", {
              className: "w-10 h-10 rounded-full flex items-center justify-center",
              style: {
                background: "var(--chip)"
              },
              children: /*#__PURE__*/_jsxDEV(I, {
                n: "user"
              }, void 0, false)
            }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
              className: "leading-tight text-sm",
              children: ["Welcome,", /*#__PURE__*/_jsxDEV("br", {}, void 0, false), /*#__PURE__*/_jsxDEV("b", {
                children: "Jane Doe!"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
            className: "btn-o text-sm",
            onClick: out,
            children: "Sign out"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("nav", {
        className: "flex items-center gap-5 mt-2 overflow-x-auto",
        "aria-label": "Main",
        children: TABS.map(([k, v]) => /*#__PURE__*/_jsxDEV("button", {
          onClick: () => setTab(k),
          "aria-current": tab === k ? "page" : undefined,
          className: "py-2 whitespace-nowrap hover:text-[var(--accent)] " + (tab === k ? "tabon" : ""),
          children: v
        }, k, false))
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("main", {
      className: "max-w-5xl mx-auto px-4 py-6",
      children: children
    }, void 0, false), /*#__PURE__*/_jsxDEV("footer", {
      className: "max-w-5xl mx-auto px-4 pb-24 flex justify-center gap-5 text-sm text-[var(--accent)]",
      children: [/*#__PURE__*/_jsxDEV("button", {
        onClick: () => go("help"),
        children: "Help"
      }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
        onClick: () => setTab("settings"),
        children: "Settings"
      }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
        onClick: () => alert("Job Filter Academy (prototype)"),
        children: "Job Filter Academy"
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
}
function Dash({
  setTab,
  total = 28
}) {
  const S = [["TOTAL APPLICATIONS", total, "send", "apps"], ["INTERVIEWS PENDING", 3, "cal", "apps"], ["NEW JOB MATCHES", 12, "search", "matches"], ["SAVED JOBS", 15, "star", "matches"]];
  const act = [["send", "Application Submitted for Sr. UI/UX Designer", "(Yesterday)"], ["star", "Saved Job UX Researcher at Bytris", "(2 days ago)"], ["bell", "New Job Alert: Full Stack Developer added to list", "(Today)"]];
  const ins = ["Tech Layoffs Slow Down and Hiring Stabilizes", "The Role of AI in UX Design and Job Searching", "5 Top Cities for Job Growth in 2024"];
  return /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV("h1", {
      className: "text-3xl font-bold mb-3",
      children: "DASHBOARD OVERVIEW"
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "grid grid-cols-2 md:grid-cols-4 gap-3",
      children: S.map(([l, n, ic, t]) => /*#__PURE__*/_jsxDEV("button", {
        onClick: () => setTab(t),
        className: "card p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "text-sm mut leading-tight",
          children: l
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "flex justify-between items-center mt-1",
          children: [/*#__PURE__*/_jsxDEV("span", {
            className: "text-4xl font-bold",
            children: n
          }, void 0, false), /*#__PURE__*/_jsxDEV(I, {
            n: ic,
            s: 28
          }, void 0, false)]
        }, void 0, true)]
      }, l, true))
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "grid md:grid-cols-2 gap-3 mt-3",
      children: [/*#__PURE__*/_jsxDEV("section", {
        className: "card p-4",
        children: [/*#__PURE__*/_jsxDEV("h2", {
          className: "font-semibold text-lg mb-2",
          children: "RECENT ACTIVITY"
        }, void 0, false), /*#__PURE__*/_jsxDEV("ul", {
          className: "space-y-3",
          children: act.map(([ic, t, d]) => /*#__PURE__*/_jsxDEV("li", {
            className: "flex gap-3",
            children: [/*#__PURE__*/_jsxDEV("span", {
              className: "w-8 h-8 shrink-0 rounded flex items-center justify-center",
              style: {
                background: "var(--chip)"
              },
              children: /*#__PURE__*/_jsxDEV(I, {
                n: ic,
                s: 16
              }, void 0, false)
            }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
              children: [t, /*#__PURE__*/_jsxDEV("br", {}, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                className: "text-sm mut",
                children: d
              }, void 0, false)]
            }, void 0, true)]
          }, t, true))
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("section", {
        className: "card p-4",
        children: [/*#__PURE__*/_jsxDEV("h2", {
          className: "font-semibold text-lg mb-2",
          children: "TOP INDUSTRY INSIGHTS"
        }, void 0, false), /*#__PURE__*/_jsxDEV("ul", {
          className: "space-y-3",
          children: ins.map(t => /*#__PURE__*/_jsxDEV("li", {
            className: "flex gap-3 items-center",
            children: [/*#__PURE__*/_jsxDEV("span", {
              className: "w-10 h-10 shrink-0 rounded",
              style: {
                background: "var(--chip)"
              }
            }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
              className: "text-left hover:underline",
              onClick: () => alert(t),
              children: t
            }, void 0, false)]
          }, t, true))
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true);
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
  return /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "flex flex-wrap items-center justify-between gap-2 mb-3",
      children: [/*#__PURE__*/_jsxDEV("h1", {
        className: "text-3xl font-bold",
        children: ["Job Matches (", list.length, ")"]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "flex flex-wrap items-center gap-3 text-sm",
        children: [/*#__PURE__*/_jsxDEV("label", {
          children: ["Sort by: ", /*#__PURE__*/_jsxDEV("select", {
            className: "inp !w-auto !py-1",
            value: sort,
            onChange: e => setSort(e.target.value),
            children: [/*#__PURE__*/_jsxDEV("option", {
              value: "m",
              children: "Best Match"
            }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
              value: "t",
              children: "Title"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("label", {
          children: ["Items per page ", /*#__PURE__*/_jsxDEV("select", {
            className: "inp !w-auto !py-1",
            value: pp,
            onChange: e => {
              setPp(+e.target.value);
              setPg(1);
            },
            children: [/*#__PURE__*/_jsxDEV("option", {
              children: "4"
            }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
              children: "6"
            }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
              children: "8"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "grid md:grid-cols-[13rem_minmax(0,1fr)] gap-4",
      children: [/*#__PURE__*/_jsxDEV("aside", {
        className: "card p-4 h-fit md:sticky md:top-36",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "flex items-center justify-between mb-2",
          children: [/*#__PURE__*/_jsxDEV("h2", {
            className: "text-lg font-semibold",
            children: "Filters"
          }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
            className: "lnk text-sm",
            onClick: () => {
              setF({
                loc: [],
                type: [],
                lvl: [],
                sal: []
              });
              setPg(1);
            },
            children: "Clear all"
          }, void 0, false)]
        }, void 0, true), G.map(([t, k, o]) => /*#__PURE__*/_jsxDEV("fieldset", {
          className: "mb-3",
          children: [/*#__PURE__*/_jsxDEV("legend", {
            className: "font-semibold mb-1",
            children: t
          }, void 0, false), o.map(v => /*#__PURE__*/_jsxDEV("label", {
            className: "flex gap-2 text-sm py-0.5 cursor-pointer",
            children: [/*#__PURE__*/_jsxDEV("input", {
              type: "checkbox",
              className: "accent-[var(--accent)]",
              checked: f[k].includes(v),
              onChange: () => tog(k, v)
            }, void 0, false), v]
          }, v, true))]
        }, k, true))]
      }, void 0, true), /*#__PURE__*/_jsxDEV("section", {
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "grid sm:grid-cols-2 gap-3",
          children: [shown.map(j => /*#__PURE__*/_jsxDEV("article", {
            className: "card p-4 flex flex-col gap-1.5 transition hover:shadow-md min-w-0",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "flex gap-3",
              children: [/*#__PURE__*/_jsxDEV("span", {
                className: "w-12 h-12 rounded shrink-0 flex items-center justify-center",
                style: {
                  background: "var(--fg)",
                  color: "var(--bg)"
                },
                children: /*#__PURE__*/_jsxDEV(I, {
                  n: j.ic,
                  s: 24
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                children: [/*#__PURE__*/_jsxDEV("h3", {
                  className: "text-xl font-semibold leading-tight",
                  children: j.t
                }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                  className: "text-sm",
                  children: [j.co, " • ", j.loc]
                }, void 0, true)]
              }, void 0, true)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "flex flex-wrap items-center gap-x-3 gap-y-1 text-sm",
              children: [/*#__PURE__*/_jsxDEV(Badge, {
                m: j.m
              }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                className: "mut",
                children: j.sch
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "flex flex-wrap gap-1",
              children: j.skills.map(s => /*#__PURE__*/_jsxDEV("span", {
                className: "chip",
                children: s
              }, s, false))
            }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
              className: "btn self-end mt-1",
              onClick: () => openJob(j),
              children: "View & Apply"
            }, void 0, false)]
          }, j.id, true)), !shown.length && /*#__PURE__*/_jsxDEV("p", {
            className: "mut",
            children: "No matches for those filters. Clear a filter to see more jobs."
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("nav", {
          className: "flex justify-end gap-1 mt-3",
          "aria-label": "Pages",
          children: [/*#__PURE__*/_jsxDEV("button", {
            className: "btn-o",
            onClick: () => setPg(Math.max(1, pg - 1)),
            children: "<"
          }, void 0, false), Array.from({
            length: pages
          }, (_, i) => /*#__PURE__*/_jsxDEV("button", {
            onClick: () => setPg(i + 1),
            className: "btn-o " + (pg === i + 1 ? "!bg-[var(--accent)] !text-[var(--accent-fg)]" : ""),
            children: i + 1
          }, i, false)), /*#__PURE__*/_jsxDEV("button", {
            className: "btn-o",
            onClick: () => setPg(Math.min(pages, pg + 1)),
            children: ">"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true);
}
function Apps({
  openJob,
  apps
}) {
  const [t, setT] = useState("All"),
    [w, setW] = useState({});
  const rows = apps.filter(a => t === "All" || a[3] === t);
  return /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV("h1", {
      className: "text-3xl font-bold mb-3",
      children: "MY APPLICATIONS"
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "flex flex-wrap gap-2 mb-3",
      children: ["All", "Submitted", "In Review", "Interviews", "Hired", "Rejected"].map(x => /*#__PURE__*/_jsxDEV("button", {
        onClick: () => setT(x),
        className: "px-3 py-1 rounded " + (t === x ? "font-semibold" : ""),
        style: {
          background: t === x ? "var(--chip)" : "transparent"
        },
        children: x
      }, x, false))
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "card overflow-x-auto",
      children: /*#__PURE__*/_jsxDEV("table", {
        className: "w-full text-left",
        children: [/*#__PURE__*/_jsxDEV("thead", {
          style: {
            background: "var(--chip)"
          },
          children: /*#__PURE__*/_jsxDEV("tr", {
            children: ["Job Title", "Company", "Date Applied", "Status", "Actions"].map(h => /*#__PURE__*/_jsxDEV("th", {
              className: "p-2",
              children: h
            }, h, false))
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsxDEV("tbody", {
          children: [rows.map(a => /*#__PURE__*/_jsxDEV("tr", {
            className: "border-t border-[var(--line)] hover:bg-[var(--chip)]",
            children: [/*#__PURE__*/_jsxDEV("td", {
              className: "p-2",
              children: a[0]
            }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
              className: "p-2",
              children: a[1]
            }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
              className: "p-2",
              children: a[2]
            }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
              className: "p-2",
              children: /*#__PURE__*/_jsxDEV("span", {
                className: "flex items-center gap-2",
                children: [/*#__PURE__*/_jsxDEV(I, {
                  n: w[a[0]] ? "x" : a[4],
                  s: 18
                }, void 0, false), w[a[0]] ? "Withdrawn" : statusLabel[a[3]]]
              }, void 0, true)
            }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
              className: "p-2",
              children: [/*#__PURE__*/_jsxDEV("button", {
                className: "lnk block",
                onClick: () => openJob(JOBS.find(j => j.co === a[1] || j.t === a[0]) || JOBS[0]),
                children: "View Details"
              }, void 0, false), a[5] && !w[a[0]] ? /*#__PURE__*/_jsxDEV("button", {
                className: "lnk block",
                onClick: () => confirm("Withdraw this application?") && setW({
                  ...w,
                  [a[0]]: 1
                }),
                children: "Withdraw"
              }, void 0, false) : null]
            }, void 0, true)]
          }, a[0] + a[1], true)), !rows.length && /*#__PURE__*/_jsxDEV("tr", {
            children: /*#__PURE__*/_jsxDEV("td", {
              colSpan: "5",
              className: "p-4 mut",
              children: "No applications here yet. Apply from Job Matches to start tracking."
            }, void 0, false)
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true)
    }, void 0, false), /*#__PURE__*/_jsxDEV("nav", {
      className: "flex justify-center gap-2 mt-3 text-sm",
      children: [/*#__PURE__*/_jsxDEV("span", {
        className: "mut",
        children: "Prev"
      }, void 0, false), /*#__PURE__*/_jsxDEV("b", {
        className: "px-2 rounded",
        style: {
          background: "var(--chip)"
        },
        children: "1"
      }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
        children: "2"
      }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
        children: "3"
      }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
        children: "Next"
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
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
  }) => /*#__PURE__*/_jsxDEV("section", {
    className: "flex gap-4 py-4 border-t border-[var(--line)]",
    children: [/*#__PURE__*/_jsxDEV("h2", {
      className: "w-32 shrink-0 text-lg font-semibold leading-tight",
      children: t
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "flex-1",
      children: children
    }, void 0, false), edit && /*#__PURE__*/_jsxDEV("button", {
      className: "lnk self-start",
      onClick: () => setEd(ed === k ? null : k),
      children: ed === k ? "Done" : edit
    }, void 0, false)]
  }, void 0, true);
  return /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV("h1", {
      className: "text-3xl font-bold mb-3",
      children: "MY PROFILE"
    }, void 0, false), /*#__PURE__*/_jsxDEV(Row, {
      t: "PERSONAL INFORMATION",
      k: "p",
      edit: "Edit",
      children: ed === "p" ? /*#__PURE__*/_jsxDEV("div", {
        className: "grid sm:grid-cols-2 gap-2",
        children: [["name", "Name"], ["email", "Email"], ["phone", "Phone"], ["loc", "Location"]].map(([k, l]) => /*#__PURE__*/_jsxDEV("label", {
          className: "text-sm",
          children: [l, /*#__PURE__*/_jsxDEV("input", {
            className: "inp",
            value: p[k],
            onChange: e => setP({
              ...p,
              [k]: e.target.value
            })
          }, void 0, false)]
        }, k, true))
      }, void 0, false) : /*#__PURE__*/_jsxDEV("div", {
        className: "grid sm:grid-cols-2 gap-1",
        children: [/*#__PURE__*/_jsxDEV("div", {
          children: ["Name: ", p.name]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          children: ["Phone: ", p.phone]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          children: ["Email: ", p.email]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          children: ["Location: ", p.loc]
        }, void 0, true)]
      }, void 0, true)
    }, void 0, false), /*#__PURE__*/_jsxDEV(Row, {
      t: "RESUME & CV",
      k: "r",
      edit: "Upload New",
      children: [/*#__PURE__*/_jsxDEV("button", {
        className: "lnk",
        onClick: () => alert("janedoe_cv.pdf (prototype download)"),
        children: "janedoe_cv.pdf"
      }, void 0, false), " (View/Download)", ed === "r" && /*#__PURE__*/_jsxDEV("div", {
        className: "mt-2",
        children: /*#__PURE__*/_jsxDEV("input", {
          type: "file",
          "aria-label": "Upload resume"
        }, void 0, false)
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV(Row, {
      t: "WORK EXPERIENCE",
      children: [/*#__PURE__*/_jsxDEV("div", {
        children: "Sr. UX Designer at TechCorp (2021-Present)"
      }, void 0, false), /*#__PURE__*/_jsxDEV("ul", {
        className: "list-disc ml-5",
        children: [/*#__PURE__*/_jsxDEV("li", {
          children: "Sr. UX Designer at Coderafters"
        }, void 0, false), /*#__PURE__*/_jsxDEV("li", {
          children: "Product Manager at Full Stack Developer"
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV(Row, {
      t: "SKILLS",
      k: "s",
      edit: "Edit",
      children: ed === "s" ? /*#__PURE__*/_jsxDEV("input", {
        className: "inp",
        "aria-label": "Skills",
        value: sk,
        onChange: e => setSk(e.target.value)
      }, void 0, false) : /*#__PURE__*/_jsxDEV("div", {
        className: "flex flex-wrap gap-2",
        children: sk.split(",").map(s => s.trim()).filter(Boolean).map(s => /*#__PURE__*/_jsxDEV("span", {
          className: "chip",
          children: s
        }, s, false))
      }, void 0, false)
    }, void 0, false)]
  }, void 0, true);
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
  }) => /*#__PURE__*/_jsxDEV("section", {
    className: "py-4 border-t border-[var(--line)]",
    children: [/*#__PURE__*/_jsxDEV("h2", {
      className: "text-xl font-semibold mb-2",
      children: [n, ". ", t]
    }, void 0, true), children]
  }, void 0, true);
  return /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV("h1", {
      className: "text-3xl font-bold mb-3",
      children: "SETTINGS"
    }, void 0, false), /*#__PURE__*/_jsxDEV(Sec, {
      n: "1",
      t: "ACCOUNT SETTINGS",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "grid gap-2",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "flex justify-between",
          children: ["Email: jane.doe@email.com", /*#__PURE__*/_jsxDEV("button", {
            className: "lnk",
            onClick: () => alert("Edit email (prototype)"),
            children: "Edit"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "flex justify-between",
          children: ["Password: ••••••••", /*#__PURE__*/_jsxDEV("button", {
            className: "lnk",
            onClick: () => go("reset"),
            children: "Edit"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "flex justify-between items-center",
          children: ["Account deactivated", /*#__PURE__*/_jsxDEV(Toggle, {
            on: deact,
            set: setDeact,
            label: "Account deactivated"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true)
    }, void 0, false), /*#__PURE__*/_jsxDEV(Sec, {
      n: "2",
      t: "NOTIFICATION PREFERENCES",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "grid gap-2",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "flex justify-between items-center",
          children: ["New job alerts", /*#__PURE__*/_jsxDEV(Toggle, {
            on: n1,
            set: setN1,
            label: "New job alerts"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "flex justify-between items-center",
          children: ["Application Status Updates", /*#__PURE__*/_jsxDEV(Toggle, {
            on: n2,
            set: setN2,
            label: "Application status updates"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true)
    }, void 0, false), /*#__PURE__*/_jsxDEV(Sec, {
      n: "3",
      t: "STUDY LOAD & SCHEDULE SETTINGS",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "flex flex-wrap gap-4 items-start",
        children: [/*#__PURE__*/_jsxDEV("label", {
          className: "card p-3 cursor-pointer flex items-center gap-2",
          children: [/*#__PURE__*/_jsxDEV(I, {
            n: "up"
          }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
            className: "lnk",
            children: "Update PDF/Scan Study Schedule"
          }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
            type: "file",
            accept: ".pdf,image/*",
            className: "sr-only",
            onChange: e => setFile(e.target.files[0]?.name || "")
          }, void 0, false)]
        }, void 0, true), file && /*#__PURE__*/_jsxDEV("span", {
          className: "self-center text-sm",
          children: ["Uploaded: ", file]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "flex-1 min-w-[12rem]",
          children: [eav ? /*#__PURE__*/_jsxDEV("input", {
            className: "inp",
            "aria-label": "Availability",
            value: av,
            onChange: e => setAv(e.target.value)
          }, void 0, false) : /*#__PURE__*/_jsxDEV("div", {
            className: "card p-2",
            children: av
          }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
            className: "lnk mt-1",
            onClick: () => setEav(!eav),
            children: eav ? "Save Availability Times" : "Edit Availability Times"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true)
    }, void 0, false), /*#__PURE__*/_jsxDEV(Sec, {
      n: "4",
      t: "PRIVACY & DATA",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "flex flex-wrap gap-6 items-center",
        children: [/*#__PURE__*/_jsxDEV("span", {
          className: "flex items-center gap-3",
          children: ["Profile Visibility", /*#__PURE__*/_jsxDEV(Toggle, {
            on: vis,
            set: setVis,
            label: "Profile visibility"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
          className: "lnk",
          onClick: () => alert("Preparing your data download (prototype)"),
          children: "Download My Data"
        }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
          className: "lnk",
          onClick: () => {
            if (confirm("Delete account?")) {
              setUser(false);
              go("home");
            }
          },
          children: "Delete Account"
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false)]
  }, void 0, true);
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
  return /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [open && /*#__PURE__*/_jsxDEV("section", {
      role: "dialog",
      "aria-label": "JOB-FILTER AI chat",
      className: "card fixed z-40 right-4 flex flex-col w-[22rem] max-w-[calc(100vw-2rem)] h-[30rem] max-h-[calc(100vh-7rem)] shadow-xl",
      style: {
        bottom: "calc(4.75rem + env(safe-area-inset-bottom,0px))"
      },
      children: [/*#__PURE__*/_jsxDEV("header", {
        className: "flex items-center gap-2 px-3 py-2 border-b border-[var(--line)]",
        children: [/*#__PURE__*/_jsxDEV(I, {
          n: "bot",
          s: 22,
          c: "text-[var(--accent)]"
        }, void 0, false), /*#__PURE__*/_jsxDEV("h2", {
          className: "text-lg font-semibold flex-1",
          children: "JOB-FILTER AI"
        }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
          onClick: () => setOpen(false),
          "aria-label": "Close chat",
          children: /*#__PURE__*/_jsxDEV(I, {
            n: "x",
            s: 18
          }, void 0, false)
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "flex-1 overflow-y-auto p-3 space-y-2",
        "aria-live": "polite",
        children: [msgs.map((m, i) => /*#__PURE__*/_jsxDEV("div", {
          className: m.b ? "flex" : "flex justify-end",
          children: /*#__PURE__*/_jsxDEV("div", {
            className: "max-w-[85%] rounded-xl px-3 py-2 text-[.95rem]",
            style: m.b ? {
              background: "var(--chip)"
            } : {
              background: "var(--accent)",
              color: "var(--accent-fg)"
            },
            children: [m.t, m.a && /*#__PURE__*/_jsxDEV("div", {
              className: "mt-2",
              children: /*#__PURE__*/_jsxDEV("button", {
                className: "btn-o text-sm",
                onClick: () => {
                  setTab(m.a[1]);
                  setOpen(false);
                },
                children: m.a[0]
              }, void 0, false)
            }, void 0, false)]
          }, void 0, true)
        }, i, false)), typing && /*#__PURE__*/_jsxDEV("div", {
          className: "flex",
          children: /*#__PURE__*/_jsxDEV("div", {
            className: "rounded-xl px-3 py-2 mut",
            style: {
              background: "var(--chip)"
            },
            children: "Typing…"
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          ref: end
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "flex flex-wrap gap-2 px-3 pb-2",
        children: ["Help with schedule", "Change notification settings", "Other..."].map(c => /*#__PURE__*/_jsxDEV("button", {
          className: "btn-o !rounded-full text-sm",
          onClick: () => send(c),
          children: c
        }, c, false))
      }, void 0, false), /*#__PURE__*/_jsxDEV("form", {
        className: "flex items-center gap-2 p-3 border-t border-[var(--line)]",
        onSubmit: e => {
          e.preventDefault();
          send(txt);
        },
        children: [/*#__PURE__*/_jsxDEV("label", {
          className: "flex-1",
          children: [/*#__PURE__*/_jsxDEV("span", {
            className: "sr-only",
            children: "Message"
          }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
            className: "inp",
            placeholder: "Ask me anything...",
            value: txt,
            onChange: e => setTxt(e.target.value)
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
          type: "button",
          "aria-label": "Voice input",
          onClick: () => alert("Voice input isn’t available in this prototype."),
          children: /*#__PURE__*/_jsxDEV(I, {
            n: "mic",
            s: 20
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
          type: "submit",
          className: "btn !px-3",
          "aria-label": "Send message",
          children: /*#__PURE__*/_jsxDEV(I, {
            n: "send",
            s: 18
          }, void 0, false)
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
      onClick: () => setOpen(!open),
      "aria-expanded": open,
      "aria-label": open ? "Close AI chat" : "Open AI chat",
      className: "fixed z-40 right-4 flex items-center gap-1.5 rounded-full px-4 py-3 font-bold shadow-lg",
      style: {
        bottom: "calc(1rem + env(safe-area-inset-bottom,0px))",
        background: "var(--accent)",
        color: "var(--accent-fg)"
      },
      children: ["AI", /*#__PURE__*/_jsxDEV(I, {
        n: "star",
        s: 16
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
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
  return m ? /*#__PURE__*/_jsxDEV("div", {
    role: "status",
    className: "fixed left-1/2 -translate-x-1/2 bottom-6 z-[60] px-4 py-2 rounded-lg shadow-lg max-w-[90vw]",
    style: {
      background: "var(--fg)",
      color: "var(--bg)"
    },
    children: m
  }, void 0, false) : null;
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
  const modal = job && /*#__PURE__*/_jsxDEV(Modal, {
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
  }, void 0, false);
  if (screen === "app") return /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV(AppShell, {
      tab: tab,
      setTab: setTab,
      go: go,
      out: () => {
        setUser(false);
        setTab("dash");
        go("home");
        alert("You’ve been signed out.");
      },
      children: [tab === "dash" && /*#__PURE__*/_jsxDEV(Dash, {
        setTab: setTab,
        total: 28 + apps.length - APPS.length
      }, void 0, false), tab === "matches" && /*#__PURE__*/_jsxDEV(Matches, {
        openJob: setJob
      }, void 0, false), tab === "apps" && /*#__PURE__*/_jsxDEV(Apps, {
        apps: apps,
        openJob: setJob
      }, void 0, false), tab === "profile" && /*#__PURE__*/_jsxDEV(Profile, {}, void 0, false), tab === "settings" && /*#__PURE__*/_jsxDEV(Settings, {
        go: go,
        setUser: setUser
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV(Chat, {
      setTab: setTab
    }, void 0, false), modal]
  }, void 0, true);
  if (screen === "about" || screen === "help") return /*#__PURE__*/_jsxDEV(Info, {
    page: screen,
    go: go,
    user: user
  }, void 0, false);
  if (screen === "home") return /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV(Home, {
      go: go,
      openJob: setJob,
      user: user
    }, void 0, false), modal]
  }, void 0, true);
  return /*#__PURE__*/_jsxDEV(Auth, {
    page: screen,
    go: go,
    job: pending,
    setUser: setUser
  }, void 0, false);
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/_jsxDEV(_Fragment, {
  children: [/*#__PURE__*/_jsxDEV(App, {}, void 0, false), /*#__PURE__*/_jsxDEV(Toast, {}, void 0, false)]
}, void 0, true));
