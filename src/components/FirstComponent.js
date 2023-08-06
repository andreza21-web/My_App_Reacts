// import Events from "./Events";

const FisrtComponent = () =>{

    const user = {
        name: 'Andreza',
        info: 'Desenvolvedora'
    }
    return ( <div>
        <h1>Meu primeiro component First Component</h1>
        <p>Dados do Usuario:</p>
        <p>{user.name}  e  {user.info}</p>
   {/* <Events/> */}
   
    </div>
    
    )
}

export default FisrtComponent;