# Sagittarius

> Local AI Workspace — private, model-agnostic, zero telemetry.

---

## Overview

Sagittarius is a desktop-oriented web application that connects to a local [Ollama](https://ollama.com) instance to provide AI-assisted workspaces. All inference runs locally — no cloud API keys, no data leaving the machine.

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Vue 3 (Composition API) |
| Routing | Vue Router |
| State | Composables + localStorage |
| Styling | Scoped CSS + CSS custom properties |
| Markdown | marked + highlight.js |
| AI backend | Ollama (local LLM server) |

---

## Features

### Model management
- Connects to any Ollama instance (local, LAN, or remote URL)
- Lists available models and persists the active selection
- Pull new models directly from the UI with real-time layer-by-layer progress

### Chat
- Persistent chat history per workspace, stored in localStorage
- Streaming responses with a live cursor indicator
- Markdown rendering with syntax highlighting (highlight.js)
- Multi-chat sessions with create / select / delete

### Workspaces
- **Code** — coding assistant with system prompt context
- **Mail** — email drafting assistant
- **Calendar** — planned

### UI
- Collapsible sidebar with animated transitions
- Dark theme built on CSS custom properties (`--beige`, `--orange`, `--formula-red`, …)
- Three custom fonts: Argesta (serif), Caskaydia (sans), Silka (mono)
- Responsive prompt bar (auto-resize, Shift+Enter for newline)

---

## Data flow

```
User input
    │
    ▼
submitPrompt()          ← useChat composable
    │
    ├─ creates/selects chat object
    │
    ▼
streamChat()            ← POST /api/chat to Ollama
    │
    ├─ reads NDJSON stream
    ├─ appends tokens to reactive message
    │
    ▼
ChatView renders        ← marked + hljs
```

---

## Configuration

The Ollama host defaults to `http://localhost:11434` and can be changed at runtime via the Settings modal. The value is persisted under `sagittarius:settings` in localStorage.

---

## Roadmap

- [ ] Calendar workspace
- [ ] Per-workspace system prompts
- [ ] Attachment / file context support
- [ ] Export chat to Markdown / PDF