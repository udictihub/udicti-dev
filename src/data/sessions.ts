import dedent from 'dedent';
import codeAgentImg from '@/assets/session/CodeAgent.png';
export const sessions = [
  {
    id: 1,
    month: 'Apr',
    day: '25',
    title: 'Agentic Coding',
    time: '09:00 AM - 10:30 AM',
    desc: 'Working with AI as part of the development process.',
    image: codeAgentImg.src,
    completed: 'done',
    markdown: dedent`
      # Agentic Coding
      
      Agentic coding is a way of building software where AI becomes part of the development process.
      
      Instead of writing everything manually, developers guide systems that can read code, execute tasks, and iterate on solutions.
      
      ---
      
      ## What we will explore
      
      - Using AI to assist development workflows  

      - Automating repetitive tasks  
      - Working with tools that extend beyond code generation  
      
      ---
      
      ## Key idea
      
      AI changes how we build, not why we build.
      
      ---
      
      ## Outcome
      
      Understand how to use AI as a practical tool in modern development.
      `,
  },
  {
    id: 2,
    month: 'May',
    day: '02',
    title: 'Systems Design',
    time: '09:00 AM - 12:00 PM',
    desc: 'Designing systems that scale and hold up in the real world.',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    completed: 'done',
    markdown: dedent`
# Systems Design

As systems grow, the way they are built must change. What works for a small project often breaks at scale.

---

## What we will explore

- Structuring applications beyond a single codebase  
- Managing data and communication between services  
- Handling growth in users, traffic, and complexity  

---

## Key idea

Good systems are not just built—they are designed with change in mind.

---

## Outcome

Begin thinking in terms of systems, not just individual applications.
`,
  },

  {
    id: 4,
    month: 'May',
    day: '09',
    title: 'Hosting & Infrastructure',
    time: '10:00 AM - 12:00 PM',
    desc: 'Running and managing systems beyond your local machine.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    completed: 'done',
    markdown: dedent`
# Hosting & Infrastructure

Writing code is only part of the work. Systems must be deployed, maintained, and kept running reliably.

---

## What we will cover

- Basics of servers and environments  
- How applications are deployed  
- Managing infrastructure and services  
- Introduction to containers and automation  

---

## Key idea

Control over infrastructure means control over how your systems behave.

---

## Outcome

Gain a practical understanding of how systems run in real environments.
`,
  },

  {
    id: 5,
    month: 'May',
    day: '16',
    title: 'Idea Mapping',
    time: '09:00 AM - 12:00 PM',
    desc: 'From first-principles thinking to systems and execution.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
    completed: 'done',

    markdown: `
  # Idea Mapping
  
  Ideas rarely appear fully formed. Most great systems begin from simple observations, frustrations, repeated workflows, or unanswered questions.
  
  This session focuses on how builders and problem solvers think — from identifying problems to mapping ideas into practical systems and execution.
  
  ---
  
  ## What We Will Explore
  - **First-Principles Thinking:** Breaking problems down to their fundamentals.
  - **Problem Mapping:** Understanding constraints, workflows, and opportunities.
  - **Systems Thinking:** Seeing how components connect and influence each other.
  - **Execution:** Turning ideas into practical and scalable solutions.
  - **Team Discussions:** Collaboratively analyzing and approaching real-world problems.
  
  ---
  
  ## Why This Matters
  
  Good builders do not just write code or use tools. They learn how to observe systems, question assumptions, and think structurally about solving problems.
  
  This session is designed to expose students to practical thinking approaches used in engineering, product development, startups, and modern technology ecosystems.
  
  ---
  
  ## The Goal
  
  Move beyond simply consuming technology and start learning how to think, design, and build intentionally.
    `,
  },
  {
    id: 6,
    month: 'June',
    day: '06',
    title: 'Leveraging OSS',
    time: '09:00 AM - 12:00 PM',
    completed: 'done',
    desc: 'Exploring how modern computing is powered by open-source software, communities, and technologies.',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80',
    markdown: dedent`
    
    # Leveraging OSS
    
    Modern software is rarely built from scratch. From operating systems and databases to containers, frameworks, and AI tooling, open-source software forms the foundation of today's computing landscape.
    
    ---
    
    ## What we will explore
    
    * Open-source software and ecosystems
    * Licenses and governance
    * Building with existing technologies
    * Communities and contribution
    * OSS in production systems
    
    ---
    
    ## Key idea
    
    Great engineers don't reinvent everything—they leverage existing tools, technologies, and communities to build faster and solve bigger problems.
    
    ---
    
    ## Outcome
    
    Understand how open-source software powers modern systems and how to effectively leverage and contribute to these ecosystems.
    `,
  },

  {
    id: 7,
    month: 'June',
    day: '13',
    title: 'Startup Finance',
    time: '09:00 AM - 12:00 PM',
    desc: 'Understanding funding, financial management, and sustainable growth for technology ventures.',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    completed: 'done',
    markdown: dedent`

# Startup Finance

Building a successful technology venture requires more than a great idea. Understanding how to manage finances, secure funding, and make informed business decisions is essential for transforming innovation into a sustainable enterprise.

---

## What we will explore

* Startup funding and investment
* Financial planning and budgeting
* Revenue models and pricing strategies
* Equity, ownership, and cap tables
* Financial statements and key business documents
* Startup valuation and fundraising
* Managing growth and financial sustainability

---

## Key idea

Successful startups are built not only through innovation and technology, but also through sound financial decisions, strategic planning, and effective resource management.

---

## Outcome

Develop a practical understanding of startup finance, enabling you to make informed financial decisions, evaluate funding opportunities, and build technology ventures with long-term sustainability.
`,
  },
];
