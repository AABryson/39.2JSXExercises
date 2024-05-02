const Person = (props) => {
//###########################?
    if(props.name.length > 8) {
        props.name = props.name.slice(5)
        }
//####################################
    let voteQuestion = props.age >= 18 ? "Please go vote" : "You cannot vote";
//############################a.b. see theirs
    let hobbies = props.hobbies.map(hob => {
        return <li>{hob}</li>
    })
    return (
        <div>
            <p>'Learn some information about this person'</p>
            
            <p>'Name:' {props.name} 'Age:' {props.age}</p>
                <h3>{voteQuestion}</h3>

            <ul>{hobbies}</ul>
              
        </div>

    )
}