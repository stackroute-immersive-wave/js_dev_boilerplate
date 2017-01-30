<<<<<<< HEAD
=======

>>>>>>> 8beaed2d2b01076a5e69852e788e031d5d2ec80b
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

  stage 'Testing'
  sh "npm run test"
 
}
=======


  stage 'Linting'
  sh "npm run build"

  stage 'Testing'
  sh "npm run test"

}
>>>>>>> 8beaed2d2b01076a5e69852e788e031d5d2ec80b
