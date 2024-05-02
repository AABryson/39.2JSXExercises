const App = () => {
//#no commas
    return(
        <div>
            <Tweet 
            username="username"
            name="name"
//#######################
//calls Date constructor function; chains .toDateString() method
            date={new Date().toDateString()}
            message="message"/>
            <Tweet 
            username="username"
            name="name"
            date={new Date().toDateString()}
            message="message"/>
            <Tweet 
            username="username"
            name="name"
            date={new Date().toDateString()}
            message="message"/>
        </div>
    );
}

