# Dynamic Form Generator

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Example JSON Schemas](#example-json-schemas)
  - [Basic Form Schema](#basic-form-schema)
- [Local Development Guide](#local-development-guide)
- [Testing](#testing)
  - [Running Tests](#running-tests)
- [Deployment Guide](#deployment-guide)
  - [Deploy to Vercel](#deploy-to-vercel)
- [Deployed Application](#deployed-application)
- [Additional Features](#additional-features)

## Project Overview
The Dynamic Form Generator is a React-based application that allows users to create forms dynamically based on a JSON schema. This project features a split-screen interface with a JSON editor and a real-time preview of the generated form. It supports form validation, responsive design, dark mode, and the ability to download form submissions as JSON.

## Features
- **Split-Screen Interface**: JSON editor and form preview side by side
- **Real-Time Updates**: Form preview updates as JSON schema is edited
- **Error Handling**: Real-time validation with error messages for invalid JSON
- **Responsive Design**: Mobile-friendly layout with a stacked view
- **Dark Mode Support**
- **Form Field Validation**: Display validation errors and success states
- **Copy Form JSON**: Button to copy the JSON schema
- **Download Submissions**: Option to download form submissions as a JSON file
- **Styled with Bootstrap**

## Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone https://github.com/AqshaPerween/dynamic-form-generator.git
   cd dynamic-form-generator
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Development Server**
   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Example JSON Schemas
### Basic Form Schema
```json
{
  "title": "User Registration",
  "fields": [
    {
      "label": "First Name",
      "type": "text",
      "name": "firstName",
      "required": true
    },
    {
      "label": "Email",
      "type": "email",
      "name": "email",
      "required": true
    },
    {
      "label": "Password",
      "type": "password",
      "name": "password",
      "required": true,
      "minLength": 6
    }
  ]
}
```
## Local Development Guide
- **JSON Editor**: Edit JSON schema with real-time syntax highlighting and validation.
- **Form Preview**: Changes in the JSON editor are instantly reflected in the form preview.
- **Dark Mode Toggle**: Activate dark mode from the UI.
- **Validation Messages**: Ensure your JSON schema is valid; errors are displayed in real-time.

## Testing
- **Playwright**: For end-to-end testing.
- **Jest**: For unit tests.

### Running Tests
```bash
npm test
```

## Deployment Guide
### Deploy to Vercel
1. Sign in to [Vercel](https://vercel.com/).
2. Link your GitHub repository.
3. Deploy the project directly from the main branch.

## Deployed Application
[Deployed Application Link](dynamic-form-generator-five.vercel.app)

## Additional Features
- **Copy JSON Button**: Copies the JSON schema to the clipboard.
- **Download Submissions**: Form submissions can be downloaded as JSON files for record-keeping.
- **Mobile Compatibility**: The UI is optimized for both desktop and mobile devices.

---
Feel free to reach out for any questions or issues!

