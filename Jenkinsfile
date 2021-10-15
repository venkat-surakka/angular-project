pipeline {
  agent any
  stages {
    stage('stop iis') {
      steps {
        bat 'net stop W3svc'
      }
    }

    stage('build app') {
      steps {
        bat 'npm install'
      }
    }

    stage('publish') {
      steps {
        bat 'npm run prod'
      }
    }

    stage('publish') {
      steps {
        bat 'net start W3svc'
      }
    }

  }
}