# Quill

A modern web application that enables you to have interactive conversations with your PDF documents. Upload a PDF, ask questions, and get intelligent responses based on the document's content.

## Features

- 📄 **PDF Upload** - Easily upload PDF documents to the application
- 💬 **Interactive Chat** - Ask questions and get answers based on PDF content
- 🤖 **AI-Powered** - Intelligent responses using advanced language models
- ⚡ **Fast Processing** - Quick document analysis and response generation
- 🎨 **User-Friendly Interface** - Clean and intuitive design
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) - React framework for production
- **Language**: TypeScript - Type-safe JavaScript
- **Styling**: CSS - Global styling for consistent design
- **Package Manager**: pnpm - Fast, disk space efficient package manager

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd quill
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
quill/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── public/                  # Static assets
├── package.json             # Project dependencies
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint

## How to Use

1. **Upload a PDF** - Click the upload button and select your PDF file
2. **Ask Questions** - Type your question in the chat interface
3. **Get Answers** - The AI will analyze the PDF and provide relevant answers
4. **Continue Chatting** - Ask follow-up questions for more details

## Environment Variables

Create a `.env.local` file in the root directory with necessary environment variables. (Configuration details to be added)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues or questions, please open an issue in the repository.

---

**Built with ❤️ using Next.js and TypeScript**
