const Tweet = (props) => {
    //##############className
    return(
        <div>
            <p className="tweet">{props.username}</p>
            <p className="tweet">{props.name}</p>
            <p className="tweet">{props.date}</p> 
            <p className="tweet">{props.message}</p>

        </div>

    )

}