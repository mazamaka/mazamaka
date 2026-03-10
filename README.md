# Hi 👋, I'm Maksym

I'm a Full-Stack Python Developer with 8+ years of experience building production systems end-to-end. Originally from Kyiv, Ukraine 🇺🇦, currently based in Budapest, Hungary 🇭🇺.

- 🔧 Building microservices with **FastAPI**, AI-powered browser automation with **Claude/GPT + browser-use**
- 🛡️ Deep expertise in **antifraud & fingerprinting**: Canvas, WebGL, Audio, TLS spoofing, bot-detection bypass, CDP-level manipulation
- 🤖 AI-first development with **Claude Code** + custom **14-agent system** (architect, developer, reviewer, deployer, tester, debugger, devops, and more)
- 🐳 Full DevOps: Docker, GitLab CI/CD, Prometheus/Grafana, Linux servers
- 📦 **40+ production projects** shipped, **3,500+ Python files**
- 💬 Ask me about **antifraud systems, browser fingerprinting, AI automation, Python microservices**
- 📫 Reach me: [Telegram @Mazamaka](https://t.me/Mazamaka) · [LinkedIn](https://linkedin.com/in/max-bob-python) · mazamaka603@gmail.com
- 📄 Check out my [Resume](https://github.com/mazamaka/resume) (Full / Standard / Compact × EN / RU)

---

### 🛡️ Antifraud & Fingerprinting

This is my core expertise — I understand how antifraud systems work from the inside and build tools to analyze, monitor, and bypass them:

| Project | Description |
|---------|-------------|
| [**nodriver-antidetect**](https://github.com/mazamaka/nodriver-antidetect) | Custom antidetect browser with CDP-level fingerprint spoofing (CreepJS: headless 0%, stealth 0%) |
| [**antifraud-spy**](https://github.com/mazamaka/antifraud-spy) | Chrome Extension that monitors antifraud/fingerprinting API calls in real-time |
| [**ipqs-checker**](https://github.com/mazamaka/ipqs-checker) | Fingerprint quality checker — IPQS, FingerprintPro, AntCaptcha, CreepJS (FastAPI + browser extensions) |
| [**detect-expert-client**](https://github.com/mazamaka/detect-expert-client) | Python client for detect.expert with Cloudflare bypass via TLS fingerprinting |
| [**octo-mcp**](https://github.com/mazamaka/octo-mcp) | MCP Server for Octo Browser — 40+ AI tools for antidetect browser management |
| [**mobile-cloaking**](https://github.com/mazamaka/mobile-cloaking) | Mobile Cloaking API — backend for iOS apps with geo-targeting and cloaking |

**What I work with:** Canvas/WebGL/Audio noise injection, Navigator & Screen spoofing, CDP marker removal (`cdc_*`, `__webdriver_*`), `window.chrome` emulation, Docker GPU (NVIDIA) for real WebGL rendering in headless, TLS fingerprinting, antifraud endpoint analysis (Apple, Google).

**Knowledge base:** DNS fingerprinting, WebGPU, WASM fingerprints, TCP/UDP/QUIC network fingerprints (M1D/M1D1), VPN/Proxy detection methods, VM detection & bypass.

---

### 🤖 AI & Automation

| Project | Description |
|---------|-------------|
| [**browser-automation-system**](https://github.com/mazamaka/browser-automation-system) | Self-learning browser automation with AI (FastAPI + React + browser-use + Claude) |
| [**weekly-report-agent**](https://github.com/mazamaka/weekly-report-agent) | CLI agent: git logs → Claude AI analysis → ClickUp tasks |

---

### 🔧 Backend & Tools

| Project | Description |
|---------|-------------|
| [**5-google-logflow**](https://github.com/mazamaka/5-google-logflow) | Centralized log collection service (FastAPI + PostgreSQL + MinIO) |
| [**Flipper**](https://github.com/mazamaka/Flipper) | FastAPI backend for Flipper Zero SubGHz control |
| [**url_validator**](https://github.com/mazamaka/url_validator) | URL validation service with Prometheus/Grafana monitoring |
| [**pdf_linkchecker_docker**](https://github.com/mazamaka/pdf_linkchecker_docker) | Docker-based PDF link validator with Prometheus monitoring |
| [**virustotal-scraper**](https://github.com/mazamaka/virustotal-scraper) | VirusTotal file scanner via browser automation and API |
| [**car_iaai**](https://github.com/mazamaka/car_iaai) | Async IAA auto auction scraper (aiohttp + SOCKS5 proxy) |
| [**company_classification**](https://github.com/mazamaka/company_classification) | NLP company classifier using zero-shot transformers |

---

### 🔒 Private / Production Projects

These are closed-source projects built for production. Showing scale and expertise:

**Google Ads Farm Ecosystem** — 5 services managing hundreds of ad accounts:
| Project | Scale | Description |
|---------|-------|-------------|
| google-admin | 555 .py | Full management platform: Starlette Admin, 40+ DB tables, audit, payment providers, task engine |
| google-client | 126 .py | AI task runner: browser-use + Claude/GPT via Octo Browser, LLM cost tracking |
| google-client-ai | 120 .py | Next-gen AI client with advanced browser-use strategies |
| google-logflow | 30 .py | Centralized log collection (FastAPI + PostgreSQL + MinIO) |
| chrome-pf-api | 40 .py | Chrome behavioral factor emulation and metrics analysis |
| checker-chrome-pf-api | 25 .py | Auto health-checker with restart for failed emulations |

**Antifraud & Automation Farms:**
| Project | Scale | Description |
|---------|-------|-------------|
| apple_farm | 167 .py | Apple Developer registration pipeline — SMS providers, fingerprint analysis (IPQS/FP Pro/AntCpt), antifraud bypass |
| apple-checker | 30 .py | Apple account verification and fingerprint quality checker |
| AutoLand | 80 .py | AI website auto-generator (GPT + Claude + Gemini) — landing pages with text + images |
| white-page-generator | 60 .py | Automated landing page builder with AI content |
| mobile-cloaking *(public)* | 40 .py | Mobile cloaking backend for iOS (geo-targeting, offer selection) |

**Telegram Bots (7+):**
| Project | Description |
|---------|-------------|
| recruiter-bot | Recruiting funnel with surveys, MinIO resume storage, Google Sheets export |
| account-issuance-bot | Account distribution bot (Google Sheets + MySQL sync) |
| income-vacancies-bot | Payment/vacancy approval bot with admin panel |
| ugc-talent-hub-bot | UGC creator onboarding bot |
| daily-report-bot | Multi-handler daily report aggregator |
| domain-bot | Domain management via Cloudflare API + DNS |
| sim-bank-bot | SIM card automation (Flask + Telegram bot + admin panel) |

**Blockchain & Trading:**
| Project | Description |
|---------|-------------|
| Solana copy-trading bot | Automated trade analysis and execution on Solana |
| Solana sniper bot | MVP: simulation API, trade storage, TP/SL strategies, analytics |
| Pump.fun trading bot | Automated trading on pump.fun |

**Infrastructure:**
| Project | Description |
|---------|-------------|
| InkHub | Full-stack content platform (FastAPI + React) |
| InkHub-Scripts | AWS S3 image processing pipelines (parallel PNG→AVIF conversion) |
| InkHub-Monitor | Platform health monitoring service |
| Temporal workflows | Distributed workflow orchestration for automation tasks |
| AI Desktop Agent | AI agent for desktop automation |

---

### 📊 Tech Stack

```
Backend:        Python, FastAPI, Flask, SQLAlchemy (async), Celery, RabbitMQ, Temporal
Databases:      PostgreSQL, Redis, MongoDB, MySQL
AI/LLM:         Claude API/Code, OpenAI GPT-4, browser-use, multi-agent systems
Antifraud:      CDP spoofing, Canvas/WebGL/Audio/TLS fingerprinting, bot-detection bypass
Automation:     Playwright, Selenium, nodriver, Octo Browser API, CDP
Frontend:       React, TypeScript, Chrome Extensions (MV3), HTMX, Jinja2
DevOps:         Docker, GitLab CI/CD, Nginx, Portainer, Prometheus/Grafana, Linux
Blockchain:     Solana (copy-trading bot), Web3
Bots:           aiogram 3, Pyrogram, Telethon
```

---

---

<p align="center">
  <a href="https://t.me/Mazamaka"><img src="https://img.shields.io/badge/Telegram-@Mazamaka-2CA5E0?style=flat&logo=telegram&logoColor=white" /></a>
  <a href="https://linkedin.com/in/max-bob-python"><img src="https://img.shields.io/badge/LinkedIn-max--bob--python-0A66C2?style=flat&logo=linkedin&logoColor=white" /></a>
  <a href="mailto:mazamaka603@gmail.com"><img src="https://img.shields.io/badge/Email-mazamaka603@gmail.com-EA4335?style=flat&logo=gmail&logoColor=white" /></a>
  <a href="https://github.com/mazamaka/resume"><img src="https://img.shields.io/badge/Resume-PDF%20%2F%20MD-181717?style=flat&logo=github&logoColor=white" /></a>
</p>
