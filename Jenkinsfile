pipeline {
  agent any
  stages {
    stage('compile') {
      steps {
        bat 'npm install'
      }
    }

    stage('launch the app') {
      steps {
        sh 'npm run start'
      }
    }

  }
}