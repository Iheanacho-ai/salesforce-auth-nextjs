import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { sdk } from "../init";

const Dashboard = () => {
    const router = useRouter();
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const getUserSession = async () => {
        let response = await sdk.account.get()
        try {
            if(response) {
                setName(response.name);
                setEmail(response.email)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const logOutWithSalesforce = async () => {
        try {
            await sdk.account.deleteSession('current')
            alert('logout successful') 
            router.push('/');
        } catch (error) {
            console.log(error)  
        }
    }
    useEffect(() => {
        getUserSession()
    }, [])

    return (
        <div className="user-details">
        <p><span>Name:</span>{name}</p>
        <p><span>Email: </span>{email}</p>
        <button className= "button" onClick={logOutWithSalesforce}>LogOut with Salesforce</button>
      </div>
    )
}

export default Dashboard;