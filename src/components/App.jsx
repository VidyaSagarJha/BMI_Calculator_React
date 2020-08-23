import React, { useState } from "react";

function App(){

    const [height, setHeight] = useState();
    const [weight, setweight] = useState();
    const [output, setOutput] = useState();
    const [measure, setMeasure] = useState();

    function updateHeight(event){
        const heightMeasure = event.target.value;
        setHeight(heightMeasure);
        
    }
    function updateWeight(event){
        const weightMeasure = event.target.value;
        setweight(weightMeasure);
    }

    function handleMeasure(event){
        const measureValue = event.target.value;
        setMeasure(measureValue);
        
    }
    function handleClick(event){

        setOutput(function(){
            if(measure === "meter" && (height>0 && height<2.36) && (weight>0 && weight<1000)){
                return (weight/(height*height)+"kg/m2");
            }
            else if(measure === "cm" && (height>0 && height<230) && (weight>0 && weight<1000)){
                return(weight/((height/100)*(height/100))+"kg/m2");

            }else if(measure === "inch" && (height>0 && height<92.91339) && (weight>0 && weight<1000)){
                return(weight/((height/39.3701)*(height/39.3701))+"kg/m2");

            }else{
                return "please select measurement also give correct height and weight "
            }
        });



        event.preventDefault();

    }



    return(
        <div className="container">
            <h1>BMI Calculator</h1>
            <form onSubmit={handleClick}>
                <input name="height" onChange={updateHeight} type="number" placeholder="enter height" value={height} />
                <div className="useflex">
                    <label  htmlFor="height">Choose Measuring Unit </label>

                        <select name="selectmeasure" onChange={handleMeasure} value={measure}>
                            <option >select</option>
                            <option >meter</option>
                            <option >cm</option>
                            <option >inch</option>

                        </select>
                </div>
                

                <input name="weight" onChange={updateWeight} type="number" placeholder="enter weight" value={weight} />
                <button type="submit">Calculate</button>
            </form>
            <h1>{output} </h1>
        </div>
    )


}

export default App;