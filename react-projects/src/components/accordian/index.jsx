import { useState } from "react"
import data from "./data";
import "./style.css";


export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMulitiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])
    function handleSinleSelection(getCurrentId) {
        setSelected(getCurrentId == selected ? null : getCurrentId)
    }
    function handleMultiSelection(getCurrentId) {
        let cpyMutiple = [...multiple];
        const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

        console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
        else cpyMutiple.splice(findIndexOfCurrentId, 1);

        setMultiple(cpyMutiple);
    }
    console.log(multiple)
    return (
        <div className="acc-wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMulitiSelection)}>Enable multi selection</button>
            <div className="accordian">
                {
                    data && data.length > 0 ? (
                        data.map((dataItem) => (
                            <div className="item">
                                <div className="title" onClick={enableMulitiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSinleSelection(dataItem.id)}>
                                    <div className="title-1">
                                        <h3>{dataItem.question}</h3>
                                        <span>+</span>
                                    </div>
                                    <div>
                                        {selected === dataItem.id ||
                                            multiple.indexOf(dataItem.id) !== -1 ? (
                                            <div className="acc-content">{dataItem.answer}</div>
                                        ) : null}
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