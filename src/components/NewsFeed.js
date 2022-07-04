import FeedTemplate from "./FeedTemplate"

const NewsFeed = ({postData}) => {
    return (
        <>             
            {
                postData.map((post) => (
                    <FeedTemplate key={post._id} postData={post} />
                ))
            }        
        </>
      )
}

export default NewsFeed