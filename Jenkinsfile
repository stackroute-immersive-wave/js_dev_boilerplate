
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


  stage 'Linting'
  sh "npm run build"

  stage 'Testing'
  sh "npm run test"

}

>>>>>>> 6a2af07c1b5e67519eda0beea0a3a71fde6840e6
