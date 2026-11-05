# Mini-CPU Lab

**License:** CC BY 4.0 (same as the book `LICENSE`).

**Origin:** Original interactive for *How We Got There* (Grok Team / Reed labs desk).
Single-file assembler + step/run emulator in `index.html`. No third-party simulator
code was vendored.

**First import:** git `315ce745df1db31bc2fdec8e78304ef4f016c94b` (2026-08-23,
Benjamin `<benjamin@local>`, “Initial import: From Relays to Attention”). The file
entered the book tree there; later commits added the guided-beat panel and assembler
hardening. No earlier path or renamed upstream was found in this repo’s history.

**ISA note:** The 4-bit opcode map (NOP, LDA, ADD, SUB, STA, LDI, JMP, JC, JZ,
OUT, HLT) follows the educational instruction set popularized by Ben Eater’s
8-bit breadboard computer and related SAP-1-style teaching designs. Credit Ben
Eater for that taught public design. This HTML/JS implementation is original to
this book.

**Not included:** A port of jsBEEBC, Bob Kuczewski’s simulator, Nand2Tetris,
Little Man Computer, or Scott CPU code.

**Unconfirmed:** Which person or agent inside the “Grok team” authored the
pre-Reed 232-line import is not recoverable from git beyond the credit line
above.
