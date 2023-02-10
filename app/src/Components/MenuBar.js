import React from "react";
import './MenuBar.css';

export default class MenuBar extends React.Component{

    render(){
        return (
            <div class="MenubarContainer">
                    <table class="Menubar">
                        <tr>
                            <th class="MenuItem"><button class="MenuItemButton"></button></th>
                            <th class="MenuItem"><button class="MenuItemButton"></button></th>
                            <th class="MenuItem"><button class="MenuItemButton"></button></th>
                            <th class="MenuItem"><button class="MenuItemButton"></button></th>
                        </tr>
                    </table>
            </div>
        )
    }
}