import { sdk } from '../init' 
import styles from '../styles/Home.module.css'

const Home = () => {
  const loginWithSalesforce = async() => {
    try {
      await sdk.account.createOAuth2Session('salesforce', 'http://localhost:3000/dashboard', 'http://localhost:3000/error')
      console.log('account created')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className={styles.container}>
      <div class="login">
        <p>Click on this button to login</p>
        <button className= "button" onClick={loginWithSalesforce}>Login with Salesforce</button>
      </div>
    </div>
  )
}

export default Home;
