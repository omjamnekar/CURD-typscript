# Prisma CLI CRUD Tool

A simple command-line CRUD tool using **Prisma ORM** and **TypeScript** for interacting with a PostgreSQL database.

## 📦 Features

- ✅ Create a new record
- 📄 Read all records
- ✏️ Update an existing record
- ❌ Delete a record

## 🛠️ Technologies

- TypeScript
- Node.js
- Prisma
- PostgreSQL
- dotenv

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/prisma-cli-crud.git
cd prisma-cli-crud
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up `.env` File

Create a `.env` file in the root directory:

```
DATABASE_URL="postgresql://your_user:your_password@localhost:5432/your_db"
```

> Replace with your actual PostgreSQL credentials.

### 4. Define Your Prisma Schema

Make sure you have a `schema.prisma` like this in the `prisma/` folder:

```prisma
generator client {
  provider = "prisma-client-js"
  output   = "./generated/prisma"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Record {
  id          Int     @id @default(autoincrement())
  name        String
  description String
}
```

### 5. Migrate & Generate Prisma Client

```bash
npx prisma migrate dev --name init
npx prisma generate
```

> Ensure the import in your code matches the generated output path like `../prisma/generated/prisma`.

### 6. Use the CLI

#### ➕ Create a Record

```bash
npx ts-node src/index.ts create "Your Name" "Your Description"
```

#### 📄 Read All Records

```bash
npx ts-node src/index.ts read
```

#### 🔄 Update a Record

```bash
npx ts-node src/index.ts update 1 "Updated Name" "Updated Description"
```

#### ❌ Delete a Record

```bash
npx ts-node src/index.ts delete 1
```

## 📁 Project Structure

```
📦 project-root
├── 📂 prisma
│   ├── 📜 schema.prisma
│   └── 📂 generated
│       └── 📂 prisma
├── 📂 src
│   └── 📜 index.ts
├── 📜 .env
├── 📜 package.json
├── 📜 tsconfig.json
└── 📜 README.md
```

## 🧠 Additional Ideas (Optional)

- ✅ Input validation using Zod or Yup
- 📦 Export records to CSV or JSON
- 🔐 Role-based CLI authentication
- 🌐 REST or GraphQL API wrapper
- 🧪 Unit & Integration testing with Jest

## 📝 License

MIT License

---

Built with ❤️ using Prisma + Node.js
