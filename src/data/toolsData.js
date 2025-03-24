import React from 'react';

export const toolsData = [{
        id: 1,
        title: "Resume Builder",
        description: "Create professional resumes with ATS optimization and AI content suggestions.",
        category: "Professional",
        icon: ( <
            svg width = "18"
            height = "18"
            fill = "none"
            viewBox = "0 0 24 24"
            stroke = "currentColor" >
            <
            path strokeLinecap = "round"
            strokeLinejoin = "round"
            strokeWidth = "2"
            d = "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" / >
            <
            /svg>
        )
    },
    {
        id: 2,
        title: "Offline Budget Planner",
        description: "Create budgets and track expenses with locally stored data and export options.",
        category: "Freelancer",
        icon: ( <
            svg width = "18"
            height = "18"
            fill = "none"
            viewBox = "0 0 24 24"
            stroke = "currentColor" >
            <
            path strokeLinecap = "round"
            strokeLinejoin = "round"
            strokeWidth = "2"
            d = "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" / >
            <
            /svg>
        )
    },
    {
        id: 3,
        title: "Analytics Dashboard",
        description: "Create interactive data visualizations and business analytics dashboards in minutes.",
        category: "Business",
        icon: ( <
            svg width = "18"
            height = "18"
            fill = "none"
            viewBox = "0 0 24 24"
            stroke = "currentColor" >
            <
            path strokeLinecap = "round"
            strokeLinejoin = "round"
            strokeWidth = "2"
            d = "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" / >
            <
            /svg>
        )
    },
    {
        id: 4,
        title: "Solar Calculator",
        description: "Calculate potential solar savings and ROI based on location and energy usage.",
        category: "General",
        icon: ( <
            svg width = "18"
            height = "18"
            fill = "none"
            viewBox = "0 0 24 24"
            stroke = "currentColor" >
            <
            path strokeLinecap = "round"
            strokeLinejoin = "round"
            strokeWidth = "2"
            d = "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" / >
            <
            /svg>
        )
    },
    {
        id: 5,
        title: "Business Plan Generator",
        description: "Create professional business plans with financial projections and market analysis.",
        category: "Professional",
        icon: ( <
            svg width = "18"
            height = "18"
            fill = "none"
            viewBox = "0 0 24 24"
            stroke = "currentColor" >
            <
            path strokeLinecap = "round"
            strokeLinejoin = "round"
            strokeWidth = "2"
            d = "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" / >
            <
            /svg>
        )
    },
    {
        id: 6,
        title: "AI Text Generator",
        description: "Generate blog posts, social media content, and marketing copy with AI technology.",
        category: "Creative",
        icon: ( <
            svg width = "18"
            height = "18"
            fill = "none"
            viewBox = "0 0 24 24"
            stroke = "currentColor" >
            <
            path strokeLinecap = "round"
            strokeLinejoin = "round"
            strokeWidth = "2"
            d = "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" / >
            <
            /svg>
        )
    },
    {
        id: 7,
        title: "Study Note Organizer",
        description: "Create, organize, and share study notes with AI-powered summaries and flashcards.",
        category: "Student",
        icon: ( <
            svg width = "18"
            height = "18"
            fill = "none"
            viewBox = "0 0 24 24"
            stroke = "currentColor" >
            <
            path strokeLinecap = "round"
            strokeLinejoin = "round"
            strokeWidth = "2"
            d = "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" / >
            <
            /svg>
        )
    },
    {
        id: 8,
        title: "Invoice Generator",
        description: "Create professional invoices with customizable templates and automatic tax calculations.",
        category: "Freelancer",
        icon: ( <
            svg width = "18"
            height = "18"
            fill = "none"
            viewBox = "0 0 24 24"
            stroke = "currentColor" >
            <
            path strokeLinecap = "round"
            strokeLinejoin = "round"
            strokeWidth = "2"
            d = "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" / >
            <
            /svg>
        )
    },
    {
        id: 9,
        title: "Image Editor",
        description: "Edit and enhance images with powerful tools, filters, and AI-powered enhancements.",
        category: "Creative",
        icon: ( <
            svg width = "18"
            height = "18"
            fill = "none"
            viewBox = "0 0 24 24"
            stroke = "currentColor" >
            <
            path strokeLinecap = "round"
            strokeLinejoin = "round"
            strokeWidth = "2"
            d = "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" / >
            <
            /svg>
        )
    },
    {
        id: 10,
        title: "Plagiarism Checker",
        description: "Check content for plagiarism with our advanced AI detection system and citation tools.",
        category: "Student",
        icon: ( <
            svg width = "18"
            height = "18"
            fill = "none"
            viewBox = "0 0 24 24"
            stroke = "currentColor" >
            <
            path strokeLinecap = "round"
            strokeLinejoin = "round"
            strokeWidth = "2"
            d = "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" / >
            <
            /svg>
        )
    },
    {
        id: 11,
        title: "Meeting Planner",
        description: "Schedule meetings with timezone support, agenda builder, and minutes template generator.",
        category: "Professional",
        icon: ( <
            svg width = "18"
            height = "18"
            fill = "none"
            viewBox = "0 0 24 24"
            stroke = "currentColor" >
            <
            path strokeLinecap = "round"
            strokeLinejoin = "round"
            strokeWidth = "2"
            d = "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" / >
            <
            /svg>
        )
    },
    {
        id: 12,
        title: "Credit Score Simulator",
        description: "Simulate the impact of financial decisions on your credit score with predictive modeling.",
        category: "General",
        icon: ( <
            svg width = "18"
            height = "18"
            fill = "none"
            viewBox = "0 0 24 24"
            stroke = "currentColor" >
            <
            path strokeLinecap = "round"
            strokeLinejoin = "round"
            strokeWidth = "2"
            d = "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" / >
            <
            /svg>
        )
    }
];