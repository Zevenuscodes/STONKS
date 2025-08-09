# STONKS — Stock Span Visualizer

> Learn and **see** how the classic **Stock Span Problem** works, step by step. Enter prices, watch the stack evolve, and understand the intuition behind the algorithm.

<p align="left">
  <a href="#-demo">Demo</a> •
  <a href="#-features">Features</a> •
  <a href="#-how-it-works">How it works</a> •
  <a href="#-quickstart">Quickstart</a> •
  <a href="#-project-structure">Project structure</a> •
  <a href="#-roadmap">Roadmap</a> •
  <a href="#-contributing">Contributing</a> •
  <a href="#-license">License</a>
</p>

---

## ✨ Demo

- **Live:** https://stonks.vercel.app/
- **Screenshots / GIFs:**  
  - `public/preview-1.png` 
  - `public/preview-2.gif` — Step-by-step stack visualization


---

## 🔥 Features

- **Interactive input:** Paste a comma-separated list of prices.
- **Monotonic stack visualization:** Watch push/pop operations in real time.
- **Education mode:** Plain-English explanation for each step.
- **Examples gallery:** One-click sample arrays to try.
- **Dark mode** (optional if you add it).
- **Zero backend required** for core visualization.

---

## 🧠 How it works

The **Stock Span** of day *i* is the number of consecutive days (including *i*) the price has been **≤ today’s price** when looking **backwards**.

We use a **monotonic decreasing stack** holding indices of days with **strictly greater** prices:

1. For each day `i`, while stack not empty **and** `price[i] >= price[stack.top()]`, **pop**.
2. If stack becomes empty, span = `i + 1` (no greater price to the left).  
   Else span = `i - stack.top()` (distance to last greater).
3. **Push** `i`.

**Example**  
Input: `100, 80, 60, 70, 60, 75, 85`  
Spans: `1, 1, 1, 2, 1, 4, 6`  
Time complexity: **O(n)** (each index is pushed & popped at most once).

---

## 🧰 Tech Stack

- **Next.js** (React)
- **Tailwind CSS** (styling)


---

## 🚀 Quickstart

> Requires **Node 18+** and **npm** (or `pnpm`/`yarn`).

```bash
# 1) Clone
git clone https://github.com/Zevenuscodes/STONKS.git
cd STONKS

# 2) Install
npm install
# or: pnpm install / yarn

# 3) Dev
npm run dev
# open http://localhost:3000

# 4) Build & Start (prod)
npm run build
npm start

