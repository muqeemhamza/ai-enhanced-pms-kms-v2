# 🎯 Development Best Practices & Guidelines

## Table of Contents
1. [Code Quality Standards](#code-quality-standards)
2. [TypeScript Best Practices](#typescript-best-practices)
3. [React Development Guidelines](#react-development-guidelines)
4. [Backend Development Standards](#backend-development-standards)
5. [Database Design Principles](#database-design-principles)
6. [AI Integration Guidelines](#ai-integration-guidelines)
7. [Security Best Practices](#security-best-practices)
8. [Testing Standards](#testing-standards)
9. [Performance Guidelines](#performance-guidelines)
10. [Documentation Standards](#documentation-standards)

---

## Code Quality Standards

### General Principles
- **Clarity over Cleverness**: Write code that tells a story
- **Consistency**: Follow established patterns throughout the codebase
- **Maintainability**: Consider the developer who will maintain this code in 6 months
- **Single Responsibility**: Each function, class, and module should have one reason to change
- **DRY (Don't Repeat Yourself)**: Extract common patterns into reusable components

### Naming Conventions
```typescript
// Use descriptive, intention-revealing names
✅ Good
const getUserProjectsByStatus = (userId: string, status: ProjectStatus) => { ... }
const isProjectOverdue = (project: Project): boolean => { ... }
const CACHE_EXPIRY_DURATION = 3600; // seconds

❌ Bad
const getProjs = (id: string, s: string) => { ... }
const check = (p: any): boolean => { ... }
const TIMEOUT = 3600;
```

### Code Organization
```typescript
// File structure should reflect business domains
src/
├── domains/
│   ├── project/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types/
│   ├── knowledge/
│   └── user/
├── shared/
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   └── types/
└── app/
```

---

## TypeScript Best Practices

### Strict Type Safety
```typescript
// Always use strict mode in tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}

// Define comprehensive interfaces
interface Project {
  readonly id: string;
  readonly name: string;
  readonly description: string | null;
  readonly status: ProjectStatus;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly metadata: ProjectMetadata;
}

// Use discriminated unions for type safety
type ProjectStatus = 
  | { type: 'planning'; estimatedStartDate: Date }
  | { type: 'active'; startDate: Date; estimatedEndDate: Date }
  | { type: 'completed'; startDate: Date; endDate: Date }
  | { type: 'paused'; pausedAt: Date; reason: string };
```

### Generic Types and Utility Types
```typescript
// Create reusable generic types
interface APIResponse<T> {
  data: T;
  meta: {
    total: number;
    page: number;
    limit: number;
  };
  errors?: APIError[];
}

// Use utility types for transformations
type CreateProjectRequest = Omit<Project, 'id' | 'createdAt' | 'updatedAt'>;
type ProjectSummary = Pick<Project, 'id' | 'name' | 'status'>;
type PartialProjectUpdate = Partial<Pick<Project, 'name' | 'description' | 'status'>>;
```

### Error Handling with Types
```typescript
// Define typed error classes
class ProjectNotFoundError extends Error {
  readonly code = 'PROJECT_NOT_FOUND';
  readonly statusCode = 404;
  
  constructor(projectId: string) {
    super(`Project with ID ${projectId} not found`);
    this.name = 'ProjectNotFoundError';
  }
}

// Use Result pattern for error handling
type Result<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E };

async function getProject(id: string): Promise<Result<Project, ProjectNotFoundError>> {
  try {
    const project = await projectRepository.findById(id);
    return { success: true, data: project };
  } catch (error) {
    return { success: false, error: new ProjectNotFoundError(id) };
  }
}
```

---

## React Development Guidelines

### Component Design Principles
```typescript
// Use composition over inheritance
interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outlined' | 'elevated';
}

const Card: React.FC<CardProps> = ({ children, className, variant = 'default' }) => {
  return (
    <div className={cn(cardVariants[variant], className)}>
      {children}
    </div>
  );
};

// Prefer function components with hooks
const ProjectList: React.FC<ProjectListProps> = ({ userId }) => {
  const { data: projects, isLoading, error } = useProjects(userId);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  
  if (isLoading) return <ProjectListSkeleton />;
  if (error) return <ErrorBoundary error={error} />;
  
  return (
    <div className="project-list">
      {projects.map(project => (
        <ProjectCard 
          key={project.id} 
          project={project}
          isSelected={selectedProject === project.id}
          onSelect={setSelectedProject}
        />
      ))}
    </div>
  );
};
```

### Custom Hooks for Business Logic
```typescript
// Extract business logic into custom hooks
const useProjects = (userId: string) => {
  return useQuery({
    queryKey: ['projects', userId],
    queryFn: () => projectService.getByUserId(userId),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
  });
};

const useProjectCreation = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: projectService.create,
    onSuccess: (newProject) => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast.success(`Project "${newProject.name}" created successfully`);
    },
    onError: (error) => {
      toast.error(`Failed to create project: ${error.message}`);
    },
  });
};
```

### State Management Patterns
```typescript
// Use Zustand for global state
interface ProjectStore {
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
  
  view: 'dashboard' | 'kanban' | 'timeline';
  setView: (view: ProjectStore['view']) => void;
  
  filters: ProjectFilters;
  setFilters: (filters: Partial<ProjectFilters>) => void;
}

const useProjectStore = create<ProjectStore>((set) => ({
  selectedProject: null,
  setSelectedProject: (project) => set({ selectedProject: project }),
  
  view: 'dashboard',
  setView: (view) => set({ view }),
  
  filters: defaultFilters,
  setFilters: (filters) => set((state) => ({ 
    filters: { ...state.filters, ...filters } 
  })),
}));
```

---

## Backend Development Standards

### API Design Principles
```typescript
// RESTful API design with consistent patterns
// GET    /api/v1/projects              - List projects
// POST   /api/v1/projects              - Create project
// GET    /api/v1/projects/:id          - Get project
// PUT    /api/v1/projects/:id          - Update project
// DELETE /api/v1/projects/:id          - Delete project
// GET    /api/v1/projects/:id/epics    - List project epics

// Controller pattern with proper error handling
class ProjectController {
  async getProjects(req: AuthenticatedRequest, res: Response) {
    try {
      const { page = 1, limit = 20, status } = req.query;
      const userId = req.user.id;
      
      const result = await this.projectService.getProjects({
        userId,
        pagination: { page: Number(page), limit: Number(limit) },
        filters: { status: status as ProjectStatus }
      });
      
      res.json(result);
    } catch (error) {
      this.handleError(error, res);
    }
  }
  
  private handleError(error: unknown, res: Response) {
    if (error instanceof ValidationError) {
      res.status(400).json({ error: error.message, details: error.details });
    } else if (error instanceof NotFoundError) {
      res.status(404).json({ error: error.message });
    } else {
      logger.error('Unexpected error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
```

### Service Layer Architecture
```typescript
// Repository pattern for data access
interface ProjectRepository {
  findById(id: string): Promise<Project | null>;
  findByUserId(userId: string, options?: QueryOptions): Promise<Project[]>;
  create(data: CreateProjectData): Promise<Project>;
  update(id: string, data: UpdateProjectData): Promise<Project>;
  delete(id: string): Promise<void>;
}

// Service layer for business logic
class ProjectService {
  constructor(
    private projectRepo: ProjectRepository,
    private auditService: AuditService,
    private notificationService: NotificationService
  ) {}
  
  async createProject(data: CreateProjectData, userId: string): Promise<Project> {
    // Validate business rules
    await this.validateProjectCreation(data, userId);
    
    // Create project
    const project = await this.projectRepo.create({
      ...data,
      ownerId: userId,
      status: { type: 'planning', estimatedStartDate: data.estimatedStartDate }
    });
    
    // Record audit trail
    await this.auditService.log({
      action: 'project.created',
      userId,
      resourceId: project.id,
      details: { projectName: project.name }
    });
    
    // Send notifications
    await this.notificationService.projectCreated(project);
    
    return project;
  }
}
```

---

## Database Design Principles

### Schema Design Best Practices
```sql
-- Use meaningful table and column names
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL CHECK (length(trim(name)) > 0),
    description TEXT,
    status project_status NOT NULL DEFAULT 'planning',
    
    -- Always include audit fields
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES auth.users(id),
    updated_by UUID NOT NULL REFERENCES auth.users(id),
    
    -- Add constraints for data integrity
    CONSTRAINT valid_dates CHECK (
        (status = 'planning') OR 
        (start_date IS NOT NULL AND start_date <= COALESCE(end_date, start_date))
    )
);

-- Create proper indexes for performance
CREATE INDEX idx_projects_owner_status ON projects(owner_id, status);
CREATE INDEX idx_projects_created_at ON projects(created_at DESC);
CREATE INDEX idx_projects_name_search ON projects USING gin(to_tsvector('english', name));
```

### Migration Best Practices
```sql
-- Always make migrations reversible
-- Migration: 20241215_add_project_templates.sql
BEGIN;

-- Add new column with default value
ALTER TABLE projects 
ADD COLUMN template_id UUID REFERENCES project_templates(id);

-- Add index
CREATE INDEX idx_projects_template_id ON projects(template_id);

-- Update trigger for updated_at
CREATE TRIGGER update_projects_updated_at
    BEFORE UPDATE ON projects
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

COMMIT;

-- Rollback: 20241215_add_project_templates_rollback.sql
BEGIN;

DROP TRIGGER IF EXISTS update_projects_updated_at ON projects;
DROP INDEX IF EXISTS idx_projects_template_id;
ALTER TABLE projects DROP COLUMN IF EXISTS template_id;

COMMIT;
```

---

## AI Integration Guidelines

### Prompt Engineering Best Practices
```typescript
// Create structured prompt templates
interface PromptTemplate {
  id: string;
  name: string;
  version: string;
  template: string;
  variables: PromptVariable[];
  examples: PromptExample[];
}

const TASK_GENERATION_PROMPT = {
  id: 'task-generation-v2',
  template: `
You are an expert project manager helping break down a story into actionable tasks.

Context:
- Project: {projectName}
- Epic: {epicTitle}
- Story: {storyTitle}
- Story Description: {storyDescription}
- Acceptance Criteria: {acceptanceCriteria}

Instructions:
1. Generate 3-7 specific, actionable tasks
2. Each task should be completable in 2-8 hours
3. Include estimation in hours
4. Consider dependencies between tasks
5. Focus on {focusArea} if specified

Previous similar work:
{relatedKnowledge}

Generate tasks in this JSON format:
{
  "tasks": [
    {
      "title": "Specific actionable title",
      "description": "Detailed description with context",
      "estimatedHours": 4,
      "dependencies": ["task-1-id"],
      "complexity": "medium",
      "skills": ["frontend", "api-integration"]
    }
  ],
  "confidence": 0.85,
  "assumptions": ["List any assumptions made"],
  "recommendations": ["Additional suggestions"]
}
`,
  variables: ['projectName', 'epicTitle', 'storyTitle', 'storyDescription', 'acceptanceCriteria', 'focusArea', 'relatedKnowledge']
};
```

### AI Response Handling
```typescript
// Structured AI response processing
interface AIResponse<T = any> {
  data: T;
  confidence: number;
  assumptions: string[];
  alternatives?: string[];
  reasoning?: string;
  metadata: {
    provider: 'claude' | 'openai';
    model: string;
    tokensUsed: number;
    latency: number;
  };
}

class AIService {
  async generateTasks(story: Story): Promise<AIResponse<Task[]>> {
    const context = await this.buildContext(story);
    const prompt = this.buildPrompt(TASK_GENERATION_PROMPT, context);
    
    try {
      const response = await this.primaryProvider.generate(prompt);
      
      // Validate and enhance response
      const validated = await this.validateResponse(response, TaskArraySchema);
      const enhanced = await this.enhanceWithConfidence(validated, context);
      
      return enhanced;
    } catch (error) {
      // Fallback to secondary provider
      return this.fallbackProvider.generate(prompt);
    }
  }
  
  private async buildContext(story: Story): Promise<AIContext> {
    const [project, epic, relatedKnowledge] = await Promise.all([
      this.projectService.getById(story.projectId),
      this.epicService.getById(story.epicId),
      this.knowledgeService.findSimilar(story.description, { limit: 3 })
    ]);
    
    return {
      project: project.name,
      epic: epic.title,
      story: story.title,
      description: story.description,
      acceptanceCriteria: story.acceptanceCriteria,
      relatedKnowledge: relatedKnowledge.map(k => k.summary).join('\n')
    };
  }
}
```

---

## Security Best Practices

### Authentication & Authorization
```typescript
// Implement proper JWT validation
const validateJWT = async (token: string): Promise<User> => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JWTPayload;
    
    // Check token expiry
    if (decoded.exp < Date.now() / 1000) {
      throw new Error('Token expired');
    }
    
    // Validate user exists and is active
    const user = await userService.getById(decoded.sub);
    if (!user || !user.isActive) {
      throw new Error('Invalid user');
    }
    
    return user;
  } catch (error) {
    throw new UnauthorizedError('Invalid token');
  }
};

// Row Level Security for multi-tenancy
const checkProjectAccess = async (userId: string, projectId: string): Promise<boolean> => {
  const membership = await db.query(`
    SELECT 1 FROM project_members 
    WHERE user_id = $1 AND project_id = $2 AND status = 'active'
    UNION
    SELECT 1 FROM projects 
    WHERE id = $2 AND owner_id = $1
  `, [userId, projectId]);
  
  return membership.rows.length > 0;
};
```

### Input Validation & Sanitization
```typescript
// Use Zod for comprehensive validation
const CreateProjectSchema = z.object({
  name: z.string().min(1).max(255).trim(),
  description: z.string().max(2000).optional(),
  estimatedStartDate: z.string().datetime().optional(),
  templateId: z.string().uuid().optional(),
  tags: z.array(z.string().max(50)).max(10).default([]),
  settings: z.object({
    isPublic: z.boolean().default(false),
    allowExternalSharing: z.boolean().default(false)
  }).default({})
});

// Sanitize HTML content
const sanitizeHTML = (html: string): string => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'ul', 'ol', 'li'],
    ALLOWED_ATTR: []
  });
};
```

---

## Testing Standards

### Unit Testing Best Practices
```typescript
// Test structure: Arrange, Act, Assert
describe('ProjectService', () => {
  let projectService: ProjectService;
  let mockProjectRepo: jest.Mocked<ProjectRepository>;
  let mockAuditService: jest.Mocked<AuditService>;
  
  beforeEach(() => {
    mockProjectRepo = createMockProjectRepository();
    mockAuditService = createMockAuditService();
    projectService = new ProjectService(mockProjectRepo, mockAuditService);
  });
  
  describe('createProject', () => {
    it('should create project with valid data', async () => {
      // Arrange
      const projectData = {
        name: 'Test Project',
        description: 'Test Description'
      };
      const userId = 'user-123';
      const expectedProject = { id: 'proj-123', ...projectData, ownerId: userId };
      
      mockProjectRepo.create.mockResolvedValue(expectedProject);
      
      // Act
      const result = await projectService.createProject(projectData, userId);
      
      // Assert
      expect(result).toEqual(expectedProject);
      expect(mockProjectRepo.create).toHaveBeenCalledWith({
        ...projectData,
        ownerId: userId,
        status: { type: 'planning', estimatedStartDate: undefined }
      });
      expect(mockAuditService.log).toHaveBeenCalledWith({
        action: 'project.created',
        userId,
        resourceId: 'proj-123',
        details: { projectName: 'Test Project' }
      });
    });
    
    it('should throw validation error for invalid data', async () => {
      // Arrange
      const invalidData = { name: '', description: 'Valid description' };
      const userId = 'user-123';
      
      // Act & Assert
      await expect(
        projectService.createProject(invalidData, userId)
      ).rejects.toThrow(ValidationError);
    });
  });
});
```

### Integration Testing
```typescript
// Test API endpoints with real database
describe('Projects API', () => {
  let app: Express;
  let testDb: Database;
  let authToken: string;
  
  beforeAll(async () => {
    testDb = await setupTestDatabase();
    app = createTestApp(testDb);
    authToken = await createTestUser(testDb);
  });
  
  afterAll(async () => {
    await teardownTestDatabase(testDb);
  });
  
  beforeEach(async () => {
    await cleanupTestData(testDb);
  });
  
  describe('POST /api/v1/projects', () => {
    it('should create project and return 201', async () => {
      const projectData = {
        name: 'Integration Test Project',
        description: 'Created via integration test'
      };
      
      const response = await request(app)
        .post('/api/v1/projects')
        .set('Authorization', `Bearer ${authToken}`)
        .send(projectData)
        .expect(201);
      
      expect(response.body).toMatchObject({
        id: expect.any(String),
        name: projectData.name,
        description: projectData.description,
        status: 'planning'
      });
      
      // Verify in database
      const created = await testDb.query(
        'SELECT * FROM projects WHERE id = $1',
        [response.body.id]
      );
      expect(created.rows).toHaveLength(1);
    });
  });
});
```

---

## Performance Guidelines

### Frontend Performance
```typescript
// Optimize React components
const ProjectList = React.memo<ProjectListProps>(({ projects, onSelect }) => {
  // Use callback memoization for stable references
  const handleSelect = useCallback((projectId: string) => {
    onSelect(projectId);
  }, [onSelect]);
  
  // Memoize expensive calculations
  const sortedProjects = useMemo(() => {
    return projects.sort((a, b) => a.name.localeCompare(b.name));
  }, [projects]);
  
  return (
    <VirtualizedList
      items={sortedProjects}
      renderItem={({ item }) => (
        <ProjectCard 
          key={item.id}
          project={item}
          onSelect={handleSelect}
        />
      )}
    />
  );
});

// Implement proper loading states
const useProjects = (userId: string) => {
  return useQuery({
    queryKey: ['projects', userId],
    queryFn: () => projectService.getByUserId(userId),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: (failureCount, error) => {
      // Don't retry on 4xx errors
      if (error.status >= 400 && error.status < 500) return false;
      return failureCount < 3;
    }
  });
};
```

### Database Performance
```sql
-- Optimize queries with proper indexes
CREATE INDEX CONCURRENTLY idx_tasks_assignee_status 
ON tasks(assignee_id, status) 
WHERE status IN ('todo', 'in_progress');

-- Use materialized views for complex aggregations
CREATE MATERIALIZED VIEW project_statistics AS
SELECT 
  p.id,
  p.name,
  COUNT(DISTINCT e.id) as epic_count,
  COUNT(DISTINCT s.id) as story_count,
  COUNT(DISTINCT t.id) as task_count,
  COUNT(DISTINCT CASE WHEN t.status = 'completed' THEN t.id END) as completed_tasks,
  AVG(CASE WHEN t.status = 'completed' THEN t.actual_hours END) as avg_task_hours
FROM projects p
LEFT JOIN epics e ON e.project_id = p.id
LEFT JOIN stories s ON s.epic_id = e.id
LEFT JOIN tasks t ON t.story_id = s.id
GROUP BY p.id, p.name;

-- Refresh periodically
CREATE OR REPLACE FUNCTION refresh_project_statistics()
RETURNS void AS $$
BEGIN
  REFRESH MATERIALIZED VIEW CONCURRENTLY project_statistics;
END;
$$ LANGUAGE plpgsql;
```

---

## Documentation Standards

### Code Documentation
```typescript
/**
 * Generates AI-powered task breakdown for a given story
 * 
 * @param story - The story to break down into tasks
 * @param options - Configuration options for task generation
 * @returns Promise resolving to generated tasks with confidence scores
 * 
 * @example
 * ```typescript
 * const tasks = await generateTasksForStory(story, {
 *   maxTasks: 5,
 *   focusArea: 'frontend',
 *   includeEstimations: true
 * });
 * 
 * if (tasks.confidence > 0.8) {
 *   await saveTasks(tasks.data);
 * }
 * ```
 * 
 * @throws {ValidationError} When story data is invalid
 * @throws {AIServiceError} When AI service is unavailable
 */
async function generateTasksForStory(
  story: Story,
  options: TaskGenerationOptions = {}
): Promise<AIResponse<Task[]>> {
  // Implementation...
}
```

### API Documentation
```typescript
/**
 * @swagger
 * /api/v1/projects:
 *   post:
 *     summary: Create a new project
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateProjectRequest'
 *           example:
 *             name: "Client Onboarding System"
 *             description: "Streamline new client onboarding process"
 *             estimatedStartDate: "2024-01-15T00:00:00Z"
 *     responses:
 *       201:
 *         description: Project created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       400:
 *         description: Invalid request data
 *       401:
 *         description: Unauthorized
 */
```

---

**Document Version**: 1.0  
**Last Updated**: December 2024  
**Next Review**: January 2025  
**Maintained By**: AI-Enhanced PMS & KMS Development Team
