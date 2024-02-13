import PromptCard from "./PromptCard"

const PromptCardList = ({ data=[] }) => {
  return (
    <div className={`m-16 prompt_layout ${data.length > 0 ? '' : 'flex-center '}`}>
        {
            data.length > 0 ?  
            data.map((post) => (
                <PromptCard
                    key={post._id}
                    post={post}
                />
            )) : (
              <h2 className="text-center text-black font-satoshi text-2xl"><span className="orange_gradient">Nothing to display...</span></h2>
            )
        }
    </div>
  )
}

export default PromptCardList