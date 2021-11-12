import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to next js deployment on Aws. </h1>
      <h2>Next.js is a framework of react with all the built-in things in it</h2>
      <h2>My next step is to upload it to the aws server</h2>
      <h2>The next step is to connect to the database</h2>
      <pre>
        Ec2 Sertup
    <br />
        Chmod 400 “file-name.pem”
        <br />

        //login command for server
        <br />

        ssh -i "live-agents.pem" ubuntu@ec2-18-217-16-18.us-east-2.compute.amazonaws.com
        <br />

        //Upgrade the whole system
        sudo apt-get update && sudo apt-get upgrade -y
        <br />

        //Install ngnix

        sudo apt-get install nginx -y
        <br />

        //check engine x status

        sudo systemctl status nginx
        <br />

        //start nginx

        sudo systemctl start nginx
        <br />

        // system update/ install build essentials
        sudo apt-get update
        sudo apt-get install build-essential libssl-dev
        <br />

        //Install nvm and node

        cd ~
        curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.37.2/install.sh -o install_nvm.sh
        bash install_nvm.sh
        source ~/.profile
        nvm ls-remote
        <br />
        // To check latest nodejs stable version
        nvm install 14.16.1
        node -v
        npm -v
        <br />

        //download yarn

        curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
        echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
        sudo apt update
        sudo apt install yarn nodejs
        yarn –version
        <br />

        //Generate ssh

        create ssh first (Only on iniital setup)

        ssh-keygen
        Navigate to ssh folder

        cat id_rsa.pub
        <br />

        // we have to unlink the default site anable config and create our own new configs

        cd /etc/nginx/sites-enabled
        sudo unlink default
        cd /etc/nginx/conf.d
        sudo nano new_sites.conf
        <br />

        //Dafult server config object

        server 
          listen  80  default_server;
        server_name  captionexplore.com www.captionexplore.com;
        location /
        proxy_set_header X-Real-IP $remote_addr;
        proxy_pass http://127.0.0.1:5000;
        <br />


        //Test Config file
        sudo nginx -t
        <br />

      //reload nginx
      </pre>
      <style jsx>{`
        .container{
          margin: 'auto',
          border:'1px solid blue'
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
