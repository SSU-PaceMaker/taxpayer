import React, { useState } from 'react';
import { Component } from 'react';
import Transfer from '../Transfer';


class Account extends React.Component{


    constructor(props){
        super(props);
      }


        render(){
            

            return(
        <div id="account">
                                    
            <div className="row py-3 justify-content-center">    
            <div className="account-card shadow justify-content-center col-md-12 bg-white">

                <div className="text-sm">{this.props.user}님의 계좌</div>
                <div className="text-center py-4" > <h1> $ {this.props.balance} </h1></div>
            
            <hr/>
            <div className="accordion" id="accordionExample">
              <div className="justify-content-center d-flex" id="headingOne">
                  
                  <div className="p-2"><button className="btn" type="button" data-toggle="collapse" data-target="#transfer" aria-expanded="true" aria-controls="collapseOne">
                        이체
                  </button>
</div>

<div className="p-2">
                  <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#bank_statement" aria-expanded="false" aria-controls="collapseTwo">
                        이용내역 
                  </button>
                  </div>
              </div>
             
    
                     <div id="transfer" className="collapse" aria-labelledby="transfer" data-parent="#accordionExample" >
                                <div ><Transfer user_lisrt={this.props.user_list}/></div>
                            </div>

                            <div id="bank_statement" className="collapse" aria-labelledby="bank_statement" data-parent="#accordionExample" >
                                <div >Placeholder content </div>
                            </div>

</div></div>
            </div>
            </div>
        )}

    


}

export default Account;

