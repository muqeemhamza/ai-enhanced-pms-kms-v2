# Technical Context: AI-Enhanced Project & Knowledge Management System

## Technology Stack

### Frontend Technologies
- **Framework**: React 18+ with TypeScript 5+
- **Build Tool**: Vite 5+ for fast development and HMR
- **Styling**: Tailwind CSS 3+ with custom design system
- **UI Components**: Headless UI + custom component library
- **State Management**: React Query (TanStack Query) + Zustand
- **Routing**: React Router v6 with type-safe routes
- **Forms**: React Hook Form + Zod validation
- **Testing**: Jest + React Testing Library + Playwright

### Backend Technologies
- **Runtime**: Node.js 18+ LTS
- **Framework**: Express.js with TypeScript
- **API Style**: RESTful APIs with OpenAPI 3.0 documentation
- **Authentication**: JWT tokens with RBAC + Supabase Auth
- **Validation**: Zod schemas for type-safe validation
- **Database Client**: Supabase JavaScript client
- **Testing**: Jest + Supertest for API testing

### Database & Storage
- **Primary Database**: Supabase (PostgreSQL-based) with real-time subscriptions
- **Project Reference**: zzmancxxkpwdqjuworvfq
- **Authentication**: Supabase Auth with Row Level Security (RLS)
- **Real-time**: Supabase Realtime for live updates
- **Storage**: Supabase Storage for file management
- **Cache Layer**: Redis 7+ for additional caching needs
- **Vector Database**: Supabase Vector (pgvector) for semantic search

### Supabase Configuration
- **Anon Public Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6bWFuY3h4a3B3ZHFqdXdvdmZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1OTQ2NzcsImV4cCI6MjA2NjE3MDY3N30.TPmQ7DI7M4fnWfZqOPYG6kQ8twyP2KJ_9h99OEgeyuc`
- **Service Role Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6bWFuY3h4a3B3ZHFqdXdvdmZxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MDU5NDY3NywiZXhwIjoyMDY2MTcwNjc3fQ.OunK-1JQXyR0PS-BryRU4VSrp9iXIAhm_d3c-nRTyXE`
- **URL**: `https://zzmancxxkpwdqjuworvfq.supabase.co`

### AI & External Services
- **Primary AI**: Claude (Anthropic) via API
- **Fallback AI**: OpenAI GPT-4 API
- **MCP Integration**: Supabase MCP server for AI-database interaction
- **Prompt Management**: Custom prompt templates with versioning
- **Rate Limiting**: Intelligent request throttling
- **Cost Optimization**: Usage tracking and optimization

### Development Tools
- **Package Manager**: npm or yarn with lock files
- **Code Quality**: ESLint + Prettier + Husky pre-commit hooks
- **Type Checking**: TypeScript strict mode
- **API Documentation**: OpenAPI/Swagger with automated generation
- **Environment Management**: dotenv with environment validation
- **MCP Configuration**: Cursor MCP integration for AI-enhanced development

### Infrastructure & Deployment
- **Development**: Local development with Supabase local development
- **Database**: Supabase hosted PostgreSQL with global distribution
- **Authentication**: Supabase Auth with social providers
- **Storage**: Supabase Storage with CDN
- **Edge Functions**: Supabase Edge Functions for serverless compute
- **CI/CD**: GitHub Actions with Supabase CLI integration
- **Monitoring**: Supabase Dashboard + custom monitoring

## Development Setup

### Prerequisites
```bash
Node.js 18+ LTS
Supabase CLI
Docker & Docker Compose (for local development)
Git with SSH keys
```

### Local Development Environment
```bash
# Clone repository
git clone <repository-url>
cd ai-pms-kms

# Install dependencies
npm install

# Supabase setup
npx supabase login
npx supabase init
npx supabase start  # Starts local Supabase stack

# Environment setup
cp .env.example .env
# Configure Supabase URLs, API keys, etc.

# Database setup
npx supabase db reset  # Apply migrations and seed data

# Start development servers
npm run dev:all  # Starts all services concurrently
```

### Environment Variables
```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://zzmancxxkpwdqjuworvfq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6bWFuY3h4a3B3ZHFqdXdvdmZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1OTQ2NzcsImV4cCI6MjA2NjE3MDY3N30.TPmQ7DI7M4fnWfZqOPYG6kQ8twyP2KJ_9h99OEgeyuc
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6bWFuY3h4a3B3ZHFqdXdvdmZxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MDU5NDY3NywiZXhwIjoyMDY2MTcwNjc3fQ.OunK-1JQXyR0PS-BryRU4VSrp9iXIAhm_d3c-nRTyXE

# AI Services
CLAUDE_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-...

# Application
NODE_ENV=development
PORT=3001
FRONTEND_URL=http://localhost:3000
```

### MCP Configuration for Cursor

Create `.cursor/mcp.json` in project root:
```json
{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": [
        "-y",
        "@supabase/mcp-server-supabase@latest",
        "--read-only",
        "--project-ref=zzmancxxkpwdqjuworvfq"
      ],
      "env": {
        "SUPABASE_ACCESS_TOKEN": "<personal-access-token>"
      }
    }
  }
}
```

## Project Structure

### Recommended Directory Layout
```
ai-pms-kms/
├── .cursor/                # Cursor MCP configuration
│   └── mcp.json
├── packages/
│   ├── frontend/           # React application
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   ├── stores/
│   │   │   ├── types/
│   │   │   └── utils/
│   │   ├── public/
│   │   ├── package.json
│   │   └── vite.config.ts
│   │
│   ├── backend/            # Express API server
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   │   ├── repositories/
│   │   │   ├── middleware/
│   │   │   ├── types/
│   │   │   └── utils/
│   │   └── package.json
│   │
│   └── shared/             # Shared types and utilities
│       ├── types/
│       ├── schemas/
│       └── utils/
│
├── supabase/              # Supabase configuration
│   ├── migrations/        # Database migrations
│   ├── functions/         # Edge functions
│   ├── seed.sql          # Seed data
│   └── config.toml       # Supabase config
│
├── docs/                  # Documentation
├── tests/                 # Integration tests
├── memory-bank/          # Project memory and documentation
├── .github/              # GitHub Actions workflows
├── package.json          # Workspace configuration
└── README.md
```

## Technical Constraints

### Performance Requirements
- API response time: < 200ms (95th percentile)
- Supabase query time: < 50ms average
- Frontend bundle size: < 500KB gzipped
- Time to first contentful paint: < 1.5s
- AI response time: < 5s for complex queries
- Real-time updates: < 100ms latency

### Security Requirements
- HTTPS only in production
- Supabase RLS policies for data access control
- JWT token management via Supabase Auth
- Input validation on all endpoints
- SQL injection prevention via Supabase client
- XSS protection headers
- Rate limiting on all APIs
- Audit logging for all data modifications

### Scalability Considerations
- Supabase auto-scaling infrastructure
- Connection pooling via Supabase
- Real-time subscriptions optimization
- Edge function deployment
- CDN integration for static assets
- Global database distribution

## Dependencies Management

### Core Frontend Dependencies
```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "typescript": "^5.0.0",
  "@supabase/supabase-js": "^2.38.0",
  "@tanstack/react-query": "^4.0.0",
  "react-router-dom": "^6.0.0",
  "react-hook-form": "^7.0.0",
  "zod": "^3.0.0",
  "tailwindcss": "^3.0.0",
  "@headlessui/react": "^1.0.0"
}
```

### Core Backend Dependencies
```json
{
  "express": "^4.18.0",
  "typescript": "^5.0.0",
  "@supabase/supabase-js": "^2.38.0",
  "redis": "^4.5.0",
  "jsonwebtoken": "^9.0.0",
  "zod": "^3.0.0",
  "cors": "^2.8.0",
  "helmet": "^7.0.0",
  "morgan": "^1.10.0"
}
```

### Development Dependencies
```json
{
  "@types/node": "^20.0.0",
  "@types/express": "^4.17.0",
  "supabase": "^1.127.0",
  "eslint": "^8.0.0",
  "prettier": "^3.0.0",
  "jest": "^29.0.0",
  "supertest": "^6.3.0",
  "playwright": "^1.40.0"
}
```

## Supabase Schema Design

### Core Tables Structure
```sql
-- Projects table
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by UUID REFERENCES auth.users(id),
  updated_by UUID REFERENCES auth.users(id)
);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view their own projects" ON projects
  FOR SELECT USING (auth.uid() = created_by);

CREATE POLICY "Users can create projects" ON projects
  FOR INSERT WITH CHECK (auth.uid() = created_by);
```

### Real-time Subscriptions
```javascript
// Real-time project updates
const subscription = supabase
  .channel('projects')
  .on('postgres_changes', 
    { event: '*', schema: 'public', table: 'projects' },
    (payload) => {
      console.log('Project updated:', payload)
    }
  )
  .subscribe()
```

This updated technical context integrates Supabase as the primary database solution with MCP configuration for enhanced AI-powered development in Cursor. 