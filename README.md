# Federated-Hospital-System
A privacy-preserving federated learning platform for collaborative disease detection across hospitals without sharing sensitive patient data.
live on : https://federated-system-v2-production.up.railway.app/
# Overview
The Federated Hospital System revolutionizes collaborative medical AI by enabling hospitals to contribute to machine learning models without exposing sensitive patient data. Using federated learning, each hospital trains models locally in their browser, and only encrypted model weights are shared—never the raw patient data.
🔬 Supported Disease Detections:

Diabetes Detection - HbA1c, glucose levels, BMI analysis
Heart Disease Detection - Cardiovascular risk assessment
Kidney Disease Detection - Renal function evaluation
Parkinson's Disease Detection - Neurological pattern recognition
Breast Cancer Detection - Tumor classification

# Project Metrics

**Overall Platform Stats:**
- **Disease Models:** 5
- **Average Accuracy:** 92.69%
- **Data Privacy:** 100%
- **Total Samples:** 140,071

## Model Performance Metrics

| Model | Accuracy (%) | Precision (%) | Recall (%) | F1-Score (%) | ROC-AUC (%) | Samples |
| --- | --- | --- | --- | --- | --- | --- |
| Diabetes Detection | 84.38 | 34.90 | 96.88 | 51.32 | 97.75 | 100,000 |
| Kidney Disease Detection | 97.50 | 100.00 | 93.33 | 96.55 | N/A | 20,000 |
| Parkinson's Disease Detection | 92.31 | 93.33 | 96.55 | 94.92 | 97.59 | 7,500 |
| Heart Disease Detection | 96.59 | 93.75 | 100.00 | 96.77 | 100.00 | 11,224 |
| Breast Cancer Detection | 89.47 | 95.45 | 87.50 | 91.30 | 96.51 | 1,346 |



# Key Features
## Privacy-First Architecture

Zero Data Sharing: All training happens in the browser using TensorFlow.js
Local Model Training: Patient data never leaves the hospital's computer
Encrypted Weight Exchange: Only model parameters are shared, not raw data
HIPAA-Compliant Design: Built with healthcare privacy regulations in mind

## Advanced AI Capabilities

Real-time Predictions: Instant disease risk assessment
Multi-Disease Detection: 5 different disease prediction models
Model Accuracy Tracking: Transparent accuracy metrics for each model
Federated Learning: Collaborative model improvement without data centralization

## Dual User Roles

Doctors: Access all disease detection services for patient diagnosis
Hospitals: Contribute training data to improve models collectively
Role-Based Navigation: Customized experience based on user type

## Professional Interface

Modern UI/UX: Clean, intuitive design with smooth animations
Responsive Design: Works seamlessly on desktop, tablet, and mobile
Real-Time Console: Live training logs and metrics visualization
Progress Tracking: Visual feedback during model training

## Training Features

CSV Data Upload: Easy dataset contribution via file upload
Data Validation: Automatic format and quality checks
Configurable Training: Adjustable epochs and hyperparameters
Live Metrics: Real-time loss, accuracy, and validation tracking
Training Console: Developer-friendly logs for debugging

# Strengths
1. Revolutionary Privacy Protection
Unlike traditional centralized ML systems, FHS ensures patient data never leaves the hospital. This solves one of healthcare's biggest challenges: data privacy vs. model accuracy.
2. Real-World Applicability
The system addresses actual pain points in medical AI:

Hospitals can't share patient data due to privacy laws
Individual hospitals have insufficient data for robust models
Collaborative learning without data centralization

3. Production-Ready Architecture

Modular, maintainable codebase
Separation of concerns (components, services, utilities)
Reusable CSS for consistent styling
Error handling and validation at every layer

4. User-Centric Design

Intuitive workflows for both doctors and hospitals
Clear visual feedback during all operations
Professional, trustworthy interface
Comprehensive guidance (requirements, sample formats)

5. Scalability & Extensibility

Easy to add new disease detection models
Pluggable architecture for different ML frameworks
RESTful API design for third-party integrations
Configurable training parameters

6. Transparency & Trust

Model accuracy displayed prominently
Live training logs visible to contributors
Data validation with detailed feedback
Privacy guarantees clearly communicated


# Impact & Significance
## Healthcare Impact

Democratizes AI in Healthcare: Small hospitals can benefit from collective intelligence
Accelerates Medical Research: Faster model improvements through collaboration
Improves Diagnostic Accuracy: More training data → better predictions
Reduces Healthcare Costs: Early detection prevents expensive treatments

## Technical Impact

Advances Federated Learning: Practical implementation of cutting-edge ML
Sets Privacy Standards: Model for future healthcare AI systems
Open Source Contribution: Can inspire similar privacy-preserving systems

## Social Impact

Protects Patient Privacy: Maintains trust in digital healthcare
Enables Cross-Border Collaboration: Hospitals globally can contribute
Bridges Data Inequality: Levels playing field for smaller healthcare providers


author :  Kartikeya Krishna Mishra
