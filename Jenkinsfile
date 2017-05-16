node {
  stage: 'Environment Variables'
  sh "env"

  stage 'Checkout Repository'
  git url: 'https://github.com/stackroute-immersive-wave/js_dev_boilerplate.git', branch:"js_dev_boilerplate_minimal_structure"

  stage 'Installing Dependencies'
  sh "npm prune"
  sh "npm install"

  stage 'Linting'
  sh "npm run build"

  stage 'Testing'
  sh "npm run test"

}
