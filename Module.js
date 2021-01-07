import React, { Component } from 'react';
// import React, {Comp} from 'react';
import Compo from './Components/Compo';
import logo from'./assets/images/logo.png';
// import {afficheTaf} from './Eventapp';


class Module extends Component {
    constructor() {
        super();
        this.state ={
            showMe:false,
            shoMe2:false,
            showMe3:false,
            showMe4:false,
            showMe5:false
        }
        this.state={
            isVisible:true,
            visibility:true,
            visibility2:true,
            visibility3:true,
            visibility4:true,
        }
      
    }
   
    afficherTaf()
    {
         this.setState({
                    showMe:!this.state.showMe,

         })
         this.setState({
            isVisible:!this.state.isVisible,
        })
        
    }
    afficherTaf2()
    {
         this.setState({
                    showMe2:!this.state.showMe2,
         })
         this.setState({visibility:!this.state.visibility,})
    }
    afficherTaf3()
    {
         this.setState({
                    showMe3:!this.state.showMe3
         })
         this.setState({visibility2:!this.state.visibility2})
    }
    afficherTaf4()
    {
         this.setState({
                    showMe4:!this.state.showMe4
         })
         this.setState({visibility3:!this.state.visibility3})
    }
    afficherTaf5()
    {
         this.setState({
                    showMe5:!this.state.showMe5
         })
         this.setState({visibility4:!this.state.visibility4})
    }
    

    render() {

        const contain = {
            display:"flex",
        }
        const items ={

        width:"100vw",
        display:"flex",
        justifyContent:"flex-end",
        flexWrap:"wrap",
        marginRight:"25px",
        marginTop:"10px",
        
        }
        const base ={
            margin:"5px",
           
        }
        const boutton ={
                        backgroundColor:"#336699",
                        border:"1px solid #336699",
                        color:"white",
                        height:"35px",
                        width:"150px",
                        borderRadius:"3px",
                        textTransform:"uppercase",
                       outline:"none",
        }
         const avatar ={
                marginLeft:"25px",
                marginTop:"10px",
         }
         const container_header_items ={
                    height:"200px",
                    backgroundColor:"#336699",
                    marginTop:"20px",
                    position:"relative",
         }
         const date ={

         }
         const date_item ={
             color:"white",
             marginLeft:"25px",
             marginTop:"30px",
         
         }
         const nom ={
             color:"white",
             fontSize:"25px",
             marginLeft:"25px",
         }
         const boar ={
             display:"flex",
             marginLeft:"25px",
             marginTop:"60px",
             
         }
         const boar_items ={
             margin:"8px",
             color:"white",
         }
         const tableau ={
                        borderBottom:"2px solid white",   
         }
         const validation_items ={
             color:"#336699",
             fontSize:"25px",
             marginLeft:"25px",
         }
         const date_session ={
            color:"#336699",
            marginLeft:"25px",
         }
         const name_formation ={
            color:"#336699",
            marginLeft:"25px",
            fontSize:"25px",
         }
         const modules ={
             height:"330px",
             backgroundColor:"#336699",
         }
         const module1={
                    display:"flex",
                    justifyContent:"space-between",
                    marginLeft:"25px",
                    marginRight:"25px",
                    padding:"5px"
         }
         const numero_module={
                   
         }
         const nom_module={

         }
          const statut_module={

          }
          const taf ={
              display:"flex",
              justifyContent:"space-between",
              marginLeft:"25px",
              marginRight:"25px",
          }
          const contain_taf ={
            visibility:"",
          }
           const para_taf ={
                    color:"white",
           }
           const taf_item ={
               color:"red",
           }
           const boutton_active_taf = {
               outline:"none",
           }

       

        return ( 
            <div className="container">

                                    <div className="container_header">
                                                <div className ="contain" style={contain}>


                                                        <div className="avatar" style={avatar}>
                                                            <img  className="logo_item"src={logo} width="90px"></img>
                                                        </div> 
                        
                                                    
                                                                <div className="items" style={items}>
                                                                                <div className="base" style={{...base, marginTop:"10px"}}>
                                                                                        image
                                                                                </div>
                                                                                <div className="base "style ={{...base, marginTop:"10px"}}>
                                                                                    CATEGORIES
                                                                                </div>
                                                                                <div className="base" style={base}>
                                                                                    <button className="boutton" style={boutton}> Nous contacter</button>
                                                                                </div>

                                                                </div>
                                                    
                                                </div>
                                         
                                                

                                    </div>
                                                    <div className="container_header_items" style={container_header_items}>
                                                        <h1 className="nom" style={nom}>Kingni boris</h1>
                       
                                                      <p className="date_item" style={date_item}>  Date d'inscription  08 sept 2020 -Dernier connexion il y'a 7 min</p>


                                                        <div className ="boar" style={boar}>
                                                                        <div id="boad1" className ="boad_items" style={boar_items}>
                                                                                    <p  id="boad1"className="tableau" style={tableau}>TABLEAU DE BORD</p>
                                                                        </div>
                                                                        <div  id ="boad2"className ="boad_items"style={boar_items}>
                                                                                   <p id="boad2"> PARAMETRES</p>
                                                                        </div>
                                                        </div>
                                                                
                                                   </div>

                                                 <div className="validation">
                                                            <h2 className="validation_items" style={validation_items}>Suivie de la validation</h2>
                                                            <p className="date_session" style={date_session}> 15juin-18decembre 2020</p>
                                                            <p className="name_formation" style={name_formation}>Photoshop</p>
                                                 </div>

                                                 <div className="modules" style={modules}>
                                                     {
                                                         this.state.visibility?
                                                         this.state.visibility2?
                                                         this.state.visibility3?
                                                         this.state.visibility4?

                                                                    <div className="module1" style={module1}>
                                                                                        <div className="numero_module" style={numero_module}>
                                                                                                        <p className="para_taf" style={para_taf}> Module 1</p>
                                                                                        </div>
                                                                                        < div className="numero_module" style={numero_module}>
                                                                                                       <p className="para_taf" style={para_taf}>Les calques</p>
                                                                                         </div>
                                                                                          <div className="numero_module" style={numero_module}>
                                                                                                            <p className="para_taf" style={para_taf}>Pend <button id ="boutton_active_taf" className="boutton_affiche_taf" style={boutton_active_taf} onClick={()=>this.afficherTaf()} ></button></p>
                                                                                        </div>
                                                                    </div>
                                                                    :null
                                                                    :null
                                                                    :null
                                                                    :null
                                                     }
                                                   {
                                                       this.state.showMe?
                                                       <div  className="contain_taf" style={contain_taf}>
                                                       <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                               <p className="taf_item" style={taf_item}> </p>
                                                                    <p > Taf 1</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Creation de qualque</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 2</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Renommer un calque</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 3</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Modifier un calque</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 4</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Sauvegarder un calque</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 5</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Supprimer un calque</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                         </div>
                                                  </div>
                                                  : null
                                                   }
                                                   {
                                                       this.state.isVisible?
                                                       this.state.visibility2?
                                                       this.state.visibility3?
                                                       this.state.visibility4?
                                                         <div className="module1" style={module1}>
                                                                                        <div className="numero_module" style={numero_module}>
                                                                                                        <p className="para_taf" style={para_taf}> Module 2</p>
                                                                                        </div>
                                                                                        < div className="numero_module" style={numero_module}>
                                                                                                       <p className="para_taf" style={para_taf}>Le montage photo</p>
                                                                                         </div>
                                                                                          <div className="numero_module" style={numero_module}>
                                                                                                            <p className="para_taf" style={para_taf}>Pend <button id ="boutton_active_taf" className="boutton_affiche_taf" style={boutton_active_taf} onClick={()=>this.afficherTaf2()} ></button></p>
                                                                                        </div>
                                                                    </div>
                                                            :null
                                                            :null
                                                            :null
                                                            :null
                                                     }
                                                   {
                                                       this.state.showMe2?
                                                       <div  className="contain_taf" style={contain_taf}>
                                                       <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                               <p className="taf_item" style={taf_item}> </p>
                                                                    <p > Taf 1</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Rogner une photo</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 2</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Modifier l'opacite</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 3</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Retirer l'arrier plan </p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 4</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Coller une photo</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 5</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Inverser une photo</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                         </div>
                                                  </div>
                                                  : null
                                                   }
                                                   {
                                                       
                                                       this.state.isVisible?
                                                       this.state.visibility?
                                                       this.state.visibility3?
                                                       this.state.visibility4?
                                                       
                                                   <div className="module1" style={module1}>
                                                                                        <div className="numero_module" style={numero_module}>
                                                                                                        <p className="para_taf" style={para_taf}> Module 3</p>
                                                                                        </div>
                                                                                        < div className="numero_module" style={numero_module}>
                                                                                                       <p className="para_taf" style={para_taf}>Le montage photo</p>
                                                                                         </div>
                                                                                          <div className="numero_module" style={numero_module}>
                                                                                                            <p className="para_taf" style={para_taf}>Pend <button id ="boutton_active_taf" className="boutton_affiche_taf" style={boutton_active_taf} onClick={()=>this.afficherTaf3()} ></button></p>
                                                                                        </div>
                                                                    </div>
                                                            :null
                                                            :null
                                                            :null
                                                            :null
                                                   }
                                                   {
                                                       this.state.showMe3?
                                                       <div  className="contain_taf" style={contain_taf}>
                                                       <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                               <p className="taf_item" style={taf_item}> </p>
                                                                    <p > Taf 1</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Rogner une photo</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 2</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Modifier l'opacite</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 3</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Retirer l'arrier plan </p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 4</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Coller une photo</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 5</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Inverser une photo</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                         </div>
                                                  </div>
                                                  : null
                                                   }
                                                   {
                                                       this.state.isVisible?
                                                       this.state.visibility?
                                                       this.state.visibility2?
                                                       this.state.visibility4?
                                                   <div className="module1" style={module1}>
                                                                                        <div className="numero_module" style={numero_module}>
                                                                                                        <p className="para_taf" style={para_taf}> Module 4</p>
                                                                                        </div>
                                                                                        < div className="numero_module" style={numero_module}>
                                                                                                       <p className="para_taf" style={para_taf}>Le montage photo</p>
                                                                                         </div>
                                                                                          <div className="numero_module" style={numero_module}>
                                                                                                            <p className="para_taf" style={para_taf}>Pend <button id ="boutton_active_taf" className="boutton_affiche_taf" style={boutton_active_taf} onClick={()=>this.afficherTaf4()} ></button></p>
                                                                                        </div>
                                                                    </div>
                                                                    :null
                                                                    :null
                                                                    :null
                                                                    :null
                                                                    }
                                                   {
                                                       this.state.showMe4?
                                                       <div  className="contain_taf" style={contain_taf}>
                                                       <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                               <p className="taf_item" style={taf_item}> </p>
                                                                    <p > Taf 1</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Rogner une photo</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 2</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Modifier l'opacite</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 3</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Retirer l'arrier plan </p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 4</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Coller une photo</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 5</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Inverser une photo</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                         </div>
                                                  </div>
                                                  : null
                                                   }
                                                   
                                                   {
                                                       this.state.isVisible?
                                                       this.state.visibility?
                                                       this.state.visibility2?
                                                       this.state.visibility3?
                                                   <div className="module1" style={module1}>
                                                                                        <div className="numero_module" style={numero_module}>
                                                                                                        <p className="para_taf" style={para_taf}> Module 5</p>
                                                                                        </div>
                                                                                        < div className="numero_module" style={numero_module}>
                                                                                                       <p className="para_taf" style={para_taf}>Le montage photo</p>
                                                                                         </div>
                                                                                          <div className="numero_module" style={numero_module}>
                                                                                                            <p className="para_taf" style={para_taf}>Pend <button id ="boutton_active_taf" className="boutton_affiche_taf" style={boutton_active_taf} onClick={()=>this.afficherTaf5()} ></button></p>
                                                                                        </div>
                                                                    </div>
                                                                    :null
                                                                    :null
                                                                    :null
                                                                    :null
                                                                    }
                                                   {
                                                       this.state.showMe5?
                                                       <div  className="contain_taf" style={contain_taf}>
                                                       <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                               <p className="taf_item" style={taf_item}> </p>
                                                                    <p > Taf 1</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Rogner une photo</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 2</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Modifier l'opacite</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 3</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Retirer l'arrier plan </p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 4</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Coller une photo</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 5</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Inverser une photo</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                         </div>
                                                  </div>
                                                  : null
                                                   }
                                                   
                                                   
                                                      

                                                                            
                                                 </div>
                                            

                                                
                               
             </div>

                   
                    
                    
                    
                     
                         
        );
    }
}

export default Module;
