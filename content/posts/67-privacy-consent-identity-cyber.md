---
title: "Privacy, Consent, Identity, Cyber"
weight: 70
date: 2026-09-06
draft: false
phase: "Privacy / Identity / Consent"
series_index: 69
tags: []
summary: "Privacy, consent, identity, and cybersecurity as engineering evolution on an open network — not a policy pamphlet"
image_prompt: "Clean layered diagram: isolation boundaries, cryptographic keys, identity credentials, and adversarial threat arrows on one stack, modern security-engineering infographic style"
video_prompt: "20-second animation: a shared wire gaining encryption, then authentication, then scoped consent tokens, while an attacker path is blocked at each layer, clean technical motion graphics"
schematics: "Diagram: isolation (OS) → crypto on the wire → identity/auth → consent scopes → adversarial ops as one engineering arc"
---

Wartime crypto (Post 66) was secrecy against a state adversary with a dedicated machine room. The open internet poses a different engineering problem: *many* parties share the wire, the hosts, and the platforms — and some of them are hostile, curious, or simply larger than the user. Privacy, consent, identity, and cybersecurity are names for that problem as it evolved in code and protocols. This is not a policy pamphlet.

## Isolation Came First

Before "privacy product," there was **protection**. Jerome Saltzer and Michael Schroeder's 1975 survey, [*The Protection of Information in Computer Systems*](https://web.mit.edu/Saltzer/www/publications/protection/), framed design principles that still read as engineering law: least privilege, complete mediation, fail-safe defaults, economy of mechanism. Virtual memory (Post 24) and containers (Post 25) are later instances of the same bet — draw a boundary the hardware and kernel enforce, so one program cannot casually read another.

Door out: Saltzer & Schroeder (1975).

## Crypto on a Public Network

Shared networks made the old courier-key model collapse. Whitfield Diffie and Martin Hellman's 1976 paper [*New Directions in Cryptography*](https://ee.stanford.edu/~hellman/publications/24.pdf) made public-key agreement a research object: two parties can establish a shared secret while eavesdroppers hear the exchange. Ronald Rivest, Adi Shamir, and Leonard Adleman followed with RSA (1977/78) — public encryption and signatures that could travel with the message. TLS on today's web is the deployed descendant of that line (with a long trail of protocol revisions), not a separate moral category.

Door out: Diffie–Hellman (1976); the RSA paper; [RFC 8446](https://www.rfc-editor.org/rfc/rfc8446) (TLS 1.3) as a modern door.

## Identity Is a Protocol Problem

"Who are you?" on a network is not a vibe — it is authentication and authorization machinery. Passwords were the early cheap authenticator and remain a breach surface. Needham and Schroeder's authentication work, Kerberos (MIT Project Athena; Steve Miller, Clifford Neuman, and colleagues), and later public-key certificates turned identity into *verifiable claims* machines can check. OAuth and OpenID Connect (IETF / OpenID Foundation specs) then separated "prove who you are" from "grant this app a narrow capability" — consent as a scoped token, not a vague promise.

Named constraint: identity systems fail as engineering when the verifier, the credential, or the recovery path is weaker than the asset they guard. Door out: Kerberos histories from MIT; [RFC 6749](https://www.rfc-editor.org/rfc/rfc6749) (OAuth 2.0).

## Consent as an Interface to Power

Consent shows up in the stack wherever a system needs permission to act across a boundary: cookie jars and same-origin policy in browsers (the web platform's isolation story), permission prompts on devices, and scoped API tokens on platforms. The engineering question is always the same — *what capability was granted, to whom, for how long, and can it be revoked?* — whether the UI copy says "Accept" or the header says `Authorization`. Post 64's governance layer decides names and numbers; this layer decides *who may use them on your behalf*.

## Cybersecurity: Adversarial Systems Engineering

Cybersecurity is what happens when you assume the network, the supply chain, and sometimes the operator are hostile. It reuses everything above — isolation, crypto, identity — under an attacker model: malware, phishing, side channels, vulnerable dependencies, misconfiguration at scale. The discipline's connective tissue is not fear; it is feedback. Vulnerabilities get named (CVE), patched, and regress-tested; abuse is met with rate limits, sandboxing, and monitoring. Dorothy Denning's early intrusion-detection work and the later CERT coordination model are seeds of a *kind*: treat attacks as signals that reshape the system.

Door out: CVE program documentation; classical security-engineering texts that cite Saltzer/Schroeder as foundation.

## Why This Belongs Late in the Journey

You cannot talk honestly about privacy on a platform until the book has built OS isolation, networks, distributed systems, and AI infra. Those chapters are the substrate. This one names the adversarial and consent-shaped constraints that ride on top — so Post 69's platform synthesis can treat privacy engineering as a first-class layer, not an appendix.

