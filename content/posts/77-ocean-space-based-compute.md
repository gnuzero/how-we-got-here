---
title: "Ocean: Space-Based Compute, Energy, and the Pollution Paradox"
weight: 77
date: 2026-11-08
draft: false
phase: "From One Machine to a Platform"
series_index: 76
aliases: []
tags: []
summary: "The same power curve that made Earth's grids sweat makes vacuum attractive — and puts the dark sky in the balance"
---

## The Hook

The same forty-year power curve that made Earth's grids sweat is exactly what makes vacuum attractive. Compute needs cooling. Space offers a cold radiative heat sink — not an unlimited cooling rate. ([IEA, Energy and AI](https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai); [NASA, Thermal Control](https://www.nasa.gov/smallsat-institute/sst-soa/thermal-control/))

## The Forty-Year Power Arc

- **1980s:** Computer rooms were becoming networked server rooms; the term data center was gaining recognition. ([Wikipedia, Data center, History](https://en.wikipedia.org/wiki/Data_center#History))
- **2006:** US estimate — 61 TWh, 1.5% of US electricity. ([Berkeley Lab, Report to Congress](https://eta-publications.lbl.gov/publications/report-congress-server-and-data))
- **2010:** Global ~194 TWh in Masanet and colleagues' later reconstruction. ([Koomey, 2020 study summary](https://www.koomey.com/koomey_blog/our-article-on-changes-in-data-center-electricity-use-from-2010-to-2018--out-in-science-magazine-today/))
- **2014–2016:** US flat at about 60 TWh. Efficiency gains in cooling, power management and server utilization held down demand. ([Berkeley Lab, 2024 report, executive summary](https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report.pdf)) Uptime Institute's survey-average PUE fell from 2.5 in 2007 to 1.65 in 2014 — a separate survey, not the US energy series. ([Uptime Institute, 2024 Global Survey, Figure 2](https://datacenter.uptimeinstitute.com/rs/711-RIA-145/images/2024.GlobalDataCenterSurvey.Report.pdf)) In a broader study of computing devices, not just data centers, computing's share of world electricity *peaked* at 2.5% in 2013, then fell to 1.8% by 2018. ([Pinto and colleagues, iScience](https://researchportal.ulisboa.pt/en/publications/long-run-electricity-consumption-in-computing-exponential-growth-/))
- **2017:** GPU-accelerated servers for AI became a significant enough part of the stock for US electricity demand to start growing again; it reached 76 TWh in 2018. ([Berkeley Lab, 2024 report, executive summary](https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report.pdf))
- **2018:** Global ~205 TWh. ([Koomey, 2020 study summary](https://www.koomey.com/koomey_blog/our-article-on-changes-in-data-center-electricity-use-from-2010-to-2018--out-in-science-magazine-today/))
- **2020:** Global estimates depend on who's counting: IEA's contemporary estimate was 200–250 TWh, excluding cryptocurrency mining; the Energy Institute's later S&P-based series gives about 411 TWh. ([UNCTAD, Digital Economy Report 2024, Table III.1](https://unctad.org/system/files/official-document/der2024_ch03_en.pdf); [Energy Institute, 2026 review, p. 64](https://assets.kpmg.com/content/dam/kpmgsites/au/pdf/2026/statistical-review-of-world-energy.pdf)) That latter series includes crypto mining and uses a different method. ([Our World in Data, comparing the estimates](https://ourworldindata.org/how-much-energy-do-data-centers-and-artificial-intelligence-use))
- **2023:** US 176 TWh — 4.4% of national electricity. ([Berkeley Lab](https://energyanalysis.lbl.gov/news/berkeley-lab-report-evaluates-increase-electricity-demand-data-centers))
- **2024:** Global 415 TWh, in the IEA's 2025 report. ([IEA, Energy and AI](https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai))
- **2025:** Global 485 TWh in the IEA's estimate; 788 TWh in the Energy Institute's first inclusion of data-center demand in its Statistical Review. ([IEA, 2026 update](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary); [Energy Institute](https://energyinst.org/exploring-energy/resources/news-centre/media-releases/global-electrification-reaches-tipping-point-as-energy-demand-hits-record-highs-and-regional-paths-diverge)) These are differently scoped estimates, not one uncertainty range: the latter includes crypto mining. ([Our World in Data](https://ourworldindata.org/how-much-energy-do-data-centers-and-artificial-intelligence-use)) In the Energy Institute series, the US alone was at about 313 TWh — nearly 40% of that world total. ([Energy Institute, p. 64](https://assets.kpmg.com/content/dam/kpmgsites/au/pdf/2026/statistical-review-of-world-energy.pdf))
- **2030 projection:** ~950 TWh, 3% of global electricity, in the IEA's 2026 update; its 2025 report projected ~945 TWh. ([IEA, 2026 update](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary); [IEA, 2025 report](https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai)) Electricity consumption by AI-focused data centers grew 50% in 2025 alone and is projected to triple between 2025 and 2030. ([IEA, 2026 update](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary))

The arc: 61 TWh in the **US** in 2006 → about 194 **globally** in 2010 → 415 globally in 2024 → about 950 projected for 2030. Not a single comparable series, and not an eightfold global rise from 2006; the last step is still a projected doubling in six years. ([Berkeley Lab](https://eta-publications.lbl.gov/publications/report-congress-server-and-data); [Koomey](https://www.koomey.com/koomey_blog/our-article-on-changes-in-data-center-electricity-use-from-2010-to-2018--out-in-science-magazine-today/); [IEA, 2025](https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai); [IEA, 2026](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary))

## Why Space?

- **No land for the orbiting computers.** No evaporative cooling towers for them. No terrestrial grid interconnection queue for their solar supply — one of the bottlenecks facing terrestrial AI data centers. ([Google, Suncatcher paper, sections 1.1–1.2](https://arxiv.org/html/2511.19468); [IEA, 2026 update](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary))
- **Constant sunlight.** A dawn-dusk sun-synchronous orbit means near-continuous solar exposure, reducing the need for heavy onboard batteries. ([Google Research](https://research.google/blog/exploring-a-space-based-scalable-ai-infrastructure-system-design/))
- **The 2.7 Kelvin sink.** The cosmic microwave background — leftover radiation from the hot Big Bang, filling the cosmos — has a measured temperature of about 2.725 K. Minus 270.4°C. Only about 3 degrees above absolute zero. ([NASA, COBE](https://science.nasa.gov/mission/cobe/science/)) A warm radiator can emit heat toward deep space, but its area, temperature and view of the Sun and Earth limit the net cooling. That's your cold sink, not an infinite radiator. ([NASA, Thermal Control, section 7.1](https://www.nasa.gov/smallsat-institute/sst-soa/thermal-control/))
- **No moving parts in the radiating surface.** Radiation is electromagnetic waves, same as light. A panel glows infrared into the void. ([NASA, Thermal Control, sections 7.2.1 and 7.2.7](https://www.nasa.gov/smallsat-institute/sst-soa/thermal-control/)) No fan is needed to blow heat into vacuum, but heat still has to reach that surface: passive heat pipes contain working fluid, and some spacecraft use pumped liquid loops. ([NASA, Thermal Control, sections 7.2.8 and 7.3.4](https://www.nasa.gov/smallsat-institute/sst-soa/thermal-control/))

## Who's Already Up There

- **Starcloud:** Has run inference on an H100 in orbit. ([CNBC, December 2025](https://www.cnbc.com/2025/12/10/nvidia-backed-starcloud-trains-first-ai-model-in-space-orbital-data-centers.html)) Altitude reports conflict: Data Center Dynamics reported 325 km; OrbitalWiki's November 2026 catalogue record gives 496–500 km and 45.4° inclination, a mid-inclination orbit rather than dawn-dusk sun-synchronous. ([Data Center Dynamics](https://www.datacenterdynamics.com/en/news/starcloud-1-satellite-reaches-space-with-nvidia-h100-gpu-now-operating-in-orbit/); [OrbitalWiki, STARCLOUD-1](https://www.orbitalwiki.com/satellites/66303)) It cycles through eclipses and uses batteries. ([OrbitalNodes tracker](https://orbitalnodes.ai/starcloud-1/); [Gunter's Space Page](https://space.skyrocket.de/doc_sdat/starcloud-1.htm))
- **Google Suncatcher:** Proposed system in dawn-dusk sun-synchronous orbit at ~650 km. ([Google Research](https://research.google/blog/exploring-a-space-based-scalable-ai-infrastructure-system-design/)) TPUs on satellite buses developed with Planet, drawing on Planet's Owl bus. ([Planet](https://www.planet.com/pulse/planet-to-build-and-operate-advanced-space-platform-for-project-suncatcher-moonshot/)) Lead: Travis Beals, Senior Director, Paradigms of Intelligence. ([Google Research](https://research.google/blog/exploring-a-space-based-scalable-ai-infrastructure-system-design/)) Future constellation study: 81 satellites in a 1 km-radius formation linked by lasers, mean cluster altitude 650 km; the ground radiation tests used Trillium, Google's v6e TPU. ([Google, Suncatcher paper, sections 2.2–2.3](https://arxiv.org/html/2511.19468)) Google reports that its first prototype launched in October 2026 and returned an AI response, ahead of twin interconnected satellites planned for 2027. ([Google, October 2026 update](https://blog.google/innovation-and-ai/models-and-research/google-research/project-suncatcher-satellite-response/))
- **Axiom:** Pitching orbital data centers as the endgame. ([Axiom Space](https://www.axiomspace.com/orbital-data-center))

Ground support: heat-pipe thermal work, proton-beam radiation testing in labs. ([Google, Suncatcher paper, sections 1.2 and 4.3](https://arxiv.org/html/2511.19468); [NASA, Thermal Control](https://www.nasa.gov/smallsat-institute/sst-soa/thermal-control/))

## The Caveats

- **Radiation-tolerant silicon.** Cosmic rays and solar particles can upset electronics or cause destructive single-event effects before you can SSH in. ([NASA, Single Event Effects Specification](https://nepp.nasa.gov/DocUploads/074CCC9D-51FB-4323-AB81F47E8F06FFDB/DraftSingleEventEffectSpecification.pdf)) Hardening, shielding and error handling matter; this does not mean every accelerator needs a custom radiation-hardened redesign, as Google's tests of commercial Trillium chips illustrate. ([Google, Suncatcher paper, section 2.3](https://arxiv.org/html/2511.19468))
- **Launch mass.** Every kilogram costs money to put up; Google's analysis uses $3,600/kg as its current-launch-price assumption, not a universal tariff. ([Google, Suncatcher paper, section 4.4](https://arxiv.org/html/2511.19468)) For a fixed radiator design and temperature, more heat load requires more area, with mass and deployment constraints attached. ([NASA, Thermal Control, sections 7.1 and 7.2.7](https://www.nasa.gov/smallsat-institute/sst-soa/thermal-control/))
- **Debris and Kessler syndrome risk.** Collisions can create more debris, feeding further collisions. ([NASA, MMOD](https://www.nasa.gov/centers-and-facilities/white-sands/micrometeoroids-and-orbital-debris-mmod/)) Earthjustice's July 2026 account put the satellite population at about 15,000, compared with about 1,400 active satellites in 2015. ([Earthjustice](https://earthjustice.org/press/2026/coalition-calls-for-rigorous-federal-review-of-space-based-data-center-proposals)) In a separate late-2024 survey, Starlink accounted for roughly two-thirds of **observed passes** exceeding the IAU CPS brightness recommendation — not two-thirds of all active satellites. ([Rayworth and colleagues, 2026 preprint, section 1.1](https://arxiv.org/abs/2610.10834))
- **Astronomy backlash:** ESO study (July 2026) — over 1.7 million proposed satellites would have “devastating consequences for astronomy”; its proposed ceiling is about 100,000 faint ones, not a legal cap. ([ESO](https://www.eso.org/public/news/eso2607/)) Vera C. Rubin Observatory already shows satellite streaks and glints in its camera data. ([Rubin Observatory](https://rubinobservatory.org/for-scientists/frequently-asked-questions/leo-sats)) Earthjustice, on behalf of DarkSky International and other groups, petitioned the FCC to pause orbital data center licensing pending a programmatic environmental review. ([Earthjustice](https://earthjustice.org/press/2026/coalition-calls-for-rigorous-federal-review-of-space-based-data-center-proposals)) In a separate order adopted on 30 September 2026, the FCC concluded that its space-based operations authorizations are not major Federal actions under NEPA — placing them outside that review, not finding that they cause no harm. ([FCC 26-64, paragraphs 63–69](https://docs.fcc.gov/public/attachments/FCC-26-64A1.pdf))
- **Laser-link warning:** Increased use of satellite laser communications and glints could add near-infrared pollution for astronomy. ([The impact on astronomy of data centres orbiting Earth, section 3](https://academic.oup.com/mnras/article-pdf/doi/10.1093/mnras/stag819/68200518/stag819.pdf))

## The Irony for the Book

The same compute that needs cooling is threatening one thing we have long taken for granted — a dark sky. The ocean of space is a heat sink, but it's also the ultimate observation deck. ([Google, Suncatcher paper](https://arxiv.org/html/2511.19468); [ESO](https://www.eso.org/public/news/eso2607/)) You can't have both without a fight.

## Open Questions

- Can radiator mass ever beat terrestrial cooling-plus-land cost at scale?
- What's the actual PUE equivalent of a space data center when you count launch energy?
- Who owns orbital real estate, and does the FCC's NEPA dodge hold up in court?
- Does the astronomy community get a seat at the table before the constellation is already up?

**Previous:** [Platform Synthesis]({{< relref "76-platform-synthesis.md" >}}).

## Sources

- IEA, Energy and AI: <https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai>
- NASA, Thermal Control: <https://www.nasa.gov/smallsat-institute/sst-soa/thermal-control/>
- Wikipedia, Data center, History: <https://en.wikipedia.org/wiki/Data_center#History>
- Berkeley Lab, Report to Congress: <https://eta-publications.lbl.gov/publications/report-congress-server-and-data>
- Koomey, 2020 study summary: <https://www.koomey.com/koomey_blog/our-article-on-changes-in-data-center-electricity-use-from-2010-to-2018--out-in-science-magazine-today/>
- Berkeley Lab, 2024 report, executive summary: <https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report.pdf>
- Uptime Institute, 2024 Global Survey, Figure 2: <https://datacenter.uptimeinstitute.com/rs/711-RIA-145/images/2024.GlobalDataCenterSurvey.Report.pdf>
- Pinto and colleagues, iScience: <https://researchportal.ulisboa.pt/en/publications/long-run-electricity-consumption-in-computing-exponential-growth-/>
- UNCTAD, Digital Economy Report 2024, Table III.1: <https://unctad.org/system/files/official-document/der2024_ch03_en.pdf>
- Energy Institute, 2026 review, p. 64: <https://assets.kpmg.com/content/dam/kpmgsites/au/pdf/2026/statistical-review-of-world-energy.pdf>
- Our World in Data, comparing the estimates: <https://ourworldindata.org/how-much-energy-do-data-centers-and-artificial-intelligence-use>
- Berkeley Lab: <https://energyanalysis.lbl.gov/news/berkeley-lab-report-evaluates-increase-electricity-demand-data-centers>
- IEA, 2026 update: <https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary>
- Energy Institute: <https://energyinst.org/exploring-energy/resources/news-centre/media-releases/global-electrification-reaches-tipping-point-as-energy-demand-hits-record-highs-and-regional-paths-diverge>
- Google, Suncatcher paper, sections 1.1–1.2: <https://arxiv.org/html/2511.19468>
- Google Research: <https://research.google/blog/exploring-a-space-based-scalable-ai-infrastructure-system-design/>
- NASA, COBE: <https://science.nasa.gov/mission/cobe/science/>
- CNBC, December 2025: <https://www.cnbc.com/2025/12/10/nvidia-backed-starcloud-trains-first-ai-model-in-space-orbital-data-centers.html>
- Data Center Dynamics: <https://www.datacenterdynamics.com/en/news/starcloud-1-satellite-reaches-space-with-nvidia-h100-gpu-now-operating-in-orbit/>
- OrbitalWiki, STARCLOUD-1: <https://www.orbitalwiki.com/satellites/66303>
- OrbitalNodes tracker: <https://orbitalnodes.ai/starcloud-1/>
- Gunter's Space Page: <https://space.skyrocket.de/doc_sdat/starcloud-1.htm>
- Planet: <https://www.planet.com/pulse/planet-to-build-and-operate-advanced-space-platform-for-project-suncatcher-moonshot/>
- Google, October 2026 update: <https://blog.google/innovation-and-ai/models-and-research/google-research/project-suncatcher-satellite-response/>
- Axiom Space: <https://www.axiomspace.com/orbital-data-center>
- NASA, Single Event Effects Specification: <https://nepp.nasa.gov/DocUploads/074CCC9D-51FB-4323-AB81F47E8F06FFDB/DraftSingleEventEffectSpecification.pdf>
- NASA, MMOD: <https://www.nasa.gov/centers-and-facilities/white-sands/micrometeoroids-and-orbital-debris-mmod/>
- Earthjustice: <https://earthjustice.org/press/2026/coalition-calls-for-rigorous-federal-review-of-space-based-data-center-proposals>
- Rayworth and colleagues, 2026 preprint, section 1.1: <https://arxiv.org/abs/2610.10834>
- ESO: <https://www.eso.org/public/news/eso2607/>
- Rubin Observatory: <https://rubinobservatory.org/for-scientists/frequently-asked-questions/leo-sats>
- FCC 26-64, paragraphs 63–69: <https://docs.fcc.gov/public/attachments/FCC-26-64A1.pdf>
- The impact on astronomy of data centres orbiting Earth, section 3: <https://academic.oup.com/mnras/article-pdf/doi/10.1093/mnras/stag819/68200518/stag819.pdf>
