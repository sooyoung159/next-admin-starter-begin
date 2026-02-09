# Next Admin Starter - Free

🆓 **Free Version** - Modern Admin Dashboard Starter Kit

## 🚀 Free Features

- ✅ **Basic Dashboard** - Data visualization
- ✅ **Email Login** - Basic authentication system
- ✅ **User Management** - CRUD functionality
- ✅ **Payment History** - Transaction management
- ✅ **Multi-language Support** - Korean/English
- ✅ **Responsive Design** - Mobile optimized
- ✅ **Modern UI** - Tailwind CSS + Shadcn/ui

## 💰 Premium Version Differences

| Feature | Free Version | Premium Version |
|---------|---------------|----------------|
| Basic Dashboard | ✅ | ✅ |
| Email Login | ✅ | ✅ |
| User Management | ✅ | ✅ |
| Payment History | ✅ | ✅ |
| Multi-language Support | ✅ | ✅ |
| **Google OAuth** | ❌ | ✅ |
| **Advanced Analytics** | ❌ | ✅ |
| **Pricing Page** | ❌ | ✅ |
| **Priority Support** | ❌ | ✅ |
| **Setup Guide** | ❌ | ✅ |

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Database**: Supabase
- **Styling**: Tailwind CSS
- **Components**: Shadcn/ui
- **Icons**: Lucide React
- **Internationalization**: react-i18next
- **TypeScript**: TypeScript

## 📋 Requirements

- Node.js 18+
- npm or yarn

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone [your-repo-url]
cd next-admin-starter-free
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create `.env.local` file:

```env
# Supabase configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Supabase Project Setup

1. Create new project at [Supabase Dashboard](https://supabase.com/dashboard)
2. Check basic settings in Authentication > Settings
3. Create required tables in Database

### 5. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📊 Database Schema

### users table

```sql
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'user',
  status VARCHAR(50) DEFAULT 'active',
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### payments table

```sql
CREATE TABLE payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  amount DECIMAL(10,2) NOT NULL,
  status VARCHAR(50) DEFAULT 'success',
  date TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🎨 Free Version Extension Guide

### ✅ Customization Available Only in Free Version

#### 1. **Add New Pages**
```bash
# Create new page
mkdir src/app/new-feature
touch src/app/new-feature/page.tsx
```

```tsx
// src/app/new-feature/page.tsx
export default function NewFeature() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">New Feature</h1>
      <p>Add freely in Free version!</p>
    </div>
  );
}
```

#### 2. **Add New UI Components**
```bash
# Create component
mkdir src/components/features
touch src/components/features/my-component.tsx
```

```tsx
// src/components/features/my-component.tsx
export function MyComponent() {
  return (
    <div className="p-4 border rounded-lg bg-card">
      <h3 className="font-semibold">My Component</h3>
      <p className="text-sm text-muted-foreground">
        Unlimited expansion in Free version!
      </p>
    </div>
  );
}
```

#### 3. **Add New API Routes**
```bash
# Create API route
mkdir src/app/api/data
touch src/app/api/data/route.ts
```

```tsx
// src/app/api/data/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    message: "Free version API!",
    timestamp: new Date().toISOString(),
  };
  
  return NextResponse.json(data);
}
```

#### 4. **Theme Color Customization**
```css
/* src/app/globals.css */
:root {
  --primary: 220 90% 56%; /* default blue */
  --primary-foreground: 210 40% 98%;
  
  /* Change to your preferred color */
  --primary: 142 76% 36%; /* green */
  --primary: 0 84% 60%; /* red */
  --primary: 280 100% 70%; /* purple */
}
```

#### 5. **Add Multiple Languages**
```typescript
// lib/i18n.ts
const ja = {
  welcome: "ようこそ",
  dashboard: "ダッシュボード",
  // Add Japanese translations
};

i18n.init({
  resources: {
    ko: { translation: ko },
    en: { translation: en },
    ja: { translation: ja }, // Add new language
  },
});
```

#### 6. **Add Database Tables**
```sql
-- Create new table (Free version possible)
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Add RLS policy
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view categories" ON categories
    FOR SELECT USING (true);
```

### 🚀 Free Version No Limitations

In Free version, you can do the following **unlimited**:
- ✅ Unlimited page additions
- ✅ Unlimited component creation
- ✅ Unlimited API routes
- ✅ Complete theme customization
- ✅ Unlimited language additions
- ✅ Database expansion
- ✅ Complete open-source modification

### 💡 Recommended Extension Ideas

1. **Blog Feature** - Post CRUD
2. **Gallery** - Image management
3. **Calendar** - Schedule management
4. **Chat** - Real-time messaging
5. **File Upload** - Document management

## 🎨 Customization

### Theme Color Changes

Modify CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 84% 4.9%;
  /* ... other colors */
}
```

### Add Multiple Languages

Add new languages in `lib/i18n.ts`:

```typescript
const ja = {
  // Japanese translations
};

i18n.init({
  resources: {
    ko: { translation: ko },
    en: { translation: en },
    ja: { translation: ja }, // Add new language
  },
});
```

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/          # Authentication pages
│   ├── (marketing)/     # Marketing pages
│   ├── dashboard/        # Dashboard pages
│   └── globals.css      # Global styles
├── components/
│   └── ui/             # UI components
├── lib/
│   ├── supabase/       # Supabase client
│   └── i18n.ts        # Internationalization settings
└── types/              # TypeScript types
```

## 🔐 Authentication

### Email Login
- Demo account provided by default:
  - Email: `test@test.com`
  - Password: `test1234`

## 📱 Routes

- `/` - Marketing homepage
- `/login` - Login page
- `/dashboard` - Dashboard (auth required)
- `/dashboard/users` - User management
- `/dashboard/payments` - Payment history
- `/dashboard/settings` - Settings page

## 🚀 Upgrade to Premium Version

Need more features? Check out the [Premium Version](https://github.com/your-org/next-admin-starter-premium):

- 🔥 **Google OAuth** login
- 📊 **Advanced Analytics** features
- 💰 **Pricing Page** template
- 🎨 **Additional Theme** options
- 🚀 **Priority Technical** support

## 🚀 Deployment

### Vercel

```bash
npm run build
vercel --prod
```

### Other Platforms

1. Build: `npm run build`
2. Start: `npm start`
3. Set environment variables
4. Connect domain

## 🤝 Contributing

1. Fork
2. Create feature branch
3. Commit & push
4. Pull Request

## 📄 License

MIT License

## 💬 Support

Report issues or contact us at [email](mailto:support@example.com)

---

**Made with ❤️ using Next.js 16 + Supabase**

**👉 [Upgrade to Premium Version](https://github.com/your-org/next-admin-starter-premium)**
