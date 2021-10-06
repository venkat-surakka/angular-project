pipeline {
  agent any
  stages {
    stage('compile') {
      steps {
        sh 'cmd /c npm install'
      }
    }

    stage('launch the app') {
      steps {
        sh 'npm run start'
      }
    }

  }
}