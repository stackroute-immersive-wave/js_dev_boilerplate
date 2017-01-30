<<<<<<< HEAD
=======

>>>>>>> 6a2af07c1b5e67519eda0beea0a3a71fde6840e6
node {
  stage: 'Environment Variables'
  sh "env"

  stage 'Checkout Repository'
  git url: 'https://github.com/stackroute-immersive-wave/js_dev_boilerplate.git', branch: "${env.BRANCH_NAME}"

  stage 'Installing Dependencies'
  sh "npm prune"
  sh "npm install"

<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 6a2af07c1b5e67519eda0beea0a3a71fde6840e6
=======

>>>>>>> 32b07bbb0fd410c08ccb3478e5c10045736fc5a4
  stage 'Linting'
  sh "npm run build"

  stage 'Testing'
  sh "npm run test"
<<<<<<< HEAD
 
}
=======

}
<<<<<<< HEAD

>>>>>>> 6a2af07c1b5e67519eda0beea0a3a71fde6840e6
=======
>>>>>>> 32b07bbb0fd410c08ccb3478e5c10045736fc5a4
