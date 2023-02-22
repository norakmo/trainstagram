import React from "react";
import './MyWorkouts.css';



export default class MyWorkouts extends React.Component{
    
    

    changePage = (page) =>{
        if(page === "MySessions"){
            [].forEach.call(document.getElementsByClassName("MySessions"), (e) => e.style.visibility = "visible");
            [].forEach.call(document.getElementsByClassName("MyPrograms"), (e) => e.style.visibility = "hidden");
            console.log("switch to sessions");

        }else{
            [].forEach.call(document.getElementsByClassName("MySessions"), (e) => e.style.visibility = "hidden");
            [].forEach.call(document.getElementsByClassName("MyPrograms"), (e) => e.style.visibility = "visible");
            console.log("switch to programs");
        }
    }

    render(){
        return(
            <div>
                <div class="TopBar"></div>
                <div class="MyWorkoutsPage">
                    <div class="MyWorkoutsSelectionBar">
                        <button class="MySessionsButton" onClick={this.changePage("MySessions")}></button>
                        <button class="MyProgramsButton" onClick={this.changePage("MyPrograms")}></button>
                    </div>
                    {this.props.page}
                    <div class="MySesssions"> 
                        <div class="Session">
                            noe
                        </div>
                        <div class="Session">
                            noe
                        </div>
                        <div class="Session">
                            noe
                        </div>
                        <div class="Session">
                            noe
                        </div>
                        <div class="Session">
                            noe
                        </div>
                        <div class="Session">
                            noe
                        </div>
                        <div class="Session">
                            noe
                        </div>
                        <div class="Session">
                            noe
                        </div>
                        <div class="Session">
                            noe
                        </div>
                    </div>
                    <div class="MyPrograms"> afafasdf</div>
                </div>
            </div>
        )
    }
}