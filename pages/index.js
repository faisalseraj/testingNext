import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to next js deployment on Aws. </h1>
      <h2>Next.js is a framework of react with all the built-in things in it</h2>
      <h2>My next step is to upload it to the aws server</h2>
      <h2>The next step is to connect to the database</h2>

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
