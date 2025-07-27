# Supabase Setup Guide for Rebase Project

This guide will help you set up Supabase to collect form responses and analytics for your Rebase project.

## Step 1: Create Supabase Account

1. Go to [supabase.com](https://supabase.com)
2. Sign up for a free account
3. Create a new project
4. Wait for the project to be set up (this takes a few minutes)

## Step 2: Get Your Project Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy your **Project URL** and **anon public key**
3. You'll need these to update your code

## Step 3: Create Database Tables

1. In your Supabase dashboard, go to **SQL Editor**
2. Run the following SQL commands:

```sql
-- Table for contact form submissions
CREATE TABLE contact_submissions (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ip_address INET,
  user_agent TEXT
);

-- Table for partnership form submissions
CREATE TABLE partnership_submissions (
  id BIGSERIAL PRIMARY KEY,
  org_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  org_type TEXT NOT NULL,
  services TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ip_address INET,
  user_agent TEXT
);

-- Table for analytics (page views, etc.)
CREATE TABLE page_analytics (
  id BIGSERIAL PRIMARY KEY,
  page_name TEXT NOT NULL,
  user_agent TEXT,
  ip_address INET,
  referrer TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Step 4: Update Your Code

1. **Update `script.js`**:
   - Replace `YOUR_SUPABASE_URL_HERE` with your actual Supabase URL
   - Replace `YOUR_SUPABASE_ANON_KEY_HERE` with your actual anon key

2. **Update `dashboard.html`**:
   - Replace `YOUR_SUPABASE_URL_HERE` with your actual Supabase URL
   - Replace `YOUR_SUPABASE_ANON_KEY_HERE` with your actual anon key

## Step 5: Test Your Setup

1. Open your website and submit a test form
2. Check your Supabase dashboard → **Table Editor** to see if the data appears
3. Open `dashboard.html` to view your form responses and analytics

## Step 6: Access Your Dashboard

To view your form responses and analytics:
- Open `dashboard.html` in your browser
- Or navigate to: `http://localhost:3000/dashboard.html` (if using a local server)

## What You'll Get

### Form Responses
- **Contact Form Submissions**: Name, email, message, timestamp
- **Partnership Requests**: Organization details, contact info, services

### Analytics
- **Page Views**: Track which pages visitors view
- **Visitor Information**: IP addresses, user agents, referrers
- **Overview Stats**: Total submissions, page views, unique pages

## Security Notes

- The anon key is safe to use in frontend code (it has limited permissions)
- Consider setting up Row Level Security (RLS) for production
- IP addresses are collected for analytics but can be removed if needed

## Troubleshooting

### Forms not submitting?
- Check browser console for errors
- Verify your Supabase URL and key are correct
- Make sure your tables were created successfully

### Dashboard not loading data?
- Check that your Supabase credentials are correct
- Verify the table names match exactly
- Check browser console for error messages

### Need to export data?
- Go to Supabase dashboard → **Table Editor**
- Select your table and use the export feature
- Or use the SQL editor to query your data

## Next Steps

Once this is working, you might want to:
1. Set up email notifications for new form submissions
2. Add more detailed analytics tracking
3. Create custom reports and visualizations
4. Set up automated data backups

## Support

If you need help:
- Check the [Supabase documentation](https://supabase.com/docs)
- Look at the browser console for error messages
- Verify your database tables exist in the Supabase dashboard 