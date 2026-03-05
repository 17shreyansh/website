module.exports = {
  apps: [{
    name: 'rsd-bharti',
    script: 'npx',
    args: 'serve@latest out -l 3000',
    cwd: '/var/www/website',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'production'
    }
  }]
}
