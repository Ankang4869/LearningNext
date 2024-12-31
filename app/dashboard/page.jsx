async function getData() {
  await new Promise((resolve) => {
    return setTimeout(resolve,3000)
  })
  return {
    message: "Hello, Dashboard!"
  }
}

const DashboardPage = async (props) => {
  const {message} = await getData()
  return <h1>{message}</h1>
}

export default DashboardPage;