# Deployment Guide

Guide for deploying the Pokémon API to production environments.

## Table of Contents

- [Vercel Deployment](#vercel-deployment)
- [Environment Variables](#environment-variables)
- [Pre-deployment Checklist](#pre-deployment-checklist)
- [Monitoring](#monitoring)
- [Troubleshooting](#troubleshooting)

---

## Vercel Deployment

### Prerequisites

- Vercel account (free at [vercel.com](https://vercel.com))
- Git repository (GitHub, GitLab, or Bitbucket)
- MongoDB Atlas account (for cloud database)

### Step 1: Prepare Your Repository

1. Ensure `.env` is in `.gitignore`:
```bash
# .gitignore should contain:
.env
.env.local
```

2. Commit all changes:
```bash
git add .
git commit -m "Prepare for deployment"
git push
```

### Step 2: Create MongoDB Atlas Cluster

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user with a strong password
4. Get your connection string:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/pokemon?retryWrites=true&w=majority
   ```
5. Add your IP to the whitelist (or allow all IPs for development)

### Step 3: Deploy to Vercel

#### Option A: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Select your Git repository
4. Configure project:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Add environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `PORT`: `3000` (optional)
6. Click "Deploy"

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# For production
vercel --prod
```

### Step 4: Verify Deployment

1. Visit your Vercel project URL
2. Test the API endpoints:
```bash
curl https://your-project.vercel.app/pokemon
```

3. Access Swagger UI:
```
https://your-project.vercel.app/api
```

---

## Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/pokemon` |
| `PORT` | Server port (optional) | `3000` |

### Setting Environment Variables in Vercel

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add each variable:
   - **Name**: Variable name
   - **Value**: Variable value
   - **Environments**: Select which environments (Production, Preview, Development)
4. Click "Save"

### Local Development

Create a `.env` file in the root directory:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pokemon?retryWrites=true&w=majority
PORT=3000
```

**Important**: Never commit `.env` to Git!

---

## Pre-deployment Checklist

Before deploying to production:

- [ ] All tests pass: `npm run test`
- [ ] E2E tests pass: `npm run test:e2e`
- [ ] No console errors or warnings
- [ ] `.env` is in `.gitignore`
- [ ] MongoDB connection string is correct
- [ ] All environment variables are set in Vercel
- [ ] Code is committed and pushed to Git
- [ ] No sensitive data in code or comments
- [ ] API documentation is up to date

---

## Build and Start Commands

### Build Command

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Start Command

```bash
npm run start:prod
```

This starts the application using the production build.

### Development Command

```bash
npm run start:dev
```

This starts the application with hot-reload enabled (for development only).

---

## Monitoring

### Vercel Analytics

1. Go to your Vercel project
2. Click "Analytics"
3. View:
   - Response times
   - Request count
   - Error rates
   - Bandwidth usage

### Application Logs

1. Go to your Vercel project
2. Click "Deployments"
3. Select a deployment
4. View logs in the "Logs" tab

### MongoDB Monitoring

1. Go to MongoDB Atlas
2. Click "Monitoring"
3. View:
   - Database performance
   - Query patterns
   - Connection count

---

## Performance Optimization

### Build Optimization

The NestJS build is already optimized with:
- Tree-shaking
- Code minification
- Dead code elimination

### Database Optimization

1. Add indexes to frequently queried fields:
```javascript
// In pokemon.schema.ts
schema.index({ name: 1 });
schema.index({ type: 1 });
```

2. Use MongoDB connection pooling (already configured in Mongoose)

### API Optimization

1. Enable response compression (already configured)
2. Use caching headers for static content
3. Implement pagination for large datasets (future enhancement)

---

## Scaling

### Horizontal Scaling

Vercel automatically scales your application based on traffic.

### Database Scaling

For MongoDB Atlas:
1. Upgrade to a paid cluster for better performance
2. Enable auto-scaling
3. Use read replicas for high-traffic scenarios

---

## Troubleshooting

### Deployment Failed

**Error**: "Build failed"

**Solutions**:
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version compatibility
4. Run `npm run build` locally to test

### Application Crashes After Deployment

**Error**: "Application crashed"

**Solutions**:
1. Check application logs in Vercel
2. Verify environment variables are set correctly
3. Test MongoDB connection string
4. Check for runtime errors in logs

### Scalar API Reference (ERR_REQUIRE_ESM)

**Error**: `Error [ERR_REQUIRE_ESM]: require() of ES Module ... @scalar/nestjs-api-reference`

**Solutions**:
1. The application now loads Scalar via dynamic `import()` to support Vercel's ESM environment. Ensure you are deploying the latest code.
2. If you want to disable Scalar documentation in environments that do not need it, set `ENABLE_SCALAR_DOCS=false` in the deployment environment variables.
3. After updating environment variables, redeploy the project from the Vercel dashboard.

### MongoDB Connection Timeout

**Error**: "MongooseError: Cannot connect to MongoDB"

**Solutions**:
1. Verify `MONGODB_URI` is correct
2. Check MongoDB Atlas whitelist includes Vercel IPs
3. Verify database user credentials
4. Test connection string locally

### Slow Response Times

**Error**: "API responses are slow"

**Solutions**:
1. Check MongoDB query performance
2. Review Vercel analytics for bottlenecks
3. Add database indexes
4. Consider upgrading MongoDB cluster

### 404 Errors on API Routes

**Error**: "Cannot POST /pokemon"

**Solutions**:
1. Verify routes are correctly configured
2. Check that the API is running
3. Verify the correct URL is being used
4. Check CORS settings if calling from browser

---

## Rollback

If you need to rollback to a previous version:

1. Go to Vercel project
2. Click "Deployments"
3. Find the previous working deployment
4. Click the three dots menu
5. Select "Promote to Production"

---

## Continuous Deployment

Vercel automatically deploys when you push to your main branch.

### Disable Auto-deployment

1. Go to project settings
2. Navigate to "Git"
3. Disable "Automatic Deployments"

### Preview Deployments

Every pull request automatically gets a preview deployment URL.

---

## Security

### Secrets Management

- Never commit `.env` files
- Use Vercel's environment variables for secrets
- Rotate MongoDB credentials regularly
- Use strong passwords for MongoDB

### HTTPS

All Vercel deployments use HTTPS by default.

### API Security

- Consider adding authentication in the future
- Implement rate limiting
- Validate all inputs
- Use CORS appropriately

---

## Cost Considerations

### Vercel

- Free tier: Up to 100 GB bandwidth/month
- Paid tier: $20/month + usage

### MongoDB Atlas

- Free tier: 512 MB storage
- Paid tier: Starts at $57/month

---

## Support

For deployment issues:

1. Check [Vercel Documentation](https://vercel.com/docs)
2. Check [MongoDB Atlas Documentation](https://docs.mongodb.com/atlas/)
3. Review application logs
4. Check [NestJS Documentation](https://docs.nestjs.com/)

---

## Next Steps

- Set up monitoring and alerts
- Implement authentication
- Add rate limiting
- Optimize database queries
- Set up CI/CD pipeline
