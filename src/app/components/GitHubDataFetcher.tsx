import GitHubDataViewer from './GitHubDataViewer';

const GitHubDataFetcher = () => {


    interface UserData {
        id: number
        login: string;
        avatar_url: string;
        url: string;
    }

  async function myCustomFetcher <T>(url:string, options?:RequestInit):Promise<T> {
        const response = await fetch(url,options);
        if(!response.ok){
            throw new Error(`Network Response Was Not Ok ${response.status}`)
        }
        const data = await response.json();
        console.log(data);
        return data;
    }



    const fetchUserData = (url:string) => {

        myCustomFetcher<UserData[]>(url, {})
    }
    // const fetchdata = async () =>{
    //     let data = await fetch("https://api.github.com/users")
    //     data = await data.json();
    //     console.log(data)
    // }
  return (
        <>
        {fetchUserData("https://api.github.com/users")}
        <GitHubDataViewer />
            {/* {fetchdata()} */}
        </>
)
}

export default GitHubDataFetcher