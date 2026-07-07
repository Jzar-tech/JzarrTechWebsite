"use strict";
/**
 * JzarrTech AI Agent Bot - Interactive Prompting & Typewriter Engine
 * Written in TypeScript for maximum type safety, modular AI UI control, and realistic prompting cadence.
 */
class AIPromptEngine {
    constructor(config) {
        this.targetElement = null;
        this.commandElement = null;
        this.statusElement = null;
        this.latencyElement = null;
        this.pillElements = null;
        this.currentGoalIndex = 0;
        this.currentText = '';
        this.isDeleting = false;
        this.isPaused = false;
        this.timerId = null;
        this.config = config;
        this.init();
    }
    init() {
        this.targetElement = document.querySelector(this.config.headingTargetSelector);
        if (this.config.commandTextSelector) {
            this.commandElement = document.querySelector(this.config.commandTextSelector);
        }
        if (this.config.statusTextSelector) {
            this.statusElement = document.querySelector(this.config.statusTextSelector);
        }
        if (this.config.latencySelector) {
            this.latencyElement = document.querySelector(this.config.latencySelector);
        }
        if (this.config.pillSelector) {
            this.pillElements = document.querySelectorAll(this.config.pillSelector);
        }
        if (!this.targetElement) {
            console.warn('AIPromptEngine: Target heading element not found in DOM.');
            return;
        }
        this.attachPillListeners();
        this.updateUIForCurrentGoal();
        this.startLoop();
    }
    attachPillListeners() {
        if (!this.pillElements)
            return;
        this.pillElements.forEach((pill, idx) => {
            pill.addEventListener('click', () => {
                this.selectGoal(idx);
            });
        });
    }
    selectGoal(index) {
        if (index < 0 || index >= this.config.goals.length)
            return;
        if (this.timerId !== null) {
            window.clearTimeout(this.timerId);
        }
        this.currentGoalIndex = index;
        this.isDeleting = false;
        this.currentText = '';
        this.updateUIForCurrentGoal();
        this.startLoop();
    }
    updateUIForCurrentGoal() {
        const goal = this.config.goals[this.currentGoalIndex];
        if (this.commandElement) {
            this.commandElement.textContent = `"${goal.command}"`;
        }
        if (this.statusElement) {
            this.statusElement.textContent = `✨ Status: ${goal.status}`;
        }
        if (this.latencyElement) {
            this.latencyElement.textContent = `⚡ ${goal.latency}`;
        }
        if (this.pillElements) {
            this.pillElements.forEach((pill, idx) => {
                if (idx === this.currentGoalIndex) {
                    pill.classList.add('active');
                }
                else {
                    pill.classList.remove('active');
                }
            });
        }
    }
    startLoop() {
        const goal = this.config.goals[this.currentGoalIndex];
        const fullText = goal.text;
        if (!this.isDeleting && this.currentText === fullText) {
            // Finished typing current goal, pause before deleting
            if (!this.isPaused) {
                this.isPaused = true;
                this.timerId = window.setTimeout(() => {
                    this.isPaused = false;
                    this.isDeleting = true;
                    this.startLoop();
                }, this.config.pauseDurationMs);
                return;
            }
        }
        if (this.isDeleting && this.currentText === '') {
            // Finished deleting, move to next goal
            this.isDeleting = false;
            this.currentGoalIndex = (this.currentGoalIndex + 1) % this.config.goals.length;
            this.updateUIForCurrentGoal();
            this.timerId = window.setTimeout(() => {
                this.startLoop();
            }, 400);
            return;
        }
        // Calculate next character substring
        const nextLength = this.isDeleting ? this.currentText.length - 1 : this.currentText.length + 1;
        this.currentText = fullText.substring(0, nextLength);
        if (this.targetElement) {
            this.targetElement.textContent = this.currentText;
        }
        // Add human-like latency randomness to typing cadence
        let baseSpeed = this.isDeleting ? this.config.deleteSpeedMs : this.config.typeSpeedMs;
        const randomVariance = Math.floor(Math.random() * (this.isDeleting ? 20 : 45)) - 15;
        const currentSpeed = Math.max(25, baseSpeed + randomVariance);
        this.timerId = window.setTimeout(() => {
            this.startLoop();
        }, currentSpeed);
    }
}
// Expose to window for global access if needed
window.AIPromptEngine = AIPromptEngine;
// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const goals = [
        {
            text: 'Business Automation.',
            command: 'Deploy AI Agent for Business Automation',
            status: 'Generating Autonomous Workflow...',
            latency: '14ms',
            category: 'automation'
        },
        {
            text: '24/7 Lead Qualification.',
            command: 'Qualify incoming leads via AI conversation',
            status: 'Intent Engine Active // Scoring Leads...',
            latency: '11ms',
            category: 'crm'
        },
        {
            text: 'Autonomous CRM Workflows.',
            command: 'Sync live customer chat to CRM pipeline',
            status: 'Database Connected // Updating Stages...',
            latency: '16ms',
            category: 'crm'
        },
        {
            text: 'Instant Customer Support.',
            command: 'Resolve support queries with human fallback',
            status: 'Knowledge Base Loaded // Answering 24/7...',
            latency: '12ms',
            category: 'support'
        },
        {
            text: 'Finance & Ops Scaling.',
            command: 'Automate invoice verification and billing logs',
            status: 'Audit Guard Enabled // Verifying Rules...',
            latency: '18ms',
            category: 'finance'
        },
        {
            text: 'WhatsApp & Web AI Routing.',
            command: 'Omnichannel routing across WhatsApp & Website',
            status: 'Webhooks Active // Routing Messages...',
            latency: '13ms',
            category: 'routing'
        }
    ];
    new AIPromptEngine({
        headingTargetSelector: '.js-ai-heading-target',
        commandTextSelector: '#promptCommandText',
        statusTextSelector: '#promptStatusText',
        latencySelector: '#promptLatency',
        pillSelector: '.prompt-pill',
        typeSpeedMs: 75,
        deleteSpeedMs: 35,
        pauseDurationMs: 3200,
        goals: goals
    });
});
