<template>
    <div class="project-book">
        <div class="header-section">
            <h1>Mes Projets</h1>
            <button @click="refreshProjects" :disabled="loading" class="refresh-btn">
                {{ loading ? 'Chargement...' : 'Rafraîchir' }}
            </button>
        </div>

        <div v-if="loading && projects.length === 0" class="loading">
            Chargement des projets...
        </div>

        <div v-else-if="error" class="error">
            <p>{{ error }}</p>
            <button @click="refreshProjects">Réessayer</button>
        </div>

        <div v-else-if="projects.length === 0" class="no-projects">
            Aucun projet trouvé.
        </div>

        <div v-else class="projects-grid">
            <article v-for="project in projects" :key="project.id" class="project-card">
                <div class="card-header">
                    <h2>{{ project.name }}</h2>
                    <span v-if="project.language" class="language-badge">{{ project.language }}</span>
                </div>
                <p class="description">{{ project.description }}</p>
                <div class="card-footer">
                    <div class="stats">
                        <span v-if="project.stars > 0" class="stat">★ {{ project.stars }}</span>
                    </div>
                    <a :href="project.url" target="_blank" rel="noopener noreferrer" class="project-link">
                        Voir sur GitHub →
                    </a>
                </div>
                <div v-if="project.topics.length > 0" class="topics">
                    <span v-for="topic in project.topics" :key="topic" class="topic-badge">
                        {{ topic }}
                    </span>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
import { getPublicProjectsWithDescription, clearProjectsCache } from '@/services/githubService.js';

export default {
    name: 'ProjectBookView',
    data() { 
        return {
            projects: [],
            loading: false,
            error: null
        }
    },
    mounted() {
        this.loadProjects();
    },
    methods: {
        async loadProjects(forceRefresh = false) {
            this.loading = true;
            this.error = null;
            
            try {
                this.projects = await getPublicProjectsWithDescription(forceRefresh);
            } catch (error) {
                this.error = 'Une erreur est survenue lors du chargement des projets. Veuillez réessayer.';
                console.error(error);
            } finally {
                this.loading = false;
            }
        },
        refreshProjects() {
            clearProjectsCache();
            this.loadProjects(true);
        }
    }
}
</script>
<style scoped>
.project-book {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.header-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.header-section h1 {
    margin: 0;
    font-size: 2.5rem;
    color: var(--text-primary, #333);
}

.refresh-btn {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
}

.refresh-btn:hover:not(:disabled) {
    background-color: #0056b3;
}

.refresh-btn:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
}

.loading,
.error,
.no-projects {
    text-align: center;
    padding: 2rem;
    font-size: 1.1rem;
    color: var(--text-secondary, #666);
}

.error {
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    color: #721c24;
    border-radius: 4px;
}

.error button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #721c24;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
}

.error button:hover {
    background-color: #5a1419;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.project-card {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
}

.card-header h2 {
    margin: 0;
    font-size: 1.3rem;
    color: #333;
    flex: 1;
    word-break: break-word;
}

.language-badge {
    background-color: #f0f0f0;
    padding: 0.3rem 0.7rem;
    border-radius: 4px;
    font-size: 0.85rem;
    color: #555;
    white-space: nowrap;
}

.description {
    color: #666;
    margin: 0 0 1rem 0;
    line-height: 1.5;
    flex-grow: 1;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid #f0f0f0;
}

.stats {
    display: flex;
    gap: 1rem;
}

.stat {
    font-size: 0.9rem;
    color: #666;
}

.project-link {
    color: #007bff;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
}

.project-link:hover {
    color: #0056b3;
}

.topics {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
}

.topic-badge {
    background-color: #e7f3ff;
    color: #0066cc;
    padding: 0.3rem 0.7rem;
    border-radius: 12px;
    font-size: 0.8rem;
}

@media (max-width: 768px) {
    .project-book {
        padding: 1rem;
    }

    .header-section {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }
}
</style>