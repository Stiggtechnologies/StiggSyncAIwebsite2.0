/**
 * Reliability training offers. Content mirrors the offer documents; prices are CAD.
 * No savings or outcome claims: value depends on the customer's data and actions.
 */

export type TrainingPriceRow = {
  option: string;
  group: string;
  length: string;
  price: string;
};

export type TrainingModule = {
  time: string;
  module: string;
  exercise: string;
};

export type TrainingOffer = {
  slug: 'planners-supervisors' | 'superintendents-managers' | 'technicians-operators';
  path: string;
  shortName: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  audienceLabel: string;
  lede: string;
  whoFor: string[];
  formatLabel: string;
  leaveWith: string[];
  agendaTitle: string;
  agendaIntro: string;
  agenda: TrainingModule[];
  howItWorks: string[];
  prices: TrainingPriceRow[];
  priceNote?: string;
  included: string;
  nextStep: string;
  bio: string;
};

export const TRAINING_CONTACT_EMAIL = 'orville@syncai.ca';

export const FOUNDING_CLIENT_NOTE =
  'Prices are in Canadian dollars. The first three clients receive founding-client pricing of 25% off, in exchange for before-and-after results and a short testimonial.';

export const TRAINING_VENDOR_NEUTRAL =
  'Vendor-neutral. The session does not require or sell software, and it needs no access to your systems.';

export const trainingOffers: TrainingOffer[] = [
  {
    slug: 'planners-supervisors',
    path: '/training/planners-supervisors',
    shortName: 'Planners & Supervisors',
    title: 'Reliability for Planners and Supervisors',
    metaTitle: 'Reliability Training for Planners and Supervisors',
    metaDescription:
      'A one-day working session for maintenance planners and supervisors: rank bad actors from your own work orders, clean up failure data, and document decisions. Vendor-neutral, no software required.',
    audienceLabel: 'Working session · 1 day',
    lede:
      'Planners and supervisors are asked "what should we fix first, and can we trust these numbers?" with only work orders and a spreadsheet to answer with. This one-day session teaches how to read the history those systems produce without being misled by it.',
    whoFor: [
      'Maintenance planners, schedulers and supervisors who answer for what gets fixed first.',
      'You do not need an engineering degree. The session assumes you know your equipment and your CMMS; it teaches how to read the history they produce.',
      'The problem it addresses: work orders are written to get a job done, not to be analyzed. Dates are wrong, failure codes are missing, and preventive maintenance changes the very failure pattern you are trying to measure.',
    ],
    formatLabel: 'What you leave with',
    leaveWith: [
      'A method for ranking your worst-performing equipment from your own work orders, and a way to see when the data is too thin to rank anything.',
      'The ability to tell a real failure from a maintenance event, and why the difference changes every number downstream.',
      'A plain-language check for whether your preventive maintenance is helping or distorting your results.',
      'A work-order and failure-code standard your team can adopt, so next year’s data is better than this year’s.',
      'A decision-record template: what was recommended, on what evidence, who approved it and what happened.',
      'A one-page monthly review you can run without special software.',
    ],
    agendaTitle: 'One-day agenda',
    agendaIntro:
      'Six modules over about seven hours, each ending in an exercise on real or sample work orders.',
    agenda: [
      { time: '8:30–9:30', module: 'Why work orders lie: what the data can and cannot tell you', exercise: 'Audit 20 of your own work orders for missing dates, codes and causes' },
      { time: '9:45–11:15', module: 'Failure or maintenance event? Building a clean failure list', exercise: 'Sort a mixed work-order list into failures, events and noise' },
      { time: '12:00–13:15', module: 'Finding bad actors without special software', exercise: 'Rank assets by repeat failures and cost, and mark where the data is too thin' },
      { time: '13:30–14:45', module: 'Does your PM help or distort? Reading intervals and failure patterns', exercise: 'Compare failures before and after a PM change' },
      { time: '15:00–15:45', module: 'Writing work orders and failure codes that can be analyzed', exercise: 'Draft your site’s minimum standard' },
      { time: '15:45–16:30', module: 'Deciding and documenting: the decision record and the monthly review', exercise: 'Fill in a decision record for one real problem' },
    ],
    howItWorks: [
      'We ask for an export of 12–24 months of work orders (asset, dates, type, description, cost if you track it) and your PM schedule if available, so the exercises use your equipment and your habits.',
      'No system access and no software install. We work from the file. Remove names or sensitive fields before sending; we confirm exactly which columns we need.',
      'Your export is used only to prepare your session and is returned or deleted afterward, with terms confirmed in writing before you send anything.',
      'If you cannot share data, we use a realistic sample set and you apply the method to your own records afterward.',
    ],
    prices: [
      { option: 'In-house session at your site', group: '12–20 people', length: '1 day', price: '$7,500 flat, plus travel at cost' },
      { option: 'Live virtual session', group: '12–20 people', length: '2 half-days', price: '$5,500 flat' },
      { option: 'Open enrollment (per seat)', group: '8–20 people', length: '1 day', price: '$695 per seat' },
      { option: 'Add-on: reliability diagnostic of your work orders', group: 'Your site', length: '6–8 weeks', price: 'Quoted separately' },
    ],
    included: 'Included: facilitator, take-home templates, and a short follow-up call 30 days later. Travel for in-house sessions is billed at cost.',
    nextStep: 'A 20-minute call to confirm your group, your CMMS and your preferred dates.',
    bio: 'Orville Davis, M.Eng., MMP, has more than 25 years in mining, oil sands and heavy-equipment maintenance. He started as a heavy-duty equipment mechanic, worked as a maintenance supervisor and planner, and then moved into reliability engineering. At Suncor\u2019s mining operations he led reliability engineering, then maintenance and reliability for the autonomous haulage fleet. He holds a Master\u2019s degree in Maintenance and Reliability Engineering (Monash University), a Red Seal in heavy-duty equipment, and the PEMAC Maintenance Management Professional designation. He founded SyncAI after seeing dashboards report confident numbers the data could not support.',
  },
  {
    slug: 'superintendents-managers',
    path: '/training/superintendents-managers',
    shortName: 'Superintendents & Managers',
    title: 'Reliability for Superintendents and Managers',
    metaTitle: 'Reliability Briefing for Superintendents and Managers',
    metaDescription:
      'A short leadership briefing for maintenance and operations superintendents and managers: how to read reliability numbers, what to approve or challenge, and how to run a monthly review. Vendor-neutral.',
    audienceLabel: 'Leadership briefing · 2–3 hours',
    lede:
      'A short leadership briefing on how to read reliability numbers, what to approve or challenge, and how to run a monthly review your team can sustain.',
    whoFor: [
      'Maintenance and operations superintendents and managers who sign off on spend, shutdown scope and PM changes.',
      'You are shown rankings and charts you cannot easily check. This briefing gives you the questions that tell you whether to trust them.',
    ],
    formatLabel: 'What you leave with',
    leaveWith: [
      'Five questions to ask before you accept any bad-actor ranking or failure chart.',
      'A way to tell when the data supports a conclusion, only partly supports it, or does not support it at all.',
      'How to review a PM change or a repeat failure: what evidence you should expect to see before approving.',
      'A decision-record template: recommendation, evidence, approver, outcome.',
      'A one-page monthly reliability review your planners can prepare and you can run in 30 minutes.',
      'What to expect from your planners, supervisors and any software, and how to hold them to a standard.',
    ],
    agendaTitle: 'Briefing agenda',
    agendaIntro: 'Four modules, each with a short exercise on sample material.',
    agenda: [
      { time: '0:00–0:40', module: 'What your numbers can and can’t tell you', exercise: 'Challenge three sample charts' },
      { time: '0:40–1:20', module: 'Reading a bad-actor ranking: is it real or an artifact of the data?', exercise: 'Rate three rankings Supported, Partially Supported or Unsupported' },
      { time: '1:30–2:10', module: 'PM and repeat failures: what to ask before you approve', exercise: 'Review a proposed PM change against evidence' },
      { time: '2:10–2:45', module: 'Decision records and the monthly review', exercise: 'Draft a decision record for a live issue' },
    ],
    howItWorks: [
      'The briefing runs on sample material, so no data is required. If your planners also attend the working session, we can use their results as examples.',
      'No system access and no software install.',
    ],
    prices: [
      { option: 'In-house leadership briefing', group: '6–15 people', length: '2–3 hours', price: '$3,500 flat, plus travel at cost' },
      { option: 'Live virtual briefing', group: '6–15 people', length: '2 hours', price: '$2,500 flat' },
    ],
    priceNote:
      'Site package: the planners and supervisors working session, one technicians and operators crew session and this briefing, delivered in one visit for $14,500 CAD plus travel at cost. Optional follow-on: a reliability diagnostic of your work orders (6–8 weeks).',
    included: 'Included: facilitator and take-home templates. Travel for in-house sessions is billed at cost.',
    nextStep: 'A 20-minute call to confirm your group and dates.',
    bio: 'Orville Davis, M.Eng., MMP, has more than 25 years in mining, oil sands and heavy-equipment maintenance. He started as a heavy-duty equipment mechanic, worked as a maintenance supervisor and planner, and then moved into reliability engineering. At Suncor\u2019s mining operations he led reliability engineering, then maintenance and reliability for the autonomous haulage fleet. He holds a Master\u2019s degree in Maintenance and Reliability Engineering (Monash University), a Red Seal in heavy-duty equipment, and the PEMAC Maintenance Management Professional designation.',
  },
  {
    slug: 'technicians-operators',
    path: '/training/technicians-operators',
    shortName: 'Technicians & Operators',
    title: 'Reliability for Technicians and Operators',
    metaTitle: 'Reliability Training for Technicians and Operators',
    metaDescription:
      'A half-day crew session for technicians and operators on how the work you do every day creates reliability: job closeouts, early warning, doing the task right, and raising problems. No blame, safety first.',
    audienceLabel: 'Crew session · half-day',
    lede:
      'A half-day crew session on how the work you do every day creates reliability, and how what you see and write down helps the whole site make better decisions.',
    whoFor: [
      'Mechanics, millwrights, electricians, instrument technicians, lubrication techs, welders and operators.',
      'No engineering background needed, and no blame: the point is fixing equipment and processes, not scoring people.',
      'Safety always comes first in this session. Nothing here asks anyone to trade safety for reliability.',
    ],
    formatLabel: 'What you leave with',
    leaveWith: [
      'A clear picture of how your work orders and notes become the failure record that managers and planners rely on.',
      'A simple standard for closing out a job: what failed, what you found, what you think caused it, and what was done.',
      'Practical early-warning habits for operators and techs: what to look, listen, feel and smell for, and how to report it so it gets acted on.',
      'How quality of execution (cleanliness, fits, lubrication, torque, alignment) shows up later as repeat failures, and where your judgment matters most.',
      'When and how to raise a problem, who to raise it with, and what a good report looks like.',
      'A one-page checklist for your trade or area to use on shift.',
    ],
    agendaTitle: 'Half-day agenda',
    agendaIntro: 'Five modules, each with a practical exercise.',
    agenda: [
      { time: '0:00–0:45', module: 'Where your work goes: from the job to the decision', exercise: 'Follow one real job from work order to report' },
      { time: '0:45–1:30', module: 'Closing out a job so the next person learns something', exercise: 'Rewrite three poor closeouts as good ones' },
      { time: '1:45–2:30', module: 'Seeing early: inspections, operator care and reporting', exercise: 'Build an early-warning list for one machine' },
      { time: '2:30–3:15', module: 'Doing the task right: how execution shows up as repeat failures', exercise: 'Spot the likely cause behind three repeat jobs' },
      { time: '3:15–4:00', module: 'Raising a problem and closing the loop', exercise: 'Role-play a report to a planner or supervisor' },
    ],
    howItWorks: [
      'We use anonymized jobs from your own site when you can provide them (a short list of recent work orders with names removed); otherwise we use realistic samples.',
      'No system access and no software install. Sessions can run on or just after shift change, in groups of 12–25.',
    ],
    prices: [
      { option: 'In-house crew session at your site', group: '12–25 people', length: 'Half-day', price: '$4,500 flat, plus travel at cost; $3,500 for a second crew in the same visit' },
      { option: 'Live virtual session', group: '12–25 people', length: '2 × 2 hours', price: '$3,000 flat' },
    ],
    included: 'Included: facilitator and take-home checklists. Travel for in-house sessions is billed at cost.',
    nextStep: 'A 20-minute call to confirm your crews, shifts and dates.',
    bio: 'Orville Davis, M.Eng., MMP, started as an apprentice and heavy-duty mechanic and has more than 25 years in mining, oil sands and heavy-equipment maintenance, including as a maintenance supervisor and planner. He later led reliability engineering at Suncor\u2019s mining operations. He holds a Master\u2019s degree in Maintenance and Reliability Engineering, a Red Seal in heavy-duty equipment, and the PEMAC Maintenance Management Professional designation.',
  },
];

export function getOffer(slug: TrainingOffer['slug']): TrainingOffer {
  const offer = trainingOffers.find((o) => o.slug === slug);
  if (!offer) throw new Error(`Unknown training offer: ${slug}`);
  return offer;
}
