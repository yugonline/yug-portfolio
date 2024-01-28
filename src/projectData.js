export const aiMlProjects = [
    {
        name: 'Keyword Extractor (2023)',
        description: 'This is my submission #1 to the Kaggle Mentorship Program. It is a keyword Extractor.\n' +
            '\n' +
            'The idea is to get both Graph-based embeddings and Text based embeddings for a given text. (various datasets were used, the code includes the best implementation of all the different combinations).',
        githubLink: 'https://github.com/yugonline/KeywordExtractor',
        tags: ['Python', 'Deep Learning', 'Machine Learning', "Text Embedding", "Graph", "Graph Embeddings"]
    },
    {
        name: 'PDF_OCR_Translator (2023)',
        description: 'Excited to share my latest project: a PDF OCR Translator built in C++! I\'ve integrated Tesseract for OCR, MuPDF for PDF handling,' +
            ' and Leptonica for image processing. It skillfully extracts text from PDFs and translates it, handling multiple languages with a custom Marian NMT decoder. ' +
            'A true blend of OCR and language translation tech, perfect for multilingual documents.',
        githubLink: 'https://github.com/yugonline/PDF_OCR_Translator',
        tags: ['C++', 'Neural Networks', 'Deep Learning']
    },
    {
        "name": "PhilosophizeIt! (2023)",
        "description": "This project showcases my skillset and comfort level at working with OpenAI models and Langchain. " +
            "PhilosophizeIt! is an innovative FastAPI web application, ingeniously applying OpenAI's GPT models for philosophical discourse. " +
            "It interprets user inputs through specialized prompts like 'Dialectic' and 'Hermeneutics', offering insightful AI-powered responses. " +
            "Emphasizing interactive engagement, this project blends modern AI with classical philosophical analysis, providing a unique platform for exploring complex philosophical concepts. " +
            "It's a perfect example of how technology can be harnessed to deepen our understanding of human thought and philosophy.",
        "githubLink": "https://github.com/yugonline/philosophizeit/blob/master/main.py",
        "tags": ["FastAPI", "OpenAI", "PhilosophicalAI", "AIResponseGenerator", "LLM", "LangChain", "Python", "MachineLearning", "TechEthics", "InnovativeCoding"]
    }
    ,
    {
        "name": "Psychotherapy For AI! (In Progress) (2022 - Present)",
        "description": "This is a storybook I am working on! Click the GIthub icon to check  it out!",
        "githubLink": "https://github.com/yugonline/psychotherapyforai",
        "tags": ["Creative", "Writing", "Artificial Intelligence","Generative Human Intelligence."]
    },

    {
        "name": "NDA Project at Nordstrom (2020-2023)",
        "description": "Everything I did at Nordstrom is NDA and thus cannot reveal more details unfortunately but it involved a lot of pre data analysis using SQL, Python, Pandas; " +
            "A lot of the model design was done using Tensorflow + Keras" +
            "Model was trained on AWS Compute resources, Via Gitlab CI/CD, Terraform and Airbnb" +
            "This model also honed my skills in MLOps and Deploying Model as API service.",
        "githubLink": "#",
        "tags":["Python", "SQL", "Machine Learning", "Keras", "PyTorch", "Tensorflow", "Flask", "Kubernetes", "AWS", "S3" , "Gitlab CI/CD"]
    },
    {
        "name": "NDA Hackathon Project at Velocity Global LLC (2023)",
        "description": "This project at Velocity Global LLC is NDA so cannot discuss the specifics but this was an LLM + RAG project that involved"
        + "\n\nA: Fine-tuning the model" + "\nB: Implementing vector search for documents" + "\nC: Genearting answers from OpenAI GPTv4" + "\nD: Deploying on Flask and implementing memoization to save cost.",
        "githubLink": "#",
        "tags":["Python", "LLM", "GPTv4", "RAG", "Flask", "SQL", "VectorDB"]
    },

];

export const ResearchMLProjects = [
    {
        name: 'Debator Project 2017',
        description: "This is a Pre-LLM NLP Project I had done for my IBM Watson graduate level class in 2017 at George Washington University. It involved creating a web scraper that would scrape "
        + "all the content from idebate.net" + " Then the idea was to form a dataset of \"For\" and \"Against\" datasets and pass it through to both Watson (at the time it had a cloud offering for Generating RNN based text). ",
        githubLink: "#",
        tags: ['Python', 'BeautifulSoup', 'RNN', 'IBM Watson']
    },
    {
        name: 'Event Nugget Detection 2016-2017',
        description: "This is also a Pre-LLM NLP Project. (LLMs completely changed the game!!) . " +
            "This project was about detecting an \"Event\" that might be happening in a given sentence. " +
            "For example \"The man ate a banana while running away from a monkey\" " + "Here, the event that is happening is A: eating a banana but also B: running away from a monkey, And obviously in the context of the two things the latter is more important!!"
        + "We entered into one of the Eval competitions as well. ",
        githubLink: "http:#",
        tags: ['Python', 'Tensorflow', 'Weka', 'Java', 'Scikit-ML', 'Decision Trees']
    },
    {
     name: "Twitter Sentiment Analysis (DNF)",
     description: "This is a project I did not complete but it was under the tutelage of Dr Mona Diab. It was a cross collaboration between George Washington University and Columbia University and I was working" +
     "This project required lot of specialized expertise around Supercomputer training and scaling the Sentiment analysis but I had other classes and responsibilities to worry about so did not commit to this completely.",
     githubLink: "http:#",
     tags: ["Python", "BeautifulSoup", "GPU Scaling"]
    }
]

export const softwareProjects = [
    {
        name: 'CliNotes',
        description: 'This is about taking Notes on the Cli plain and simple. Notes can be one of 3 things. DevLogs (devloper logs) ; ' +
            'Code Snippets (any code that you found or created can be easily logged and searched) ; and Learning Notes (it can also be a quick and dirty notepad); ' +
            'This is my recently active project on Github that is right now gaining some traction. I even exhibited this repo at a Rust meetup! ',
        githubLink: 'https://github.com/yugonline/cliNotes',
        tags: ['Rust', 'SQL', '12 Factor CLI']
    },
    {
        name: 'Snakes And Ladders',
        description: 'An extremely simple Ruby game about Snakes and Ladders that uses the Terminal to simulate the 100 houses and simulates a turn of dice and moves a player to a spot!',
        githubLink: 'https://github.com/yugonline/snakesandladders',
        tags: ['Ruby', 'Simulation', 'Game Dev']
    },
    {
        name: 'NDA Project for Nordstrom',
        description: 'Essentially my main project at Nordstrom that I was working on pretty much since I got there was around Inventory Management.' +
            " It involved a lot of Java development, AWS, Springboot, Microservices, Kubernetes, GCP, PostgresDB, MySQL, OpenAPI, Web Devlopment, Kafka Streaming.",
        githubLink: '#',
        tags: ['Java', 'AWS', 'Kafka','Lambda', 'Springboot']
    },
    {
        name: 'NDA Project for Velocity Global LLC',
        description: 'This is also an NDA project due to this being my main project at Velocity. I am essentially on the IAM team responsible for authorization and authentication.',
        githubLink: '#',
        tags: ['Typescript', 'Serverless', 'Lambda', 'Api Development', 'EIAM', 'CIAM']
    },
    {
        name: "this.Website!",
        description: "Of course! I cannot forget that this website is also the result of painful efforts of making sure React and Javascript is running smoothly and all the little CSS details!" +
        "Hope you enjoyed scrolling through and the journey was pleasant. Please reach me out on LinkedIn if you find any bugs or something seems off!",
        githubLink: "https://github.com/yugonline/yug-portfolio",
        tags: ['React', 'Frontend', 'React Components', 'Javascript', 'Node']
    }
];