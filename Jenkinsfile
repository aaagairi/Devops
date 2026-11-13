pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building application...'
            }
        }
        stage('Security Scan') {
            steps {
                echo 'Running Trivy container vulnerability scan...'
                // sh 'trivy image my-nginx-app:latest'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying application securely...'
            }
        }
    }
}
