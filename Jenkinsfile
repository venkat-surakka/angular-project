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
        bat 'ng serve'
      }
    }

  }
}