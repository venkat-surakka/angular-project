pipeline {
  agent any
  stages {
    stage('compile') {
      steps {
        sh 'bat "npm install"'
      }
    }

    stage('launch the app') {
      steps {
        sh 'npm run start'
      }
    }

  }
}