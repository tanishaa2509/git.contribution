# git.contribution
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Open Source Contribution Finder</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
      * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
            color: #f0f6fc;
            line-height: 1.6;
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        header {
            text-align: center;
            padding: 30px 0;
            margin-bottom: 30px;
        }
        
        header h1 {
            font-size: 2.8rem;
            margin-bottom: 10px;
            background: linear-gradient(90deg, #8ae6ff, #ff9cee);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            display: inline-block;
        }
        
        header p {
            font-size: 1.2rem;
            max-width: 800px;
            margin: 0 auto;
            color: #c9d1d9;
        }
        
        .auth-section {
            background: rgba(22, 27, 34, 0.8);
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 20px;
            display: flex;
            justify-content: flex-end;
            gap: 15px;
        }
        
        .auth-btn {
            padding: 10px 20px;
            border-radius: 8px;
            border: none;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        
        .login-btn {
            background: transparent;
            border: 1px solid #30363d;
            color: #c9d1d9;
        }
        .login-btn i{
            margin-right: 8px;
            font-size: 20px;
        }
        
        .login-btn:hover {
            background: rgba(56, 139, 253, 0.1);
            border-color: #58a6ff;
        }
        
        .signup-btn {
            background: linear-gradient(90deg, #238636, #2ea043);
            color: white;
        }
        
        .signup-btn:hover {
            background: linear-gradient(90deg, #2ea043, #3cb44b);
            transform: translateY(-2px);
        }
        
        .search-section {
            background: rgba(22, 27, 34, 0.8);
            border-radius: 12px;
            padding: 25px;
            margin-bottom: 30px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(10px);
        }
        
        .filters {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }
        
        .filter-group {
            margin-bottom: 15px;
        }
        
        .filter-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #8b949e;
        }
        
        .filter-group select, .filter-group input {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #30363d;
            border-radius: 8px;
            background: #0d1117;
            color: #c9d1d9;
            font-size: 16px;
        }
        
        .search-btn {
            background: linear-gradient(90deg, #238636, #2ea043);
            color: white;
            border: none;
            padding: 14px 25px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: block;
            width: 100%;
            margin-top: 10px;
        }
        
        .search-btn:hover {
            background: linear-gradient(90deg, #2ea043, #3cb44b);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(46, 160, 67, 0.3);
        }
        
        .loading {
            text-align: center;
            padding: 40px;
            display: none;
        }
        
        .spinner {
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top: 4px solid #58a6ff;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .results-section {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 25px;
            margin-top: 30px;
        }
        
        .project-card {
            background: rgba(22, 27, 34, 0.8);
            border-radius: 12px;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
            backdrop-filter: blur(10px);
        }
        
        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
        }
        
        .card-header {
            padding: 20px;
            border-bottom: 1px solid #30363d;
        }
        
        .card-header h3 {
            font-size: 1.4rem;
            margin-bottom: 8px;
            color: #58a6ff;
        }
        
        .card-header p {
            color: #8b949e;
            font-size: 0.95rem;
        }
        
        .card-body {
            padding: 20px;
        }
        
        .language {
            display: inline-block;
            background: rgba(56, 139, 253, 0.15);
            color: #58a6ff;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.9rem;
            margin-bottom: 15px;
        }
        
        .issues {
            margin-top: 15px;
        }
        
        .issue {
            padding: 10px 0;
            border-bottom: 1px solid #21262d;
        }
        
        .issue:last-child {
            border-bottom: none;
        }
        
        .issue a {
            color: #c9d1d9;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: color 0.2s ease;
        }
        
        .issue a:hover {
            color: #58a6ff;
        }
        
        .tags {
            display: flex;
            gap: 8px;
            margin-top: 8px;
            flex-wrap: wrap;
        }
        
        .tag {
            font-size: 0.8rem;
            padding: 4px 10px;
            border-radius: 12px;
        }
        
        .tag.beginner {
            background: rgba(46, 160, 67, 0.15);
            color: #3fb950;
        }
        
        .tag.intermediate {
            background: rgba(187, 128, 9, 0.15);
            color: #d29922;
        }
        
        .tag.advanced {
            background: rgba(248, 81, 73, 0.15);
            color: #ff7b72;
        }
        
        .card-footer {
            padding: 15px 20px;
            background: rgba(13, 17, 23, 0.6);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .stars, .forks {
            display: flex;
            align-items: center;
            gap: 5px;
            color: #8b949e;
            font-size: 0.9rem;
        }
        
        .view-btn {
            background: transparent;
            border: 1px solid #30363d;
            color: #c9d1d9;
            padding: 8px 15px;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s ease;
            text-decoration: none;
            font-size: 0.9rem;
        }
        
        .view-btn:hover {
            background: rgba(56, 139, 253, 0.1);
            border-color: #58a6ff;
        }
        
        .pagination {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 20px;
        }
        
        .pagination button {
            padding: 10px 18px;
            background: rgba(22, 27, 34, 0.8);
            border: 1px solid #30363d;
            color: #c9d1d9;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        
        .pagination button:hover {
            background: rgba(56, 139, 253, 0.1);
            border-color: #58a6ff;
        }
        
        .pagination button.active {
            background: rgba(56, 139, 253, 0.2);
            border-color: #58a6ff;
            color: #58a6ff;
        }
        
        footer {
            text-align: center;
            margin-top: 10px;
            padding: 20px;
            color: #8b949e;
            font-size: 0.9rem;
        }
        
        .api-status {
            display: flex;
            align-items: center;
            gap:5px;
            margin-top: 20px;
            justify-content: center;
        }
        
        .status-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #3fb950;
           
        }
        
        @media (max-width: 768px) {
            .results-section {
                grid-template-columns: 1fr;
            }
            
            header h1 {
                font-size: 2.2rem;
            }
            
            .filters {
                grid-template-columns: 1fr;
            }
            
            .auth-section {
                justify-content: center;
            }
        }   
    </style>
</head>

<body>
    <div class="container">
        <header>
            <h1>Open Source Contribution Finder</h1>
            <p><i>the perfect open-source projects to contribute to based on your skills and interests. Filter by programming language, difficulty level, and more.</i> </p>
        </header>
        
        <div class="auth-section">
            <button class="auth-btn login-btn">
            <i class="fa-brands fa-github"></i>"log in with GitHub</button>
            <button class="auth-btn signup-btn">Sign Up</button>
        </div>
        
        <section class="search-section">
            <div class="filters">
                <div class="filter-group">
                    <label for="language"><i class="fas fa-code"></i> Programming Language</label>
                    <select id="language">
                        <option value="">Any Language</option>
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="java">Java</option>
                        <option value="go">Go</option>
                        <option value="rust">Rust</option>
                        <option value="php">PHP</option>
                        <option value="csharp">C#</option>
                        <option value="cpp">C++</option>
                    </select>
                </div>
                
                <div class="filter-group">
                    <label for="difficulty"><i class="fas fa-signal"></i> Difficulty Level</label>
                    <select id="difficulty">
                        <option value="">Any Level</option>
                        <option value="beginner">Beginner Friendly</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                </div>
                
                <div class="filter-group">
                    <label for="search"><i class="fas fa-search"></i> Keyword Search</label>
                    <input type="text" id="search" placeholder="e.g. machine learning, web framework">
                </div>
            </div>
            
            <button class="search-btn" id="searchButton">Find Projects <i class="fas fa-arrow-right"></i></button>
        </section>
        
        <div class="loading" id="loadingIndicator">
            <div class="spinner"></div>
            <p>Fetching projects from GitHub API...</p>
        </div>
        
        <section class="results-section" id="resultsContainer">
            <!-- Results will be dynamically inserted here -->
        </section>
        
        <div class="pagination" id="paginationContainer">
            <button class="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
        </div>
        
        <footer>
            <div class="api-status">
                <div class="status-dot"></div>
                <span>GitHub API Status: Operational</span>
            </div>
        </footer>
    </div>

    <script>
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
                                            return <span class="tag ${tagClass}">${tag}</span>;
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

        // Function to simulate API call
        function fetchProjects() {
            // Show loading indicator
            loadingIndicator.style.display = 'block';
            resultsContainer.innerHTML = '';
            
            // Simulate API delay
            setTimeout(() => {
                const language = document.getElementById('language').value;
                const difficulty = document.getElementById('difficulty').value;
                const searchTerm = document.getElementById('search').value.toLowerCase();
                
                // Filter projects based on criteria
                const filteredProjects = projectsData.filter(project => {
                    const languageMatch = !language || project.language.toLowerCase() === language;
                    const difficultyMatch = !difficulty || project.issues.some(issue => 
                        issue.tags.includes(difficulty)
                    );
                    const searchMatch = !searchTerm || 
                        project.name.toLowerCase().includes(searchTerm) ||
                        project.description.toLowerCase().includes(searchTerm) ||
                        project.issues.some(issue => 
                            issue.title.toLowerCase().includes(searchTerm) ||
                            issue.tags.some(tag => tag.toLowerCase().includes(searchTerm))
                        );
                    
                    return languageMatch && difficultyMatch && searchMatch;
                });
                
                // Render filtered projects
                renderProjects(filteredProjects);
                
                // Hide loading indicator
                loadingIndicator.style.display = 'none';
                
                // Show message if no results
                if (filteredProjects.length === 0) {
                    resultsContainer.innerHTML = `
                        <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                            <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 20px; color: #8b949e;"></i>
                            <h3>No projects found</h3>
                            <p>Try adjusting your filters or search terms</p>
                        </div>
                    `;
                }
            }, 1500); // Simulate network delay
        }

        // Event listeners
        searchButton.addEventListener('click', fetchProjects);
        
        // Pagination buttons
        const paginationButtons = paginationContainer.querySelectorAll('button');
        paginationButtons.forEach(button => {
            button.addEventListener('click', () => {
                paginationButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                fetchProjects(); // In a real app, this would fetch the next page
            });
        });

        // Initial render
        renderProjects(projectsData);
    </script>
</body>
</html>
