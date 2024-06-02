import { useState } from "react"
import data from "./data";
import "./style.css";


export default function Accordian() {
    const [selected, setSelected] = useState(null);
    function handleSinleSelection(getCurrentId){
        setSelected(getCurrentId == selected ? null: getCurrentId)
    }
    console.log(selected)
    return (
        <div className="acc-wrapper">
            <div className="accordian">
                {
                    data && data.length > 0 ? (
                        data.map((dataItem) => (
                            <div className="item">
                                <div className="title" onClick={()=>handleSinleSelection(dataItem.id)}>
                                    <div className="title-1">
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                    </div>
                                    <div>
                                        {
                                            selected == dataItem.id ? <div className="acc-content">{dataItem.answer}</div>:null
                                        }
                                        </div>
                                </div>
                            </div>
                        ))
                    )
                        : (<div>no data</div>)
                }
            </div>

        </div>
    )
}