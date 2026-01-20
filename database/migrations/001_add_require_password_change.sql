-- Migration: Add require_password_change column to users table
-- Date: 2026-01-15

-- Add the column if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'users' 
        AND column_name = 'require_password_change'
    ) THEN
        ALTER TABLE users ADD COLUMN require_password_change BOOLEAN DEFAULT false;
        RAISE NOTICE 'Column require_password_change added to users table';
    ELSE
        RAISE NOTICE 'Column require_password_change already exists';
    END IF;
END $$;

-- Optional: Set existing users to not require password change
-- UPDATE users SET require_password_change = false WHERE require_password_change IS NULL;
