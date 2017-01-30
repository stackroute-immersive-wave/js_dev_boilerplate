<<<<<<< HEAD
node {
  stage: 'Environment Variables'
  sh "env"

  stage 'Checkout Repository'
  git url: 'https://github.com/stackroute-immersive-wave/js_dev_boilerplate.git', branch: "${env.BRANCH_NAME}"

  stage 'Installing Dependencies'
  sh "npm prune"
  sh "npm install"

  stage 'Linting'
  sh "npm run build"

  stage 'Testing'
  sh "npm run test"

}
=======
node {
  stage: 'Environment Variables'
  sh "env"

  stage 'Checkout Repository'
  git url: 'https://github.com/stackroute-immersive-wave/js_dev_boilerplate.git', branch: "${env.BRANCH_NAME}"

  stage 'Installing Dependencies'
  sh "npm prune"
  sh "npm install"


  stage 'Linting'
  sh "npm run build"

  stage 'Testing'
  sh "npm run test"

}
>>>>>>> 016d234d8557bbb93bf0197eb8904a1125ffd1ed
