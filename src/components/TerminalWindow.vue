<template>
  <div class="terminal-window" @mousedown="handleTerminalMousedown">
    <div class="terminal-header">
      <div class="terminal-dots">
        <span class="rectangle close"></span>
        <span class="rectangle reduce"></span>
        <span class="rectangle expand"></span>
      </div>
      <span class="terminal-title">terminal</span>
      <span class="dot active blink"></span>
    </div>

    <!-- Terminal Body -->
    <div class="terminal-body" ref="terminalBody">
      <!-- History output -->
      <div v-for="(entry, index) in history" :key="index" class="terminal-entry">
        <!-- Command line -->
        <div class="terminal-line">
          <span class="prompt-user">gael@rothlin</span><span class="prompt-sep">:</span><span class="prompt-path">~</span><span class="prompt-dollar">$</span>
          <span class="command-text">{{ entry.command }}</span>
        </div>
        <!-- Output -->
        <div v-if="entry.output" class="terminal-output-block">
          <div
            v-for="(line, li) in entry.output"
            :key="li"
            class="terminal-output-line"
            :class="line.class"
            v-html="line.text"
          ></div>
        </div>
      </div>

      <!-- Current input line -->
      <div class="terminal-line current-line">
        <span class="prompt-user">gael@rothlin</span><span class="prompt-sep">:</span><span class="prompt-path">~</span><span class="prompt-dollar">$</span>
        <span class="input-wrapper">
          <span class="input-mirror">{{ currentInput }}</span>
          <span class="cursor-block" :class="{ blink: !isTyping }">_</span>
        </span>
        <input
          ref="inputRef"
          v-model="currentInput"
          class="hidden-input"
          @keydown="handleKeydown"
          @input="isTyping = true"
          @blur="isTyping = false"
          autocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          spellcheck="false"
          aria-label="Terminal input"
        />
      </div>

      <!-- Hint message when empty -->
      <div v-if="history.length === 0" class="terminal-hint">
        <span class="hint-text">{{ $t ? $t('home.body.terminalHint') : 'Try typing: cat pourquoi_ce_portfolio.txt' }}</span><br>
        <span class="hint-text">{{ $t ? $t('home.body.terminalHint2') : 'Or: help to see available commands' }}</span><br>
        <span class="hint-text">{{ $t ? $t('home.body.terminalHint3') : 'NB: type clear to clear the terminal and see these hints again' }}</span>
      </div>
    </div>
  </div>
  <div class="terminal-footer">
    <p class="output-muted">{{ $t ? $t('home.body.terminalFooter') : 'This terminal is just for fun and is not a real terminal !' }}</p>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const terminalBody = ref(null);
const inputRef = ref(null);
const currentInput = ref('');
const history = ref([]);
const commandHistory = ref([]);
const historyIndex = ref(-1);
const isTyping = ref(false);


function calculateUptime() {
  const birthDate = new Date(2005, 9, 21);
  const now = new Date();
  const diff = now - birthDate;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  const remainingAfterYears = diff % (1000 * 60 * 60 * 24 * 365.25);
  const months = Math.floor(remainingAfterYears / (1000 * 60 * 60 * 24 * 30.44));

  return `${years} ${t('home.body.terminal.command.nitch.years')} ${months} ${t('home.body.terminal.command.nitch.months')}`;
}

function handleTerminalMousedown(e) {
  if (e.target.closest('a')) return; // laisser le lien gérer son propre click
  e.preventDefault(); // empêche le blur de l'input actuel + évite la sélection de texte
  focusInput();
}

const commands = {
  help: () => [
    { text: 'Available commands:', class: 'output-heading' },
    { text: t('home.body.terminal.help.description'), class: 'output-default' },
    { text: t('home.body.terminal.help.whoami'), class: 'output-default' },
    { text: t('home.body.terminal.help.nitch'), class: 'output-default' },
    { text: t('home.body.terminal.help.ls'), class: 'output-default' },
    { text: t('home.body.terminal.help.cat'), class: 'output-default' },
    { text: t('home.body.terminal.help.internship'), class: 'output-default' },
    { text: t('home.body.terminal.help.clear'), class: 'output-default' },
  ],

  whoami: () => [
    { text: '<span class="output-accent">Gaël Röthlin</span>', class: 'output-default' },
    { text: t('home.body.terminal.whoami.description'), class: 'output-muted' },
    { text: t('home.body.terminal.whoami.current'), class: 'output-muted' },
    { text: t('home.body.terminal.whoami.location'), class: 'output-muted' },
  ],

  ls: () => [
    { text: 'why_this_portfolio.txt', class: 'output-default' },
    { text: 'pourquoi_ce_portfolio.txt', class: 'output-default' },
  ],

  nitch: () => {
    const uptime = calculateUptime();
    
    function createNitchLine(label, padSpace, value) {
      return `<span class="nitch-border">│</span> <span class="nitch-key"> ${label.padEnd(padSpace)} </span> <span class="nitch-border">│</span> <span class="nitch-val">${value}</span>`;
    }
    
    const firstname = {
      label: t('home.body.terminal.command.nitch.firstname.label'),
      value: t('home.body.terminal.command.nitch.firstname.value')
    };
    const lastname = {
      label: t('home.body.terminal.command.nitch.lastname.label'),
      value: t('home.body.terminal.command.nitch.lastname.value')
    };
    const age = {
      label: t('home.body.terminal.command.nitch.age.label')
    };
    const lang = {
      label: t('home.body.terminal.command.nitch.lang.label'),
      value: t('home.body.terminal.command.nitch.lang.value')
    };
    const degree = {
      label: t('home.body.terminal.command.nitch.degree.label'),
      value: t('home.body.terminal.command.nitch.degree.value')
    };
    const status = {
      label:t('home.body.terminal.command.nitch.status.label'),
      text: t('home.body.terminal.command.nitch.status.text'),
      link: t('home.body.terminal.command.nitch.status.link'),
      href: t('home.body.terminal.command.nitch.status.href')
    };
    
    return [
      { text: '<pre class="nitch-art">░░      ░░░       ░░░░░░░░░░░░\n▒  ▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒▒▒▒▒▒▒▒▒▒▒\n▓  ▓▓▓   ▓▓       ▓▓▓▓▓▓▓▓▓▓▓▓\n█  ████  ██  ███  ████████████\n██      ███  ████  ██▀▀▀▀▀▀▀▀█\n</pre>', class: 'output-pre' },
      { text: '<span class="nitch-border">╭──────────────╮</span>', class: 'output-nitch' },
      { text: createNitchLine(firstname.label, 10, firstname.value), class: 'output-nitch' },
      { text: createNitchLine(lastname.label, 10, lastname.value), class: 'output-nitch' },
      { text: createNitchLine(age.label, 11, uptime), class: 'output-nitch' },
      { text: createNitchLine(lang.label, 10, lang.value), class: 'output-nitch' },
      { text: createNitchLine(degree.label, 11, degree.value), class: 'output-nitch' },
      { text: '<span class="nitch-border">├──────────────┤</span>', class: 'output-nitch' },
      { text: `<span class="nitch-border">│</span> <span class="nitch-key"> ${status.label} </span>   <span class="nitch-border">│</span> ${status.text}</span>`, class: 'output-nitch' },
      { text: '<span class="nitch-border">╰──────────────╯</span>', class: 'output-nitch' },
    ];
  },

  cat: (args) => {
    if (!args || args.length === 0) {
      return [{ text: 'cat: missing operand', class: 'output-error' }];
    }
    const file = args[0];
    if (file === 'pourquoi_ce_portfolio.txt') {
      return [
        { text: 'Ce site est développé dans le cadre de mon projet de Portfolio', class: 'output-default' },
        { text: 'durant les trois années du BUT Informatique.', class: 'output-default' },
        { text: '<br>', class: 'output-default' },
        { text: "Il sera continuellement mis à jour pour refléter mes projets", class: 'output-default' },
        { text: "académiques et personnels, et servir de vitrine de mon parcours.", class: 'output-default' },
      ];
    } else if (file === "why_this_portfolio.txt") {
      return [
        { text: 'This website is developed as part of my Portfolio project', class: 'output-default' },
        { text: 'during the three years of my Computer Science degree.', class: 'output-default' },
        { text: '<br>', class: 'output-default' },
        { text: "It will be continuously updated to reflect my academic", class: 'output-default' },
        { text: "and personal projects, and serve as a showcase of my journey.", class: 'output-default' },
      ];
    }
    return [{ text: `cat: ${file}: No such file or directory`, class: 'output-error' }];
  },

  // joke rm -rf /
  rm: (args) => {
    if (args[0] === '-rf' && args[1] === '/') {
      return [
        { text: 'rm: it is not possible to remove the root directory without sudo', class: 'output-error' },
        { text: 'Nice try though >:(', class: 'output-muted' },
      ];
    }
    return [{ text: `rm: cannot remove '${args.join(' ')}': No such file or directory`, class: 'output-error' }];
  },

  // joke sudo rm -rf /
  sudo: (args) => {
    if (args[0] === 'rm' && args[1] === '-rf' && args[2] === '/') {
      return [
        { text: 'sudo: Really ? Why though ?', class: 'output-error' },
        { text: 'Nuking the system...', class: 'output-muted' },
        setTimeout(() => {
          history.value.push({
            output: [
              { text: 'Just kidding, I won\'t do that :)', class: 'output-muted' },
            ]
          });
        }, 2000)        
      ];
    }
    return [{ text: `sudo: command not found: ${args[0]}`, class: 'output-error' }];
  },

  // french command
  stage: (args) => {
    if (!args || args.length === 0) {
      return [
        { text: 'stage: argument manquant', class: 'output-error' },
        { text: 'Usage: stage [organisation]', class: 'output-default' },
        { text: 'Organisations disponibles :', class: 'output-default' },
        { text: '- ANI & Low-Tech', class: 'output-default' },
        { text: '- Euphron', class: 'output-default' },
        { text: 'Exemple : stage euphron', class: 'output-muted' },
        // --redirect flag
        { text: 'Vous pouvez aussi utiliser le flag --redirect pour ouvrir ma présentation de stage dans cette entreprise :', class: 'output-default' },
        { text: 'Exemple : stage euphron --redirect', class: 'output-muted' },
      ];
    }

    const organisation = args[0].toLowerCase();
    const redirectIndex = args.indexOf('--redirect');

    if (organisation === 'ani' || organisation === 'low-tech' || organisation === 'ani&low-tech' || organisation === 'ani&lowtech' || organisation === 'ani-lowtech' || organisation === 'anilowtech') {
      if (redirectIndex !== -1) {
        // open /internship/ani in a new tab
        window.open('/internship/ani', '_blank');
        return [{ text: 'Redirection vers la présentation de stage...', class: 'output-default' }];
      }
      return [
        { text: 'ANI & Low-Tech', class: 'output-heading' },
        { text: t('home.body.terminal.command.internship.ani.company'), class: 'output-default' },
        { text: t('home.body.terminal.command.internship.ani.duration'), class: 'output-default' },
        { text: t('home.body.terminal.command.internship.ani.description'), class: 'output-default' },
      ]
    }

    if (organisation === 'euphron') {
      if (redirectIndex !== -1) {
        // open /internship/euphron in a new tab
        window.open('/internship/euphron', '_blank');
        return [{ text: 'Redirection vers la présentation de stage...', class: 'output-default' }];
      }
      return [
        { text: 'Euphron', class: 'output-heading' },
        { text: t('home.body.terminal.command.internship.euphron.company'), class: 'output-default' },
        { text: t('home.body.terminal.command.internship.euphron.duration'), class: 'output-default' },
        { text: t('home.body.terminal.command.internship.euphron.description'), class: 'output-default' },
      ];
    }
  },

  // english command
  internship: (args) => {
    if (!args || args.length === 0) {
      return [
        { text: 'internship: missing operand', class: 'output-error' },
        { text: 'Usage: internship [company]', class: 'output-default' },
        { text: 'Available companies:', class: 'output-default' },
        { text: '- ANI & Low-Tech', class: 'output-default' },
        { text: '- Euphron', class: 'output-default' },
        { text: 'Example: internship euphron', class: 'output-muted' },
        // --redirect flag
        { text: 'You can also use the --redirect flag to open my internship presentation in this company:', class: 'output-default' },
        { text: 'Example: internship euphron --redirect', class: 'output-muted' },
      ];
    }

    const organisation = args[0].toLowerCase();
    const redirectIndex = args.indexOf('--redirect');

    if (organisation === 'ani' || organisation === 'low-tech' || organisation === 'ani&low-tech' || organisation === 'ani&lowtech' || organisation === 'ani-lowtech' || organisation === 'anilowtech') {
      if (redirectIndex !== -1) {
        // open /internship/ani in a new tab
        window.open('/internship/ani', '_blank');
        return [{ text: 'Redirecting to internship presentation...', class: 'output-default' }];
      }
      return [
        { text: 'ANI & Low-Tech', class: 'output-heading' },
        { text: t('home.body.terminal.command.internship.ani.company'), class: 'output-default' },
        { text: t('home.body.terminal.command.internship.ani.duration'), class: 'output-default' },
        { text: t('home.body.terminal.command.internship.ani.description'), class: 'output-default' },
      ]
    }

    if (organisation === 'euphron') {
      if (redirectIndex !== -1) {
        // open /internship/euphron in a new tab
        window.open('/internship/euphron', '_blank');
        return [{ text: 'Redirecting to internship presentation...', class: 'output-default' }];
      }
      return [
        { text: 'Euphron', class: 'output-heading' },
        { text: t('home.body.terminal.command.internship.euphron.company'), class: 'output-default' },
        { text: t('home.body.terminal.command.internship.euphron.duration'), class: 'output-default' },
        { text: t('home.body.terminal.command.internship.euphron.description'), class: 'output-default' },
      ];
    }
  }
};

function executeCommand(raw) {
  const trimmed = raw.trim();
  if (!trimmed) return;

  // Save to command history
  commandHistory.value.unshift(trimmed);
  historyIndex.value = -1;

  const parts = trimmed.split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);

  if (cmd === 'clear') {
    history.value = [];
    return;
  }

  let output;
  if (commands[cmd]) {
    output = commands[cmd](args);
  } else {
    output = [{ text: `bash: command not found: ${cmd}`, class: 'output-error' }];
  }

  history.value.push({ command: trimmed, output });

  nextTick(() => {
    scrollToBottom();
  });
}

function handleKeydown(e) {
  isTyping.value = true;

  if (e.key === 'Enter') {
    e.preventDefault();
    const cmd = currentInput.value;
    currentInput.value = '';
    executeCommand(cmd);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (historyIndex.value < commandHistory.value.length - 1) {
      historyIndex.value++;
      currentInput.value = commandHistory.value[historyIndex.value];
    }
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (historyIndex.value > 0) {
      historyIndex.value--;
      currentInput.value = commandHistory.value[historyIndex.value];
    } else {
      historyIndex.value = -1;
      currentInput.value = '';
    }
  }
}

function focusInput() {
  inputRef.value?.focus();
}

function scrollToBottom() {
  if (terminalBody.value) {
    terminalBody.value.scrollTop = terminalBody.value.scrollHeight;
  }
}

onMounted(() => {
  focusInput();
});
</script>

<style scoped>
.terminal-window {
  max-width: 800px;
  margin: 0 auto;
  background: rgba(5, 6, 9, 0.95);
  border: 1px solid rgba(79, 172, 254, 0.25);
  border-radius: 8px;
  overflow: hidden;
  cursor: text;
  box-shadow: 0 0 40px rgba(79, 172, 254, 0.08), 0 20px 60px rgba(0, 0, 0, 0.5);
}

/* ── Header ── */
.terminal-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 20px;
  background: rgba(79, 172, 254, 0.05);
  border-bottom: 1px solid rgba(79, 172, 254, 0.15);
  user-select: none;
}

.terminal-dots {
  display: flex;
  gap: 8px;
}

.rectangle {
  width: 16px;
  height: 8px;
  border-radius: 2px;
}

.rectangle.close  { background: #4facfe; }
.rectangle.reduce { background: #00f2fe; }
.rectangle.expand { background: #f0f0f0; }

.terminal-title {
  font-family: var(--font-mono, monospace);
  font-size: 12px;
  color: #6a7c92;
  flex: 1;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.dot.active { background: rgba(54, 255, 54, 1); }

.terminal-footer {
  font-size: small;
  text-align: center;
  padding: 12px 20px;
  font-style: italic;
}

.blink {
  animation: blink 1.5s infinite;
}

@keyframes blink {
  0%, 50%  { opacity: 1; }
  51%, 100% { opacity: 0.3; }
}

/* ── Body ── */
.terminal-body {
  padding: 24px 28px;
  font-family: var(--font-mono, 'Space Mono', monospace);
  font-size: 13px;
  line-height: 1.7;
  min-height: 280px;
  max-height: 480px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(79, 172, 254, 0.3) transparent;
}

.terminal-body::-webkit-scrollbar { width: 6px; }
.terminal-body::-webkit-scrollbar-track { background: transparent; }
.terminal-body::-webkit-scrollbar-thumb { background: rgba(79, 172, 254, 0.3); border-radius: 3px; }

/* ── Prompt ── */
.terminal-line {
  display: flex;
  align-items: baseline;
  gap: 0;
  flex-wrap: wrap;
  margin-bottom: 2px;
}

.prompt-user   { color: #4facfe; font-weight: 700; }
.prompt-sep    { color: #6a7c92; }
.prompt-path   { color: #a78bfa; }
.prompt-dollar { color: #6a7c92; margin-right: 8px; }

.command-text {
  color: #e8eef5;
}

/* ── Input ── */
.input-wrapper {
  position: relative;
  display: inline-flex;
  align-items: baseline;
  color: #e8eef5;
  flex: 1;
}

.input-mirror {
  white-space: pre;
}

.cursor-block {
  color: #4facfe;
  font-size: 13px;
  line-height: 1;
  margin-left: 1px;
}

.cursor-block.blink {
  animation: cursorBlink 1s infinite;
}

@keyframes cursorBlink {
  0%, 50%  { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.hidden-input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: none;
  outline: none;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  color: transparent;
  caret-color: transparent;
  cursor: text;
}

/* ── Output ── */
.terminal-entry {
  margin-bottom: 4px;
}

.terminal-output-block {
  margin: 4px 0 12px 0;
}

.terminal-output-line {
  line-height: 1.6;
  white-space: pre-wrap;
}

/* Output classes */
:deep(a) {
  color: #4facfe;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.2s;
  pointer-events: auto;
}

:deep(a:hover) {
  color: #00f2fe;
}

:deep(.output-heading) { color: #4facfe; font-weight: 700; margin-bottom: 4px; }
:deep(.output-default) { color: #a8b5c9; }
:deep(.output-muted)   { color: #6a7c92; }
:deep(.output-error)   { color: #f87171; }
:deep(.output-accent)  { color: #4facfe; font-weight: 700; }
:deep(.output-dim)     { color: #4a5568; }
:deep(.output-pre)     { color: #a8b5c9; }
:deep(.output-nitch)   { color: #a8b5c9; }

:deep(.cmd-name)  { color: #4facfe; font-weight: 700; }
:deep(.cmd-dim)   { color: #6a7c92; }
:deep(.output-accent) { color: #4facfe; }

/* Nitch */
:deep(.nitch-art) {
  color: #4facfe;
  font-family: var(--font-mono, monospace);
  font-size: 12px;
  line-height: 1.4;
  margin: 0 0 8px 0;
  white-space: pre;
}

:deep(.nitch-border) { color: rgba(79, 172, 254, 0.5); }
:deep(.nitch-key)    { color: #4facfe; }
:deep(.nitch-val)    { color: #e8eef5; }

:deep(.color-dot) {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  vertical-align: middle;
}
:deep(.c1) { background: #1e1e2e; }
:deep(.c2) { background: #f38ba8; }
:deep(.c3) { background: #a6e3a1; }
:deep(.c4) { background: #f9e2af; }
:deep(.c5) { background: #4facfe; }
:deep(.c6) { background: #cba6f7; }
:deep(.c7) { background: #94e2d5; }
:deep(.c8) { background: #cdd6f4; }

/* ── Hint ── */
.terminal-hint {
  margin-top: 12px;
  padding: 10px 16px;
  border: 1px dashed rgba(79, 172, 254, 0.4);
  border-radius: 4px;
  display: inline-block;
}

.hint-text {
  font-family: var(--font-mono, monospace);
  font-size: 12px;
  color: rgba(79, 172, 254, 0.7);
  font-style: italic;
}

/* ── Responsive ── */
@media (max-width: 600px) {
  .terminal-body {
    padding: 16px;
    font-size: 12px;
  }
}
</style>
