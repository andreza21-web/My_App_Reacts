const Events = () => {

    const handleMyEvent = () => {
        console.log('my event')
    };

    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando Isso!</h1>
        }else{
            return <h1>Também pode renderizar isso!</h1>
        }
    }

    return (<div>
        <button onClick={handleMyEvent} >Clique aqui</button>

        <div>
            <button onClick={() => { }}></button>
       
        {/* {renderSomething(true)}
        {renderSomething(false)} */}
        </div>


    </div>)
}

export default Events;