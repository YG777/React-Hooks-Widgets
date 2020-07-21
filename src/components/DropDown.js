import React , {useState, useEffect, useRef} from "react";

const DropDown = ({ dropDownOptions, selected, onSelectedChange }) => {
  const [dropDownOpen, setDropdownOpen] = useState(false);
  const ref = useRef();
    useEffect(()=> {
        const onBodyClick = (e)=> {
            if(ref.current.contains(e.target)){
                return;
            }
          setDropdownOpen(false);
        };

        document.body.addEventListener('click', onBodyClick);

        return () => document.body.removeEventListener('click', onBodyClick)
    }, [])

    const renderDropDown = dropDownOptions.map((option) => {
    if(option.value===selected.value){
        return null;
    }
   
    return (
      <div 
      key={option.value} 
      onClick={()=>{onSelectedChange(option)}}
      className="ui item"
      >
        <h3>{option.label}</h3>
      </div>
    );
  });
  
  return (
    <div 
    ref={ref}
    className="ui form">
      <div className="field">
        <label className="label">Select Color</label>
        <div onClick={()=>{setDropdownOpen(!dropDownOpen)}}
        className={`ui selection dropdown ${dropDownOpen?'visible active':''}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${dropDownOpen? `visible transition`:''}`}>
              {renderDropDown}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
