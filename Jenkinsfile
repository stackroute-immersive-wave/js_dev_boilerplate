node {
  stage: 'Environment Variables'
  sh "env"

  stage 'Checkout Repository'
  git url: 'https://github.com/stackroute-immersive-wave/js_dev_boilerplate.git', branch: "${env.BRANCH_NAME}"

  stage 'Installing Dependencies'
  sh "npm prune"
  sh "npm install"

<<<<<<< HEAD
  /*stage 'Linting'
  sh "npm run build"*/
=======
  stage 'Linting'
  sh "npm run build"
>>>>>>> 6304e2d147324248d0009a539904732f6d42d448

  stage 'Testing'
  sh "npm run test"
 
}