const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="name"/>
        </div>
    )
}

//#add RenderDOM to index.js
//ReactDOM.render(<App />, document.querySelector("#id"))