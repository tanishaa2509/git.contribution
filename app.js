
        // Sample data for projects
        const projectsData = [
            {
                name: "React",
                description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
                language: "JavaScript",
                stars: "183k",
                forks: "37.2k",
                issues: [
                    {
                        title: "Improve accessibility in component library",
                        tags: ["beginner", "good first issue"]
                    },
                    {
                        title: "Optimize reconciliation algorithm",
                        tags: ["advanced", "performance"]
                    }
                ]
            },
            {
                name: "TensorFlow",
                description: "An open source machine learning framework for everyone.",
                language: "Python",
                stars: "166k",
                forks: "87.3k",
                issues: [
                    {
                        title: "Update documentation for new API",
                        tags: ["beginner", "documentation"]
                    },
                    {
                        title: "Add support for new hardware accelerator",
                        tags: ["advanced", "hardware"]
                    }
                ]
            },
            {
                name: "VS Code",
                description: "Visual Studio Code is a lightweight but powerful source code editor.",
                language: "TypeScript",
                stars: "132k",
                forks: "22.9k",
                issues: [
                    {
                        title: "Improve IntelliSense for Python extension",
                        tags: ["intermediate", "extension"]
                    },
                    {
                        title: "UI theme contrast improvements",
                        tags: ["beginner", "UI/UX"]
                    }
                ]
            },
            {
                name: "Django",
                description: "The Web framework for perfectionists with deadlines.",
                language: "Python",
                stars: "63.5k",
                forks: "27.2k",
                issues: [
                    {
                        title: "Add async support to middleware",
                        tags: ["advanced", "async"]
                    },
                    {
                        title: "Update tutorial for beginners",
                        tags: ["beginner", "documentation"]
                    }
                ]
            },
            {
                name: "Rust",
                description: "Empowering everyone to build reliable and efficient software.",
                language: "Rust",
                stars: "71.2k",
                forks: "9.8k",
                issues: [
                    {
                        title: "Improve compiler error messages",
                        tags: ["intermediate", "compiler"]
                    },
                    {
                        title: "Add examples to standard library documentation",
                        tags: ["beginner", "documentation"]
                    }
                ]
            },
            {
                name: "Kubernetes",
                description: "Production-Grade Container Scheduling and Management",
                language: "Go",
                stars: "87.6k",
                forks: "40.1k",
                issues: [
                    {
                        title: "Simplify setup for local development",
                        tags: ["intermediate", "development"]
                    },
                    {
                        title: "Improve documentation for beginners",
                        tags: ["beginner", "documentation"]
                    }
                ]
            }
        ];

        // DOM elements
        const searchButton = document.getElementById('searchButton');
        const loadingIndicator = document.getElementById('loadingIndicator');
        const resultsContainer = document.getElementById('resultsContainer');
        const paginationContainer = document.getElementById('paginationContainer');

        // Function to render project cards
        function renderProjects(projects) {
            resultsContainer.innerHTML = '';
            
            projects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                
                projectCard.innerHTML = `
                    <div class="card-header">
                        <h3>${project.name}</h3>
                        <p>${project.description}</p>
                    </div>
                    <div class="card-body">
                        <span class="language">${project.language}</span>
                        <div class="issues">
                            ${project.issues.map(issue => `
                                <div class="issue">
                                    <a href="#"><i class="fas fa-exclamation-circle"></i> ${issue.title}</a>
                                    <div class="tags">
                                        ${issue.tags.map(tag => {
                                            let tagClass = '';
                                            if (tag === 'beginner') tagClass = 'beginner';
                                            if (tag === 'intermediate') tagClass = 'intermediate';
                                            if (tag === 'advanced') tagClass = 'advanced';
                                            return `<span class="tag ${tagClass}">${tag}</span>`;
                                        }).join('')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="stars">
                            <i class="fas fa-star"></i> ${project.stars}
                        </div>
                        <div class="forks">
                            <i class="fas fa-code-branch"></i> ${project.forks}
                        </div>
                        <a href="#" class="view-btn">View Project</a>
                    </div>
                `;
                
                resultsContainer.appendChild(projectCard);
            });
        }

        // // Function to simulate API call
        // function fetchProjects() {
        //     // Show loading indicator
        //     loadingIndicator.style.display = 'block';
        //     resultsContainer.innerHTML = '';
            
        //     // Simulate API delay
        //     setTimeout(() => {
        //         const language = document.getElementById('language').value;
        //         const difficulty = document.getElementById('difficulty').value;
        //         const searchTerm = document.getElementById('search').value.toLowerCase();
                
        //         // Filter projects based on criteria
        //         const filteredProjects = projectsData.filter(project => {
        //             const languageMatch = !language || project.language.toLowerCase() === language;
        //             const difficultyMatch = !difficulty || project.issues.some(issue => 
        //                 issue.tags.includes(difficulty)
        //             );
        //             const searchMatch = !searchTerm || 
        //                 project.name.toLowerCase().includes(searchTerm) ||
        //                 project.description.toLowerCase().includes(searchTerm) ||
        //                 project.issues.some(issue => 
        //                     issue.title.toLowerCase().includes(searchTerm) ||
        //                     issue.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        //                 );
                    
        //             return languageMatch && difficultyMatch && searchMatch;
        //         });
                
        //         // Render filtered projects
        //         renderProjects(filteredProjects);
                
        //         // Hide loading indicator
        //         loadingIndicator.style.display = 'none';
                
        //         // Show message if no results
        //         if (filteredProjects.length === 0) {
        //             resultsContainer.innerHTML = `
        //                 <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
        //                     <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 20px; color: #8b949e;"></i>
        //                     <h3>No projects found</h3>
        //                     <p>Try adjusting your filters or search terms</p>
        //                 </div>
        //             `;
        //         }
        //     }, 1500); // Simulate network delay
        // }

        // Function to fetch real projects from GitHub API
async function fetchProjects(page = 1) {
    // Show loading indicator
    loadingIndicator.style.display = 'block';
    resultsContainer.innerHTML = '';

    const language = document.getElementById('language').value;
    const difficulty = document.getElementById('difficulty').value;
    const searchTerm = document.getElementById('search').value.toLowerCase();

    try {
        // Build GitHub API query
        let query = searchTerm ? `${searchTerm}` : "open source";
        if (language) query += `+language:${language}`;

        const response = await fetch(`https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&per_page=10&page=${page}`);
        const data = await response.json();

        if (!data.items) {
            throw new Error(data.message || "Failed to fetch data");
        }

        // Map API data into project structure
        const projects = data.items.map(repo => ({
            name: repo.name,
            description: repo.description || "No description available.",
            language: repo.language || "N/A",
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            issues: [
                {
                    title: "Check open issues on GitHub",
                    tags: [difficulty || "general"]
                }
            ],
            url: repo.html_url
        }));

        // Render projects
        renderProjects(projects);

        // If no results
        if (projects.length === 0) {
            resultsContainer.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                    <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 20px; color: #8b949e;"></i>
                    <h3>No projects found</h3>
                    <p>Try adjusting your filters or search terms</p>
                </div>
            `;
        }

    } catch (error) {
        resultsContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }

    // Hide loading indicator
    loadingIndicator.style.display = 'none';
}


        // Event listeners
        searchButton.addEventListener('click', () => fetchProjects(1));
        
        // Pagination buttons
        const paginationButtons = paginationContainer.querySelectorAll('button');
paginationButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        paginationButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        fetchProjects(index + 1); // fetch page 1,2,3...
    });
});


        // Initial render
        renderProjects(projectsData);
    