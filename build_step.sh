#!/bin/bash

echo "🔧 Running build script..."

# Install dependencies
npm install

# Build the React app
npm run build

# (Optional) Run tests
# npm run test

echo "✅ Build complete"
