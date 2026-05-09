# Contributing to Aether Weather

Thank you for your interest in contributing to Aether Weather! We welcome contributions from everyone. This document provides guidelines and instructions for contributing.

## 🎯 Code of Conduct

Be respectful, inclusive, and professional. We're committed to providing a welcoming environment for all contributors.

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn
- Git

### Setup Development Environment

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/aether-weather.git
   cd aether-weather
   ```

2. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/cyb3er-abhixth/aether-weather.git
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Start development server**
   ```bash
   npm start
   ```

## 📋 Development Guidelines

### Code Style

- **TypeScript**: Use strict type checking. Avoid `any` types when possible.
- **Components**: Keep components small and focused (single responsibility)
- **Naming**: Use clear, descriptive names for variables, functions, and components
  - Components: PascalCase (e.g., `WeatherCard`)
  - Functions/Variables: camelCase (e.g., `getWeatherData`)
  - Constants: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)

### Formatting & Linting

```bash
# Format code with Prettier
npm run format

# Lint code with ESLint
npm run lint

# Fix linting issues
npm run lint --fix
```

### Component Structure

```typescript
// Example component structure
import React from 'react';
import styles from './WeatherCard.module.css';

interface WeatherCardProps {
  temperature: number;
  condition: string;
}

/**
 * Display current weather conditions
 */
const WeatherCard: React.FC<WeatherCardProps> = ({ temperature, condition }) => {
  return (
    <div className={styles.card}>
      {/* Component content */}
    </div>
  );
};

export default WeatherCard;
```

## 🔄 Git Workflow

### Branch Naming Convention

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Adding or updating tests

Example: `feature/add-temperature-toggle`

### Commit Messages

Follow conventional commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (no logic change)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Build, dependencies, etc.

**Examples:**
```
feat(weather): add temperature unit toggle
fix(api): handle geolocation permission denial
docs(readme): update installation instructions
```

### Creating a Pull Request

1. **Push your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create PR on GitHub**
   - Go to your fork on GitHub
   - Click "Compare & pull request"
   - Fill in the PR template
   - Reference any related issues using `Closes #123`

3. **PR Guidelines**
   - Provide a clear description of changes
   - Link related issues
   - Add screenshots for UI changes
   - Ensure all tests pass
   - Keep commits clean and logical

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch
```

**Testing Guidelines:**
- Write tests for new features
- Update tests when modifying existing functionality
- Aim for meaningful test coverage (70%+)
- Test edge cases and error scenarios

## 📚 Documentation

- Update README.md for user-facing changes
- Add/update JSDoc comments for functions and components
- Document API changes clearly
- Update CHANGELOG if you're a maintainer

## 🔍 Review Process

1. **Code Review**: At least one maintainer review required
2. **Tests**: All tests must pass
3. **CI/CD**: All GitHub Actions must pass
4. **Conflicts**: Resolve any merge conflicts
5. **Approval**: PR must be approved before merging

## ✨ What Makes a Great Contribution

- ✅ Solves a real problem or adds valuable functionality
- ✅ Clear, well-documented code
- ✅ Appropriate tests
- ✅ Updated documentation
- ✅ Follows project conventions
- ✅ Meaningful commit history

## 🐛 Reporting Bugs

1. Check if the bug already exists in [Issues](https://github.com/cyb3er-abhixth/aether-weather/issues)
2. Use the bug report template
3. Provide:
   - Clear description
   - Steps to reproduce
   - Expected behavior
   - Screenshots if applicable
   - Environment details

## 💡 Suggesting Features

1. Check [Issues](https://github.com/cyb3er-abhixth/aether-weather/issues) for similar requests
2. Use the feature request template
3. Explain the use case and benefits
4. Provide any relevant examples or mockups

## ❓ Questions?

- 📖 Check the [Wiki](https://github.com/cyb3er-abhixth/aether-weather/wiki)
- 💬 Start a [Discussion](https://github.com/cyb3er-abhixth/aether-weather/discussions)
- 🐛 [Open an Issue](https://github.com/cyb3er-abhixth/aether-weather/issues)

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for making Aether Weather better! 🌤️**
