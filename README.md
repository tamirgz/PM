# Project Management System

This project is a web-based application designed for project management, allowing users to create and manage tasks, projects, and employees. The application is built using React for the client-side and Node.js for the server-side, with an on-prem database for data storage.

## Features

- **Task Management**: Create, edit, and manage tasks assigned to projects.
- **Project Management**: Create and manage projects, including associated tasks.
- **Employee Management**: Manage employees and assign them to tasks.
- **Dashboard**: View key metrics and insights related to projects and tasks.

## File Structure

```
project-management
├── src
│   ├── client
│   │   ├── components
│   │   │   ├── Task
│   │   │   ├── Project
│   │   │   └── Employee
│   │   ├── pages
│   │   └── App.tsx
│   ├── server
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── config
│   │   └── server.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd project-management
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the database**: Configure your on-prem database connection in `src/server/config/database.ts`.

4. **Run the application**:
   ```bash
   npm start
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.