// ==UserScript==
// @name         PAGAL AUTO SEARCHER
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Auto Search
// @author       PAGAL AUTO SEARCHER
// @match        *://www.bing.com/*
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

(function() {
    'use strict';

    // Function to fetch a dynamic word list from the API
    function fetchWordList() {
        return fetch('https://random-word-api.herokuapp.com/word?number=70')
            .then(response => response.json())
            .then(data => data)
            .catch(error => {
                console.error('Error fetching word list:', error);
                alert('An error occurred while fetching the word list. Using default words.');
                return [];
            });
    }

    // Function to set a timer to fetch a new word list every 2-5 days
    function setWordListRefreshTimer() {
        var refreshInterval = getRandomDelay(2, 5) * 24 * 60 * 60 * 1000; // Convert days to milliseconds
        setInterval(function() {
            fetchAndStoreWordList();
        }, refreshInterval);
    }

    // Function to fetch a new word list and store it
    function fetchAndStoreWordList() {
        fetchWordList().then(words => {
            GM_setValue('wordList', words);
        });
    }

    // Initialize the word list on script load
    var terms = GM_getValue('wordList', []);

    // If the word list is not available or empty, use the default array
    if (!terms.length) {
        terms = [
"Python",
"Code",
"Variable",
"Function",
"Loop",
"List",
"Dictionary",
"Module",
"Package",
"Boolean",
"Tuple",
"Class",
"Object",
"Method",
"Attribute",
"Exception",
"Debug",
"Iterate",
"Index",
"Slice",
"Concatenate",
"Import",
"Export",
"Namespace",
"Parameter",
"Argument",
"Algorithm",
"Recursion",
"Lambda",
"Decorator",
"Framework",
"Library",
"Statement",
"Expression",
"Operator",
"Syntax",
"Assignment",
"Mutable",
"Immutable",
"Constructor",
"Inheritance",
"Encapsulation",
"Polymorphism",
"Abstraction",
"Interface",
"Database",
"SQL",
"ORM",
"Repository",
"Documentation",
"Framework",
"Iteration",
"Validation",
"Concatenation",
"Encryption",
"Decryption",
"Authentication",
"Authorization",
"Serialization",
"Deserialization",
"Framework",
"Middleware",
"Backend",
"Frontend",
"Database",
"Normalization",
"Transaction",
"Commit",
"Rollback",
"Query",
"Cursor",
"Fetch",
"Schema",
"Viewport",
"Responsive",
"Algorithm",
"Sorting",
"Searching",
"Binary",
"Hexadecimal",
"Octal",
"Decimal",
"Integer",
"Float",
"String",
"Boolean",
"Iteration",
"Function",
"Variable",
"Dictionary",
"Exception",
"Debugging",
"Testing",
"UnitTest",
"Integration",
"Deployment",
"Container",
"Virtualization",
"Versioning",
"Documentation",
"Pointer",
"Linkedlist",
"Tree",
"Traversal",
"BinarySearch",
"BubbleSort",
"MergeSort",
"QuickSort",
"RadixSort",
"HeapSort",
"Graph",
"BreadthFirstSearch",
"DepthFirstSearch",
"TopologicalSort",
"Dijkstra",
"BellmanFord",
"FloydWarshall",
"GreedyAlgorithm",
"DynamicProgramming",
"Backtracking",
"Hashing",
"Cache",
"Concurrency",
"Parallelism",
"Mutex",
"Semaphore",
"Thread",
"Process",
"Deadlock",
"Semaphore",
"RaceCondition",
"CriticalSection",
"Database",
"Normalization",
"Transaction",
"Commit",
"Rollback",
"Isolation",
"Durability",
"ConcurrencyControl",
"ACIDProperties",
"NoSQL",
"MongoDB",
"Redis",
"Cassandra",
"BigData",
"Hadoop",
"MapReduce",
"Spark",
"MachineLearning",
"SupervisedLearning",
"UnsupervisedLearning",
"ReinforcementLearning",
"NeuralNetwork",
"DeepLearning",
"NaturalLanguageProcessing",
"ComputerVision",
"Regression",
"Classification",
"Clustering",
"DimensionalityReduction",
"Overfitting",
"Underfitting",
"CrossValidation",
"EnsembleLearning",
"RandomForest",
"GradientBoosting",
"XGBoost",
"Keras",
"TensorFlow",
"PyTorch",
"ScikitLearn",
"Pandas",
"NumPy",
"Matplotlib",
"Seaborn",
"Plotly",
"Dash",
"Bokeh",
"Flask",
"Django",
"FastAPI",
"RESTful",
"GraphQL",
"WebSocket",
"HTTP",
"HTTPS",
"TCP",
"UDP",
"API",
"SDK",
"OAuth",
"JWT",
"Authentication",
"Authorization",
"Identity",
"AccessControl",
"Cybersecurity",
"Firewall",
"VPN",
"SSL",
"TLS",
"Cryptography",
"HashFunction",
"DigitalSignature",
"PublicKeyInfrastructure",
"Blockchain",
"SmartContract",
"Cryptocurrency",
"Bitcoin",
"Ethereum",
"Altcoin",
"Decentralized",
"Centralized",
"Middleware",
"Microservices",
"Monolith",
"Containerization",
"Docker",
"Kubernetes",
"Serverless",
"CloudComputing",
"IaaS",
"PaaS",
"SaaS",
"AWS",
"Azure",
"GoogleCloudPlatform",
"DevOps",
"ContinuousIntegration",
"ContinuousDelivery",
"ContinuousDeployment",
"VersionControl",
"Git",
"GitHub",
"GitLab",
"Bitbucket",
"Jenkins",
"TravisCI",
"CircleCI",
"Monitoring",
"Logging",
"Alerting",
"IncidentResponse",
"Agile",
"Scrum",
"Kanban",
"XP",
"Lean",
"SixSigma",
"Waterfall",
"RapidPrototyping",
"UserInterface",
"UserExperience",
"Wireframe",
"Prototype",
"Mockup",
"ResponsiveDesign",
"MobileFirst",
"Accessibility",
"InclusiveDesign",
"DesignThinking",
"UserPersona",
"UserJourney",
"InformationArchitecture",
"InteractionDesign",
"VisualDesign",
"Typography",
"ColorTheory",
"GridSystem",
"DesignPattern",
"Singleton",
"FactoryMethod",
"Observer",
"Adapter",
"Decorator",
"Strategy",
"Command",
"State",
"Visitor",
"MVC",
"MVVM",
"ObserverPattern",
"SingletonPattern",
"FactoryPattern",
"AdapterPattern",
"DecoratorPattern",
"StrategyPattern",
"CommandPattern",
"StatePattern",
"VisitorPattern",
"MVCPattern",
"MVVMPattern",
"AgileManifesto",
"ScrumMaster",
"ProductOwner",
"Sprint",
"Backlog",
"BurndownChart",
"DailyStandup",
"SprintReview",
"SprintRetrospective",
"Velocity",
"BurnupChart",
"EarnedValueManagement",
"GanttChart",
"PERT",
"CriticalPath",
"RiskManagement",
"SWOTAnalysis",
"CostBenefitAnalysis",
"FeasibilityStudy",
"ProjectCharter",
"ScopeStatement",
"WorkBreakdownStructure",
"ProjectManagementPlan",
"ChangeRequest",
"QualityManagement",
"QualityAssurance",
"QualityControl",
"SixSigma",
"LeanSixSigma",
"DMAIC",
"DFSS",
"Kaizen",
"Kanban",
"PokaYoke",
"Gemba",
"ValueStreamMapping",
"TotalQualityManagement",
"ISO9000",
"ISO14000",
"ISO27001",
"ISO45001",
"ISO20000",
"ISO31000",
"ISO22301",
"ISO50001",
"ISO13485",
"ISO17025",
"BalancedScorecard",
"KPI",
"Dashboard",
"Metrics",
"Benchmarking",
"CustomerSatisfaction",
"EmployeeEngagement"  ];
    }

    // Set the word list refresh timer
    setWordListRefreshTimer();

    var index = GM_getValue('bookmarkletIndex', 0);
    var searchInput = document.getElementById('sb_form_q');
    var form = searchInput && searchInput.closest('form');

    function getRandomDelay(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Generate a random position within the document body
    var randomX = Math.floor(Math.random() * document.body.scrollWidth);
    var randomY = Math.floor(Math.random() * Math.max(document.body.scrollHeight, window.innerHeight));

    function typeSearchTerm(term, callback) {
        searchInput.focus();
        searchInput.value = ''; // Clear the previous search term
        var i = 0;
        var interval = setInterval(function() {
            searchInput.value += term[i];
            i++;
            if (i === term.length) {
                clearInterval(interval);
                callback();
            }
        }, getRandomDelay(10, 15)); // Adjust the delay between keystrokes as needed
    }

    function triggerSearch() {
        // Scroll the browser to the random position
        if (searchInput && form) {
            window.scrollTo(randomX, randomY);

            typeSearchTerm(terms[index], function() {
                form.submit();
                GM_setValue('bookmarkletIndex', (index + 1) % terms.length);
            });
        }
    }

    setTimeout(triggerSearch, getRandomDelay(100, 150)); // Timings minimum and maximum
})();
